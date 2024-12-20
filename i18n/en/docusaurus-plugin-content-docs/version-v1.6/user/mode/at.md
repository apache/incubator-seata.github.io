---
title: Seata AT Mode
keywords: [Seata, AT]
description: User guide for Seata AT mode
---
# Seata AT Mode

## Overview

AT Mode is an innovative non-intrusive distributed transaction solution introduced by Seata. Seata internally incorporates a proxy layer for database operations. When using Seata AT Mode, we effectively utilize Seata's built-in data source proxy, where Seata adds various logic, such as inserting rollback undo_log logs and checking global locks.

In this document, we will focus on the usage of Seata AT Mode. If you are interested in the principles behind the AT Mode, please read the corresponding [Developer Guide](../../dev/mode/at-mode).

### Overall Mechanism

Evolution of Two-Phase Commit Protocol:

- First Phase: Business data and rollback logs are committed in the same local transaction, releasing local locks and connection resources.
- Second Phase:
    - Asynchronous commit, completed very quickly.
    - Rollback is compensated through the rollback logs of the first phase.

## Basic Usage

Let's abstract a use case where, during a user's purchase action, we need to decrease inventory and reduce the account balance. When the `stock_tbl` and `account_tbl` tables are in the same database, we can easily implement the transaction using the capabilities of the relational database itself. However, if these two tables belong to different data sources, we need to leverage Seata's distributed transaction capabilities.

Examine the example code below:

```java
@GlobalTransactional
public void purchase(String userId, String commodityCode, int count, int money) {
    jdbcTemplateA.update("update stock_tbl set count = count - ? where commodity_code = ?", new Object[] {count, commodityCode});
    jdbcTemplateB.update("update account_tbl set money = money - ? where user_id = ?", new Object[] {money, userId});
}
```

If you have used the Spring framework's `@Transactional` annotation before, you can understand the functionality of `@GlobalTransactional` based on a similar naming analogy. Yes, here we introduce an annotation to easily implement distributed transaction capabilities, and using AT Mode can minimize the cost of business refactoring.

It is important to note that `jdbcTemplateA` and `jdbcTemplateB` use different data sources for construction, and both of these different data sources need to be wrapped using Seata's AT data source proxy class `DataSourceProxy`. For information on what the data source proxy helps us achieve, please read the [Transaction Isolation](../appendix/isolation#starting-with-the-proxy-data-source) section in the appendix.

## Getting Started

Follow the [Quick Start](../quickstart) section to get hands-on experience with a complete example.
