---
title: 发布说明
keywords: [Seata, 发布说明]
description: 发布说明
---

# 发布说明

## Seata

> GitHub: https://github.com/apache/incubator-seata
>
> 发布说明: https://github.com/apache/incubator-seata/releases

### 2.1.0 (2024-09-05，推荐版本)

[source](https://downloads.apache.org/incubator/seata/2.1.0/apache-seata-2.1.0-incubating-src.tar.gz) |
[binary](https://dist.apache.org/repos/dist/release/incubator/seata/2.1.0/apache-seata-2.1.0-incubating-bin.tar.gz)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 2.1.0

Seata 2.1.0 发布

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature:
- [[#6370](https://github.com/seata/seata/pull/6370)] seata saga spring接耦、架构优化。
- [[#6205](https://github.com/apache/incubator-seata/pull/6205)] 提供mock server
- [[#6169](https://github.com/apache/incubator-seata/pull/6169)] 支持新版本状态机设计器
- [[#6230](https://github.com/apache/incubator-seata/pull/6230)] 支持RocketMQ消息事务
- [[#6326](https://github.com/apache/incubator-seata/pull/6326)] 支持raft节点间的元数据同步
- [[#6415](https://github.com/apache/incubator-seata/pull/6415)] 支持 Saga 设计器的自动布局

### bugfix:
- [[#6090](https://github.com/apache/incubator-seata/pull/6090)] 修复tcc切面异常处理过程，不对内部调用异常做包装处理，直接向外抛出
- [[#6075](https://github.com/apache/incubator-seata/pull/6075)] 修复镜像SQL对于on update列没有添加表别名的问题
- [[#6086](https://github.com/apache/incubator-seata/pull/6086)] 修复oracle alias 解析异常
- [[#6085](https://github.com/apache/incubator-seata/pull/6085)] 修复jdk9+版本编译后，引入后ByteBuffer#flip NoSuchMethodError的问题
- [[#6101](https://github.com/apache/incubator-seata/pull/6101)] 修复在dubbo 3.x的版本中, 消费者端不能生成tcc代理的问题
- [[#6077](https://github.com/apache/incubator-seata/pull/6077)] 修复表存在复合主键索引导致无法回滚问题
- [[#6121](https://github.com/apache/incubator-seata/pull/6121)] 修复回滚分支事务时没有按照时间排序的问题
- [[#6182](https://github.com/apache/incubator-seata/pull/6182)] 修复在ci中guava-32.0.0-jre.jar zip文件为空的问题
- [[#6196](https://github.com/apache/incubator-seata/pull/6196)] 修复asf配置格式错误的问题
- [[#6143](https://github.com/apache/incubator-seata/pull/6143)] 修复优雅停机
- [[#6204](https://github.com/apache/incubator-seata/pull/6204)] 修复错误配置问题
- [[#6248](https://github.com/apache/incubator-seata/pull/6248)] 修复JDBC resultSet, statement, connection关闭顺序
- [[#6261](https://github.com/apache/incubator-seata/pull/6261)] at模式支持pgsql集群模式url
- [[#6256](https://github.com/apache/incubator-seata/pull/6256)] 修复在seata-all sdk下，raft-discovery模块不能读取registry.conf的配置的问题
- [[#6232](https://github.com/apache/incubator-seata/pull/6232)] 修复在mysql的json类型下出现Cannot create a JSON value from a string with CHARACTER SET 'binary'问题
- [[#6278](https://github.com/apache/incubator-seata/pull/6278)] 修复 ProtocolV1SerializerTest 失败问题
- [[#6324](https://github.com/apache/incubator-seata/pull/6324)] 修复 Parse protocol file failed
- [[#6331](https://github.com/apache/incubator-seata/pull/6331)] 修复TCC嵌套事务不能同时添加TwoPhaseBusinessAction和GlobalTransactional两个注解的问题
- [[#6354](https://github.com/apache/incubator-seata/pull/6354)] 修复动态升降级不能正常工作问题
- [[#6363](https://github.com/apache/incubator-seata/pull/6363)] 修复docker镜像中的已知问题
- [[#6372](https://github.com/apache/incubator-seata/pull/6372)] 修复初始化sql文件postgresql.sql 索引名称冲突问题
- [[#6380](https://github.com/apache/incubator-seata/pull/6380)] 修复针对sql server检查UNDO_LOG表是否存在时的SQL异常
- [[#6385](https://github.com/apache/incubator-seata/pull/6385)] 修复Role.Participant不执行hook但会清理的问题
- [[#6465](https://github.com/apache/incubator-seata/pull/6465)] 修复2.0下saga模式的context replay丢失start问题
- [[#6469](https://github.com/apache/incubator-seata/pull/6469)] 修复在sqlserver数据库下[lock_table]数据表的插入操作sql中存在的错误
- [[#6496](https://github.com/apache/incubator-seata/pull/6496)] 修复XA执行长时间SQL(或死锁SQL)没有完成回滚就释放连接
- [[#6493](https://github.com/apache/incubator-seata/pull/6493)] 修复当使用数据库为SQLServer时seata server的SQL报错
- [[#6497](https://github.com/apache/incubator-seata/pull/6497)] 修复自动装配时的seata tcc 配置类
- [[#6554](https://github.com/apache/incubator-seata/pull/6554)] 修复序列化器不固定使用对应配置序列化器的问题
- [[#6555](https://github.com/apache/incubator-seata/pull/6555)] 修复businessActionContext对io seata包的不兼容
- [[#6553](https://github.com/apache/incubator-seata/pull/6553)] 修复执行完 'ServiceTask' 后无法应用任何评估器的问题
- [[#6575](https://github.com/apache/incubator-seata/pull/6575)] 修复io.seata ActionInterceptorHandler误使用了org.apache.seata BusinessActionContextParameter类的问题


### optimize:
- [[#6031](https://github.com/apache/incubator-seata/pull/6031)] 添加undo_log表的存在性校验
- [[#6089](https://github.com/apache/incubator-seata/pull/6089)] 修改RaftServerFactory语义并删除不必要的单例构建
- [[#4473](https://github.com/apache/incubator-seata/pull/4473)] rm appdata大小限制
- [[#6071](https://github.com/apache/incubator-seata/pull/6071)] 添加git信息到JAR包中
- [[#6042](https://github.com/apache/incubator-seata/pull/6042)] 增加raft模式鉴权机制
- [[#6091](https://github.com/apache/incubator-seata/pull/6091)] 优化raft鉴权时获取tc地址的方式
- [[#6098](https://github.com/apache/incubator-seata/pull/6098)] 优化acquireMetadata方法的重试逻辑
- [[#6034](https://github.com/apache/incubator-seata/pull/6034)] 使用helm图表进行部署时使用命令行中的命名空间
- [[#6116](https://github.com/apache/incubator-seata/pull/6034)] 移除 lgtm.com
- [[#6164](https://github.com/apache/incubator-seata/pull/6164)] redis 注册中心推空保护优化
- [[#6174](https://github.com/apache/incubator-seata/pull/6174)] 增加 ASF 基础配置
- [[#6148](https://github.com/apache/incubator-seata/pull/6148)] 支持 Nacos ram role 鉴权方式
- [[#6181](https://github.com/apache/incubator-seata/pull/6181)] 更新贡献指引文档
- [[#6179](https://github.com/apache/incubator-seata/pull/6179)] 移除 @author 信息
- [[#6176](https://github.com/apache/incubator-seata/pull/6176)] 更新源文件header信息
- [[#6178](https://github.com/apache/incubator-seata/pull/6178)] 更新Apache License头信息
- [[#6186](https://github.com/apache/incubator-seata/pull/6186)] 更新README.md（更新邮件列表和一些生态访问链接）
- [[#6184](https://github.com/apache/incubator-seata/pull/6184)] 更新NOTICE文件
- [[#6192](https://github.com/apache/incubator-seata/pull/6192)] 移除无用文件
- [[#6194](https://github.com/apache/incubator-seata/pull/6194)] 修复 asf.yaml 解析错误问题
- [[#5399](https://github.com/apache/incubator-seata/pull/5399)] 分支注册只在RM端
- [[#6154](https://github.com/apache/incubator-seata/pull/6154)] 控制台日志优化 "kubectl logs -f"
- [[#6116](https://github.com/apache/incubator-seata/pull/6116)] 重写NettyPoolKey的hashcode和equals，修复了channel对象池重复构建问题
- [[#6195](https://github.com/apache/incubator-seata/pull/6195)] 更新 change log 中的 seata url 为 apache/incubator-seata
- [[#6200](https://github.com/apache/incubator-seata/pull/6200)] 去除required_status_checks检查
- [[#6201](https://github.com/apache/incubator-seata/pull/6201)] 恢复required_status_checks但去除context校验
- [[#6218](https://github.com/apache/incubator-seata/pull/6218)] 移除Seata-Docker链接
- [[#6227](https://github.com/apache/incubator-seata/pull/6227)] 校验pk中不含逗号
- [[#6004](https://github.com/apache/incubator-seata/pull/6004)] 优化RM,TM连接server快速失败
- [[#6243](https://github.com/apache/incubator-seata/pull/6243)] 优化控制台页眉中的链接
- [[#6238](https://github.com/apache/incubator-seata/pull/6238)] 文件合规优化
- [[#6239](https://github.com/apache/incubator-seata/pull/6239)] 更新security policy，disclaimer 和 notice 文件
- [[#6245](https://github.com/apache/incubator-seata/pull/6245)] file模式下，在配置中心的spring配置改变时，使应用程序中的配置生效
- [[#6247](https://github.com/apache/incubator-seata/pull/6247)] 优化 asf.yml 配置
- [[#6259](https://github.com/apache/incubator-seata/pull/6259)] 修改全局会话大小超过配置的错误消息
- [[#6264](https://github.com/apache/incubator-seata/pull/6264)] 修复 jib-maven-plugin 编译失败问题
- [[#6246](https://github.com/apache/incubator-seata/pull/6246)] 在maven打包的同时打包前端资源
- [[#6268](https://github.com/apache/incubator-seata/pull/6268)] 更新console模块 npmjs 过时依赖
- [[#6271](https://github.com/apache/incubator-seata/pull/6271)] 统一git信息
- [[#6265](https://github.com/apache/incubator-seata/pull/6265)] 优化在 arm64 上构建前端失败的问题
- [[#6267](https://github.com/apache/incubator-seata/pull/6267)] 增加 Server 反序列化校验
- [[#6275](https://github.com/apache/incubator-seata/pull/6275)] 优化.asf.yaml文件中的label格式
- [[#6291](https://github.com/apache/incubator-seata/pull/6291)] 优化seata-server在idea等开发工具运行时，控制台未输出完整日志的问题
- [[#6283](https://github.com/apache/incubator-seata/pull/6283)] 增加兼容模块支持 io.seata APIs
- [[#6294](https://github.com/apache/incubator-seata/pull/6294)] 拆分前端资源打包流程到单独的profile
- [[#6285](https://github.com/apache/incubator-seata/pull/6285)] 优化控台中时间查询条件不准确的问题
- [[#6297](https://github.com/apache/incubator-seata/pull/6297)] 修复 `maven-pmd-plugin` 相关的问题
- [[#6298](https://github.com/apache/incubator-seata/pull/6298)] 重命名包名为 org.apache.seata
- [[#6302](https://github.com/apache/incubator-seata/pull/6302)] 增加 io.seata shade 打包方案
- [[#6306](https://github.com/apache/incubator-seata/pull/6306)] 替换一些URL 至 org/apache/seata
- [[#6304](https://github.com/apache/incubator-seata/pull/6304)] 禁用 OSSRH 发布工作流
- [[#6310](https://github.com/apache/incubator-seata/pull/6310)] seata-server兼容io.seata包
- [[#6301](https://github.com/apache/incubator-seata/pull/6301)] 升级console前端依赖及支持的nodejs版本
- [[#6301](https://github.com/apache/incubator-seata/pull/6312)] 添加saga相关的io.seata兼容性API
- [[#6313](https://github.com/apache/incubator-seata/pull/6313)] console展示版本号
- [[#6315](https://github.com/apache/incubator-seata/pull/6315)] 兼容低版本的SPI
- [[#6327](https://github.com/apache/incubator-seata/pull/6327)] 兼容 integration.http 和 integration.http.Jakarta API
- [[#6328](https://github.com/apache/incubator-seata/pull/6328)] 兼容 integration.grpc API
- [[#6330](https://github.com/apache/incubator-seata/pull/6330)] 去除 mariadb API
- [[#6329](https://github.com/apache/incubator-seata/pull/6312)] 添加 saga 子组件的 io.seata 兼容性 API
- [[#6254](https://github.com/apache/incubator-seata/pull/6254)] 优化Hessian 序列化
- [[#6343](https://github.com/apache/incubator-seata/pull/6343)] 兼容tm 模块和rm-datasource模块
- [[#6345](https://github.com/apache/incubator-seata/pull/6345)] 兼容tcc模块
- [[#6332](https://github.com/apache/incubator-seata/pull/6332)] 分发包中移除 mysql 依赖
- [[#6343](https://github.com/apache/incubator-seata/pull/6343)] 兼容 TM 模块和 rm-datasource 模块
- [[#6349](https://github.com/apache/incubator-seata/pull/6349)] 迁移  dockerhub 仓库
- [[#6357](https://github.com/apache/incubator-seata/pull/6357)] 优化协议编解码的序列化/反序列化
- [[#6356](https://github.com/apache/incubator-seata/pull/6356)] 去除健康检查页面的鉴权
- [[#6360](https://github.com/apache/incubator-seata/pull/6360)] 优化部分链接 401 的问题
- [[#6350](https://github.com/apache/incubator-seata/pull/6350)] 移除 enableDegrade 配置
- [[#6366](https://github.com/apache/incubator-seata/pull/6366)] 优化globaltransaction向下兼容性
- [[#6369](https://github.com/apache/incubator-seata/pull/6369)] 优化 arm64 ci
- [[#6386](https://github.com/apache/incubator-seata/pull/6386)] 在 `ConfigurationCache` 类中，将 `byte-buddy` 替换为JDK代理
- [[#6391](https://github.com/apache/incubator-seata/pull/6091)] 禁止重复注册TCC资源
- [[#6393](https://github.com/apache/incubator-seata/pull/6393)] 元数据同步前判断版本,并增加重试功能
- [[#6387](https://github.com/apache/incubator-seata/pull/6387)] 优化tcc使用兼容
- [[#6403](https://github.com/apache/incubator-seata/pull/6403)] 优化 Config 兼容模块
- [[#6402](https://github.com/apache/incubator-seata/pull/6402)] 优化rm-datasource向下兼容
- [[#6419](https://github.com/apache/incubator-seata/pull/6419)] 优化integration-tx-api向下兼容
- [[#6427](https://github.com/apache/incubator-seata/pull/6427)] 支持spi、saga、spring模块的向下兼容
- [[#6442](https://github.com/apache/incubator-seata/pull/6442)] 阐明 if
- [[#6487](https://github.com/apache/incubator-seata/pull/6487)] 修复错误包名以及单词
- [[#6458](https://github.com/apache/incubator-seata/pull/6458)] 增加MAC地址null值检查
- [[#6516](https://github.com/apache/incubator-seata/pull/6516)] 优化代码格式
- [[#6429](https://github.com/apache/incubator-seata/pull/6429)] 移除重复注释
- [[#6405](https://github.com/apache/incubator-seata/pull/6405)] 修复 kotlin 编译失败
- [[#6412](https://github.com/apache/incubator-seata/pull/6412)] 优化 core 兼容模块
- [[#6518](https://github.com/apache/incubator-seata/pull/6518)] 优化 ConfigurationCache 代理方法
- [[#6529](https://github.com/apache/incubator-seata/pull/6529)] 优化发布插件
- [[#6548](https://github.com/apache/incubator-seata/pull/6548)] 升级byte-buddy版本至1.14.15
- [[#6539](https://github.com/apache/incubator-seata/pull/6539)] 增加组件 license
- [[#6540](https://github.com/apache/incubator-seata/pull/6540)] 排除  com.google.guava:listenablefuture 依赖
- [[#6549](https://github.com/apache/incubator-seata/pull/6549)] 支持macos arm架构单测
- [[#6558](https://github.com/apache/incubator-seata/pull/6558)] 移除 mysql-connector-java 依赖
- [[#6570](https://github.com/apache/incubator-seata/pull/6570)] 添加 notice 文件
- [[#6578](https://github.com/apache/incubator-seata/pull/6578)] registry.conf 补充raft配置
- [[#6576](https://github.com/apache/incubator-seata/pull/6576)] 移除 oracle 数据类型序列化扩展
- [[#6583](https://github.com/apache/incubator-seata/pull/6583)] 优化默认编译不依赖 Git 环境
- [[#6585](https://github.com/apache/incubator-seata/pull/6585)] 优化 compatible 模块的配置
- [[#6597](https://github.com/apache/incubator-seata/pull/6597)] 从源码中移除 binary 包
- [[#6605](https://github.com/apache/incubator-seata/pull/6605)] 订正  license 和 notice
- [[#6609](https://github.com/apache/incubator-seata/pull/6609)] 订正  notice 文件
- [[#6610](https://github.com/apache/incubator-seata/pull/6610)] 订正  notice 文件

### security:
- [[#6069](https://github.com/apache/incubator-seata/pull/6069)] 升级Guava依赖版本，修复安全漏洞
- [[#6144](https://github.com/apache/incubator-seata/pull/6144)] 升级Nacos依赖版本至1.4.6
- [[#6145](https://github.com/apache/incubator-seata/pull/6145)] 升级 jettison依赖版本至1.5.4
- [[#6147](https://github.com/apache/incubator-seata/pull/6147)] 升级 kafka-clients依赖至3.6.1
- [[#6339](https://github.com/apache/incubator-seata/pull/6339)] 升级 spring mvc 和 tomcat.embed 依赖
- [[#6340](https://github.com/apache/incubator-seata/pull/6340)] 升级和整理依赖
- [[#6362](https://github.com/apache/incubator-seata/pull/6362)] 升级 Spring 相关的依赖
- [[#6375](https://github.com/apache/incubator-seata/pull/6375)] 覆盖 console 前端安全漏洞

### test:
- [[#6081](https://github.com/apache/incubator-seata/pull/6081)] 添加 `test-os.yml` 用于测试seata在各种操作系统下的运行情况
- [[#6125](https://github.com/apache/incubator-seata/pull/6125)] TransactionTemplateTest单测unbind xid
- [[#6157](https://github.com/apache/incubator-seata/pull/6157)] 增加common模块单测覆盖率
- [[#6250](https://github.com/apache/incubator-seata/pull/6250)] 增加seata-core模块单测覆盖率
- [[#6325](https://github.com/apache/incubator-seata/pull/6325)] 修复mock-server相关测试用例
- [[#6430](https://github.com/apache/incubator-seata/pull/6430)] 增加 common 模块单元测试覆盖率
- [[#6456](https://github.com/apache/incubator-seata/pull/6456)] 调整动态配置监听测试用例
- [[#6466](https://github.com/apache/incubator-seata/pull/6466)] 支持redis的集成测试
- [[#6484](https://github.com/apache/incubator-seata/pull/6484)] 修复FileConfigurationTest和MockServerTest失败
- [[#6545](https://github.com/apache/incubator-seata/pull/6545)] 修复 TestConfigCustomSPI 兼容性测试失败
- [[#6560](https://github.com/apache/incubator-seata/pull/6560)] 修复 mockserver test，不在 Runtime.getRuntime().addShutdownHook 中关闭
- [[#6565](https://github.com/apache/incubator-seata/pull/6565)] 修复 testCompensationStateMachine 与mockServer单测冲突

### refactor:
- [[#6280](https://github.com/apache/incubator-seata/pull/6280)] 使用diagram-js重构Saga设计器
- [[#6269](https://github.com/apache/incubator-seata/pull/6269)] 统一Seata异常规范
- [[#6420](https://github.com/apache/incubator-seata/pull/6420)] 优化配置缓存

非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

<!-- 请确保您的 GitHub ID 在以下列表中 -->
- [slievrly](https://github.com/slievrly)
- [ptyin](https://github.com/ptyin)
- [laywin](https://github.com/laywin)
- [imcmai](https://github.com/imcmai)
- [DroidEye2ONGU](https://github.com/DroidEye2ONGU)
- [funky-eyes](https://github.com/funky-eyes)
- [Bughue](https://github.com/Bughue)
- [wangliang181230](https://github.com/wangliang181230)
- [ggbocoder](https://github.com/ggbocoder)
- [leezongjie](https://github.com/leezongjie)
- [l81893521](https://github.com/l81893521)
- [baiyangtx](https://github.com/baiyangtx)
- [lightClouds917](https://github.com/lightClouds917)
- [xingfudeshi](https://github.com/xingfudeshi)
- [PleaseGiveMeTheCoke](https://github.com/PleaseGiveMeTheCoke)
- [sunrui1225](https://github.com/sunrui1225)
- [PeppaO](https://github.com/PeppaO)
- [AlbumenJ](https://github.com/AlbumenJ)
- [dreamskyvision](https://github.com/dreamskyvision)
- [jsbxyyx](https://github.com/jsbxyyx)
- [liuqiufeng](https://github.com/liuqiufeng)
- [saberyjs](https://github.com/SABERYJS)
- [gggyd123](https://github.com/gggyd123)
- [jonasHanhan](https://github.com/jonasHanhan)
- [Code-breaker1998](https://github.com/Code-breaker1998)
- [yixia](https://github.com/wt-better)
- [MikhailNavitski](https://github.com/MikhailNavitski)
- [deung](https://github.com/deung)
- [tanyaofei](https://github.com/tanyaofei)
- [xjlgod](https://github.com/xjlgod)
- [TakeActionNow2019](https://github.com/TakeActionNow2019)
- [sunxunle](https://github.com/sunxunle)
- [bageyang](https://github.com/bageyang)
- [YeonCheolGit](https://github.com/YeonCheolGit)

同时，我们收到了社区反馈的很多有价值的issue和建议，非常感谢大家。

#### 常用链接

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 2.0.0 (2023-11-24，推荐版本)

[source](https://github.com/apache/incubator-seata/archive/v2.0.0.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v2.0.0/seata-server-2.0.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 2.0.0

Seata 2.0.0 发布

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature

- [[#5165](https://github.com/apache/incubator-seata/pull/5165)] TCC 结构拆分，支持 API 方式接入。增加集成层模块（seata-integration-tx-api），对事务流程定义以及代理部分增强。
- [[#5352](https://github.com/apache/incubator-seata/pull/5352)] 在 TCC Business Action Context 中集成 jackson 和 gson 序列化功能
- [[#5377](https://github.com/apache/incubator-seata/pull/5377)] 使 AbstractHttpExecutor 类支持 PUT 方式的请求
- [[#5396](https://github.com/apache/incubator-seata/pull/5396)] TC 异常日志指标采集
- [[#5118](https://github.com/apache/incubator-seata/pull/5118)] 支持二阶段并行下发执行
- [[#5529](https://github.com/apache/incubator-seata/pull/5529)] docker 镜像支持注入 JVM 参数到容器
- [[#3887](https://github.com/apache/incubator-seata/pull/3887)] 增加 AT 模式的 SQLServer 数据库支持
- [[#4033](https://github.com/apache/incubator-seata/pull/4033)] 增加 ServerDB 存储模式的 SQLServer 支持
- [[#5600](https://github.com/apache/incubator-seata/pull/5600)] skywalking 插件支持根据 XID 追踪事务
- [[#5357](https://github.com/apache/incubator-seata/pull/5357)] seata console 集成 saga 设计器
- [[#5717](https://github.com/apache/incubator-seata/pull/5717)] 兼容 1.4.2 及以下版本的 file.conf/registry.conf 配置
- [[#5842](https://github.com/apache/incubator-seata/pull/5842)] 构建 docker 镜像时添加相关 git 信息,方便定位代码关系
- [[#5902](https://github.com/apache/incubator-seata/pull/5902)] 支持 IPv6 网络环境
- [[#5907](https://github.com/apache/incubator-seata/pull/5907)] 增加 AT 模式的 PolarDB-X 2.0 数据库支持
- [[#5932](https://github.com/apache/incubator-seata/pull/5932)] AT 模式支持达梦数据库
- [[#5946](https://github.com/apache/incubator-seata/pull/5946)] 增加 sqlserver 对控制台分页接口的适配
- [[#5226](https://github.com/apache/incubator-seata/pull/5226)] 支持 Raft 集群部署和事务存储模式

### bugfix

- [[#5677](https://github.com/apache/incubator-seata/pull/5677)] 修复 saga 模式下 serviceTask 入参 autoType 转化失败问题
- [[#5277](https://github.com/apache/incubator-seata/pull/5277)] 修复控制台全局锁查询接口查到了已释放的锁
- [[#5282](https://github.com/apache/incubator-seata/pull/5282)] 修复并行 rm 请求处理时数组索引越界问题
- [[#5294](https://github.com/apache/incubator-seata/pull/5294)] 修复 AT 模式下 pgsql/oracle 的主键列自增的问题
- [[#5298](https://github.com/apache/incubator-seata/pull/5298)] 事务提交或回滚超时不移除 global session
- [[#5304](https://github.com/apache/incubator-seata/pull/5304)] 移除基于文件存储恢复时的 RollbackRetryTimeout 事务
- [[#5310](https://github.com/apache/incubator-seata/pull/5310)] 修复生成 update 前后镜像 sql 不对关键字转义的 bug
- [[#5318](https://github.com/apache/incubator-seata/pull/5318)] 修复 jdk8 中 G1 参数
- [[#5330](https://github.com/apache/incubator-seata/pull/5330)] 修复单元测试中发现的 bug
- [[#5337](https://github.com/apache/incubator-seata/pull/5337)] 修复 feature#5165 中关于 spring 使用环境下，多 interceptor 排序问题，同时修复 order 一致时无法使用 BeforeTransaction(AfterTransaction)事务排序问题
- [[#5347](https://github.com/apache/incubator-seata/pull/5347)] 修复控制台打印 `unauthorized error` 问题
- [[#5355](https://github.com/apache/incubator-seata/pull/5355)] 修复自定义 context-path 时的问题
- [[#5362](https://github.com/apache/incubator-seata/pull/5362)] 修复当 TC 端回滚返回 RollbackFailed 时，自定义 FailureHandler 的方法未执行
- [[#5373](https://github.com/apache/incubator-seata/pull/5373)] 修复客户侧事务提交前超时未执行 hook 和 failureHandler 的问题
- [[#5395](https://github.com/apache/incubator-seata/pull/5395)] 修复 AT 模式下新增字段产生的字段找不到
- [[#5426](https://github.com/apache/incubator-seata/pull/5426)] 修复不能获取 GlobalTransactional 注解问题
- [[#5464](https://github.com/apache/incubator-seata/pull/5464)] 修复 saga 模式全局事务状态始终为 Begin 的问题
- [[#5478](https://github.com/apache/incubator-seata/pull/5478)] 修复提交事务时事务已完成不抛出异常问题
- [[#5490](https://github.com/apache/incubator-seata/pull/5490)] 修复日志中不打印方法名的问题
- [[#5449](https://github.com/apache/incubator-seata/pull/5449)] 修复 Oracle XA 模式 start 重入问题
- [[#5462](https://github.com/apache/incubator-seata/pull/5462)] 在 RM 中使用`@GlobalTransactional`时,如果 RM 执行失败会抛出`ShouldNeverHappenException`
- [[#5498](https://github.com/apache/incubator-seata/pull/5498)] 修复 Oracle 10g 中“setDate”条件的全表扫描问题
- [[#5531](https://github.com/apache/incubator-seata/pull/5531)] 修复读取 logback 文件路径错误的问题
- [[#5523](https://github.com/apache/incubator-seata/pull/5523)] 修复 GlobalStatus=9 在 DB 存储模式无法清除的问题
- [[#5558](https://github.com/apache/incubator-seata/pull/5558)] 修复 mariadb 回滚失败的问题
- [[#5556](https://github.com/apache/incubator-seata/pull/5556)] 修复 oracle 插入 undolog 失败问题
- [[#5579](https://github.com/apache/incubator-seata/pull/5579)] 修复 resourceId 为空时，获取 RM_CHANNELS 空指针问题
- [[#5577](https://github.com/apache/incubator-seata/pull/5577)] 修复 grpc 拦截器解绑 xid 失败问题
- [[#5594](https://github.com/apache/incubator-seata/pull/5594)] 修复 participant 情况下的重复日志
- [[#5604](https://github.com/apache/incubator-seata/pull/5604)] 修复在 DB 模式下 `asyncCommit` 和 `queueToRetryCommit` 两个方法总是失败的问题
- [[#5658](https://github.com/apache/incubator-seata/pull/5658)] 修复大写和小写列名称的转义字符
- [[#5661](https://github.com/apache/incubator-seata/pull/5661)] 修复 connectionProxyXA 连接复用时 timeout 为 null
- [[#5679](https://github.com/apache/incubator-seata/pull/5679)] 修复 xxx.grouplist 和 grouplist.xxx 配置项兼容问题
- [[#5715](https://github.com/apache/incubator-seata/pull/5715)] 修复取中划线配置项错误问题
- [[#5748](https://github.com/apache/incubator-seata/pull/5748)] 修复在某些情况下，业务 sql 中主键字段名大小写与表元数据中的不一致，导致回滚失败
- [[#5745](https://github.com/apache/incubator-seata/pull/5745)] 修复不满足 sofa-rpc 中 setAttachment 方法的参数前缀要求问题
- [[#5772](https://github.com/apache/incubator-seata/pull/5762)] 修复 TableMetaCache 的一些字段类型，避免溢出
- [[#5787](https://github.com/apache/incubator-seata/pull/5794)] 解决 redis 作为注册中心时 cluster 无法自定义的 BUG
- [[#5810](https://github.com/apache/incubator-seata/pull/5810)] 修复 druid 依赖冲突导致的 XA 事务开始异常与回滚失败
- [[#5821](https://github.com/apache/incubator-seata/pull/5821)] 修复 insert executor 对关键字未转义的问题
- [[#5835](https://github.com/apache/incubator-seata/pull/5835)] bugfix: 修复当 XA 事务失败回滚后，TC 还会继续重试回滚的问题
- [[#5881](https://github.com/apache/incubator-seata/pull/5880)] 修复事务回滚时锁未删除的问题
- [[#5930](https://github.com/apache/incubator-seata/pull/5930)] 修复存储为 redis 哨兵模式下哨兵密码缺失的问题
- [[#5958](https://github.com/apache/incubator-seata/pull/5958)] 在二阶段提交状态下发生重选时需要进行解除全局锁
- [[#5971](https://github.com/apache/incubator-seata/pull/5971)] 修复某些未弃用的配置显示"已弃用"
- [[#5977](https://github.com/apache/incubator-seata/pull/5977)] 修复当 raft server 关闭时,rpc server 未关闭的问题
- [[#5954](https://github.com/apache/incubator-seata/pull/5954)] 修复保存的分支会话状态与实际的分支会话状态不一致的问题
- [[#5990](https://github.com/apache/incubator-seata/pull/5990)] 修复 redis sentinel master node 宕机时，lua 脚本未同步的问题
- [[#5997](https://github.com/apache/incubator-seata/pull/5997)] 修复全局事务钩子重复执行
- [[#6018](https://github.com/apache/incubator-seata/pull/6018)] 修复错误的 metric 上报
- [[#6024](https://github.com/apache/incubator-seata/pull/6024)] 修复控制台点击事务信息页面中的"查看全局锁"按钮之后白屏的问题
- [[#6015](https://github.com/apache/incubator-seata/pull/6015)] 修复在 spring 环境下无法集成 dubbo
- [[#6049](https://github.com/apache/incubator-seata/pull/6049)] 修复客户端在 raft 注册中心类型下，网络中断时，watch 线程未暂停一秒等待重试的问题
- [[#6050](https://github.com/apache/incubator-seata/pull/6050)] 修改 RaftServer#destroy 为等待所有关闭流程结束
- [[#6033](https://github.com/apache/incubator-seata/pull/6033)] 修复 HSFRemotingParser 中 isReference 判断逻辑，去掉关于 FactoryBean 的无用判断

### optimize

- [[#5966](https://github.com/apache/incubator-seata/pull/5966)] Saga 表达式解耦并统一格式
- [[#5928](https://github.com/apache/incubator-seata/pull/5928)] 增加 Saga 模式状态机语义验证阶段
- [[#4858](https://github.com/apache/incubator-seata/pull/4858)] 重构优化 SessionManager 用法
- [[#4881](https://github.com/apache/incubator-seata/pull/4881)] 重新划分 SessionManager 和 SessionLifecycleListener 用法
- [[#5273](https://github.com/apache/incubator-seata/pull/5273)] 优化`protobuf-maven-plugin`插件的编译配置，解决高版本的命令行过长问题
- [[#5278](https://github.com/apache/incubator-seata/pull/5278)] 清理 sessionmanager 多例模式遗留代码
- [[#5302](https://github.com/apache/incubator-seata/pull/5302)] 移除启动脚本的-Xmn 参数
- [[#4880](https://github.com/apache/incubator-seata/pull/4880)] 优化提交和回滚遇到异常时的日志输出
- [[#5322](https://github.com/apache/incubator-seata/pull/5322)] 优化 SPI 加载日志
- [[#5326](https://github.com/apache/incubator-seata/pull/5326)] 为全局事务超时日志添加时间信息
- [[#5328](https://github.com/apache/incubator-seata/pull/5333)] 为全局事务和事务存储的 Redis 模式，增加对应的 lua 实现
- [[#5341](https://github.com/apache/incubator-seata/pull/5341)] 优化 gRPC TCC 模式
- [[#5342](https://github.com/apache/incubator-seata/pull/5342)] 优化 TCC fence log 清理定时任务的 delay 参数值检查
- [[#5344](https://github.com/apache/incubator-seata/pull/5344)] 添加配置中心、注册中心类型以及存储模式日志信息
- [[#5351](https://github.com/apache/incubator-seata/pull/5351)] 优化 TCC 模式下的 RPC filter
- [[#5354](https://github.com/apache/incubator-seata/pull/5354)] 重构 RPC 集成模块
- [[#5370](https://github.com/apache/incubator-seata/pull/5370)] 优化事务失败处理 handler
- [[#5431](https://github.com/apache/incubator-seata/pull/5431)] 优化 github 工作流
- [[#5461](https://github.com/apache/incubator-seata/pull/5461)] 优化 license workflow
- [[#5456](https://github.com/apache/incubator-seata/pull/5456)] 重构 ColumnUtils 和 EscapeHandler
- [[#5438](https://github.com/apache/incubator-seata/pull/5438)] 优化 code style 检测属性
- [[#5471](https://github.com/apache/incubator-seata/pull/5471)] 优化客户侧事务日志
- [[#5485](https://github.com/apache/incubator-seata/pull/5485)] 优化 Server 日志输出
- [[#4907](https://github.com/apache/incubator-seata/pull/4907)] 调整二阶段 result 线程池大小及优化代码
- [[#5487](https://github.com/apache/incubator-seata/pull/5487)] 将 branchsession 中的 lockholder 增加 final 修饰
- [[#5519](https://github.com/apache/incubator-seata/pull/5519)] 优化 Oracle FenceHandler
- [[#5501](https://github.com/apache/incubator-seata/pull/5501)] 支持乐观锁方式更新事务状态
- [[#5419](https://github.com/apache/incubator-seata/pull/5419)] 优化镜像发布流水线支持 jdk8/17 和支持 maven 3.9.0
- [[#5549](https://github.com/apache/incubator-seata/pull/5549)] 优化 gpg key 和 发布流水线
- [[#5576](https://github.com/apache/incubator-seata/pull/5576)] 仅当 useTCCFence 设置为 true 时，才开启 Fence 表清理任务
- [[#5623](https://github.com/apache/incubator-seata/pull/5623)] 优化异步提交线程和重试线程之间可能存在的冲突
- [[#5563](https://github.com/apache/incubator-seata/pull/5563)] 优化 channel 通道可用性日志输出
- [[#5553](https://github.com/apache/incubator-seata/pull/5553)] 支持表和列元数据大小写敏感设置
- [[#5644](https://github.com/apache/incubator-seata/pull/5644)] 优化 Server 日志输出
- [[#5680](https://github.com/apache/incubator-seata/pull/5680)] 优化大小写转义符
- [[#5686](https://github.com/apache/incubator-seata/pull/5686)] 优化 license check actions
- [[#5714](https://github.com/apache/incubator-seata/pull/5714)] 优化分布式锁竞争日志
- [[#5723](https://github.com/apache/incubator-seata/pull/5723)] 优化 docker 镜像的默认时区
- [[#5779](https://github.com/apache/incubator-seata/pull/5779)] 删除无用的输出日志并统一日志输出路径
- [[#5802](https://github.com/apache/incubator-seata/pull/5802)] 优化 server 端事务隔离级别为读已提交
- [[#5783](https://github.com/apache/incubator-seata/pull/5783)] 支持 nacos 上 application name 配置
- [[#5524](https://github.com/apache/incubator-seata/pull/5524)] 支持 seata-server.sh 中的更多操作命令
- [[#5836](https://github.com/apache/incubator-seata/pull/5836)] 分离 mariadb 和 mysql 的 AT 实现
- [[#5869](https://github.com/apache/incubator-seata/pull/5869)] 优化一些小的语法
- [[#5885](https://github.com/apache/incubator-seata/pull/5885)] 优化 ConnectionProxyXA 中的日志
- [[#5894](https://github.com/apache/incubator-seata/pull/5894)] 移除无 license 组件
- [[#5895](https://github.com/apache/incubator-seata/pull/5895)] 移除 7z 压缩支持
- [[#5896](https://github.com/apache/incubator-seata/pull/5896)] 移除 mariadb.jdbc 依赖
- [[#5384](https://github.com/apache/incubator-seata/pull/5384)] 统一版本号管理，只需维护 `build/pom.xml` 中的版本号即可。
- [[#5419](https://github.com/apache/incubator-seata/pull/5419)] 发布基于多个 java 版本的 docker 镜像
- [[#5829](https://github.com/apache/incubator-seata/pull/5829)] 修正 `codecov chart` 不展示的问题
- [[#5878](https://github.com/apache/incubator-seata/pull/5878)] 优化 `httpcore` 和 `httpclient` 的依赖定义
- [[#5917](https://github.com/apache/incubator-seata/pull/5917)] 升级 native-lib-loader 版本
- [[#5926](https://github.com/apache/incubator-seata/pull/5926)] 优化一些与 Apollo 相关的脚本
- [[#5938](https://github.com/apache/incubator-seata/pull/5938)] 支持 jmx 监控配置
- [[#5944](https://github.com/apache/incubator-seata/pull/5944)] 修复构建操作警告
- [[#5951](https://github.com/apache/incubator-seata/pull/5951)] 删除在 jdk17 中不支持的配置项
- [[#5959](https://github.com/apache/incubator-seata/pull/5959)] 修正代码风格问题及去除无用的类引用
- [[#6002](https://github.com/apache/incubator-seata/pull/6002)] 移除 fst 序列化模块
- [[#6045](https://github.com/apache/incubator-seata/pull/6045)] 优化 MySQL 衍生数据库判断逻辑

### security

- [[#5642](https://github.com/apache/incubator-seata/pull/5642)] 增加 Hessian 序列化黑白名单
- [[#5694](https://github.com/apache/incubator-seata/pull/5694)] 修复若干 Node.js 依赖安全漏洞
- [[#5801](https://github.com/apache/incubator-seata/pull/5801)] 修复 Java 依赖安全漏洞
- [[#5805](https://github.com/apache/incubator-seata/pull/5805)] 修复序列化漏洞
- [[#5868](https://github.com/apache/incubator-seata/pull/5868)] 修复 npm package 漏洞
- [[#5916](https://github.com/apache/incubator-seata/pull/5916)] 修复 npm package 漏洞
- [[#5942](https://github.com/apache/incubator-seata/pull/5942)] 升级依赖版本
- [[#5987](https://github.com/apache/incubator-seata/pull/5987)] 升级依赖版本
- [[#6013](https://github.com/apache/incubator-seata/pull/6013)] 升级 seata-server 依赖的 spring 版本

### test

- [[#5308](https://github.com/apache/incubator-seata/pull/5308)] 添加单元测试用例 [FileLoader, ObjectHolder, StringUtils]
- [[#5309](https://github.com/apache/incubator-seata/pull/5309)] 添加单元测试用例 [ArrayUtils, ConfigTools, MapUtil]
- [[#5335](https://github.com/apache/incubator-seata/pull/5335)] 添加单元测试用例 [EnhancedServiceLoader,ExtensionDefinition,SizeUtilTest,ReflectionUtil,LowerCaseLinkHashMap,FileLoader,ObjectHolder]
- [[#5367](https://github.com/apache/incubator-seata/pull/5367)] 修复 UpdateExecutorTest 单测失败问题
- [[#5383](https://github.com/apache/incubator-seata/pull/5383)] 修复多 Spring 版本测试失败
- [[#5391](https://github.com/apache/incubator-seata/pull/5391)] 添加 config 模块的单元测试用例
- [[#5428](https://github.com/apache/incubator-seata/pull/5428)] 修复 FileTransactionStoreManagerTest 单测失败问题
- [[#5622](https://github.com/apache/incubator-seata/pull/5622)] 添加单元测试用例 [ExporterType, RegistryType]
- [[#5637](https://github.com/apache/incubator-seata/pull/5637)] 添加单元测试用例 [BatchResultMessage, HeartbeatMessage, RegisterRMResponse, ResultCode, RegisterTMResponse, MergeResultMessage, MergedWarpMessage, Version]
- [[#5893](https://github.com/apache/incubator-seata/pull/5893)] 移除 sofa 测试用例
- [[#5845](https://github.com/apache/incubator-seata/pull/5845)] 升级 `druid` 版本，并添加 `test-druid.yml` 用于测试 seata 与 druid 各版本的兼容性。
- [[#5863](https://github.com/apache/incubator-seata/pull/5863)] 修复单元测试在 Java21 下无法正常运行的问题。
- [[#5986](https://github.com/apache/incubator-seata/pull/5986)] 修复 zookeeper 单测失败问题
- [[#5995](https://github.com/apache/incubator-seata/pull/5995)] 添加 RaftClusterMetadataMsg 模块的单元测试用例
- [[#6001](https://github.com/apache/incubator-seata/pull/6001)] 添加 RaftMsgExecute 模块 branch 包下的单元测试用例
- [[#5996](https://github.com/apache/incubator-seata/pull/5996)] 添加 RaftMsgExecute 模块 global 包下的单元测试用例
- [[#6003](https://github.com/apache/incubator-seata/pull/6003)] 添加 RaftMsgExecute 模块 lock 包下的单元测试用例
- [[#6005](https://github.com/apache/incubator-seata/pull/6005)] 修复 saga 异步测试未定义的行为
- [[#6009](https://github.com/apache/incubator-seata/pull/6009)] 添加 RaftServerFactory 的单元测试用例
- [[#6052](https://github.com/apache/incubator-seata/pull/6052)] 给 ut 升级 springboot 和服务器的 spring 版本

### Contributors

非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

- [slievrly](https://github.com/slievrly)
- [xssdpgy](https://github.com/xssdpgy)
- [albumenj](https://github.com/albumenj)
- [PeppaO](https://github.com/PeppaO)
- [yuruixin](https://github.com/yuruixin)
- [CrazyLionLi](https://github.com/JavaLionLi)
- [xingfudeshi](https://github.com/xingfudeshi)
- [Bughue](https://github.com/Bughue)
- [pengten](https://github.com/pengten)
- [wangliang181230](https://github.com/wangliang181230)
- [GoodBoyCoder](https://github.com/GoodBoyCoder)
- [funky-eyes](https://github.com/funky-eyes)
- [isharpever](https://github.com/isharpever)
- [mxsm](https://github.com/mxsm)
- [liuqiufeng](https://github.com/liuqiufeng)
- [l81893521](https://github.com/l81893521)
- [dmego](https://github.com/dmego)
- [zsp419](https://github.com/zsp419)
- [tuwenlin](https://github.com/tuwenlin)
- [sixlei](https://github.com/sixlei)
- [yixia](https://github.com/wt-better)
- [capthua](https://github.com/capthua)
- [robynron](https://github.com/robynron)
- [XQDD](https://github.com/XQDD)
- [Weelerer](https://github.com/Weelerer)
- [Ifdevil](https://github.com/Ifdevil)
- [iquanzhan](https://github.com/iquanzhan)
- [leizhiyuan](https://github.com/leizhiyuan)
- [Aruato](https://github.com/Aruato)
- [ggbocoder](https://github.com/ggbocoder)
- [ptyin](https://github.com/ptyin)
- [jsbxyyx](https://github.com/jsbxyyx)
- [xxxcrel](https://github.com/xxxcrel)
- [fengzhenhai168](https://github.com/fengzhenhai168)
- [tobehardest](https://github.com/tobehardest)
- [leezongjie](https://github.com/leezongjie)

同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

#### 常用链接

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 1.8.0 (2023-11-05)

[source](https://github.com/apache/incubator-seata/archive/v1.8.0.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.8.0/seata-server-1.8.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.8.0

Seata 1.8.0 发布

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature

- [[#3672](https://github.com/apache/incubator-seata/pull/3672)] AT 模式支持 Dameng 数据库
- [[#5892](https://github.com/apache/incubator-seata/pull/5892)] AT 模式支持 PolarDB-X 2.0 数据库

### bugfix

- [[#5833](https://github.com/apache/incubator-seata/pull/5833)] 修复 XA 事务失败回滚后，TC 继续重试回滚的问题
- [[#5884](https://github.com/apache/incubator-seata/pull/5884)] 修复达梦前后镜像查询列名都加了引号导致 sql 异常的问题
- [[#5931](https://github.com/apache/incubator-seata/pull/5931)] 修复存储 redis 哨兵模式下哨兵密码缺失的问题
- [[#5970](https://github.com/apache/incubator-seata/pull/5970)] 修复某些未弃用的配置显示"已弃用"

### optimize

- [[#5866](https://github.com/apache/incubator-seata/pull/5866)] 一些小的语法优化
- [[#5889](https://github.com/apache/incubator-seata/pull/5889)] 移除无 license 组件
- [[#5890](https://github.com/apache/incubator-seata/pull/5890)] 移除 7z 压缩支持
- [[#5891](https://github.com/apache/incubator-seata/pull/5891)] 移除 mariadb.jdbc 依赖
- [[#5828](https://github.com/apache/incubator-seata/pull/5828)] 修正 `codecov chart` 不展示的问题
- [[#5927](https://github.com/apache/incubator-seata/pull/5927)] 优化一些与 Apollo 相关的脚本
- [[#5918](https://github.com/apache/incubator-seata/pull/5918)] 修正 codecov.yml 不标准属性
- [[#5939](https://github.com/apache/incubator-seata/pull/5939)] 支持 jmx 监控配置

### security

- [[#5867](https://github.com/apache/incubator-seata/pull/5867)] 修复 npm package 漏洞
- [[#5898](https://github.com/apache/incubator-seata/pull/5898)] 修复 npm package 漏洞

### test

- [[#5888](https://github.com/apache/incubator-seata/pull/5888)] 移除 sofa 测试用例
- [[#5831](https://github.com/apache/incubator-seata/pull/5831)] 升级 `druid` 版本，并添加 `test-druid.yml` 用于测试 seata 与 druid 各版本的兼容性。
- [[#5862](https://github.com/apache/incubator-seata/pull/5862)] 修复单元测试在 Java21 下无法正常运行的问题。
- [[#5914](https://github.com/apache/incubator-seata/pull/5914)] 升级 native-lib-loader 版本
- [[#5960](https://github.com/apache/incubator-seata/pull/5960)] 修复 zookeeper 单测失败问题
- [[#5981](https://github.com/apache/incubator-seata/pull/5981)] 固定 `seata-server` 所使用有 jedis 版本

非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

<!-- 请确保您的 GitHub ID 在以下列表中 -->

- [slievrly](https://github.com/slievrly)
- [capthua](https://github.com/capthua)
- [funky-eyes](https://github.com/funky-eyes)
- [iquanzhan](https://github.com/iquanzhan)
- [leizhiyuan](https://github.com/leizhiyuan)
- [l81893521](https://github.com/l81893521)
- [PeppaO](https://github.com/PeppaO)
- [wangliang181230](https://github.com/wangliang181230)
- [hsien999](https://github.com/hsien999)

同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

#### 常用链接

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 1.7.1 (2023-09-05，推荐版本)

[source](https://github.com/apache/incubator-seata/archive/v1.7.1.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.7.1/seata-server-1.7.1.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.7.1

Seata 1.7.1 发布

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature

- [[#5803](https://github.com/apache/incubator-seata/pull/5803)] docker 镜像支持注入 JVM 参数到容器

### bugfix

- [[#5749](https://github.com/apache/incubator-seata/pull/5749)] 修复在某些情况下，业务 sql 中主键字段名大小写与表元数据中的不一致，导致回滚失败
- [[#5762](https://github.com/apache/incubator-seata/pull/5762)] 修复 TableMetaCache 的一些字段类型，避免溢出
- [[#5769](https://github.com/apache/incubator-seata/pull/5769)] 修复不满足 sofa-rpc 中 setAttachment 方法的参数前缀要求问题
- [[#5814](https://github.com/apache/incubator-seata/pull/5814)] 修复 druid 依赖冲突导致的 XA 事务开始异常与回滚失败
- [[#5771](https://github.com/apache/incubator-seata/pull/5771)] 修复 insert executor 对关键字未转义的问题
- [[#5819](https://github.com/apache/incubator-seata/pull/5814)] 修复 oracle alias 解析异常

### optimize

- [[#5804](https://github.com/apache/incubator-seata/pull/5804)] 优化 docker 镜像的默认时区
- [[#5815](https://github.com/apache/incubator-seata/pull/5815)] 支持 Nacos applicationName 属性
- [[#5820](https://github.com/apache/incubator-seata/pull/5820)] 统一日志输出目录
- [[#5822](https://github.com/apache/incubator-seata/pull/5822)] 升级过时的 github actions

### security

- [[#5728](https://github.com/apache/incubator-seata/pull/5728)] 修复 Java 依赖漏洞
- [[#5766](https://github.com/apache/incubator-seata/pull/5766)] 修复序列化漏洞

非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

<!-- 请确保您的 GitHub ID 在以下列表中 -->

- [slievrly](https://github.com/slievrly)
- [capthua](https://github.com/capthua)
- [robynron](https://github.com/robynron)
- [dmego](https://github.com/dmego)
- [xingfudeshi](https://github.com/xingfudeshi)
- [hadoop835](https://github.com/hadoop835)
- [funky-eyes](https://github.com/funky-eyes)
- [DroidEye2ONGU](https://github.com/DroidEye2ONGU)

同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

#### 常用链接

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 1.7.0 (2023-07-11，推荐版本)

[source](https://github.com/apache/incubator-seata/archive/v1.7.0.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.7.0/seata-server-1.7.0.zip)

- 1.7.0 定位为 Seata 重要的稳定性版本，我们对现存的 issue 进行了深度的跟踪和解决。
- 对 jdk（8，11，17）、Spring（5.2.x，5.3.x，6.0.
  x）、platform（amd64、arm64）进行了交叉兼容。
- 对低版本 conf 配置进行了兼容适配。
- 对安全问题进行了深度治理。
- 发布了针对针对不同需求的 docker 镜像。https://hub.docker.com/repository/docker/seataio/seata-server/tags?page=1&ordering=last_updated

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.7.0

Seata 1.7.0 发布

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature

- [[#5476](https://github.com/apache/incubator-seata/pull/5476)] seata 客户端，首次支持 `native-image`
- [[#5495](https://github.com/apache/incubator-seata/pull/5495)] 控制台集成 Saga 状态机设计器
- [[#5668](https://github.com/apache/incubator-seata/pull/5668)] 兼容 1.4.2 及以下版本的 file.conf/registry.conf 配置

### bugfix

- [[#5682](https://github.com/apache/incubator-seata/pull/5682)] 修复 saga 模式下 replay context 丢失 startParams 问题
- [[#5671](https://github.com/apache/incubator-seata/pull/5671)] 修复 saga 模式下 serviceTask 入参 autoType 转化失败问题
- [[#5194](https://github.com/apache/incubator-seata/pull/5194)] 修复使用 Oracle 作为服务端 DB 存储时的建表失败问题
- [[#5021](https://github.com/apache/incubator-seata/pull/5201)] 修复 JDK17 下获取 Spring 原始代理对象失败的问题
- [[#5023](https://github.com/apache/incubator-seata/pull/5203)] 修复 `seata-core` 模块传递依赖冲突
- [[#5224](https://github.com/apache/incubator-seata/pull/5224)] 修复 oracle 初始化脚本索引名重复的问题
- [[#5233](https://github.com/apache/incubator-seata/pull/5233)] 修复 LoadBalance 相关配置不一致的问题
- [[#5266](https://github.com/apache/incubator-seata/pull/5265)] 修复控制台全局锁查询接口查到了已释放的锁
- [[#5245](https://github.com/apache/incubator-seata/pull/5245)] 修复不完整的 distribution 模块依赖
- [[#5239](https://github.com/apache/incubator-seata/pull/5239)] 修复当使用 JDK 代理时，`getConfig` 方法获取部分配置时抛出 `ClassCastException` 异常的问题
- [[#5281](https://github.com/apache/incubator-seata/pull/5281)] 修复并行 rm 请求处理时数组索引越界问题
- [[#5288](https://github.com/apache/incubator-seata/pull/5288)] 修复 AT 模式下 oracle 的主键列自增的问题
- [[#5287](https://github.com/apache/incubator-seata/pull/5287)] 修复 AT 模式下 pgsql 的主键列自增的问题
- [[#5299](https://github.com/apache/incubator-seata/pull/5299)] 修复 TC 端重试回滚或重试提交超时 GlobalSession 的删除问题
- [[#5307](https://github.com/apache/incubator-seata/pull/5307)] 修复生成 update 前后镜像 sql 不对关键字转义的 bug
- [[#5311](https://github.com/apache/incubator-seata/pull/5311)] 移除基于文件存储恢复时的 RollbackRetryTimeout 事务
- [[#4734](https://github.com/apache/incubator-seata/pull/4734)] 修复 AT 模式下新增字段产生的字段找不到
- [[#5316](https://github.com/apache/incubator-seata/pull/5316)] 修复 jdk8 中 G1 参数
- [[#5321](https://github.com/apache/incubator-seata/pull/5321)] 修复当 TC 端回滚返回 RollbackFailed 时，自定义 FailureHandler 的方法未执行
- [[#5332](https://github.com/apache/incubator-seata/pull/5332)] 修复单元测试中发现的 bug
- [[#5145](https://github.com/apache/incubator-seata/pull/5145)] 修复 saga 模式全局事务状态始终为 Begin 的问题
- [[#5413](https://github.com/apache/incubator-seata/pull/5413)] 修复 arm64 平台下的 JDK 和 Spring 兼容问题
- [[#5415](https://github.com/apache/incubator-seata/pull/5415)] 修复客户侧事务提交前超时未执行 hook 和 failureHandler 的问题
- [[#5447](https://github.com/apache/incubator-seata/pull/5447)] fix oracle xa mode cannnot be used By same database
- [[#5472](https://github.com/apache/incubator-seata/pull/5472)] 在 RM 中使用`@GlobalTransactional`时,如果 RM 执行失败会抛出`ShouldNeverHappenException`
- [[#5535](https://github.com/apache/incubator-seata/pull/5535)] 修复读取 logback 文件路径错误的问题
- [[#5538](https://github.com/apache/incubator-seata/pull/5538)] 修复提交事务时事务已完成不抛出异常问题
- [[#5539](https://github.com/apache/incubator-seata/pull/5539)] 修复 Oracle 10g where 条件包含 setDate 全表扫描问题
- [[#5540](https://github.com/apache/incubator-seata/pull/5540)] 修复 GlobalStatus=9 在 DB 存储模式无法清除的问题
- [[#5552](https://github.com/apache/incubator-seata/pull/5552)] 修复 mariadb 回滚失败的问题
- [[#5583](https://github.com/apache/incubator-seata/pull/5583)] 修复 grpc xid 解绑问题
- [[#5602](https://github.com/apache/incubator-seata/pull/5602)] 修复 participant 情况下的重复日志
- [[#5645](https://github.com/apache/incubator-seata/pull/5645)] 修复 oracle 插入 undolog 失败问题
- [[#5659](https://github.com/apache/incubator-seata/pull/5659)] 修复后镜像查询时增加关键字转义符导致数据库强制开启大小写校验引起的 sql 异常
- [[#5663](https://github.com/apache/incubator-seata/pull/5663)] 修复 connectionProxyXA 连接复用时 timeout 为 null
- [[#5675](https://github.com/apache/incubator-seata/pull/5675)] 修复 xxx.grouplist 和 grouplist.xxx 配置项兼容问题
- [[#5690](https://github.com/apache/incubator-seata/pull/5690)] 修复控制台打印 `unauthorized error` 问题
- [[#5711](https://github.com/apache/incubator-seata/pull/5711)] 修复取中划线配置项错误问题

### optimize

- [[#5208](https://github.com/apache/incubator-seata/pull/5208)] 优化多次重复获取 Throwable#getCause 问题
- [[#5212](https://github.com/apache/incubator-seata/pull/5212)] 优化不合理的日志信息级别
- [[#5237](https://github.com/apache/incubator-seata/pull/5237)] 优化异常日志打印(EnhancedServiceLoader.loadFile#cahtch)
- [[#5089](https://github.com/apache/incubator-seata/pull/5089)] 优化 TCC fence log 清理定时任务的 delay 参数值检查
- [[#5243](https://github.com/apache/incubator-seata/pull/5243)] 升级 kryo 5.4.0 优化对 jdk17 的兼容性
- [[#5153](https://github.com/apache/incubator-seata/pull/5153)] 只允许 AT 去尝试跨 RM 获取 channel
- [[#5177](https://github.com/apache/incubator-seata/pull/5177)] 如果 `server.session.enable-branch-async-remove` 为真，异步删除分支，同步解锁。
- [[#5273](https://github.com/apache/incubator-seata/pull/5273)] 优化`protobuf-maven-plugin`插件的编译配置，解决高版本的命令行过长问题
- [[#5303](https://github.com/apache/incubator-seata/pull/5303)] 移除启动脚本的-Xmn 参数
- [[#5325](https://github.com/apache/incubator-seata/pull/5325)] 添加配置中心、注册中心类型以及存储模式日志信息
- [[#5315](https://github.com/apache/incubator-seata/pull/5315)] 优化 SPI 加载日志
- [[#5323](https://github.com/apache/incubator-seata/pull/5323)] 为全局事务超时日志添加时间信息
- [[#5414](https://github.com/apache/incubator-seata/pull/5414)] 优化事务失败处理 handler
- [[#5537](https://github.com/apache/incubator-seata/pull/5537)] 优化客户侧事务日志
- [[#5541](https://github.com/apache/incubator-seata/pull/5541)] 优化 Server 日志输出
- [[#5548](https://github.com/apache/incubator-seata/pull/5548)] 优化 gpg key 和 发布流水线
- [[#5638](https://github.com/apache/incubator-seata/pull/5638)] 优化 server 端事务隔离级别为读已提交
- [[#5646](https://github.com/apache/incubator-seata/pull/5646)] 重构 ColumnUtils 和 EscapeHandler
- [[#5648](https://github.com/apache/incubator-seata/pull/5648)] 优化 Server 日志输出
- [[#5647](https://github.com/apache/incubator-seata/pull/5647)] 支持表和列元数据大小写敏感设置
- [[#5678](https://github.com/apache/incubator-seata/pull/5678)] 优化大小写转义符
- [[#5684](https://github.com/apache/incubator-seata/pull/5684)] 优化 CodeQL, skywalking-eyes 和 checkout 等 actions
- [[#5700](https://github.com/apache/incubator-seata/pull/5700)] 优化分布式锁竞争日志

### security

- [[#5172](https://github.com/apache/incubator-seata/pull/5172)] 修复一些安全漏洞的版本
- [[#5683](https://github.com/apache/incubator-seata/pull/5683)] 增加 Hessian 序列化黑白名单
- [[#5696](https://github.com/apache/incubator-seata/pull/5696)] 修复若干 Node.js 依赖安全漏洞

### test

- [[#5380](https://github.com/apache/incubator-seata/pull/5380)] 修复 UpdateExecutorTest 单测失败问题
- [[#5382](https://github.com/apache/incubator-seata/pull/5382)] 修复多 Spring 版本测试失败

非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

<!-- 请确保您的 GitHub ID 在以下列表中 -->

- [slievrly](https://github.com/slievrly)
- [xssdpgy](https://github.com/xssdpgy)
- [albumenj](https://github.com/albumenj)
- [PeppaO](https://github.com/PeppaO)
- [yuruixin](https://github.com/yuruixin)
- [dmego](https://github.com/dmego)
- [CrazyLionLi](https://github.com/JavaLionLi)
- [xingfudeshi](https://github.com/xingfudeshi)
- [Bughue](https://github.com/Bughue)
- [pengten](https://github.com/pengten)
- [wangliang181230](https://github.com/wangliang181230)
- [GoodBoyCoder](https://github.com/GoodBoyCoder)
- [funky-eyes](https://github.com/funky-eyes)
- [isharpever](https://github.com/isharpever)
- [ZhangShiYeChina](https://github.com/ZhangShiYeChina)
- [mxsm](https://github.com/mxsm)
- [l81893521](https://github.com/l81893521)
- [liuqiufeng](https://github.com/liuqiufeng)
- [yixia](https://github.com/wt-better)
- [jumtp](https://github.com/jumtp)

同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

#### 常用链接

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 1.6.1 (2022-12-21)

[source](https://github.com/apache/incubator-seata/archive/v1.6.1.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.6.1/seata-server-1.6.1.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.6.1

Seata 1.6.1 发布

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature

- [[#5115](https://github.com/apache/incubator-seata/pull/5115)] 支持 `spring-boot:3.x`

### bugfix

- [[#5179](https://github.com/apache/incubator-seata/pull/5179)] 修复使用 Eureka 作为注册中心 ClassNotFoundException 问题

### optimize

- [[#5120](https://github.com/apache/incubator-seata/pull/5120)] 统一 yml 文件中的配置项格式
- [[#5180](https://github.com/apache/incubator-seata/pull/5180)] GlobalTransactionScanner,SeataAutoDataSourceProxyCreator 创建 bean 用 static 修饰
- [[#5182](https://github.com/apache/incubator-seata/pull/5182)] 修复 Saga 可视化设计器 GGEditor 安全漏洞
- [[#5183](https://github.com/apache/incubator-seata/pull/5183)] 优化配置开关的默认值

非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

<!-- 请确保您的 GitHub ID 在以下列表中 -->

- [slievrly](https://github.com/slievrly)
- [wangliang181230](https://github.com/wangliang181230)
- [xingfudeshi](https://github.com/xingfudeshi)
- [whxxxxx](https://github.com/whxxxxx)
- [xssdpgy](https://github.com/xssdpgy)

同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 1.6.0 (2022-12-17)

[source](https://github.com/apache/incubator-seata/archive/v1.6.0.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.6.0/seata-server-1.6.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.6.0

Seata 1.6.0 发布

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature

- [[#4863](https://github.com/apache/incubator-seata/pull/4863)] 支持 oracle 和 postgresql 多主键
- [[#4649](https://github.com/apache/incubator-seata/pull/4649)] seata-server 支持多注册中心
- [[#4779](https://github.com/apache/incubator-seata/pull/4779)] 支持 Apache Dubbo3
- [[#4479](https://github.com/apache/incubator-seata/pull/4479)] TCC 注解支持添加在接口和实现类上
- [[#4877](https://github.com/apache/incubator-seata/pull/4877)] client sdk 支持 jdk17
- [[#4914](https://github.com/apache/incubator-seata/pull/4914)] 支持 mysql 的 update join 联表更新语法
- [[#4542](https://github.com/apache/incubator-seata/pull/4542)] 支持 oracle timestamp 类型
- [[#5111](https://github.com/apache/incubator-seata/pull/5111)] 支持 Nacos contextPath 配置
- [[#4802](https://github.com/apache/incubator-seata/pull/4802)] dockerfile 支持 arm64

### bugfix

- [[#4780](https://github.com/apache/incubator-seata/pull/4780)] 修复超时回滚成功后无法发送 TimeoutRollbacked 事件
- [[#4954](https://github.com/apache/incubator-seata/pull/4954)] 修复 output 表达式错误时，保存执行结果空指针异常
- [[#4817](https://github.com/apache/incubator-seata/pull/4817)] 修复高版本 springboot 配置不标准的问题
- [[#4838](https://github.com/apache/incubator-seata/pull/4838)] 修复使用 Statement.executeBatch() 时无法生成 undo log 的问题
- [[#4533](https://github.com/apache/incubator-seata/pull/4533)] 修复 handleRetryRollbacking 的 event 重复导致的指标数据不准确
- [[#4912](https://github.com/apache/incubator-seata/pull/4912)] 修复 mysql InsertOnDuplicateUpdate 列名大小写不一致无法正确匹配
- [[#4543](https://github.com/apache/incubator-seata/pull/4543)] 修复对 Oracle 数据类型 nclob 的支持
- [[#4915](https://github.com/apache/incubator-seata/pull/4915)] 修复获取不到 ServerRecoveryProperties 属性的问题
- [[#4919](https://github.com/apache/incubator-seata/pull/4919)] 修复 XID 的 port 和 address 出现 null:0 的情况
- [[#4928](https://github.com/apache/incubator-seata/pull/4928)] 修复 rpcContext.getClientRMHolderMap NPE 问题
- [[#4953](https://github.com/apache/incubator-seata/pull/4953)] 修复 InsertOnDuplicateUpdate 可绕过修改主键的问题
- [[#4978](https://github.com/apache/incubator-seata/pull/4978)] 修复 kryo 支持循环依赖
- [[#4985](https://github.com/apache/incubator-seata/pull/4985)] 修复 undo_log id 重复的问题
- [[#4874](https://github.com/apache/incubator-seata/pull/4874)] 修复 OpenJDK 11 启动失败
- [[#5018](https://github.com/apache/incubator-seata/pull/5018)] 修复启动脚本中 loader path 使用相对路径导致 server 启动失败问题
- [[#5004](https://github.com/apache/incubator-seata/pull/5004)] 修复 mysql update join 行数据重复的问题
- [[#5032](https://github.com/apache/incubator-seata/pull/5032)] 修复 mysql InsertOnDuplicateUpdate 中条件参数填充位置计算错误导致的镜像查询 SQL 语句异常问题
- [[#5033](https://github.com/apache/incubator-seata/pull/5033)] 修复 InsertOnDuplicateUpdate 的 SQL 语句中无插入列字段导致的空指针问题
- [[#5038](https://github.com/apache/incubator-seata/pull/5038)] 修复 SagaAsyncThreadPoolProperties 冲突问题
- [[#5050](https://github.com/apache/incubator-seata/pull/5050)] 修复 Saga 模式下全局状态未正确更改成 Committed 问题
- [[#5052](https://github.com/apache/incubator-seata/pull/5052)] 修复 update join 条件中占位符参数问题
- [[#5031](https://github.com/apache/incubator-seata/pull/5031)] 修复 InsertOnDuplicateUpdate 中不应该使用 null 值索引作为查询条件
- [[#5075](https://github.com/apache/incubator-seata/pull/5075)] 修复 InsertOnDuplicateUpdate 无法拦截无主键和唯一索引的 SQL
- [[#5093](https://github.com/apache/incubator-seata/pull/5093)] 修复 seata server 重启后 accessKey 丢失问题
- [[#5092](https://github.com/apache/incubator-seata/pull/5092)] 修复当 seata and jpa 共同使用时, AutoConfiguration 的顺序不正确的问题
- [[#5109](https://github.com/apache/incubator-seata/pull/5109)] 修复当 RM 侧没有加@GlobalTransactional 报 NPE 的问题
- [[#5098](https://github.com/apache/incubator-seata/pull/5098)] Druid 禁用 oracle implicit cache
- [[#4860](https://github.com/apache/incubator-seata/pull/4860)] 修复 metrics tag 覆盖问题
- [[#5028](https://github.com/apache/incubator-seata/pull/5028)] 修复 insert on duplicate SQL 中 null 值问题
- [[#5078](https://github.com/apache/incubator-seata/pull/5078)] 修复 SQL 语句中无主键和唯一键拦截问题
- [[#5097](https://github.com/apache/incubator-seata/pull/5097)] 修复当 Server 重启时 accessKey 丢失问题
- [[#5131](https://github.com/apache/incubator-seata/pull/5131)] 修复 XAConn 处于 active 状态时无法回滚的问题
- [[#5134](https://github.com/apache/incubator-seata/pull/5134)] 修复 hikariDataSource 自动代理在某些情况下失效的问题
- [[#5163](https://github.com/apache/incubator-seata/pull/5163)] 修复高版本 JDK 编译失败的问题

### optimize

- [[#4681](https://github.com/apache/incubator-seata/pull/4681)] 优化竞争锁过程
- [[#4774](https://github.com/apache/incubator-seata/pull/4774)] 优化 seataio/seata-server 镜像中的 mysql8 依赖
- [[#4750](https://github.com/apache/incubator-seata/pull/4750)] 优化 AT 分支释放全局锁不使用 xid
- [[#4790](https://github.com/apache/incubator-seata/pull/4790)] 添加自动发布 OSSRH github action
- [[#4765](https://github.com/apache/incubator-seata/pull/4765)] mysql8.0.29 版本及以上 XA 模式不持 connection 至二阶段
- [[#4797](https://github.com/apache/incubator-seata/pull/4797)] 优化所有 github actions 脚本
- [[#4800](https://github.com/apache/incubator-seata/pull/4800)] 添加 NOTICE 文件
- [[#4761](https://github.com/apache/incubator-seata/pull/4761)] 使用 hget 代替 RedisLocker 中的 hmget
- [[#4414](https://github.com/apache/incubator-seata/pull/4414)] 移除 log4j 依赖
- [[#4836](https://github.com/apache/incubator-seata/pull/4836)] 优化 BaseTransactionalExecutor#buildLockKey(TableRecords rowsIncludingPK) 方法可读性
- [[#4865](https://github.com/apache/incubator-seata/pull/4865)] 修复 Saga 可视化设计器 GGEditor 安全漏洞
- [[#4590](https://github.com/apache/incubator-seata/pull/4590)] 自动降级支持开关支持动态配置
- [[#4490](https://github.com/apache/incubator-seata/pull/4490)] tccfence 记录表优化成按索引删除
- [[#4911](https://github.com/apache/incubator-seata/pull/4911)] 添加 header 和 license 检测
- [[#4917](https://github.com/apache/incubator-seata/pull/4917)] 升级 package-lock.json 修复漏洞
- [[#4924](https://github.com/apache/incubator-seata/pull/4924)] 优化 pom 依赖
- [[#4932](https://github.com/apache/incubator-seata/pull/4932)] 抽取部分配置的默认值
- [[#4925](https://github.com/apache/incubator-seata/pull/4925)] 优化 javadoc 注释
- [[#4921](https://github.com/apache/incubator-seata/pull/4921)] 修复控制台模块安全漏洞和升级 skywalking-eyes 版本
- [[#4936](https://github.com/apache/incubator-seata/pull/4936)] 优化存储配置的读取
- [[#4946](https://github.com/apache/incubator-seata/pull/4946)] 将获取锁时遇到的 sql 异常传递给客户端
- [[#4962](https://github.com/apache/incubator-seata/pull/4962)] 优化构建配置，并修正 docker 镜像的基础镜像
- [[#4974](https://github.com/apache/incubator-seata/pull/4974)] 取消 redis 模式下,查询 globalStatus 数量的限制
- [[#4981](https://github.com/apache/incubator-seata/pull/4981)] 优化当 tcc fence 记录查不到时的错误提示
- [[#4995](https://github.com/apache/incubator-seata/pull/4995)] 修复 mysql InsertOnDuplicateUpdate 后置镜像查询 SQL 中重复的主键查询条件
- [[#5047](https://github.com/apache/incubator-seata/pull/5047)] 移除无用代码
- [[#5051](https://github.com/apache/incubator-seata/pull/5051)] 回滚时 undolog 产生脏写需要抛出不再重试(BranchRollbackFailed_Unretriable)的异常
- [[#5075](https://github.com/apache/incubator-seata/pull/5075)] 拦截没有主键及唯一索引值的 insert on duplicate update 语句
- [[#5104](https://github.com/apache/incubator-seata/pull/5104)] ConnectionProxy 脱离对 druid 的依赖
- [[#5124](https://github.com/apache/incubator-seata/pull/5124)] 支持 oracle 删除 TCC fence 记录表
- [[#4468](https://github.com/apache/incubator-seata/pull/4968)] 支持 kryo 5.3.0
- [[#4807](https://github.com/apache/incubator-seata/pull/4807)] 优化镜像和 OSS 仓库发布流水线
- [[#4445](https://github.com/apache/incubator-seata/pull/4445)] 优化事务超时判断
- [[#4958](https://github.com/apache/incubator-seata/pull/4958)] 优化超时事务 triggerAfterCommit() 的执行
- [[#4582](https://github.com/apache/incubator-seata/pull/4582)] 优化 redis 存储模式的事务排序
- [[#4963](https://github.com/apache/incubator-seata/pull/4963)] 增加 ARM64 流水线 CI 测试
- [[#4434](https://github.com/apache/incubator-seata/pull/4434)] 移除 seata-server CMS GC 参数

### test

- [[#4411](https://github.com/apache/incubator-seata/pull/4411)] 测试 Oracle 数据库 AT 模式下类型支持
- [[#4794](https://github.com/apache/incubator-seata/pull/4794)] 重构代码，尝试修复单元测试 `DataSourceProxyTest.getResourceIdTest()`
- [[#5101](https://github.com/apache/incubator-seata/pull/5101)] 修复 zk 注册和配置中心报 ClassNotFoundException 的问题 `DataSourceProxyTest.getResourceIdTest()`

非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

<!-- 请确保您的 GitHub ID 在以下列表中 -->

- [slievrly](https://github.com/slievrly)
- [renliangyu857](https://github.com/renliangyu857)
- [wangliang181230](https://github.com/wangliang181230)
- [funky-eyes](https://github.com/funky-eyes)
- [tuwenlin](https://github.com/tuwenlin)
- [conghuhu](https://github.com/conghuhu)
- [a1104321118](https://github.com/a1104321118)
- [duanqiaoyanyu](https://github.com/duanqiaoyanyu)
- [robynron](https://github.com/robynron)
- [lcmvs](https://github.com/lcmvs)
- [github-ganyu](https://github.com/github-ganyu)
- [1181954449](https://github.com/1181954449)
- [zw201913](https://github.com/zw201913)
- [wingchi-leung](https://github.com/wingchi-leung)
- [AlexStocks](https://github.com/AlexStocks)
- [liujunlin5168](https://github.com/liujunlin5168)
- [pengten](https://github.com/pengten)
- [liuqiufeng](https://github.com/liuqiufeng)
- [yujianfei1986](https://github.com/yujianfei1986)
- [Bughue](https://github.com/Bughue)
- [AlbumenJ](https://github.com/AlbumenJ)
- [doubleDimple](https://github.com/doubleDimple)
- [jsbxyyx](https://github.com/jsbxyyx)
- [tuwenlin](https://github.com/tuwenlin)
- [CrazyLionLi](https://github.com/JavaLionLi)
- [whxxxxx](https://github.com/whxxxxx)
- [neillee95](https://github.com/neillee95)
- [crazy-sheep](https://github.com/crazy-sheep)
- [zhangzq7](https://github.com/zhangzq7)
- [l81893521](https://github.com/l81893521)
- [zhuyoufeng](https://github.com/zhuyoufeng)
- [xingfudeshi](https://github.com/xingfudeshi)
- [odidev](https://github.com/odidev)
- [miaoxueyu](https://github.com/miaoxueyu)

同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 1.5.2 (2022-07-12)

[source](https://github.com/apache/incubator-seata/archive/v1.5.2.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.5.2/seata-server-1.5.2.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.5.2

Seata 1.5.2 发布。

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature

- [[#4661](https://github.com/apache/incubator-seata/pull/4713)] 支持根据 xid 负载均衡算法
- [[#4676](https://github.com/apache/incubator-seata/pull/4676)] 支持 Nacos 作为注册中心时，server 通过挂载 SLB 暴露服务
- [[#4642](https://github.com/apache/incubator-seata/pull/4642)] 支持 client 批量请求并行处理
- [[#4567](https://github.com/apache/incubator-seata/pull/4567)] 支持 where 条件中 find_in_set 函数

### bugfix

- [[#4515](https://github.com/apache/incubator-seata/pull/4515)] 修复 develop 分支 SeataTCCFenceAutoConfiguration 在客户端未使用 DB 时，启动抛出 ClassNotFoundException 的问题。
- [[#4661](https://github.com/apache/incubator-seata/pull/4661)] 修复控制台中使用 PostgreSQL 出现的 SQL 异常
- [[#4667](https://github.com/apache/incubator-seata/pull/4682)] 修复 develop 分支 RedisTransactionStoreManager 迭代时更新 map 的异常
- [[#4678](https://github.com/apache/incubator-seata/pull/4678)] 修复属性 transport.enableRmClientBatchSendRequest 没有配置的情况下缓存穿透的问题
- [[#4701](https://github.com/apache/incubator-seata/pull/4701)] 修复命令行参数丢失问题
- [[#4607](https://github.com/apache/incubator-seata/pull/4607)] 修复跳过全局锁校验的缺陷
- [[#4696](https://github.com/apache/incubator-seata/pull/4696)] 修复 oracle 存储模式时的插入问题
- [[#4726](https://github.com/apache/incubator-seata/pull/4726)] 修复批量发送消息时可能的 NPE 问题
- [[#4729](https://github.com/apache/incubator-seata/pull/4729)] 修复 AspectTransactional.rollbackForClassName 设置错误
- [[#4653](https://github.com/apache/incubator-seata/pull/4653)] 修复 INSERT_ON_DUPLICATE 主键为非数值异常

### optimize

- [[#4650](https://github.com/apache/incubator-seata/pull/4650)] 修复安全漏洞
- [[#4670](https://github.com/apache/incubator-seata/pull/4670)] 优化 branchResultMessageExecutor 线程池的线程数
- [[#4662](https://github.com/apache/incubator-seata/pull/4662)] 优化回滚事务监控指标
- [[#4693](https://github.com/apache/incubator-seata/pull/4693)] 优化控制台导航栏
- [[#4700](https://github.com/apache/incubator-seata/pull/4700)] 修复 maven-compiler-plugin 和 maven-resources-plugin 执行失败
- [[#4711](https://github.com/apache/incubator-seata/pull/4711)] 分离部署时 lib 依赖
- [[#4720](https://github.com/apache/incubator-seata/pull/4720)] 优化 pom 描述
- [[#4728](https://github.com/apache/incubator-seata/pull/4728)] 将 logback 版本依赖升级至 1.2.9
- [[#4745](https://github.com/apache/incubator-seata/pull/4745)] 发行包中支持 mysql8 driver
- [[#4626](https://github.com/apache/incubator-seata/pull/4626)] 使用 `easyj-maven-plugin` 插件代替 `flatten-maven-plugin`插件，以修复`shade` 插件与 `flatten` 插件不兼容的问题
- [[#4629](https://github.com/apache/incubator-seata/pull/4629)] 更新 globalSession 状态时检查更改前后的约束关系
- [[#4662](https://github.com/apache/incubator-seata/pull/4662)] 优化 EnhancedServiceLoader 可读性

### test

- [[#4544](https://github.com/apache/incubator-seata/pull/4544)] 优化 TransactionContextFilterTest 中 jackson 包依赖问题
- [[#4731](https://github.com/apache/incubator-seata/pull/4731)] 修复 AsyncWorkerTest 和 LockManagerTest 的单测问题。

非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

<!-- 请确保您的 GitHub ID 在以下列表中 -->

- [slievrly](https://github.com/slievrly)
- [pengten](https://github.com/pengten)
- [YSF-A](https://github.com/YSF-A)
- [tuwenlin](https://github.com/tuwenlin)
- [2129zxl](https://github.com/2129zxl)
- [Ifdevil](https://github.com/Ifdevil)
- [wingchi-leung](https://github.com/wingchi-leung)
- [liurong](https://github.com/robynron)
- [opelok-z](https://github.com/opelok-z)
- [funky-eyes](https://github.com/funky-eyes)
- [Smery-lxm](https://github.com/Smery-lxm)
- [lvekee](https://github.com/lvekee)
- [doubleDimple](https://github.com/doubleDimple)
- [wangliang181230](https://github.com/wangliang181230)
- [Bughue](https://github.com/Bughue)
- [AYue-94](https://github.com/AYue-94)
- [lingxiao-wu](https://github.com/lingxiao-wu)
- [caohdgege](https://github.com/caohdgege)

同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 1.5.1 (2022-05-17)

[source](https://github.com/apache/incubator-seata/archive/v1.5.1.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.5.1/seata-server-1.5.1.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.5.1

Seata 1.5.1 发布。

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature

[#4115](https://github.com/apache/incubator-seata/pull/4115) 支持用户控制台
[#3652](https://github.com/apache/incubator-seata/pull/3652) 支持 APM SkyWalking 集成
[#3472](https://github.com/apache/incubator-seata/pull/3472) 添加 redisLocker 的 lua 模式
[#3575](https://github.com/apache/incubator-seata/pull/3575) 支持对锁和会话不同存储的混合使用
[#3009](https://github.com/apache/incubator-seata/pull/3009) 支持 server 端以 springboot 的方式的启动
[#3374](https://github.com/apache/incubator-seata/pull/3374) 支持 MySQL INSERT ON DUPLICATE KEY UPDATE
[#3642](https://github.com/apache/incubator-seata/pull/3642) TCC 模式支持使用 API 的形式进行二阶段参数传递
[#3064](https://github.com/apache/incubator-seata/pull/3064) 支持可配置 GlobalTransactionInterceptor 和 TccActionInterceptor 的 order 值
[#2852](https://github.com/apache/incubator-seata/pull/2852) 支持自定义 GlobalTransactionScanner 的扫描对象
[#3683](https://github.com/apache/incubator-seata/pull/3683) 支持 Redis 分布式锁来避免多 TC 竞争执行任务
[#3545](https://github.com/apache/incubator-seata/pull/3545) TCC 模式支持幂等控制、防悬挂和空回滚
[#3823](https://github.com/apache/incubator-seata/pull/3823) TCC 模式二阶段方法参数列表支持自定义
[#3642](https://github.com/apache/incubator-seata/pull/3642) TCC 模式一阶段支持 BusinessActionContext 隐式传递
[#3856](https://github.com/apache/incubator-seata/pull/3856) 支持 Edas-Hsf RPC 框架
[#3869](https://github.com/apache/incubator-seata/pull/3869) 支持从环境 ENV 获取配置
[#2568](https://github.com/apache/incubator-seata/pull/2568) 支持 GlobalTransactionInterceptor 配置切面表达式
[#3886](https://github.com/apache/incubator-seata/pull/3886) 支持注册中心注册 ip 的网络偏好设置
[#3906](https://github.com/apache/incubator-seata/pull/3906) 支持 SPI 卸载
[#3668](https://github.com/apache/incubator-seata/pull/3668) 支持 kotlin 协程
[#3968](https://github.com/apache/incubator-seata/pull/3968) 支持 bRPC-java RPC 框架
[#4268](https://github.com/apache/incubator-seata/pull/4268) 增加控制台 Global Session 页面 File 模式实现
[#4281](https://github.com/apache/incubator-seata/pull/4281) 增加控制台 Global Session 页面和 Global LockRedis 模式实现
[#4293](https://github.com/apache/incubator-seata/pull/4293) 增加控制台 Global Lock 页面 File 模式实现
[#4335](https://github.com/apache/incubator-seata/pull/4335) 实现配置中心上传配置交互脚本(nacos,etcd3)
[#4360](https://github.com/apache/incubator-seata/pull/4360) 实现配置中心上传配置交互脚本(apollo,consul,zk)
[#4320](https://github.com/apache/incubator-seata/pull/4320) 实现控制台 db 模式全局事务、锁查询接口
[#4435](https://github.com/apache/incubator-seata/pull/4435) 控制台前端页面实现
[#4480](https://github.com/apache/incubator-seata/pull/4480) 实现 DefaultAuthSigner 的默认签名加密方法
[#3487](https://github.com/apache/incubator-seata/pull/3487) 增加分布式锁的 DB 实现
[#3951](https://github.com/apache/incubator-seata/pull/3951) 支持 zstd 压缩
[#2838](https://github.com/apache/incubator-seata/pull/2838) Saga 支持 springboot 项目的自动配置

### bugfix

[#3497](https://github.com/apache/incubator-seata/pull/3497) 修复 TCC 模式并发量较大时线程池导致的超时问题
[#3686](https://github.com/apache/incubator-seata/pull/3686) 修复 Apollo 集群配置项错误及 NPE 错误
[#3716](https://github.com/apache/incubator-seata/pull/3716) 修复 findTargetClass 方法的错误
[#3773](https://github.com/apache/incubator-seata/pull/3773) 修复 consul 注册中心在自定义集群名下无法获取 TC 集群
[#3695](https://github.com/apache/incubator-seata/pull/3695) 修复 mariadb 无法创建 XA 连接的问题
[#3783](https://github.com/apache/incubator-seata/pull/3783) 修复 store mode 不生效问题
[#3740](https://github.com/apache/incubator-seata/pull/3740) 修复在某些情况下，当 Saga 事务结束时 LocalThread 未被清除的问题
[#3792](https://github.com/apache/incubator-seata/pull/3792) 修复 Server 无法获取 Redis host 的问题
[#3828](https://github.com/apache/incubator-seata/pull/3828) 修复 StringUtils 抛出 StackOverflowError 的问题
[#3817](https://github.com/apache/incubator-seata/pull/3817) 修复 TC 在 SkyWalking 拓扑图节点不汇聚的问题
[#3803](https://github.com/apache/incubator-seata/pull/3803) 修复 ReflectionUtil 抛出不预期异常问题
[#3879](https://github.com/apache/incubator-seata/pull/3879) 修复 PosrgreSQL 多 schema 无法找到 channel 问题
[#3881](https://github.com/apache/incubator-seata/pull/3881) 修复不存在的相同 DataId 不同默认值返回相同值的问题
[#3897](https://github.com/apache/incubator-seata/pull/3897) 修复 FastjsonUndoLogParser 中 localdatatime 类型不能回滚的问题
[#3901](https://github.com/apache/incubator-seata/pull/3901) 修复 seataio/seata-server 镜像中 servlet-api 冲突无法启动问题
[#3931](https://github.com/apache/incubator-seata/pull/3931) 修复 线程池拒绝执行情况下,dump 内存文件名和路径错误的问题
[#3949](https://github.com/apache/incubator-seata/pull/3949) 修复 nacos-config.py 空白选项的问题和内容丢失的问题
[#3988](https://github.com/apache/incubator-seata/pull/3988) 修复 nacos 的密码带有特殊字符导致用户名不存在问题
[#3978](https://github.com/apache/incubator-seata/pull/3978) 修复 future timeout 引发的 NPE 问题
[#3998](https://github.com/apache/incubator-seata/pull/3978) 修复 jedis multi.exec 的 NPE 问题
[#4011](https://github.com/apache/incubator-seata/pull/4011) 修复 springboot 下无法获取 distributed-lock-table 配置
[#4023](https://github.com/apache/incubator-seata/pull/4023) 修复 dubbo 部分场景存在 xid 未清除的问题
[#4032](https://github.com/apache/incubator-seata/pull/4032) 修复 server 端的 ShutdownHook 在资源释放时，ApplicationContext 已关闭的问题
[#4039](https://github.com/apache/incubator-seata/pull/4039) 修复本地事务抛出异常后 RM 没有清除 xid 问题
[#4074](https://github.com/apache/incubator-seata/pull/4074) 修复 XA 模式资源悬挂问题
[#4107](https://github.com/apache/incubator-seata/pull/4107) 修复项目构建时的死锁问题
[#4158](https://github.com/apache/incubator-seata/pull/4158) 修复 logback 无法加载到 RPC_PORT 的问题
[#4162](https://github.com/apache/incubator-seata/pull/4162) 修复 Redis 注册中心内置配置名导致启动报错问题
[#4165](https://github.com/apache/incubator-seata/pull/4165) 修复 StringUtils.toString(obj) 当 obj 是基本数据数组时，抛出 ClassCastException 的问题
[#4169](https://github.com/apache/incubator-seata/pull/4169) 修复 XA 模式 originalConnection 已关闭，导致二阶段无法执行
[#4177](https://github.com/apache/incubator-seata/pull/4177) 修复当事务超时且 TM 发起 commit 决议时,意外造成全局锁释放的问题
[#4174](https://github.com/apache/incubator-seata/pull/4174) 修复删除 undolog 时连接关闭问题
[#4189](https://github.com/apache/incubator-seata/pull/4189) 修复 kafka-appender.xml 和 logstash-appender.xml 配置文件表达式中的默认值问题
[#4213](https://github.com/apache/incubator-seata/pull/4213) 修复部分"sessionMode"代码未执行导致启动失败问题
[#4220](https://github.com/apache/incubator-seata/pull/4220) 修复 zstd-compressor 模块未合并到 seata-all 中的问题
[#4222](https://github.com/apache/incubator-seata/pull/4222) 修复字段列表为空时，插入语句无法回滚的问题
[#4253](https://github.com/apache/incubator-seata/pull/4253) 修复 UpdateExecutor 只存储 set 字段问题
[#4233](https://github.com/apache/incubator-seata/pull/4233) 修复 lock 和 branch 数据残留问题
[#4278](https://github.com/apache/incubator-seata/pull/4278) 修复 MySQL 的 Blob/Clob/NClob 数据类型无法反序列化的问题
[#4302](https://github.com/apache/incubator-seata/pull/4302) 修复 ORM 可能存在获取不到自增主键值的问题
[#4308](https://github.com/apache/incubator-seata/pull/4308) 修复 PostgreSQL 多个 schema 下存在相同表的 TableMetaCache 解析问题
[#4326](https://github.com/apache/incubator-seata/pull/4326) 修复使用 MariaDB 驱动程序时无法构建 Executor 的问题
[#4355](https://github.com/apache/incubator-seata/pull/4355) 修复使用 MySQL Loadbalance 模式 resourceId 被误判为 resourceIds 的问题
[#4310](https://github.com/apache/incubator-seata/pull/4310) 修复通过 SELECT LAST_INSERT_ID 获取数据库自增 id 失败的问题
[#4331](https://github.com/apache/incubator-seata/pull/4331) 修复使用 ONLY_CARE_UPDATE_COLUMNS 配置可能出现的脏写校验异常
[#4408](https://github.com/apache/incubator-seata/pull/4408) 修复容器环境中设置环境变量无效的问题
[#4441](https://github.com/apache/incubator-seata/pull/4441) 修复 Redis 存储模式下查询时未关闭 Pipeline
和分支注册后添加分支 session 时 branchSessions 为 null 的问题
[#4438](https://github.com/apache/incubator-seata/pull/4438) 修复 file 模式下 GlobalSession 在延迟删除的情况下无法被正常删除的问题
[#4432](https://github.com/apache/incubator-seata/pull/4432) 修复 ServerApplicationListener 无法读取配置中心配置的问题
[#4452](https://github.com/apache/incubator-seata/pull/4452) 修复 service.disableGlobalTransaction 配置的日志输出错误
[#4449](https://github.com/apache/incubator-seata/pull/4449) 修复 Redis 分页查询 NPE 问题,优化 readession 限制查询条数后均衡返回结果
[#4459](https://github.com/apache/incubator-seata/pull/4459) 修复 Oracle 和 PostgreSQL 数据库生成前后镜像失败的问题
[#4471](https://github.com/apache/incubator-seata/pull/4471) 修复运行时切换事务分组对应集群引起的错误
[#4474](https://github.com/apache/incubator-seata/pull/4474) 修复 MySQL 多位 Bit 类型字段回滚错误
[#4492](https://github.com/apache/incubator-seata/pull/4492) 修复 eureka 注册中心无法动态更新服务列表的问题
[#4228](https://github.com/apache/incubator-seata/pull/4228) 修复 TC 获取不同 ip 的 RM 连接导致的 xa 模式资源悬挂问题
[#4561](https://github.com/apache/incubator-seata/pull/4561) 修复 allSessions/findGlobalSessions 某些情况下返回 null 的问题
[#4505](https://github.com/apache/incubator-seata/pull/4505) 修复 time 类型的 fastjson 序列化问题
[#4579](https://github.com/apache/incubator-seata/pull/4579) 修复 MySQLInsertOrUpdateExecutor 的 prepareUndoLogAll
[#4005](https://github.com/apache/incubator-seata/pull/4005) 修复 PK 约束名称与属于 PK 的唯一索引名称不同
[#4062](https://github.com/apache/incubator-seata/pull/4062) 修复 Saga 复杂参数序列化问题
[#4199](https://github.com/apache/incubator-seata/pull/4199) 修复 RPC TM 请求超时问题
[#4352](https://github.com/apache/incubator-seata/pull/4352) 修复 SQL 解析器的一些问题
[#3687](https://github.com/apache/incubator-seata/pull/3687) 修复某些场景下无法重试全局锁的问题

### optimize/test

[#3700](https://github.com/apache/incubator-seata/pull/3700) 优化 buildLockKey 方法的效率
[#3615](https://github.com/apache/incubator-seata/pull/3615) 优化二阶段同步提交时全局事务记录可异步删除
[#3689](https://github.com/apache/incubator-seata/pull/3689) 修正 script/server/config/file.properties 中属性编写错误
[#3588](https://github.com/apache/incubator-seata/pull/3588) 优化数据源自动代理的流程
[#3528](https://github.com/apache/incubator-seata/pull/3528) 优化 Redis 存储模式内存占用
[#3626](https://github.com/apache/incubator-seata/pull/3626) 移除重复的 changeStatus 代码
[#3722](https://github.com/apache/incubator-seata/pull/3722) 添加分布式锁的代码
[#3713](https://github.com/apache/incubator-seata/pull/3713) 统一 enableClientBatchSendRequest 的默认值
[#3120](https://github.com/apache/incubator-seata/pull/3120) 优化 Configuration 的部分代码，并添加单元测试
[#3735](https://github.com/apache/incubator-seata/pull/3735) 当 TC 只有单个节点时，不进行非必要的负载均衡操作
[#3770](https://github.com/apache/incubator-seata/pull/3770) 关闭一些未关闭的对象
[#3627](https://github.com/apache/incubator-seata/pull/3627) 使用 TreeMap 替换 TableMeta 中的 LinkedHashMap 以兼容高版本的 MySQL
[#3760](https://github.com/apache/incubator-seata/pull/3760) 优化 seata-server 的 logback 相关的配置
[#3765](https://github.com/apache/incubator-seata/pull/3765) 将添加配置类的操作从 AutoConfiguration 转移到 EnvironmentPostProcessor 中并提升该操作的优先级
[#3730](https://github.com/apache/incubator-seata/pull/3730) 重构 TCC 模式相关的代码
[#3820](https://github.com/apache/incubator-seata/pull/3820) 在表 tcc_fence_log 中新增字段 action_name
[#3738](https://github.com/apache/incubator-seata/pull/3738) JacksonUndoLogParser 支持解析 LocalDateTime(支持微秒时间)
[#3794](https://github.com/apache/incubator-seata/pull/3794) 优化 seata-server 的打包配置，修正 Dockerfile 的错误配置，并将 Dockerfile 也打包进去
[#3795](https://github.com/apache/incubator-seata/pull/3795) 优化 zkRegistrylookup 方法性能
[#3840](https://github.com/apache/incubator-seata/pull/3840) 优化 apm-skwalking 操作方法生成规则
[#3834](https://github.com/apache/incubator-seata/pull/3834) 优化 seata-distribution 增加 apm-seata-skywalking 包
[#3847](https://github.com/apache/incubator-seata/pull/3847) 优化 ConcurrentHashMap.newKeySet 替换 ConcurrentSet
[#3849](https://github.com/apache/incubator-seata/pull/3849) 优化字符串拼接
[#3890](https://github.com/apache/incubator-seata/pull/3890) 优化 insert 后镜像仅查询插入字段
[#3895](https://github.com/apache/incubator-seata/pull/3895) 优化解码异常
[#3212](https://github.com/apache/incubator-seata/pull/3212) 优化解析 OrderBy，Limit 条件代码结构
[#3898](https://github.com/apache/incubator-seata/pull/3898) 增加 docker maven 插件
[#3904](https://github.com/apache/incubator-seata/pull/3904) 增强 metrics 和修复 seata-server 单测不运行的问题
[#3905](https://github.com/apache/incubator-seata/pull/3905) 优化 nacos-config.sh 支持 ash
[#3935](https://github.com/apache/incubator-seata/pull/3935) 优化以 Redis 为注册中心时,发送多条命令使用 pipeline
[#3916](https://github.com/apache/incubator-seata/pull/3916) 优化注册中心服务节点列表地址探活
[#3918](https://github.com/apache/incubator-seata/pull/3918) 缓存 Field 和 Method 的反射结果
[#3311](https://github.com/apache/incubator-seata/pull/3311) 支持从 consul 单一 key 中读取所有配置
[#3907](https://github.com/apache/incubator-seata/pull/3907) 优化设置 Server 端口
[#3912](https://github.com/apache/incubator-seata/pull/3912) 支持通过 env 配置 JVM 参数
[#3939](https://github.com/apache/incubator-seata/pull/3939) 使用 map 优化大量的判断代码
[#3955](https://github.com/apache/incubator-seata/pull/3955) 添加启动 banner
[#4266](https://github.com/apache/incubator-seata/pull/4266) 修改由于修改记录过多导致分支注册及 lock 释放失败的问题
[#3949](https://github.com/apache/incubator-seata/pull/3949) nacos-config.py 支持默认参数和选择性输入参数
[#3954](https://github.com/apache/incubator-seata/pull/3954) 移除对 druid 依赖中过期方法的调用
[#3981](https://github.com/apache/incubator-seata/pull/3981) 优化服务端口的优先级设置
[#4013](https://github.com/apache/incubator-seata/pull/4013) 优化可用 TC 地址检测
[#3982](https://github.com/apache/incubator-seata/pull/3982) 优化 readme 文档和升级 POM 依赖
[#3991](https://github.com/apache/incubator-seata/pull/3991) 关闭 SpringBoot 下无用的 fileListener
[#3994](https://github.com/apache/incubator-seata/pull/3994) 优化 tcc_fence_log 表定时删除任务的机制
[#3327](https://github.com/apache/incubator-seata/pull/3327) 支持从 etcd3 单一 key 中读取所有配置
[#4001](https://github.com/apache/incubator-seata/pull/4001) 支持从 Nacos,Zookeeper,Consul,Etcd3 中读取 yml
[#4017](https://github.com/apache/incubator-seata/pull/4017) 优化文件配置
[#4018](https://github.com/apache/incubator-seata/pull/4018) 优化 Apollo 配置
[#4021](https://github.com/apache/incubator-seata/pull/4021) 优化 Nacos、Consul、Zookeeper、Etcd3 配置
[#4055](https://github.com/apache/incubator-seata/pull/4055) 优化 NetUtil 的 getLocalAddress0 方法
[#4086](https://github.com/apache/incubator-seata/pull/4086) 分支事务支持懒加载并优化任务调度
[#4056](https://github.com/apache/incubator-seata/pull/4056) 优化 DurationUtil
[#4103](https://github.com/apache/incubator-seata/pull/4103) 减少分支事务注册无需竞争锁时的内存占用
[#3733](https://github.com/apache/incubator-seata/pull/3733) 优化本地事务下的锁竞争机制
[#4144](https://github.com/apache/incubator-seata/pull/4144) 支持默认的事务分组配置
[#4157](https://github.com/apache/incubator-seata/pull/4157) 优化客户端批量发送请求
[#4191](https://github.com/apache/incubator-seata/pull/4191) RPC 请求超时时间支持配置化
[#4216](https://github.com/apache/incubator-seata/pull/4216) 非 AT 模式无须清理 undolog 表
[#4176](https://github.com/apache/incubator-seata/pull/4176) 优化 Redis 注册中心存储，改用自动过期 key 替代 hash.
[#4196](https://github.com/apache/incubator-seata/pull/4196) TC 批量响应客户端
[#4212](https://github.com/apache/incubator-seata/pull/4212) 控制台接口合并优化
[#4237](https://github.com/apache/incubator-seata/pull/4237) 当所有的 before image 均为空的时候，跳过 checkLock 的步骤
[#4251](https://github.com/apache/incubator-seata/pull/4251) 优化部分代码处理
[#4262](https://github.com/apache/incubator-seata/pull/4262) 优化 TCC 模块代码处理
[#4235](https://github.com/apache/incubator-seata/pull/4235) 优化 eureka 注册中心保存实例信息
[#4277](https://github.com/apache/incubator-seata/pull/4277) 优化 Redis-pipeline 模式本地事务下的锁竞争机制
[#4284](https://github.com/apache/incubator-seata/pull/4284) 支持 MSE-Nacos 的 ak/sk 鉴权方式
[#4299](https://github.com/apache/incubator-seata/pull/4299) 优化异常提示
[#4300](https://github.com/apache/incubator-seata/pull/4300) 优化 NettyRemotingServer 的 close()
[#4270](https://github.com/apache/incubator-seata/pull/4270) 提高全局提交和全局回滚的性能，分支事务清理异步化
[#4307](https://github.com/apache/incubator-seata/pull/4307) 优化在 TCC 模式减少不必要的全局锁删除
[#4303](https://github.com/apache/incubator-seata/pull/4303) tcc_fence_log 表悬挂日志记录异步删除
[#4328](https://github.com/apache/incubator-seata/pull/4328) 配置上传脚本支持注释
[#4305](https://github.com/apache/incubator-seata/pull/4305) 优化 TC 端全局锁获取失败时的日志打印
[#4336](https://github.com/apache/incubator-seata/pull/4336) 添加 AT 模式不支持的 SQL 语句异常提示
[#4359](https://github.com/apache/incubator-seata/pull/4359) 支持配置元数据读取环境变量
[#4353](https://github.com/apache/incubator-seata/pull/4353) seata-all.jar 瘦身
[#4393](https://github.com/apache/incubator-seata/pull/4393) Redis & DB 模式下启动不需要 reload
[#4247](https://github.com/apache/incubator-seata/pull/4247) 在 github actions 上，添加基于 java17 和 springboot 各版本的测试
[#4400](https://github.com/apache/incubator-seata/pull/4400) 异步二阶段任务支持并行处理提升效率
[#4391](https://github.com/apache/incubator-seata/pull/4391) commit/rollback 重试超时事件
[#4282](https://github.com/apache/incubator-seata/pull/4282) 优化回滚镜像构建逻辑
[#4276](https://github.com/apache/incubator-seata/pull/4276) 修复 seata-test 单测不运行的问题
[#4407](https://github.com/apache/incubator-seata/pull/4407) file 模式下无需延迟删除 globasession
[#4436](https://github.com/apache/incubator-seata/pull/4436) 优化 file 模式下的 global session 查询接口
[#4431](https://github.com/apache/incubator-seata/pull/4431) 优化 Redis 模式查询 globalSession 限制查询条数
[#4465](https://github.com/apache/incubator-seata/pull/4465) 优化 TC 批量响应客户端模式客户端版本传输方式
[#4469](https://github.com/apache/incubator-seata/pull/4469) 优化控制台 db 模式下获取配置的方式
[#4478](https://github.com/apache/incubator-seata/pull/4478) 优化 Nacos 配置和注册元数据属性
[#4522](https://github.com/apache/incubator-seata/pull/4522) 优化 GC 参数
[#4517](https://github.com/apache/incubator-seata/pull/4517) 增强失败/超时状态的监控
[#4451](https://github.com/apache/incubator-seata/pull/4451) fileSessionManager 改为单例并优化任务线程池处理
[#4551](https://github.com/apache/incubator-seata/pull/4551) 优化 metrics rt 统计问题
[#4574](https://github.com/apache/incubator-seata/pull/4574) 支持 accessKey/secretKey 配置自动注入
[#4583](https://github.com/apache/incubator-seata/pull/4583) DefaultAuthSigner 的默认签名加密方法替换为 HmacSHA256
[#4591](https://github.com/apache/incubator-seata/pull/4591) 优化开关默认值
[#3780](https://github.com/apache/incubator-seata/pull/3780) 升级 Druid 版本
[#3797](https://github.com/apache/incubator-seata/pull/3797) 支持在 Try 方法外由用户自己实例化 BusinessActionContext
[#3909](https://github.com/apache/incubator-seata/pull/3909) 优化 collectRowLocks 方法
[#3763](https://github.com/apache/incubator-seata/pull/3763) 优化 github actions
[#4345](https://github.com/apache/incubator-seata/pull/4345) 修正包目录名
[#4346](https://github.com/apache/incubator-seata/pull/4346) 优化服务器日志并移除 lombok
[#4348](https://github.com/apache/incubator-seata/pull/4348) 统一管理 maven 插件及其版本
[#4354](https://github.com/apache/incubator-seata/pull/4354) 优化 saga 测试用例
[#4227](https://github.com/apache/incubator-seata/pull/4227) 统一管理依赖的版本，并且升级 spring-boot 到 2.4.13
[#4453](https://github.com/apache/incubator-seata/pull/4453) 升级 eureka-clients 和 xstream 的版本
[#4481](https://github.com/apache/incubator-seata/pull/4481) 优化 nacos 配置和命名属性
[#4477](https://github.com/apache/incubator-seata/pull/4477) 优化调试级别日志并修复拼写错误
[#4484](https://github.com/apache/incubator-seata/pull/4484) 优化 TM/RM 注册时 TC 的日志打印
[#4458](https://github.com/apache/incubator-seata/pull/4458) 修复 metrices 模块 README.md 的配置遗漏问题
[#4482](https://github.com/apache/incubator-seata/pull/4482) [#3654](https://github.com/apache/incubator-seata/pull/3654) 修复 typos
[#3880](https://github.com/apache/incubator-seata/pull/3880) 贡献文档增加中文版本
[#4134](https://github.com/apache/incubator-seata/pull/4134) 初始化控制台基础代码
[#3870](https://github.com/apache/incubator-seata/pull/3870) 让 seata-bom 成为真正的 Bill-Of-Material
[#3889](https://github.com/apache/incubator-seata/pull/3889) 支持注册中心添加心跳
[#3702](https://github.com/apache/incubator-seata/pull/3702) 修改注释
[#4608](https://github.com/apache/incubator-seata/pull/4608) [#3110](https://github.com/apache/incubator-seata/pull/4465) 修复测试用例
[#4163](https://github.com/apache/incubator-seata/pull/4163) 完善开发者奉献文档
[#3678](https://github.com/apache/incubator-seata/pull/3678) 补充遗漏的配置及新版本 pr 登记 md 文件
[#4449](https://github.com/apache/incubator-seata/pull/4449) 优化 Redis limit 并修复 Redis 分页问题
[#4535](https://github.com/apache/incubator-seata/pull/4535) 修复 FileSessionManagerTest 单测错误
[#4025](https://github.com/apache/incubator-seata/pull/4025) 优化潜在的数据库资源泄露

非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

- [slievrly](https://github.com/slievrly)
- [wangliang181230](https://github.com/wangliang181230)
- [funky-eyes](https://github.com/funky-eyes)
- [lvekee](https://github.com/lvekee)
- [caohdgege](https://github.com/caohdgege)
- [lightClouds917](https://github.com/lightClouds917)
- [objcoding](https://github.com/objcoding)
- [siyu](https://github.com/Pinocchio2018)
- [GoodBoyCoder](https://github.com/GoodBoyCoder)
- [pengten](https://github.com/pengten)
- [Bughue](https://github.com/Bughue)
- [doubleDimple](https://github.com/doubleDimple)
- [zhaoyuguang](https://github.com/zhaoyuguang)
- [liuqiufeng](https://github.com/liuqiufeng)
- [jsbxyyx](https://github.com/jsbxyyx)
- [lcmvs](https://github.com/lcmvs)
- [onlinechild](https://github.com/onlinechild)
- [xjlgod](https://github.com/xjlgod)
- [h-zhi](https://github.com/h-zhi)
- [tanzzj](https://github.com/tanzzj)
- [miaoxueyu](https://github.com/miaoxueyu)
- [selfishlover](https://github.com/selfishlover)
- [tuwenlin](https://github.com/tuwenlin)
- [dmego](https://github.com/dmego)
- [xiaochangbai](https://github.com/xiaochangbai)
- [Rubbernecker](https://github.com/Rubbernecker)
- [ruanun](https://github.com/ruanun)
- [huan415](https://github.com/huan415)
- [drgnchan](https://github.com/drgnchan)
- [cmonkey](https://github.com/cmonkey)
- [13414850431](https://github.com/13414850431)
- [ls9527](https://github.com/ls9527)
- [xingfudeshi](https://github.com/xingfudeshi)
- [spilledyear](https://github.com/spilledyear)
- [kaka2code](https://github.com/kaka2code)
- [iqinning](https://github.com/iqinning)
- [yujianfei1986](https://github.com/yujianfei1986)
- [elrond-g](https://github.com/elrond-g)
- [jameslcj](https://github.com/jameslcj)
- [zhouchuhang](https://github.com/zch0214)
- [xujj](https://github.com/XBNGit)
- [mengxzh](https://github.com/mengxzh)
- [portman](https://github.com/iportman)
- [anselleeyy](https://github.com/anselleeyy)
- [wangyuewen](https://github.com/2858917634)
- [imherewait](https://github.com/imherewait)
- [wfnuser](https://github.com/wfnuser)
- [zhixing](https://github.com/chenlei3641)

同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 1.4.2 (2021-04-26)

[source](https://github.com/apache/incubator-seata/archive/v1.4.2.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.4.2/seata-server-1.4.2.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.4.2

Seata 1.4.2 发布。

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature

- [[#2933](https://github.com/apache/incubator-seata/pull/2933)] 支持 mysql antlr sqlparser
- [[#3228](https://github.com/apache/incubator-seata/pull/3228)] 支持自定义序列化插件
- [[#3172](https://github.com/apache/incubator-seata/pull/3172)] 支持 AT 模式 undo_log 压缩模式
- [[#3372](https://github.com/apache/incubator-seata/pull/3372)] 支持 saga 模式下用户自定义是否更新最后一次重试日志
- [[#3411](https://github.com/apache/incubator-seata/pull/3411)] 支持 seata-server 线程池参数可配置
- [[#3348](https://github.com/apache/incubator-seata/pull/3348)] 支持 TC 存储模式使用 redis-sentinel
- [[#2667](https://github.com/apache/incubator-seata/pull/2667)] 支持使用 db 和 redis 存储模式时密码的加解密
- [[#3427](https://github.com/apache/incubator-seata/pull/3427)] 支持分布式锁接口
- [[#3443](https://github.com/apache/incubator-seata/pull/3443)] 支持将 seata-server 的日志发送到 logstash 或 kafka 中
- [[#3486](https://github.com/apache/incubator-seata/pull/3486)] 支持 Metrics 增加事务分组属性
- [[#3317](https://github.com/apache/incubator-seata/pull/3317)] 支持当 zookeeper 作为配置中心时从单 node 获取全部配置
- [[#3516](https://github.com/apache/incubator-seata/pull/3516)] 支持 consul 作为注册中心和配置中心时的 acl-token
- [[#3116](https://github.com/apache/incubator-seata/pull/3116)] 支持配置 apollo 配置中心配置 configService 和 cluster
- [[#3468](https://github.com/apache/incubator-seata/pull/3468)] 支持 saga 模式下任务循环执行
- [[#3447](https://github.com/apache/incubator-seata/pull/3447)] 支持日志框架中事务上下文的打印

### bugfix

- [[#3258](https://github.com/apache/incubator-seata/pull/3258)] 修复 AsyncWorker 潜在的 OOM 问题
- [[#3293](https://github.com/apache/incubator-seata/pull/3293)] 修复配置缓存获取值类型不匹配的问题
- [[#3241](https://github.com/apache/incubator-seata/pull/3241)] 禁止在多 SQL 的情况下使用 limit 和 order by 语法
- [[#3406](https://github.com/apache/incubator-seata/pull/3406)] 修复当 config.txt 中包含特殊字符时无法推送至 nacos 的问题
- [[#3367](https://github.com/apache/incubator-seata/pull/3367)] 修复最后一个 XA 分支二阶段时偶发无法回滚的异常
- [[#3418](https://github.com/apache/incubator-seata/pull/3418)] 修复 getGeneratedKeys 可能会取到历史的主键的问题
- [[#3448](https://github.com/apache/incubator-seata/pull/3448)] 修复多个锁竞争失败时，仅删除单个锁，并优化锁竞争逻辑提升处理性能
- [[#3408](https://github.com/apache/incubator-seata/pull/3408)] 修复 jar 运行模式第三方依赖分离打包时的 NPE 问题
- [[#3431](https://github.com/apache/incubator-seata/pull/3431)] 修复在读取配置时 Property Bean 可能未初始化的问题
- [[#3413](https://github.com/apache/incubator-seata/pull/3413)] 修复回滚到 savepoint 以及 releaseSavepoint 的逻辑
- [[#3451](https://github.com/apache/incubator-seata/pull/3451)] 修复 autoCommit=true，全局锁竞争失败时的脏写问题
- [[#3481](https://github.com/apache/incubator-seata/pull/3481)] 修复当 consul client 抛出异常时导致刷新任务中断的问题
- [[#3491](https://github.com/apache/incubator-seata/pull/3491)] 修复 README.md 文件中的拼写错误
- [[#3531](https://github.com/apache/incubator-seata/pull/3531)] 修复 RedisTransactionStoreManager 获取 brachTransaction 可能的 NPE 问题
- [[#3500](https://github.com/apache/incubator-seata/pull/3500)] 修复 oracle 和 postgreSql 无法获取 column info 的问题
- [[#3560](https://github.com/apache/incubator-seata/pull/3560)] 修复 Committing 状态的事务异步任务没有时间阈值和无法进行事务恢复的问题
- [[#3555](https://github.com/apache/incubator-seata/pull/3555)] 通过 setBytes 代替 setBlob，避免高版本 jdbc 驱动工作异常
- [[#3540](https://github.com/apache/incubator-seata/pull/3540)] 修复 server 发布打包时缺失文件的问题
- [[#3597](https://github.com/apache/incubator-seata/pull/3597)] 修复可能的 NPE 问题
- [[#3568](https://github.com/apache/incubator-seata/pull/3568)] 修复自动数据源代理因 ConcurrentHashMap.computeIfAbsent 导致的死锁问题
- [[#3402](https://github.com/apache/incubator-seata/pull/3402)] 修复更新 SQL 中字段名含有库名无法解析更新列的问题
- [[#3464](https://github.com/apache/incubator-seata/pull/3464)] 修复测试用例空指针异常和 StackTraceLogger 中错误的日志格式.
- [[#3522](https://github.com/apache/incubator-seata/pull/3522)] 修复当 DML 影响行数为 0 时注册分支和插入 undo_log 的问题
- [[#3635](https://github.com/apache/incubator-seata/pull/3635)] 修复 zookeeper 配置变更无法推送通知的问题
- [[#3133](https://github.com/apache/incubator-seata/pull/3133)] 修复某些场景下无法重试全局锁的问题
- [[#3156](https://github.com/apache/incubator-seata/pull/3156)] 修复嵌套代理类无法 获取 target 的问题

### optimize

- [[#3341](https://github.com/apache/incubator-seata/pull/3341)] 优化获取指定配置文件的路径格式问题
- [[#3385](https://github.com/apache/incubator-seata/pull/3385)] 优化 GitHub Actions 配置,修复单测失败问题
- [[#3175](https://github.com/apache/incubator-seata/pull/3175)] 支持雪花算法时钟回拨
- [[#3291](https://github.com/apache/incubator-seata/pull/3291)] 优化 mysql 连接参数
- [[#3336](https://github.com/apache/incubator-seata/pull/3336)] 支持使用 System.getProperty 获取 Netty 配置参数
- [[#3369](https://github.com/apache/incubator-seata/pull/3369)] 添加 github action 的 dockerHub 秘钥
- [[#3343](https://github.com/apache/incubator-seata/pull/3343)] 将 CI 程序从 Travis CI 迁移到 Github Actions
- [[#3397](https://github.com/apache/incubator-seata/pull/3397)] 增加代码变更记录
- [[#3303](https://github.com/apache/incubator-seata/pull/3303)] 支持从 nacos 单一 dataId 中读取所有配置
- [[#3380](https://github.com/apache/incubator-seata/pull/3380)] 优化 globalTransactionScanner 中的 DISABLE_GLOBAL_TRANSACTION listener
- [[#3123](https://github.com/apache/incubator-seata/pull/3123)] 优化 seata-server 打包策略
- [[#3415](https://github.com/apache/incubator-seata/pull/3415)] 优化 maven 打包时清除 distribution 目录
- [[#3316](https://github.com/apache/incubator-seata/pull/3316)] 优化读取配置值时属性 bean 未初始化的问题
- [[#3420](https://github.com/apache/incubator-seata/pull/3420)] 优化枚举类的使用并添加单元测试
- [[#3533](https://github.com/apache/incubator-seata/pull/3533)] 支持获取当前事务角色
- [[#3436](https://github.com/apache/incubator-seata/pull/3436)] 优化 SQLType 类中的错别字
- [[#3439](https://github.com/apache/incubator-seata/pull/3439)] 调整 springApplicationContextProvider order 以使其可以在 xml bean 之前被调用
- [[#3248](https://github.com/apache/incubator-seata/pull/3248)] 优化负载均衡配置迁移到 client 节点下
- [[#3441](https://github.com/apache/incubator-seata/pull/3441)] 优化 starter 的自动配置处理
- [[#3466](https://github.com/apache/incubator-seata/pull/3466)] 优化使用 equalsIgnoreCase() 进行字符串比较
- [[#3476](https://github.com/apache/incubator-seata/pull/3476)] 支持 server 参数传入 hostname 时自动将其转换为 ip
- [[#3236](https://github.com/apache/incubator-seata/pull/3236)] 优化执行解锁操作的条件，减少不必要的 unlock 操作
- [[#3485](https://github.com/apache/incubator-seata/pull/3485)] 删除 ConfigurationFactory 中无用的代码
- [[#3505](https://github.com/apache/incubator-seata/pull/3505)] 删除 GlobalTransactionScanner 中无用的 if 判断
- [[#3544](https://github.com/apache/incubator-seata/pull/3544)] 优化无法通过 Statement#getGeneratedKeys 时，只能获取到批量插入的第一个主键的问题
- [[#3549](https://github.com/apache/incubator-seata/pull/3549)] 统一 DB 存储模式下不同表中的 xid 字段的长度
- [[#3551](https://github.com/apache/incubator-seata/pull/3551)] 调大 RETRY_DEAD_THRESHOLD 的值以及设置成可配置
- [[#3589](https://github.com/apache/incubator-seata/pull/3589)] 使用 JUnit API 做异常检查
- [[#3601](https://github.com/apache/incubator-seata/pull/3601)] 使`LoadBalanceProperties`与`spring-boot:2.x`及以上版本兼容
- [[#3513](https://github.com/apache/incubator-seata/pull/3513)] Saga SpringBeanService 调用器支持切换 json 解析器
- [[#3318](https://github.com/apache/incubator-seata/pull/3318)] 支持 CLIENT_TABLE_META_CHECKER_INTERVAL 可配置化
- [[#3371](https://github.com/apache/incubator-seata/pull/3371)] 支持 metric 按 applicationId 分组
- [[#3459](https://github.com/apache/incubator-seata/pull/3459)] 删除重复的 ValidadAddress 代码
- [[#3215](https://github.com/apache/incubator-seata/pull/3215)] 优化 seata-server 在 file 模式下启动时的 reload 逻辑
- [[#3631](https://github.com/apache/incubator-seata/pull/3631)] 优化 nacos-config.py 脚本的入参问题
- [[#3638](https://github.com/apache/incubator-seata/pull/3638)] 优化 update 和 delete 的 SQL 不支持 join 的错误提示
- [[#3523](https://github.com/apache/incubator-seata/pull/3523)] 优化当使用 oracle 时调用 releaseSavepoint()方法报异常的问题
- [[#3458](https://github.com/apache/incubator-seata/pull/3458)] 还原已删除的 md
- [[#3574](https://github.com/apache/incubator-seata/pull/3574)] 修复 EventBus.java 文件中注释拼写错误
- [[#3573](https://github.com/apache/incubator-seata/pull/3573)] 修复 README.md 文件中设计器路径错误
- [[#3662](https://github.com/apache/incubator-seata/pull/3662)] 更新 gpg 密钥对
- [[#3664](https://github.com/apache/incubator-seata/pull/3664)] 优化 javadoc
- [[#3637](https://github.com/apache/incubator-seata/pull/3637)] 登记使用 seata 的公司和 1.4.2 版本包含的新增 pr 信息

### test

- [[#3381](https://github.com/apache/incubator-seata/pull/3381)] 添加 TmClient 的测试用例
- [[#3607](https://github.com/apache/incubator-seata/pull/3607)] 修复 EventBus 的单元测试问题
- [[#3579](https://github.com/apache/incubator-seata/pull/3579)] 添加 StringFormatUtils 测试用例
- [[#3365](https://github.com/apache/incubator-seata/pull/3365)] 修复 ParameterParserTest 测试用例
- [[#3359](https://github.com/apache/incubator-seata/pull/3359)] 删除未使用的测试用例
- [[#3383](https://github.com/apache/incubator-seata/pull/3383)] 优化 StatementProxyTest 单元测试
- [[#3578](https://github.com/apache/incubator-seata/pull/3578)] 修复单元测试 case 里的 UnfinishedStubbing 异常

非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

- [slievrly](https://github.com/slievrly)
- [caohdgege](https://github.com/caohdgege)
- [funky-eyes](https://github.com/funky-eyes)
- [wangliang181230](https://github.com/wangliang181230)
- [xingfudeshi](https://github.com/xingfudeshi)
- [jsbxyyx](https://github.com/jsbxyyx)
- [selfishlover](https://github.com/selfishlover)
- [l8189352](https://github.com/l81893521)
- [Rubbernecker](https://github.com/Rubbernecker)
- [lj2018110133](https://github.com/lj2018110133)
- [github-ganyu](https://github.com/github-ganyu)
- [dmego](https://github.com/dmego)
- [spilledyear](https://github.com/spilledyear)
- [hoverruan](https://github.com/hoverruan)
- [anselleeyy](https://github.com/anselleeyy)
- [Ifdevil](https://github.com/Ifdevil)
- [lvxianzheng](https://github.com/lvxianzheng)
- [MentosL](https://github.com/MentosL)
- [lian88jian](https://github.com/lian88jian)
- [litianyu1992](https://github.com/litianyu1992)
- [xyz327](https://github.com/xyz327)
- [13414850431](https://github.com/13414850431)
- [xuande](https://github.com/xuande)
- [tanggen](https://github.com/tanggen)
- [eas5](https://github.com/eas5)
- [nature80](https://github.com/nature80)
- [ls9527](https://github.com/ls9527)
- [drgnchan](https://github.com/drgnchan)
- [imyangyong](https://github.com/imyangyong)
- [sunlggggg](https://github.com/sunlggggg)
- [long187](https://github.com/long187)
- [h-zhi](https://github.com/h-zhi)
- [StellaiYang](https://github.com/StellaiYang)
- [slinpq](https://github.com/slinpq)
- [sustly](https://github.com/sustly)
- [cznc](https://github.com/cznc)
- [squallliu](https://github.com/squallliu)
- [81519434](https://github.com/81519434)
- [luoxn28](https://github.com/luoxn28)

同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 1.4.1 (2021-02-08)

[source](https://github.com/apache/incubator-seata/archive/v1.4.1.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.4.1/seata-server-1.4.1.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.4.1

Seata 1.4.1 发布。

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature

- [[#3238](https://github.com/apache/incubator-seata/pull/3238)] 添加 deflater 压缩算法支持

### bugfix

- [[#2879](https://github.com/apache/incubator-seata/pull/2879)] 修复 springboot 项目启动过程中可能产生死锁的问题
- [[#3296](https://github.com/apache/incubator-seata/pull/3296)] 修复当 AT 模式和 TCC 模式混用的时候，AT 的分支无法被删除
- [[#3254](https://github.com/apache/incubator-seata/pull/3254)] 在调用恢复在恢复之前清除监听器映射
- [[#3309](https://github.com/apache/incubator-seata/pull/3309)] 修复 Saga 状态机无法使用 Jackson parser 以及当没有选择正确的状态会抛出 NPE 的问题
- [[#3287](https://github.com/apache/incubator-seata/pull/3287)] 修复当更新主键时抛出异常
- [[#3323](https://github.com/apache/incubator-seata/pull/3323)] Saga 模式下创建状态机实例并存入数据库时出现异常，移除 xid 和 branchType，避免影响其他事务执行
- [[#3281](https://github.com/apache/incubator-seata/pull/3281)] 修复 Saga 模式下，分支事务启动异常，上报 TC 状态不正确
- [[#2949](https://github.com/apache/incubator-seata/pull/2949)] 修复当获取 state 列表时的 NPE
- [[#3351](https://github.com/apache/incubator-seata/pull/3351)] 修复使用 hystrix 和 SCA 2.2.3.RELEASE 及以下版本时抛出 IllegalArgumentException 异常的问题
- [[#3349](https://github.com/apache/incubator-seata/pull/3349)] 修复测试用例中的问题
- [[#3325](https://github.com/apache/incubator-seata/pull/3325)] 修复找不到上一次子状态机实例，导致重试一直失败问题
- [[#3357](https://github.com/apache/incubator-seata/pull/3357)] 修复发布规则检测失败的问题

### optimize

- [[#3188](https://github.com/apache/incubator-seata/pull/3188)] 优化检查队列 offer 的返回值
- [[#3247](https://github.com/apache/incubator-seata/pull/3247)] 把 client.log.exceptionRate 配置移动到 log.exceptionRate
- [[#3260](https://github.com/apache/incubator-seata/pull/3260)] 通过 PriorityQueue 来简化 ShutdownHook 的代码
- [[#3319](https://github.com/apache/incubator-seata/pull/3319)] 删除无用的@Sharable
- [[#3313](https://github.com/apache/incubator-seata/pull/3313)] 把 StringBuffer 替换成 StringBuilder
- [[#3335](https://github.com/apache/incubator-seata/pull/3335)] 把 TransactionPropagationIntercepter 重命名为 TransactionPropagationInterceptor
- [[#3310](https://github.com/apache/incubator-seata/pull/3310)] 支持 NamedThreadFactory 从 SecurityManager 或当前线程中获取 ThreadGroup
- [[#3320](https://github.com/apache/incubator-seata/pull/3320)] 使用常量去优化负载均衡配置策略的可读性
- [[#3345](https://github.com/apache/incubator-seata/pull/3345)] 调整 GlobalLockTemplateTest 的测试用例

非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

- [slievrly](https://github.com/slievrly)
- [dongzl](https://github.com/dongzl)
- [wangliang181230](https://github.com/wangliang181230)
- [ls9527](https://github.com/ls9527)
- [long187](https://github.com/long187)
- [81519434](https://github.com/81519434)
- [anselleeyy](https://github.com/anselleeyy)
- [funky-eyes](https://github.com/funky-eyes)
- [selfishlover](https://github.com/selfishlover)
- [suichen](https://github.com/suichen)
- [h-zhi](https://github.com/h-zhi)
- [jxlgzwh](https://github.com/jxlgzwh)
- [LiWenGu](https://github.com/LiWenGu)

同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 1.4.0 (2020-10-30)

[source](https://github.com/apache/incubator-seata/archive/v1.4.0.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.4.0/seata-server-1.4.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.4.0

Seata 1.4.0 发布。

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature

- [[#2380](https://github.com/apache/incubator-seata/pull/2380)] 支持 yml 配置文件
- [[#3191](https://github.com/apache/incubator-seata/pull/3191)] 支持 oracle nclob 类型
- [[#2676](https://github.com/apache/incubator-seata/pull/2676)] 支持客户端最少的活动负载均衡
- [[#2080](https://github.com/apache/incubator-seata/pull/2080)] 支持客户端一致性哈希的负载均衡
- [[#3198](https://github.com/apache/incubator-seata/pull/3198)] 支持 Spring Boot 使用自定义配置中心和注册中心
- [[#2806](https://github.com/apache/incubator-seata/pull/2806)] 支持配置默认全局事务超时时间
- [[#2941](https://github.com/apache/incubator-seata/pull/2941)] 支持 apollo 密钥 key 配置
- [[#2950](https://github.com/apache/incubator-seata/pull/2950)] 支持 redis 存储模式可重入锁
- [[#2913](https://github.com/apache/incubator-seata/pull/2913)] 支持配置 AT 或 XA 事务模式的数据源代理
- [[#2856](https://github.com/apache/incubator-seata/pull/2856)] 支持 undo_log 使用 fst 序列化
- [[#3076](https://github.com/apache/incubator-seata/pull/3076)] 支持 GlobalLock 锁重试
- [[#2825](https://github.com/apache/incubator-seata/pull/2825)] 支持客户端发送鉴权信息
- [[#2962](https://github.com/apache/incubator-seata/pull/2962)] 支持在 @GlobalTransactional 和@GlobalLock 注解上锁的重试配置

### bugfix

- [[#3214](https://github.com/apache/incubator-seata/pull/3214)] 修复在某些情况下'RootContext.DEFAULT_BRANCH_TYPE' 的取值错误的问题
  - [[#3129](https://github.com/apache/incubator-seata/pull/3129)] 修复禁止执行更新主键值的 SQL
  - [[#3205](https://github.com/apache/incubator-seata/pull/3205)] 修复在配置中获取 boolean 类型配置异常
  - [[#3170](https://github.com/apache/incubator-seata/pull/3170)] 修复 Disposable 同优先级的无法执行的问题
  - [[#3180](https://github.com/apache/incubator-seata/pull/3180)] 修复 fst 序列化包名错误
  - [[#3178](https://github.com/apache/incubator-seata/pull/3178)] 修复 sqlparser 换行替换为空格问题
  - [[#2929](https://github.com/apache/incubator-seata/pull/2929)] 修复将应用配置为在启动时降级但在运行中无法升级问题
  - [[#3050](https://github.com/apache/incubator-seata/pull/3050)] 修复 update 和 delete 不支持 order，limit 语法问题
  - [[#2935](https://github.com/apache/incubator-seata/pull/2935)] 修复了 Saga Designer 在切换节点时属性框不会切换的问题
  - [[#3140](https://github.com/apache/incubator-seata/pull/3140)] 修复`Propagation.REQUIRES_NEW`无效的问题
  - [[#3130](https://github.com/apache/incubator-seata/pull/3130)] 修复数据源多重代理和使用非代理类方法的问题
  - [[#3148](https://github.com/apache/incubator-seata/pull/3148)] 修复 Redis 存储模式下 lock 和 session 存储时 key 冲突问题
  - [[#3136](https://github.com/apache/incubator-seata/pull/3136)] 修复 Redis pipeline 执行报错问题
  - [[#2551](https://github.com/apache/incubator-seata/pull/2551)] 修复当使用 AT 数据源代理时 Saga 事务模式无法使用的问题
  - [[#3073](https://github.com/apache/incubator-seata/pull/3073)] 修复在没有 xid 的情况下使用 XA 模式的问题
  - [[#3074](https://github.com/apache/incubator-seata/pull/3074)] 修复若 XA 模式找不到 xid 重试问题
  - [[#3097](https://github.com/apache/incubator-seata/pull/3097)] 修复 HttpAutoConfiguration 只在 springboot web 项目中启动
  - [[#3071](https://github.com/apache/incubator-seata/pull/3071)] 修复 XA 模式中无法获取真实连接的问题
  - [[#3056](https://github.com/apache/incubator-seata/pull/3056)] 修复了删除分支后仍然存在分支锁的错误
  - [[#3025](https://github.com/apache/incubator-seata/pull/3025)] 修复错误的包装路径问题
  - [[#3031](https://github.com/apache/incubator-seata/pull/3031)] 修复 redis 存储模式锁删除锁不完整问题
  - [[#2973](https://github.com/apache/incubator-seata/pull/2973)] 修复 oracle 数据库 where in 超过 1000 的问题
  - [[#2986](https://github.com/apache/incubator-seata/pull/2986)] 修复 checkstyle 插件无法排除单个文件的问题
  - [[#2910](https://github.com/apache/incubator-seata/pull/2910)] 修复错误的注释
  - [[#2914](https://github.com/apache/incubator-seata/pull/2914)] 修复 TCC 模式下，调用方未清除 branchType 的问题
  - [[#2926](https://github.com/apache/incubator-seata/pull/2926)] 修复 fastjson 序列化不记录类名的问题
  - [[#2897](https://github.com/apache/incubator-seata/pull/2897)] 修复 Jedis 删除锁失败的问题
  - [[#2918](https://github.com/apache/incubator-seata/pull/2918)] 修复 AT 模式下回滚时的未加锁的问题
  - [[#2972](https://github.com/apache/incubator-seata/pull/2972)] 修复 UUIDGenerator 高并发下生成重复的 id 问题
  - [[#2932](https://github.com/apache/incubator-seata/pull/2932)] 修复 nacos-config.py 不支持 namespace 问题
  - [[#2900](https://github.com/apache/incubator-seata/pull/2900)] 修复数据库转义符问题
  - [[#2904](https://github.com/apache/incubator-seata/pull/2904)] 修复 getConfig 配置不存在获取到 null 的问题
  - [[#2890](https://github.com/apache/incubator-seata/pull/2890)] 修复 statelang 示例中的拼写错误
  - [[#3040](https://github.com/apache/incubator-seata/pull/3040)] 修复 autocommit=false 时的重复提交问题
  - [[#3230](https://github.com/apache/incubator-seata/pull/3230)] 修复使用@EnableAutoDataSourceProxy 启动失败问题
  - [[#2979](https://github.com/apache/incubator-seata/pull/2979)] 修复与 sharedjdbc 集成 postgresql 无法获取元数据问题
  - [[#3233](https://github.com/apache/incubator-seata/pull/3233)] 修复 Collections 空指针异常
  - [[#3242](https://github.com/apache/incubator-seata/pull/3242)] 修复批处理 SQL 获取 TableMeta 错误问题

### optimize

- [[#3201](https://github.com/apache/incubator-seata/pull/3201)] 修复异常时报错堆栈显示不全的问题
- [[#3062](https://github.com/apache/incubator-seata/pull/3062)] 重构 Redis 存储模式下 session 的存储结构
- [[#3117](https://github.com/apache/incubator-seata/pull/3117)] 优化日志输出以及清除无用代码
- [[#3134](https://github.com/apache/incubator-seata/pull/3134)] 优化 Map 和 List 相关写法
- [[#3195](https://github.com/apache/incubator-seata/pull/3195)] 优化 XID 相关的代码写法
- [[#3200](https://github.com/apache/incubator-seata/pull/3200)] 优化 rpc 日志提示
- [[#3186](https://github.com/apache/incubator-seata/pull/3186)] 移除 StringUtils 的重复代码
- [[#3162](https://github.com/apache/incubator-seata/pull/3162)] 删除重复的代码
- [[#2969](https://github.com/apache/incubator-seata/pull/2969)] 升级 druid 的依赖到 1.1.23
- [[#3141](https://github.com/apache/incubator-seata/pull/3141)] 升级 Nacos 和 FastJSON 的依赖版本
- [[#3118](https://github.com/apache/incubator-seata/pull/3118)] 添加`additional-spring-configuration-metadata.json` 配置提示信息
- [[#2597](https://github.com/apache/incubator-seata/pull/2597)] 优化 web 拦截器中的 xid 状态避免重复处理
- [[#3102](https://github.com/apache/incubator-seata/pull/3102)] 优化 ContextCore 接口可设置非 String 类型的值
- [[#3016](https://github.com/apache/incubator-seata/pull/3016)] 重构 Redis 存储模式下 的 lock 的存储结构
- [[#3046](https://github.com/apache/incubator-seata/pull/3046)] 删除 SerializerFactory 类
- [[#3053](https://github.com/apache/incubator-seata/pull/3053)] 支持 TC 端 jedis 连接池最大数量配置
- [[#3012](https://github.com/apache/incubator-seata/pull/3012)] 移除重复设置端口的代码
- [[#2978](https://github.com/apache/incubator-seata/pull/2978)] 优化 AT 和 TCC 事务模式混用时，AT 模式可异步提交
- [[#2967](https://github.com/apache/incubator-seata/pull/2967)] 优化代码为 lambda 风格
- [[#2968](https://github.com/apache/incubator-seata/pull/2968)] 优化在 RM 客户端初始化后发送注册消息
- [[#2945](https://github.com/apache/incubator-seata/pull/2945)] 优化 DB 存储模式异步提交，减少更新操作
- [[#2952](https://github.com/apache/incubator-seata/pull/2952)] 支持 additional-spring-configuration-metadata.json 配置提示信息
- [[#2920](https://github.com/apache/incubator-seata/pull/2920)] 修正 README.md 中的单词和语法错误
- [[#3222](https://github.com/apache/incubator-seata/pull/3222)] 优化 fileListener 的 CPU 利用率
- [[#2843](https://github.com/apache/incubator-seata/pull/2843)] 移除 redis 和 db 存储模式的中移除接口 Reloadable 和 重构 reload`方法
- [[#3209](https://github.com/apache/incubator-seata/pull/3209)] 新增使用用户 logo 信息

  非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

- [slievrly](https://github.com/slievrly)
- [wangliang181230](https://github.com/wangliang181230)
- [funky-eyes](https://github.com/funky-eyes)
- [jsbxyyx](https://github.com/jsbxyyx)
- [l81893521](https://github.com/l81893521)
- [lightClouds917](https://github.com/lightClouds917)
- [caohdgege](https://github.com/caohdgege)
- [yujianfei1986](https://github.com/yujianfei1986)
- [ph3636](https://github.com/ph3636)
- [PeineLiang](https://github.com/PeineLiang)
- [heyaping388](https://github.com/heyaping388)
- [guang384](https://github.com/guang384)
- [zdrjson](https://github.com/zdrjson)
- [ITAlexSun](https://github.com/ITAlexSun)
- [dongzl](https://github.com/dongzl)
- [81519434](https://github.com/81519434)
- [wangwei-yin](https://github.com/wangwei-yin)
- [jujinghao](https://github.com/jujinghao)
- [JRial95](https://github.com/JRial95)
- [mxszs1](https://github.com/mxszs1)
- [RayneHwang](https://github.com/RayneHwang)
- [everyhook1](https://github.com/everyhook1)
- [li469791221](https://github.com/li469791221)
- [luorenjin](https://github.com/luorenjin)
- [yangxb2010000](https://github.com/yangxb2010000)
- [selfishlover](https://github.com/selfishlover)
- [yyjgit66](https://github.com/yyjgit66)

  同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 1.3.0 (2020-07-14)

[source](https://github.com/apache/incubator-seata/archive/v1.3.0.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.3.0/seata-server-1.3.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.3.0

Seata 1.3.0 发布。

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature

- [[#2398](https://github.com/apache/incubator-seata/pull/2398)] 支持 MySQL 多主键
- [[#2484](https://github.com/apache/incubator-seata/pull/2484)] 支持 Redis 存储模式
- [[#2817](https://github.com/apache/incubator-seata/pull/2817)] Saga 流程设计器 Groovy Script Task
- [[#2646](https://github.com/apache/incubator-seata/pull/2646)] Server 支持 HikariCP 数据源
- [[#2253](https://github.com/apache/incubator-seata/pull/2253)] 支持根据连续错误数动态升降级
- [[#2565](https://github.com/apache/incubator-seata/pull/2565)] 支持事务注解类标注
- [[#2510](https://github.com/apache/incubator-seata/pull/2510)] 协议新增 LZ4 压缩支持
- [[#2622](https://github.com/apache/incubator-seata/pull/2622)] Server 支持版本检查
- [[#2658](https://github.com/apache/incubator-seata/pull/2658)] 支持 Oracle 同一实例下不同用户的事务
- [[#2620](https://github.com/apache/incubator-seata/pull/2620)] 支持使用 Nacos 注册中心配置 group 属性
- [[#2699](https://github.com/apache/incubator-seata/pull/2699)] 支持 ACM 配置中心
- [[#2509](https://github.com/apache/incubator-seata/pull/2509)] 支持 update 操作回滚所有数据列和更新列
- [[#2584](https://github.com/apache/incubator-seata/pull/2584)] StateHandlerInterceptor 和 StateRouterInterceptor 支持 SPI
- [[#2808](https://github.com/apache/incubator-seata/pull/2808)] Server 鉴权支持 SPI
- [[#2616](https://github.com/apache/incubator-seata/pull/2616)] TCC 模式支持 Dubbo 和 Sofa-RPC 注解调用
- [[#2831](https://github.com/apache/incubator-seata/pull/2831)] Saga 模式支持 jackson parser
- [[#2554](https://github.com/apache/incubator-seata/pull/2554)] 增加 zookeeper 序列化支持
- [[#2708](https://github.com/apache/incubator-seata/pull/2708)] 支持 array, datalink 等 JDBC 类型
- [[#2412](https://github.com/apache/incubator-seata/pull/2412)] xid 生成支持雪花算法
- [[#2611](https://github.com/apache/incubator-seata/pull/2611)] 支持配置缓存，去除配置中心强依赖

### bugfix

- [[#2893](https://github.com/apache/incubator-seata/pull/2893)] 修复 postgresql 表名中含 schema 取 tableMeta 错误的问题
- [[#2887](https://github.com/apache/incubator-seata/pull/2887)] 修复 RM 接收 response 的逻辑
- [[#2610](https://github.com/apache/incubator-seata/pull/2610)] Nacos 配置同步脚本加入 Nacos 权限属性控制
- [[#2588](https://github.com/apache/incubator-seata/pull/2588)] 修复 check style 不通过时，无详细信息报出的问题
- [[#2543](https://github.com/apache/incubator-seata/pull/2543)] 修复 ShutdownHook signal 无效问题
- [[#2598](https://github.com/apache/incubator-seata/pull/2598)] 修复无法注册到 Nacos 的问题
- [[#2618](https://github.com/apache/incubator-seata/pull/2618)] 修复 zookeeper 无法创建目录的问题
- [[#2628](https://github.com/apache/incubator-seata/pull/2628)] 修复 delete 操作时表名加别名找不到表名问题
- [[#2639](https://github.com/apache/incubator-seata/pull/2639)] 修复 Apollo 配置中心由于属性大小写导致的无法加载问题
- [[#2629](https://github.com/apache/incubator-seata/pull/2629)] 修复 PostgreSQL 相同实例不同 currentSchema 导致的 resourceId 重复问题
- [[#2659](https://github.com/apache/incubator-seata/pull/2659)] 修复 MySQL 使用 last_insert_id 获取到 undo_log id 问题
- [[#2670](https://github.com/apache/incubator-seata/pull/2670)] 修复 Server dataSource 初始化多次的问题
- [[#2617](https://github.com/apache/incubator-seata/pull/2617)] 修复类和方法上注解获取不正确的问题
- [[#2603](https://github.com/apache/incubator-seata/pull/2603)] 修复无法获取 generated keys value 的问题
- [[#2725](https://github.com/apache/incubator-seata/pull/2725)] 修复 insert 操作时主键前含有其他表达式导致的索引位置不正确的问题
- [[#2698](https://github.com/apache/incubator-seata/pull/2698)] 修复嵌套 GlobalLock 被提前解绑的问题
- [[#2755](https://github.com/apache/incubator-seata/pull/2755)] 修复 TCC 模式 branchCommit 和 branchRollback 抛出异常无返回值的问题
- [[#2777](https://github.com/apache/incubator-seata/pull/2777)] 修复 rollback 重试次数设置为 0 无法回滚的问题
- [[#2812](https://github.com/apache/incubator-seata/pull/2812)] 修复使用 shardingSphere & Seata 获取 PostgreSQL tableMeta 错误的问题
- [[#2760](https://github.com/apache/incubator-seata/pull/2760)] 修复回滚失败 failureHandler 无法抛出失败异常的问题
- [[#2837](https://github.com/apache/incubator-seata/pull/2837)] 修复 SubStateMachineHandler 中错误的常量引用
- [[#2839](https://github.com/apache/incubator-seata/pull/2839)] 修复 Saga 模式补偿成功业务异常丢失的问题
- [[#2650](https://github.com/apache/incubator-seata/pull/2650)] 修复 TCC 和 Saga 模式在 AbstractConnectionProxy 解析 SQL 的问题
- [[#2850](https://github.com/apache/incubator-seata/pull/2850)] 修复 Saga 流程设计器导致浏览器崩溃的问题
- [[#2868](https://github.com/apache/incubator-seata/pull/2868)] 修复找不到 AsyncEventBus 依赖的问题
- [[#2871](https://github.com/apache/incubator-seata/pull/2871)] 修复获取 'schame'.'table' 类型 tableMeta 错误的问题
- [[#2685](https://github.com/apache/incubator-seata/pull/2685)] 修复 Oracle insert 操作使用 sysdate 报错的问题.
- [[#2872](https://github.com/apache/incubator-seata/pull/2872)] 修复 undo sql 中主键缺失转义符的问题
- [[#2875](https://github.com/apache/incubator-seata/pull/2875)] 修复 ColumnUtils delEscape 删除表名带 schema 转义符错误的问题.

### optimize

- [[#2573](https://github.com/apache/incubator-seata/pull/2573)] 在随机负载均衡中使用 ThreadLocalRandom 代替 Random
- [[#2540](https://github.com/apache/incubator-seata/pull/2540)] 重构 RPC 处理方法名和接口
- [[#2642](https://github.com/apache/incubator-seata/pull/2642)] 优化 SofaRegistryServiceImpl 线程不安全的 double check
- [[#2561](https://github.com/apache/incubator-seata/pull/2561)] 获取 tableMeta 逻辑统一
- [[#2591](https://github.com/apache/incubator-seata/pull/2591)] 支持 zookeeper sessionTimeout 和 connectTimeout 默认值
- [[#2601](https://github.com/apache/incubator-seata/pull/2601)] 优化 spring-boot-starter 包结构
- [[#2415](https://github.com/apache/incubator-seata/pull/2415)] 按照分支事务类型决定数据库操作行为
- [[#2647](https://github.com/apache/incubator-seata/pull/2647)] 移除无用的变量
- [[#2649](https://github.com/apache/incubator-seata/pull/2649)] 优化获取 tableMeta 的逻辑
- [[#2652](https://github.com/apache/incubator-seata/pull/2652)] 支持 consul 自定义服务端口
- [[#2660](https://github.com/apache/incubator-seata/pull/2660)] 优化 IdWorker 包路径
- [[#2625](https://github.com/apache/incubator-seata/pull/2625)] Mockito.verify 代替 Mockito.doAnswer
- [[#2666](https://github.com/apache/incubator-seata/pull/2666)] 补充使用用户 logo
- [[#2680](https://github.com/apache/incubator-seata/pull/2680)] 优化 GlobalTransactionalInterceptor 为单例
- [[#2683](https://github.com/apache/incubator-seata/pull/2683)] 优化 TccActionInterceptor 的日志打印
- [[#2477](https://github.com/apache/incubator-seata/pull/2477)] 重构 RPC 客户端请求处理
- [[#2280](https://github.com/apache/incubator-seata/pull/2280)] 重构 InsertExecutor
- [[#2044](https://github.com/apache/incubator-seata/pull/2044)] 优化 ColumnUtils.addEscape
- [[#2730](https://github.com/apache/incubator-seata/pull/2730)] 优化 配置中心类型校验
- [[#2723](https://github.com/apache/incubator-seata/pull/2723)] 优化 postgreSql 获取 tableMeta 的处理逻辑
- [[#2734](https://github.com/apache/incubator-seata/pull/2734)] 优化 postgreSql 依赖的 scope
- [[#2749](https://github.com/apache/incubator-seata/pull/2749)] 优化 logger class 错误问题
- [[#2751](https://github.com/apache/incubator-seata/pull/2751)] 拷贝 jdbc driver 到 docker 镜像
- [[#2759](https://github.com/apache/incubator-seata/pull/2759)] 优化线程池线程命名风格
- [[#2607](https://github.com/apache/incubator-seata/pull/2607)] insert 操作检查 pk 表达式支持
- [[#2765](https://github.com/apache/incubator-seata/pull/2765)] 优化 XA 对不支持的 resource 的逻辑处理
- [[#2771](https://github.com/apache/incubator-seata/pull/2771)] 禁用不稳定的单元测试
- [[#2779](https://github.com/apache/incubator-seata/pull/2779)] 方法变量 ConcurrentHashMap 替换为 HashMap
- [[#2486](https://github.com/apache/incubator-seata/pull/2486)] 重构 RPC server 端的处理逻辑
- [[#2770](https://github.com/apache/incubator-seata/pull/2770)] TCC confirm 和 cancel 支持 void 返回值
- [[#2788](https://github.com/apache/incubator-seata/pull/2788)] 优化 server 日志格式和样式
- [[#2816](https://github.com/apache/incubator-seata/pull/2816)] 优化实例的创建逻辑
- [[#2787](https://github.com/apache/incubator-seata/pull/2787)] 优化雪花算法中的 workId
- [[#2776](https://github.com/apache/incubator-seata/pull/2776)] 优化字符串拼接
- [[#2799](https://github.com/apache/incubator-seata/pull/2799)] 优化操作符
- [[#2829](https://github.com/apache/incubator-seata/pull/2829)] 升降级检查去除加锁和异步化
- [[#2842](https://github.com/apache/incubator-seata/pull/2842)] 优化 sql 格式
- [[#2242](https://github.com/apache/incubator-seata/pull/2242)] 优化 PreparedStatementProxy 初始化逻辑
- [[#2613](https://github.com/apache/incubator-seata/pull/2613)] 优化 DTO 和 typo

  非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

- [slievrly](https://github.com/slievrly)
- [funky-eyes](https://github.com/funky-eyes)
- [wangliang181230](https://github.com/wangliang181230)
- [jsbxyyx](https://github.com/jsbxyyx)
- [l81893521](https://github.com/l81893521)
- [objcoding](https://github.com/objcoding)
- [long187](https://github.com/long187)
- [CharmingRabbit](https://github.com/CharmingRabbit)
- [diguage](https://github.com/diguage)
- [helloworlde](https://github.com/helloworlde)
- [chenxi-null](https://github.com/chenxi-null)
- [ph3636](https://github.com/ph3636)
- [xianlaioy](https://github.com/xianlaioy)
- [qq925716471](https://github.com/qq925716471)
- [horoc](https://github.com/horoc)
- [XavierChengZW](https://github.com/XavierChengZW)
- [anic](https://github.com/anic)
- [fxtahe](https://github.com/fxtahe)
- [wangwengeek](https://github.com/wangwengeek)
- [yangfuhai](https://github.com/yangfuhai)
- [PeineLiang](https://github.com/PeineLiang)
- [f654c32](https://github.com/f654c32)
- [dagmom](https://github.com/dagmom)
- [caohdgege](https://github.com/caohdgege)
- [zjinlei](https://github.com/zjinlei)
- [yyjgit66](https://github.com/yyjgit66)
- [lj2018110133](https://github.com/lj2018110133)
- [wxbty](https://github.com/wxbty)
- [hsoftxl](https://github.com/hsoftxl)
- [q294881866](https://github.com/q294881866)
- [81519434](https://github.com/81519434)

  同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 1.2.0 (2020-04-20)

[source](https://github.com/apache/incubator-seata/archive/v1.2.0.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.2.0/seata-server-1.2.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.2.0

Seata 1.2.0 发布。

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature

- [[#2381](https://github.com/apache/incubator-seata/pull/2381)] 支持 XA 事务模式
- [[#2206](https://github.com/apache/incubator-seata/pull/2206)] 支持 REQUIRED、REQUIRES_NEW、SUPPORTS 和 NOT_SUPPORTED 事务传播模式
- [[#2112](https://github.com/apache/incubator-seata/pull/2112)] 支持 SQL 的批量更新和批量删除
- [[#2275](https://github.com/apache/incubator-seata/pull/2275)] TCC 模式支持 HSF 调用
- [[#2108](https://github.com/apache/incubator-seata/pull/2108)] 支持 zip、bzip2、7z 压缩
- [[#2328](https://github.com/apache/incubator-seata/pull/2328)] server 支持 mysql5.x 和 mysql8.x 类隔离加载
- [[#2367](https://github.com/apache/incubator-seata/pull/2367)] 支持 Nacos 1.2 权限配置
- [[#2359](https://github.com/apache/incubator-seata/pull/2359)] 支持 NEVER、MANDATORY 事务传播模式 和 事务挂起恢复 API
- [[#2418](https://github.com/apache/incubator-seata/pull/2418)] 支持 fst 序列化
- [[#2135](https://github.com/apache/incubator-seata/pull/2135)] 支持 SPI 定义 scope
- [[#2370](https://github.com/apache/incubator-seata/pull/2370)] 支持 failureHandler 从 Spring 容器注入
- [[#2481](https://github.com/apache/incubator-seata/pull/2481)] 支持数据库连接池的 max-wait 配置
- [[#2379](https://github.com/apache/incubator-seata/pull/2379)] 支持使用 Nacos 注册服务时自定义服务名
- [[#2308](https://github.com/apache/incubator-seata/pull/2308)] 增加 Saga 模式是否注册分支的开关
- [[#2301](https://github.com/apache/incubator-seata/pull/2301)] 支持 postgresql 的 default 和 nextval 语法支持

### bugfix

- [[#2575](https://github.com/apache/incubator-seata/pull/2575)] 修复 executeBatch 无法获取 targetSql 问题
- [[#2283](https://github.com/apache/incubator-seata/pull/2283)] 修复 oracle 获取 tableMeta 失败问题
- [[#2312](https://github.com/apache/incubator-seata/pull/2312)] 修复 SeataDataSourceBeanPostProcessor 启动判断条件
- [[#2309](https://github.com/apache/incubator-seata/pull/2309)] 修复数据库 timestamp 类型反序列化丢失 nano 精度问题
- [[#2292](https://github.com/apache/incubator-seata/pull/2292)] 修复一些未转驼峰风格的配置项
- [[#2306](https://github.com/apache/incubator-seata/pull/2306)] 修复 maven-enforcer-plugin 打包版本的限制
- [[#2287](https://github.com/apache/incubator-seata/pull/2287)] 修复全局锁重试时 connection context 未移除问题
- [[#2361](https://github.com/apache/incubator-seata/pull/2361)] 修复错误的配置项名称
- [[#2333](https://github.com/apache/incubator-seata/pull/2333)] 修复由于脏写导致回滚失败错误的日志输出
- [[#2390](https://github.com/apache/incubator-seata/pull/2390)] 修复同步脚本中配置项对于含有空格的处理
- [[#2408](https://github.com/apache/incubator-seata/pull/2408)] 修复 postgresql undo_log 建表脚本缺少 sequence
- [[#2391](https://github.com/apache/incubator-seata/pull/2391)] 修复获取配置异常导致的 CPU 飙升问题
- [[#2427](https://github.com/apache/incubator-seata/pull/2427)] 修复 debug 时 调用 StringUtils.toString(o) 栈溢出问题
- [[#2384](https://github.com/apache/incubator-seata/pull/2384)] 修复 Saga 模式 StateMachineRepository#getStateMachineById 方法会覆盖内存中缓存的最新版本的状态机定义问题
- [[#2323](https://github.com/apache/incubator-seata/pull/2323)] 修复数据源自动代理问题
- [[#2466](https://github.com/apache/incubator-seata/pull/2466)] 修复文件存储模式多线程变量可见性问题
- [[#2349](https://github.com/apache/incubator-seata/pull/2349)] 修复批量 insert 不同主键类型检查
- [[#2479](https://github.com/apache/incubator-seata/pull/2479)] 修复 postgresql schema 非小写问题
- [[#2449](https://github.com/apache/incubator-seata/pull/2449)] 修复 server 启动时无法获取表结构问题
- [[#2505](https://github.com/apache/incubator-seata/pull/2505)] 修复 session store 路径判断条件
- [[#2456](https://github.com/apache/incubator-seata/pull/2456)] 修复 server 极端异常情况下编码错误问题
- [[#2495](https://github.com/apache/incubator-seata/pull/2495)] 修复 NPE 和减少 lockKey 为 null 时的分支注册请求
- [[#2490](https://github.com/apache/incubator-seata/pull/2490)] 修复 RpcContext.addResource 参数为 null 的处理判断
- [[#2419](https://github.com/apache/incubator-seata/pull/2419)] 修复 http 部分的集成测试失败问题
- [[#2535](https://github.com/apache/incubator-seata/pull/2535)] 修复 config.txt 中错误的配置名称
- [[#2524](https://github.com/apache/incubator-seata/pull/2524)] 修复客户端注册服务名配置冗余导致的配置不一致问题
- [[#2473](https://github.com/apache/incubator-seata/pull/2473)] 修复文件存储模式刷盘条件的判断逻辑
- [[#2455](https://github.com/apache/incubator-seata/pull/2455)] 修复子模块下无法执行 copyright 和 checkstyle maven 插件问题

### optimize

- [[#2409](https://github.com/apache/incubator-seata/pull/2409)] 当 undolog 和 lockKey 为空时减少不必要的 db 和 server 交互
- [[#2329](https://github.com/apache/incubator-seata/pull/2329)] 按照不同的存储模式重构抽象相关逻辑
- [[#2354](https://github.com/apache/incubator-seata/pull/2354)] 优化 spring cloud config 不支持 listener 的逻辑
- [[#2320](https://github.com/apache/incubator-seata/pull/2320)] 优化 protostuff 和 kryo 序列化 timestamp 类型的逻辑，提升序列化性能
- [[#2307](https://github.com/apache/incubator-seata/pull/2307)] 优化事务模式切换时的事务上下文逻辑
- [[#2364](https://github.com/apache/incubator-seata/pull/2364)] 优化启动时不必要的类初始化加载
- [[#2368](https://github.com/apache/incubator-seata/pull/2368)] 增加 zk 作为注册中心和配置中心缺少的配置属性
- [[#2351](https://github.com/apache/incubator-seata/pull/2351)] 增加获取本地全局事务状态的接口
- [[#2529](https://github.com/apache/incubator-seata/pull/2529)] 优化 druid 连接池参数
- [[#2288](https://github.com/apache/incubator-seata/pull/2288)] 忽略 mock 测试部分的单元测试覆盖度
- [[#2297](https://github.com/apache/incubator-seata/pull/2297)] 移除重复 pom 依赖
- [[#2336](https://github.com/apache/incubator-seata/pull/2336)] 添加使用用户的 logo
- [[#2348](https://github.com/apache/incubator-seata/pull/2348)] 去除重复的配置项
- [[#2362](https://github.com/apache/incubator-seata/pull/2362)] 优化按频率打印堆栈 stackTraceLogger 的方法
- [[#2382](https://github.com/apache/incubator-seata/pull/2382)] 优化 RegistryFactory 为单例模式 和 RegistryType 的判断逻辑
- [[#2400](https://github.com/apache/incubator-seata/pull/2400)] 优化 UUIDGenerator 的魔数逻辑
- [[#2397](https://github.com/apache/incubator-seata/pull/2397)] 修复 typo
- [[#2407](https://github.com/apache/incubator-seata/pull/2407)] 修复可能导致 NPE 的逻辑
- [[#2402](https://github.com/apache/incubator-seata/pull/2402)] 优化 RM 和 TM 的注册日志
- [[#2422](https://github.com/apache/incubator-seata/pull/2422)] 增加文档的 script 链接
- [[#2440](https://github.com/apache/incubator-seata/pull/2440)] 优化联系我们和启动日志
- [[#2445](https://github.com/apache/incubator-seata/pull/2445)] 优化 kryo 和 fst 的注册方法
- [[#2372](https://github.com/apache/incubator-seata/pull/2372)] 将 lock store sql 重构为 SPI 实现
- [[#2453](https://github.com/apache/incubator-seata/pull/2453)] 优化不必要的 server 配置项
- [[#2369](https://github.com/apache/incubator-seata/pull/2369)] 将 log store sql 重构为 SPI 实现
- [[#2526](https://github.com/apache/incubator-seata/pull/2526)] 优化 seata-spring-boot-starter 的启动日志
- [[#2530](https://github.com/apache/incubator-seata/pull/2530)] 移除 netty 的 connPool
- [[#2489](https://github.com/apache/incubator-seata/pull/2489)] 优化 exceptionHandler 的方法签名
- [[#2494](https://github.com/apache/incubator-seata/pull/2494)] 移除不必要的代码
- [[#2523](https://github.com/apache/incubator-seata/pull/2523)] server 按照频率输出不正常事务的异常详细堆栈信息
- [[#2549](https://github.com/apache/incubator-seata/pull/2549)] 优化 ZookeeperConfiguration 日志级别和异常信息不打印的问题
- [[#2558](https://github.com/apache/incubator-seata/pull/2558)] 规范统一 config 和 server 模块的日志
- [[#2464](https://github.com/apache/incubator-seata/pull/2464)] 增强 Saga 状态流程设计器
- [[#2553](https://github.com/apache/incubator-seata/pull/2553)] 增加使用同步脚本的一些说明

  Thanks to these contributors for their code commits. Please report an unintended omission.

- [slievrly](https://github.com/slievrly)
- [funky-eyes](https://github.com/funky-eyes)
- [ph3636](https://github.com/ph3636)
- [lightClouds917](https://github.com/lightClouds917)
- [l81893521](https://github.com/l81893521)
- [jsbxyyx](https://github.com/jsbxyyx)
- [objcoding](https://github.com/objcoding)
- [CharmingRabbit](https://github.com/CharmingRabbit)
- [xingfudeshi](https://github.com/xingfudeshi)
- [lovepoem](https://github.com/lovepoem)
- [SevenSecondsOfMemory](https://github.com/SevenSecondsOfMemory)
- [zjinlei](https://github.com/zjinlei)
- [ggndnn](https://github.com/ggndnn)
- [tauntongo](https://github.com/tauntongo)
- [threefish](https://github.com/threefish)
- [helloworlde](https://github.com/helloworlde)
- [long187](https://github.com/long187)
- [jaspercloud](https://github.com/jaspercloud)
- [dk-lockdown](https://github.com/dk-lockdown)
- [wxbty](https://github.com/wxbty)
- [sharajava](https://github.com/sharajava)
- [ppj19891020](https://github.com/ppj19891020)
- [YuKongEr](https://github.com/YuKongEr)
- [Zh1Cheung](https://github.com/Zh1Cheung)
- [wangwei-ying](https://github.com/wangwei-ying)
- [mxszs](https://github.com/mxszs)
- [q294881866](https://github.com/q294881866)
- [HankDevelop](https://github.com/HankDevelop)

  Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### Seata 1.1.0 (2020-02-19)

[source](https://github.com/apache/incubator-seata/archive/v1.1.0.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.1.0/seata-server-1.1.0.zip)

<details>
    <summary><mark>Release notes</mark></summary>

Seata 1.1.0 发布。

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature

- [[#2200](https://github.com/apache/incubator-seata/pull/2200)] 支持 postgresql (业务侧和 TC server)
- [[#1746](https://github.com/apache/incubator-seata/pull/1746)] 支持 httpClient 自动集成
- [[#2240](https://github.com/apache/incubator-seata/pull/2240)] 支持自定义 Saga 恢复策略超时时间
- [[#1693](https://github.com/apache/incubator-seata/pull/1693)] 支持 druid 类隔离加载，隔离中间件和业务侧的 druid 使用
- [[#2245](https://github.com/apache/incubator-seata/pull/2245)] 支持 zookeeper 鉴权
- [[#2239](https://github.com/apache/incubator-seata/pull/2239)] 支持 dubbo 2.7.4+
- [[#2203](https://github.com/apache/incubator-seata/pull/2203)] 支持 nacos 配置中心设置 group 属性
- [[#2086](https://github.com/apache/incubator-seata/pull/2086)] 支持 apollo 配置中心设置 namespace 属性
- [[#2106](https://github.com/apache/incubator-seata/pull/2106)] 支持 FastThreadLocalContextCore 存储事务上下文
- [[#1703](https://github.com/apache/incubator-seata/pull/1703)] 支持 sql parser SPI，提供 druid sql parser
- [[#2151](https://github.com/apache/incubator-seata/pull/2151)] 支持 Saga 模式跳过成功分支事务的 report

### bugfix

- [[#2270](https://github.com/apache/incubator-seata/pull/2270)] 修复 worker size 不支持枚举配置和其他配置问题
- [[#2258](https://github.com/apache/incubator-seata/pull/2258)] 修复 channelHandler 重连时 not sharable 问题
- [[#2261](https://github.com/apache/incubator-seata/pull/2261)] 修复定时任务启动但 ApplicationContext 未刷新问题
- [[#2262](https://github.com/apache/incubator-seata/pull/2262)] 修复 nacos 初始化脚本设置 group 错误问题
- [[#2249](https://github.com/apache/incubator-seata/pull/2249)] 修复 Saga 模式注册分支失败状态机状态错误问题
- [[#2126](https://github.com/apache/incubator-seata/pull/2126)] 修复表名和列名转义符错误问题
- [[#2234](https://github.com/apache/incubator-seata/pull/2234)] 修复使用 fastjson 反序列化 bigint 错误问题
- [[#2237](https://github.com/apache/incubator-seata/pull/2237)] 修复 DefaultCoordinatorTest 在 wins 测试错误问题
- [[#2233](https://github.com/apache/incubator-seata/pull/2233)] 修复使用 fastjson 忽略 tableMeta 失效问题
- [[#2172](https://github.com/apache/incubator-seata/pull/2172)] 修复使用 SpringCloudConfig 配置中心无法读取配置问题
- [[#2217](https://github.com/apache/incubator-seata/pull/2217)] 修复 seata-spring-boot-starter 错误配置名称
- [[#2219](https://github.com/apache/incubator-seata/pull/2219)] 修复 seata-spring-boot-starter 读取 disableGlobalTransaction 配置错误问题
- [[#2187](https://github.com/apache/incubator-seata/pull/2187)] 修复有相同数据依赖的不同事务分支路由到不同 server 时回滚顺序错误问题
- [[#2175](https://github.com/apache/incubator-seata/pull/2175)] 修复 server direct buffer OOM 问题
- [[#2210](https://github.com/apache/incubator-seata/pull/2210)] 修复二阶段 commit 和 rollback 重试超时 globalSession 无法删除问题
- [[#2179](https://github.com/apache/incubator-seata/pull/2179)] 修复 redis 注册中心 db 属性转型错误问题
- [[#2192](https://github.com/apache/incubator-seata/pull/2192)] 修复 eureka getHostName() 返回 ipAddress 问题
- [[#2198](https://github.com/apache/incubator-seata/pull/2198)] 修复 rollback 超时无法自动删除全局锁问题
- [[#2167](https://github.com/apache/incubator-seata/pull/2167)] 修复 Saga 异步执行返回相同 id 问题
- [[#2185](https://github.com/apache/incubator-seata/pull/2185)] 修复 server 启动时 kubernetes 的判断条件
- [[#2145](https://github.com/apache/incubator-seata/pull/2145)] 修复 Saga 模式重试成功上报状态错误问题
- [[#2113](https://github.com/apache/incubator-seata/pull/2113)] 修复分支 rollback 失败触发多个 TC 重试导致的并发异常

### optimize

- [[#2255](https://github.com/apache/incubator-seata/pull/2255)] 优化配置项的默认配置值
- [[#2230](https://github.com/apache/incubator-seata/pull/2230)] 统一配置项命名风格和保持 seata-all 和 spring boot starter 相同默认值
- [[#1935](https://github.com/apache/incubator-seata/pull/1935)] 重构 client 和 server RPC
- [[#2215](https://github.com/apache/incubator-seata/pull/2215)] 优化 Saga 模式的超时处理
- [[#2227](https://github.com/apache/incubator-seata/pull/2227)] 分离 TC In/Outbound 接口
- [[#2033](https://github.com/apache/incubator-seata/pull/2033)] DefaultRemotingParser 逻辑优化
- [[#1688](https://github.com/apache/incubator-seata/pull/1688)] 减少客户端无用依赖
- [[#2134](https://github.com/apache/incubator-seata/pull/2134)] 按照事务模式区分 TC 逻辑重构
- [[#2224](https://github.com/apache/incubator-seata/pull/2224)] 优化 ContextCoreLoader 代码风格
- [[#2171](https://github.com/apache/incubator-seata/pull/2171)] 优化配置初始化同步脚本和添加使用说明
- [[#2208](https://github.com/apache/incubator-seata/pull/2208)] 使用 SPI LoadLevel name 代替 getDbType 接口方法
- [[#2182](https://github.com/apache/incubator-seata/pull/2182)] 优化 seata-spring-boot-starter 前缀判断逻辑
- [[#2211](https://github.com/apache/incubator-seata/pull/2211)] 优化 RootContext 代码风格
- [[#2140](https://github.com/apache/incubator-seata/pull/2140)] 优化 GzipUtil 代码风格
- [[#2209](https://github.com/apache/incubator-seata/pull/2209)] 重构 seata-discovery 模块，增加可读性
- [[#2055](https://github.com/apache/incubator-seata/pull/2055)] 使用 SPI 重构 tableMetaCache 和 undoLogManager
- [[#2184](https://github.com/apache/incubator-seata/pull/2184)] 重构 seata-config 模块，增加可读性
- [[#2095](https://github.com/apache/incubator-seata/pull/2095)] 重构数据源自动代理，区分 jdk 和 cglib 代理属性设置
- [[#2178](https://github.com/apache/incubator-seata/pull/2178)] Saga 状态机设计器添加默认 catch 节点
- [[#2103](https://github.com/apache/incubator-seata/pull/2103)] 优化 tcc 模块代码，增加可读性
- [[#2125](https://github.com/apache/incubator-seata/pull/2125)] 修改 MySQL recognizer package 路径
- [[#2176](https://github.com/apache/incubator-seata/pull/2176)] 修复 typos
- [[#2156](https://github.com/apache/incubator-seata/pull/2156)] 重构 sqlparser druid 名称为常量
- [[#2170](https://github.com/apache/incubator-seata/pull/2170)] 增加 seata common 模块的单测覆盖率
- [[#2139](https://github.com/apache/incubator-seata/pull/2139)] 优雅关闭 resources
- [[#2097](https://github.com/apache/incubator-seata/pull/2097)] 将 codec 模块重命名为 serializer 模块
- [[#2159](https://github.com/apache/incubator-seata/pull/2159)] 优化 spring 模块代码风格，增加可读性
- [[#2036](https://github.com/apache/incubator-seata/pull/2036)] 优化 Dubbo parser 逻辑
- [[#2062](https://github.com/apache/incubator-seata/pull/2062)] 优化 seata-rm-datasource 模块代码风格，增加可读性
- [[#2146](https://github.com/apache/incubator-seata/pull/2146)] 优化日志输出字符拼接
- [[#2038](https://github.com/apache/incubator-seata/pull/2038)] 优化 common 模块代码风格，增加可读性
- [[#2120](https://github.com/apache/incubator-seata/pull/2120)] 修复 typos
- [[#2078](https://github.com/apache/incubator-seata/pull/2078)] 增加 oracle table meta cache 单测覆盖度
- [[#2115](https://github.com/apache/incubator-seata/pull/2115)] 修复 typos
- [[#2099](https://github.com/apache/incubator-seata/pull/2099)] 优化 tm 模块代码风格，增加可读性

非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

- [slievrly](https://github.com/slievrly)
- [xingfudeshi](https://github.com/xingfudeshi)
- [objcoding](https://github.com/objcoding)
- [long187](https://github.com/long187)
- [zjinlei](https://github.com/zjinlei)
- [ggndnn](https://github.com/ggndnn)
- [lzf971107](https://github.com/lzf971107)
- [CvShrimp](https://github.com/CvShrimp)
- [l81893521](https://github.com/l81893521)
- [ph3636](https://github.com/ph3636)
- [koonchen](https://github.com/koonchen)
- [leizhiyuan](https://github.com/leizhiyuan)
- [funky-eyes](https://github.com/funky-eyes)
- [caioguedes](https://github.com/caioguedes)
- [helloworlde](https://github.com/helloworlde)
- [wxbty](https://github.com/wxbty)
- [bao-hp](https://github.com/bao-hp)
- [guojingyinan219](https://github.com/guojingyinan219)
- [CharmingRabbit](https://github.com/CharmingRabbit)
- [jaspercloud](https://github.com/jaspercloud)
- [jsbxyyx](https://github.com/jsbxyyx)

同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

**常用链接**

**Seata**: https://github.com/apache/incubator-seata
**Seata-Samples**: https://github.com/apache/incubator-seata-samples
**Release**: https://github.com/apache/incubator-seata/releases
**Seata 官网**: https://seata.apache.org/zh-cn/

</details>

### 1.0.0 (2019-12-21)

[source](https://github.com/apache/incubator-seata/archive/v1.0.0.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.0.0/seata-server-1.0.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.0.0 GA 版本重磅发布

Seata 1.0.0 GA 版本重磅发布。

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature

- [[#1966](https://github.com/apache/incubator-seata/pull/1966)] 增加 client 端单条消息发送方式
- [[#2004](https://github.com/apache/incubator-seata/pull/2004)] 增加配置中心配置同步脚本
- [[#1997](https://github.com/apache/incubator-seata/pull/1997)] 提供图像生成工具便于查看 Saga 状态机执行路径
- [[#1992](https://github.com/apache/incubator-seata/pull/1992)] 支持动态降级
- [[#1898](https://github.com/apache/incubator-seata/pull/1898)] 支持动态配置
- [[#1983](https://github.com/apache/incubator-seata/pull/1983)] 支持 hessian 序列化
- [[#1960](https://github.com/apache/incubator-seata/pull/1960)] 提供基于 GGEditor 的可视化图形 Saga 状态机设计器
- [[#1900](https://github.com/apache/incubator-seata/pull/1900)] Saga 状态语言支持重试服务
- [[#1885](https://github.com/apache/incubator-seata/pull/1885)] 增加 Docker image 构建配置
- [[#1914](https://github.com/apache/incubator-seata/pull/1914)] 支持 Oracle exists 表达式
- [[#1878](https://github.com/apache/incubator-seata/pull/1878)] 支持 Mysql exists 表达式
- [[#1871](https://github.com/apache/incubator-seata/pull/1871)] 适配 springcloud-alibaba-seata 自动配置
- [[#1844](https://github.com/apache/incubator-seata/pull/1844)] Saga 状态机支持异步调用服务
- [[#1742](https://github.com/apache/incubator-seata/pull/1742)] 增加 seata-spring-boot-starter
- [[#1460](https://github.com/apache/incubator-seata/pull/1460)] 支持 gzip 压缩
- [[#1492](https://github.com/apache/incubator-seata/pull/1492)] 支持 grpc 事务自动传递和绑定

### bugfix

- [[#2066](https://github.com/apache/incubator-seata/pull/2066)] 修复初始化 eureka client 线程安全问题
- [[#2059](https://github.com/apache/incubator-seata/pull/2059)] 修复异步回滚线程导致重复回滚问题
- [[#2050](https://github.com/apache/incubator-seata/pull/2050)] 修复监听不存在的配置导致空指针
- [[#2053](https://github.com/apache/incubator-seata/pull/2053)] 修复 Insert 的表名为关键字,无法构建前置镜像
- [[#2054](https://github.com/apache/incubator-seata/pull/2054)] 修复状态为 Rollbacking 的事务无法被检测出
- [[#2043](https://github.com/apache/incubator-seata/pull/2043)] 修复使用 druid-spring-boot-starter 动态代理失败
- [[#1668](https://github.com/apache/incubator-seata/pull/1668)] 修复 sql 语句转义符号问题
- [[#2029](https://github.com/apache/incubator-seata/pull/2029)] 修复 seata-spring-boot-starter 无效
- [[#2037](https://github.com/apache/incubator-seata/pull/2037)] 修复 mysql 连接无法自动释放
- [[#2032](https://github.com/apache/incubator-seata/pull/2032)] 修复 Etcd3 配置错误
- [[#1929](https://github.com/apache/incubator-seata/pull/1929)] 修复元数据有可能出现重复缓存
- [[#1996](https://github.com/apache/incubator-seata/pull/1996)] 修复小部分情况下无法代理数据源
- [[#2001](https://github.com/apache/incubator-seata/pull/2001)] 移除无效 jvm 参数
- [[#1984](https://github.com/apache/incubator-seata/pull/1984)] 修复预设容器环境变量问题，替换基础镜像
- [[#1978](https://github.com/apache/incubator-seata/pull/1978)] 修复在 windows 下 FileTransactionStoreManager 单元测试无法通过
- [[#1953](https://github.com/apache/incubator-seata/pull/1953)] 修复在小部分情况下获取表元数据失败
- [[#1973](https://github.com/apache/incubator-seata/pull/1973)] 修复容器下无法获取 server 端口
- [[#1905](https://github.com/apache/incubator-seata/pull/1905)] 解决 lock_key 长度问题
- [[#1927](https://github.com/apache/incubator-seata/pull/1927)] 修复 SPI 有可能加载私有类
- [[#1961](https://github.com/apache/incubator-seata/pull/1961)] 修复 CI 日志过长问题
- [[#1893](https://github.com/apache/incubator-seata/pull/1893)] 修复 Saga 模式不会删除分支信息问题
- [[#1932](https://github.com/apache/incubator-seata/pull/1932)] 修复构建 Docker 镜像时环境不匹配
- [[#1912](https://github.com/apache/incubator-seata/pull/1912)] 修复部分异常日志打印不完整
- [[#1917](https://github.com/apache/incubator-seata/pull/1917)] 修复 CI 部分测试用例出现空指针异常
- [[#1909](https://github.com/apache/incubator-seata/pull/1909)] 修复 xid 类型为空导致空指针
- [[#1902](https://github.com/apache/incubator-seata/pull/1902)] 修复回滚时如遇不支持的数据库出现空指针
- [[#1789](https://github.com/apache/incubator-seata/pull/1789)] 修复 xid header 大小写问题
- [[#1889](https://github.com/apache/incubator-seata/pull/1889)] 修复 TCC 下分支注册导致线程挂起
- [[#1813](https://github.com/apache/incubator-seata/pull/1813)] 修复部分情况 TCC 不支持跨服务
- [[#1825](https://github.com/apache/incubator-seata/pull/1825)] 修复并发情况下事务状态不一致
- [[#1850](https://github.com/apache/incubator-seata/pull/1850)] 修复 Server 重启时 sessionId 未重置
- [[#1879](https://github.com/apache/incubator-seata/pull/1879)] 修复 jdbc 传入空参数导致异常
- [[#1874](https://github.com/apache/incubator-seata/pull/1874)] 修复部分情况下 Channel 关闭的问题
- [[#1863](https://github.com/apache/incubator-seata/pull/1863)] 修复 Other 类型无法序列化
- [[#1837](https://github.com/apache/incubator-seata/pull/1837)] 修复 saga ExpressionEvaluator 不支持空值
- [[#1810](https://github.com/apache/incubator-seata/pull/1810)] 修复 saga 状态机无法保存并提供状态日志查询
- [[#1834](https://github.com/apache/incubator-seata/pull/1834)] 修复 StateInstance 无法记录输出参数
- [[#1856](https://github.com/apache/incubator-seata/pull/1856)] 修复 protostuff undo log 获取默认 content
- [[#1845](https://github.com/apache/incubator-seata/pull/1845)] 修复分支提交失败, 导致空指针异常
- [[#1858](https://github.com/apache/incubator-seata/pull/1858)] 修复分布式事务不生效
- [[#1846](https://github.com/apache/incubator-seata/pull/1846)] 修复并发下增加监听器异常
- [[#1839](https://github.com/apache/incubator-seata/pull/1839)] 修复重复加锁
- [[#1768](https://github.com/apache/incubator-seata/pull/1768)] 修复设置数据库连接参数 useInformationSchema 为 true 无法获取元数据
- [[#1796](https://github.com/apache/incubator-seata/pull/1796)] 修复回滚时异常判断不完整
- [[#1805](https://github.com/apache/incubator-seata/pull/1805)] 修复连接代理和 prepareStatement 未在全局事务管理下
- [[#1780](https://github.com/apache/incubator-seata/pull/1780)] 修复 Oracle 无法执行 select for update 语句
- [[#1802](https://github.com/apache/incubator-seata/pull/1802)] 部分方法修改 HashMap 为 LinkedHashMap
- [[#1793](https://github.com/apache/incubator-seata/pull/1793)] 修复多数据源下无法自动代理
- [[#1788](https://github.com/apache/incubator-seata/pull/1788)] 修复 Mysql 无法获取主键值
- [[#1764](https://github.com/apache/incubator-seata/pull/1764)] 修复 Jdk11 下远程地址为空
- [[#1778](https://github.com/apache/incubator-seata/pull/1778)] 修复单元测试未清空测试资源
- [[#1777](https://github.com/apache/incubator-seata/pull/1777)] 修复 DeleteExecutor 未根据数据库类型来构建前置镜像

### optimize

- [[#2068](https://github.com/apache/incubator-seata/pull/2068)] 优化数据库连接获取
- [[#2056](https://github.com/apache/incubator-seata/pull/2056)] 移除代码中非 java doc 注释
- [[#1775](https://github.com/apache/incubator-seata/pull/1775)] 优化分支事务回滚日志输出频率
- [[#2000](https://github.com/apache/incubator-seata/pull/2000)] 统一归类初始化脚本
- [[#2007](https://github.com/apache/incubator-seata/pull/2007)] 提高 common 模块单元测试覆盖率
- [[#1969](https://github.com/apache/incubator-seata/pull/1969)] 增加 Docker-Compose, Kubernetes, Helm 脚本
- [[#1967](https://github.com/apache/incubator-seata/pull/1967)] 增加 Docker file
- [[#2018](https://github.com/apache/incubator-seata/pull/2018)] 优化 ConfigFuture
- [[#2020](https://github.com/apache/incubator-seata/pull/2020)] 优化 saga 日志输出
- [[#1975](https://github.com/apache/incubator-seata/pull/1975)] 扁平化 saga 嵌套事务
- [[#1980](https://github.com/apache/incubator-seata/pull/1980)] 分支注册时显示 applicationId
- [[#1994](https://github.com/apache/incubator-seata/pull/1994)] 修改 zookeeper 根路径配置名称
- [[#1990](https://github.com/apache/incubator-seata/pull/1990)] 增加 netty 配置常量
- [[#1979](https://github.com/apache/incubator-seata/pull/1979)] 优化 select for update 识别器
- [[#1957](https://github.com/apache/incubator-seata/pull/1957)] 获取关键字检查对象改为 SPI 的方法
- [[#1956](https://github.com/apache/incubator-seata/pull/1956)] 找不到有效服务时,提示更加友好
- [[#1958](https://github.com/apache/incubator-seata/pull/1958)] 支持将设计器的 JSON 转换成状态机标准 JSON
- [[#1951](https://github.com/apache/incubator-seata/pull/1951)] 增加使用企业 logo
- [[#1950](https://github.com/apache/incubator-seata/pull/1950)] 优化异步提交时日志的缺失
- [[#1931](https://github.com/apache/incubator-seata/pull/1931)] nacos-config.py 支持 namespace
- [[#1938](https://github.com/apache/incubator-seata/pull/1938)] 优化批量插入和批量更新
- [[#1930](https://github.com/apache/incubator-seata/pull/1930)] 减少 HashMap 初始化大小
- [[#1919](https://github.com/apache/incubator-seata/pull/1919)] 强制代码风格检查
- [[#1918](https://github.com/apache/incubator-seata/pull/1918)] 优化单元测试抛出的异常
- [[#1911](https://github.com/apache/incubator-seata/pull/1911)] 优化部分注释
- [[#1920](https://github.com/apache/incubator-seata/pull/1920)] 使用迭代器来移除过期 Future
- [[#1907](https://github.com/apache/incubator-seata/pull/1907)] 优化 UndoExecutorFactory 获取实例的方式
- [[#1903](https://github.com/apache/incubator-seata/pull/1903)] 增加批量查询分支事务
- [[#1910](https://github.com/apache/incubator-seata/pull/1910)] 优化部分方法缺少@override
- [[#1906](https://github.com/apache/incubator-seata/pull/1906)] 初始化时增加非正常退出日志
- [[#1897](https://github.com/apache/incubator-seata/pull/1897)] 移除 clientTest 单元测试
- [[#1883](https://github.com/apache/incubator-seata/pull/1883)] 优化 SQLRecognizer, UndoExecutor 代码结构
- [[#1890](https://github.com/apache/incubator-seata/pull/1890)] 格式化部分 saga 代码
- [[#1798](https://github.com/apache/incubator-seata/pull/1798)] 提高部分方法 format 效率
- [[#1884](https://github.com/apache/incubator-seata/pull/1884)] 封装关闭资源的方法
- [[#1869](https://github.com/apache/incubator-seata/pull/1869)] 增加当成功时,可以关闭分支汇报参数
- [[#1842](https://github.com/apache/incubator-seata/pull/1842)] 增加部分初始化脚本
- [[#1838](https://github.com/apache/incubator-seata/pull/1838)] 简化配置
- [[#1866](https://github.com/apache/incubator-seata/pull/1866)] 优化 TC 日志输出
- [[#1867](https://github.com/apache/incubator-seata/pull/1867)] 优化 seata-spring-boot-starter
- [[#1817](https://github.com/apache/incubator-seata/pull/1817)] 增加 tm 单元测试
- [[#1823](https://github.com/apache/incubator-seata/pull/1823)] 减少 db 的访问次数
- [[#1835](https://github.com/apache/incubator-seata/pull/1835)] Saga 事务模版增加重新加载事务方法
- [[#1861](https://github.com/apache/incubator-seata/pull/1861)] 优化当主键不存在时日志输出
- [[#1836](https://github.com/apache/incubator-seata/pull/1836)] 修改 IsPersist 属性类型为 Boolean
- [[#1824](https://github.com/apache/incubator-seata/pull/1824)] 移除部分过期的 Jvm11 参数
- [[#1820](https://github.com/apache/incubator-seata/pull/1820)] 修改部分代码风格
- [[#1806](https://github.com/apache/incubator-seata/pull/1806)] 格式化错误日志
- [[#1815](https://github.com/apache/incubator-seata/pull/1815)] 更新 codecov.yml
- [[#1811](https://github.com/apache/incubator-seata/pull/1811)] 适配 codecov 配置
- [[#1799](https://github.com/apache/incubator-seata/pull/1799)] 移除没用的同步锁
- [[#1674](https://github.com/apache/incubator-seata/pull/1674)] 增加 Rm 单元测试覆盖率
- [[#1710](https://github.com/apache/incubator-seata/pull/1710)] NamedThreadFactory 增加计数器
- [[#1790](https://github.com/apache/incubator-seata/pull/1790)] 格式化 Eureka 实例 id
- [[#1760](https://github.com/apache/incubator-seata/pull/1760)] put message to logQueue
- [[#1787](https://github.com/apache/incubator-seata/pull/1787)] 优化 rpc 通信日志可读性
- [[#1786](https://github.com/apache/incubator-seata/pull/1786)] 简化 Eureka 注册实现类代码
- [[#1766](https://github.com/apache/incubator-seata/pull/1766)] 移除无用方法
- [[#1770](https://github.com/apache/incubator-seata/pull/1770)] 优化 String 拼接方式和无用的释放锁方法

  非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

- [slievrly](https://github.com/slievrly)
- [long187](https://github.com/long187)
- [jsbxyyx](https://github.com/jsbxyyx)
- [l81893521](https://github.com/l81893521)
- [helloworlde](https://github.com/helloworlde)
- [xingfudeshi](https://github.com/xingfudeshi)
- [zjinlei](https://github.com/zjinlei)
- [CharmingRabbit](https://github.com/CharmingRabbit)
- [objcoding](https://github.com/objcoding)
- [cmonkey](https://github.com/cmonkey)
- [lzf971107](https://github.com/lzf971107)
- [ggndnn](https://github.com/ggndnn)
- [lightClouds917](https://github.com/lightClouds917)
- [ruqinhu](https://github.com/ruqinhu)
- [yuhuangbin](https://github.com/yuhuangbin)
- [anrror](https://github.com/anrror)
- [funky-eyes](https://github.com/funky-eyes)
- [caohdgege](https://github.com/caohdgege)
- [contextshuffling](https://github.com/contextshuffling)
- [echooymxq](https://github.com/echooymxq)
- [github-ygy](https://github.com/github-ygy)
- [iapplejohn](https://github.com/iapplejohn)
- [jKill](https://github.com/jKill)
- [Justice-love](https://github.com/Justice-love)
- [lovepoem](https://github.com/lovepoem)
- [niaoshuai](https://github.com/niaoshuai)
- [ph3636](https://github.com/ph3636)
- [wangwei-ying](https://github.com/wangwei-ying)
- [whjjay](https://github.com/whjjay)
- [yangfuhai](https://github.com/yangfuhai)
- [zhongfuhua](https://github.com/zhongfuhua)
- [lizwmaster](https://github.com/lizwmaster)

  同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

### 常用链接

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.9.0 (2019-10-16)

[source](https://github.com/apache/incubator-seata/archive/v0.9.0.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v0.9.0/seata-server-0.9.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.9.0

Seata 0.9.0 正式发布。

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

#### feature

- [[#1608](https://github.com/apache/incubator-seata/pull/1608)] 长事务解决方案: Saga 模式（基于状态机实现）
- [[#1625](https://github.com/apache/incubator-seata/pull/1625)] 支持自定义配置和注册中心类型
- [[#1656](https://github.com/apache/incubator-seata/pull/1656)] 支持 spring cloud config 配置中心
- [[#1689](https://github.com/apache/incubator-seata/pull/1689)] 支持 -e 启动参数，用于指定环境名称
- [[#1739](https://github.com/apache/incubator-seata/pull/1739)] 支持 TM commit 或 rollback 失败时的重试

#### bugfix

- [[#1605](https://github.com/apache/incubator-seata/pull/1605)] 修复对象锁和全局锁可能造成的死锁和优化锁的粒度
- [[#1685](https://github.com/apache/incubator-seata/pull/1685)] 修复 db 存储类异常被忽略的问题
- [[#1691](https://github.com/apache/incubator-seata/pull/1691)] 修复 DruidDataSourceWrapper 反射问题
- [[#1699](https://github.com/apache/incubator-seata/pull/1699)] 修复 mysql 和 oracle 中 'in' 和 'between' 在 where 条件的支持
- [[#1713](https://github.com/apache/incubator-seata/pull/1713)] 修复 LockManagerTest.concurrentUseAbilityTest 中的测试条件
- [[#1720](https://github.com/apache/incubator-seata/pull/1720)] 修复了不能获取 oracle tableMeta 问题
- [[#1729](https://github.com/apache/incubator-seata/pull/1729)] 修复 oracle 的批量获取问题
- [[#1735](https://github.com/apache/incubator-seata/pull/1735)] 修复当 TM commit 或 rollback 出现网络异常无法清除 xid 的问题
- [[#1749](https://github.com/apache/incubator-seata/pull/1749)] 修复无法获取 oracle tableMeta cache 问题
- [[#1751](https://github.com/apache/incubator-seata/pull/1751)] 修复文件存储模式下由于 hash 冲突导致的锁无法释放问题
- [[#1761](https://github.com/apache/incubator-seata/pull/1761)] 修复 oracle 在回滚时 Blob 或 Clob null 值回滚失败问题
- [[#1759](https://github.com/apache/incubator-seata/pull/1759)] 修复 saga 模式下 service method 不支持接口类型参数问题
- [[#1401](https://github.com/apache/incubator-seata/pull/1401)] 修复 RM 启动时第一次注册 resource 为 null 的问题

#### optimize

- [[#1701](https://github.com/apache/incubator-seata/pull/1701)] 移除无用的 imports
- [[#1705](https://github.com/apache/incubator-seata/pull/1705)] 优化了一些基于 java5 的语法结构
- [[#1706](https://github.com/apache/incubator-seata/pull/1706)] 将内部类声明为 static
- [[#1707](https://github.com/apache/incubator-seata/pull/1707)] 使用 StandardCharsets.UTF_8 代替 utf-8 编码
- [[#1712](https://github.com/apache/incubator-seata/pull/1712)] 抽象 undologManager 的通用方法
- [[#1722](https://github.com/apache/incubator-seata/pull/1722)] 简化代码提高代码的可读性
- [[#1726](https://github.com/apache/incubator-seata/pull/1726)] 格式化日志输出
- [[#1738](https://github.com/apache/incubator-seata/pull/1738)] 增加 seata-server jvm 参数
- [[#1743](https://github.com/apache/incubator-seata/pull/1743)] 提高批量打印日志的性能
- [[#1747](https://github.com/apache/incubator-seata/pull/1747)] 使用基本类型避免数据装箱
- [[#1750](https://github.com/apache/incubator-seata/pull/1750)] 抽象 tableMetaCache 方法
- [[#1755](https://github.com/apache/incubator-seata/pull/1755)] 提高 seata-common 模块的单测覆盖率
- [[#1756](https://github.com/apache/incubator-seata/pull/1756)] 升级 jackson 版本防止潜在的安全漏洞
- [[#1657](https://github.com/apache/incubator-seata/pull/1657)] 优化文件存储模式下文件 rolling 时占用较大 direct buffer 的问题

  非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

- [slievrly](https://github.com/slievrly)
- [long187](https://github.com/long187)
- [ggndnn](https://github.com/ggndnn)
- [xingfudeshi](https://github.com/xingfudeshi)
- [BeiKeJieDeLiuLangMao](https://github.com/BeiKeJieDeLiuLangMao)
- [zjinlei](https://github.com/zjinlei)
- [cmonkey](https://github.com/cmonkey)
- [jsbxyyx](https://github.com/jsbxyyx)
- [zaqweb](https://github.com/zaqweb)
- [tjnettech](https://github.com/tjnettech)
- [l81893521](https://github.com/l81893521)
- [abel533](https://github.com/abel533)
- [suhli](https://github.com/suhli)
- [github-ygy](https://github.com/github-ygy)
- [worstenemy](https://github.com/worstenemy)
- [caioguedes](https://github.com/caioguedes)

  同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

#### 常用链接

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.8.1 (2019-09-18)

[source](https://github.com/apache/incubator-seata/archive/v0.8.1.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v0.8.1/seata-server-0.8.1.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.8.1

Seata 0.8.1 正式发布。

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

#### feature

- [[#1598](https://github.com/apache/incubator-seata/pull/1598)] 支持配置文件使用绝对路径
- [[#1617](https://github.com/apache/incubator-seata/pull/1617)] 支持配置文件名称（registry.conf） 可配置
- [[#1418](https://github.com/apache/incubator-seata/pull/1418)] 支持 undo_log 数据的 kryo 序列化
- [[#1489](https://github.com/apache/incubator-seata/pull/1489)] 支持 protobuf 生成插件
- [[#1437](https://github.com/apache/incubator-seata/pull/1437)] 支持通信协议的 kryo 编解码
- [[#1478](https://github.com/apache/incubator-seata/pull/1478)] 支持 db mock
- [[#1512](https://github.com/apache/incubator-seata/pull/1512)] 扩展支持 mysql 和 oracle 的多种批量插入语法
- [[#1496](https://github.com/apache/incubator-seata/pull/1496)] 支持 DataSource 的自动代理

#### bugfix

- [[#1646](https://github.com/apache/incubator-seata/pull/1646)] 修复 file 存储模式的 selectForUpdate lockQuery exception
- [[#1572](https://github.com/apache/incubator-seata/pull/1572)] 修复在 oracle 小写表名时获取 tablemeta 失败问题
- [[#1663](https://github.com/apache/incubator-seata/pull/1663)] 修复表名为关键字获取 tablemeta 失败问题
- [[#1666](https://github.com/apache/incubator-seata/pull/1666)] 修复数据库连接使用后的 autocommit 问题
- [[#1643](https://github.com/apache/incubator-seata/pull/1643)] 修复 java.sql.Blob, java.sql.Clob 类型的序列化
- [[#1628](https://github.com/apache/incubator-seata/pull/1628)] 修复 oracle 支持 ROWNUM 查询
- [[#1552](https://github.com/apache/incubator-seata/pull/1552)] 修复当分支太大时的 BufferOverflow 问题
- [[#1609](https://github.com/apache/incubator-seata/pull/1609)] 修复 oracle 关键字的线程安全问题
- [[#1599](https://github.com/apache/incubator-seata/pull/1599)] 修复 mysql 关键字的线程安全问题
- [[#1607](https://github.com/apache/incubator-seata/pull/1607)] 修复当 druid 版本小于 1.1.3 时 NoSuchMethodError
- [[#1581](https://github.com/apache/incubator-seata/pull/1581)] 修复文件存储模式下 GlobalSession 长度计算不准确问题
- [[#1594](https://github.com/apache/incubator-seata/pull/1594)] 修复 nacos 配置中心的默认 namespace
- [[#1550](https://github.com/apache/incubator-seata/pull/1550)] 修复计算 BranchSession 丢失 xidBytes 长度问题
- [[#1558](https://github.com/apache/incubator-seata/pull/1558)] 修复 rpcMessage 的 body 字段 NPE 问题
- [[#1505](https://github.com/apache/incubator-seata/pull/1505)] 修复绑定公网注册地址 server 监听失败问题
- [[#1539](https://github.com/apache/incubator-seata/pull/1539)] 修复 nacos namespace 配置项不生效
- [[#1537](https://github.com/apache/incubator-seata/pull/1537)] 修复 nacos-config.txt 缺失 store.db.driver-class-name 配置项
- [[#1522](https://github.com/apache/incubator-seata/pull/1522)] 修复 ProtocolV1CodecTest 中 testAll 运行中可能出现测试失败问题
- [[#1525](https://github.com/apache/incubator-seata/pull/1525)] 修复当 getAfterImage 获取失败时，事务自动被提交问题
- [[#1518](https://github.com/apache/incubator-seata/pull/1518)] 修复 EnhancedServiceLoader SPI 顺序加载第三方依赖失败问题
- [[#1514](https://github.com/apache/incubator-seata/pull/1514)] 修复当缺少序列化依赖无法生成 undolog 并 report true 问题
- [[#1445](https://github.com/apache/incubator-seata/pull/1445)] 修复 DefaultCoordinatorMetricsTest 单测失败问题
- [[#1481](https://github.com/apache/incubator-seata/pull/1481)] 修复 TableMetaCache 在多数据源刷新失败问题

#### optimize

- [[#1629](https://github.com/apache/incubator-seata/pull/1629)] 优化 etcd3 中 watcher 订阅的效率
- [[#1661](https://github.com/apache/incubator-seata/pull/1661)] 优化 global_table 中 transaction_name 长度问题
- [[#1633](https://github.com/apache/incubator-seata/pull/1633)] 优化分支事务获取全局锁失败重复 report（false）问题
- [[#1654](https://github.com/apache/incubator-seata/pull/1654)] 优化 slf4j 的错误使用
- [[#1593](https://github.com/apache/incubator-seata/pull/1593)] 优化和规范化 server 的日志
- [[#1648](https://github.com/apache/incubator-seata/pull/1648)] 优化 transaction_name 在建表时的长度
- [[#1576](https://github.com/apache/incubator-seata/pull/1576)] 消除重排序对 session 异步提交的影响
- [[#1618](https://github.com/apache/incubator-seata/pull/1618)] 优化 undolog manager 和 修复 oracle undolog 的删除
- [[#1469](https://github.com/apache/incubator-seata/pull/1469)] 提供不释放数据库锁情况下等待全局锁的释放以减少锁冲突
- [[#1619](https://github.com/apache/incubator-seata/pull/1416)] 使用 StringBuffer 代替 StringBuilder
- [[#1580](https://github.com/apache/incubator-seata/pull/1580)] 优化 LockKeyConflictException 和更改 register 方法
- [[#1574](https://github.com/apache/incubator-seata/pull/1574)] 优化 db 存储模式下 globalCommit 一次性删除全局锁
- [[#1601](https://github.com/apache/incubator-seata/pull/1601)] 优化 typo
- [[#1602](https://github.com/apache/incubator-seata/pull/1602)] 升级 fastjson 版本至 1.2.60 应对安全漏洞
- [[#1583](https://github.com/apache/incubator-seata/pull/1583)] 优化 oracle 主键的获取
- [[#1575](https://github.com/apache/incubator-seata/pull/1575)] 增加 RegisterTMRequest 的单元测试
- [[#1559](https://github.com/apache/incubator-seata/pull/1559)] 启动时延迟删除过期 undo_log
- [[#1547](https://github.com/apache/incubator-seata/pull/1547)] 删除 TableRecords 的 jackson 注解
- [[#1542](https://github.com/apache/incubator-seata/pull/1542)] 优化 AbstractSessionManager 日志
- [[#1535](https://github.com/apache/incubator-seata/pull/1535)] 去除 H2 和 pgsql 获取主键代码，修复 resultset 关闭问题
- [[#1541](https://github.com/apache/incubator-seata/pull/1541)] 代码清理
- [[#1544](https://github.com/apache/incubator-seata/pull/1544)] 去除中文注释
- [[#1533](https://github.com/apache/incubator-seata/pull/1533)] 重构多环境配置的代码逻辑
- [[#1493](https://github.com/apache/incubator-seata/pull/1493)] 增加 tableMeta 检测任务开关
- [[#1530](https://github.com/apache/incubator-seata/pull/1530)] 优化当数据表无索引时抛出显式异常
- [[#1444](https://github.com/apache/incubator-seata/pull/1444)] 简化 map 操作
- [[#1497](https://github.com/apache/incubator-seata/pull/1497)] 增加 seata-all 依赖
- [[#1490](https://github.com/apache/incubator-seata/pull/1490)] 移除不必要代码

  非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

- [slievrly](https://github.com/slievrly)
- [BeiKeJieDeLiuLangMao](https://github.com/BeiKeJieDeLiuLangMao)
- [jsbxyyx](https://github.com/jsbxyyx)
- [ldcsaa](https://github.com/ldcsaa)
- [zjinlei](https://github.com/zjinlei)
- [l81893521](https://github.com/l81893521)
- [ggndnn](https://github.com/ggndnn)
- [github-ygy](https://github.com/github-ygy)
- [chenxi-null](https://github.com/chenxi-null)
- [tq02ksu](https://github.com/tq02ksu)
- [AjaxXu](https://github.com/AjaxXu)
- [finalcola](https://github.com/finalcola)
- [lovepoem](https://github.com/lovepoem)
- [cmonkey](https://github.com/cmonkey)
- [xingfudeshi](https://github.com/xingfudeshi)
- [andyqian](https://github.com/andyqian)
- [tswstarplanet](https://github.com/tswstarplanet)
- [zhengyangyong](https://github.com/zhengyangyong)

  同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

#### 常用链接

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.8.0 (2019-08-16)

- [source](https://github.com/apache/incubator-seata/archive/v0.8.0.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.8.0/seata-server-0.8.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

## Seata 0.8.0

Seata 0.8.0 正式发布。

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

### feature

- [[#902](https://github.com/apache/incubator-seata/pull/902)] 支持 oracle 数据库的 AT 模式
- [[#1447](https://github.com/apache/incubator-seata/pull/1447)] 支持 oracle 数据库的批量操作
- [[#1392](https://github.com/apache/incubator-seata/pull/1392)] 支持 undo_log 表名可配置
- [[#1353](https://github.com/apache/incubator-seata/pull/1353)] 支持 mysql 数据库的批量更新和删除操作
- [[#1379](https://github.com/apache/incubator-seata/pull/1379)] 配置中心所有配置项支持-D 参数传入
- [[#1365](https://github.com/apache/incubator-seata/pull/1365)] 支持定时更新 mysql 的表结构，可不停机更改表结构
- [[#1371](https://github.com/apache/incubator-seata/pull/1371)] 支持 mysql preparedStatement 自增批量插入
- [[#1337](https://github.com/apache/incubator-seata/pull/1337)] 支持 mysql preparedStatement 非自增批量插入
- [[#1235](https://github.com/apache/incubator-seata/pull/1453)] 支持兜底定时删除 undolog 使用 protobuf codec
- [[#1235](https://github.com/apache/incubator-seata/pull/1235)] 支持兜底定时删除 undolog 使用 seata codec
- [[#1323](https://github.com/apache/incubator-seata/pull/1323)] 支持 db driver class 可配置

### bugfix

- [[#1456](https://github.com/apache/incubator-seata/pull/1456)] 修复 xid 在 db 模式可重复的问题
- [[#1454](https://github.com/apache/incubator-seata/pull/1454)] 修复 DateCompareUtils 不能比对 byte array 的问题
- [[#1452](https://github.com/apache/incubator-seata/pull/1452)] 修复 select for update 重试获取到脏数据的问题
- [[#1443](https://github.com/apache/incubator-seata/pull/1443)] 修复 timestamp 反序列化丢失纳秒精度的问题
- [[#1374](https://github.com/apache/incubator-seata/pull/1374)] 修复 store.mode 启动参数与获取锁配置不一致的问题
- [[#1409](https://github.com/apache/incubator-seata/pull/1409)] 修复 map.toString() 错误
- [[#1344](https://github.com/apache/incubator-seata/pull/1344)] 修复 ByteBuffer 分配固定长度, 导致 BufferOverflowException 的问题
- [[#1419](https://github.com/apache/incubator-seata/pull/1419)] 修复数据库连接默认 autocommit=false 无法删除 undolog 的问题
- [[#1370](https://github.com/apache/incubator-seata/pull/1370)] 修复 begin 事务失败释放 channel 和继续进行事务的问题
- [[#1396](https://github.com/apache/incubator-seata/pull/1396)] 修复 Nacos config SPI 加载 class not found 的问题
- [[#1395](https://github.com/apache/incubator-seata/pull/1395)] 修复获取 channel 检测逻辑
- [[#1385](https://github.com/apache/incubator-seata/pull/1385)] 在 rollback 重试时修复获取 SessionManager 错误的问题
- [[#1378](https://github.com/apache/incubator-seata/pull/1378)] 修复 eureka 注册中心 clusterAddressMap 在实例下线列表不清除的问题
- [[#1332](https://github.com/apache/incubator-seata/pull/1332)] 修复 nacos 配置初始化脚本初始化含 ’=‘ 配置值错误的问题
- [[#1341](https://github.com/apache/incubator-seata/pull/1341)] 修复同一个本地事务中对同一数据反复修改回滚错误的问题
- [[#1339](https://github.com/apache/incubator-seata/pull/1339)] 修复数据镜像是 EmptyTableRecords, 回滚失败的问题
- [[#1314](https://github.com/apache/incubator-seata/pull/1314)] 修复不指定 db 模式启动参数，配置文件不生效的问题
- [[#1342](https://github.com/apache/incubator-seata/pull/1342)] 修复 ByteBuffer 长度分配错误
- [[#1333](https://github.com/apache/incubator-seata/pull/1333)] 修复 netty 内存泄露问题
- [[#1338](https://github.com/apache/incubator-seata/pull/1338)] 修复 db 模式下可重入锁后不再获取其他所的问题
- [[#1334](https://github.com/apache/incubator-seata/pull/1334)] 修复使用 protobuf 时 tcc 模式下 lock key NPE 的问题
- [[#1313](https://github.com/apache/incubator-seata/pull/1313)] 修复 DefaultFailureHandler 检查 status NPE 的问题

### optimize

- [[#1474](https://github.com/apache/incubator-seata/pull/1474)] 优化数据镜像比对日志
- [[#1446](https://github.com/apache/incubator-seata/pull/1446)] 优化了 server 的 schedule tasks
- [[#1448](https://github.com/apache/incubator-seata/pull/1448)] 重构了 executor 类删除了多余的重复代码
- [[#1408](https://github.com/apache/incubator-seata/pull/1408)] 更改 TmRpcClientTest 类中的 ChannelFactory package 路径
- [[#1432](https://github.com/apache/incubator-seata/pull/1432)] 实现了作为 hash key 类型对象的 equals 和 hashcode 方法
- [[#1429](https://github.com/apache/incubator-seata/pull/1429)] 删除了无用的 imports
- [[#1426](https://github.com/apache/incubator-seata/pull/1426)] 修复语法错误
- [[#1425](https://github.com/apache/incubator-seata/pull/1425)] 修复 typo
- [[#1356](https://github.com/apache/incubator-seata/pull/1356)] 优化 sql 拼接语法
- [[#1416](https://github.com/apache/incubator-seata/pull/1416)] 优化 javadoc 和注释
- [[#1417](https://github.com/apache/incubator-seata/pull/1417)] 梳理优化了 oracle 的关键字
- [[#1404](https://github.com/apache/incubator-seata/pull/1404)] 优化了 BranchStatus 的注释
- [[#1414](https://github.com/apache/incubator-seata/pull/1414)] 梳理优化了 mysql 的关键字
- [[#1407](https://github.com/apache/incubator-seata/pull/1407)] 禁用了不稳定的单元测试
- [[#1398](https://github.com/apache/incubator-seata/pull/1398)] 优化了 eureka 注册中心 serviceUrl 默认值使用默认端口
- [[#1364](https://github.com/apache/incubator-seata/pull/1364)] 优化 table 列字段名称定义为常量
- [[#1389](https://github.com/apache/incubator-seata/pull/1389)] 增加 oracle 支持提示信息
- [[#1375](https://github.com/apache/incubator-seata/pull/1375)] 增加 compareRows 比对失败日志
- [[#1358](https://github.com/apache/incubator-seata/pull/1358)] 运行完成单测用例时清理临时文件
- [[#1355](https://github.com/apache/incubator-seata/pull/1355)] 增加 rpc protocol 的单测
- [[#1357](https://github.com/apache/incubator-seata/pull/1357)] 优化 Consul&Etcd 配置中心代码
- [[#1345](https://github.com/apache/incubator-seata/pull/1345)] 代码清理和调整日志级别
- [[#1329](https://github.com/apache/incubator-seata/pull/1329)] 增加 `STORE_FILE_DIR` 配置项的默认值

  非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告.

- [slievrly](https://github.com/slievrly)
- [Justice-love](https://github.com/Justice-love)
- [l81893521](https://github.com/l81893521)
- [ggndnn](https://github.com/ggndnn)
- [zjinlei](https://github.com/zjinlei)
- [andyqian](https://github.com/andyqian)
- [cmonkey](https://github.com/cmonkey)
- [wangjin](https://github.com/wangjin)
- [Arlmls](https://github.com/Arlmls)
- [lukairui](https://github.com/lukairui)
- [kongwang](https://github.com/kongwang)
- [lightClouds917](https://github.com/lightClouds917)
- [xingfudeshi](https://github.com/xingfudeshi)
- [alicexiaoshi](https://github.com/alicexiaoshi)
- [itxingqing](https://github.com/itxingqing)
- [wanghuizuo](https://github.com/wanghuizuo)
- [15168326318](https://github.com/15168326318)
- [github-ygy](https://github.com/github-ygy)
- [ujjboy](https://github.com/ujjboy)
- [leizhiyuan](https://github.com/leizhiyuan)
- [vikenlove](https://github.com/vikenlove)

  同时，我们收到了社区反馈的很多有价值的 issue 和建议，非常感谢大家。

### 常用链接

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.7.1 (2019-07-15)

- [source](https://github.com/apache/incubator-seata/archive/v0.7.1.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.7.1/seata-server-0.7.1.zip)

<details>
  <summary><mark>Release notes</mark></summary>

Seata 0.7.1 发布

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

0.7.1 版本是针对 0.7.0 版本问题的紧急修复，本次更新主要内容如下：

## Bug 修复及优化

- [[#1297](https://github.com/apache/incubator-seata/pull/1297)] 兼容 seata-spring 独立依赖用法，对 seata-spring 添加了 seata-codec-all 依赖
- [[#1305](https://github.com/apache/incubator-seata/pull/1305)] 修复 GlobalTransactionScanner 切面优先级导致的 Spring Cloud 的 AutoConfiguration 无法初始化问题
- 修复了 0.7.0 因 mvn 插件过低导致的版本号无替换，无法从中央仓库拉取依赖的问题。

## 相关链接

- Seata: https://github.com/apache/incubator-seata
- Seata-Samples: https://github.com/apache/incubator-seata-samples
- Release：https://github.com/apache/incubator-seata/releases

</details>

### 0.7.0 (2019-07-12)

- [source](https://github.com/apache/incubator-seata/archive/v0.7.0.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.7.0/seata-server-0.7.0.zip)

<details>
    <summary><mark>Release notes</mark></summary>


Seata 0.7.0 发布

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

本次更新主要内容如下：

## 功能特性

- [[#1276](https://github.com/apache/incubator-seata/pull/1276)] 新的 RPC 通信协议
- [[#1266](https://github.com/apache/incubator-seata/pull/1266)] metrics 可配置 ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1236](https://github.com/apache/incubator-seata/pull/1236)] tc server 支持 metrics
- [[#1214](https://github.com/apache/incubator-seata/pull/1214)] 添加 `shutdown.wait` ([1212](https://github.com/apache/incubator-seata/issues/1212))
- [[#1206](https://github.com/apache/incubator-seata/pull/1206)] 可以设置默认值
- [[#1174](https://github.com/apache/incubator-seata/pull/1174)] 添加 nacos 初始化脚本 ([1172](https://github.com/apache/incubator-seata/issues/1172))
- [[#1145](https://github.com/apache/incubator-seata/pull/1145)] 修复 lock 模式和存储模式的关联
- [[#1125](https://github.com/apache/incubator-seata/pull/1125)] 支持 protostuff 作为 UndoLogParser 的序列化
- [[#1007](https://github.com/apache/incubator-seata/pull/1007)] 支持 Protobuf 作为序列化 ([97](https://github.com/apache/incubator-seata/issues/97))

## Bug 修复及优化

- [[#1286](https://github.com/apache/incubator-seata/pull/1286)] 排除 log 依赖 ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1278](https://github.com/apache/incubator-seata/pull/1278)] 传递 txId 到 TCC 拦截器
- [[#1274](https://github.com/apache/incubator-seata/pull/1274)] 优化 SQL join
- [[#1271](https://github.com/apache/incubator-seata/pull/1271)] @GlobalLock 修复报错 ([97](https://github.com/apache/incubator-seata/issues/97), [1224](https://github.com/apache/incubator-seata/issues/1224))
- [[#1270](https://github.com/apache/incubator-seata/pull/1270)] 打印异常信息
- [[#1269](https://github.com/apache/incubator-seata/pull/1269)] 修复 TMClinet 重连异常
- [[#1265](https://github.com/apache/incubator-seata/pull/1265)] 非全局事物，添加 addBatch
- [[#1264](https://github.com/apache/incubator-seata/pull/1264)] 更新 ci 配置 ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1263](https://github.com/apache/incubator-seata/pull/1263)] 添加贡献文档 ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1262](https://github.com/apache/incubator-seata/pull/1262)] 修复 target class 的寻找问题 ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1261](https://github.com/apache/incubator-seata/pull/1261)] 添加异常信息，当获取自增长的 key 时 (#1259) ([97](https://github.com/apache/incubator-seata/issues/97), [1259](https://github.com/apache/incubator-seata/issues/1259))
- [[#1258](https://github.com/apache/incubator-seata/pull/1258)] 优化 metrics 模块配置
- [[#1250](https://github.com/apache/incubator-seata/pull/1250)] 修复 protobuf 的配置 ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1245](https://github.com/apache/incubator-seata/pull/1245)] 重构 metrics
- [[#1242](https://github.com/apache/incubator-seata/pull/1242)] sql 优化
- [[#1239](https://github.com/apache/incubator-seata/pull/1239)] 修复 CME 在 ZK 服务发现的问题. ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1237](https://github.com/apache/incubator-seata/pull/1237)] 修复分支 session 可能的 NPE ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1232](https://github.com/apache/incubator-seata/pull/1232)] 添加单测 io.seata.common.util CompressUtil, DurationUtil, ReflectionUtil
- [[#1230](https://github.com/apache/incubator-seata/pull/1230)] 优化全局 🍜 扫描器 #1227 ([97](https://github.com/apache/incubator-seata/issues/97), [1227](https://github.com/apache/incubator-seata/issues/1227))
- [[#1229](https://github.com/apache/incubator-seata/pull/1229)] 修复拼写错误 ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1225](https://github.com/apache/incubator-seata/pull/1225)] 优化 seata 配置环境信息. ([97](https://github.com/apache/incubator-seata/issues/97), [1209](https://github.com/apache/incubator-seata/issues/1209))
- [[#1222](https://github.com/apache/incubator-seata/pull/1222)] 修复 refresh cluster 的 bug ([1160](https://github.com/apache/incubator-seata/issues/1160))
- [[#1221](https://github.com/apache/incubator-seata/pull/1221)] 修复 sql 的字段和数据库不一致的问题 ([1217](https://github.com/apache/incubator-seata/issues/1217))
- [[#1218](https://github.com/apache/incubator-seata/pull/1218)] containsPK 忽略大小写 ([1217](https://github.com/apache/incubator-seata/issues/1217))
- [[#1210](https://github.com/apache/incubator-seata/pull/1210)] 优化 arrayList 的并发问题
- [[#1207](https://github.com/apache/incubator-seata/pull/1207)] @Override 注解强制
- [[#1205](https://github.com/apache/incubator-seata/pull/1205)] 移除无用代码
- [[#1202](https://github.com/apache/incubator-seata/pull/1202)] 输出 branchRollback 失败日志 ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1200](https://github.com/apache/incubator-seata/pull/1200)] 修复 DefaultCoreTest.branchRegisterTest 测试 ([1199](https://github.com/apache/incubator-seata/issues/1199))
- [[#1198](https://github.com/apache/incubator-seata/pull/1198)] 检查三方依赖的 license ([1197](https://github.com/apache/incubator-seata/issues/1197))
- [[#1195](https://github.com/apache/incubator-seata/pull/1195)] TCC prepare 阶段晴空 上下文
- [[#1193](https://github.com/apache/incubator-seata/pull/1193)] 通过 storemode 关联 lockmode
- [[#1190](https://github.com/apache/incubator-seata/pull/1190)] 代码优化 ([97](https://github.com/apache/incubator-seata/issues/97), [540](https://github.com/apache/incubator-seata/issues/540))
- [[#1179](https://github.com/apache/incubator-seata/pull/1179)] jackson 内容存储
- [[#1177](https://github.com/apache/incubator-seata/pull/1177)] 修复 TransactionException 异常未能释放锁的问题. ([97](https://github.com/apache/incubator-seata/issues/97), [1154](https://github.com/apache/incubator-seata/issues/1154))
- [[#1169](https://github.com/apache/incubator-seata/pull/1169)] 禁止重复的 listener ([1126](https://github.com/apache/incubator-seata/issues/1126))
- [[#1165](https://github.com/apache/incubator-seata/pull/1165)] 修复 INSERT_UNDO_LOG_SQL 缺失的占位符 ([1164](https://github.com/apache/incubator-seata/issues/1164))
- [[#1162](https://github.com/apache/incubator-seata/pull/1162)] destroy() 时 重置 initialized flag 和 instance [##1105 ([983](https://github.com/apache/incubator-seata/issues/983), [97](https://github.com/apache/incubator-seata/issues/97))
- [[#1159](https://github.com/apache/incubator-seata/pull/1159)] 修复 AT 模式 resourceId(row_key) 过长的问题 ([97](https://github.com/apache/incubator-seata/issues/97), [1158](https://github.com/apache/incubator-seata/issues/1158))
- [[#1150](https://github.com/apache/incubator-seata/pull/1150)] README.md 中更新 seata 的版本 ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1148](https://github.com/apache/incubator-seata/pull/1148)] buffer 溢出 bug 修复
- [[#1146](https://github.com/apache/incubator-seata/pull/1146)] 修改包名称 ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1105](https://github.com/apache/incubator-seata/pull/1105)] 重构 TmRpcClient & RmClient. ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1075](https://github.com/apache/incubator-seata/pull/1075)] 多环境隔离
- [[#768](https://github.com/apache/incubator-seata/pull/768)] #751 添加事件机制

## 相关链接

- Seata: https://github.com/apache/incubator-seata
- Seata-Samples: https://github.com/apache/incubator-seata-samples
- Release：https://github.com/apache/incubator-seata/releases

</details>

### 0.6.1 (2019-05-31)

- [source](https://github.com/apache/incubator-seata/archive/v0.6.1.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.6.1/seata-server-0.6.1.zip)

<details>
    <summary><mark>Release notes</mark></summary>

Seata 0.6.1 发布

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

本次更新主要内容如下：

## 功能特性

- [[#1119](https://github.com/apache/incubator-seata/pull/1119)] 支持 weibo/motan 上下文透传
- [[#1075](https://github.com/apache/incubator-seata/pull/1075)] 支持多环境配置隔离

## Bug 修复及优化

- [[#1099](https://github.com/apache/incubator-seata/pull/1099)] 将 UndoLogParser 修改成 SPI 形式
- [[#1113](https://github.com/apache/incubator-seata/pull/1113)] 优化代码格式
- [[#1087](https://github.com/apache/incubator-seata/pull/1087)] 去掉无用的字节复制
- [[#1090](https://github.com/apache/incubator-seata/pull/1090)] 修改 UndoLogParser 的方法的返回格式，便于后续扩展
- [[#1120](https://github.com/apache/incubator-seata/pull/1120)] 修复分支事务提交和回滚时 xid 使用错误的问题
- [[#1135](https://github.com/apache/incubator-seata/pull/1135)] 升级 zookeeper 以修复安全漏洞
- [[#1138](https://github.com/apache/incubator-seata/pull/1138)] 修复 windows 下 seata-server.bat classpath 过长的问题
- [[#1117](https://github.com/apache/incubator-seata/pull/1117)] 修复脏写校验时时间类型数据校验失败问题
- [[#1115](https://github.com/apache/incubator-seata/pull/1115)] 配置 seata-all 和 seata-bom 打包发布环境

## 相关链接

- Seata: https://github.com/apache/incubator-seata
- Seata-Samples: https://github.com/apache/incubator-seata-samples
- Release：https://github.com/apache/incubator-seata/releases

</details>

### 0.6.0 (2019-05-24)

- [source](https://github.com/apache/incubator-seata/archive/v0.6.0.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.6.0/seata-server-0.6.0.zip)

<details>
    <summary><mark>Release notes</mark></summary>

Seata 0.6.0 发布

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

本次更新主要内容如下：

## 功能特性

- [[#942](https://github.com/apache/incubator-seata/pull/942)] 服务端使用数据库存储事务日志，支持服务端集群部署
- [[#1014](https://github.com/apache/incubator-seata/pull/1014)] 支持 etcd3 作为配置中心
- [[#1060](https://github.com/apache/incubator-seata/pull/1060)] 添加事务回滚时脏写校验

## Bug 修复及优化

- [[#1064](https://github.com/apache/incubator-seata/pull/1064)] 修复 xid 和 branchId 长度错误
- [[#1074](https://github.com/apache/incubator-seata/pull/1074)] 修复一些拼写错误，并用 lambda 替换匿名类
- [[#824](https://github.com/apache/incubator-seata/pull/824)] 添加事务恢复重试超时时间限制
- [[#1082](https://github.com/apache/incubator-seata/pull/1082)] 添加配置中心单实例缓存
- [[#1084](https://github.com/apache/incubator-seata/pull/1084)] 重构字符集和 blob 工具类
- [[#1080](https://github.com/apache/incubator-seata/pull/1080)] 升级 fastjson 和 nacos-client 版本

## 相关链接

- Seata: https://github.com/apache/incubator-seata
- Seata-Samples: https://github.com/apache/incubator-seata-samples
- Release：https://github.com/apache/incubator-seata/releases

</details>

### 0.5.2 (2019-05-17)

- [source](https://github.com/apache/incubator-seata/archive/v0.5.2.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.5.2/seata-server-0.5.2.zip)

<details>
    <summary><mark>Release notes</mark></summary>

Seata 0.5.2 发布

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

本次更新主要内容如下：

## 功能特性

- [[#988](https://github.com/apache/incubator-seata/pull/988)] 增加配置中心 Consul 支持
- [[#1043](https://github.com/apache/incubator-seata/pull/1043)] 增加 sofa-rpc 支持

## Bug 修复及优化

- [[#987](https://github.com/apache/incubator-seata/pull/987)] 优化同事务内并发使用 reentrantLock 代替 spinlock
- [[#943](https://github.com/apache/incubator-seata/pull/943)] 修复无相应文件配置项时取配置等待超时问题
- [[#965](https://github.com/apache/incubator-seata/pull/965)] 修复 PreparedStatement 时 where 语句中 in、between 报错问题
- [[#929](https://github.com/apache/incubator-seata/pull/929)] 优化 GlobalSession 第一次取锁等待问题
- [[#967](https://github.com/apache/incubator-seata/pull/967)] 优化部分日志描述
- [[#970](https://github.com/apache/incubator-seata/pull/970)] 修复无法读取 flush-disk-mode 配置项问题
- [[#916](https://github.com/apache/incubator-seata/pull/916)] 优化解码时 readable index
- [[#979](https://github.com/apache/incubator-seata/pull/979)] 优化 copyright
- [[#981](https://github.com/apache/incubator-seata/pull/981)] 优化 pom 依赖，使用 caffine 代替 guava cache，junit 升级至 junit5，使用 junit5 改造原有 testng 单元测试
- [[#991](https://github.com/apache/incubator-seata/pull/991)] 优化 core 模块的文件头 import
- [[#996](https://github.com/apache/incubator-seata/pull/996)] 修复 maven-surefire-plugin 在 mac 环境下编译错误问题
- [[#994](https://github.com/apache/incubator-seata/pull/994)] 修复 ByteBuffer 多次 flip 问题
- [[#999](https://github.com/apache/incubator-seata/pull/999)] 更改社区邮件订阅地址
- [[#861](https://github.com/apache/incubator-seata/pull/861)] 优化 FailureHandler 定时获取重试的事务结果，并将成功结果打印
- [[#802](https://github.com/apache/incubator-seata/pull/802)] 优化 GlobalTransactionalInterceptor 中 lambda 代码风格
- [[#1026](https://github.com/apache/incubator-seata/pull/1026)] 修复错误排除 data\*代码文件问题，增加本地事务文件排除路径
- [[#1024](https://github.com/apache/incubator-seata/pull/1024)] 修复 Consul 模块 SPI 配置文件路径错误问题
- [[#1023](https://github.com/apache/incubator-seata/pull/1023)] 增加 seata-all 客户端依赖 jar 包
- [[#1029](https://github.com/apache/incubator-seata/pull/1029)] 修复回滚中客户端宕机重启回滚时无 channel 导致的延迟回滚问题
- [[#1027](https://github.com/apache/incubator-seata/pull/1027)] 修复 release-seata 无法生成压缩包问题
- [[#1033](https://github.com/apache/incubator-seata/pull/1033)] 修复 createDependencyReducedPom 生成多余 xml 问题
- [[#1035](https://github.com/apache/incubator-seata/pull/1035)] 修复 TCC 模式中 branchCommit/branchRollback，branchId 为 null 问题
- [[#1040](https://github.com/apache/incubator-seata/pull/1040)] 重构 exceptionHandleTemplate,修复 GlobalRollback 分支异常时无法返回状态问题
- [[#1036](https://github.com/apache/incubator-seata/pull/1036)] 替换中文注释为相应英文注释
- [[#1051](https://github.com/apache/incubator-seata/pull/1051)] 优化回滚时校验数据变化，若无变化停止回滚
- [[#1017](https://github.com/apache/incubator-seata/pull/1017)] 优化 mysql undo executor 构造 undo sql 逻辑处理
- [[#1063](https://github.com/apache/incubator-seata/pull/1063)] 修复 server 重启后事务恢复后，可能造成新事务 id 冲突失败问题

## 相关链接

- Seata: https://github.com/apache/incubator-seata
- Seata-Samples: https://github.com/apache/incubator-seata-samples
- Release：https://github.com/apache/incubator-seata/releases

</details>

### 0.5.1 (2019-04-30)

- [source](https://github.com/apache/incubator-seata/archive/v0.5.1.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.5.1/seata-server-0.5.1.zip)

<details>
    <summary><mark>Release notes</mark></summary>

Seata 0.5.1 发布

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

本次更新主要内容如下：

## 功能特性

- [[#774](https://github.com/apache/incubator-seata/pull/869)] 增加注册中心 Etcd3 支持
- [[#793](https://github.com/apache/incubator-seata/pull/793)] 增加注册中心 sofa-registry 支持
- [[#856](https://github.com/apache/incubator-seata/pull/856)] 增加批量删除 undolog 处理
- [[#786](https://github.com/apache/incubator-seata/pull/786)] 增加全局事务内分支事务并发支持

## Bug 修复及优化

- [[#879](https://github.com/apache/incubator-seata/pull/879)] 修复批量删除 undolog PreparedStatement 不关闭问题
- [[#945](https://github.com/apache/incubator-seata/pull/945)] 增加 LockManager 中 releaseLock 接口，优化调用逻辑
- [[#938](https://github.com/apache/incubator-seata/pull/938)] 优化 TransactionManager 服务加载逻辑
- [[#913](https://github.com/apache/incubator-seata/pull/938)] 优化与 RPC 集成框架的模块结构
- [[#795](https://github.com/apache/incubator-seata/pull/795)] 优化 server 节点写文件的性能
- [[#921](https://github.com/apache/incubator-seata/pull/921)] 修复 select for update 时的 NPE 异常
- [[#925](https://github.com/apache/incubator-seata/pull/925)] 优化 server 启动时复用同一 DefaultCoordinator 实例
- [[#930](https://github.com/apache/incubator-seata/pull/930)] 优化字段访问修饰符
- [[#907](https://github.com/apache/incubator-seata/pull/907)] 修复 hostname can't be null 异常
- [[#923](https://github.com/apache/incubator-seata/pull/923)] 修复 nettyClientKeyPool 连接销毁时 Key 未 format 问题
- [[#891](https://github.com/apache/incubator-seata/pull/891)] 修复 select union all 时 NPE 异常
- [[#888](https://github.com/apache/incubator-seata/pull/888)] 修复 copyright checkstyle 验证问题
- [[#901](https://github.com/apache/incubator-seata/pull/901)] 修复 Zookeeper 注册时父节点路径不存在问题
- [[#904](https://github.com/apache/incubator-seata/pull/904)] 优化 UpdateExecutort 后镜像数据查询
- [[#802](https://github.com/apache/incubator-seata/pull/802)] 优化 checkstyle，增加插件校验
- [[#882](https://github.com/apache/incubator-seata/pull/882)] 更改 copyright，增加 copyright 自动插件
- [[#874](https://github.com/apache/incubator-seata/pull/874)] 增加通讯传输层默认配置值
- [[#866](https://github.com/apache/incubator-seata/pull/866)] 修复无法生成 dubbo:reference 代理类问题
- [[#877](https://github.com/apache/incubator-seata/pull/877)] 修复批量删除 undolog 时 concurrentModifyException 异常
- [[#855](https://github.com/apache/incubator-seata/pull/855)] 优化 AT 模式时 globalCommit 时始终返回 committed 给用户
- [[#875](https://github.com/apache/incubator-seata/pull/875)] 修复 select for update，Boolean 转型 ResultSet 失败问题
- [[#830](https://github.com/apache/incubator-seata/pull/830)] 修复 RM 延迟注册问题
- [[#872](https://github.com/apache/incubator-seata/pull/872)] 修复 RegisterRMRequest 解码消息长度校验不准确问题
- [[#831](https://github.com/apache/incubator-seata/pull/831)] 优化 MessageFuture 中 CountDownLatch，使用 CompletableFuture 替代
- [[#834](https://github.com/apache/incubator-seata/pull/834)] 修复 ExecuteTemplate 中非 SQLException 异常不抛出问题

## 相关链接

- Seata: https://github.com/apache/incubator-seata
- Seata-Samples: https://github.com/apache/incubator-seata-samples
- Release：https://github.com/apache/incubator-seata/releases

</details>

### 0.5.0 (2019-04-19)

- [source](https://github.com/apache/incubator-seata/archive/0.5.0.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/0.5.0/seata-server-0.5.0.zip)

<details>
    <summary><mark>Release notes</mark></summary>

Seata 0.5.0 发布

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

本次更新主要内容如下：

### 兼容性变更

- [[#809](https://github.com/apache/incubator-seata/pull/809)] 更改 groupid、artifactid 和包路径
- [[#815](https://github.com/apache/incubator-seata/pull/815)] 添加 maven 插件，以支持使用 groupId “io.seata” 发包
- [[#790](https://github.com/apache/incubator-seata/pull/790)] 修改服务器的启动参数以支持数据库存储模式
- [[#769](https://github.com/apache/incubator-seata/pull/769)] 重构 RPC 协议，在客户端中去掉 XID 的解析，使得服务端变成无状态

## 功能特性

- [[#774](https://github.com/apache/incubator-seata/pull/774)] 优化配置中心和注册中心的结构
- [[#783](https://github.com/apache/incubator-seata/pull/783)] 允许用户自定义分支事务记录报告重试次数
- [[#791](https://github.com/apache/incubator-seata/pull/791)] 用状态枚举替换超时状态的模糊判断
- [[#836](https://github.com/apache/incubator-seata/pull/836)] 添加 maven 插件，管理工程版本号
- [[#820](https://github.com/apache/incubator-seata/pull/820)] 添加按异常回滚事务的特性

## Bug 修复

- [[#772](https://github.com/apache/incubator-seata/pull/772)] 修复文件配置中心监听器问题
- [[#807](https://github.com/apache/incubator-seata/pull/807)] 优化服务端文件存储器的文件路径
- [[#804](https://github.com/apache/incubator-seata/pull/804)] 修复分支提交不断重试问题

## 相关链接

- Seata: https://github.com/apache/incubator-seata
- Seata-Samples: https://github.com/fescar-group/fescar-samples
- Release：https://github.com/apache/incubator-seata/releases

</details>

### 0.4.2 (2019-04-12)

- [source](https://github.com/apache/incubator-seata/archive/v0.4.2.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.4.2/fescar-server-0.4.2.zip)

<details>
    <summary><mark>Release notes</mark></summary>

Seata 0.4.2 发布

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

本次更新主要内容如下：

## 特性

- [[#704](https://github.com/apache/incubator-seata/pull/704)] 增加 本地文件写入时 ByteBuffer 池
- [[#679](https://github.com/apache/incubator-seata/issues/679)] 增加 现有注册中心增加了 close 接口实现，优化了 server 优雅下线
- [[#713](https://github.com/apache/incubator-seata/pull/713)] 增加 本地文件写入对超过配置大小的消息启用压缩功能
- [[#587](https://github.com/apache/incubator-seata/issues/587)] 增加 MySQL DDL 语句支持
- [[#717](https://github.com/apache/incubator-seata/pull/717)] 增加 Nacos 初始化配置脚本配置和补全程序配置文件
- [[#726](https://github.com/apache/incubator-seata/pull/726)] 增加 DBCP, C3P0, BoneCP, HikariCP 和 Tomcat-JDBC 连接池的支持
- [[#744](https://github.com/apache/incubator-seata/pull/744)] 增加 ZooKeeper 断线重连时重新注册和订阅
- [[#728](https://github.com/apache/incubator-seata/pull/728)] 增加 Consul 注册中心支持

## Bug 修复

- [[#569](https://github.com/apache/incubator-seata/pull/695)] 修复 已是 jdk 代理且无 target 只遍历第一个实现接口的问题
- [[#721](https://github.com/apache/incubator-seata/pull/721)] 修复 ConfigFuture 构造方法超时参数不起作用的问题
- [[#725](https://github.com/apache/incubator-seata/pull/725)] 修复 MergedSendRunnable channel 被意外关闭问题，增加 fail-fast 机制
- [[#723](https://github.com/apache/incubator-seata/pull/723)] 修复 defaultServerMessageListener 未初始化的问题
- [[#746](https://github.com/apache/incubator-seata/pull/746)] 修复 DataSourceManager SPI 导致的 test module 集测用例全部失效问题
- [[#754](https://github.com/apache/incubator-seata/pull/754)] 优化 Eureka 注册中心实现
- [[#750](https://github.com/apache/incubator-seata/pull/750)] 修复 DataSourceManager SPI 导致的 undolog 无法删除问题
- [[#747](https://github.com/apache/incubator-seata/pull/747)] 删除 MT 模式，之后将被 TCC 模式代替
- [[#757](https://github.com/apache/incubator-seata/pull/757)] 修复 BranchRollback 异常后回滚重试被终止问题
- [[#776](https://github.com/apache/incubator-seata/pull/776)] 修复 连接池创建 channel 时 toString 异常导致的连接创建失败问题

## 相关链接

- Seata: https://github.com/apache/incubator-seata
- Seata-Samples: https://github.com/fescar-group/fescar-samples
- Release：https://github.com/apache/incubator-seata/releases

</details>

### 0.4.1 (2019-03-29)

- [source](https://github.com/apache/incubator-seata/archive/v0.4.1.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.4.1/fescar-server-0.4.1.zip)

<details>
    <summary><mark>Release notes</mark></summary>

</details>

### 0.4.0 (2019-03-19)

- [source](https://github.com/apache/incubator-seata/archive/v0.4.0.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.4.0/fescar-server-0.4.0.zip)

<details>
    <summary><mark>Release notes</mark></summary>

Alibaba Fescar 0.4.0 发布

Fescar 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

本次更新内容如下：

## 特性

- [[#583](https://github.com/alibaba/fescar/pull/583)] 新增蚂蚁金服的 TCC 模式，自动代理 Dubbo 服务和 SOFARPC 服务，使 fescar 支持除数据库以外的其他资源（RPC 服务、restful 服务、消息以及 NoSQL 等）作为分布式事务资源
- [[#594](https://github.com/alibaba/fescar/pull/611)] 新增 p3c pmd Maven 插件，自动进行代码扫描并找出不规范的代码格式
- [[#627](https://github.com/alibaba/fescar/pull/627)] Maven 依赖优化

## 相关链接

- Fescar: https://github.com/alibaba/fescar
- Fescar-Samples: https://github.com/fescar-group/fescar-samples
- Release：https://github.com/alibaba/fescar/releases

</details>

### 0.3.1 (2019-03-15)

- [source](https://github.com/apache/incubator-seata/archive/v0.3.1.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.3.1/fescar-server-0.3.1.zip)

<details>
    <summary><mark>Release notes</mark></summary>

Alibaba Fescar 0.3.1 发布

Fescar 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

本次更新内容如下：

## 特性

- [[#557](https://github.com/alibaba/fescar/issues/557)] 增加事务处理各阶段用户自定义 hook 接入点支持
- [[#594](https://github.com/alibaba/fescar/pull/594)] 增加 ZooKeeper 注册中心支持

## Bug 修复

- [[#569](https://github.com/alibaba/fescar/issues/569)] 修复 Eureka renew 问题
- [[#551](https://github.com/alibaba/fescar/pull/551)] 修复 ConfigType NPE 问题
- [[#489](https://github.com/alibaba/fescar/issues/489)] 修复 GlobalRollback 请求时未收到分支 branchReport 问题
- [[#598](https://github.com/alibaba/fescar/pull/598)] 修复 p3c 扫描出不符合规范的若干问题；

## 相关链接

- Fescar: https://github.com/alibaba/fescar
- Fescar-Samples: https://github.com/fescar-group/fescar-samples
- Release：https://github.com/alibaba/fescar/releases

</details>

### 0.3.0 (2019-03-08)

- [source](https://github.com/apache/incubator-seata/archive/v0.3.0.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.3.0/fescar-server-0.3.0.zip)

<details>
    <summary><mark>Release notes</mark></summary>

Alibaba Fescar 0.3.0 发布

Fescar 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

本次更新内容如下：

## 特性

- [[#510](https://github.com/alibaba/fescar/pull/510)] 新增 eureka 注册中心支持
- [[#498](https://github.com/alibaba/fescar/pull/498)] 实现带全局锁的本地事务模式并解决本地事务隔离性问题

## Bug 修复

- [[#459](https://github.com/alibaba/fescar/issues/459)] 修复了 mysql 关键字作为表名和列名生成 sql 问题
- [[#312](https://github.com/alibaba/fescar/issues/312)] 修复了原始业务 sql 无 where 条件生成 sql 出错问题
- [[#522](https://github.com/alibaba/fescar/issues/522)] 修复文件路径安全漏洞问题
- 对所有模块代码进行了 remove useless、 format 、optimize import、javadoc、copyright 整理

## 相关链接

- Fescar: https://github.com/alibaba/fescar
- Fescar-Samples: https://github.com/fescar-group/fescar-samples
- Release：https://github.com/alibaba/fescar/releases

</details>

### 0.2.3 (2019-03-02)

- [source](https://github.com/apache/incubator-seata/archive/v0.2.3.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.2.3/fescar-server-0.2.3.zip)

<details>
    <summary><mark>Release notes</mark></summary>

Alibaba Fescar 0.2.3 发布

Fescar 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

本次更新内容如下：

## 特性

- [[#478](https://github.com/alibaba/fescar/pull/478)] 支持 Redis 注册中心
- [[#478](https://github.com/alibaba/fescar/pull/478)] 支持 Apollo 配置中心

## Bug 修复

- [[#462](https://github.com/alibaba/fescar/issues/462)] 分离注册中心和配置中心入口

- [[#466](https://github.com/alibaba/fescar/issues/466)] 修正 RM 线程池的拒绝策略

## 相关链接

- Fescar: https://github.com/alibaba/fescar
- Fescar-Samples: https://github.com/fescar-group/fescar-samples
- Release：https://github.com/alibaba/fescar/releases

</details>

### 0.2.2 (2019-02-22)

- [source](https://github.com/apache/incubator-seata/archive/v0.2.2.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.2.2/fescar-server-0.2.2.zip)

<details>
    <summary><mark>Release notes</mark></summary>

</details>

### 0.2.1 (2019-02-18)

- [source](https://github.com/apache/incubator-seata/archive/v0.2.1.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.2.1/fescar-server-0.2.1.zip)

<details>
    <summary><mark>Release notes</mark></summary>

Alibaba Fescar 0.2.1 发布

Fescar 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

本次更新内容如下：

## 特性

- 支持 update 语句中的 between 语法
- 支持 Random 和 RoundRobin 负载策略
- 增加 dubbo-alibaba 模块以支持 Alibaba Dubbo

## Bug 修复

- 修复 NettyClientConfig 方法及变量名 fifo-> lifo
- 修复 fescar-dubbo 模块中 filter SPI 引用错误问题

## 相关链接

- Fescar: https://github.com/alibaba/fescar
- Fescar-Samples: https://github.com/fescar-group/fescar-samples
- Release：https://github.com/alibaba/fescar/releases

</details>

### 0.2.0 (2019-02-14)

- [source](https://github.com/apache/incubator-seata/archive/v0.2.0.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.2.0/fescar-server-0.2.0.zip)

<details>
    <summary><mark>Release notes</mark></summary>

Alibaba Fescar 0.2.0 发布

Fescar 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

本次更新内容如下：

## 特性

- 支持 MySQL 分布式事务自动模式（AT）
- 支持 Dubbo 无缝集成
- 支持 分布式事务 API
- 支持 Spring 事务注解
- 支持 Mybatis、JPA
- 支持 Nacos 服务注册和配置中心
- 增加 server 重启时从文件自动恢复未完成事务操作至内存
- 支持 多 IP 环境下，启动 server 指定 IP 参数

## Bug 修复

- 修复 server 重启可能导致 XID 重复问题
- 修复 Windows 启动脚本 $EXTRA_JVM_ARGUMENTS 参数报错
- 修复分布式事务本地嵌套内层事务提交/回滚导致外层事务异常问题
- 修复本地事务提交时异常，本地事务不回滚问题
- 修复 MySQL 表别名解析问题

## 其他

- 升级依赖 JDK 版本至 1.8
- 将依赖 Alibaba Dubbo 升级至 Apache Dubbo 2.7.0
- 优化相关依赖引用

## 相关链接

- Fescar: https://github.com/alibaba/fescar
- Fescar-Samples: https://github.com/fescar-group/fescar-samples
- Release：https://github.com/alibaba/fescar/releases

</details>

### 0.1.4 (2019-02-11)

- [source](https://github.com/apache/incubator-seata/archive/v0.1.4.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.1.4/fescar-server-0.1.4.zip)

### 0.1.3 (2019-01-29)

- [source](https://github.com/apache/incubator-seata/archive/v0.1.3.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.1.3/fescar-server-0.1.3.zip)

### 0.1.2 (2019-01-25)

- [source](https://github.com/apache/incubator-seata/archive/V0.1.2.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/V0.1.2/fescar-server-0.1.2.zip)

### 0.1.1 (2019-01-18)

- [source](https://github.com/apache/incubator-seata/archive/v0.1.1.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.1.1/fescar-server-0.1.1.zip)

### 0.1.0 (2019-01-09)

- [source](https://github.com/apache/incubator-seata/archive/v0.1.0.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.1.0/fescar-server-0.1.0.zip)
