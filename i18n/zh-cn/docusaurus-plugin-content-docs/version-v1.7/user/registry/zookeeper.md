---
title: Zookeeper 注册中心
keywords: [Seata, Zookeeper]
description: Zookeeper 注册中心。
---

# ZooKeeper 注册中心

ZooKeeper是 Seata 组件中重要的注册中心实现

本文以ZooKeeper作为注册中心，以 file 作为配置中心

ZooKeeper版本建议 3.4.13及以上，下文以 ZooKeeper 3.4.14版本为例

## 预备工作

当您准备将 **Seata** 注册到 ZooKeeper 之前，请确保已经启动 ZooKeeper 服务。如果您尚且不熟悉 ZooKeeper 的基本使用的话，可先行参考 [ZooKeeper官方文档](https://zookeeper.apache.org/doc/r3.4.14/index.html)



## 快速上手

Seata 融合 ZooKeeper 注册中心的操作步骤非常简单，大致步骤可分为"Server端配置"以及"Client端配置"。

### Server端配置

下载 [Seata 1.7.0 release](https://github.com/apache/incubator-seata/releases/tag/v1.7.0) 并解压

在 `/conf/application.yaml` 中修改对应注册中心，其余[配置参考](https://github.com/apache/incubator-seata/blob/develop/server/src/main/resources/application.example.yml)

```yaml
seata:
  registry:
    type: zk
    zk:
      cluster: default
      server-addr: 127.0.0.1:2181
      session-timeout: 6000
      connect-timeout: 2000
      username: ""
      password: ""
```

执行 /bin/seata-server.bat (Windows) 或 /bin/seata-server.sh (Unix) 启动 Seata，服务将运行在本地 8091 端口上，打开ZooKeeper客户端命令行，输入` ls /registry/zk/default`，查看到节点地址即注册成功（如下）

```text
[zk: localhost:2181(CONNECTED) 1] ls /registry/zk/default
[127.0.0.1:8091]
```




### Client端配置

如果使用`io.seata:seata-spring-boot-starter`依赖，需要在 application.yml 中加入如下zookeeper的配置项，其余[配置参考](https://github.com/apache/incubator-seata/blob/1.7.0/script/client/spring/application.yml)

```yaml
seata:
  registry:
    type: zk
    zk:
      server-addr: 127.0.0.1:2181
  # 有关事务分组，请参考 https://seata.apache.org/zh-cn/docs/user/txgroup/transaction-group
      session-timeout: 6000
      connect-timeout: 2000
      username:
      password:
  tx-service-group: default_tx_group
  service:
    # 事务分组与集群映射关系
    vgroup-mapping:
      default_tx_group: default
```

或者使用`io.seata:seata-all`依赖，则需要在`file.conf`中加入事务分组与集群映射关系：
```
  vgroupMapping.default_tx_group = "default"
```

并在`registry.conf`文件中加入zookeeper的配置项，其余[配置参考](https://github.com/apache/incubator-seata/tree/1.7.0/script/client/conf)

```
  zk {
    serverAddr = "127.0.0.1:2181"
    sessionTimeout = 6000
    connectTimeout = 2000
    username = ""
    password = ""
  }
```

Client 配置完成后启动应用并稍待片刻，即可正式体验 Seata 服务





