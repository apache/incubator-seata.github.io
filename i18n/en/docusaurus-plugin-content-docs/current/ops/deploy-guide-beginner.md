---
title: Beginner Deployment Guide
keywords: [Seata]
description: Seata has three roles TC, TM and RM. TC (Server side) is deployed as a separate server, while TM and RM (Client side) are integrated by the business system.
---

# Deployment Guide
## Seata Beginner Deployment Guide
Seata has three roles: TC, TM and RM. TC (Server side) is deployed as a separate server, while TM and RM (Client side) are integrated by the business system.

### Resource Directory Introduction
#### <a href="https://github.com/apache/incubator-seata/tree/master/script" target="_blank">Click to view</a>. You can also select the corresponding resource directory according to the version branch.

-client
> Store client-side sql script (including undo_log table) and parameter configuration.
-config-center
> Each configuration center parameter import script, config.txt (including server and client, formerly known as nacos-config.txt) is a genernal parameter file.
- server
> Store server-side database script (including lock_table, branch_table and global_table) and container configuration.


### Precautions
- seata-spring-boot-starter
```
It has the built-in GlobalTransactionScanner automatic initialization function. If initialization is implemented externally, please refer to SeataAutoConfiguration to ensure that the dependencies loads orderly.
Data source automatic proxy is turned on by default, and it can be turned off by configuring seata.enable-auto-data-source-proxy: false.
```
- spring-cloud-starter-alibaba-seata
> <a href="https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E" target ="_blank">View release notes</a>. <br/>
> 2.1.0 embeds seata-all 0.7.1, 2.1.1 embeds seata-all 0.9.0, 2.2.0 embeds seata-spring-boot-starter 1.0.0, 2.2.1 embeds seata-spring- boot-starter 1.1.0
```
    Solutions for 2.1.0 and 2.1.1 compatible starter:
In the @SpringBootApplication annotation, exclude com.alibaba.cloud.seata.GlobalTransactionAutoConfiguration in spring-cloud-starter-alibaba-seata
```

- Recommendations for spring-cloud-starter-alibaba-seata dependency configuration 

```java
            <dependency>
                 <groupId>io.seata</groupId>
                 <artifactId>seata-spring-boot-starter</artifactId>
             </dependency>
             <dependency>
                 <groupId>com.alibaba.cloud</groupId>
                 <artifactId>spring-cloud-starter-alibaba-seata</artifactId>
                 <exclusions>
                     <exclusion>
                         <groupId>io.seata</groupId>
                         <artifactId>seata-spring-boot-starter</artifactId>
                     </exclusion>
                 </exclusions>
             </dependency>
```



### Start Server

There are currently three server-side storage modes (store.mode): file, db, redis, raft. The file mode does not need to be changed and can be started directly. The following specifically explains the db and redis startup steps.

Note: The file mode is a stand-alone mode. The global transaction session information is read and written in the memory and the local file root.data is persisted. So the performance is quite well;

The db mode is a high-availability mode. Global transaction session information is shared through db, but the corresponding performance is poor;

The redis mode is supported by Seata-Server 1.3 and above. It has high performance and risks losing transaction information. Please configure the redis persistence configuration suitable for the current scenario in advance.

#### Step 1: Startup package
- <a href="https://github.com/apache/incubator-seata/releases" target="_blank">Click to download</a>.
- Official DingTalk group (Group Number: 23171167, 1st group is already full, including 5,000 people, <a href="/community" target="_blank">2nd group</a>, group 3: 32033786，group 4: 60170003910), QQ group (Group Number: 254657148, group 2: 216012363). Please download packages in the group sharing file.1

#### Step 2: Create table (db only)
Global transaction session information consists of three pieces of content, that is global transaction-->branch transaction-->global lock, corresponding to the tables global_table, branch_table, and lock_table.

#### Step 3: Modify store.mode

Startup package: seata-->conf-->application.yml, modify store.mode="db" or "redis"
Source code: root directory-->seata-server-->resources-->application.yml, modify store.mode="db" or "redis"

#### Step 4: Modify database connection|redis attribute configuration

Startup package: seata-->conf-->application.example.yml comes with additional configuration, copy its db|redis related configuration to application.yml, and modify store.db or store.redis related properties.
Source code: Root directory-->seata-server-->resources-->application.example.yml comes with additional configuration, copy its db|redis related configuration to application.yml, and modify store.db or store.redis related Attributes.

#### Step 5: Start

- Source code startup: execute the main method in ServerApplication.java
- Command to start: seata-server.sh -h 127.0.0.1 -p 8091 -m db

```
    -h: IP registered to the registration center
    -p: Server rpc listening port
    -m: Global transaction session information storage mode, file, db, redis. Read startup parameters first (Seata-Server 1.3 and above supports redis)
    -n: Server node. When there are multiple servers, each node needs to be distinguished to generate transactionIds in different intervals to avoid conflicts.
    -e: Multi-environment configuration please refers to https://seata.apache.org/docs/ops/multi-configuration-isolation/.
```

- <a href="/docs/ops/deploy-by-docker" target="_blank">Click to view docker deployment</a>

Note: It is recommended to allocate 2G of heap memory and 1G of off-heap memory.

### Business system integration Client
#### Step 1: Add seata dependency (single choice recommended)
- Depends on seata-all.
- Depends on seata-spring-boot-starter, supporting yml and properties configuration (.conf can be deleted), and relies on seata-all internally.
- Depends on spring-cloud-alibaba-seata, integrates seata internally, and implements xid transfer.

