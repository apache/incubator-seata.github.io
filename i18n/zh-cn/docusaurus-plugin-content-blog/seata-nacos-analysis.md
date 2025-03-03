---
title: Seata分布式事务启用Nacos做配置中心
keywords: [Seata,Nacos,分布式事务]
description: 本文讲述如何使用Seata整合Nacos配置
author: FUNKYE
date: 2019/12/02
---

# Seata分布式事务启用Nacos做配置中心

[项目地址](https://gitee.com/itCjb/springboot-dubbo-mybatisplus-seata )

本文作者：FUNKYE(陈健斌),杭州某互联网公司主程。

# 前言

上次发布了直连方式的seata配置,详细可以看这篇[博客](/blog/springboot-dubbo-mybatisplus-seata)

我们接着上一篇的基础上去配置nacos做配置中心跟dubbo注册中心.

## 准备工作

 	1.首先去nacos的github上下载[最新版本](https://github.com/alibaba/nacos/releases/tag/1.1.4)

 	![](/img/blog/20191202203649.png)

 	2.下载好了后,很简单,解压后到bin目录下去启动就好了,看到如图所示就成了：

![](/img/blog/20191202203943.png)

 	3.启动完毕后访问:http://127.0.0.1:8848/nacos/#/login

![](/img/blog/20191202204101.png)

是不是看到这样的界面了?输入nacos(账号密码相同),先进去看看吧.

这时候可以发现没有任何服务注册

![20191202204147](/img/blog/20191202204147.png)

别急我们马上让seata服务连接进来.

## Seata配置

 	1.进入seata的conf文件夹看到这个木有?

![](/img/blog/20191202204259.png)

就是它,编辑它:

![20191202204353](/img/blog/20191202204353.png)

![20191202204437](/img/blog/20191202204437.png)

 	2.然后记得保存哦!接着我们把registry.conf文件打开编辑：

```
registry {
  # file 、nacos 、eureka、redis、zk、consul、etcd3、sofa
  type = "nacos"

  nacos {
    serverAddr = "localhost"
    namespace = ""
    cluster = "default"
  }
  eureka {
    serviceUrl = "http://localhost:8761/eureka"
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
  consul {
    cluster = "default"
    serverAddr = "127.0.0.1:8500"
  }
  etcd3 {
    cluster = "default"
    serverAddr = "http://localhost:2379"
  }
  sofa {
    serverAddr = "127.0.0.1:9603"
    application = "default"
    region = "DEFAULT_ZONE"
    datacenter = "DefaultDataCenter"
    cluster = "default"
    group = "SEATA_GROUP"
    addressWaitTime = "3000"
  }
  file {
    name = "file.conf"
  }
}

config {
  # file、nacos 、apollo、zk、consul、etcd3
  type = "nacos"

  nacos {
    serverAddr = "localhost"
    namespace = ""
  }
  consul {
    serverAddr = "127.0.0.1:8500"
  }
  apollo {
    app.id = "seata-server"
    apollo.meta = "http://192.168.1.204:8801"
  }
  zk {
    serverAddr = "127.0.0.1:2181"
    session.timeout = 6000
    connect.timeout = 2000
  }
  etcd3 {
    serverAddr = "http://localhost:2379"
  }
  file {
    name = "file.conf"
  }
}

```

都编辑好了后，我们运行nacos-config.sh,这时候我们配置的nacos-config.txt的内容已经被发送到nacos中了详细如图：

![20191202205743](/img/blog/20191202205743.png)

出现以上类似的代码就是说明成功了，接着我们登录nacos配置中心，查看配置列表，出现如图列表说明配置成功了：

![20191202205912](/img/blog/20191202205912.png)

看到了吧,你的配置已经全部都提交上去了,如果再git工具内运行sh不行的话,试着把编辑sh文件,试试改成如下操作

```shell
for line in $(cat nacos-config.txt)

do

key=${line%%=*}
value=${line#*=}
echo "\r\n set "${key}" = "${value}

result=`curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=$key&group=SEATA_GROUP&content=$value"`

if [ "$result"x == "true"x ]; then

  echo "\033[42;37m $result \033[0m"

else

  echo "\033[41;37 $result \033[0m"
  let error++

fi

done


if [ $error -eq 0 ]; then

echo  "\r\n\033[42;37m init nacos config finished, please start seata-server. \033[0m"

else

echo  "\r\n\033[41;33m init nacos config fail. \033[0m"

fi
```

 	3.目前我们的准备工作全部完成,我们去seata-service/bin去运行seata服务吧,如图所示就成功啦!

![20191202210112](/img/blog/20191202210112.png)

# 进行调试

 	1.首先把springboot-dubbo-mybatsiplus-seata项目的pom的依赖更改,去除掉zk这些配置,因为我们使用nacos做注册中心了.

```java
	<properties>
		<webVersion>3.1</webVersion>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
		<maven.compiler.source>1.8</maven.compiler.source>
		<maven.compiler.target>1.8</maven.compiler.target>
		<HikariCP.version>3.2.0</HikariCP.version>
		<mybatis-plus-boot-starter.version>3.2.0</mybatis-plus-boot-starter.version>
	</properties>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.1.8.RELEASE</version>
	</parent>
	<dependencies>
		<dependency>
			<groupId>com.alibaba.nacos</groupId>
			<artifactId>nacos-client</artifactId>
			<version>1.1.4</version>
		</dependency>
		<dependency>
			<groupId>org.apache.dubbo</groupId>
			<artifactId>dubbo-registry-nacos</artifactId>
			<version>2.7.4.1</version>
		</dependency>
		<dependency>
			<groupId>org.apache.dubbo</groupId>
			<artifactId>dubbo-spring-boot-starter</artifactId>
			<version>2.7.4.1</version>
		</dependency>
		<dependency>
			<groupId>org.apache.commons</groupId>
			<artifactId>commons-lang3</artifactId>
		</dependency>
		<dependency>
			<groupId>com.alibaba</groupId>
			<artifactId>fastjson</artifactId>
			<version>1.2.60</version>
		</dependency>
		<!-- <dependency> <groupId>javax</groupId> <artifactId>javaee-api</artifactId>
			<version>7.0</version> <scope>provided</scope> </dependency> -->
		<dependency>
			<groupId>io.springfox</groupId>
			<artifactId>springfox-swagger2</artifactId>
			<version>2.9.2</version>
		</dependency>
		<dependency>
			<groupId>io.springfox</groupId>
			<artifactId>springfox-swagger-ui</artifactId>
			<version>2.9.2</version>
		</dependency>

		<!-- mybatis-plus begin -->
		<dependency>
			<groupId>com.baomidou</groupId>
			<artifactId>mybatis-plus-boot-starter</artifactId>
			<version>${mybatis-plus-boot-starter.version}</version>
		</dependency>
		<!-- mybatis-plus end -->
		<!-- https://mvnrepository.com/artifact/org.projectlombok/lombok -->
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<scope>provided</scope>
		</dependency>
		<dependency>
			<groupId>io.seata</groupId>
			<artifactId>seata-all</artifactId>
			<version>0.9.0.1</version>
		</dependency>
		<!-- <dependency> <groupId>com.baomidou</groupId> <artifactId>dynamic-datasource-spring-boot-starter</artifactId>
			<version>2.5.4</version> </dependency> -->

		<!-- <dependency> <groupId>com.baomidou</groupId> <artifactId>mybatis-plus-generator</artifactId>
			<version>3.1.0</version> </dependency> -->
		<!-- https://mvnrepository.com/artifact/org.freemarker/freemarker -->
		<dependency>
			<groupId>org.freemarker</groupId>
			<artifactId>freemarker</artifactId>
		</dependency>
		<!-- https://mvnrepository.com/artifact/com.alibaba/druid-spring-boot-starter -->
		<dependency>
			<groupId>com.alibaba</groupId>
			<artifactId>druid-spring-boot-starter</artifactId>
			<version>1.1.20</version>
		</dependency>
		<!-- 加上这个才能辨认到log4j2.yml文件 -->
		<dependency>
			<groupId>com.fasterxml.jackson.dataformat</groupId>
			<artifactId>jackson-dataformat-yaml</artifactId>
		</dependency>
		<dependency> <!-- 引入log4j2依赖 -->
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-log4j2</artifactId>
		</dependency>
		<!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
		<dependency>
			<groupId>mysql</groupId>
			<artifactId>mysql-connector-java</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
			<exclusions>
				<exclusion>
					<groupId>org.springframework.boot</groupId>
					<artifactId>spring-boot-starter-logging</artifactId>
				</exclusion>
				<exclusion>
					<groupId>org.slf4j</groupId>
					<artifactId>slf4j-log4j12</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-aop</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<!-- <dependency> <groupId>org.scala-lang</groupId> <artifactId>scala-library</artifactId>
			<version>2.11.0</version> </dependency> -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-configuration-processor</artifactId>
			<optional>true</optional>
		</dependency>
	</dependencies>

```

 	2.然后更改test-service的目录结构,删除zk的配置并更改application.yml文件,目录结构与代码:

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
    address:  nacos://127.0.0.1:8848
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

<img src="/img/blog/20191202211833.png" alt="20191202211833"  style={{ zoom:'100%' }} />

 	3.再更改registry.conf文件,如果你的nacos是其它服务器,请改成对应都ip跟端口

```java
registry {
  type = "nacos"
  file {
    name = "file.conf"
  }
   zk {
    cluster = "default"
    serverAddr = "127.0.0.1:2181"
    session.timeout = 6000
    connect.timeout = 2000
  }
    nacos {
    serverAddr = "localhost"
    namespace = ""
    cluster = "default"
  }
}
config {
  type = "nacos"
  file {
    name = "file.conf"
  }
  zk {
    serverAddr = "127.0.0.1:2181"
    session.timeout = 6000
    connect.timeout = 2000
  }
    nacos {
    serverAddr = "localhost"
    namespace = ""
    cluster = "default"
  }
}
```

 	4.接着我们运行provideApplication

![20191202212000](/img/blog/20191202212000.png)

启动成功啦,我们再去看seata的日志:

![20191202212028](/img/blog/20191202212028.png)

成功了,这下我们一样,去修改test-client的内容,首先一样application.yml,把zk换成nacos,这里就不详细描述了,把test-service内的registry.conf,复制到client项目的resources中覆盖原来的registry.conf.

然后我们可以运行clientApplication:

![20191202212114](/img/blog/20191202212114.png)

 	5.确认服务已经被发布并测试事务运行是否正常

![20191202212203](/img/blog/20191202212203.png)

服务成功发布出来,也被成功消费了.这下我们再去swagger中去测试回滚是否一切正常,访问http://127.0.0.1:28888/swagger-ui.html

![20191202212240](/img/blog/20191202212240.png)

恭喜你,看到这一定跟我一样成功了!

# 总结

关于nacos的使用跟seata的简单搭建已经完成了,更详细的内容希望希望大家访问以下地址阅读详细文档

[nacos官网](https://nacos.io/zh-cn/index.html)

[dubbo官网](http://dubbo.apache.org/en-us/)

[seata官网](http://seata.apache.org/zh-cn/)
