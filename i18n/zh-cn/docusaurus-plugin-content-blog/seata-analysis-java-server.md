---
title: 深度剖析一站式分布式事务方案Seata-Server
author: 李钊,季敏
date: 2019/04/08
keywords: [fescar、seata、分布式事务]
---

# 1.关于 Seata

再前不久，我写了一篇关于分布式事务中间件 Fescar 的解析，没过几天 Fescar 团队对其进行了品牌升级，取名为 Seata(Simpe Extensible Autonomous Transaction Architecture)，而以前的 Fescar 的英文全称为 Fast & EaSy Commit And Rollback。可以看见 Fescar 从名字上来看更加局限于 Commit 和 Rollback，而新的品牌名字 Seata 旨在打造一套一站式分布式事务解决方案。更换名字之后，我对其未来的发展更有信心。

这里先大概回忆一下 Seata 的整个过程模型:

![](/img/blog/20190327000119.png)

- TM:事务的发起者。用来告诉 TC，全局事务的开始，提交，回滚。
- RM:具体的事务资源，每一个 RM 都会作为一个分支事务注册在 TC。
- TC:事务的协调者。也可以看做是 Fescar-server，用于接收我们的事务的注册，提交和回滚。

在之前的文章中对整个角色有个大体的介绍，在这篇文章中我将重点介绍其中的核心角色 TC，也就是事务协调器。

# 2.Transcation Coordinator

为什么之前一直强调 TC 是核心呢？那因为 TC 这个角色就好像上帝一样，管控着云云众生的 RM 和 TM。如果 TC 一旦不好使，那么 RM 和 TM 一旦出现小问题，那必定会乱的一塌糊涂。所以要想了解 Seata，那么必须要了解它的 TC。

那么一个优秀的事务协调者应该具备哪些能力呢？我觉得应该有以下几个:

- 正确的协调：能正确的协调 RM 和 TM 接下来应该做什么，做错了应该怎么办，做对了应该怎么办。
- 高可用: 事务协调器在分布式事务中很重要，如果不能保证高可用，那么它也没有存在的必要了。
- 高性能：事务协调器的性能一定要高，如果事务协调器性能有瓶颈那么它所管理的 RM 和 TM 那么会经常遇到超时，从而引起回滚频繁。
- 高扩展性：这个特点是属于代码层面的，如果是一个优秀的框架，那么需要给使用方很多自定义扩展，比如服务注册/发现，读取配置等等。

下面我也将逐步阐述 Seata 是如何做到上面四点。

## 2.1 Seata-Server 的设计

![](/img/seata-server/design.png)

Seata-Server 整体的模块图如上所示:

- Coordinator Core: 在最下面的模块是事务协调器核心代码，主要用来处理事务协调的逻辑，如是否 commit,rollback 等协调活动。
- Store:存储模块，用来将我们的数据持久化，防止重启或者宕机数据丢失。
- Discovery: 服务注册/发现模块，用于将 Server 地址暴露给我们 Client。
- Config: 用来存储和查找我们服务端的配置。
- Lock: 锁模块，用于给 Seata 提供全局锁的功能。
- RPC:用于和其它端通信。
- HA-Cluster:高可用集群，目前还没开源，为 Seata 提供可靠的高可用服务，预计将会在 0.6 版本开源。

## 2.2 Discovery

首先来讲讲比较基础的 Discovery 模块，又称服务注册/发现模块。我们将 Seata-Sever 启动之后，需要将自己的地址暴露给其它使用者，那么就需要我们这个模块帮忙。

![](/img/seata-server/discover.png)

这个模块有个核心接口 RegistryService，如上图所示:

- register：服务端使用，进行服务注册。
- unregister：服务端使用，一般在 JVM 关闭钩子，ShutdownHook 中调用。
- subscribe：客户端使用，注册监听事件，用来监听地址的变化。
- unsubscribe：客户端使用，取消注册监听事件。
- lookup：客户端使用，根据 key 查找服务地址列表。
- close：都可以使用，用于关闭 Registry 资源。