#### Step 2: Create undo_log table and configure parameters (AT mode only)
- <a href="/docs/user/configurations" target="_blank">View parameter configuration introduction</a>.

#### Step 3: Data source proxy (coexistence of automatic and manual configuration is not supported)

1. If using seata-all
    - Starting from version 0.9.0, seata supports automatic proxy data sources.
        ```
        1.1.0: seata-all cancels the attribute configuration and switches it to the annotation @EnableAutoDataSourceProxy, and you can choose jdk proxy or cglib proxy
        1.0.0: client.support.spring.datasource.autoproxy=true
        0.9.0: support.spring.datasource.autoproxy=true
        ```
        If XA mode is used, `@EnableAutoDataSourceProxy(dataSourceProxyMode = "XA")`
    
    - For manual configuration, please refer to the example below
        ```
        @Primary
        @Bean("dataSource")
        public DataSource dataSource(DataSource druidDataSource) {
            //AT agent (choose one of the two)
            return new DataSourceProxy(druidDataSource);
            //XA proxy
            return new DataSourceProxyXA(druidDataSource)
        }
        ```

2. If using seata-starter
    - When using automatic proxy data sources, you need to adjust the configuration file if you use XA mode
        application.properties
        ```
        seata.data-source-proxy-mode=XA  
        ```
        application.yml
        ```
        seata:
          data-source-proxy-mode: XA
        ```
    - How to turn off the data source automatic proxy of seata-spring-boot-starter?
         application.properties
         ```
         seata.enable-auto-data-source-proxy=false
         ```
         application.yml
         ```
         seata:
           enable-auto-data-source-proxy: false
         ```

#### Step 4: Initialize GlobalTransactionScanner
- Manual
``` @Bean
        @Bean
        public GlobalTransactionScanner globalTransactionScanner() {
            String applicationName = this.applicationContext.getEnvironment().getProperty("spring.application.name");
            String txServiceGroup = this.seataProperties.getTxServiceGroup();
            if (StringUtils.isEmpty(txServiceGroup)) {
                txServiceGroup = applicationName + "-fescar-service-group";
                this.seataProperties.setTxServiceGroup(txServiceGroup);
            }
   
            return new GlobalTransactionScanner(applicationName, txServiceGroup);
        }
```
- Automatic <br/>
You can introduce seata-spring-boot-starter, spring-cloud-starter-alibaba-seata and other jars

#### Step 5: Implement xid cross-service transfer
- Manual <br/>
Refer to the various rpc implementation modules under the source code integration folder.
- Automatic <br/>
SpringCloud users can introduce spring-cloud-starter-alibaba-seata, and xid transfer has been implemented internally.

## Business use

### Annotation interception

#### Global affairs

```java
@GetMapping(value = "testCommit")
@GlobalTransactional
public Object testCommit(@RequestParam(name = "id",defaultValue = "1") Integer id,
    @RequestParam(name = "sum", defaultValue = "1") Integer sum) {
    Boolean ok = productService.reduceStock(id, sum);
    if (ok) {
        LocalDateTime now = LocalDateTime.now();
        Orders orders = new Orders();
        orders.setCreateTime(now);
        orders.setProductId(id);
        orders.setReplaceTime(now);
        orders.setSum(sum);
        orderService.save(orders);
        return "ok";
    } else {
        return "fail";
    }
}
```

#### TCC

```java
/**
 * Define two-phase commit: name = bean name of the tcc (globally unique), commitMethod = commit (the two-phase confirmation method) and rollbackMethod = rollback (the two-phase cancellation method)
 * useTCCFence=true (enable anti-hanging)
 * BusinessActionContextParameter annotation passes parameters to the second stage
 *
 * @param params - input parameters
 * @return String
 */
@TwoPhaseBusinessAction(name = "beanName", commitMethod = "commit", rollbackMethod = "rollback", useTCCFence = true)
public void insert(@BusinessActionContextParameter(paramName = "params") Map<String, String> params) {
    logger.info("此处可以预留资源,或者利用tcc的特点,与AT混用,二阶段时利用一阶段在此处存放的消息,通过二阶段发出,比如redis,mq等操作");
}


/**
 * The confirmation method can be named differently, but it must be consistent with commitMethod. The context can pass the parameters of the try method.
 *
 * @param context context
 * @return boolean
 */
public void commit(BusinessActionContext context) {
    logger.info("预留资源真正处理,或者发出mq消息和redis入库");
}

/**
 * Two-stage cancellation method
 *
 * @param context context
 * @return boolean
 */
public void rollback(BusinessActionContext context) {
    logger.info("预留资源释放,或清除一阶段准备让二阶段提交时发出的消息缓存");
}
```

### Pointcut expression

#### Global affairs

```java
    @Bean
    public AspectTransactionalInterceptor aspectTransactionalInterceptor () {
        return new AspectTransactionalInterceptor();
    }

    @Bean
    public Advisor txAdviceAdvisor(AspectTransactionalInterceptor aspectTransactionalInterceptor ) {
        AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
        pointcut.setExpression("Configure pointcut expression to enable global transaction interceptor");
        return new DefaultPointcutAdvisor(pointcut, aspectTransactionalInterceptor);
    }
```