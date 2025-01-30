"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[67674],{12770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=n(74848),o=n(28453);const a={title:"How to Send Messages with RocketMQ in Seata",keywords:["Seata","RocketMQ"],description:"This article mainly introduces how Seata integrates with RocketMQ to send messages",author:"Zhang Jiawei - Seata PPMC",date:new Date("2024-10-15T00:00:00.000Z")},i=void 0,r={permalink:"/blog/how-to-send-message-with-rocketmq-in-seata",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/how-to-send-message-with-rocketmq-in-seata.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/how-to-send-message-with-rocketmq-in-seata.md",title:"How to Send Messages with RocketMQ in Seata",description:"This article mainly introduces how Seata integrates with RocketMQ to send messages",date:"2024-10-15T00:00:00.000Z",formattedDate:"October 15, 2024",tags:[],readingTime:4.42,hasTruncateMarker:!1,authors:[{name:"Zhang Jiawei - Seata PPMC"}],frontMatter:{title:"How to Send Messages with RocketMQ in Seata",keywords:["Seata","RocketMQ"],description:"This article mainly introduces how Seata integrates with RocketMQ to send messages",author:"Zhang Jiawei - Seata PPMC",date:"2024-10-15T00:00:00.000Z"},unlisted:!1,prevItem:{title:"Go Language Client Communication with Seata Server",permalink:"/blog/seata-grpc-client"},nextItem:{title:"Seata Raft Configuration Center",permalink:"/blog/seata-raft-config-center"}},c={authorsImageUrls:[void 0]},l=[{value:"Background",id:"background",level:2},{value:"Solution Design",id:"solution-design",level:2},{value:"Implementation Principle",id:"implementation-principle",level:2},{value:"prepare Method",id:"prepare-method",level:3},{value:"commit Method",id:"commit-method",level:3},{value:"rollback Method",id:"rollback-method",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,s.jsx)(t.p,{children:"In distributed transactions, we often encounter scenarios where messages need to be sent, such as notifying the inventory service to reduce inventory after an order is successfully paid.\nBut how to ensure the consistency between local transactions and message sending? This requires using a distributed transaction solution to solve this problem.\nSeata, as an open-source distributed transaction solution, provides support for RocketMQ, making it easy to send messages in distributed transactions."}),"\n",(0,s.jsx)(t.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img.png",src:n(63545).A+"",width:"961",height:"601"})}),"\n",(0,s.jsx)(t.p,{children:"Let's first review the overall process of TCC through the above diagram:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The Transaction Manager (TM) initiates a global transaction."}),"\n",(0,s.jsx)(t.li,{children:"The Resource Manager (RM) tries to execute the prepare method to reserve resources and registers the branch transaction with the Transaction Coordinator (TC)."}),"\n",(0,s.jsx)(t.li,{children:"If the resource reservation is successful, the Transaction Manager (TM) calls commit to commit the global transaction, and the Transaction Coordinator (TC) notifies the Resource Manager (RM) to commit the branch transaction."}),"\n",(0,s.jsx)(t.li,{children:"If the resource reservation fails, the Transaction Manager (TM) calls rollback to roll back the global transaction, and the Transaction Coordinator (TC) notifies the Resource Manager (RM) to roll back the branch transaction."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img.png",src:n(82968).A+"",width:"961",height:"970"})}),"\n",(0,s.jsx)(t.p,{children:"After understanding the overall process of TCC, the above diagram is not difficult to understand. Seata proxies the RocketMQ Producer, automatically converting ordinary messages into RocketMQ transaction messages when the business code needs to send messages, thereby ensuring the consistency of message sending and distributed transactions."}),"\n",(0,s.jsx)(t.h2,{id:"implementation-principle",children:"Implementation Principle"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"public class SeataMQProducerFactory {\n\n  public static SeataMQProducer createSingle(String nameServer, String producerGroup) throws MQClientException {\n    return createSingle(nameServer, null, producerGroup, null);\n  }\n\n  public static SeataMQProducer createSingle(String nameServer, String namespace,\n                                             String groupName, RPCHook rpcHook) throws MQClientException {\n      defaultProducer = new SeataMQProducer(namespace, groupName, rpcHook);\n      defaultProducer.start();\n      return defaultProducer;\n  }\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"From the above code, we can see that SeataMQProducerFactory provides methods to create SeataMQProducer. By calling the createSingle method, we can create a SeataMQProducer instance."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'@Override\npublic SendResult send(Message msg) throws MQClientException, MQBrokerException, RemotingException, InterruptedException {\n  return send(msg, this.getSendMsgTimeout());\n}\n\n@Override\npublic SendResult send(Message msg, long timeout) throws MQClientException, MQBrokerException, RemotingException, InterruptedException {\n  if (RootContext.inGlobalTransaction()) {\n    if (tccRocketMQ == null) {\n      throw new RuntimeException("TCCRocketMQ is not initialized");\n    }\n    return tccRocketMQ.prepare(msg, timeout);\n  } else {\n    return super.send(msg, timeout);\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"From the above code, we can see that SeataMQProducer overrides the send method of RocketMQ. By determining whether it is in a global transaction, it decides whether to call the send method of RocketMQ or the prepare method of TccRocketMQ. If the message is sent without participating in a global transaction, it degrades to calling the send method of RocketMQ to send the message."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'@LocalTCC\npublic class TCCRocketMQImpl implements TCCRocketMQ {\n\n  @Override\n  @TwoPhaseBusinessAction(name = SeataMQProducerFactory.ROCKET_TCC_NAME)\n  public SendResult prepare(Message message, long timeout) throws MQClientException {\n    BusinessActionContext context = BusinessActionContextUtil.getContext();\n    LOGGER.info("RocketMQ message send prepare, xid = {}", context.getXid());\n    Map<String, Object> params = new HashMap<>(8);\n    SendResult sendResult = producer.doSendMessageInTransaction(message, timeout, context.getXid(), context.getBranchId());\n    message.setDeliverTimeMs(0);\n    params.put(ROCKET_MSG_KEY, message);\n    params.put(ROCKET_SEND_RESULT_KEY, sendResult);\n    BusinessActionContextUtil.addContext(params);\n    return sendResult;\n  }\n\n  @Override\n  public boolean commit(BusinessActionContext context)\n    throws UnknownHostException, MQBrokerException, RemotingException, InterruptedException, TimeoutException, TransactionException {\n    Message message = context.getActionContext(ROCKET_MSG_KEY, Message.class);\n    SendResult sendResult = context.getActionContext(ROCKET_SEND_RESULT_KEY, SendResult.class);\n    if (message == null || sendResult == null) {\n      throw new TransactionException("TCCRocketMQ commit but cannot find message and sendResult");\n    }\n    this.producerImpl.endTransaction(message, sendResult, LocalTransactionState.COMMIT_MESSAGE, null);\n    LOGGER.info("RocketMQ message send commit, xid = {}, branchId = {}", context.getXid(), context.getBranchId());\n    return true;\n  }\n\n  @Override\n  public boolean rollback(BusinessActionContext context)\n    throws UnknownHostException, MQBrokerException, RemotingException, InterruptedException, TransactionException {\n    Message message = context.getActionContext(ROCKET_MSG_KEY, Message.class);\n    SendResult sendResult = context.getActionContext(ROCKET_SEND_RESULT_KEY, SendResult.class);\n    if (message == null || sendResult == null) {\n      LOGGER.error("TCCRocketMQ rollback but cannot find message and sendResult");\n    }\n    this.producerImpl.endTransaction(message, sendResult, LocalTransactionState.ROLLBACK_MESSAGE, null);\n    LOGGER.info("RocketMQ message send rollback, xid = {}, branchId = {}", context.getXid(), context.getBranchId());\n    return true;\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"We can see that TCCRocketMQImpl implements the TCCRocketMQ interface and uses the @LocalTCC and @TwoPhaseBusinessAction annotations, indicating that TCCRocketMQImpl is also a TCC branch transaction, and implements the three scenarios of TCC transactions through the prepare, commit, and rollback methods."}),"\n",(0,s.jsx)(t.h3,{id:"prepare-method",children:"prepare Method"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'@TwoPhaseBusinessAction(name = SeataMQProducerFactory.ROCKET_TCC_NAME)\npublic SendResult prepare(Message message, long timeout) throws MQClientException {\n  BusinessActionContext context = BusinessActionContextUtil.getContext();\n  LOGGER.info("RocketMQ message send prepare, xid = {}", context.getXid());\n  Map<String, Object> params = new HashMap<>(8);\n  SendResult sendResult = producer.doSendMessageInTransaction(message, timeout, context.getXid(), context.getBranchId());\n  message.setDeliverTimeMs(0);\n  params.put(ROCKET_MSG_KEY, message);\n  params.put(ROCKET_SEND_RESULT_KEY, sendResult);\n  BusinessActionContextUtil.addContext(params);\n  return sendResult;\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"In the prepare method, we send a half-transaction message by calling the producer.doSendMessageInTransaction method and save the message and send result to the BusinessActionContext."}),"\n",(0,s.jsx)(t.h3,{id:"commit-method",children:"commit Method"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'@Override\npublic boolean commit(BusinessActionContext context)\n  throws UnknownHostException, MQBrokerException, RemotingException, InterruptedException, TimeoutException, TransactionException {\n  Message message = context.getActionContext(ROCKET_MSG_KEY, Message.class);\n  SendResult sendResult = context.getActionContext(ROCKET_SEND_RESULT_KEY, SendResult.class);\n  if (message == null || sendResult == null) {\n    throw new TransactionException("TCCRocketMQ commit but cannot find message and sendResult");\n  }\n  this.producerImpl.endTransaction(message, sendResult, LocalTransactionState.COMMIT_MESSAGE, null);\n  LOGGER.info("RocketMQ message send commit, xid = {}, branchId = {}", context.getXid(), context.getBranchId());\n  return true;\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"In the commit method, we commit the transaction message by calling the producerImpl.endTransaction method."}),"\n",(0,s.jsx)(t.h3,{id:"rollback-method",children:"rollback Method"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'@Override\npublic boolean rollback(BusinessActionContext context)\n  throws UnknownHostException, MQBrokerException, RemotingException, InterruptedException, TransactionException {\n  Message message = context.getActionContext(ROCKET_MSG_KEY, Message.class);\n  SendResult sendResult = context.getActionContext(ROCKET_SEND_RESULT_KEY, SendResult.class);\n  if (message == null || sendResult == null) {\n    LOGGER.error("TCCRocketMQ rollback but cannot find message and sendResult");\n  }\n  this.producerImpl.endTransaction(message, sendResult, LocalTransactionState.ROLLBACK_MESSAGE, null);\n  LOGGER.info("RocketMQ message send rollback, xid = {}, branchId = {}", context.getXid(), context.getBranchId());\n  return true;\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"In the rollback method, we roll back the transaction message by calling the producerImpl.endTransaction method."})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},82968:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/seata-rocketmq-25b9bb3596cd5dc85e31d59d4cee8cd4.png"},63545:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tcc-mode-0fb5bbf99b58538d120d7d355ae0eee3.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(96540);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);