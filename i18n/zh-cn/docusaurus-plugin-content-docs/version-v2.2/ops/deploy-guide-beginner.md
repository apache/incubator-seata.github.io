---
title: 新人文档
keywords: [Seata]
description: Seata分TC、TM和RM三个角色，TC（Server端）为单独服务端部署，TM和RM（Client端）由业务系统集成。
---

# 部署指南
## Seata新手部署指南
Seata分TC、TM和RM三个角色，TC（Server端）为单独服务端部署，TM和RM（Client端）由业务系统集成。

### 资源目录介绍
#### <a href="https://github.com/apache/incubator-seata/tree/master/script" target="_blank">点击查看(或根据版本分支选择对应的资源目录)</a>
- client
> 存放client端sql脚本 (包含 undo_log表) ，参数配置
- config-center
> 各个配置中心参数导入脚本，config.txt(包含server和client，原名nacos-config.txt)为通用参数文件
- server
> server端数据库脚本 (包含 lock_table、branch_table 与 global_table) 及各个容器配置


### 注意事项
- seata-spring-boot-starter
```
内置GlobalTransactionScanner自动初始化功能，若外部实现初始化，请参考SeataAutoConfiguration保证依赖加载顺序
默认开启数据源自动代理，可配置seata.enable-auto-data-source-proxy: false关闭
```
- spring-cloud-starter-alibaba-seata
> <a href="https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E" target="_blank">查看版本说明</a>
> 2.1.0内嵌seata-all 0.7.1，2.1.1内嵌seata-all 0.9.0，2.2.0内嵌seata-spring-boot-starter 1.0.0, 2.2.1内嵌seata-spring-boot-starter 1.1.0
```
    2.1.0和2.1.1兼容starter解决方案:
@SpringBootApplication注解内exclude掉spring-cloud-starter-alibaba-seata内的com.alibaba.cloud.seata.GlobalTransactionAutoConfiguration
```

- spring-cloud-starter-alibaba-seata推荐依赖配置方式

```java
           <dependency>
                <groupId>org.apache.seata</groupId>
                <artifactId>seata-spring-boot-starter</artifactId>
                <version>最新版</version>
            </dependency>
            <dependency>
                <groupId>com.alibaba.cloud</groupId>
                <artifactId>spring-cloud-starter-alibaba-seata</artifactId>
                <version>最新版本</version>
                <exclusions>
                    <exclusion>
                        <groupId>org.apache.seata</groupId>
                        <artifactId>seata-spring-boot-starter</artifactId>
                    </exclusion>
                </exclusions>
            </dependency>
```



### 启动Server

Server端存储模式（store.mode）现有file、db、redis、raft，file模式无需改动，直接启动即可,raft部署方式请访问[专门部署文档](/docs/ops/deploy-server-raft/)，下面专门讲下db和redis启动步骤。
注： file模式为单机模式，全局事务会话信息内存中读写并异步(默认)持久化本地文件root.data，性能较高;

db模式为高可用模式，全局事务会话信息通过db共享，相应性能差些;

redis模式Seata-Server 1.3及以上版本支持,性能较高,存在事务信息丢失风险,请提前配置合适当前场景的redis持久化配置.

#### 步骤一：启动包
- <a href="https://github.com/apache/incubator-seata/releases" target="_blank">点击下载</a>
- 官方钉钉群（群号：23171167，1群5000人已满，<a href="/community" target="_blank">2群</a>, 3群: 32033786，4群：60170003910），qq群（群号: 254657148,2群: 216012363）群文件共享下载

#### 步骤二：建表(仅db)
全局事务会话信息由3块内容构成，全局事务-->分支事务-->全局锁，对应表global_table、branch_table、lock_table

#### 步骤三：修改store.mode

启动包: seata-->conf-->application.yml，修改store.mode="db或者redis"
源码:   根目录-->seata-server-->resources-->application.yml，修改store.mode="db或者redis"

#### 步骤四：修改数据库连接|redis属性配置

启动包: seata-->conf-->application.example.yml中附带额外配置，将其db|redis相关配置复制至application.yml,进行修改store.db或store.redis相关属性。
源码:   根目录-->seata-server-->resources-->application.example.yml中附带额外配置，将其db/redis相关配置复制至application.yml,进行修改store.db或store.redis相关属性。


#### 步骤五：启动

