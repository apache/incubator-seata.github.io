---
title: Analysis of Applicable Models and Scenarios for TCC
author: zhangthen
date: 2019/03/27
keywords: [seata, distributed transaction, TCC, roadmap]
---

# TCC Applicable Model and Applicable Scenario Analysis

Fescar 0.4.0 version released the TCC model, contributed by the ant gold service team, welcome to try, the end of the article also provides the project follow-up Roadmap, welcome to pay attention.
<a name="2143093f"></a>

## Preface: Application scenarios based on TCC model
 <br />
![1.png](/img/blog/TCC1.png)<br />

The TCC distributed transaction model acts directly on the service layer. It is not coupled with the specific service framework, has nothing to do with the underlying RPC protocol, has nothing to do with the underlying storage media, can flexibly choose the locking granularity of the business resources, reduces the resource locking holding time, has good scalability, and can be said to be designed for independently deployed SOA services.


<a name="d9b462de"></a>

## I. TCC model advantages

For TCC distributed transaction model, I think its application in business scenarios, there are two aspects of significance.

<a name="95179108"></a>

### 1.1 Distributed transaction across services

The splitting of services can also be thought of as horizontal scaling of resources, only in a different direction.

Horizontal extensions may go along two directions:

1. functional scaling, where data is grouped according to function and different functional groups are distributed over multiple different databases, which is effectively servitisation under the SOA architecture.
1. data sharding, which adds a new dimension to horizontal scaling by splitting data across multiple databases within functional groups.

The following figure briefly illustrates the horizontal data scaling strategy:

![2.png](/img/blog/TCC2.png)

Therefore, one of the roles of TCC is to ensure the transaction property of multi-resource access when scaling resources horizontally by function.

<a name="240e4d15"></a>

### 1.2 Two-stage splitting

Another effect of TCC is that it splits the two phases into two separate phases that are related by means of resource business locking. The advantage of resource locking is that it does not block other transactions from continuing to use the same resources in the first phase, nor does it affect the correct execution of the second phase of the transaction.

**The traditional model of concurrent transactions:**<br />
![3.png](/img/blog/TCC3.png)

**Concurrent transactions for the TCC model:**<br />
![4.png](/img/blog/TCC4.png)

How does this benefit the business? Taking the secured transaction scenario of Alipay, the simplified case involves only two services, the transaction service and the billing service. The transaction service is the main business service, and the accounting service is the slave business service, which provides the Try, Commit, and Cancel interfaces:

1. The Try interface deducts the user's available funds and transfers them to pre-frozen funds. Pre-frozen funds is the business locking programme, each transaction can only use the pre-frozen funds of this transaction in the second phase, and other concurrent transactions can continue to process the user's available funds after the first phase of execution.
1. The Commit interface deducts the pre-frozen funds and increases the funds available in the intermediate account (secured transactions do not immediately credit the merchant and require an intermediate account for suspense).

Assuming there is only one intermediary account, every time the Commit interface of the payment service is called, it locks the intermediary account, and there are hotspot performance issues with the intermediary account. However, in the secured transaction scenario, the funds need to be transferred from the intermediate account to the merchant only after seven days, and the intermediate account does not need to be displayed to the public. Therefore, after executing the first stage of the payment service, it can be considered that the payment part of this transaction has been completed and return the result of successful payment to the user and the merchant, and does not need to execute the Commit interface of the second stage of the payment service right away, and wait until the low-frontal period, and then slowly digest it and execute it asynchronously. <br />
![5.png](/img/blog/TCC5.png)

This is the two-phase asynchronisation feature of TCC distributed transaction model, the first phase of execution from the business service is successful, the master business service can be committed to complete, and then the framework asynchronously execute the second phase of each slave business service.

<a name="ad5fc026"></a>

## General-purpose TCC solution

The generic TCC solution is the most typical implementation of the TCC distributed transaction model, where all the slave business services need to participate in the decision making of the master business service. <br />
![6.png](/img/blog/TCC6.png)<br />
<a name="62b37e99"></a>

### Applicable scenarios