如果需要添加自己定义的服务注册/发现，那么实现这个接口即可。截止目前在社区的不断开发推动下，已经有五种服务注册/发现，分别是 redis、zk、nacos、eruka 和 consul。下面简单介绍下 Nacos 的实现：

#### 2.2.1 register 接口：

![](/img/seata-server/register.png)

step1:校验地址是否合法

step2:获取 Nacos 的 Naming 实例，然后将地址注册到服务名为 serverAddr（固定服务名） 的对应集群分组（registry.conf 文件配置）上面。

unregister 接口类似，这里不做详解。

#### 2.2.2 lookup 接口：

![](/img/seata-server/lookup.png)

step1：获取当前 clusterName 名字。

step2：判断当前集群名对应的服务是否已经订阅过了，如果是直接从 map 中取订阅返回的数据。

step3：如果没有订阅先主动查询一次服务实例列表，然后添加订阅并将订阅返回的数据存放到 map 中，之后直接从 map 获取最新数据。

#### 2.2.3 subscribe 接口

![](/img/seata-server/subscribe.png)

这个接口比较简单，具体分两步:

step1：对将要订阅的 cluster-> listener 存放到 map 中，此处 nacos 未提交单机已订阅列表，所以需要自己实现。

step2：使用 Nacos api 订阅。

## 2.3 Config

配置模块也是一个比较基础，比较简单的模块。我们需要配置一些常用的参数比如:Netty 的 select 线程数量，work 线程数量，session 允许最大为多少等等，当然这些参数再 Seata 中都有自己的默认设置。

同样的在 Seata 中也提供了一个接口 Configuration，用来自定义我们需要的获取配置的地方:

![](/img/seata-server/config.png)

- getInt/Long/Boolean/getConfig()：通过 dataId 来获取对应的值，读取不到配置、异常或超时将返回参数中的默认值。
- putConfig：用于添加配置。
- removeConfig：删除一个配置。
- add/remove/get ConfigListener：添加/删除/获取 配置监听器，一般用来监听配置的变更。

目前为止有四种方式获取 Config：File(文件获取)、Nacos、Apollo 和 ZK（不推荐）。在 Seata 中首先需要配置 registry.conf，来配置 config.type 。实现 conf 比较简单这里就不深入分析。

## 2.4 Store

存储层的实现对于 Seata 是否高性能，是否可靠非常关键。
如果存储层没有实现好，那么如果发生宕机，在 TC 中正在进行分布式事务处理的数据将会被丢失，既然使用了分布式事务，那么其肯定不能容忍丢失。如果存储层实现好了，但是其性能有很大问题，RM 可能会发生频繁回滚那么其完全无法应对高并发的场景。

在 Seata 中默认提供了文件方式的存储，下面我们定义我们存储的数据为 Session，而我们的 TM 创造的全局事务操作数据叫 GlobalSession，RM 创造的分支事务操作数据叫 BranchSession，一个 GlobalSession 可以拥有多个 BranchSession。我们的目的就是要将这么多 Session 存储下来。

在 FileTransactionStoreManager#writeSession 代码中:

![](/img/seata-server/store.png)

上面的代码主要分为下面几步：

- step1：生成一个 TransactionWriteFuture。
- step2：将这个 futureRequest 丢进一个 LinkedBlockingQueue 中。为什么需要将所有数据都丢进队列中呢？当然这里其实也可以用锁来实现，再另外一个阿里开源的 RocketMQ 中，使用的锁。不论是队列还是锁它们的目的是为了保证单线程写，这又是为什么呢？有人会解释说，需要保证顺序写，这样速度就很快，这个理解是错误的，我们的 FileChannel 的写方法是线程安全的，已经能保证顺序写了。保证单线程写其实是为了让我们这个写逻辑都是单线程的，因为可能有些文件写满或者记录写数据位置等等逻辑，当然这些逻辑都可以主动加锁去做，但是为了实现简单方便，直接再整个写逻辑排队处理是最为合适的。
- step3：调用 future.get，等待我们该条数据写逻辑完成通知。

我们将数据提交到队列之后，我们接下来需要对其进行消费，代码如下：

