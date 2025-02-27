---
title: 参数配置
keywords: [Seata]
description: Seata 参数配置。
---

# seata 参数配置

## 关注属性(详细描述见全属性)

| server 端                      | client 端                              |
| ------------------------------ | -------------------------------------- |
| registry.type                  | registry.type                          |
| config.type                    | config.type                            |
| #store.mode=db 需要以下配置    | service.vgroupMapping.my_test_tx_group |
| store.db.driverClassName       | service.default.grouplist              |
| store.db.url                   | service.disableGlobalTransaction       |
| store.db.user                  |                                        |
| store.db.password              |                                        |
| #store.mode=redis 需要以下配置 |                                        |
| store.redis.host               |                                        |
| store.redis.port               |                                        |
| store.redis.database           |                                        |
| store.redis.password           |                                        |
| #store.mode=raft 需要以下配置  |                                        |
| server.raft.group              |                                        |
| server.raft.server-addr        |                                        |
| server.raft.snapshot-interval  |                                        |

## 全属性

### 公共部分

| key                                      | desc                                      | remark                                                                                                                                                                                                                                                              | change record                                                                                             |
| ---------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| transport.type                           | socket 通信方式                           | TCP、UNIX_DOMAIN_SOCKET，默认 TCP                                                                                                                                                                                                                                   |
| transport.server                         | socket 通道类型                           | NIO、NATIVE(根据操作系统类型和 socket 通信方式选择 KQueue 或 Epoll，注意 Windows 只支持 NIO，选择这种方式会抛出异常）                                                                                                                                               |
| transport.threadFactory.bossThreadSize   | Netty 通信模型 Boss group 线程数          | 默认 1                                                                                                                                                                                                                                                              |
| transport.threadFactory.workerThreadSize | Netty 通信模型 Worker group 线程数        | 可配置线程数或选择特定线程工作模式下的线程数，线程的默认工作模式有 4 种:Auto(2\*CPU 核数 + 1)、Pin(CPU 核数，适用于计算密集型任务)、BusyPin(CPU 核数 + 1，适用于计算密集型且内存比较有限的场景）、Default(2\*CPU 核数，适用于 IO 密集型任务）,默认值为 Default 模式 |
| transport.shutdown.wait                  | 服务端 Netty 线程池关闭前等待服务下线时间 | 默认 3 秒                                                                                                                                                                                                                                                           |
| transport.serialization                  | client 和 server 通信编解码方式           | seata(ByteBuf)、protobuf、kryo、hessian、fst，默认 seata                                                                                                                                                                                                            |
| transport.compressor                     | client 和 server 通信数据压缩方式         | none、gzip、zip、sevenz、bzip2、lz4、deflater、zstd，默认 none                                                                                                                                                                                                      | 1.2.0 之前：gzip <br /> 1.2.0:zip、sevenz、bzip2 <br /> 1.3.0:lz4 <br /> 1.4.1:deflater <br /> 1.5.1:zstd |
| transport.heartbeat                      | client 和 server 通信心跳检测开关         | 默认 true 开启                                                                                                                                                                                                                                                      |
| transport.heartbeat                      | client 和 server 通信心跳检测开关         | 默认 true 开启                                                                                                                                                                                                                                                      |
| registry.type                            | 注册中心类型                              | 默认 file，支持 file 、nacos 、redis、eureka、zk、consul、etcd3、sofa、custom                                                                                                                                                                                       | 1.6.0 版本 Sever 端支持可同时注册到多个注册中心,以逗号分隔注册中心名                                      |
| config.type                              | 配置中心类型                              | 默认 file，支持 file、nacos 、apollo、zk、consul、etcd3、springcloud、custom                                                                                                                                                                                        |

### server 端

| key                                       | desc                                                                                      | remark                                                                                                                                                                                                                             | change record                                                     |
| ----------------------------------------- |-------------------------------------------------------------------------------------------| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| transport.enableTcServerBatchSendResponse | TC 批量发送回复消息开关                                                                             | 默认 false                                                                                                                                                                                                                         | 1.5.1 版本新增,建议为 true,可解决 client 批量消息时的线头阻塞问题 |
| transport.rpcTcRequestTimeout             | TC 二阶段下发请求超时时间                                                                            | 默认 30 秒                                                                                                                                                                                                                         | 1.5.1 版本新增                                                    |
| server.undo.logSaveDays                   | undo 保留天数                                                                                 | 默认 7 天,log_status=1（附录 3）和未正常清理的 undo                                                                                                                                                                                |
| server.undo.logDeletePeriod               | undo 清理线程间隔时间                                                                             | 默认 86400000，单位毫秒                                                                                                                                                                                                            |
| server.maxCommitRetryTimeout              | 二阶段提交重试超时时长                                                                               | 单位 ms,s,m,h,d,对应毫秒,秒,分,小时,天,默认毫秒。默认值-1 表示无限重试。公式: timeout>=now-globalTransactionBeginTime,true 表示超时则不再重试(注: 达到超时时间后将不会做任何重试,有数据不一致风险,除非业务自行可校准数据,否者慎用) |
| server.maxRollbackRetryTimeout            | 二阶段回滚重试超时时长                                                                               | 同 commit                                                                                                                                                                                                                          |
| server.recovery.committingRetryPeriod     | 二阶段提交未完成状态全局事务重试提交线程间隔时间。单机作用域非全局。                                                        | 默认 1000，单位毫秒                                                                                                                                                                                                                |
| server.recovery.asynCommittingRetryPeriod | 二阶段异步提交状态重试提交线程间隔时间。单机作用域非全局。                                                             | 默认 1000，单位毫秒                                                                                                                                                                                                                |
| server.recovery.rollbackingRetryPeriod    | 二阶段回滚状态重试回滚线程间隔时间。单机作用域非全局。                                                               | 默认 1000，单位毫秒                                                                                                                                                                                                                |
| server.recovery.timeoutRetryPeriod        | 超时状态检测重试线程间隔时间。单机作用域非全局。                                                                          | 默认 1000，单位毫秒，检测出超时将全局事务置入回滚会话管理器                                                                                                                                                                        |
| server.rollbackRetryTimeoutUnlockEnable   | 二阶段回滚超时后是否释放锁                                                                             | 默认 false                                                                                                                                                                                                                         |
| server.distributedLockExpireTime          | Sever 端事务管理全局锁超时时间                                                                        | 默认 10000，单位毫秒                                                                                                                                                                                                               | 1.5.1 版本新增                                                    |
| server.server.xaerNotaRetryTimeout        | 防止 XA 分支事务悬挂的重试超时时间                                                                       | 默认 60000，单位毫秒                                                                                                                                                                                                               | 1.5.1 版本新增                                                    |
| server.session.branchAsyncQueueSize       | 分支事务 Session 异步删除线程池队列大小                                                                  | 默认 5000                                                                                                                                                                                                                          | 1.5.1 版本新增                                                    |
| server.session.enableBranchAsyncRemove    | 分支事务 Session 异步删除开关                                                                       | 默认 false                                                                                                                                                                                                                         | 1.5.1 版本新增                                                    |
| server.enableParallelRequestHandle        | 对于批量请求消息的并行处理开关                                                                           | 默认 true                                                                                                                                                                                                                          | 1.5.2 版本新增                                                    |
| server.enableParallelHandleBranch         | 二阶段并行下发开关                                                                                 | 默认 false                                                                                                                                                                                                                         | 2.0.0 版本新增                                                    |
| server.raft.group                         | raft 存储模式下的 group，client 的事务分组对应的值要与之对应，如 service.vgroup-mapping.default_tx_group=default | default                                                                                                                                                                                                                            | 2.0.0 版本新增                                                    |
| server.raft.server-addr                   | raft 集群列表如 192.168.0.111:9091,192.168.0.112:9091,192.168.0.113:9091                       |                                                                                                                                                                                                                                    | 2.0.0 版本新增                                                    |
| server.raft.snapshot-interval             | 间隔多久做一次内存快照，每做一次快照将暂停状态机，但是能提高停机恢复速度                                                      | 默认 600 秒                                                                                                                                                                                                                        | 2.0.0 版本新增                                                    |
| server.raft.apply-batch                   | 任务累积批次后提交至 leader                                                                         | 默认 32                                                                                                                                                                                                                            | 2.0.0 版本新增                                                    |
| server.raft.max-append-bufferSize         | raft 日志存储缓冲区最大大小                                                                          | 默认 256K                                                                                                                                                                                                                          | 2.0.0 版本新增                                                    |
| server.raft.max-replicator-inflight-msgs  | 在启用 pipeline 请求情况下，最大 in-flight 请求数                                                       | 默认 256                                                                                                                                                                                                                           | 2.0.0 版本新增                                                    |
| server.raft.disruptor-buffer-size         | 内部 disruptor buffer 大小，如果是写入吞吐量较高场景，需要适当调高该值，                                             | 默认 16384                                                                                                                                                                                                                         | 2.0.0 版本新增                                                    |
| server.raft.election-timeout-ms           | 超过多久没有 leader 的心跳开始重选举                                                                    | 默认 1000 毫秒                                                                                                                                                                                                                     | 2.0.0 版本新增                                                    |
| server.raft.reporter-enabled              | raft 自身的监控是否开启                                                                            | 默认 false                                                                                                                                                                                                                         | 2.0.0 版本新增                                                    |
| server.raft.reporter-initial-delay        | 监控输出间隔                                                                                    | 默认 60 秒                                                                                                                                                                                                                         | 2.0.0 版本新增                                                    |
| server.raft.serialization                 | 序列化方式，目前仅支持 jackson                                                                       | 默认 jackson                                                                                                                                                                                                                       | 2.0.0 版本新增                                                    |
| server.raft.compressor                    | raftlog 和 snapshot 的压缩方式，支持 gzip, zstd, lz4                                               | none                                                                                                                                                                                                                               | 2.0.0 版本新增                                                    |
| server.raft.sync                          | raftlog 同步刷盘                                                                              | true                                                                                                                                                                                                                               | 2.0.0 版本新增                                                    |
| store.mode                                | 事务会话信息存储方式                                                                                | file 本地文件(不支持 HA)，db 数据库、redis、raft 支持 HA                                                                                                                                                                           | 1.5.1 版本改用 lock 和 session 分离存储，2.0.0 开始支持 raft 模式 |
| store.lock.mode                           | 事务锁信息存储方式                                                                                 | file 本地文件(不支持 HA)，db 数据库，redis(支持 HA)；配置为空时，取 store.mode 配置项值，raft 模式不允许指定                                                                                                                       | 1.5.1 版本新增，session 和 lock 可分离存储                        |
| store.session.mode                        | 事务回话信息存储方式                                                                                | file 本地文件(不支持 HA)，db 数据库，redis(支持 HA)；配置为空时，取 store.mode 配置项值。raft 模式不允许单独指定                                                                                                                   | 1.5.1 版本新增，session 和 lock 可分离存储                        |
| store.publicKey                           | db 或 redis 存储密码解密公钥                                                                       |                                                                                                                                                                                                                                    | 1.4.2 版本支持                                                    |
| store.file.dir                            | file 模式文件存储文件夹名                                                                           | 默认 sessionStore                                                                                                                                                                                                                  |
| store.file.maxBranchSessionSize           | file 模式文件存储分支 session 最大字节数                                                               | 默认 16384(16kb),单位 byte                                                                                                                                                                                                         |
| store.file.maxGlobalSessionSize           | file 模式文件存储全局 session 最大字节数                                                               | 默认 512b，单位 byte                                                                                                                                                                                                               |
| store.file.fileWriteBufferCacheSize       | file 模式文件存储 buffer 最大缓存大小                                                                 | 默认 16384(16kb)，单位 byte,写入 session 等数据量大于该值时会抛出异常                                                                                                                                                              |
| store.file.flushDiskMode                  | file 模式文件存储刷盘策略                                                                           | 默认 async，可选 sync                                                                                                                                                                                                              |
| store.file.sessionReloadReadSize          | file 模式文件存储 Server 节点重启后从备份文件中恢复的 session 或 lock key 上限个数                                 | 默认 100                                                                                                                                                                                                                           |
| store.db.datasource                       | db 模式数据源类型                                                                                | dbcp、druid、hikari；无默认值，store.mode=db 时必须指定                                                                                                                                                                            |
| store.db.dbType                           | db 模式数据库类型                                                                                | mysql、oracle、db2、sqlserver、sybaee、h2、sqlite、access、postgresql、oceanbase；无默认值，store.mode=db 时必须指定。                                                                                                             |
| store.db.driverClassName                  | db 模式数据库驱动                                                                                | store.mode=db 时必须指定                                                                                                                                                                                                           |
| store.db.url                              | db 模式数据库 url                                                                              | store.mode=db 时必须指定，在使用 mysql 作为数据源时，建议在连接参数中加上`rewriteBatchedStatements=true`(详细原因请阅读附录 7)                                                                                                     |
| store.db.user                             | db 模式数据库账户                                                                                | store.mode=db 时必须指定                                                                                                                                                                                                           |
| store.db.password                         | db 模式数据库账户密码                                                                              | store.mode=db 时必须指定                                                                                                                                                                                                           |
| store.db.minConn                          | db 模式数据库初始连接数                                                                             | 默认 1                                                                                                                                                                                                                             |
| store.db.maxConn                          | db 模式数据库最大连接数                                                                             | 默认 20                                                                                                                                                                                                                            |
| store.db.maxWait                          | db 模式获取连接时最大等待时间                                                                          | 默认 5000，单位毫秒                                                                                                                                                                                                                |
| store.db.globalTable                      | db 模式全局事务表名                                                                               | 默认 global_table                                                                                                                                                                                                                  |
| store.db.branchTable                      | db 模式分支事务表名                                                                               | 默认 branch_table                                                                                                                                                                                                                  |
| store.db.lockTable                        | db 模式全局锁表名                                                                                | 默认 lock_table                                                                                                                                                                                                                    |
| store.db.queryLimit                       | db 模式查询全局事务一次的最大条数                                                                        | 默认 100                                                                                                                                                                                                                           |
| store.db.distributedLockTable             | db 模式 Sever 端事务管理全局锁存储表名                                                                  | 默认 distributed_lock，多 Sever 集群下保证同时只有一个 Sever 处理提交或回滚                                                                                                                                                        | 1.5.1 版本新增                                                    |
| store.redis.mode                          | redis 模式                                                                                  | 默认 single,可选 sentinel                                                                                                                                                                                                          | 1.4.2 版本新增 sentinel 模式                                      |
| store.redis.single.host                   | 单机模式下 redis 的 host,兼容 1.4.2 之前的版本，该配置为空时选取 store.redis.host 作为配置项                         | 1.4.2 版本新增                                                                                                                                                                                                                     |
| store.redis.single.port                   | 单机模式下 redis 的 port,兼容 1.4.2 之前的版本，该配置为空时选取 store.redis.port 作为配置项                         | 1.4.2 版本新增                                                                                                                                                                                                                     |
| store.redis.sentinel.masterName           | sentinel 模式下 redis 的主库名称                                                                  |                                                                                                                                                                                                                                    | 1.4.2 版本新增                                                    |
| store.redis.sentinel.sentinelHosts        | sentinel 模式下 sentinel 的 hosts                                                             | 多 hosts 以逗号分隔                                                                                                                                                                                                                | 1.4.2 版本新增                                                    |
| store.redis.host                          | redis 模式 ip                                                                               | 默认 127.0.0.1                                                                                                                                                                                                                     | 1.4.2 版本弃用                                                    |
| store.redis.port                          | redis 模式端口                                                                                | 默认 6379                                                                                                                                                                                                                          | 1.4.2 版本弃用                                                    |
| store.redis.maxConn                       | redis 模式最大连接数                                                                             | 默认 10                                                                                                                                                                                                                            |
| store.redis.minConn                       | redis 模式最小连接数                                                                             | 默认 1                                                                                                                                                                                                                             |
| store.redis.database                      | redis 模式默认库                                                                               | 默认 0                                                                                                                                                                                                                             |
| store.redis.password                      | redis 模式密码(无可不填)                                                                          | 默认 null                                                                                                                                                                                                                          |
| store.redis.queryLimit                    | redis 模式一次查询最大条数                                                                          | 默认 100                                                                                                                                                                                                                           |
| store.redis.type                          | redis 模式主要使用的方式: lua, pippline                                                            | pippline                                                                                                                                                                                                                           |
| metrics.enabled                           | 是否启用 Metrics                                                                              | 默认 false 关闭，在 False 状态下，所有与 Metrics 相关的组件将不会被初始化，使得性能损耗最低                                                                                                                                        |
| metrics.registryType                      | 指标注册器类型                                                                                   | Metrics 使用的指标注册器类型，默认为内置的 compact（简易）实现，这个实现中的 Meter 仅使用有限内存计数，性能高足够满足大多数场景；目前只能设置一个指标注册器实现                                                                    |
| metrics.exporterList                      | 指标结果 Measurement 数据输出器列表                                                                  | 默认 prometheus，多个输出器使用英文逗号分割，例如"prometheus,jmx"，目前仅实现了对接 prometheus 的输出器                                                                                                                            |
| metrics.exporterPrometheusPort            | prometheus 输出器 Client 端口号                                                                 | 默认 9898                                                                                                                                                                                                                          |

### client 端

| key                                                | desc                                          | remark                                                                                                                                                | change record  |
| -------------------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| seata.enabled                                      | 是否开启 spring-boot 自动装配                 | true、false,(SSBS)专有配置，默认 true（附录 4）                                                                                                       |
| seata.enableAutoDataSourceProxy=true               | 是否开启数据源自动代理                        | true、false,seata-spring-boot-starter(SSBS)专有配置,SSBS 默认会开启数据源自动代理,可通过该配置项关闭.                                                 |
| seata.useJdkProxy=false                            | 是否使用 JDK 代理作为数据源自动代理的实现方式 | true、false,(SSBS)专有配置,默认 false,采用 CGLIB 作为数据源自动代理的实现方式                                                                         |
| transport.enableClientBatchSendRequest             | 客户端事务消息请求是否批量合并发送            | 默认 true，false 单条发送                                                                                                                             |
| client.log.exceptionRate                           | 日志异常输出概率                              | 默认 100，目前用于 undo 回滚失败时异常堆栈输出，百分之一的概率输出，回滚失败基本是脏数据，无需输出堆栈占用硬盘空间                                    |
| service.vgroupMapping.my_test_tx_group             | 事务群组（附录 1）                            | my_test_tx_group 为分组，配置项值为 TC 集群名                                                                                                         |
| service.default.grouplist                          | TC 服务列表（附录 2）                         | 仅注册中心为 file 时使用                                                                                                                              |
| service.disableGlobalTransaction                   | 全局事务开关                                  | 默认 false。false 为开启，true 为关闭                                                                                                                 |
| client.tm.degradeCheck                             | 降级开关                                      | 默认 false。业务侧根据连续错误数自动降级不走 seata 事务(详细介绍请阅读附录 6)                                                                         |
| client.tm.degradeCheckAllowTimes                   | 升降级达标阈值                                | 默认 10                                                                                                                                               |
| client.tm.degradeCheckPeriod                       | 服务自检周期                                  | 默认 2000,单位 ms.每 2 秒进行一次服务自检,来决定                                                                                                      |
| client.rm.reportSuccessEnable                      | 是否上报一阶段成功                            | true、false，从 1.1.0 版本开始,默认 false.true 用于保持分支事务生命周期记录完整，false 可提高不少性能                                                 |
| client.rm.asyncCommitBufferLimit                   | 异步提交缓存队列长度                          | 默认 10000。 二阶段提交成功，RM 异步清理 undo 队列                                                                                                    |
| client.rm.lock.retryInterval                       | 校验或占用全局锁重试间隔                      | 默认 10，单位毫秒                                                                                                                                     |
| client.rm.lock.retryTimes                          | 校验或占用全局锁重试次数                      | 默认 30                                                                                                                                               |
| client.rm.lock.retryPolicyBranchRollbackOnConflict | 分支事务与其它全局回滚事务冲突时锁策略        | 默认 true，优先释放本地锁让回滚成功                                                                                                                   |
| client.rm.reportRetryCount                         | 一阶段结果上报 TC 重试次数                    | 默认 5 次                                                                                                                                             | 1.4.1 版本新增 |
| client.rm.tableMetaCheckEnable                     | 自动刷新缓存中的表结构                        | 默认 false                                                                                                                                            | 1.5.1 版本新增 |
| client.rm.tableMetaCheckerInterval                 | 定时刷新缓存中表结构间隔时间                  | 默认 60 秒                                                                                                                                            |
| client.rm.sagaBranchRegisterEnable                 | 是否开启 saga 分支注册                        | Saga 模式中分支状态存储在状态机本地数据库中，可通过状态机进行提交或回滚，为提高性能可考虑不用向 TC 注册 Saga 分支，但需考虑状态机的可用性，默认 false |
| client.rm.sagaJsonParser                           | saga 模式中数据序列化方式                     | 默认 fastjson,可选 jackson                                                                                                                            | 1.5.1 版本新增 |
| client.rm.tccActionInterceptorOrder                | tcc 拦截器顺序                                | 默认 Ordered.HIGHEST_PRECEDENCE + 1000，保证拦截器在本地事务拦截器之前执行，也可自定义 tcc 和业务开发的拦截器执行顺序                                 | 1.5.1 版本新增 |
| client.tm.commitRetryCount                         | 一阶段全局提交结果上报 TC 重试次数            | 默认 1 次，建议大于 1                                                                                                                                 |
| client.tm.rollbackRetryCount                       | 一阶段全局回滚结果上报 TC 重试次数            | 默认 1 次，建议大于 1                                                                                                                                 |
| client.tm.defaultGlobalTransactionTimeout          | 全局事务超时时间                              | 默认 60 秒，TM 检测到分支事务超时或 TC 检测到 TM 未做二阶段上报超时后，发起对分支事务的回滚                                                           | 1.4.0 版本新增 |
| client.tm.interceptorOrder                         | TM 全局事务拦截器顺序                         | 默认 Ordered.HIGHEST_PRECEDENCE + 1000，保证拦截器在本地事务拦截器之前执行，也可自定义全局事务和业务开发的拦截器执行顺序                              | 1.5.1 版本新增 |
| client.undo.dataValidation                         | 二阶段回滚镜像校验                            | 默认 true 开启，false 关闭                                                                                                                            |
| client.undo.logSerialization                       | undo 序列化方式                               | 默认 jackson                                                                                                                                          |
| client.undo.logTable                               | 自定义 undo 表名                              | 默认 undo_log                                                                                                                                         |
| client.undo.onlyCareUpdateColumns                  | 只生成被更新列的镜像                          | 默认 true                                                                                                                                             |
| client.undo.compress.enable                        | undo log 压缩开关                             | 默认 true                                                                                                                                             | 1.4.1 版本新增 |
| client.undo.compress.type                          | undo log 压缩算法                             | 默认 zip,可选 NONE(不压缩)、GZIP、ZIP、SEVENZ、BZIP2、LZ4、DEFLATER、ZSTD                                                                             | 1.4.1 版本新增 |
| client.undo.compress.threshold                     | undo log 压缩阈值                             | 默认值 64k，压缩开关开启且 undo log 大小超过阈值时才进行压缩                                                                                          | 1.4.1 版本新增 |
| client.rm.sqlParserType                            | sql 解析类型                                  | 默认 druid,可选 antlr                                                                                                                                 |

<details>
  <summary><mark>参数同步到配置中心使用demo</mark></summary>

#### Nacos

shell:

```bash
sh $\{SEATAPATH}/script/config-center/nacos/nacos-config.sh -h localhost -p 8848 -g SEATA_GROUP -t 5a3c7d6c-f497-4d68-a71a-2e5e3340b3ca
```

参数说明：

-h: host，默认值 localhost

-p: port，默认值 8848

-g: 配置分组，默认值为 'SEATA_GROUP'

-t: 租户信息，对应 Nacos 的命名空间 ID 字段, 默认值为空 ''

#### Apollo

```bash
sh $\{SEATAPATH}/script/config-center/apollo/apollo-config.sh -h localhost -p 8070 -e DEV -a seata-server -c default -n application -d apollo -r apollo -t 3aa026fc8435d0fc4505b345b8fa4578fb646a2c
```

参数说明：

-h: host，默认值 localhost

-p: port，默认值 8070

-e: 所管理的配置环境，默认值 DEV

-a: Namespace 所属的 AppId，默认值 seata-server

-c: 所管理的配置集群名， 一般情况下传入 default 即可。如果是特殊集群，传入相应集群的名称即可，默认值 default

-n: 所管理的 Namespace 的名称，如果是非 properties 格式，需要加上后缀名，如 sample.yml，默认值 application

-d: item 的创建人，格式为域账号，也就是 sso 系统的 User ID

-r: 发布人，域账号，注意：如果 ApolloConfigDB.ServerConfig 中的 namespace.lock.switch 设置为 true 的话（默认是 false），那么该环境不允许发布人和编辑人为同一人。所以如果编辑人是 zhangsan，发布人就不能再是 zhangsan。

-t: Apollo 管理员在 http://\{portal_address}/open/manage.html 创建第三方应用，创建之前最好先查询此 AppId 是否已经创建。创建成功之后会生成一个 token

以上参数说明详情请看：

https://github.com/ctripcorp/apollo/wiki/Apollo%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0

#### Consul

```bash
sh $\{SEATAPATH}/script/config-center/consul/consul-config.sh -h localhost -p 8500
```

参数说明：

-h: host，默认值 localhost

-p: port，默认值 8500

#### Etcd3

```bash
sh $\{SEATAPATH}/script/config-center/etcd3/etcd3-config.sh -h localhost -p 2379
```

参数说明：

-h: host，默认值 localhost

-p: port，默认值 2379

python:

```bash
python $\{SEATAPATH}/script/config-center/nacos/nacos-config.py localhost:8848
```

#### ZK

```bash
sh $\{SEATAPATH}/script/config-center/zk/zk-config.sh -h localhost -p 2181 -z "/Users/zhangchenghui/zookeeper-3.4.14"
```

参数说明：

-h: host，默认值 localhost

-p: port，默认值 2181

-z: zk 所属路径

</details>

### 附录 1：

    事务分组说明。
    1.事务分组是什么？
    事务分组是seata的资源逻辑，类似于服务实例。在file.conf中的my_test_tx_group就是一个事务分组。
    2.通过事务分组如何找到后端集群？
    首先程序中配置了事务分组（GlobalTransactionScanner 构造方法的txServiceGroup参数），程序会通过用户配置的配置中心去寻找service.vgroupMapping
    .事务分组配置项，取得配置项的值就是TC集群的名称。拿到集群名称程序通过一定的前后缀+集群名称去构造服务名，各配置中心的服务名实现不同。拿到服务名去相应的注册中心去拉取相应服务名的服务列表，获得后端真实的TC服务列表。
    3.为什么这么设计，不直接取服务名？
    这里多了一层获取事务分组到映射集群的配置。这样设计后，事务分组可以作为资源的逻辑隔离单位，当发生故障时可以快速failover。

### 附录 2：

    关于grouplist问题说明下。
    1. 什么时候会用到file.conf中的default.grouplist？
    当registry.type=file时会用到，其他时候不读。
    2. default.grouplist的值列表是否可以配置多个？
    可以配置多个，配置多个意味着集群，但当store.mode=file时，会报错。原因是在file存储模式下未提供本地文件的同步，所以需要使用store.mode=db，通过db来共享TC集群间数据
    3. 是否推荐使用default.grouplist？
    不推荐，如问题1，当registry.type=file时会用到，也就是说这里用的不是真正的注册中心，不具体服务的健康检查机制当tc不可用时无法自动剔除列表，推荐使用nacos 、eureka、redis、zk、consul、etcd3、sofa。registry.type=file或config.type=file 设计的初衷是让用户再不依赖第三方注册中心或配置中心的前提下，通过直连的方式，快速验证seata服务。
    4.seata-spring-boot-starter中的配置为什么是grouplist.default,也就是说和file.conf中的default.grouplist写法刚好颠倒了位置?
    由于spring-boot本身配置文件语法的要求,这个地方需要将file.conf中的default.grouplist写成grouplist.default,效果是一样的.

### 附录 3：

    log_status=1的是防御性的，是收到全局回滚请求，但是不确定某个事务分支的本地事务是否已经执行完成了，这时事先插入一条branchid相同的数据，插入的假数据成功了，本地事务继续执行就会报唯一索引冲突自动回滚。
    假如插入不成功说明表里有数据这个本地事务已经执行完成了，那么取出这条undolog数据做反向回滚操作。

### 附录 4：

    是否开启spring-boot自动装配，如果开启，则会自动配置seata与spring-boot的集成，包括数据源的自动代理以及GlobalTransactionScanner初始化。
    注：1.0版本新特性，需依赖seata-spring-boot-starter。

### 附录 5:

    seata1.1.0版本新加入以下注解,用于开启数据源自动代理功能
    @EnableAutoDataSourceProxy

| attribute   | desc                                          | remark                                                         |
| ----------- | --------------------------------------------- | -------------------------------------------------------------- |
| useJdkProxy | 是否使用 JDK 代理作为数据源自动代理的实现方式 | false、true,默认 false,采用 CGLIB 作为数据源自动代理的实现方式 |

    1.对于使用seata-spring-boot-starter的方式，默认已开启数据源自动代理,如需关闭，请配置seata.enableAutoDataSourceProxy=false，该项配置默认为true。
      如需切换代理实现方式，请通过seata.useJdkProxy=false进行配置,默认为false，采用CGLIB作为数据源自动代理的实现方式。
    2.对于使用seata-all的方式，请使用@EnableAutoDataSourceProxy来显式开启数据源自动代理功能。如有需要，可通过该注解的useJdkProxy属性进行代理实现方式
      的切换。默认为false,采用CGLIB作为数据源自动代理的实现方式。

### 附录 6:

```
关于服务自动降级策略的具体实现介绍:
首先通过读取client.tm.degradeCheck是否为true,决定是否开启自检线程.随后读取degradeCheckAllowTimes和degradeCheckPeriod,确认阈值与自检周期.
假设degradeCheckAllowTimes=10,degradeCheckPeriod=2000
那么每2秒钟会进行一个begin,commit的测试,如果失败,则记录连续失败数,如果成功则清空连续失败数.连续错误由用户接口及自检线程进行累计,直到连续失败次数达到用户的阈值,则关闭Seata分布式事务,避免用户自身业务长时间不可用.
反之,假如当前分布式事务关闭,那么自检线程继续按照2秒一次的自检,直到连续成功数达到用户设置的阈值,那么Seata分布式事务将恢复使用
```

### 附录 7:

    在store.mode=db，由于seata是通过jdbc的executeBatch来批量插入全局锁的，根据MySQL官网的说明，连接参数中的rewriteBatchedStatements为true时，在执行executeBatch，并且操作类型为insert时，jdbc驱动会把对应的SQL优化成`insert into () values (), ()`的形式来提升批量插入的性能。
    根据实际的测试，该参数设置为true后，对应的批量插入性能为原来的10倍多，因此在数据源为MySQL时，建议把该参数设置为true。