- 源码启动: 执行ServerApplication.java的main方法
- 命令启动: seata-server.sh -h 127.0.0.1 -p 8091 -m db
```
    -h: 注册到注册中心的ip
    -p: Server rpc 监听端口
    -m: 全局事务会话信息存储模式，file、db、redis，优先读取启动参数 (Seata-Server 1.3及以上版本支持redis)
```

注: 堆内存建议分配2G，堆外内存1G

### 业务系统集成Client
#### 步骤一：添加seata依赖（建议单选）
- 依赖seata-all
- 依赖seata-spring-boot-starter，支持yml、properties配置(.conf可删除)，内部已依赖seata-all
- 依赖spring-cloud-starter-alibaba-seata，内部集成了seata，并实现了xid传递

#### 步骤二：undo_log建表、配置参数(仅AT模式)
- <a href="/docs/user/configurations/" target="_blank">查看参数配置介绍</a>

#### 步骤三：数据源代理（不支持自动和手动配置并存）

1. 如果使用seata-all
    - 0.9.0版本开始seata支持自动代理数据源
        ```
        1.1.0: seata-all取消属性配置，改由注解@EnableAutoDataSourceProxy开启，并可选择jdk proxy或者cglib proxy
        1.0.0: client.support.spring.datasource.autoproxy=true
        0.9.0: support.spring.datasource.autoproxy=true
        ```
        如果采用XA模式，`@EnableAutoDataSourceProxy(dataSourceProxyMode = "XA")`

    - 手动配置可参考下方的例子
        ```
        @Primary
        @Bean("dataSource")
        public DataSource dataSource(DataSource druidDataSource) {
            //AT 代理 二选一
            return new DataSourceProxy(druidDataSource);
            //XA 代理
            return new DataSourceProxyXA(druidDataSource)
        }
        ```

2. 如果使用seata-starter
    - 使用自动代理数据源时，如果使用XA模式还需要调整配置文件
        application.properties
        ```
        seata.data-source-proxy-mode=XA
        ```
        application.yml
        ```
        seata:
          data-source-proxy-mode: XA
        ```

    - 如何关闭seata-spring-boot-starter的数据源自动代理？
        application.properties
        ```
        seata.enable-auto-data-source-proxy=false
        ```
        application.yml
        ```
        seata:
          enable-auto-data-source-proxy: false
        ```

#### 步骤四：初始化GlobalTransactionScanner
- 手动
```  @Bean
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
- 自动，引入seata-spring-boot-starter、spring-cloud-starter-alibaba-seata等jar

#### 步骤五：实现xid跨服务传递
- 手动
参考源码integration文件夹下的各种rpc实现 module
- 自动
springCloud用户可以引入spring-cloud-starter-alibaba-seata，内部已经实现xid传递

## 业务使用

### 注解拦截

#### 全局事务

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
 * 定义两阶段提交 name = 该tcc的bean名称,全局唯一 commitMethod = commit 为二阶段确认方法 rollbackMethod = rollback 为二阶段取消方法
 * useTCCFence=true 为开启防悬挂
 * BusinessActionContextParameter注解 传递参数到二阶段中
 *
 * @param params  -入参
 * @return String
 */
@TwoPhaseBusinessAction(name = "beanName", commitMethod = "commit", rollbackMethod = "rollback", useTCCFence = true)
public void insert(@BusinessActionContextParameter(paramName = "params") Map<String, String> params) {
    logger.info("此处可以预留资源,或者利用tcc的特点,与AT混用,二阶段时利用一阶段在此处存放的消息,通过二阶段发出,比如redis,mq等操作");
}

/**
 * 确认方法、可以另命名，但要保证与commitMethod一致 context可以传递try方法的参数
 *
 * @param context 上下文
 * @return boolean
 */
public void commit(BusinessActionContext context) {
    logger.info("预留资源真正处理,或者发出mq消息和redis入库");
}

/**
 * 二阶段取消方法
 *
 * @param context 上下文
 * @return boolean
 */
public void rollback(BusinessActionContext context) {
    logger.info("预留资源释放,或清除一阶段准备让二阶段提交时发出的消息缓存");
}
```

### 切点表达式

#### 全局事务

```java
    @Bean
    public AspectTransactionalInterceptor aspectTransactionalInterceptor () {
        return new AspectTransactionalInterceptor();
    }

    @Bean
    public Advisor txAdviceAdvisor(AspectTransactionalInterceptor aspectTransactionalInterceptor ) {
        AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
        pointcut.setExpression("配置切点表达式使全局事务拦截器生效");
        return new DefaultPointcutAdvisor(pointcut, aspectTransactionalInterceptor);
    }
```