![](/img/seata-server/storewrite.png)

这里将一个 WriteDataFileRunnable()提交进我们的线程池，这个 Runnable 的 run()方法如下:

![](/img/seata-server/storerun.png)

分为下面几步:

step1： 判断是否停止，如果 stopping 为 true 则返回 null。

step2：从我们的队列中获取数据。

step3：判断 future 是否已经超时了，如果超时，则设置结果为 false，此时我们生产者 get()方法会接触阻塞。

step4：将我们的数据写进文件，此时数据还在 pageCahce 层并没有刷新到磁盘，如果写成功然后根据条件判断是否进行刷盘操作。

step5：当写入数量到达一定的时候，或者写入时间到达一定的时候，需要将我们当前的文件保存为历史文件，删除以前的历史文件，然后创建新的文件。这一步是为了防止我们文件无限增长，大量无效数据浪费磁盘资源。

在我们的 writeDataFile 中有如下代码:

![](/img/seata-server/writedatafile.png)

step1：首先获取我们的 ByteBuffer，如果超出最大循环 BufferSize 就直接创建一个新的，否则就使用我们缓存的 Buffer。这一步可以很大的减少 GC。

step2：然后将数据添加进入 ByteBuffer。

step3：最后将 ByteBuffer 写入我们的 fileChannel,这里会重试三次。此时的数据还在 pageCache 层，受两方面的影响，OS 有自己的刷新策略，但是这个业务程序不能控制，为了防止宕机等事件出现造成大量数据丢失，所以就需要业务自己控制 flush。下面是 flush 的代码:

![](/img/seata-server/flush.png)

这里 flush 的条件写入一定数量或者写的时间超过一定时间，这样也会有个小问题如果是停电，那么 pageCache 中有可能还有数据并没有被刷盘，会导致少量的数据丢失。目前还不支持同步模式，也就是每条数据都需要做刷盘操作，这样可以保证每条消息都落盘，但是性能也会受到极大的影响，当然后续会不断的演进支持。

我们的 store 核心流程主要是上面几个方法，当然还有一些比如，session 重建等，这些比较简单，读者可以自行阅读。

## 2.5 Lock

大家知道数据库实现隔离级别主要是通过锁来实现的，同样的再分布式事务框架 Seata 中要实现隔离级别也需要通过锁。一般在数据库中数据库的隔离级别一共有四种:读未提交，读已提交，可重复读，串行化。在 Seata 中可以保证隔离级别是读已提交，但是提供了达到读已提交隔离的手段。

Lock 模块也就是 Seata 实现隔离级别的核心模块。在 Lock 模块中提供了一个接口用于管理我们的锁:
![](/img/seata-server/lockManager.png)

其中有三个方法:

- acquireLock：用于对我们的 BranchSession 加锁，这里虽然是传的分支事务 Session，实际上是对分支事务的资源加锁，成功返回 true。
- isLockable：根据事务 ID，资源 Id，锁住的 Key 来查询是否已经加锁。
- cleanAllLocks：清除所有的锁。
  对于锁我们可以在本地实现，也可以通过 redis 或者 mysql 来帮助我们实现。官方默认提供了本地全局锁的实现：
  ![](/img/seata-server/defaultLock.png)

在本地锁的实现中有两个常量需要关注:

- BUCKET_PER_TABLE：用来定义每个 table 有多少个 bucket，目的是为了后续对同一个表加锁的时候减少竞争。
- LOCK_MAP：这个 map 从定义上来看非常复杂，里里外外套了很多层 Map，这里用个表格具体说明一下：

| 层数             | key                                             | value         |
| ---------------- | ----------------------------------------------- | ------------- |
| 1-LOCK_MAP       | resourceId（jdbcUrl）                           | dbLockMap     |
| 2- dbLockMap     | tableName （表名）                              | tableLockMap  |
| 3- tableLockMap  | PK.hashcode%Bucket （主键值的 hashcode%bucket） | bucketLockMap |
| 4- bucketLockMap | PK                                              | trascationId  |

