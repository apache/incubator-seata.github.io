---
title: 发布说明
keywords: [Seata, 发布说明]
description: 本文将向你介绍如何点击了解各版本详情和升级注意事项。
---


# 发布说明

## Seata

> GitHub: https://github.com/apache/incubator-seata
>
> 发布说明: https://github.com/apache/incubator-seata/releases

### Seata 1.1.0 (2020-02-19)

 [source](https://github.com/apache/incubator-seata/archive/v1.1.0.zip) |
 [binary](https://github.com/apache/incubator-seata/releases/download/v1.1.0/seata-server-1.1.0.zip)
<details>
    <summary><mark>Release notes</mark></summary>

Seata 1.1.0 发布。

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature：
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


### bugfix：
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
- [[#2219](https://github.com/apache/incubator-seata/pull/2219)] 修复 seata-spring-boot-starter 读取disableGlobalTransaction 配置错误问题
- [[#2187](https://github.com/apache/incubator-seata/pull/2187)] 修复有相同数据依赖的不同事务分支路由到不同server时回滚顺序错误问题
- [[#2175](https://github.com/apache/incubator-seata/pull/2175)] 修复 server direct buffer OOM 问题
- [[#2210](https://github.com/apache/incubator-seata/pull/2210)] 修复二阶段 commit 和 rollback 重试超时 globalSession 无法删除问题
- [[#2179](https://github.com/apache/incubator-seata/pull/2179)] 修复 redis 注册中心 db 属性转型错误问题
- [[#2192](https://github.com/apache/incubator-seata/pull/2192)] 修复 eureka getHostName() 返回 ipAddress 问题
- [[#2198](https://github.com/apache/incubator-seata/pull/2198)] 修复 rollback 超时无法自动删除全局锁问题
- [[#2167](https://github.com/apache/incubator-seata/pull/2167)] 修复 Saga 异步执行返回相同 id 问题
- [[#2185](https://github.com/apache/incubator-seata/pull/2185)] 修复 server 启动时 kubernetes 的判断条件
- [[#2145](https://github.com/apache/incubator-seata/pull/2145)] 修复 Saga 模式重试成功上报状态错误问题
- [[#2113](https://github.com/apache/incubator-seata/pull/2113)] 修复分支 rollback 失败触发多个 TC 重试导致的并发异常


### optimize：
- [[#2255](https://github.com/apache/incubator-seata/pull/2255)] 优化配置项的默认配置值
- [[#2230](https://github.com/apache/incubator-seata/pull/2230)] 统一配置项命名风格和保持 seata-all 和 spring boot starter相同默认值
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

同时，我们收到了社区反馈的很多有价值的issue和建议，非常感谢大家。

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

  ### Seata 1.0.0 GA版本重磅发布
  Seata 1.0.0 GA版本重磅发布。

  Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

  此版本更新如下：

  ### feature：
  - [[#1966](https://github.com/apache/incubator-seata/pull/1966)] 增加client端单条消息发送方式
  - [[#2004](https://github.com/apache/incubator-seata/pull/2004)] 增加配置中心配置同步脚本
  - [[#1997](https://github.com/apache/incubator-seata/pull/1997)] 提供图像生成工具便于查看Saga状态机执行路径
  - [[#1992](https://github.com/apache/incubator-seata/pull/1992)] 支持动态降级
  - [[#1898](https://github.com/apache/incubator-seata/pull/1898)] 支持动态配置
  - [[#1983](https://github.com/apache/incubator-seata/pull/1983)] 支持hessian序列化
  - [[#1960](https://github.com/apache/incubator-seata/pull/1960)] 提供基于GGEditor的可视化图形Saga状态机设计器
  - [[#1900](https://github.com/apache/incubator-seata/pull/1900)] Saga状态语言支持重试服务
  - [[#1885](https://github.com/apache/incubator-seata/pull/1885)] 增加Docker image构建配置
  - [[#1914](https://github.com/apache/incubator-seata/pull/1914)] 支持Oracle exists表达式
  - [[#1878](https://github.com/apache/incubator-seata/pull/1878)] 支持Mysql exists表达式
  - [[#1871](https://github.com/apache/incubator-seata/pull/1871)] 适配springcloud-alibaba-seata自动配置
  - [[#1844](https://github.com/apache/incubator-seata/pull/1844)] Saga状态机支持异步调用服务
  - [[#1742](https://github.com/apache/incubator-seata/pull/1742)] 增加seata-spring-boot-starter
  - [[#1460](https://github.com/apache/incubator-seata/pull/1460)] 支持gzip压缩
  - [[#1492](https://github.com/apache/incubator-seata/pull/1492)] 支持grpc事务自动传递和绑定

  ### bugfix：
  - [[#2066](https://github.com/apache/incubator-seata/pull/2066)] 修复初始化eureka client线程安全问题
  - [[#2059](https://github.com/apache/incubator-seata/pull/2059)] 修复异步回滚线程导致重复回滚问题
  - [[#2050](https://github.com/apache/incubator-seata/pull/2050)] 修复监听不存在的配置导致空指针
  - [[#2053](https://github.com/apache/incubator-seata/pull/2053)] 修复Insert的表名为关键字,无法构建前置镜像
  - [[#2054](https://github.com/apache/incubator-seata/pull/2054)] 修复状态为Rollbacking的事务无法被检测出
  - [[#2043](https://github.com/apache/incubator-seata/pull/2043)] 修复使用druid-spring-boot-starter动态代理失败
  - [[#1668](https://github.com/apache/incubator-seata/pull/1668)] 修复sql语句转义符号问题
  - [[#2029](https://github.com/apache/incubator-seata/pull/2029)] 修复seata-spring-boot-starter无效
  - [[#2037](https://github.com/apache/incubator-seata/pull/2037)] 修复mysql连接无法自动释放
  - [[#2032](https://github.com/apache/incubator-seata/pull/2032)] 修复Etcd3配置错误
  - [[#1929](https://github.com/apache/incubator-seata/pull/1929)] 修复元数据有可能出现重复缓存
  - [[#1996](https://github.com/apache/incubator-seata/pull/1996)] 修复小部分情况下无法代理数据源
  - [[#2001](https://github.com/apache/incubator-seata/pull/2001)] 移除无效jvm参数
  - [[#1984](https://github.com/apache/incubator-seata/pull/1984)] 修复预设容器环境变量问题，替换基础镜像
  - [[#1978](https://github.com/apache/incubator-seata/pull/1978)] 修复在windows下FileTransactionStoreManager单元测试无法通过
  - [[#1953](https://github.com/apache/incubator-seata/pull/1953)] 修复在小部分情况下获取表元数据失败
  - [[#1973](https://github.com/apache/incubator-seata/pull/1973)] 修复容器下无法获取server端口
  - [[#1905](https://github.com/apache/incubator-seata/pull/1905)] 解决lock_key长度问题
  - [[#1927](https://github.com/apache/incubator-seata/pull/1927)] 修复SPI有可能加载私有类
  - [[#1961](https://github.com/apache/incubator-seata/pull/1961)] 修复CI日志过长问题
  - [[#1893](https://github.com/apache/incubator-seata/pull/1893)] 修复Saga模式不会删除分支信息问题
  - [[#1932](https://github.com/apache/incubator-seata/pull/1932)] 修复构建Docker镜像时环境不匹配
  - [[#1912](https://github.com/apache/incubator-seata/pull/1912)] 修复部分异常日志打印不完整
  - [[#1917](https://github.com/apache/incubator-seata/pull/1917)] 修复CI部分测试用例出现空指针异常
  - [[#1909](https://github.com/apache/incubator-seata/pull/1909)] 修复xid类型为空导致空指针
  - [[#1902](https://github.com/apache/incubator-seata/pull/1902)] 修复回滚时如遇不支持的数据库出现空指针
  - [[#1789](https://github.com/apache/incubator-seata/pull/1789)] 修复xid header大小写问题
  - [[#1889](https://github.com/apache/incubator-seata/pull/1889)] 修复TCC下分支注册导致线程挂起
  - [[#1813](https://github.com/apache/incubator-seata/pull/1813)] 修复部分情况TCC不支持跨服务
  - [[#1825](https://github.com/apache/incubator-seata/pull/1825)] 修复并发情况下事务状态不一致
  - [[#1850](https://github.com/apache/incubator-seata/pull/1850)] 修复Server重启时sessionId未重置
  - [[#1879](https://github.com/apache/incubator-seata/pull/1879)] 修复jdbc传入空参数导致异常
  - [[#1874](https://github.com/apache/incubator-seata/pull/1874)] 修复部分情况下Channel关闭的问题
  - [[#1863](https://github.com/apache/incubator-seata/pull/1863)] 修复Other类型无法序列化
  - [[#1837](https://github.com/apache/incubator-seata/pull/1837)] 修复saga ExpressionEvaluator不支持空值
  - [[#1810](https://github.com/apache/incubator-seata/pull/1810)] 修复saga状态机无法保存并提供状态日志查询
  - [[#1834](https://github.com/apache/incubator-seata/pull/1834)] 修复StateInstance无法记录输出参数
  - [[#1856](https://github.com/apache/incubator-seata/pull/1856)] 修复protostuff undo log获取默认content
  - [[#1845](https://github.com/apache/incubator-seata/pull/1845)] 修复分支提交失败, 导致空指针异常
  - [[#1858](https://github.com/apache/incubator-seata/pull/1858)] 修复分布式事务不生效
  - [[#1846](https://github.com/apache/incubator-seata/pull/1846)] 修复并发下增加监听器异常
  - [[#1839](https://github.com/apache/incubator-seata/pull/1839)] 修复重复加锁
  - [[#1768](https://github.com/apache/incubator-seata/pull/1768)] 修复设置数据库连接参数useInformationSchema为true无法获取元数据
  - [[#1796](https://github.com/apache/incubator-seata/pull/1796)] 修复回滚时异常判断不完整
  - [[#1805](https://github.com/apache/incubator-seata/pull/1805)] 修复连接代理和prepareStatement未在全局事务管理下
  - [[#1780](https://github.com/apache/incubator-seata/pull/1780)] 修复Oracle无法执行select for update语句
  - [[#1802](https://github.com/apache/incubator-seata/pull/1802)] 部分方法修改HashMap为LinkedHashMap
  - [[#1793](https://github.com/apache/incubator-seata/pull/1793)] 修复多数据源下无法自动代理
  - [[#1788](https://github.com/apache/incubator-seata/pull/1788)] 修复Mysql无法获取主键值
  - [[#1764](https://github.com/apache/incubator-seata/pull/1764)] 修复Jdk11下远程地址为空
  - [[#1778](https://github.com/apache/incubator-seata/pull/1778)] 修复单元测试未清空测试资源
  - [[#1777](https://github.com/apache/incubator-seata/pull/1777)] 修复DeleteExecutor未根据数据库类型来构建前置镜像

  ### optimize：
  - [[#2068](https://github.com/apache/incubator-seata/pull/2068)] 优化数据库连接获取
  - [[#2056](https://github.com/apache/incubator-seata/pull/2056)] 移除代码中非java doc注释
  - [[#1775](https://github.com/apache/incubator-seata/pull/1775)] 优化分支事务回滚日志输出频率
  - [[#2000](https://github.com/apache/incubator-seata/pull/2000)] 统一归类初始化脚本
  - [[#2007](https://github.com/apache/incubator-seata/pull/2007)] 提高common模块单元测试覆盖率
  - [[#1969](https://github.com/apache/incubator-seata/pull/1969)] 增加Docker-Compose, Kubernetes, Helm脚本
  - [[#1967](https://github.com/apache/incubator-seata/pull/1967)] 增加Docker file
  - [[#2018](https://github.com/apache/incubator-seata/pull/2018)] 优化ConfigFuture
  - [[#2020](https://github.com/apache/incubator-seata/pull/2020)] 优化saga日志输出
  - [[#1975](https://github.com/apache/incubator-seata/pull/1975)] 扁平化saga嵌套事务
  - [[#1980](https://github.com/apache/incubator-seata/pull/1980)] 分支注册时显示applicationId
  - [[#1994](https://github.com/apache/incubator-seata/pull/1994)] 修改zookeeper根路径配置名称
  - [[#1990](https://github.com/apache/incubator-seata/pull/1990)] 增加netty配置常量
  - [[#1979](https://github.com/apache/incubator-seata/pull/1979)] 优化select for update识别器
  - [[#1957](https://github.com/apache/incubator-seata/pull/1957)] 获取关键字检查对象改为SPI的方法
  - [[#1956](https://github.com/apache/incubator-seata/pull/1956)] 找不到有效服务时,提示更加友好
  - [[#1958](https://github.com/apache/incubator-seata/pull/1958)] 支持将设计器的JSON转换成状态机标准JSON
  - [[#1951](https://github.com/apache/incubator-seata/pull/1951)] 增加使用企业logo
  - [[#1950](https://github.com/apache/incubator-seata/pull/1950)] 优化异步提交时日志的缺失
  - [[#1931](https://github.com/apache/incubator-seata/pull/1931)] nacos-config.py支持namespace
  - [[#1938](https://github.com/apache/incubator-seata/pull/1938)] 优化批量插入和批量更新
  - [[#1930](https://github.com/apache/incubator-seata/pull/1930)] 减少HashMap初始化大小
  - [[#1919](https://github.com/apache/incubator-seata/pull/1919)] 强制代码风格检查
  - [[#1918](https://github.com/apache/incubator-seata/pull/1918)] 优化单元测试抛出的异常
  - [[#1911](https://github.com/apache/incubator-seata/pull/1911)] 优化部分注释
  - [[#1920](https://github.com/apache/incubator-seata/pull/1920)] 使用迭代器来移除过期Future
  - [[#1907](https://github.com/apache/incubator-seata/pull/1907)] 优化UndoExecutorFactory获取实例的方式
  - [[#1903](https://github.com/apache/incubator-seata/pull/1903)] 增加批量查询分支事务
  - [[#1910](https://github.com/apache/incubator-seata/pull/1910)] 优化部分方法缺少@override
  - [[#1906](https://github.com/apache/incubator-seata/pull/1906)] 初始化时增加非正常退出日志
  - [[#1897](https://github.com/apache/incubator-seata/pull/1897)] 移除clientTest单元测试
  - [[#1883](https://github.com/apache/incubator-seata/pull/1883)] 优化SQLRecognizer, UndoExecutor代码结构
  - [[#1890](https://github.com/apache/incubator-seata/pull/1890)] 格式化部分saga代码
  - [[#1798](https://github.com/apache/incubator-seata/pull/1798)] 提高部分方法format效率
  - [[#1884](https://github.com/apache/incubator-seata/pull/1884)] 封装关闭资源的方法
  - [[#1869](https://github.com/apache/incubator-seata/pull/1869)] 增加当成功时,可以关闭分支汇报参数
  - [[#1842](https://github.com/apache/incubator-seata/pull/1842)] 增加部分初始化脚本
  - [[#1838](https://github.com/apache/incubator-seata/pull/1838)] 简化配置
  - [[#1866](https://github.com/apache/incubator-seata/pull/1866)] 优化TC日志输出
  - [[#1867](https://github.com/apache/incubator-seata/pull/1867)] 优化seata-spring-boot-starter
  - [[#1817](https://github.com/apache/incubator-seata/pull/1817)] 增加tm单元测试
  - [[#1823](https://github.com/apache/incubator-seata/pull/1823)] 减少db的访问次数
  - [[#1835](https://github.com/apache/incubator-seata/pull/1835)] Saga事务模版增加重新加载事务方法
  - [[#1861](https://github.com/apache/incubator-seata/pull/1861)] 优化当主键不存在时日志输出
  - [[#1836](https://github.com/apache/incubator-seata/pull/1836)] 修改IsPersist属性类型为Boolean
  - [[#1824](https://github.com/apache/incubator-seata/pull/1824)] 移除部分过期的Jvm11参数
  - [[#1820](https://github.com/apache/incubator-seata/pull/1820)] 修改部分代码风格
  - [[#1806](https://github.com/apache/incubator-seata/pull/1806)] 格式化错误日志
  - [[#1815](https://github.com/apache/incubator-seata/pull/1815)] 更新codecov.yml
  - [[#1811](https://github.com/apache/incubator-seata/pull/1811)] 适配codecov配置
  - [[#1799](https://github.com/apache/incubator-seata/pull/1799)] 移除没用的同步锁
  - [[#1674](https://github.com/apache/incubator-seata/pull/1674)] 增加Rm单元测试覆盖率
  - [[#1710](https://github.com/apache/incubator-seata/pull/1710)] NamedThreadFactory增加计数器
  - [[#1790](https://github.com/apache/incubator-seata/pull/1790)] 格式化Eureka实例id
  - [[#1760](https://github.com/apache/incubator-seata/pull/1760)] put message to logQueue
  - [[#1787](https://github.com/apache/incubator-seata/pull/1787)] 优化rpc通信日志可读性
  - [[#1786](https://github.com/apache/incubator-seata/pull/1786)] 简化Eureka注册实现类代码
  - [[#1766](https://github.com/apache/incubator-seata/pull/1766)] 移除无用方法
  - [[#1770](https://github.com/apache/incubator-seata/pull/1770)] 优化String拼接方式和无用的释放锁方法

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

  同时，我们收到了社区反馈的很多有价值的issue和建议，非常感谢大家。

  ### 常用链接
  - **Seata:** https://github.com/apache/incubator-seata
  - **Seata-Samples:** https://github.com/apache/incubator-seata-samples
  - **Release:** https://github.com/apache/incubator-seata/releases

</details>
