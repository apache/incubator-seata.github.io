---
title: Integrating Seata (formerly Fescar) Distributed Transaction with Spring Cloud
author: dafei.Fei
date: 2019/04/15
keywords: [fescar, seata, distributed transaction]
---

# 1. Introduction
Many developers are already familiar with Fescar. However, Fescar has now transformed into Seata. If you're not aware of Seata, please check the following link.

SEATA GITHUB: [https://github.com/apache/incubator-seata]

We extend our sincere thanks and greetings to the Alibaba team for their contributions in bringing numerous open-source software to developers.

Today, I will share my insights on integrating Seata with Spring Cloud, aiming to help more developers avoid common pitfalls and streamline their setup process.

# 2. Project Overview

The setup process is as follows: client -> gateway -> service consumer -> service provider.

```
Technical Framework: spring cloud gateway
spring cloud fegin
nacos1.0.RC2
fescar-server0.4.1 (Seata)
```

For instructions on starting Nacos, please refer to: [Nacos Startup Guide](https://nacos.io/zh-cn/docs/quick-start.html)

Seata supports various service registration methods. In the `fescar-server-0.4.1\conf` directory, you will find:

```
file.conf
logback.xml
nacos-config.sh
nacos-config.text
registry.conf
```

There are a total of five files. Among them, `file.conf` and `registry.conf` are needed in the code segments for both service consumers and providers. Note: `file.conf` and `registry.conf` must be included in the current applications in use, i.e., both service consumer and provider applications must include them. If you are using a configuration center like Nacos or ZK, `file.conf` can be ignored. However, if `type="file"` is specified, then `file.conf` must be used.

Below is the configuration information in the `registry.conf` file. The `registry` section is for the service registration center configuration, and the `config` section is for the configuration center.

As shown below, Seata currently supports nacos, file, eureka, redis, zookeeper, etc., for registration and configuration. The default downloaded configuration type is `file`. The choice of method depends on your project’s actual requirements. Here, I chose nacos, but eureka can also be used. Both versions have been tested and work fine.

Note: If you are integrating with eureka, please use the latest official version.

# 3. Core Configuration

```java
registry {
  # file, nacos, eureka, redis, zk
  type = "nacos"

  nacos {
    serverAddr = "localhost"
    namespace = "public"
    cluster = "default"
  }
  eureka {
    serviceUrl = "http://localhost:1001/eureka"
    application = "default"
    weight = "1"
  }
  redis {
    serverAddr = "localhost:6379"
    db = "0"
  }
  zk {
    cluster = "default"
    serverAddr = "127.0.0.1:2181"
    session.timeout = 6000
    connect.timeout = 2000
  }
  file {
    name = "file.conf"
  }
}

config {
  # file, nacos, apollo, zk
  type = "nacos"

  nacos {
    serverAddr = "localhost"
    namespace = "public"
    cluster = "default"
  }
  apollo {
    app.id = "fescar-server"
    apollo.meta = "http://192.168.1.204:8801"
  }
  zk {
    serverAddr = "127.0.0.1:2181"
    session.timeout = 6000
    connect.timeout = 2000
  }
  file {
    name = "file.conf"
  }
}
```

Note that `nacos-config.sh` is a script that needs to be executed if using Nacos as the configuration center. It initializes some default settings for Nacos.

Refer to the official guide for SEATA startup: Note that the official startup command separates parameters with spaces, so be careful. The IP is an optional parameter. Due to DNS resolution, sometimes when registering with Nacos, Fescar might obtain the address using the computer name, requiring you to specify the IP or configure the host to point to the IP. This issue has been fixed in the latest SEATA version.

```shell
sh fescar-server.sh 8091 /home/admin/fescar/data/ IP (optional)
```

As mentioned earlier, `file.conf` and `registry.conf` are needed in our code. The focus here is on `file.conf`. It is only loaded if `registry` is configured with `file`. If using ZK, Nacos, or other configuration centers, it can be ignored. However, `service.localRgroup.grouplist` and `service.vgroupMapping` need to be specified in the configuration center so that your client can automatically obtain the corresponding SEATA service and address from the configuration center upon startup. Failure to configure this will result in an error due to the inability to connect to the server. If using eureka, the config section should specify `type="file"`. SEATA config currently does not support eureka.

```java
transport {
  # tcp, udt, unix-domain-socket
  type = "TCP"
  # NIO, NATIVE
  server = "NIO"
  # enable heartbeat
  heartbeat = true
  # thread factory for netty
  thread-factory {
    boss-thread-prefix = "NettyBoss"
    worker-thread-prefix = "NettyServerNIOWorker"
    server-executor-thread-prefix = "NettyServerBizHandler"
    share-boss-worker = false
    client-selector-thread-prefix = "NettyClientSelector"
    client-selector-thread-size = 1
    client-worker-thread-prefix = "NettyClientWorkerThread"
    # netty boss thread size, will not be used for UDT
    boss-thread-size = 1
    # auto default pin or 8
    worker-thread-size = 8
  }
}
service {
  # vgroup -> rgroup
  vgroup_mapping.service-provider-fescar-service-group = "default"
  # only support single node
  localRgroup.grouplist = "127.0.0.1:8091"
  # degrade current not support
  enableDegrade = false
  # disable
  disable = false
}

client {
  async.commit.buffer.limit = 10000
  lock {
    retry.internal = 10
    retry.times = 30
  }
}
```

# 4. Service Details
Two key points need attention:

```java
grouplist IP: This is the IP and port of the current Fescar server.
vgroup_mapping configuration.
```

`vgroup_mapping.service-provider-fescar-service-group`: The service name here is actually the application name configured in the `application.properties` of your consumer or provider, e.g., `spring.application.name=service-provider`. In the source code, the application name is concatenated with `fescar-service-group` to form the key. Similarly, the value is the name of the current Fescar service. `cluster = "default" / application = "default"`

```java
vgroup_mapping.service-provider-fescar-service-group = "default"
# only support single node
localRgroup.grouplist = "127.0.0.1:8091"
```

Both provider and consumer need to configure these two files.

If you use Nacos as the configuration center, you need to add the configuration in Nacos by adding the configuration manually.

# 5. Transaction Usage
In my code, the request is load-balanced through the gateway to the consumer. The consumer then requests the provider through Feign. The official example uses Feign, but here, the request is forwarded directly through the gateway, so the global transaction is handled in the controller layer, similar to the official demo.

```java
@RestController
public class DemoController {
	@Autowired
	private DemoFeignClient demoFeignClient;

	@Autowired
	private DemoFeignClient2 demoFeignClient2;
	@GlobalTransactional(timeoutMills = 300000, name = "spring-cloud-demo-tx")
	@GetMapping("/getdemo")
	public String demo() {

		// Call service A and simply save
		ResponseData<Integer> result = demoFeignClient.insertService("test", 1);
		if(result.getStatus() == 400) {
			System.out.println(result + "+++++++++++++++++++++++++++++++++++++++");
			throw new RuntimeException("this is error1");
		}

		// Call service B and test rollback of service A upon error
		ResponseData<Integer> result2 = demoFeignClient2.saveService();

		if(result2.getStatus() == 400) {
			System.out.println(result2 + "+++++++++++++++++++++++++++++++++++++++");
			throw new RuntimeException("this is error2");
		}

		return "SUCCESS";
	}
}
```

This concludes the core integration of transactions. Here, service A and B are both providers. When service B encounters an error, the global transaction rolls back. Each transaction can handle its local transactions independently.

SEATA uses a global XID to uniformly identify transactions. I will not list the database tables needed for SEATA here. For details, refer to: [spring-cloud-fescar official DEMO](https://github.com/spring-cloud-incubator/spring-cloud-alibaba/tree/master/spring-cloud-alibaba-examples/fescar-example)

# 5.Data Proxy

Another important point is that in a distributed database service, each database needs an `undo_log` table to handle XID storage.

Additionally, each service project needs a database connection pool proxy. Currently, only Druid connection pool is supported. More will be supported in the future.

```java
@Configuration
public class DatabaseConfiguration {

	@Bean(destroyMethod = "close", initMethod = "init")
	@ConfigurationProperties(prefix="spring.datasource")
	public DruidDataSource druidDataSource() {
		return new DruidDataSource();
	}

	@Bean
	public DataSourceProxy dataSourceProxy(DruidDataSource druidDataSource) {
		return new DataSourceProxy(druidDataSource);
	}

    @Bean
    public SqlSessionFactory sqlSessionFactory(DataSourceProxy dataSourceProxy) throws Exception {
        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
        factoryBean.setDataSource(dataSourceProxy);
        return factoryBean.getObject();
    }
}
```

Pay attention to the configuration file and data proxy. Without a data source proxy, `undo_log` will have no data, making XID management impossible.

Author: Da Fei