可以看见实际上的加锁在 bucketLockMap 这个 map 中，这里具体的加锁方法比较简单就不作详细阐述，主要是逐步的找到 bucketLockMap,然后将当前 trascationId 塞进去，如果这个主键当前有 TranscationId，那么比较是否是自己，如果不是则加锁失败。

## 2.6 RPC

保证 Seata 高性能的关键之一也是使用了 Netty 作为 RPC 框架，采用默认配置的线程模型如下图所示：

![](/img/seata-server/reactor.png)

如果采用默认的基本配置那么会有一个 Acceptor 线程用于处理客户端的链接，会有 cpu\*2 数量的 NIO-Thread，再这个线程中不会做业务太重的事情，只会做一些速度比较快的事情，比如编解码，心跳事件，和 TM 注册。一些比较费时间的业务操作将会交给业务线程池，默认情况下业务线程池配置为最小线程为 100，最大为 500。

Seata 目前允许配置的传输层配置如图所示，用户可根据需要进行 Netty 传输层面的调优，配置通过配置中心配置，首次加载时生效。

![](/img/seata-server/transport.png)

这里需要提一下的是 Seata 的心跳机制，这里是使用 Netty 的 IdleStateHandler 完成的，如下:

![](/img/seata-server/idleStateHandler.png)

在 Sever 端对于写没有设置最大空闲时间，对于读设置了最大空闲时间，默认为 15s(客户端默认写空闲为 5s，发送 ping 消息)，如果超过 15s 则会将链接断开，关闭资源。

![](/img/seata-server/userEventTriggered.png)

step1：判断是否是读空闲的检测事件。

step2：如果是则断开链接，关闭资源。
另外 Seata 做了内存池、客户端做了批量小包合并发送、Netty 连接池（减少连接创建时的服务不可用时间）等功能，以下为批量小包合并功能。

![](/img/seata-server/send.png)

客户端的消息发送并不是真正的消息发送通过 AbstractRpcRemoting#sendAsyncRequest 包装成 RpcMessage 存储至 basket 中并唤醒合并发送线程。合并发送线程通过 while true 的形式
最长等待 1ms 对 basket 的消息取出包装成 merge 消息进行真正发送，此时若 channel 出现异常则会通过 fail-fast 快速失败返回结果。merge 消息发送前在 map 中标识，收到结果后批量确认（AbstractRpcRemotingClient#channelRead），并通过 dispatch 分发至 messageListener 和 handler 去处理。同时，timerExecutor 定时对已发送消息进行超时检测，若超时置为失败。具体消息协议设计将会在后续的文章中给出，敬请关注。
Seata 的 Netty Client 由 TMClient 和 RMClient 组成，根据事务角色功能区分，都继承 AbstractRpcRemotingClient，AbstractRpcRemotingClient 实现了 RemotingService（服务启停）, RegisterMsgListener（netty 连接池连接创建回调）和 ClientMessageSender（消息发送）继承了 AbstractRpcRemoting（ Client 和 Server 顶层消息发送和处理的模板）。

RMClient 类关系图如下图所示：

![](/img/seata-server/class.png)

TMClient 和 RMClient 又会根据自身的 poolConfig 配置与 NettyPoolableFactory implements KeyedPoolableObjectFactory\<NettyPoolKey, Channel> 进行 channel 连接的交互，channel 连接池根据角色 key+ip 作为连接池的 key 来定位各个连接池
，连接池对 channel 进行统一的管理。TMClient 和 RMClient 在发送过程中对于每个 ip 只会使用一个长连接，但连接不可用时，会从连接池中快速取出已经创建好并可用的连接，减少服务的不可用时间。

## 2.7 HA-Cluster

目前官方没有公布 HA-Cluster,但是通过一些其它中间件和官方的一些透露，可以将 HA-Cluster 用如下方式设计:
![](/img/seata-server/hacluster.png)

具体的流程如下:

step1：客户端发布信息的时候根据 transcationId 保证同一个 transcation 是在同一个 master 上，通过多个 Master 水平扩展，提供并发处理性能。

