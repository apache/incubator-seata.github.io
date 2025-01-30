---
title: 如何使用Seata发送Rocketmq消息
keywords: [Seata, Rocketmq]
description: 这篇文章主要介绍了Seata如何整合Rocketmq发送消息
author: 张嘉伟 - Seata PPMC
date: 2024-10-15
---

## 需求背景

在分布式事务中，我们经常会遇到需要发送消息的场景，比如在订单支付成功后，需要发送消息通知库存服务减少库存。
但是如何确保本地事务和消息发送的一致性呢？这就需要使用分布式事务解决方案来解决这个问题。
Seata 作为一款开源的分布式事务解决方案，提供了对 RocketMQ 的支持，可以很方便的在分布式事务中发送消息。

## 方案设计
![img.png](/img/blog/how-to-send-message-with-rocketmq-in-seata/tcc-mode.png)

通过上图我们先回顾一下tcc的整体流程

1. 事务管理器（TM）发起全局事务
2. 资源管理器（RM）尝试执行prepare方法预留资源。同时向事务协调者(TC)注册分支事务
3. 若预留资源都成功，则事务管理器（TM）调用commit提交全局事务，事务协调者（TC）通知资源管理器（RM）提交分支事务
4. 若预留资源失败，则事务管理器（TM）调用rollback回滚全局事务，事务协调者（TC）通知资源管理器（RM）回滚分支事务

![img.png](/img/blog/how-to-send-message-with-rocketmq-in-seata/seata-rocketmq.png)

在了解完tcc整体流程之后，上面的图就不难理解了，Seata通过对RocketMQ Producer进行代理，实现了当业务代码需要发送消息时，
自动将普通消息，转换为RocketMQ的事务消息，从而保证了消息发送和分布式事务的一致性。

## 实现原理

```java
public class SeataMQProducerFactory {

  public static SeataMQProducer createSingle(String nameServer, String producerGroup) throws MQClientException {
    return createSingle(nameServer, null, producerGroup, null);
  }

  public static SeataMQProducer createSingle(String nameServer, String namespace,
                                             String groupName, RPCHook rpcHook) throws MQClientException {
      defaultProducer = new SeataMQProducer(namespace, groupName, rpcHook);
      defaultProducer.start();
      return defaultProducer;
  }
}
```
通过上述代码，我们可以看到 SeataMQProducerFactory 提供了创建 SeataMQProducer 的方法，通过调用 createSingle 方法，我们可以创建一个 SeataMQProducer 实例。

```java
@Override
public SendResult send(Message msg) throws MQClientException, MQBrokerException, RemotingException, InterruptedException {
  return send(msg, this.getSendMsgTimeout());
}

@Override
public SendResult send(Message msg, long timeout) throws MQClientException, MQBrokerException, RemotingException, InterruptedException {
  if (RootContext.inGlobalTransaction()) {
    if (tccRocketMQ == null) {
      throw new RuntimeException("TCCRocketMQ is not initialized");
    }
    return tccRocketMQ.prepare(msg, timeout);
  } else {
    return super.send(msg, timeout);
  }
}
```
通过上述代码，我们可以看到 SeataMQProducer 重写了 RocketMQ 的 send 方法，通过判断当前是否处于全局事务中，来决定是调用 RocketMQ 的 send 方法还是调用 TccRocketMQ 的 prepare 方法。
如果发送消息时，未参与全局事务，则降级为调用 RocketMQ 的 send 方法发送消息。

