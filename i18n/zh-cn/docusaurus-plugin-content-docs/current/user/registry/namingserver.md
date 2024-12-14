---
title: Seata Namingserver 注册中心
keywords: [ Seata, Namingserver ]
description: namingserver 注册中心。
---

# Namingserver 注册中心

Namingserver 是 Seata 原生的注册中心.

## 预备工作
可以选择在编译器中运行namingserver或者打包后运行namingserver
### 编译器运行namingserver

进入`namingsever`目录，在`resources/application.yml`下设置namingserver启动的端口号，启动namingserver

### 运行namingserver

从[链接](https://seata.apache.org/download/seata-server/）下载namingserver的发行包)下载seata2.2.0的二进制压缩包，解压后进入seata-namingserver目录

目录下的conf/application.yml中配置namingserver启动的端口号，
mac或linux运行
```shell
bin\seata-namingserver.sh
```
windows环境运行
```shell
bin\seata-namingserver.bat
```
## 快速上手

Seata 使用 namingserver 作为注册中心的操作步骤非常简单，分为在client端的配置以及在server端的配置

### Client端配置注册中心

在 [**application.yml**](https://github.com/apache/incubator-seata/blob/2.x/script/client/spring/application.yml)
中加入对应的注册中心。

```yaml
seata:
  registry:
    type: seata
    seata:
      server-addr: 127.0.0.1:8081   ##第一步配置的namingserver的ip+端口，若有多个namingserver节点则用逗号分割
      namespace: public  ##命名空间
      heartbeat-period: 5000  ##心跳时间
```

### Server端配置注册中心

在 `conf/application.yaml`加入以下配置,
其余配置参考 [configuration options](https://github.com/apache/incubator-seata/blob/2.x/server/src/main/resources/application.example.yml):

```yaml
seata:
  registry:
    type: seata
    seata:
      server-addr: 127.0.0.1:8081   ##第一步配置的namingserver的ip+端口，若有多个namingserver节点则用逗号分割
      cluster: default  ##集群名称
      namespace: public  ##命名空间
      heartbeat-period: 5000  ##心跳时间
```

### 创建client端的事务分组->seata集群的映射关系
向一个namingserver节点发起创建事务分组映射关系的http请求（namingserver节点会自动同步给其它节点）
```shell
http://127.0.0.1:8081/naming/v1/addGroup?clusterName=cluster2&namespace=public&unitName&vGroup=my_test_tx_group
```
（其中namespace是client端配置的命名空间，vGroup是client端配置的事务分组，clusterName是需要映射到的server端的集群名称）

### 切换client端的事务分组->seata集群的映射关系（切流）
向一个namingserver节点发起修改事务分组映射关系的http请求（namingserver节点会自动同步给其它节点）
```shell
http://127.0.0.1:8081/naming/v1/changeGroup?clusterName=cluster2&namespace=public&unitName&vGroup=my_test_tx_group
```
（其中namespace是client端配置的命名空间，vGroup是client端配置的事务分组，clusterName是需要映射到的server端的集群名称）


随后,启动 Seata-Server 后，Client 配置完成后启动应用就可以正式体验 Seata 服务。

Tips：
- 1.请确保client与server的注册处于同一个namespace，不然会找不到服务。
- 2.注意namingserver只允许在内网使用,切勿暴露到公网环境