step2：在 server 端中一个 master 有多个 slave，master 中的数据近实时同步到 slave 上，保证当 master 宕机的时候，还能有其它 slave 顶上来可以用。

当然上述一切都是猜测，具体的设计实现还得等 0.5 版本之后。目前有一个 Go 版本的 Seata-Server 也捐赠给了 Seata(还在流程中)，其通过 raft 实现副本一致性，其它细节不是太清楚。

## 2.8 Metrics

这个模块也是一个没有具体公布实现的模块，当然有可能会提供插件口，让其它第三方 metric 接入进来，最近 Apache SkyWalking 正在和 Seata 小组商讨如何接入进来。

# 3.Coordinator Core

上面我们讲了很多 Server 基础模块，想必大家对 Seata 的实现已经有个大概，接下来我会讲解事务协调器具体逻辑是如何实现的，让大家更加了解 Seata 的实现内幕。

## 3.1 启动流程

启动方法在 Server 类有个 main 方法，定义了我们启动流程：

![](/img/seata-server/main.png)

step1：创建一个 RpcServer，再这个里面包含了我们网络的操作，用 Netty 实现了服务端。

step2：解析端口号、本地文件地址（用户 Server 宕机未处理完成事务恢复)、IP(可选，本机只能获取内网 ip，在跨网络时需要一个对外的 vip 注册服务)。

step3：初始化 SessionHoler,其中最重要的重要就是重我们 dataDir 这个文件夹中恢复我们的数据，重建我们的 Session。

step4：创建一个 CoorDinator,这个也是我们事务协调器的逻辑核心代码，然后将其初始化，其内部初始化的逻辑会创建四个定时任务：

- retryRollbacking：重试 rollback 定时任务，用于将那些失败的 rollback 进行重试的，每隔 5ms 执行一次。
- retryCommitting：重试 commit 定时任务，用于将那些失败的 commit 进行重试的，每隔 5ms 执行一次。
- asyncCommitting：异步 commit 定时任务，用于执行异步的 commit，每隔 10ms 一次。
- timeoutCheck：超时定时任务检测，用于检测超时的任务，然后执行超时的逻辑，每隔 2ms 执行一次。

step5： 初始化 UUIDGenerator 这个也是我们生成各种 ID(transcationId,branchId)的基本类。

step6：将本地 IP 和监听端口设置到 XID 中，初始化 rpcServer 等待客户端的连接。

启动流程比较简单，下面我会介绍分布式事务框架中的常见的一些业务逻辑 Seata 是如何处理的。

## 3.2 Begin-开启全局事务

一次分布式事务的起始点一定是开启全局事务，首先我们看看全局事务 Seata 是如何实现的：

![](/img/seata-server/begin.png)

step1： 根据应用 ID，事务分组，名字，超时时间创建一个 GlobalSession，这个在前面也提到过它和 branchSession 分别是什么。

step2：对其添加一个 RootSessionManager 用于监听一些事件，这里要说一下目前在 Seata 里面有四种类型的 Listener(这里要说明的是所有的 sessionManager 都实现了 SessionLifecycleListener)：

- ROOT_SESSION_MANAGER：最全，最大的，拥有所有的 Session。
- ASYNC_COMMITTING_SESSION_MANAGER：用于管理需要做异步 commit 的 Session。
- RETRY_COMMITTING_SESSION_MANAGER：用于管理重试 commit 的 Session。
- RETRY_ROLLBACKING_SESSION_MANAGER：用于管理重试回滚的 Session。
  由于这里是开启事务，其它 SessionManager 不需要关注，我们只添加 RootSessionManager 即可。

step3：开启 Globalsession

![](/img/seata-server/begin2.png)

这一步会把状态变为 Begin,记录开始时间,并且调用 RootSessionManager 的 onBegin 监听方法，将 Session 保存到 map 并写入到我们的文件。

step4：最后返回 XID，这个 XID 是由 ip+port+transactionId 组成的，非常重要，当 TM 申请到之后需要将这个 ID 传到 RM 中，RM 通过 XID 来决定到底应该访问哪一台 Server。

