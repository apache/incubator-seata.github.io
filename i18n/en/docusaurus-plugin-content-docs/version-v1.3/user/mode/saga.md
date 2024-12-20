---
title: Seata Saga Mode
keywords: [Seata, Saga]
description: The Saga pattern is a long transaction solution provided by SEATA. In the Saga pattern, each participant in the business process submits a local transaction. If any participant fails, it compensates the previously successful participants. Both the forward service in phase one and the compensation service in phase two are implemented by business development.
---
# SEATA Saga Pattern
## Overview
The Saga pattern is a long transaction solution provided by SEATA. In the Saga pattern, each participant in the business process submits a local transaction. If any participant fails, the Saga pattern compensates the previously successful participants. Both the forward service in phase one and the compensation service in phase two are implemented by business development.

![Saga Mode Overview](https://img.alicdn.com/tfs/TB1Y2kuw7T2gK0jSZFkXXcIQFXa-445-444.png)

Theoretical Basis: Paper by Hector & Kenneth titled "Sagas" (1987)

### Applicable Scenarios:
* Long and numerous business processes.
* Participants include other companies or legacy system services that cannot provide the three interfaces required by the TCC pattern.

### Advantages:
* One-phase commits local transaction, no locks, high performance.
* Event-driven architecture, participants can execute asynchronously, high throughput.
* Compensation service is easy to implement.

### Disadvantages:
* Does not guarantee isolation (see later documents for solutions).

### Implementation of Saga:
#### Saga implementation based on state machine engine:

SEATA's current Saga pattern implementation is based on a state machine engine, which works as follows:
  1. Define the service call process through a state diagram and generate a JSON state language definition file.
  2. A node in the state diagram can be a service call, and each node can configure its compensation node.
  3. The state diagram JSON is driven by the state machine engine. When an exception occurs, the engine reverses the execution of the compensation nodes for the successful nodes to roll back the transaction.
   > Note: Whether to compensate in case of an exception can also be decided by the user.
  4. It can implement service orchestration needs, supporting features such as single choice, concurrency, sub-processes, parameter conversion, parameter mapping, service execution status judgment, and exception capture.

Example state diagram:

![Example State Diagram](/img/saga/demo_statelang.png?raw=true)

## Quick Start

### Demo Introduction
Using the Saga pattern under microservices built with Dubbo to demonstrate the submission and rollback of distributed transactions;

The business process diagram is shown below:

![Demo Business Process Diagram](/img/saga/demo_business_process.png?raw=true)

First, download the seata-samples project: https://github.com/apache/incubator-seata-samples.git

> Note: The SEATA version needs to be 0.9.0 or above.

In the dubbo-saga-sample, a distributed transaction will involve 2 Saga transaction participants: [InventoryAction](https://github.com/apache/incubator-seata-samples/blob/master/saga/dubbo-saga-sample/src/main/java/io/seata/samples/saga/action/InventoryAction.java) and [BalanceAction](https://github.com/apache/incubator-seata-samples/blob/master/saga/dubbo-saga-sample/src/main/java/io/seata/samples/saga/action/BalanceAction.java). If the distributed transaction commits, both participants commit; if it rolls back, both participants roll back.

These two Saga participants are Dubbo services. Both participants have a reduce method, which represents inventory reduction or balance reduction, and a compensateReduce method for compensating the reduction operation.

- InventoryAction interface definition:

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

- The scenario defined in state language is the following JSON: src/main/resources/statelang/reduce_inventory_and_balance.json
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
            "Input": [
                "$.[businessKey]",
                "$.[count]"
            ],
            "Output": {
                "reduceInventoryResult": "$.#root"
            },
            "Status": {
                "#root == true": "SU",
                "#root == false": "FA",
                "$Exception{java.lang.Throwable}": "UN"
            }
        },
        "ChoiceState":{
            "Type": "Choice",
            "Choices":[
                {
                    "Expression":"[reduceInventoryResult] == true",
                    "Next":"ReduceBalance"
                }
            ],
            "Default":"Fail"
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
            "Catch": [
                {
                    "Exceptions": [
                        "java.lang.Throwable"
                    ],
                    "Next": "CompensationTrigger"
                }
            ],
            "Next": "Succeed"
        },
        "CompensateReduceInventory": {
            "Type": "ServiceTask",
            "ServiceName": "inventoryAction",
            "ServiceMethod": "compensateReduce",
            "Input": [
                "$.[businessKey]"
            ]
        },
        "CompensateReduceBalance": {
            "Type": "ServiceTask",
            "ServiceName": "balanceAction",
            "ServiceMethod": "compensateReduce",
            "Input": [
                "$.[businessKey]"
            ]
        },
        "CompensationTrigger": {
            "Type": "CompensationTrigger",
            "Next": "Fail"
        },
        "Succeed": {
            "Type":"Succeed"
        },
        "Fail": {
            "Type":"Fail",
            "ErrorCode": "PURCHASE_FAILED",
            "Message": "purchase failed"
        }
    }
}
```

The state diagram represented by this JSON:

![State Diagram Represented by JSON](/img/saga/demo_statelang.png?raw=true)

The provided text introduces the concept of "State Machine" and its attributes in the context of Seata's Saga pattern, which is somewhat influenced by [AWS Step Functions](https://docs.aws.amazon.com/zh_cn/step-functions/latest/dg/tutorial-creating-lambda-state-machine.html). Here's the translation:

#### Introduction to "State Machine" Properties:
* **Name**: Represents the unique name of the state machine.
* **Comment**: A description of the state machine.
* **Version**: The version of the state machine definition.
* **StartState**: The first "state" to run when starting.
* **States**: A list of states, structured as a map where the key is the unique name of the "state" within the state machine.
* **IsRetryPersistModeUpdate**: Whether the log is updated based on the last failed log during forward retry.
* **IsCompensatePersistModeUpdate**: Whether the log is updated based on the last compensation log during backward compensation.

#### Introduction to "State" Properties:
* **Type**: The type of "state", for example:
    * **ServiceTask**: Executes a service call task.
    * **Choice**: Single condition selection routing.
    * **CompensationTrigger**: Triggers the compensation process.
    * **Succeed**: The state machine ends normally.
    * **Fail**: The state machine ends abnormally.
    * **SubStateMachine**: Calls a sub-state machine.
    * **CompensateSubMachine**: Used to compensate a sub-state machine.
* **ServiceName**: The name of the service, usually the beanId of the service.
* **ServiceMethod**: The name of the service method.
* **CompensateState**: The compensation "state" of that "state".
* **Loop**: Indicates whether the transaction node is a loop transaction, i.e., the framework itself iterates over the collection elements based on the configuration of the loop attributes and executes the transaction node in a loop.
* **Input**: The list of input parameters for calling the service, which is an array corresponding to the parameter list of the service method. `$` indicates using an expression to take parameters from the state machine context, expressed using [SpringEL](https://docs.spring.io/spring/docs/4.3.10.RELEASE/spring-framework-reference/html/expressions.html). If it is a constant, write the value directly.
* **Output**: Maps the returned parameters of the service to the state machine context, structured as a map. The key is the key when put into the state machine context (which is also a map), and the value with `$` indicates a SpringEL expression to take values from the service's returned parameters. `#root` represents the entire return parameter of the service.
* **Status**: The mapping of service execution status. The framework defines three statuses: SU (Success), FA (Failure), and UN (Unknown). We need to map the execution status of the service to these three statuses to help the framework judge the consistency of the entire transaction. It's structured as a map where the key is a conditional expression, generally judging from the service's return value or thrown exception. Expressions starting with `$Exception{` indicate judging the type of exception. The value is the mapped execution status when this conditional expression holds.
* **Catch**: Routing after catching an exception.
* **Next**: The next "state" to execute after the service completes.
* **Choices**: In the Choice type "state", it's a list of optional branches. The Expression in the branches is a SpringEL expression, and Next is the next "state" to execute when the expression holds.
* **ErrorCode**: The error code of the Fail type "state".
* **Message**: The error message of the Fail type "state".