Since the slave business services are invoked synchronously and their results affect the decisions of the master business service, the generic TCC distributed transaction solution is suitable for businesses with deterministic and short execution times, such as the three most core services of an Internet financial enterprise: transaction, payment, and accounting:<br />
![7.png](/img/blog/TCC7.png)<br /> <br /> When a user initiates a transaction, the transaction service is accessed first to create the transaction order; then the transaction service calls the payment service to create the payment order for the transaction and performs the collection action, and finally, the payment service calls the billing service to record the account flow and bookkeeping.

In order to ensure that the three services work together to complete a transaction, either succeed or fail at the same time, you can use a general-purpose TCC solution that puts the three services in a distributed transaction, with the transaction as the master service, the payment as the slave service, and the billing as the nested slave service of the payment service, and the atomicity of the transaction is guaranteed by the TCC model. <br />
![8.png](/img/blog/TCC8.png)

The Try interface of the payment service creates the payment order, opens a nested distributed transaction, and calls the Try interface of the billing service; the billing service freezes the buyer's funds in the Try interface. After the first stage of the call is completed, the transaction is completed, the local transaction is submitted, and the TCC framework completes the second stage of the distributed transaction from the business service.

The second stage of the payment service first calls the Confirm interface of the accounting service to deduct the buyer's frozen funds and increase the seller's available funds. After the call is successful, the payment service modifies the payment order to the completed state and completes the payment.

When both payment and billing service phase 2 are finished, the whole distributed transaction is finished.

<a name="827f0f82"></a>

## Asynchronous guaranteed TCC solution

The direct slave service of the asynchronous assured TCC solution is the reliable messaging service, while the real slave service is decoupled by the messaging service and executed asynchronously as the consumer of the messaging service. <br />
![9.png](/img/blog/TCC9.png)<br /> <br /> The Reliable Messaging Service needs to provide three interfaces, Try, Confirm, and Cancel. The Try interface pre-sends, and is only responsible for persistently storing the message data; the Confirm interface confirms the sending, and this is when the actual delivery of the message begins The Confirm interface confirms the delivery, which is when the actual delivery of the message begins; and the Cancel interface cancels the delivery and deletes the message data.

The message data of the message service is stored independently and scaled independently, which reduces the coupling between the business service and the messaging system, and achieves the ultimate consistency of the distributed transaction under the premise that the message service is reliable.

This solution increases the maintenance cost of message service, but since message service implements TCC interface instead of slave business service, slave business service doesn't need any modification and the access cost is very low.

<a name="62b37e99-1"></a>

### Application scenario

Since consuming messages from a business service is an asynchronous process, the execution time is uncertain, which may lead to an increase in the inconsistency time window. Therefore, the Asynchronous Ensured TCC Distributed Transaction Solution is only applicable to some passive businesses that are less sensitive to the final consistency time (the processing result of the slave business service does not affect the decision of the master business service, and only passively receives the decision result of the master business service). For example, the member registration service and the email sending service:<br />
![10.png](/img/blog/TCC10.png)<br /> <br />When a user registers for a membership successfully, an email needs to be sent to the user to tell the user that the registration was successful and to prompt the user to activate the membership. But pay attention to two points:

1. If the user registration is successful, make sure to send an email to the user;
1. if the user's registration fails, an email must not be sent to the user.

So again, this requires the membership service and the mail service to ensure atomicity, either both are executed or neither is executed. The difference is that the mail service is only a passive business, it does not affect whether the user can register successfully or not, it only needs to send an email to the user after the user has registered successfully, and the mail service does not need to be involved in the decision making of the activities of the membership service.

For this kind of business scenario, you can use the asynchronous ensured TCC distributed transaction solution, as follows:<br />
![11.png](/img/blog/TCC11.png)<br /> <br /> <br /> The reliable messaging service decouples the member and mail services, and the member service and the messaging service comprise the TCC transaction model, which ensures the atomicity of transactions. Then through the reliable feature of the message service, it ensures that the message can definitely be consumed by the mail service, so that the member and the mail service are in the same distributed transaction. At the same time, the mail service will not affect the execution process of the member service, and will only passively receive the request to send mail after the member service is executed successfully.