## 3.3 BranchRegister-分支事务注册

当我们全局事务在 TM 开启之后，我们 RM 的分支事务也需要注册到我们的全局事务之上，这里看看是如何处理的：

![](/img/seata-server/branchRegister.png)

step1：通过 transactionId 获取并校验全局事务是否是开启状态。

step2：创建一个新的分支事务，也就是我们的 BranchSession。

step3：对分支事务进行加全局锁，这里的逻辑就是使用的我们锁模块的逻辑。

step4：添加 branchSession，主要是将其添加到 globalSession 对象中，并写入到我们的文件中。

step5：返回 branchId,这个 ID 也很重要，我们后续需要用它来回滚我们的事务，或者对我们分支事务状态更新。

分支事务注册之后，还需要汇报分支事务的本地事务的执行到底是成功还是失败，在 Server 目前只是简单的做一下保存记录，汇报的目的是，就算这个分支事务失败，如果 TM 还是执意要提交全局事务（catch 异常不抛出），那么再遍历提交分支事务的时候，这个失败的分支事务就不需要提交（用户选择性跳过）。

## 3.4 GlobalCommit - 全局提交

当我们分支事务执行完成之后，就轮到我们的 TM-事务管理器来决定是提交还是回滚，如果是提交，那么就会走到下面的逻辑:

![](/img/seata-server/commit.png)

step1：首先找到我们的 globalSession。如果它为 null 证明已经被 commit 过了，那么直接幂等操作，返回成功。

step2：关闭我们的 GlobalSession 防止再次有新的 branch 进来(跨服务调用超时回滚，provider 在继续执行)。

step3：如果 status 是等于 Begin，那么久证明还没有提交过，改变其状态为 Committing 也就是正在提交。

step4：判断是否是可以异步提交，目前只有 AT 模式可以异步提交，二阶段全局提交时只是删除 undolog 并无严格顺序，此处使用定时任务，客户端收到后批量合并删除。

step5：如果是异步提交，直接将其放进我们 ASYNC_COMMITTING_SESSION_MANAGER，让其再后台线程异步去做我们的 step6，如果是同步的那么直接执行我们的 step6。

step6：遍历我们的 BranchSession 进行提交，如果某个分支事务失败，根据不同的条件来判断是否进行重试，可异步执行此 branchSession 不成功可以继续执行下一个，因为其本身都在 manager 中，只要没有成功就不会被删除会一直重试，如果是同步提交的会放进重试队列进行定时重试并卡住按照顺序提交。

## 3.5 GlobalRollback - 全局回滚

如果我们的 TM 决定全局回滚，那么会走到下面的逻辑：

![](/img/seata-server/rollback.png)

这个逻辑和提交流程基本一致，可以看作是它的反向，这里就不展开讲了。

# 4.总结

最后在总结一下开始我们提出了分布式事务的关键 4 点，Seata 到底是怎么解决的：

- 正确的协调：通过后台定时任务各种正确的重试，并且未来会推出监控平台有可能可以手动回滚。
- 高可用: 通过 HA-Cluster 保证高可用。
- 高性能：文件顺序写，RPC 通过 netty 实现，Seata 未来可以水平扩展，提高处理性能。
- 高扩展性：提供给用户可以自由实现的地方，比如配置，服务发现和注册，全局锁等等。

最后希望大家能从这篇文章能了解 Seata-Server 的核心设计原理，当然你也可以想象如果你自己去实现一个分布式事务的 Server 应该怎样去设计？

Seata GitHub 地址：https://github.com/apache/incubator-seata

本文作者：

李钊，GitHub ID @CoffeeLatte007，公众号「咖啡拿铁」作者，Seata 社区 Committer，猿辅导 Java 工程师，曾就职于美团。对分布式中间件，分布式系统有浓厚的兴趣。
季敏(清铭)，GitHub ID @slievrly，Seata 开源项目负责人，阿里巴巴中间件 TXC/GTS 核心研发成员，长期从事于分布式中间件核心研发工作，在分布式事务领域有着较丰富的技术积累。