For a more detailed explanation of state language, please see the [State language reference](#state-language-reference) section.

For more detailed examples of state language usage, see [https://github.com/apache/incubator-seata/tree/develop/test/src/test/java/io/seata/saga/engine](https://github.com/apache/incubator-seata/tree/develop/test/src/test/java/io/seata/saga/engine).


### Demo Running Guide

#### Step 1: Start the SEATA Server

Run [SeataServerStarter](https://github.com/apache/incubator-seata-samples/blob/master/saga/sofarpc-saga-sample/src/test/java/io/seata/samples/saga/SeataServerStarter.java) to start the Seata Server.

#### Step 2: Start the Dubbo Provider Demo

Run [DubboSagaProviderStarter](https://github.com/apache/incubator-seata-samples/blob/master/saga/dubbo-saga-sample/src/test/java/io/seata/samples/saga/starter/DubboSagaProviderStarter.java) to start the Dubbo provider.

#### Step 3: Start the Saga Demo

Run [DubboSagaTransactionStarter](https://github.com/apache/incubator-seata-samples/blob/master/saga/dubbo-saga-sample/src/main/java/io/seata/samples/saga/starter/DubboSagaTransactionStarter.java) to start the demo project.

> The demo uses the H2 in-memory database. For production, it is recommended to use the same type of database as your business. Currently, it supports Oracle, MySQL, and DB2. The SQL scripts for table creation can be found at [https://github.com/apache/incubator-seata/tree/develop/saga/seata-saga-engine-store/src/main/resources/sql](https://github.com/apache/incubator-seata/tree/develop/saga/seata-saga-engine-store/src/main/resources/sql).

> The demo also includes examples of calling local services and SOFA RPC services.

## State Machine Designer

<a href="/saga-designer/" target="_blank">Try it online</a>

Seata Saga provides a visual state machine designer for user convenience. For code and running guide, please refer to:
[https://github.com/apache/incubator-seata/tree/refactor_designer/saga/seata-saga-statemachine-designer](https://github.com/apache/incubator-seata/tree/refactor_designer/saga/seata-saga-statemachine-designer)

Screenshot of the state machine designer:
![State Machine Designer](/img/saga/seata-saga-statemachine-designer.png?raw=true)

<!-- State machine designer demo address: [http://seata.io/saga_designer/index.html](./saga_designer/index.html)

State machine designer video tutorial: [http://seata.io/saga_designer/video.html](/docs/user/saga_designer/vedio) -->

## Best Practices

### Practical Experience in Designing Saga Services
#### Allowing Empty Compensation
* Empty Compensation: The compensation service is executed even though the original service was not.
* Reasons for Occurrence:
    * The original service times out (packet loss).
    * The Saga transaction triggers a rollback.
    * The compensation request is received before the original service request.

Therefore, in service design, allow empty compensation, i.e., return successful compensation and record the original business key when no compensable business key is found.

#### Preventing Hanging Control
* Hanging: The compensation service executes before the original service.
* Reasons for Occurrence:
    * The original service times out (congestion).
    * Saga transaction rollback is triggered.
    * The congested original service arrives later.

So, it is necessary to check whether the current business key already exists in the recorded keys of empty compensation. If it exists, refuse the execution of the service.

#### Idempotence Control
* Both the original and compensation services need to ensure idempotence. Due to potential network timeouts, retry strategies can be set. When retries occur, idempotence control should be used to prevent duplicate updates of business data.

### Dealing with Lack of Isolation
* Since Saga transactions do not guarantee isolation, extreme situations may arise where rollback operations cannot be completed due to dirty writes. For example, in a distributed transaction, first, user A is credited, and then user B’s balance is reduced. If user A spends the balance before the transaction is committed, and the transaction needs to be rolled back, compensation is not possible. This is a typical problem caused by lack of isolation. Common approaches in practice are:
    * When designing business processes, follow the principle of “prefer overpayment to underpayment.” Overpayment means the customer has less money and the institution has more, which can be refunded based on the institution's credibility. In contrast, underpayment means the missing money might not be recoverable. Therefore, the business process design should always deduct money first.
    * Some business scenarios may allow the business to ultimately succeed. If it is impossible to roll back, the process can continue retrying to complete subsequent steps. Therefore, in addition to providing "rollback" capabilities, the state machine engine also needs to offer "forward" capabilities to recover the context and continue execution, allowing the business to ultimately succeed and achieve final consistency.

### Performance Optimization
* Configuring the client parameter `client.rm.report.success.enable=false` improves performance by not reporting the status of a successfully executed branch transaction to the server.
> When the status of a previous branch transaction has not yet been reported, and the next branch transaction has already been registered, it can be assumed that the previous one was actually successful.


## API referance

#### StateMachineEngine API
``` java
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
``` java
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
``` java
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

## Config Reference
#### Configuring a StateMachineEngine in a Spring Bean Configuration File
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
    <!-- Thread pool used for event-driven execution. If all state machines execute synchronously and there are no loop tasks, it may not be necessary. -->
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

<!-- Seata Server needs this Holder to get the stateMachineEngine instance for transaction recovery -->
<bean class="io.seata.saga.rm.StateMachineEngineHolder">
    <property name="stateMachineEngine" ref="stateMachineEngine"/>
</bean>
```

## State Language Reference
### List of "State Machine" Properties
```json
{
    "Name": "reduceInventoryAndBalance",
    "Comment": "reduce inventory then reduce balance in a transaction",
    "StartState": "ReduceInventory",
    "Version": "0.0.1",
    "States": {
    },
    "IsRetryPersistModeUpdate": false,
    "IsCompensatePersistModeUpdate": false
}
```
* **Name**: Represents the name of the state machine, which must be unique.
* **Comment**: A description of the state machine.
* **Version**: The version of the state machine definition.
* **StartState**: The first "state" to be executed at startup.
* **States**: A list of states, structured as a map where the key is the unique name of the "state" within the state machine, and the value is a map representing the properties of the "state".
* **IsRetryPersistModeUpdate**: Whether the log is updated based on the last failed log during a forward retry. By default, this is false, meaning a new retry log is added (this has a higher priority than the global stateMachineConfig configuration property).
* **IsCompensatePersistModeUpdate**: Whether the log is updated based on the last compensation log during a backward compensation. By default, this is false, meaning a new compensation log is added (this has a higher priority than the global stateMachineConfig configuration property).

### Property List of All States
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
* **ServiceName**: The name of the service, typically the service's bean ID.
* **ServiceMethod**: The name of the service method.
* **CompensateState**: The compensation "state" for this "state".
* **IsForUpdate**: Indicates if the service will update data. Default is false. If CompensateState is configured, it defaults to true, as services with compensation are typically data update services.
* **IsPersist**: Indicates if execution logs should be stored. Default is true. For some query-type services, it can be set to false. Not storing execution logs improves performance because in case of exception recovery, the service can be re-executed.
* **IsAsync**: Indicates if the service is called asynchronously. Note: Asynchronous service calls will ignore the service's return result, so the service execution status mapping defined by the user (the Status attribute below) will be ignored. It defaults to successful service call. If the asynchronous call submission fails (e.g., thread pool is full), then the service execution status is considered failed.
* **IsRetryPersistModeUpdate**: Indicates if the log is updated based on the last failed log during forward retry. Default is false, meaning a new retry log is added. This has a higher priority than the state machine properties configuration.
* **IsCompensatePersistModeUpdate**: Indicates if the log is updated based on the last compensation log during backward compensation. Default is false, meaning a new compensation log is added. This has a higher priority than the state machine properties configuration.
* **Loop**: Identifies whether the transaction node is a loop transaction, i.e., the framework itself iterates over collection elements based on the configuration of loop attributes and executes the transaction node in a loop. For specific usage, see: [Loop transaction usage](#loop-branch-transaction-usage).
* **Input**: The list of input parameters for calling the service. It's an array corresponding to the service method's parameter list. `$` indicates using an expression to take parameters from the state machine context, expressed using [SpringEL](https://docs.spring.io/spring/docs/4.3.10.RELEASE/spring-framework-reference/html/expressions.html). For constants, the value can be written directly. For how to pass complex parameters, see: [Definition of complex parameters Input](#complex-input-parameters).
* **Output**: Maps the service's returned parameters to the state machine context. It's a map structure where the key is the key when put into the state machine context (the state machine context is also a map), and the value with `$` indicates a SpringEL expression to take values from the service's returned parameters. `#root` represents the entire return parameter of the service.
* **Status**: The mapping of service execution status. The framework defines three statuses: SU (Success), FA (Failure), and UN (Unknown). We need to map the execution status of the service to these three statuses to help the framework judge the consistency of the entire transaction. It's a map structure, where the key is a conditional expression, generally judging from the service's return value or thrown exception. Expressions starting with `$Exception{` indicate judging the type of exception. The value is the mapped execution status when this conditional expression holds.
* **Catch**: Routing after an exception is caught.
* **Retry**: The retry strategy after catching an exception. It's an array that can configure multiple rules. `Exceptions` are the list of matched exceptions, `IntervalSeconds` is the retry interval, `MaxAttempts` is the maximum number of retries, `BackoffRate` is the multiplier for the next retry interval compared to the previous one (e.g., if the last retry interval was 2 seconds, with `BackoffRate=1.5`, the next retry interval will be 3 seconds). The `Exceptions` attribute can be left unconfigured, which means the framework will automatically match network timeout exceptions. If a different exception occurs during the retry process, the framework will rematch the rules and retry according to the new rule, but the total number of retries for the same rule will not exceed its `MaxAttempts`.
* **Next**: The next "state" to execute after the service completes.

> When the Status is not configured to map the execution status of a service, the system automatically determines the status as follows:
> * If there is no exception, it is considered a successful execution.
> * If there is an exception, the system checks if the exception is a network connection timeout. If so, it is considered a failure (FA).
> * For other exceptions, if `IsForUpdate=true` for the service, the status is set to unknown (UN); otherwise, it is considered a failure (FA).

> How is the overall execution status of the state machine determined? This is judged by the framework itself, and the state machine has two statuses: `status` (forward execution status) and `compensateStatus` (compensation status):
> * If all services execute successfully (transaction commits successfully), then `status=SU`, `compensateStatus=null`.
> * If a service execution fails and there are successfully executed update-type services without compensation (transaction commit fails), then `status=UN`, `compensateStatus=null`.
> * If a service execution fails and there are no successfully executed update-type services without compensation (transaction commit fails), then `status=FA`, `compensateStatus=null`.
> * If compensation is successful (transaction rollback successful), then `status=FA/UN`, `compensateStatus=SU`.
> * If compensation occurs and some services are not successfully compensated (rollback fails), then `status=FA/UN`, `compensateStatus=UN`.
> * In cases of transaction commit or rollback failure, the Seata Server continuously initiates retries.

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
The Choice type of "state" is a single-item selection route:
* **Choices**: A list of optional branches. Only the first branch with a satisfied condition will be chosen.
* **Expression**: A Spring Expression Language (SpringEL) expression.
* **Next**: The next "state" to be executed when the Expression is satisfied.

#### Succeed:
```json
"Succeed": {
    "Type":"Succeed"
}
```
Running into the "Succeed" state indicates that the state machine has ended normally. However, a normal end does not necessarily mean a successful end. Whether it is successful depends on whether each "state" has succeeded.

#### Fail:
```json
"Fail": {
    "Type":"Fail",
    "ErrorCode": "PURCHASE_FAILED",
    "Message": "purchase failed"
}
```
Running into the "Fail" state indicates that the state machine has ended abnormally. During an abnormal termination, you can configure an ErrorCode and Message, representing the error code and error message, respectively. These can be used to return error codes and messages to the caller.

#### CompensationTrigger:
```json
"CompensationTrigger": {
    "Type": "CompensationTrigger",
    "Next": "Fail"
}
```
A CompensationTrigger type of state is used to trigger compensation events and roll back distributed transactions.
* **Next**: The state to which it routes after successful compensation.

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
The SubStateMachine type of "state" is used for calling a sub-state machine.
* **StateMachineName**: The name of the sub-state machine to be called.
* **CompensateState**: The compensation state of the sub-state machine. It can be left unconfigured, and the system will automatically create its compensation state. The compensation of a sub-state machine actually involves calling the compensate method of the sub-state machine, so the user does not need to implement a compensation service for the sub-state machine themselves. When this attribute is configured, one can use the Input attribute to custom pass some variables, as shown in the CompensateSubMachine below.

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
The CompensateSubMachine type of state is specifically used to compensate a sub-state machine. It calls the compensate method of the sub-state machine. You can use the Input attribute to pass in some custom variables. The Status attribute is used to automatically determine whether the compensation is successful.

#### Complex Input Parameters
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
The definition of the `complexParameterMethod` method is as follows:
```java
People complexParameterMethod(String name, int age, People people, People[] peopleArray, List<People> peopleList, Map<String, People> peopleMap)

class People {

    private String name;
    private int age;

    private People[] childrenArray;
    private List<People> childrenList;
    private Map<String, People> childrenMap;

    ...
}
```
Parameters passed when starting the state machine:
```java
Map<String, Object> paramMap = new HashMap<>(1);
People people = new People();
people.setName("lilei");
people.setAge(18);
paramMap.put("people", people);
String stateMachineName = "simpleStateMachineWithComplexParams";
StateMachineInstance inst = stateMachineEngine.start(stateMachineName, null, paramMap);
```

> Note: The `ParameterTypes` attribute is optional. When the method's parameter list includes Map, List, or other collection types that can have generics, this attribute is needed because Java compilation loses generics information. Therefore, you need to use this attribute. Also, in the Input JSON, add "@type" to declare the generic type (the element type of the collection).

#### Loop Branch Transaction Usage

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

- **Loop**: Configuration of the Loop attribute
  - **Parallel**: The number of threads for executing transactions concurrently. It supports concurrent execution of loop tasks, with the default being 1.
  - **Collection**: The collection variable name, an input parameter when the state machine starts, used by the framework to get the collection object that needs to be looped through.
  - **ElementVariableName**: The name of each element in the collection, used to obtain the value of an element in branch transactions. The default is `loopElement`.
  - **CompletionCondition**: Custom condition for ending the loop. If not specified, the default is to execute all, i.e., `[nrOfInstances] == [nrOfCompletedInstances]`.
  - **ElementIndexName**: The name of the collection index, used to obtain the element index in branch transactions. The default is `loopCounter`.

In loop tasks, the output parameters of each transaction are stored in a list: `loopResult`. This list can be accessed in the transaction context to obtain the set of transaction execution results and to iterate over the results of each execution.

- **Loop Context Parameters**
  - **nrOfInstances**: The total number of loop instances.
  - **nrOfActiveInstances**: The total number of currently active instances.
  - **nrOfCompletedInstances**: The total number of instances that have been completed.
  - **loopResult**: The result set of the loop instance executions.

Example State Diagram:

![Saga_Loop Example State Diagram](/img/saga/saga_loop_process.png?raw=true)


## FAQ

**Q:** Can the Saga service process be configured without using a global transaction ID to string everything together, to save on configuration work and avoid errors in manual configuration?

**A:** Saga generally has two implementations: one based on state machine definition, like Apache Camel Saga and Eventuate, and the other based on annotations and interceptors, like ServiceComb Saga. The latter does not require a state diagram configuration. Since Saga transactions do not guarantee isolation, extreme cases like dirty writes might prevent rollback operations. For example, in a distributed transaction, user A is credited before user B's balance is reduced. If user A spends the balance before the transaction is committed and a rollback occurs, compensation becomes impossible. Some business scenarios might allow the business to eventually succeed by continuing retries to complete the process, so the state machine engine provides both "rollback" capability and "forward" capability to recover the context and continue execution, aiming for final consistency. Implementations based on state machines are more common in production. Implementations based on annotations and interceptors will also be provided in the future.

**Q:** If service A is in system 1 and service B is in system 2, and a global transaction is initiated by A calling B to start a subtransaction, does system 2 also need to maintain the three tables of the Saga state machine and configure a StateMachineEngine in the Spring Bean configuration file?

**A:** No, it's not needed. Logs are only recorded by the initiator, and since Saga logs are only recorded by the initiator and the participant services do not have interface parameter requirements, Saga can easily integrate services from other organizations or legacy systems.

**Q:** If services in systems 1 and 2 can call each other and both can initiate global transactions, can they be used in this way? Then, do both systems 1 and 2 need to maintain the three tables of the Saga state machine and configure a StateMachineEngine?

**A:** Yes, they can be used in this way. If both systems initiate Saga transactions, then both would need to record those three tables and configure a StateMachineEngine.

**Q:** When using Seata, it's currently in AT mode. How big would the transformation be if we switched to Saga mode?

**A:** AT mode is completely transparent, whereas Saga is more invasive as it requires configuration of the state machine JSON. If there are many services, the transformation could be substantial.

**Q:** Is Saga mode an enhancement of long transaction processing based on AT mode?

**A:** No, it's not based on AT. The client sides are completely separate, though the server side is reused. You can see many examples in Saga's unit tests: [https://github.com/apache/incubator-seata/tree/develop/test/src/test/java/io/seata/saga/engine](https://github.com/apache/incubator-seata/tree/develop/test/src/test/java/io/seata/saga/engine)

**Q:** In the developer documentation, the state machine engine's principle diagram shows an EventQueue that is used only for initiating distributed transactions and calling other system services as if calling local services. Are the systems still using RPC calls? And is it not purely event-driven between systems? (By "purely event-driven between systems," I mean even RPC is non-blocking.)

**A:** Nodes are event-driven between each other. Non-blocking RPC requires support from the RPC client, which is theoretically possible. If the RPC client is also non-blocking IO, then all aspects are asynchronous.

**Q:** Consider a business process where subsequent sub-processes, regardless of which runs first, do not affect each other and can be called asynchronously. These sub-processes are services of other systems. Has Seata Saga implemented this, and are the individual nodes asynchronous in Saga's asynchronous calls?

**A:** The asynchronous start of a state machine (stateMachineEngine.startAsync) means that all states within the state machine are executed driven by events. The entire process is actually synchronous; the next state's event is generated only after the previous state ends. However, calling a service asynchronously is configuring that ServiceTask as "IsAsync": true. This service will be called asynchronously and will not block the progress of the state machine, which does not care about its execution result.

**Q:** What are the roles of the synchronous bus and asynchronous bus in the event-driven layer of Saga's source code?

**A:** The synchronous BUS is thread-blocking and returns only after the entire state machine has finished executing. The asynchronous BUS is non-thread-blocking; it returns immediately after the call, and the state machine engine calls back your Callback after it has finished executing.

**Q:** IsPersist: Does the execution log get stored? It's true by default, but some query-type services can be configured to false, so the execution log is not stored to improve performance, as services can be re-executed in case of exception recovery, right?

**A:** Yes, it can be configured to false. However,

it's recommended to keep the default initially for a complete query execution log. Performance tuning can be considered later if needed; generally, there shouldn't be performance issues.

**Q:** For seata saga, if the client initiating the transaction or the seata server side crashes or restarts, how are unfinished state machine instances ensured to continue execution? Who triggers this operation?

**A:** State machine instances are logged in the local database and recovered through these logs. The seata server triggers transaction recovery.

**Q:** Does Saga's JSON file support hot deployment?

**A:** Yes, it supports hot deployment. You can use stateMachineEngine.getStateMachineConfig().getStateMachineRepository().registryByResources(). However, Java code and services need to implement support for hot deployment themselves.

**Q:** If both inputs and outputs are placed in Saga's context, and if there are many or large parameters and a large volume of business, are there any memory limitations?

**A:** There are no limitations set. It's recommended not to put irrelevant parameters into the context. Parameters needed by the next service or for branch judgment can be put into the context.

**Q:** Just to confirm: Each node either handles exceptions internally to ensure there are return messages, or does not handle them internally and lets the state machine engine catch exceptions, defining the Catch attribute in JSON. So, compensation nodes do not automatically trigger compensation; manual intervention is needed in JSON, routing to CompensationTrigger through Catch or Choices attributes, right?

**A:** Yes, that's correct. This design is to increase flexibility. Users can control whether to roll back because not all exceptions require rollback; there may be some custom handling methods.

**Q:** So Catch and Choices can be freely routed to the desired state, right?

**A:** Yes. This custom compensation triggering design is based on BPMN 2.0.

**Q:** Regarding the JSON file, I plan to define one JSON for one process. Even though some processes are similar and can be solved with Choices, I feel the JSON should be as simple as possible. Is this consideration correct?

**A:** You can consider using a sub-state machine for reuse. A sub-state machine will generate an additional line of stateMachineInstance records, but the impact on performance should be minimal.
