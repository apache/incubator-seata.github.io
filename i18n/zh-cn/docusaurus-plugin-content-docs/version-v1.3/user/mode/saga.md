---
title: Seata Saga 模式
keywords: [Seata, Saga]
description: Saga模式是SEATA提供的长事务解决方案，在Saga模式中，业务流程中每个参与者都提交本地事务，当出现某一个参与者失败则补偿前面已经成功的参与者，一阶段正向服务和二阶段补偿服务都由业务开发实现。
---

# Seata Saga 模式

## 概述

Saga 模式是 SEATA 提供的长事务解决方案，在 Saga 模式中，业务流程中每个参与者都提交本地事务，当出现某一个参与者失败则补偿前面已经成功的参与者，一阶段正向服务和二阶段补偿服务都由业务开发实现。

![Saga模式示意图](https://img.alicdn.com/tfs/TB1Y2kuw7T2gK0jSZFkXXcIQFXa-445-444.png)

理论基础：Hector & Kenneth 发表论⽂ Sagas （1987）

### 适用场景：

- 业务流程长、业务流程多
- 参与者包含其它公司或遗留系统服务，无法提供 TCC 模式要求的三个接口

### 优势：

- 一阶段提交本地事务，无锁，高性能
- 事件驱动架构，参与者可异步执行，高吞吐
- 补偿服务易于实现

### 缺点：

- 不保证隔离性（应对方案见后面文档）

### Saga 的实现：

#### 基于状态机引擎的 Saga 实现：

目前 SEATA 提供的 Saga 模式是基于状态机引擎来实现的，机制是：

1. 通过状态图来定义服务调用的流程并生成 json 状态语言定义文件
2. 状态图中一个节点可以是调用一个服务，节点可以配置它的补偿节点
3. 状态图 json 由状态机引擎驱动执行，当出现异常时状态引擎反向执行已成功节点对应的补偿节点将事务回滚
   > 注意: 异常发生时是否进行补偿也可由用户自定义决定
4. 可以实现服务编排需求，支持单项选择、并发、子流程、参数转换、参数映射、服务执行状态判断、异常捕获等功能

示例状态图:

![示例状态图](/img/saga/demo_statelang.png?raw=true)

## 快速开始

### Demo 简介

基于 dubbo 构建的微服务下，使用 Saga 模式演示分布式事务的提交和回滚；

业务流程图如下图所示：

![demo业务流程图](/img/saga/demo_business_process.png?raw=true)

先下载 seata-samples 工程：https://github.com/apache/incubator-seata-samples.git

> 注意 SEATA 版本需要 0.9.0 以上

在 dubbo-saga-sample 中一个分布式事务内会有 2 个 Saga 事务参与者，分别是: [InventoryAction](https://github.com/apache/incubator-seata-samples/blob/master/saga/dubbo-saga-sample/src/main/java/io/seata/samples/saga/action/InventoryAction.java) 和 [BalanceAction](https://github.com/apache/incubator-seata-samples/blob/master/saga/dubbo-saga-sample/src/main/java/io/seata/samples/saga/action/BalanceAction.java) ;分布式事务提交则两者均提交，分布式事务回滚则两者均回滚；

这 2 个 Saga 参与者均是 dubbo 服务，两个参与都有一个 reduce 方法，表示库存扣减或余额扣减，还有一个 compensateReduce 方法，表示补偿扣减操作。

- InventoryAction 接口定义如下：

```java
public interface InventoryAction {

    /**
     * reduce
     * @param businessKey
     * @param amount
     * @param params
     * @return
     */
    boolean reduce(String businessKey, BigDecimal amount, Map<String, Object> params);

    /**
     * compensateReduce
     * @param businessKey
     * @param params
     * @return
     */
    boolean compensateReduce(String businessKey, Map<String, Object> params);
}
```

- 这个场景用状态语言定义就是下面的 json：src/main/resources/statelang/reduce_inventory_and_balance.json

```json
{
  "Name": "reduceInventoryAndBalance",
  "Comment": "reduce inventory then reduce balance in a transaction",
  "StartState": "ReduceInventory",
  "Version": "0.0.1",
  "States": {
    "ReduceInventory": {
      "Type": "ServiceTask",
      "ServiceName": "inventoryAction",
      "ServiceMethod": "reduce",
      "CompensateState": "CompensateReduceInventory",
      "Next": "ChoiceState",
      "Input": ["$.[businessKey]", "$.[count]"],
      "Output": {
        "reduceInventoryResult": "$.#root"
      },
      "Status": {
        "#root == true": "SU",
        "#root == false": "FA",
        "$Exception{java.lang.Throwable}": "UN"
      }
    },
    "ChoiceState": {
      "Type": "Choice",
      "Choices": [
        {
          "Expression": "[reduceInventoryResult] == true",
          "Next": "ReduceBalance"
        }
      ],
      "Default": "Fail"
    },
    "ReduceBalance": {
      "Type": "ServiceTask",
      "ServiceName": "balanceAction",
      "ServiceMethod": "reduce",
      "CompensateState": "CompensateReduceBalance",
      "Input": [
        "$.[businessKey]",
        "$.[amount]",
        {
          "throwException": "$.[mockReduceBalanceFail]"
        }
      ],
      "Output": {
        "compensateReduceBalanceResult": "$.#root"
      },
      "Status": {
        "#root == true": "SU",
        "#root == false": "FA",
        "$Exception{java.lang.Throwable}": "UN"
      },
      "Catch": [
        {
          "Exceptions": ["java.lang.Throwable"],
          "Next": "CompensationTrigger"
        }
      ],
      "Next": "Succeed"
    },
    "CompensateReduceInventory": {
      "Type": "ServiceTask",
      "ServiceName": "inventoryAction",
      "ServiceMethod": "compensateReduce",
      "Input": ["$.[businessKey]"]
    },
    "CompensateReduceBalance": {
      "Type": "ServiceTask",
      "ServiceName": "balanceAction",
      "ServiceMethod": "compensateReduce",
      "Input": ["$.[businessKey]"]
    },
    "CompensationTrigger": {
      "Type": "CompensationTrigger",
      "Next": "Fail"
    },
    "Succeed": {
      "Type": "Succeed"
    },
    "Fail": {
      "Type": "Fail",
      "ErrorCode": "PURCHASE_FAILED",
      "Message": "purchase failed"
    }
  }
}
```

该 json 表示的状态图:

![该json表示的状态图](/img/saga/demo_statelang.png?raw=true)

状态语言在一定程度上参考了[AWS Step Functions](https://docs.aws.amazon.com/zh_cn/step-functions/latest/dg/tutorial-creating-lambda-state-machine.html)

#### "状态机" 属性简介:

- Name: 表示状态机的名称，必须唯一
- Comment: 状态机的描述
- Version: 状态机定义版本
- StartState: 启动时运行的第一个"状态"
- States: 状态列表，是一个 map 结构，key 是"状态"的名称，在状态机内必须唯一
- IsRetryPersistModeUpdate: 向前重试时, 日志是否基于上次失败日志进行更新
- IsCompensatePersistModeUpdate: 向后补偿重试时, 日志是否基于上次补偿日志进行更新

#### "状态" 属性简介:

- Type: "状态" 的类型，比如有:
  - ServiceTask: 执行调用服务任务
  - Choice: 单条件选择路由
  - CompensationTrigger: 触发补偿流程
  - Succeed: 状态机正常结束
  - Fail: 状态机异常结束
  - SubStateMachine: 调用子状态机
  - CompensateSubMachine: 用于补偿一个子状态机
- ServiceName: 服务名称，通常是服务的 beanId
- ServiceMethod: 服务方法名称
- CompensateState: 该"状态"的补偿"状态"
- Loop: 标识该事务节点是否为循环事务, 即由框架本身根据循环属性的配置, 遍历集合元素对该事务节点进行循环执行
- Input: 调用服务的输入参数列表, 是一个数组, 对应于服务方法的参数列表, $.表示使用表达式从状态机上下文中取参数，表达使用的[SpringEL](https://docs.spring.io/spring/docs/4.3.10.RELEASE/spring-framework-reference/html/expressions.html), 如果是常量直接写值即可
- Ouput: 将服务返回的参数赋值到状态机上下文中, 是一个 map 结构，key 为放入到状态机上文时的 key（状态机上下文也是一个 map），value 中$.是表示 SpringEL 表达式，表示从服务的返回参数中取值，#root 表示服务的整个返回参数
- Status: 服务执行状态映射，框架定义了三个状态，SU 成功、FA 失败、UN 未知, 我们需要把服务执行的状态映射成这三个状态，帮助框架判断整个事务的一致性，是一个 map 结构，key 是条件表达式，一般是取服务的返回值或抛出的异常进行判断，默认是 SpringEL 表达式判断服务返回参数，带$Exception\{开头表示判断异常类型。value 是当这个条件表达式成立时则将服务执行状态映射成这个值
- Catch: 捕获到异常后的路由
- Next: 服务执行完成后下一个执行的"状态"
- Choices: Choice 类型的"状态"里, 可选的分支列表, 分支中的 Expression 为 SpringEL 表达式, Next 为当表达式成立时执行的下一个"状态"
- ErrorCode: Fail 类型"状态"的错误码
- Message: Fail 类型"状态"的错误信息

更多详细的状态语言解释请看[State language reference](#state-language-reference)章节

更多详细的状态语言使用示例见[https://github.com/apache/incubator-seata/tree/develop/test/src/test/java/io/seata/saga/engine](https://github.com/apache/incubator-seata/tree/develop/test/src/test/java/io/seata/saga/engine)

### Demo 运行指南

#### step 1 启动 SEATA Server

运行 [SeataServerStarter](https://github.com/apache/incubator-seata-samples/blob/master/saga/sofarpc-saga-sample/src/test/java/io/seata/samples/saga/SeataServerStarter.java) ，启动 Seata Server；

#### step 2 启动 dubbo provider Demo

运行 [DubboSagaProviderStarter](https://github.com/apache/incubator-seata-samples/blob/master/saga/dubbo-saga-sample/src/test/java/io/seata/samples/saga/starter/DubboSagaProviderStarter.java) ，启动 dubbo provider；

#### step 3 启动 Saga Demo

运行 [DubboSagaTransactionStarter](https://github.com/apache/incubator-seata-samples/blob/master/saga/dubbo-saga-sample/src/main/java/io/seata/samples/saga/starter/DubboSagaTransactionStarter.java) , 启动 demo 工程；

> Demo 中的数据库使用的是 H2 内存数据库, 生产上建议使用与业务相同的库, 目前支持 Oracle, Mysql, DB2. 建表语句在 [https://github.com/apache/incubator-seata/tree/develop/saga/seata-saga-engine-store/src/main/resources/sql](https://github.com/apache/incubator-seata/tree/develop/saga/seata-saga-engine-store/src/main/resources/sql)

> Demo 中还有调用本地服务和调用 SOFA RPC 服务的示例

## 状态机设计器

<a href="/saga-designer/" target="_blank">在线访问</a>

Seata Saga 提供了一个可视化的状态机设计器方便用户使用，代码和运行指南请参考：
[https://github.com/apache/incubator-seata/tree/refactor_designer/saga/seata-saga-statemachine-designer](https://github.com/apache/incubator-seata/tree/refactor_designer/saga/seata-saga-statemachine-designer)

状态机设计器截图:
![状态机设计器](/img/saga/seata-saga-statemachine-designer.png?raw=true)

<!-- 状态机设计器演示地址:[http://seata.io/saga_designer/index.html](./saga_designer/index.html)

状态机设计器视频教程:[http://seata.io/saga_designer/video.html](/docs/user/saga_designer/vedio) -->

## 最佳实践

### Saga 服务设计的实践经验

#### 允许空补偿

- 空补偿：原服务未执行，补偿服务执行了
- 出现原因：
  - 原服务 超时（丢包）
  - Saga 事务触发 回滚
  - 未收到 原服务请求，先收到 补偿请求

所以服务设计时需要允许空补偿, 即没有找到要补偿的业务主键时返回补偿成功并将原业务主键记录下来

#### 防悬挂控制

- 悬挂：补偿服务 比 原服务 先执行
- 出现原因：
  - 原服务 超时（拥堵）
  - Saga 事务回滚，触发 回滚
  - 拥堵的 原服务 到达

所以要检查当前业务主键是否已经在空补偿记录下来的业务主键中存在，如果存在则要拒绝服务的执行

#### 幂等控制

- 原服务与补偿服务都需要保证幂等性, 由于网络可能超时, 可以设置重试策略，重试发生时要通过幂等控制避免业务数据重复更新

### 缺乏隔离性的应对

- 由于 Saga 事务不保证隔离性, 在极端情况下可能由于脏写无法完成回滚操作, 比如举一个极端的例子, 分布式事务内先给用户 A 充值, 然后给用户 B 扣减余额, 如果在给 A 用户充值成功, 在事务提交以前, A 用户把余额消费掉了, 如果事务发生回滚, 这时则没有办法进行补偿了。这就是缺乏隔离性造成的典型的问题, 实践中一般的应对方法是：
  - 业务流程设计时遵循“宁可长款, 不可短款”的原则, 长款意思是客户少了钱机构多了钱, 以机构信誉可以给客户退款, 反之则是短款, 少的钱可能追不回来了。所以在业务流程设计上一定是先扣款。
  - 有些业务场景可以允许让业务最终成功, 在回滚不了的情况下可以继续重试完成后面的流程, 所以状态机引擎除了提供“回滚”能力还需要提供“向前”恢复上下文继续执行的能力, 让业务最终执行成功, 达到最终一致性的目的。

### 性能优化

- 配置客户端参数`client.rm.report.success.enable=false`，可以在当分支事务执行成功时不上报分支状态到 server，从而提升性能。
  > 当上一个分支事务的状态还没有上报的时候，下一个分支事务已注册，可以认为上一个实际已成功

## API referance

#### StateMachineEngine API

```java
public interface StateMachineEngine {

    /**
     * start a state machine instance
     * @param stateMachineName
     * @param tenantId
     * @param startParams
     * @return
     * @throws EngineExecutionException
     */
    StateMachineInstance start(String stateMachineName, String tenantId, Map<String, Object> startParams) throws EngineExecutionException;

    /**
     * start a state machine instance with businessKey
     * @param stateMachineName
     * @param tenantId
     * @param businessKey
     * @param startParams
     * @return
     * @throws EngineExecutionException
     */
    StateMachineInstance startWithBusinessKey(String stateMachineName, String tenantId, String businessKey, Map<String, Object> startParams) throws EngineExecutionException;

    /**
     * start a state machine instance asynchronously
     * @param stateMachineName
     * @param tenantId
     * @param startParams
     * @param callback
     * @return
     * @throws EngineExecutionException
     */
    StateMachineInstance startAsync(String stateMachineName, String tenantId, Map<String, Object> startParams, AsyncCallback callback) throws EngineExecutionException;

    /**
     * start a state machine instance asynchronously with businessKey
     * @param stateMachineName
     * @param tenantId
     * @param businessKey
     * @param startParams
     * @param callback
     * @return
     * @throws EngineExecutionException
     */
    StateMachineInstance startWithBusinessKeyAsync(String stateMachineName, String tenantId, String businessKey, Map<String, Object> startParams, AsyncCallback callback) throws EngineExecutionException;

    /**
     * forward restart a failed state machine instance
     * @param stateMachineInstId
     * @param replaceParams
     * @return
     * @throws ForwardInvalidException
     */
    StateMachineInstance forward(String stateMachineInstId, Map<String, Object> replaceParams) throws ForwardInvalidException;

    /**
     * forward restart a failed state machine instance asynchronously
     * @param stateMachineInstId
     * @param replaceParams
     * @param callback
     * @return
     * @throws ForwardInvalidException
     */
    StateMachineInstance forwardAsync(String stateMachineInstId, Map<String, Object> replaceParams, AsyncCallback callback) throws ForwardInvalidException;

    /**
     * compensate a state machine instance
     * @param stateMachineInstId
     * @param replaceParams
     * @return
     * @throws EngineExecutionException
     */
    StateMachineInstance compensate(String stateMachineInstId, Map<String, Object> replaceParams) throws EngineExecutionException;

    /**
     * compensate a state machine instance asynchronously
     * @param stateMachineInstId
     * @param replaceParams
     * @param callback
     * @return
     * @throws EngineExecutionException
     */
    StateMachineInstance compensateAsync(String stateMachineInstId, Map<String, Object> replaceParams, AsyncCallback callback) throws EngineExecutionException;

    /**
     * skip current failed state instance and forward restart state machine instance
     * @param stateMachineInstId
     * @return
     * @throws EngineExecutionException
     */
    StateMachineInstance skipAndForward(String stateMachineInstId) throws EngineExecutionException;

    /**
     * skip current failed state instance and forward restart state machine instance asynchronously
     * @param stateMachineInstId
     * @param callback
     * @return
     * @throws EngineExecutionException
     */
    StateMachineInstance skipAndForwardAsync(String stateMachineInstId, AsyncCallback callback) throws EngineExecutionException;

    /**
     * get state machine configurations
     * @return
     */
    StateMachineConfig getStateMachineConfig();
}
```

#### StateMachine Execution Instance API:

```java
StateLogRepository stateLogRepository = stateMachineEngine.getStateMachineConfig().getStateLogRepository();
StateMachineInstance stateMachineInstance = stateLogRepository.getStateMachineInstanceByBusinessKey(businessKey, tenantId);

/**
 * State Log Repository
 *
 * @author lorne.cl
 */
public interface StateLogRepository {

    /**
     * Get state machine instance
     *
     * @param stateMachineInstanceId
     * @return
     */
    StateMachineInstance getStateMachineInstance(String stateMachineInstanceId);

    /**
     * Get state machine instance by businessKey
     *
     * @param businessKey
     * @param tenantId
     * @return
     */
    StateMachineInstance getStateMachineInstanceByBusinessKey(String businessKey, String tenantId);

    /**
     * Query the list of state machine instances by parent id
     *
     * @param parentId
     * @return
     */
    List<StateMachineInstance> queryStateMachineInstanceByParentId(String parentId);

    /**
     * Get state instance
     *
     * @param stateInstanceId
     * @param machineInstId
     * @return
     */
    StateInstance getStateInstance(String stateInstanceId, String machineInstId);

    /**
     * Get a list of state instances by state machine instance id
     *
     * @param stateMachineInstanceId
     * @return
     */
    List<StateInstance> queryStateInstanceListByMachineInstanceId(String stateMachineInstanceId);
}
```

#### StateMachine Definition API:

```java
StateMachineRepository stateMachineRepository = stateMachineEngine.getStateMachineConfig().getStateMachineRepository();
StateMachine stateMachine = stateMachineRepository.getStateMachine(stateMachineName, tenantId);

/**
 * StateMachineRepository
 *
 * @author lorne.cl
 */
public interface StateMachineRepository {

    /**
     * Gets get state machine by id.
     *
     * @param stateMachineId the state machine id
     * @return the get state machine by id
     */
    StateMachine getStateMachineById(String stateMachineId);

    /**
     * Gets get state machine.
     *
     * @param stateMachineName the state machine name
     * @param tenantId         the tenant id
     * @return the get state machine
     */
    StateMachine getStateMachine(String stateMachineName, String tenantId);

    /**
     * Gets get state machine.
     *
     * @param stateMachineName the state machine name
     * @param tenantId         the tenant id
     * @param version          the version
     * @return the get state machine
     */
    StateMachine getStateMachine(String stateMachineName, String tenantId, String version);

    /**
     * Register the state machine to the repository (if the same version already exists, return the existing version)
     *
     * @param stateMachine
     */
    StateMachine registryStateMachine(StateMachine stateMachine);

    /**
     * registry by resources
     *
     * @param resources
     * @param tenantId
     */
    void registryByResources(Resource[] resources, String tenantId) throws IOException;
}
```

## Config referance

#### 在 Spring Bean 配置文件中配置一个 StateMachineEngine

```xml
<bean id="dataSource" class="...">
...
<bean>
<bean id="stateMachineEngine" class="io.seata.saga.engine.impl.ProcessCtrlStateMachineEngine">
        <property name="stateMachineConfig" ref="dbStateMachineConfig"></property>
</bean>
<bean id="dbStateMachineConfig" class="io.seata.saga.engine.config.DbStateMachineConfig">
    <property name="dataSource" ref="dataSource" />
    <property name="resources" value="statelang/*.json" />
    <property name="enableAsync" value="true" />
    <!-- 事件驱动执行时使用的线程池, 如果所有状态机都同步执行且不存在循环任务可以不需要 -->
    <property name="threadPoolExecutor" ref="threadExecutor" />
    <property name="applicationId" value="saga_sample" />
    <property name="txServiceGroup" value="my_test_tx_group" />
    <property name="sagaBranchRegisterEnable" value="false" />
    <property name="sagaJsonParser" value="fastjson" />
    <property name="sagaRetryPersistModeUpdate" value="false" />
    <property name="sagaCompensatePersistModeUpdate" value="false" />
</bean>
<bean id="threadExecutor"
        class="org.springframework.scheduling.concurrent.ThreadPoolExecutorFactoryBean">
    <property name="threadNamePrefix" value="SAGA_ASYNC_EXE_" />
    <property name="corePoolSize" value="1" />
    <property name="maxPoolSize" value="20" />
</bean>

<!-- Seata Server进行事务恢复时需要通过这个Holder拿到stateMachineEngine实例 -->
<bean class="io.seata.saga.rm.StateMachineEngineHolder">
    <property name="stateMachineEngine" ref="stateMachineEngine"/>
</bean>
```

## State language reference

### "状态机"的属性列表

```json
{
  "Name": "reduceInventoryAndBalance",
  "Comment": "reduce inventory then reduce balance in a transaction",
  "StartState": "ReduceInventory",
  "Version": "0.0.1",
  "States": {},
  "IsRetryPersistModeUpdate": false,
  "IsCompensatePersistModeUpdate": false
}
```

- Name: 表示状态机的名称，必须唯一
- Comment: 状态机的描述
- Version: 状态机定义版本
- StartState: 启动时运行的第一个"状态"
- States: 状态列表，是一个 map 结构，key 是"状态"的名称，在状态机内必须唯一, value 是一个 map 结构表示"状态"的属性列表
- IsRetryPersistModeUpdate: 向前重试时, 日志是否基于上次失败日志进行更新, 默认是 false, 即新增一条重试日志 (优先级高于全局 stateMachineConfig 配置属性)
- IsCompensatePersistModeUpdate: 向后补偿重试时, 日志是否基于上次补偿日志进行更新, 默认是 false, 即新增一条补偿日志 (优先级高于全局 stateMachineConfig 配置属性)

### 各种"状态"的属性列表

#### ServiceTask:

```json
"States": {
    ...
    "ReduceBalance": {
        "Type": "ServiceTask",
        "ServiceName": "balanceAction",
        "ServiceMethod": "reduce",
        "CompensateState": "CompensateReduceBalance",
        "IsForUpdate": true,
        "IsPersist": true,
        "IsAsync": false,
        "IsRetryPersistModeUpdate": false,
        "IsCompensatePersistModeUpdate": false,
        "Loop": {
            "Parallel": 3,
            "Collection": "$.[collection]",
            "ElementVariableName": "element",
            "ElementIndexName": "loopCounter",
            "CompletionCondition": "[nrOfCompletedInstances] / [nrOfInstances] >= 0.6"
        },
        "Input": [
            "$.[businessKey]",
            "$.[amount]",
            {
                "loopCounter": "$.[loopCounter]",
                "element": "$.[element]",
                "throwException" : "$.[mockReduceBalanceFail]"
            }
        ],
        "Output": {
            "compensateReduceBalanceResult": "$.#root"
        },
        "Status": {
            "#root == true": "SU",
            "#root == false": "FA",
            "$Exception{java.lang.Throwable}": "UN"
        },
        "Retry": [
            {
                "Exceptions": ["io.seata.saga.engine.mock.DemoException"],
                "IntervalSeconds": 1.5,
                "MaxAttempts": 3,
                "BackoffRate": 1.5
            },
            {
                "IntervalSeconds": 1,
                "MaxAttempts": 3,
                "BackoffRate": 1.5
            }
        ],
        "Catch": [
            {
                "Exceptions": [
                    "java.lang.Throwable"
                ],
                "Next": "CompensationTrigger"
            }
        ],
        "Next": "Succeed"
    }
    ...
}
```

- ServiceName: 服务名称，通常是服务的 beanId
- ServiceMethod: 服务方法名称
- CompensateState: 该"状态"的补偿"状态"
- IsForUpdate: 标识该服务会更新数据, 默认是 false, 如果配置了 CompensateState 则默认是 true, 有补偿服务的服务肯定是数据更新类服务
- IsPersist: 执行日志是否进行存储, 默认是 true, 有一些查询类的服务可以配置为 false, 执行日志不进行存储提高性能, 因为当异常恢复时可以重复执行
- IsAsync: 异步调用服务, 注意: 因为异步调用服务会忽略服务的返回结果, 所以用户定义的服务执行状态映射(下面的 Status 属性)将被忽略, 默认为服务调用成功, 如果提交异步调用就失败(比如线程池已满)则为服务执行状态为失败
- IsRetryPersistModeUpdate: 向前重试时, 日志是否基于上次失败日志进行更新, 默认是 false, 即新增一条重试日志 (优先级高于状态机属性配置)
- IsCompensatePersistModeUpdate: 向后补偿重试时, 日志是否基于上次补偿日志进行更新, 默认是 false, 即新增一条补偿日志 (优先级高于状态机属性配置)
- Loop: 标识该事务节点是否为循环事务, 即由框架本身根据循环属性的配置, 遍历集合元素对该事务节点进行循环执行. 具体使用见: [Loop 循环事务使用](#loop-循环事务使用)
- Input: 调用服务的输入参数列表, 是一个数组, 对应于服务方法的参数列表, $.表示使用表达式从状态机上下文中取参数，表达使用的[SpringEL](https://docs.spring.io/spring/docs/4.3.10.RELEASE/spring-framework-reference/html/expressions.html), 如果是常量直接写值即可。复杂的参数如何传入见:[复杂参数的 Input 定义](#复杂参数的-input-定义)
- Output: 将服务返回的参数赋值到状态机上下文中, 是一个 map 结构，key 为放入到状态机上文时的 key（状态机上下文也是一个 map），value 中$.是表示 SpringEL 表达式，表示从服务的返回参数中取值，#root 表示服务的整个返回参数
- Status: 服务执行状态映射，框架定义了三个状态，SU 成功、FA 失败、UN 未知, 我们需要把服务执行的状态映射成这三个状态，帮助框架判断整个事务的一致性，是一个 map 结构，key 是条件表达式，一般是取服务的返回值或抛出的异常进行判断，默认是 SpringEL 表达式判断服务返回参数，带$Exception\{开头表示判断异常类型。value 是当这个条件表达式成立时则将服务执行状态映射成这个值
- Catch: 捕获到异常后的路由
- Retry: 捕获异常后的重试策略, 是个数组可以配置多个规则, `Exceptions` 为匹配的的异常列表, `IntervalSeconds` 为重试间隔, `MaxAttempts` 为最大重试次数, `BackoffRate` 下一次重试间隔相对于上一次重试间隔的倍数，比如说上次一重试间隔是 2 秒, `BackoffRate=1.5` 则下一次重试间隔是 3 秒。`Exceptions` 属性可以不配置, 不配置时表示框架自动匹配网络超时异常。当在重试过程中发生了别的异常，框架会重新匹配规则，并按新规则进行重试，同一种规则的总重试次数不会超过该规则的`MaxAttempts`
- Next: 服务执行完成后下一个执行的"状态"

> 当没有配置 Status 对服务执行状态进行映射, 系统会自动判断状态:
>
> - 没有异常则认为执行成功,
> - 如果有异常, 则判断异常是不是网路连接超时, 如果是则认为是 FA
> - 如果是其它异常, 服务 IsForUpdate=true 则状态为 UN, 否则为 FA

> 整个状态机的执行状态如何判断？是由框架自己判断的, 状态机有两个状态: status(正向执行状态), compensateStatus(补偿状态)：
>
> - 如果所有服务执行成功（事务提交成功）则 status=SU, compensateStatus=null
> - 如果有服务执行失败且存在更新类服务执行成功且没有进行补偿（事务提交失败） 则 status=UN, compensateStatus=null
> - 如果有服务执行失败且不存在更新类服务执行成功且没有进行补偿（事务提交失败） 则 status=FA, compensateStatus=null
> - 如果补偿成功（事务回滚成功）则 status=FA/UN, compensateStatus=SU
> - 发生补偿且有未补偿成功的服务（回滚失败）则 status=FA/UN, compensateStatus=UN
> - 存在事务提交或回滚失败的情况 Seata Sever 都会不断发起重试

#### Choice:

```json
"ChoiceState":{
    "Type": "Choice",
    "Choices":[
        {
            "Expression":"[reduceInventoryResult] == true",
            "Next":"ReduceBalance"
        }
    ],
    "Default":"Fail"
}
```

Choice 类型的"状态"是单项选择路由
Choices: 可选的分支列表, 只会选择第一个条件成立的分支
Expression: SpringEL 表达式
Next: 当 Expression 表达式成立时执行的下一个"状态"

#### Succeed:

```json
"Succeed": {
    "Type":"Succeed"
}
```

运行到"Succeed 状态"表示状态机正常结束, 正常结束不代表成功结束, 是否成功要看每个"状态"是否都成功

#### Fail:

```json
"Fail": {
    "Type":"Fail",
    "ErrorCode": "PURCHASE_FAILED",
    "Message": "purchase failed"
}
```

运行到"Fail 状态"状态机异常结束, 异常结束时可以配置 ErrorCode 和 Message, 表示错误码和错误信息, 可以用于给调用方返回错误码和消息

#### CompensationTrigger:

```json
"CompensationTrigger": {
    "Type": "CompensationTrigger",
    "Next": "Fail"
}
```

CompensationTrigger 类型的 state 是用于触发补偿事件, 回滚分布式事务
Next: 补偿成功后路由到的 state

#### SubStateMachine:

```json
"CallSubStateMachine": {
    "Type": "SubStateMachine",
    "StateMachineName": "simpleCompensationStateMachine",
    "CompensateState": "CompensateSubMachine",
    "IsRetryPersistModeUpdate": false,
    "IsCompensatePersistModeUpdate": false,
    "Input": [
        {
            "a": "$.1",
            "barThrowException": "$.[barThrowException]",
            "fooThrowException": "$.[fooThrowException]",
            "compensateFooThrowException": "$.[compensateFooThrowException]"
        }
    ],
    "Output": {
        "fooResult": "$.#root"
    },
    "Next": "Succeed"
}
```

SubStateMachine 类型的"状态"是调用子状态机
StateMachineName: 要调用的子状态机名称
CompensateState: 子状态机的补偿 state, 可以不配置, 系统会自动创建它的补偿 state, 子状态机的补偿实际就是调用子状态机的 compensate 方法, 所以用户并不需要自己实现一个对子状态机的补偿服务。当配置这个属性时, 可以里利用 Input 属性自定义传入一些变量, 见下面的 CompensateSubMachine

#### CompensateSubMachine:

```json
"CompensateSubMachine": {
    "Type": "CompensateSubMachine",
    "Input": [
        {
            "compensateFooThrowException": "$.[compensateFooThrowException]"
        }
    ]
}
```

CompensateSubMachine 类型的 state 是专门用于补偿一个子状态机的 state，它会调用子状态机的 compensate 方法，可以利用 Input 属性传入一些自定义的变量, Status 属性自定判断补偿是否成功

#### 复杂参数的 Input 定义

```json
"FirstState": {
    "Type": "ServiceTask",
    "ServiceName": "demoService",
    "ServiceMethod": "complexParameterMethod",
    "Next": "ChoiceState",
    "ParameterTypes" : ["java.lang.String", "int", "io.seata.saga.engine.mock.DemoService$People", "[Lio.seata.saga.engine.mock.DemoService$People;", "java.util.List", "java.util.Map"],
    "Input": [
        "$.[people].name",
        "$.[people].age",
        {
            "name": "$.[people].name",
            "age": "$.[people].age",
            "childrenArray": [
                {
                    "name": "$.[people].name",
                    "age": "$.[people].age"
                },
                {
                    "name": "$.[people].name",
                    "age": "$.[people].age"
                }
            ],
            "childrenList": [
                {
                    "name": "$.[people].name",
                    "age": "$.[people].age"
                },
                {
                    "name": "$.[people].name",
                    "age": "$.[people].age"
                }
            ],
            "childrenMap": {
                "lilei": {
                    "name": "$.[people].name",
                    "age": "$.[people].age"
                }
            }
        },
        [
            {
                "name": "$.[people].name",
                "age": "$.[people].age"
            },
            {
                "name": "$.[people].name",
                "age": "$.[people].age"
            }
        ],
        [
            {
                "@type": "io.seata.saga.engine.mock.DemoService$People",
                "name": "$.[people].name",
                "age": "$.[people].age"
            }
        ],
        {
            "lilei": {
                "@type": "io.seata.saga.engine.mock.DemoService$People",
                "name": "$.[people].name",
                "age": "$.[people].age"
            }
        }
    ],
    "Output": {
        "complexParameterMethodResult": "$.#root"
    }
}
```

上面的 complexParameterMethod 方法定义如下:

```java
People complexParameterMethod(String name, int age, People people, People[] peopleArrya, List<People> peopleList, Map<String, People> peopleMap)

class People {

    private String name;
    private int    age;

    private People[] childrenArray;
    private List<People> childrenList;
    private Map<String, People> childrenMap;

    ...
}
```

启动状态机时传入参数:

```java
Map<String, Object> paramMap = new HashMap<>(1);
People people = new People();
people.setName("lilei");
people.setAge(18);
paramMap.put("people", people);
String stateMachineName = "simpleStateMachineWithComplexParams";
StateMachineInstance inst = stateMachineEngine.start(stateMachineName, null, paramMap);
```

> 注意 ParameterTypes 属性是可以不用传的，调用的方法的参数列表中有 Map, List 这种可以带泛型的集合类型, 因为 java 编译会丢失泛型, 所以需要用这个属性, 同时在 Input 的 json 中对应的对这个 json 加"@type"来申明泛型(集合的元素类型)

#### Loop 循环事务使用

```json
"States": {
    ...
    "ReduceBalance": {
        "Type": "ServiceTask",
        "ServiceName": "balanceAction",
        "ServiceMethod": "reduce",
        "CompensateState": "CompensateReduceBalance",
        "Loop": {
            "Parallel": 3,
            "Collection": "$.[collection]",
            "ElementVariableName": "loopElement",
            "ElementIndexName": "loopCounter",
            "CompletionCondition": "[nrOfCompletedInstances] / [nrOfInstances] >= 0.6"
        },
        "Input": [
            {
                "loopCounter": "$.[loopCounter]",
                "element": "$.[element]",
                "throwException": "$.[fooThrowException]"
            }
        ],
        "Output": {
            "fooResult": "$.#root"
        },
        "Status": {
            "#root == true": "SU",
            "#root == false": "FA",
            "$Exception{java.lang.Throwable}": "UN"
        },
        "Next": "ChoiceState"
    },
    "ChoiceState": {
        "Type": "Choice",
        "Choices": [
            {
                "Expression": "[loopResult].?[#this[fooResult] == null].size() == 0",
                "Next": "SecondState"
            }
        ],
        "Default":"Fail"
    }
    ...
}
```

- Loop: Loop 属性配置
  - Parallel: 并发执行事务的线程数, 支持并发执行循环任务, 默认: 1
  - Collection: 集合变量名, 在状态机启动时的入参, 用于框架获取需要循环遍历的集合对象
  - ElementVariableName: 集合单个元素名称, 用于在分支事务中获取元素值, 默认: `loopElement`
  - CompletionCondition: 自定义循环结束条件, 不写默认全部执行完成, 即: `[nrOfInstances] == [nrOfCompletedInstances]`
  - ElementIndexName: 集合下标名称, 用于在分支事务中获取元素下标, 默认: `loopCounter`

在循环任务中, 其每次事务出参会存放于一个 List: `loopResult`中, 在事务上下文中可以通过 `loopResult`获取事务的运行结果集, 并遍历获取单次执行结果

- Loop 上下文参数
  - nrOfInstances: 循环实例总数
  - nrOfActiveInstances: 当前活动的实例总数
  - nrOfCompletedInstances: 当前完成的实例总数
  - loopResult: 循环实例执行的结果集

示例状态图:

![Saga_Loop示例状态图](/img/saga/saga_loop_process.png?raw=true)

## FAQ

---

**问:** saga 服务流程可以不配置吗，使用全局事务 id 串起来，这样省去配置的工作量，再加上人工配置难免会配置错误？

**答:** saga 一般有两种实现，一种是基于状态机定义，比如 apache camel saga、eventuate，一种是基于注解+拦截器实现，比如 serviceComb saga，后者是不需要配置状态图的。由于 Saga 事务不保证隔离性, 在极端情况下可能由于脏写无法完成回滚操作, 比如举一个极端的例子, 分布式事务内先给用户 A 充值, 然后给用户 B 扣减余额, 如果在给 A 用户充值成功, 在事务提交以前, A 用户把余额消费掉了, 如果事务发生回滚, 这时则没有办法进行补偿了，有些业务场景可以允许让业务最终成功, 在回滚不了的情况下可以继续重试完成后面的流程, 基于状态机引擎除可以提供“回滚”能力外, 还可以提供“向前”恢复上下文继续执行的能力, 让业务最终执行成功, 达到最终一致性的目的，所以在实际生产中基于状态机的实现应用更多。后续也会提供基于注解+拦截器实现。

---

**问:** 比如有 服务 A 在系统 1 里面，服务 B 在系统 2 里面。全局事务由 A 开启，流程调用 B 开启子事务，那系统 2 也需要维护 Saga 状态机的三个表吗，也需要在 Spring Bean 配置文件中配置一个 StateMachineEngine 吗?

**答:** 不需要, 只在发起方记录日志. 由于只在发起方记录日志同时对参与者服务没有接口参数的要求，使得 Saga 可以方便集成其它机构或遗留系统的服务

---

**问:** 如果 系统 1 和系统 2 里面的服务，可以相互调用。系统 12 都可以开启全局事务，可以这样使用吗。那 1 和 2 都需要维护 Saga 状态机的三个表，也需要在 Spring Bean 配置文件中配置一个 StateMachineEngine？

**答:** 可以这样使用，如果两个系统都开启 saga 事务，那就要记录那三个表配置 StateMachineEngine

---

**问:** 使用 Seata 的时候，现在是 AT 模式 如果改成 saga 模式的话，改造会大吗？

**答:** AT 模式完全是透明的，Saga 是有侵入性的，要配置状态机 json，如果服务多改造会比较大

---

**问:** Saga 模式是不是基于 AT 来加强的长事务处理呢？

**答:** 没有基于 AT，客户端完全是两套，Server 端是复用的。你也可以看 Saga 的单元测试，那里有很多示例：[https://github.com/apache/incubator-seata/tree/develop/test/src/test/java/io/seata/saga/engine](https://github.com/apache/incubator-seata/tree/develop/test/src/test/java/io/seata/saga/engine)

---

**问:** 开发者文档中状态机引擎原理图里的 EventQueue 只是开启分布式事务的系统来进行事件驱动，调用其它系统服务像调用本地一样。系统之间还是 RPC 调用是吧。而不是系统之前也是纯事件驱动的？（"系统之间也是纯事件驱动的" 指 RPC 也是非阻塞的）

**答:** 节点与节点间是事件驱动的, RPC 的非阻塞需要 rpc client 支持，理论上也是可以的。rpc client 如果也是非阻塞 IO，那么所有环节都是异步了。

---

**问:** 考虑一个业务流程， 它后续的子流程， 不管谁先运行都不会相互影响，可以异步调用。子流程是其它系统服务。Seata Saga 是不是实现了这点，其实我没看明白 ，Seata Saga 异步调用具体是不是各个节点异步了？

**答:** Saga 的异步启动一个状态机(stateMachineEngine.startAsync)是指状态机内所有的状态都是事件驱动来执行的, 整个流程实际是同步的, 上一个状态结束才产生下一个状态的事件. 而异步调用一个服务是配置该 ServiceTask 为"IsAsync":true, 这个服务将会异步调用, 不会阻塞状态机的推进, 状态机不关心它的执行结果.

---

**问:** Saga 源码中事件驱动层同步 bus 和异步 bus 是什么作用？

**答:** 同步 BUS 是线程阻塞的，等整个状态机执行完毕才返回，异步 BUS 是非线程阻塞的，调用后立即返回，状态机执行完毕后回调你的 Callback。

---

**问:** IsPersist: 执行日志是否进行存储，默认是 true，有一些查询类的服务可以配置在 false，执行日志不进行存储提高性能，因为当异常恢复时可以重复执行？

**答:** 是的可以配置成 false, 不过建议先保持默认，这样在查询执行日志比较全，真的要做性能调优再配，一般不会有性能问题

---

**问:** seata saga 开启事务的客户端或者 seata server 服务端宕机或者重启，未完成的状态机实例是怎么保证继续执行下去的?谁去触发这个操作?

**答:** 状态机实例在本地数据库有记录日志，通过日志恢复。seata server 会触触发事务恢复。

---

**问:** saga 的 json 文件 支持热部署吗?

**答:** 支持, stateMachineEngine.getStateMachineConfig().getStateMachineRepository().registryByResources()。不过 java 代码和服务需要自己实现支持热部署

---

**问:** 出参入参都放在 saga 的上下文中，如果参数内容较多较大，业务量又大的话，对内存有限制吗?

**答:** 没有做限制，建议无关的参数不要放到上下文。下一个服务需要用的参数、或用于分支判断的参数可以放入上下文。

---

**问:** 确认个事情：每个节点，要么自己方法内部 Catch 异常处理，使最终有返回信息。要么自己内部可以不处理，交由状态机引擎捕获异常，在 json 中定义 Catch 属性。 而不是补偿节点能够自动触发补偿，需要补偿必须手动在 json，由 Catch 或者 Choices 属性路由到 CompensationTrigger？

**答:** 对的，这个是为了提高灵活性。用户可以自己控制是否进行回滚，因为并不是所有异常都要回滚，可能有一些自定义处理手段。

---

**问:** 所以 Catch 和 Choices 可以随便路由到想要的 state 对吧？

**答:** 是的。这种自定义出发补偿的设计是参考了 bpmn2.0 的。

---

**问:** 还有关于 json 文件，我打算一条流程，就定义一个 json，虽然有的流程很像，用 Choices，可以解决。但是感觉 json 还是要尽量简单。这样考虑对吗？

**答:** 你可以考虑用子状态机来复用，子状态机会多生成一行 stateMachineInstance 记录，但对性能影响应该不大。

---
