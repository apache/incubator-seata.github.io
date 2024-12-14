---
title: Integrating Seata Distributed Transaction with SpringBoot+Dubbo+MybatisPlus
keywords: [Seata, dubbo, mybatis, distributed transaction]
description: This article explains how to build the integration of Seata with SpringBoot+Dubbo+MybatisPlus using the direct connection approach.
author: FUNKYE
date: 2019/11/29
---

# SpringBoot+Dubbo+MybatisPlus integration Seata distributed transactions

[Project address](https://gitee.com/itCjb/springboot-dubbo-mybatisplus-seata )

This article was written by FUNKYE (Chen Jianbin), Hangzhou, an Internet company main program.

# Preface

**Transaction**: Transaction is a reliable independent unit of work composed of a set of operations, the transaction has the characteristics of ACID, namely atomicity, consistency, isolation and persistence.
**Distributed Transaction**: When an operation involves multiple services, multiple databases to collaborate on the completion (such as sub-tables and libraries, business split), multiple services, the local Transaction has been unable to cope with this situation , in order to ensure data consistency, you need to use distributed transactions.
**Seata** : is an open source distributed transaction solution , is committed to providing high performance and ease of use in the microservices architecture of distributed transaction services .
**Purpose of this article** : Nowadays, microservices are becoming more and more popular , and the market can be described as a number of distributed transaction solutions , uneven , more popular to MQ on behalf of the guarantee is the ultimate consistency of the message solution ( consumption confirmation , message lookback , message compensation mechanism , etc.) , and TX-LCN LCN mode to coordinate local transactions to ensure that the transaction unified commit or rollback (has stopped updating , incompatible with Dubbo2.7). MQ's distributed transactions are too complex, TX-LCN break more, this time the need for an efficient and reliable and easy to get started with the distributed transaction solution, Seata stands out, this article is to introduce how to quickly build a Demo project to integrate Seata, together!

# Preparation

1. First of all, install mysql, eclipse and other commonly used tools, which does not expand.

2. visit the seata download centre [address](/download/seata-server) we use version 0.9.0

3. Download and unzip seata-server.

## Build the library and table

1.first we link mysql to create a database named seata, and then run the table building sql, this in the seata-server conf folder db_store.sql is what I need to use the sql.

 ```mysql
 /*
 Navicat MySQL Data Transfer
 Source Server : mysql
 Source Server Version : 50721
 Source Host : localhost:3306
 Source Database : seata
 Target Server Type : MYSQL
 Target Server Version : 50721
 File Encoding : 65001
 Date: 2019-11-23 22:03:18
 */

 SET FOREIGN_KEY_CHECKS=0;

 -- ----------------------------

 -- Table structure for branch_table

 -- ----------------------------

 DROP TABLE IF EXISTS `branch_table`;
 CREATE TABLE `branch_table` (
  `branch_id` bigint(20) NOT NULL, `xid` varchar
  `xid` varchar(128) NOT NULL, `transaction_id` bigint(20)
  `transaction_id` bigint(20) DEFAULT NULL, `resource_group_id
  `resource_group_id` varchar(32) DEFAULT NULL, `resource_id` varchar(32)
  `resource_id` varchar(256) DEFAULT NULL, `lock_key` varchar(256)
  `lock_key` varchar(128) DEFAULT NULL,
  `branch_type` varchar(8) DEFAULT NULL, `status` tinyint(8)
  `status` tinyint(4) DEFAULT NULL,
  `client_id` varchar(64) DEFAULT NULL, `application_data` tinyint(4)
  `application_data` varchar(2000) DEFAULT NULL, `gmt_create` tinyint(4) DEFAULT NULL, `gmt_create
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL, `gmt_modified` datetime
  PRIMARY KEY (`branch_id`),
  KEY `idx_xid` (`xid`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

 -- ----------------------------

 -- Records of branch_table

 -- ----------------------------

 -- ----------------------------

 -- Table structure for global_table

 -- ----------------------------

 DROP TABLE IF EXISTS `global_table`;
 CREATE TABLE `global_table` (
  `xid` varchar(128) NOT NULL, `transaction_id` varchar(128)
  `transaction_id` bigint(20) DEFAULT NULL, `status` tinyint(20)
  `status` tinyint(4) NOT NULL, `application_id` varchar(4)
  `application_id` varchar(32) DEFAULT NULL, `transaction_service` bigint(20)
  `transaction_service_group` varchar(32) DEFAULT NULL,
  `transaction_name` varchar(128) DEFAULT NULL, `timeout` int(11.0)
  `timeout` int(11) DEFAULT NULL, `begin_time` big
  `begin_time` bigint(20) DEFAULT NULL, `application_data` int(11)
  `application_data` varchar(2000) DEFAULT NULL, `gmt_create` bigint(20)
  `gmt_create` datetime DEFAULT NULL, `gmt_modify` datetime
  `gmt_modified` datetime DEFAULT NULL, `gmt_modified` datetime
  PRIMARY KEY (`xid`),
  KEY `idx_gmt_modified_status` (`gmt_modified`, `status`), KEY `idx_tmt_status
  KEY `idx_transaction_id` (`transaction_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

 -- ----------------------------

 -- Records of global_table

 -- ----------------------------

 -- ----------------------------

 -- Table structure for lock_table

 -- ----------------------------

 DROP TABLE IF EXISTS `lock_table`;
 CREATE TABLE `lock_table` (
  `row_key` varchar(128) NOT NULL, `xid` varchar(128)
  `xid` varchar(96) DEFAULT NULL,
  `transaction_id` mediumtext, `branch_id` mediumtext, `transaction_id` mediumtext
  `branch_id` mediumtext,
  `resource_id` varchar(256) DEFAULT NULL, `table_name` varchar(256)
  `table_name` varchar(32) DEFAULT NULL,
  `pk` varchar(36) DEFAULT NULL, `gmt_create
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL, `gmt_modified` datetime
  PRIMARY KEY (`row_key`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

 -- ----------------------------

 -- Records of lock_table

 -- ----------------------------

 -- ----------------------------

 -- Table structure for undo_log

 -- ----------------------------

 DROP TABLE IF EXISTS `undo_log`;
 CREATE TABLE `undo_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT, `branch_id` bigint(20)
  `branch_id` bigint(20) NOT NULL, `xid` varchar
  `xid` varchar(100) NOT NULL,
  `context` varchar(128) NOT NULL, `rollback_info` bigint(20)
  `rollback_info` longblob NOT NULL, `log_status` int
  `log_status` int(11) NOT NULL, `log_created` datasheet
  `log_created` datetime NOT NULL, `log_modified` longblob NOT NULL, `log_status` int(11)
  `log_modified` datetime NOT NULL,
  `ext` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_undo_log` (`xid`,`branch_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

 -- ----------------------------

 -- Records of undo_log
 ```

2. After running the database needed for the above seata, we build the library we need to write the demo, create a database named test, and then execute the following sql code.

 ```mysql
 /*
 Navicat MySQL Data Transfer
 Source Server : mysql
 Source Server Version : 50721
 Source Host : localhost:3306
 Source Database : test
 Target Server Type : MYSQL
 Target Server Version : 50721
 File Encoding : 65001
 Date: 2019-11-23 22:03:24
 */

 SET FOREIGN_KEY_CHECKS=0;

 -- ----------------------------

 -- Table structure for test

 -- ----------------------------

 DROP TABLE IF EXISTS `test`.
 CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT, `one` varchar(255) DEFATE TABLE (
  `one` varchar(255) DEFAULT NULL,
  `two` varchar(255) DEFAULT NULL, `createTime` datetime, `createTime` datetime, `createTime` datetime
  `createTime` datetime DEFAULT NULL, `two` varchar(255) DEFAULT NULL, `createTime` datetime
  PRIMARY KEY (`id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

 -- ----------------------------

 -- Records of test

 -- ----------------------------

 INSERT INTO `test` VALUES ('1', '1', '2', '2019-11-23 16:07:34');

 -- ----------------------------

 -- Table structure for undo_log

 -- ----------------------------

 DROP TABLE IF EXISTS `undo_log`;.
 CREATE TABLE `undo_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT, `branch_id` bigint(20)
  `branch_id` bigint(20) NOT NULL, `xid` varchar
  `xid` varchar(100) NOT NULL,
  `context` varchar(128) NOT NULL, `rollback_info` bigint(20)
  `rollback_info` longblob NOT NULL, `log_status` int
  `log_status` int(11) NOT NULL, `log_created` datasheet
  `log_created` datetime NOT NULL, `log_modified` longblob NOT NULL, `log_status` int(11)
  `log_modified` datetime NOT NULL,
  `ext` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_undo_log` (`xid`,`branch_id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

 -- ----------------------------

 -- Records of undo_log
 ```

3. we find the file inside the seata-server/conf folder and edit it:![20191129132933](/img/blog/20191129132933.png)

4. again find the db configuration method block, change the method as follows:![](/img/blog/20191129133111.png)

Well, you can go to the bin directory./seata-server.bat run to see the

# Create a project

first of all, we use eclipse, of course, you can also use idea and other tools, please run in detail according to the following steps

1. create a new maven project, and delete the extra folder:![20191129133354](/img/blog/20191129133354.png)<img src="/img/blog/20191129133441.png" alt="20191129133441" style={{ zoom:'150%' }}  />

2. Open the project's pom.xml and add the following dependency.

```java
<properties
<webVersion>3.1</webVersion
<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding
<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding
<maven.compiler.source>1.8</maven.compiler.source
<maven.compiler.target>1.8</maven.compiler.target
<HikariCP.version>3.2.0</HikariCP.version
<mybatis-plus-boot-starter.version>3.2.0</mybatis-plus-boot-starter.version>
</properties
<parent>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-parent</artifactId>
<version>2.1.8.RELEASE</version>.
</parent
<dependencies
<dependency>
<groupId>org.apache.curator</groupId>
<artifactId>curator-framework</artifactId
<version>4.2.0</version>
</dependency
<dependency>
<groupId>org.apache.curator</groupId>
<artifactId>curator-recipes</artifactId>
<version>4.2.0</version>.
</dependency
<dependency>
<groupId>org.apache.dubbo</groupId>
<artifactId>dubbo-spring-boot-starter</artifactId>
<version>2.7.4.1</version>
</dependency
<dependency>
<groupId>org.apache.commons</groupId>
<artifactId>commons-lang3</artifactId>
</dependency
<dependency>
<groupId>com.alibaba</groupId
<artifactId>fastjson</artifactId>
<version>1.2.60</version>
</dependency
<! -- <dependency> <groupId>javax</groupId> <artifactId>javaee-api</artifactId>
<version>7.0</version> <scope>provided</scope> </dependency> -->
<dependency>
<groupId>io.springfox</groupId>
<artifactId>springfox-swagger2</artifactId>
<version>2.9.2</version>.
</dependency
<dependency>
<groupId>io.springfox</groupId>
<artifactId>springfox-swagger-ui</artifactId>
<version>2.9.2</version>.
</dependency

       <! -- mybatis-plus begin -->
       <dependency>
          <groupId>com.baomidou</groupId>
          <artifactId>mybatis-plus-boot-starter</artifactId>
          <version>${mybatis-plus-boot-starter.version}</version>
       </dependency
       <! -- mybatis-plus end -->
       <! -- https://mvnrepository.com/artifact/org.projectlombok/lombok -->
       <dependency>
          <groupId>org.projectlombok</groupId>
          <artifactId>lombok</artifactId>
          <scope>provided</scope>
       </dependency
       <dependency>
          <groupId>io.seata</groupId>
          <artifactId>seata-all</artifactId>
          <version>0.9.0.1</version>
       </dependency
       <! -- Zookeeper -->
       <dependency>
          <groupId>org.apache.zookeeper</groupId>
          <artifactId>zookeeper</artifactId>
          <version>3.4.9</version>
          <exclusions
             <exclusion
                <groupId>org.slf4j</groupId>
                <artifactId>slf4j-log4j12</artifactId>
             </exclusion
          </exclusions
       </dependency
       <! -- <dependency> <groupId>com.baomidou</groupId> <artifactId>dynamic-datasource-spring-boot-starter</ artifactId>
          <version>2.5.4</version> </dependency> -->

       <! -- <dependency> <groupId>com.baomidou</groupId> <artifactId>mybatis-plus-generator</artifactId>
          <version>3.1.0</version> </dependency> -->
       <! -- https://mvnrepository.com/artifact/org.freemarker/freemarker -->
       <dependency>
          <groupId>org.freemarker</groupId>
          <artifactId>freemarker</artifactId>
       </dependency
       <! -- https://mvnrepository.com/artifact/com.alibaba/druid-spring-boot-starter -->
       <dependency>
          <groupId>com.alibaba</groupId>
          <artifactId>druid-spring-boot-starter</artifactId>
          <version>1.1.20</version>
       </dependency
       <! -- Add this to recognise the log4j2.yml file -->
       <dependency>
          <groupId>com.fasterxml.jackson.dataformat</groupId>
          <artifactId>jackson-dataformat-yaml</artifactId>
       </dependency
       <dependency> <! -- Introducing the log4j2 dependency -->
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-log4j2</artifactId>
       </dependency
       <! -- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
       <dependency>
          <groupId>mysql</groupId>
          <artifactId>mysql-connector-java</artifactId>
       </dependency
       <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-web</artifactId
          <exclusions
             <exclusion>
                <groupId>org.springframework.boot</groupId
                <artifactId>spring-boot-starter-logging</artifactId>
             </exclusion
             <exclusion
                <groupId>org.slf4j</groupId
                <artifactId>slf4j-log4j12</artifactId>
             </exclusion
          </exclusions
       </dependency
       <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-aop</artifactId>
       </dependency
       <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-test</artifactId
          <scope>test</scope
       </dependency
       <! -- <dependency> <groupId>org.scala-lang</groupId> <artifactId>scala-library</artifactId>
          <version>2.11.0</version> </dependency> -->
       <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-configuration-processor</artifactId>
          <optional>true</optional
       </dependency
    </dependencies

<optional>true</optional> </dependencies>
```

3. and then switch the parent project for pom mode, or pom file, switch to overview , do as shown in the operation:![20191129134127](/img/blog/20191129134127.png)

4. create our demo sub-project, test-service:![20191129135935](/img/blog/20191129135935.png)

The directory is as follows.

<img src="/img/blog/20191129140048.png" alt="20191129140048" style={{ zoom:'200%' }} />

    Create EmbeddedZooKeeper.java file, along with ProviderApplication.java, with the following code.

```java
package org.test;

import java.io.File;
import java.lang.reflect.Method;
import java.util.Properties;
import java.util.UUID;

import org.apache.zookeeper.server.ServerConfig;
import org.apache.zookeeper.server.ZooKeeperServerMain;
import org.apache.zookeeper.server.quorum.QuorumPeerConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.SmartLifecycle;
import org.springframework.util.ErrorHandler;
import org.springframework.util.SocketUtils;

/**
 * from:
 * https://github.com/spring-projects/spring-xd/blob/v1.3.1.RELEASE/spring-xd-dirt/src/main/java/org/springframework/xd/dirt/zookeeper/ZooKeeperUtils.java
 *
 * Helper class to start an embedded instance of standalone (non clustered) ZooKeeper.
 *
 * NOTE: at least an external standalone server (if not an ensemble) are recommended, even for
 * {@link org.springframework.xd.dirt.server.singlenode.SingleNodeApplication}
 *
 * @author Patrick Peralta
 * @author Mark Fisher
 * @author David Turanski
 */
public class EmbeddedZooKeeper implements SmartLifecycle {

  /**
   * Logger.
   */
  private static final Logger logger = LoggerFactory.getLogger(EmbeddedZooKeeper.class);

  /**
   * ZooKeeper client port. This will be determined dynamically upon startup.
   */
  private final int clientPort;

  /**
   * Whether to auto-start. Default is true.
   */
  private boolean autoStartup = true;

  /**
   * Lifecycle phase. Default is 0.
   */
  private int phase = 0;

  /**
   * Thread for running the ZooKeeper server.
   */
  private volatile Thread zkServerThread;

  /**
   * ZooKeeper server.
   */
  private volatile ZooKeeperServerMain zkServer;

  /**
   * {@link ErrorHandler} to be invoked if an Exception is thrown from the ZooKeeper server thread.
   */
  private ErrorHandler errorHandler;

  private boolean daemon = true;

  /**
   * Construct an EmbeddedZooKeeper with a random port.
   */
  public EmbeddedZooKeeper() {
    clientPort = SocketUtils.findAvailableTcpPort();
  }

  /**
   * Construct an EmbeddedZooKeeper with the provided port.
   *
   * @param clientPort
   *            port for ZooKeeper server to bind to
   */
  public EmbeddedZooKeeper(int clientPort, boolean daemon) {
    this.clientPort = clientPort;
    this.daemon = daemon;
  }

  /**
   * Returns the port that clients should use to connect to this embedded server.
   *
   * @return dynamically determined client port
   */
  public int getClientPort() {
    return this.clientPort;
  }

  /**
   * Specify whether to start automatically. Default is true.
   *
   * @param autoStartup
   *            whether to start automatically
   */
  public void setAutoStartup(boolean autoStartup) {
    this.autoStartup = autoStartup;
  }

  /**
   * {@inheritDoc}
   */
  public boolean isAutoStartup() {
    return this.autoStartup;
  }

  /**
   * Specify the lifecycle phase for the embedded server.
   *
   * @param phase
   *            the lifecycle phase
   */
  public void setPhase(int phase) {
    this.phase = phase;
  }

  /**
   * {@inheritDoc}
   */
  public int getPhase() {
    return this.phase;
  }

  /**
   * {@inheritDoc}
   */
  public boolean isRunning() {
    return (zkServerThread != null);
  }

  /**
   * Start the ZooKeeper server in a background thread.
   * <p>
   * Register an error handler via {@link #setErrorHandler} in order to handle any exceptions thrown during startup or
   * execution.
   */
  public synchronized void start() {
    if (zkServerThread == null) {
      zkServerThread = new Thread(new ServerRunnable(), "ZooKeeper Server Starter");
      zkServerThread.setDaemon(daemon);
      zkServerThread.start();
    }
  }

  /**
   * Shutdown the ZooKeeper server.
   */
  public synchronized void stop() {
    if (zkServerThread != null) {
      // The shutdown method is protected...thus this hack to invoke it.
      // This will log an exception on shutdown; see
      // https://issues.apache.org/jira/browse/ZOOKEEPER-1873 for details.
      try {
        Method shutdown = ZooKeeperServerMain.class.getDeclaredMethod("shutdown");
        shutdown.setAccessible(true);
        shutdown.invoke(zkServer);
      }

      catch (Exception e) {
        throw new RuntimeException(e);
      }

      // It is expected that the thread will exit after
      // the server is shutdown; this will block until
      // the shutdown is complete.
      try {
        zkServerThread.join(5000);
        zkServerThread = null;
      } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
        logger.warn("Interrupted while waiting for embedded ZooKeeper to exit");
        // abandoning zk thread
        zkServerThread = null;
      }
    }
  }

  /**
   * Stop the server if running and invoke the callback when complete.
   */
  public void stop(Runnable callback) {
    stop();
    callback.run();
  }

  /**
   * Provide an {@link ErrorHandler} to be invoked if an Exception is thrown from the ZooKeeper server thread. If none
   * is provided, only error-level logging will occur.
   *
   * @param errorHandler
   *            the {@link ErrorHandler} to be invoked
   */
  public void setErrorHandler(ErrorHandler errorHandler) {
    this.errorHandler = errorHandler;
  }

  /**
   * Runnable implementation that starts the ZooKeeper server.
   */
  private class ServerRunnable implements Runnable {

    public void run() {
      try {
        Properties properties = new Properties();
        File file = new File(System.getProperty("java.io.tmpdir") + File.separator + UUID.randomUUID());
        file.deleteOnExit();
        properties.setProperty("dataDir", file.getAbsolutePath());
        properties.setProperty("clientPort", String.valueOf(clientPort));

        QuorumPeerConfig quorumPeerConfig = new QuorumPeerConfig();
        quorumPeerConfig.parseProperties(properties);

        zkServer = new ZooKeeperServerMain();
        ServerConfig configuration = new ServerConfig();
        configuration.readFrom(quorumPeerConfig);

        zkServer.runFromConfig(configuration);
      } catch (Exception e) {
        if (errorHandler != null) {
          errorHandler.handleError(e);
        } else {
          logger.error("Exception running embedded ZooKeeper", e);
        }
      }
    }
  }

}
 ```

 ```java
 package org.test;

 import org.apache.dubbo.config.spring.context.annotation.DubboComponentScan; import org.apache.dubbo.config.spring.context.annotation.
 import org.springframework.boot.SpringApplication; import org.springframework.boot.
 import org.springframework.boot.autoconfigure.SpringBootApplication; import org.springframework.boot.autoconfigure.
 import org.springframework.context.annotation.ComponentScan; import org.springframework.context.annotation.
 import org.springframework.transaction.annotation.EnableTransactionManagement; import org.springframework.transaction.annotation.

 /**
 * @author cjbc.annotation.EnableTransactionManagement; /**
 * @author cjb
 * @date 2019/10/24
 */
 @EnableTransactionManagement.
 @ComponentScan(basePackages = {"org.test.config", "org.test.service.impl"})
 @DubboComponentScan(basePackages = "org.test.service.impl")
 @SpringBootApplication
 public class ProviderApplication {

    public static void main(String[] args) {
        new EmbeddedZooKeeper(2181, false).start();
        SpringApplication app = new SpringApplication(ProviderApplication.class);
        app.run(args);
    }

 }

 ```

    create entity package org.test.entity and the creation of entity class Test used to lombok, details of Baidu, eclipse installed lombok plug-in

```java
package org.test.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
* <p>
* Functions
* </p
*
* @author Funkye
* @since 2019-04-23
  */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@ApiModel(value = "test对象", description = "功能")
public class Test implements Serializable {

  private static final long serialVersionUID = 1L;

  @ApiModelProperty(value = "主键")
  @TableId(value = "id", type = IdType.AUTO)
  private Integer id;

  @ApiModelProperty(value = "one")
  @TableField("one")
  private String one;

  @ApiModelProperty(value = "two")
  @TableField("two")
  private String two;

  @ApiModelProperty(value = "createTime")
  @TableField("createTime")
  private LocalDateTime createTime;

}

```

Create service, service.impl, mapper and other packages, in turn create ITestservice, and the implementation class, mapper.

```java
package org.test.service;

import org.test.entity.Test;

import com.baomidou.mybatisplus.extension.service.IService;

/**
* <p>
* Function Service class
* </p
*
* @author Funkye
* @since 2019-04-10
  */
  public interface ITestService extends IService<Test> {

}

 ```

 ```java
import org.apache.dubbo.config.annotation.Service;
import org.test.entity.Test;
import org.test.mapper.TestMapper;
import org.test.service.ITestService;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

@Service(version = "1.0.0",interfaceClass =ITestService.class )
public class TestServiceImpl extends ServiceImpl<TestMapper, Test> implements ITestService {

}

```

```java
 package org.test.mapper;

 import org.test.entity.Test;

 import com.baomidou.mybatisplus.core.mapper.BaseMapper;

 /**
 * <p>
 * Functional Mapper interface
 * </p>
 *
 * @author Funkye
 * @since 2019-04-10
 */
 public interface TestMapper extends BaseMapper<Test> {

 }

 ```

    Create org.test.config package, create SeataAutoConfig.java, configuration information are here, the main role for the proxy data, connect to the transaction service grouping

```java
package org.test.config;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import com.alibaba.druid.pool.DruidDataSource;

import io.seata.rm.datasource.DataSourceProxy;
import io.seata.spring.annotation.GlobalTransactionScanner;

@Configuration
public class SeataAutoConfig {
  @Autowired(required = true)
  private DataSourceProperties dataSourceProperties;
  private final static Logger logger = LoggerFactory.getLogger(SeataAutoConfig.class);

  @Bean(name = "druidDataSource")
  public DataSource druidDataSource() {
    DruidDataSource druidDataSource = new DruidDataSource();
    logger.info("dataSourceProperties.getUrl():{}", dataSourceProperties.getUrl());
    druidDataSource.setUrl(dataSourceProperties.getUrl());
    druidDataSource.setUsername(dataSourceProperties.getUsername());
    druidDataSource.setPassword(dataSourceProperties.getPassword());
    druidDataSource.setDriverClassName(dataSourceProperties.getDriverClassName());
    druidDataSource.setInitialSize(0);
    druidDataSource.setMaxActive(180);
    druidDataSource.setMaxWait(60000);
    druidDataSource.setMinIdle(0);
    druidDataSource.setValidationQuery("Select 1 from DUAL");
    druidDataSource.setTestOnBorrow(false);
    druidDataSource.setTestOnReturn(false);
    druidDataSource.setTestWhileIdle(true);
    druidDataSource.setTimeBetweenEvictionRunsMillis(60000);
    druidDataSource.setMinEvictableIdleTimeMillis(25200000);
    druidDataSource.setRemoveAbandoned(true);
    druidDataSource.setRemoveAbandonedTimeout(1800);
    druidDataSource.setLogAbandoned(true);
    logger.info("load dataSource........");
    return druidDataSource;
  }

    /**
     * init datasource proxy
     * @Param: druidDataSource datasource bean instance
     * @Param: druidDataSource datasource bean instance
     * @Return: DataSourceProxy datasource proxy
     */
    @Bean(name = "dataSource")
    @Primary // In the same DataSource, first use the labelled DataSource
    public DataSourceProxy dataSourceProxy(@Qualifier(value = "druidDataSource") DruidDataSource druidDataSource) {
       logger.info("Proxy dataSource ........") ;
       return new DataSourceProxy(druidDataSource);
    }

    /**
     * init global transaction scanner
     * @Return: GlobalTransactionScanner
     * @Return: GlobalTransactionScanner
     */
    @Bean
    public GlobalTransactionScanner globalTransactionScanner() {
       logger.info("Configuring seata........") ;
       return new GlobalTransactionScanner("test-service", "test-group");
    }
}
 ```

    Then create the configuration file MybatisPlusConfig, which is required for mybatisplus.

 ```java
package org.test.config;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.mapper.MapperScannerConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.baomidou.mybatisplus.core.parser.ISqlParser;
import com.baomidou.mybatisplus.extension.parsers.BlockAttackSqlParser;
import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;

 @Configuration
 // @MapperScan("com.baomidou.springboot.mapper*") // This annotation is equivalent to @Bean below.
 // MapperScannerConfigurer, 2 configurations of a copy can be
 public class MybatisPlusConfig {

    /**
     * mybatis-plus paging plugin <br
     * Documentation: http://mp.baomidou.com<br>
     */
    @Bean
    public PaginationInterceptor paginationInterceptor() {
        PaginationInterceptor paginationInterceptor = new PaginationInterceptor();
        List<ISqlParser> sqlParserList = new ArrayList<ISqlParser>();
        // Attack the SQL blocking parser and join the parse chain.
        sqlParserList.add(new BlockAttackSqlParser());
        paginationInterceptor.setSqlParserList(sqlParserList);
        return paginationInterceptor;
    }

    /**
     * Equivalent to the top: {@code @MapperScan("com.baomidou.springboot.mapper*")} Here it can be extended, e.g., using a configuration file to configure the path to scan the Mapper
     */

    @Bean
    public MapperScannerConfigurer mapperScannerConfigurer() {
        MapperScannerConfigurer scannerConfigurer = new MapperScannerConfigurer();
        scannerConfigurer.setBasePackage("org.test.mapper");
        return scannerConfigurer;
    }

 }

 ```

Create the **resources directory, create the mapper folder, application.yml and other files**.

 ```yaml
 server:
   port: 38888
 spring:
   application:
     name: test-service
   datasource:
     type: com.alibaba.druid.pool.DruidDataSource
     url: jdbc:mysql://127.0.0.1:3306/test?useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC
     driver-class-name: com.mysql.cj.jdbc.Driver
     username: root
     password: 123456
 dubbo:
   protocol:
     loadbalance: leastactive
     threadpool: cached
   scan:
     base-packages: org。test.service
   application:
     qos-enable: false
     name: testserver
   registry:
     id: my-registry
     address:  zookeeper://127.0.0.1:2181?client=curator
 mybatis-plus:
   mapper-locations: classpath:/mapper/*Mapper.xml
   typeAliasesPackage: org.test.entity
   global-config:
     db-config:
       field-strategy: not-empty
       id-type: auto
       db-type: mysql
   configuration:
     map-underscore-to-camel-case: true
     cache-enabled: true
     auto-mapping-unknown-column-behavior: none

 ```

 create file.conf, here the service within the vgroup_mapping. your transaction grouping, for example, on the ** face SeataAutoConfig configured within the test-group, then here should also be changed to test-group **, and then the following ip port are seata running ip and port on the line!

   ```java
   transport {
     type = "TCP"
     server = "NIO"
     heartbeat = true
     thread-factory {
     boss-thread-prefix = "NettyBoss"
     worker-thread-prefix = "NettyServerNIOWorker"
     server-executor-thread-prefix = "NettyServerBizHandler"
     share-boss-worker = false
     client-selector-thread-prefix = "NettyClientSelector"
     client-selector-thread-size = 1
     client-worker-thread-prefix = "NettyClientWorkerThread"
     boss-thread-size = 1
     worker-thread-size = 8
 }
     shutdown {
     wait = 3
 }
     serialization = "seata"
     compressor = "none"
 }
     service {
     vgroup_mapping.test-group = "default"
     default.grouplist = "127.0.0.1:8091"
     enableDegrade = false
     disable = false
     max.commit.retry.timeout = "-1"
     max.rollback.retry.timeout = "-1"
 }

     client {
     async.commit.buffer.limit = 10000
     lock {
     retry.internal = 10
     retry.times = 30
 }
     report.retry.count = 5
     tm.commit.retry.count = 1
     tm.rollback.retry.count = 1
     undo.log.table = "undo_log"
 }

     recovery {
     committing-retry-period = 1000
     asyn-committing-retry-period = 1000
     rollbacking-retry-period = 1000
     timeout-retry-period = 1000
 }

     transaction {
     undo.data.validation = true
     undo.log.serialization = "jackson"
     undo.log.save.days = 7
     undo.log.delete.period = 86400000
     undo.log.table = "undo_log"
 }

     metrics {
     enabled = false
     registry-type = "compact"
     exporter-list = "prometheus"
     exporter-prometheus-port = 9898
 }

     support {
     spring {
     datasource.autoproxy = false
 }
 }

```

Create registry.conf to specify ip ports for file, zk and so on.

```java
registry {
  type = "file"
  file {
    name = "file.conf"
  }
}
config {
  type = "file"
  file {
    name = "file.conf"
  }
  zk {
    serverAddr = "127.0.0.1:2181"
    session.timeout = 6000
    connect.timeout = 2000
  }
}

```

Great success, you can directly run it, this time to observe the seata-server![20191129142115](/img/blog/20191129142115.png)

Next, we create test-client project, here will not repeat, with the above test-service the same way to create

Next, we copy the test-service service and entities within the past, of course, you are too much trouble, you can get a separate sub-project to put a general service and entities, some tools and so on, I'm here in order to quickly build this demo, the choice of copy and paste the way.

Directory structure:![](/img/blog/20191129142349.png)

    Then we create ClientApplication.

```java
package org.test;

import java.util.TimeZone;
import java.util.concurrent.Executor;

import org.apache.dubbo.config.spring.context.annotation.EnableDubbo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import com.baomidou.mybatisplus.autoconfigure.MybatisPlusAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class, MybatisPlusAutoConfiguration.class})
@EnableScheduling
@EnableAsync
@Configuration
@EnableDubbo(scanBasePackages = {"org.test.service"})
@ComponentScan(basePackages = {"org.test.service", "org.test.controller", "org.test.config"})
public class ClientApplication {
    public static void main(String[] args) {
        TimeZone.setDefault(TimeZone.getTimeZone("Asia/Shanghai"));
        SpringApplication app = new SpringApplication(ClientApplication.class);
        app.run(args);
    }

    @Bean(name = "threadPoolTaskExecutor")
    public Executor threadPoolTaskExecutor() {
        return new ThreadPoolTaskExecutor();
    }
}

```

 Then go to the config package and create SwaggerConfig :

 ```java
package org.test.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.Parameter;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

 @Configuration
 public class SwaggerConfig {
    // swagger2 configuration file, here you can configure the swagger2 some basic content, such as scanning packages and so on
    @Bean
    public Docket createRestApi() {
        List<Parameter> pars = new ArrayList<Parameter>(); return new Docket(DocumentationText)
        return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo()).select()
            // Path to the current package
            .apis(RequestHandlerSelectors.basePackage("org.test.controller")).paths(PathSelectors.any()).build()
            .globalOperationParameters(pars);
    }

    // Build the api document's details function, noting which annotation is referenced here
    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
            // The title of the page
            .title("Project Interface")
            // Creator
            .contact(new Contact("FUNKYE", "", ""))
            // Version number
            .version("1.0")
            // Description
            .description("API description").build();
    }
 }

 ```

and then create SpringMvcConfigure, and then put inside the configuration of seata, I'm lazy in order to directly integrated in the mvc configuration of the class, you can standardise the point can be created in addition to the configuration of a seata class, you can find the following is still a group name, I have two projects are assigned to a group to go, it seems that another take a also It's okay.

 ```java
package org.test.config;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.dubbo.config.annotation.Reference;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import com.alibaba.fastjson.serializer.SerializerFeature;
import com.alibaba.fastjson.support.config.FastJsonConfig;
import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;
import com.google.common.collect.Maps;

import io.seata.spring.annotation.GlobalTransactionScanner;

@Configuration
 public class SpringMvcConfigure implements WebMvcConfigurer {

    @Bean
    public FilterRegistrationBean corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        config.addAllowedHeader(CorsConfiguration.ALL); config.addAllowedHeader(CorsConfiguration.ALL);
        config.addAllowedMethod(CorsConfiguration.ALL); config.addAllowedMethod(CorsConfiguration.ALL);
        source.registerCorsConfiguration("/**", config);
        FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean(new CorsFilter(source));
        filterRegistrationBean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        filterRegistrationBean.setOrder(1);
        filterRegistrationBean.setEnabled(true);
        filterRegistrationBean.addUrlPatterns("/**");
        Map<String, String> initParameters = Maps.newHashMap();
        initParameters.put("excludes", "/favicon.ico,/img/*,/js/*,/css/*");
        initParameters.put("isIncludeRichText", "true");
        filterRegistrationBean.setInitParameters(initParameters); return filterRegistrationBean.
        return filterRegistrationBean; }
    }

    @Bean
    public InternalResourceViewResolver viewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver(); viewResolver.setPrefix("/WEB-INF")
        viewResolver.setPrefix("/WEB-INF/jsp/");
        viewResolver.setSuffix(".jsp");
        // viewResolver.setViewClass(JstlView.class); // This property does not usually need to be configured manually.
        // This property does not usually need to be configured manually, as higher versions of Spring will automatically detect it.
        return viewResolver; // viewResolver.setViewClass(JstlView.class)
    }



    /**
     * Replacing frame json with fastjson
     */
    @Override
    public void configureMessageConverters(List<HttpMessageConverter<? >> converters) {
      FastJsonHttpMessageConverter fastConverter = new FastJsonHttpMessageConverter();
      FastJsonConfig fastJsonConfig = new FastJsonConfig();
      fastJsonConfig.setSerializerFeatures(SerializerFeature.PrettyFormat, SerializerFeature.WriteMapNullValue,
        SerializerFeature.WriteNullStringAsEmpty, SerializerFeature.DisableCircularReferenceDetect);
        // Handle garbled Chinese characters
        List<MediaType> fastMediaTypes = new ArrayList<>();
        fastMediaTypes.add(MediaType.APPLICATION_JSON_UTF8);
        fastConverter.setSupportedMediaTypes(fastMediaTypes);
        fastConverter.setFastJsonConfig(fastJsonConfig);
        // Handle strings, avoiding quotes when returning strings directly.
        StringHttpMessageConverter smc = new StringHttpMessageConverter(Charset.forName("UTF-8"));
        converters.add(smc);
        converters.add(fastConverter);
    }

    @Bean
    public GlobalTransactionScanner globalTransactionScanner() {
        return new GlobalTransactionScanner("test-client", "test-group"); }
    }

 }

 ```

Create the c**ontroller package, and then create the TestController** under the package.

 ```java
package org.test.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.test.service.DemoService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

 /**
 * <p>
 * Documentation table Front-end controller
 * </p
 *
 * @author funkye
 * @since 2019-03-20
 */
 @RestController
 @RequestMapping("/test")
 @Api(tags = "test interface")
 public class TestController {

    private final static Logger logger = LoggerFactory.getLogger(TestController.class);
    @Autowired
    @Lazy
    DemoService demoService;

    @GetMapping(value = "testSeataOne")
    @ApiOperation(value = "Test the manual rollback distributed transaction interface")
    public Object testSeataOne() {
        return demoService.One();
    }

    @GetMapping(value = "testSeataTwo")
    @ApiOperation(value = "Test Exception Rollback Distributed Transaction Interface")
    public Object testSeataTwo() {
        return demoService.Two();
    }

 }

 ```

Then go to service and create the demoService you need to depend on.

 ```java
package org.test.service;

import java.time.LocalDateTime;

import org.apache.dubbo.config.annotation.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.test.controller.TestController;
import org.test.entity.Test;

import io.seata.core.context.RootContext;
import io.seata.core.exception.TransactionException;
import io.seata.spring.annotation.GlobalTransactional;
import io.seata.tm.api.GlobalTransactionContext;

@Service
public class DemoService {
  @Reference(version = "1.0.0", timeout = 60000)
  private ITestService testService;
  private final static Logger logger = LoggerFactory.getLogger(DemoService.class);

  /**
   * manual rollback example
   *
   * @return
   */
  @GlobalTransactional
  public Object One() {
    logger.info("seata distribute transaction Id:{}", RootContext.getXID());
    Test t = new Test();
    t.setOne("1");
    t.setTwo("2");
    t.setCreateTime(LocalDateTime.now());
    testService.save(t);
    try {
      int i = 1 / 0;
      return true;
    } catch (Exception e) {
      // TODO: handle exception
      try {
        logger.info("load transaction id for rollback");
        GlobalTransactionContext.reload(RootContext.getXID()).rollback();
      } catch (TransactionException e1) {
        // TODO Auto-generated catch block
        e1.printStackTrace();
      }
    }
    return false;
  }

  /**
   * throw exception and rollback
   *
   * @return
   */
  @GlobalTransactional
  public Object Two() {
    logger.info("seata分布式事务Id:{}", RootContext.getXID());
    logger.info("seata distribute transaction Id:{}", RootContext.getXID());
    Test t = new Test();
    t.setOne("1");
    t.setTwo("2");
    t.setCreateTime(LocalDateTime.now());
    testService.save(t);
    try {
      int i = 1 / 0;
      return true;
    } catch (Exception e) {
      // TODO: handle exception
      throw new RuntimeException();
    }
  }
}

 ```

Create the resources folder as usual, starting with the common **application.yml**.

```java
spring:
  application:
     name: test
  datasource:
     driver-class-name: com.mysql.cj.jdbc.Driver
     url: jdbc:mysql://127.0.0.1:3306/test?userSSL=true&useUnicode=true&characterEncoding=UTF8&serverTimezone=Asia/Shanghai
     username: root
     password: 123456
  mvc:
    servlet:
      load-on-startup: 1
  http:
    encoding:
            force: true
            charset: utf-8
            enabled: true
    multipart:
      max-file-size: 10MB
      max-request-size: 10MB
dubbo:
  registry:
    id: my-registry
    address:  zookeeper://127.0.0.1:2181?client=curator
#    address:  zookeeper://127.0.0.1:2181?client=curator
  application:
    name: dubbo-demo-client
    qos-enable: false
server:
  port: 28888
  max-http-header-size: 8192
  address: 0.0.0.0
  tomcat:
    max-http-post-size: 104857600

```

Copy the service configuration file and registry file, if your client group name is changed in the configuration class, then the group name in the file file needs to be changed as well.

![](/img/blog/20191129142851.png)

The complete directory structure as above, this time you can start test-service, then start test-client, to swagger test it!

4. Visit 127.0.0.1:28888/swagger-ui.html to do the final finish ![](/img/blog/20191129143041.png)

![20191129143124](/img/blog/20191129143124.png)

Here's the data I've saved a record, let's see if we'll successfully rollback:

![20191129143252](/img/blog/20191129143252.png)

Refresh the database, found that there is still only one data:

![20191129143124](/img/blog/20191129143124.png)

And then check the log.

![20191129143407](/img/blog/20191129143407.png)

It shows that it has been rolled back, let's look at the log from seata-server again:

<img src="/img/blog/20191129143419.png" style={{ zoom:'200%' }} />

Display rollback success, transaction id is also consistent, this is our distributed transaction on the run through, through the interruption point way, you can view the undo_log, you will find that before the transaction is committed, will be deposited into a transaction information data, if the rollback is successful, the information will be deleted.

# Summary

seata's integration is still relatively simple and easy to start, a little more attentive you must write better than me!

Welcome to read more seata, dubbo and other source code, can solve the business encountered a lot of pit oh!