<a name="69910d05"></a>

## Compensated TCC solution

Compensated TCC solution is similar in structure to generic TCC solution, and its slave services also need to participate in the decision making of the main business service. However, the difference is that the former slave service only needs to provide Do and Compensate two interfaces, while the latter needs to provide three interfaces. <br />
![12.png](/img/blog/TCC12.png)<br /> <br /> The Do interface directly executes the real complete business logic, completes the business processing, and the result of the business execution is visible externally; the Compensate operation is used for the business compensation, which offsets or partially offsets the business result of the positive business operation. Compensate operation needs to satisfy idempotency. <br />Compensate operation is used to offset or partially offset the business results of positive business operations, and the Compensate operation needs to satisfy idempotency. <br />Compared with the general-purpose solution, Compensate solution does not need to transform the original business logic from the business service, and only needs to add an additional Compensate rollback logic, which is a lesser business transformation. However, it is important to note that the business executes the entire business logic in one phase and cannot achieve effective transaction isolation. When rollback is required, there may be a compensation failure, and additional exception handling mechanisms, such as manual intervention, are also required.

<a name="62b37e99-2"></a>

### Applicable scenarios

Due to the existence of rollback compensation failure, the compensated TCC distributed transaction solution is only applicable to some of the less concurrent conflict or need to interact with external business, these external business is not a passive business, its execution results will affect the decision of the main business service, such as the ticket booking service of the air ticket agency:<br />
![13.png](/img/blog/TCC13.png)<br /> <br /> This air ticket service provides multi-destination air ticket booking service, which can book air tickets for multiple itinerary flights at the same time, e.g., to travel from Beijing to St. Petersburg, it is necessary to take the first journey from Beijing to Moscow, as well as the second journey from Moscow to St. Petersburg.

When a user books a ticket, he/she would definitely want to book tickets for both flights at the same time, and booking only one flight does not make sense for the user. Therefore, such a business service also imposes the atomicity requirement that if the booking for one of the flights fails, the other flight needs to be able to be cancelled.

However, it is extremely difficult to push the airlines to change as they are external to the ticket agents and only provide booking and cancellation interfaces. Therefore, for this type of business service, a compensated TCC distributed transaction solution can be used, as follows:<br />
![14.png](/img/blog/TCC14.png)

The gateway service adds the Compensate interface on top of the original logic, which is responsible for calling the cancellation interface of the corresponding airline.

When the user initiates a ticket booking request, the ticket service first calls the booking interface of each airline through the Do interface of the gateway, and if all flights are booked successfully, the whole distributed transaction is executed successfully; once the booking of tickets for a certain flight fails, the distributed transaction is rolled back, and the Compensate interface of each gateway is called by the TCC transaction framework, which then calls the corresponding airline's The TCC transaction framework calls the Compensate compensation interface of each gateway, which then calls the corresponding airline's cancellation interface. In this way, the atomicity of multi-way ticket booking service can also be guaranteed.

<a name="acfe75a0"></a>

## V. Summary

For today's Internet applications, horizontal scaling of resources provides more flexibility and is a relatively easy to implement outward scaling solution, but at the same time, it also significantly increases the complexity and introduces some new challenges, such as data consistency issues between resources.

Horizontal data scaling can be done both by data slicing and by functionality. the TCC model ensures the transactional properties of multi-resource access while scaling resources horizontally by functionality.

TCC model in addition to the role of cross-service distributed transactions this layer , but also has a two-stage division of the function , through the business resource locking , allowing the second stage of asynchronous execution , and asynchronous idea is to solve the hot spot data concurrency performance problems of one of the tools . <br />
<a name="Roadmap"></a>

## Roadmap

Currently, we have released 0.4.0, and we will release 0.5 ~ 1.0 to continue to improve and enrich the functionality of AT and TCC modes, and to solve the problem of high availability of the server side. After 1.0, this open source product will reach the standard of production environment. <br /><br /><br />![image1.png](/img/blog/roadmap.png)<br />