```java
@LocalTCC
public class TCCRocketMQImpl implements TCCRocketMQ {

  @Override
  @TwoPhaseBusinessAction(name = SeataMQProducerFactory.ROCKET_TCC_NAME)
  public SendResult prepare(Message message, long timeout) throws MQClientException {
    BusinessActionContext context = BusinessActionContextUtil.getContext();
    LOGGER.info("RocketMQ message send prepare, xid = {}", context.getXid());
    Map<String, Object> params = new HashMap<>(8);
    SendResult sendResult = producer.doSendMessageInTransaction(message, timeout, context.getXid(), context.getBranchId());
    message.setDeliverTimeMs(0);
    params.put(ROCKET_MSG_KEY, message);
    params.put(ROCKET_SEND_RESULT_KEY, sendResult);
    BusinessActionContextUtil.addContext(params);
    return sendResult;
  }

  @Override
  public boolean commit(BusinessActionContext context)
    throws UnknownHostException, MQBrokerException, RemotingException, InterruptedException, TimeoutException, TransactionException {
    Message message = context.getActionContext(ROCKET_MSG_KEY, Message.class);
    SendResult sendResult = context.getActionContext(ROCKET_SEND_RESULT_KEY, SendResult.class);
    if (message == null || sendResult == null) {
      throw new TransactionException("TCCRocketMQ commit but cannot find message and sendResult");
    }
    this.producerImpl.endTransaction(message, sendResult, LocalTransactionState.COMMIT_MESSAGE, null);
    LOGGER.info("RocketMQ message send commit, xid = {}, branchId = {}", context.getXid(), context.getBranchId());
    return true;
  }

  @Override
  public boolean rollback(BusinessActionContext context)
    throws UnknownHostException, MQBrokerException, RemotingException, InterruptedException, TransactionException {
    Message message = context.getActionContext(ROCKET_MSG_KEY, Message.class);
    SendResult sendResult = context.getActionContext(ROCKET_SEND_RESULT_KEY, SendResult.class);
    if (message == null || sendResult == null) {
      LOGGER.error("TCCRocketMQ rollback but cannot find message and sendResult");
    }
    this.producerImpl.endTransaction(message, sendResult, LocalTransactionState.ROLLBACK_MESSAGE, null);
    LOGGER.info("RocketMQ message send rollback, xid = {}, branchId = {}", context.getXid(), context.getBranchId());
    return true;
  }
}
```
可以看到TCCRocketMQImpl实现了TCCRocketMQ接口，同时使用了@LocalTCC和@TwoPhaseBusinessAction注解，
这表明了TCCRocketMQImpl也是一个TCC的分支事务，并通过prepare、commit、rollback方法实现了TCC事务的三个场景。

### prepare 方法
```java
@TwoPhaseBusinessAction(name = SeataMQProducerFactory.ROCKET_TCC_NAME)
public SendResult prepare(Message message, long timeout) throws MQClientException {
  BusinessActionContext context = BusinessActionContextUtil.getContext();
  LOGGER.info("RocketMQ message send prepare, xid = {}", context.getXid());
  Map<String, Object> params = new HashMap<>(8);
  SendResult sendResult = producer.doSendMessageInTransaction(message, timeout, context.getXid(), context.getBranchId());
  message.setDeliverTimeMs(0);
  params.put(ROCKET_MSG_KEY, message);
  params.put(ROCKET_SEND_RESULT_KEY, sendResult);
  BusinessActionContextUtil.addContext(params);
  return sendResult;
}
```
在 prepare 方法中，我们通过调用 producer.doSendMessageInTransaction 方法发送半事务消息，并将消息和发送结果保存到 BusinessActionContext 中。

### commit 方法
```java
@Override
public boolean commit(BusinessActionContext context)
  throws UnknownHostException, MQBrokerException, RemotingException, InterruptedException, TimeoutException, TransactionException {
  Message message = context.getActionContext(ROCKET_MSG_KEY, Message.class);
  SendResult sendResult = context.getActionContext(ROCKET_SEND_RESULT_KEY, SendResult.class);
  if (message == null || sendResult == null) {
    throw new TransactionException("TCCRocketMQ commit but cannot find message and sendResult");
  }
  this.producerImpl.endTransaction(message, sendResult, LocalTransactionState.COMMIT_MESSAGE, null);
  LOGGER.info("RocketMQ message send commit, xid = {}, branchId = {}", context.getXid(), context.getBranchId());
  return true;
}
```
在 commit 方法中，我们通过调用 producerImpl.endTransaction 方法提交事务消息。

### rollback 方法
```java
@Override
public boolean rollback(BusinessActionContext context)
  throws UnknownHostException, MQBrokerException, RemotingException, InterruptedException, TransactionException {
  Message message = context.getActionContext(ROCKET_MSG_KEY, Message.class);
  SendResult sendResult = context.getActionContext(ROCKET_SEND_RESULT_KEY, SendResult.class);
  if (message == null || sendResult == null) {
    LOGGER.error("TCCRocketMQ rollback but cannot find message and sendResult");
  }
  this.producerImpl.endTransaction(message, sendResult, LocalTransactionState.ROLLBACK_MESSAGE, null);
  LOGGER.info("RocketMQ message send rollback, xid = {}, branchId = {}", context.getXid(), context.getBranchId());
  return true;
}
```
在 rollback 方法中，我们通过调用 producerImpl.endTransaction 方法回滚事务消息。




