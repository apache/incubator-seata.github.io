---
title: Etcd3 注册中心
keywords: [Seata, Etcd3]
description: Etcd3 注册中心。
---

# Etcd3 注册中心

Etcd3是 Seata 组件中重要的注册中心实现.

## 预备工作

当您将`Etcd3`整合到您的 Seata工程之前，请确保后台已经启动 Etcd3 Server服务。如果您尚且不熟悉 Etcd3的基本使用的话，可先行参考 [Etcd3快速入门](https://etcd.io/docs/v3.5/quickstart)。建议使用 Etcd3 `3.5.0` 及以上的版本。

## 快速上手

Seata 融合 Etcd3 注册中心的操作步骤非常简单，大致步骤可分为“增加 Maven 依赖”以及“配置注册中心“。

### 增加 Maven 依赖

首先，您需要将 `jetcd-core` 的 Maven 依赖添加到您的项目 `pom.xml` 文件中，建议使用 jetcd-core `0.3.0+`,`spring-cloud-starter-alibaba-seata`的版本与对应微服务版本对应关系请参考[版本说明](https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E)

```xml
<dependency>
    <groupId>io.seata</groupId>
    <artifactId>seata-spring-boot-starter</artifactId>
    <version>最新版</version>
</dependency>
        <!-- Etcd3 客户端依赖 -->
<dependency>
    <groupId>io.etcd</groupId>
    <artifactId>jetcd-core</artifactId>
    <version>0.3.0及以上</version>
</dependency>

```

### Client端配置注册中心

在 [**application.yml**](https://github.com/apache/incubator-seata/blob/develop/script/client/spring/application.yml) 中加入对应的注册中心,其余[配置参考](https://github.com/apache/incubator-seata/tree/develop/script/client)

```yaml
seata:
  tx-service-group: default_tx_group
  service:
    vgroup-mapping:
      my_test_tx_group: seata-server # 此处配置对应Server端配置registry.eureka.application的值
  registry:
    type: etcd3
    etcd3:
      server-addr: http://localhost:2379
```

### Server端配置注册中心

在 [registry.conf](https://github.com/apache/incubator-seata/blob/develop/script/server/config/registry.conf) 中加入对应配置中心,其余[配置参考](https://github.com/apache/incubator-seata/tree/v2.2.0/script/server)

```
registry {
  type = "etcd3"

  etcd3 {
    serverAddr = "http://localhost:2379"
  }
}
```

配置完成后启动应用就可以正式体验 Seata 服务。
