---
title: Release Notes
keywords: [Seata, Release Notes]
description: Release Notes
---

# Downloads

# Seata

> GitHub: https://github.com/apache/incubator-seata
>
> Release Notes: https://github.com/apache/incubator-seata/releases

### 2.1.0 (2024-09-05)

[source](https://downloads.apache.org/incubator/seata/2.1.0/apache-seata-2.1.0-incubating-src.tar.gz) |
[binary](https://dist.apache.org/repos/dist/release/incubator/seata/2.1.0/apache-seata-2.1.0-incubating-bin.tar.gz)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 2.1.0

Seata 2.1.0 Released

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

### feature:
- [[#6370](https://github.com/seata/seata/pull/6370)] seata saga decouple spring, optimize architecture.
- [[#6205](https://github.com/apache/incubator-seata/pull/6205)] mock server
- [[#6169](https://github.com/apache/incubator-seata/pull/6169)] full support for states in the refactored state machine designer
- [[#6230](https://github.com/apache/incubator-seata/pull/6230)] RocketMQ transaction are supported
- [[#6326](https://github.com/apache/incubator-seata/pull/6326)] support raft node metadata sync
- [[#6415](https://github.com/apache/incubator-seata/pull/6415)] support autolayout in seata-statemachine-designer

### bugfix:
- [[#6090](https://github.com/apache/incubator-seata/pull/6090)] fix the TCC aspect exception handling process, do not wrapping the internal call exceptions
- [[#6075](https://github.com/apache/incubator-seata/pull/6075)] fix missing table alias for on update column of image SQL
- [[#6086](https://github.com/apache/incubator-seata/pull/6086)] fix oracle column alias cannot find
- [[#6085](https://github.com/apache/incubator-seata/pull/6085)] fix jdk9+ compile error
- [[#6101](https://github.com/apache/incubator-seata/pull/6101)] fix the consumer can't generate tcc proxy in dubbo 3.x version
- [[#6077](https://github.com/apache/incubator-seata/pull/6077)] fix could not rollback when table with multiple primary
- [[#6121](https://github.com/apache/incubator-seata/pull/6121)] fix the branch transaction order error when rolling back
- [[#6182](https://github.com/apache/incubator-seata/pull/6182)] fix guava-32.0.0-jre.jar zip file is empty in ci
- [[#6196](https://github.com/apache/incubator-seata/pull/6196)] fix asf config file format error
- [[#6143](https://github.com/apache/incubator-seata/pull/6143)] gracefully shut down the server
- [[#6204](https://github.com/apache/incubator-seata/pull/6204)] fix the problem that The incorrect configuration needs to be fixed
- [[#6248](https://github.com/apache/incubator-seata/pull/6248)] fix JDBC resultSet, statement, connection closing order
- [[#6261](https://github.com/apache/incubator-seata/pull/6261)] AT mode support the URL of a PGSQL cluster
- [[#6256](https://github.com/apache/incubator-seata/pull/6256)] fix raft-discovery cannot read registry configuration for seata-all sdk
- [[#6232](https://github.com/apache/incubator-seata/pull/6232)] convert to utf8mb4 if mysql column is json type
- [[#6278](https://github.com/apache/incubator-seata/pull/6278)] fix ProtocolV1SerializerTest failed
- [[#6324](https://github.com/apache/incubator-seata/pull/6324)] fix Parse protocol file failed
- [[#6331](https://github.com/apache/incubator-seata/pull/6331)] fixed the problem that TCC nested transactions cannot add TwoPhaseBusinessAction and GlobalTransactional annotations at the same time
- [[#6354](https://github.com/apache/incubator-seata/pull/6354)] fix dynamic degradation does not work properly
- [[#6363](https://github.com/apache/incubator-seata/pull/6363)] fix known problems of docker image
- [[#6372](https://github.com/apache/incubator-seata/pull/6372)] fix initializing the sql file postgresql.sql index name conflict
- [[#6380](https://github.com/apache/incubator-seata/pull/6380)] fix sql exception when checking for the existence of the UNDO_LOG table on SQL server
- [[#6385](https://github.com/apache/incubator-seata/pull/6385)] fix the bug where Role.participant does not execute hooks but clears them.
- [[#6465](https://github.com/apache/incubator-seata/pull/6465)] fix(6257): fix saga mode replay context lost start in 2.x
- [[#6469](https://github.com/apache/incubator-seata/pull/6469)] fix Error in insert sql of [lock_table] data table to sqlserver database
- [[#6496](https://github.com/apache/incubator-seata/pull/6496)] fix XA did not rollback but close when executing a long-running SQL(or deadlock SQL)
- [[#6493](https://github.com/apache/incubator-seata/pull/6493)] fix SQLServer-related SQL error in seata server when using database of SQLServer
- [[#6497](https://github.com/apache/incubator-seata/pull/6497)] fix tcc properties class when autoconfigure
- [[#6554](https://github.com/apache/incubator-seata/pull/6554)] fix unfixed serializer
- [[#6555](https://github.com/apache/incubator-seata/pull/6555)] businessActionContext is compatible with io seata
- [[#6553](https://github.com/apache/incubator-seata/pull/6553)] fix saga "cannot matching status"
- [[#6575](https://github.com/apache/incubator-seata/pull/6575)] fix io.seata ActionInterceptorHandler use org.apache.seata BusinessActionContextParameter


### optimize:
- [[#6031](https://github.com/apache/incubator-seata/pull/6031)] add a check for the existence of the undolog table
- [[#6089](https://github.com/apache/incubator-seata/pull/6089)] modify the semantics of RaftServerFactory and remove unnecessary singleton
- [[#4473](https://github.com/apache/incubator-seata/pull/4473)] rm appdata size limit
- [[#6071](https://github.com/apache/incubator-seata/pull/6071)] add git infos to jars
- [[#6042](https://github.com/apache/incubator-seata/pull/6042)] add secure authentication to interfaces in ClusterController
- [[#6091](https://github.com/apache/incubator-seata/pull/6091)] Optimizing the method of obtaining the tc address during raft authentication
- [[#6098](https://github.com/apache/incubator-seata/pull/6098)] optimize the retry logic in the acquireMetadata method
- [[#6034](https://github.com/apache/incubator-seata/pull/6034)] using namespace from command line when deployment with helm charts
- [[#6116](https://github.com/apache/incubator-seata/pull/6034)] remove lgtm.com stuff
- [[#6148](https://github.com/apache/incubator-seata/pull/6148)] support Nacos ram role authentication
- [[#6145](https://github.com/apache/incubator-seata/pull/6145)] upgrade jettison to 1.5.4
- [[#6164](https://github.com/apache/incubator-seata/pull/6164)] redis registry push empty protection optimize
- [[#6174](https://github.com/apache/incubator-seata/pull/6174)] add ASF basic config
- [[#6181](https://github.com/apache/incubator-seata/pull/6181)] update contributing doc
- [[#6179](https://github.com/apache/incubator-seata/pull/6179)] remove @author info
- [[#6176](https://github.com/apache/incubator-seata/pull/6176)] update source header
- [[#6178](https://github.com/apache/incubator-seata/pull/6178)] update the header of Apache License
- [[#6186](https://github.com/apache/incubator-seata/pull/6186)] update README.md(update mailing list and repository urls)
- [[#6184](https://github.com/apache/incubator-seata/pull/6184)] update NOTICE file
- [[#6192](https://github.com/apache/incubator-seata/pull/6192)] remove the useless file
- [[#6194](https://github.com/apache/incubator-seata/pull/6194)] fix asf.yaml parse error
- [[#5399](https://github.com/apache/incubator-seata/pull/5399)] optimizing branch register resource only at RM server end
- [[#6154](https://github.com/apache/incubator-seata/pull/6154)] console log optimize for "kubectl logs -f"
- [[#6116](https://github.com/apache/incubator-seata/pull/6116)] rewrite NettyPoolKey's hashcode and equals to fix duplicate construction of channel object pools
- [[#6195](https://github.com/apache/incubator-seata/pull/6195)] update the url in change log to apache/incubator-seata
- [[#6200](https://github.com/apache/incubator-seata/pull/6200)] cancel required_status_checks
- [[#6201](https://github.com/apache/incubator-seata/pull/6201)] restore required_status_checks kept to remove context validation
- [[#6218](https://github.com/apache/incubator-seata/pull/6218)] remove Seata-Docker link
- [[#6227](https://github.com/apache/incubator-seata/pull/6227)] validate that the primary key is free of illegal characters
- [[#6004](https://github.com/apache/incubator-seata/pull/6004)] optimize RM TM startup connect server fail fast
- [[#6243](https://github.com/apache/incubator-seata/pull/6243)] optimize links in the console header
- [[#6238](https://github.com/apache/incubator-seata/pull/6238)] optimize some files
- [[#6239](https://github.com/apache/incubator-seata/pull/6239)] update security policy, disclaimer and notice
- [[#6245](https://github.com/apache/incubator-seata/pull/6245)] in file mode, the configuration in the application takes effect, when the spring configuration in the configuration center is changed
- [[#6247](https://github.com/apache/incubator-seata/pull/6247)] optimize asf.yml
- [[#6259](https://github.com/apache/incubator-seata/pull/6259)] modify error message which is global session size more than config
- [[#6264](https://github.com/apache/incubator-seata/pull/6264)] fix jib-maven-plugin build failed
- [[#6246](https://github.com/apache/incubator-seata/pull/6246)] build the frontend at the same time as the maven build
- [[#6268](https://github.com/apache/incubator-seata/pull/6268)] optimize outdate npmjs dependencies in console
- [[#6271](https://github.com/apache/incubator-seata/pull/6271)] unifty the git information
- [[#6265](https://github.com/apache/incubator-seata/pull/6265)] optimization fails to build frontend on arm64
- [[#6267](https://github.com/apache/incubator-seata/pull/6267)] add Server deserialization validation
- [[#6275](https://github.com/apache/incubator-seata/pull/6275)] optimize the label's format in .asf.yaml
- [[#6291](https://github.com/apache/incubator-seata/pull/6291)] seata-server is developed in idea and console support output logs
- [[#6283](https://github.com/apache/incubator-seata/pull/6283)] add a compatible module to support io.seata APIs
- [[#6294](https://github.com/apache/incubator-seata/pull/6294)] split the frontend resource build process into separate profiles
- [[#6285](https://github.com/apache/incubator-seata/pull/6285)] optimize time query conditions in the console
- [[#6297](https://github.com/apache/incubator-seata/pull/6297)] fix problem of `maven-pmd-plugin`
- [[#6298](https://github.com/apache/incubator-seata/pull/6298)] repackage name to org.apache.seata
- [[#6302](https://github.com/apache/incubator-seata/pull/6302)] add io.seata package shade
- [[#6306](https://github.com/apache/incubator-seata/pull/6306)] replace some URL to org/apache/seata
- [[#6304](https://github.com/apache/incubator-seata/pull/6304)] disable Publish OSSRH workflow
- [[#6310](https://github.com/apache/incubator-seata/pull/6310)] seata-server compatible io.seata package
- [[#6301](https://github.com/apache/incubator-seata/pull/6301)] upgrade console frontend dependencies and supported nodejs versions
- [[#6301](https://github.com/apache/incubator-seata/pull/6312)] add saga related io.seata compatible api
- [[#6313](https://github.com/apache/incubator-seata/pull/6313)] console display the version number
- [[#6315](https://github.com/apache/incubator-seata/pull/6315)] compatible with lower versions of SPI
- [[#6327](https://github.com/apache/incubator-seata/pull/6327)] compatible with integration.http and integration.http.Jakarta
- [[#6328](https://github.com/apache/incubator-seata/pull/6328)] compatible with integration.grpc
- [[#6330](https://github.com/apache/incubator-seata/pull/6330)] remove mariadb API
- [[#6329](https://github.com/apache/incubator-seata/pull/6312)] add saga subcomponent-level io.seata compatible api
- [[#6254](https://github.com/apache/incubator-seata/pull/6254)] optimize Hessian Serialize
- [[#6332](https://github.com/apache/incubator-seata/pull/6332)] remove mysql dependency from the distribution package
- [[#6343](https://github.com/apache/incubator-seata/pull/6343)] compatible with tm module and rm-datasource module
- [[#6357](https://github.com/apache/incubator-seata/pull/6357)] optimize serialization/deserialization of protocol codec
- [[#6345](https://github.com/apache/incubator-seata/pull/6345)] compatible with tcc module
- [[#6356](https://github.com/apache/incubator-seata/pull/6356)] remove authentication from the health check page
- [[#6360](https://github.com/apache/incubator-seata/pull/6360)] optimize 401 issues for some links
- [[#6366](https://github.com/apache/incubator-seata/pull/6366)] optimized globaltransaction compatibility issues
- [[#6369](https://github.com/apache/incubator-seata/pull/6369)] optimize arm64 ci
- [[#6386](https://github.com/apache/incubator-seata/pull/6386)] replace `byte-buddy` to JDK proxy
  in `ConfigurationCache`
- [[#6391](https://github.com/apache/incubator-seata/pull/6091)] forbid duplicate registration of TCC resources
- [[#6393](https://github.com/apache/incubator-seata/pull/6393)] determine the version before sync metadata and add
  retry mechanism
- [[#6387](https://github.com/apache/incubator-seata/pull/6387)] optimize tcc use compatible
- [[#6402](https://github.com/apache/incubator-seata/pull/6402)] optimize rm-datasource use compatible
- [[#6403](https://github.com/apache/incubator-seata/pull/6403)] optimize config compatible module
- [[#6419](https://github.com/apache/incubator-seata/pull/6419)] optimize integration-tx-api compatible
- [[#6427](https://github.com/apache/incubator-seata/pull/6427)] support spi、saga、spring module compatible
- [[#6442](https://github.com/apache/incubator-seata/pull/6442)] clarify if conditions
- [[#6487](https://github.com/apache/incubator-seata/pull/6487)] fix typo and package name
- [[#6442](https://github.com/apache/incubator-seata/pull/6442)] clarify if conditions
- [[#6405](https://github.com/apache/incubator-seata/pull/6405)] fix kotlin compile failure
- [[#6412](https://github.com/apache/incubator-seata/pull/6412)] optimize core compatible module
- [[#6429](https://github.com/apache/incubator-seata/pull/6429)] remove repetitive words
- [[#6518](https://github.com/apache/incubator-seata/pull/6518)] optimize ConfigurationCache proxy method
- [[#6458](https://github.com/apache/incubator-seata/pull/6458)] add null value check for MAC address
- [[#6516](https://github.com/apache/incubator-seata/pull/6516)] optimize code format
- [[#6529](https://github.com/apache/incubator-seata/pull/6529)] optimize release maven plugin
- [[#6548](https://github.com/apache/incubator-seata/pull/6548)] upgrade the byte-buddy version to 1.14.15
- [[#6539](https://github.com/apache/incubator-seata/pull/6539)] add subcomponents license
- [[#6540](https://github.com/apache/incubator-seata/pull/6540)] exclude com.google.guava:listenablefuture
- [[#6549](https://github.com/apache/incubator-seata/pull/6549)] macos workflow support arm testing
- [[#6558](https://github.com/apache/incubator-seata/pull/6558)] remove mysql-connector-java from pom.xml
- [[#6570](https://github.com/apache/incubator-seata/pull/6570)] add notice file to binary
- [[#6578](https://github.com/apache/incubator-seata/pull/6578)] registry.conf supplemented raft configuration
- [[#6576](https://github.com/apache/incubator-seata/pull/6576)] remove oracle datatype parser
- [[#6583](https://github.com/apache/incubator-seata/pull/6583)] optimize the default compilation to be independent of the Git Env
- [[#6585](https://github.com/apache/incubator-seata/pull/6585)] optimize compatible module pom.xml
- [[#6597](https://github.com/apache/incubator-seata/pull/6597)] remove binary from source code
- [[#6605](https://github.com/apache/incubator-seata/pull/6605)] revised the license and notice
- [[#6609](https://github.com/apache/incubator-seata/pull/6609)] revised the notice file
- [[#6610](https://github.com/apache/incubator-seata/pull/6610)] revised the notice file

### security:
- [[#6069](https://github.com/apache/incubator-seata/pull/6069)] Upgrade Guava dependencies to fix security vulnerabilities
- [[#6145](https://github.com/apache/incubator-seata/pull/6145)] upgrade jettison to 1.5.4
- [[#6144](https://github.com/apache/incubator-seata/pull/6144)] upgrade nacos client to 1.4.6
- [[#6147](https://github.com/apache/incubator-seata/pull/6147)] upgrade kafka-clients to 3.6.1
- [[#6339](https://github.com/apache/incubator-seata/pull/6339)] upgrade spring mvc and tomcat.embed
- [[#6340](https://github.com/apache/incubator-seata/pull/6340)] upgrade and tidy some dependencies
- [[#6350](https://github.com/apache/incubator-seata/pull/6350)] remove enableDegrade properties
- [[#6349](https://github.com/apache/incubator-seata/pull/6349)] transfer dockerhub repo
- [[#6362](https://github.com/apache/incubator-seata/pull/6362)] upgrade Spring related dependence
- [[#6375](https://github.com/apache/incubator-seata/pull/6375)] override console nested dependencies

### test:
- [[#6081](https://github.com/apache/incubator-seata/pull/6081)] add `test-os.yml` for testing the OS
- [[#6125](https://github.com/apache/incubator-seata/pull/6125)] unbind xid in TransactionTemplateTest
- [[#6157](https://github.com/apache/incubator-seata/pull/6157)] increase common module unit test coverage
- [[#6250](https://github.com/apache/incubator-seata/pull/6250)] increase seata-core module unit test coverage
- [[#6325](https://github.com/apache/incubator-seata/pull/6325)] fix mockServerTest fail cause using same port with seata-server
- [[#6430](https://github.com/apache/incubator-seata/pull/6430)] increase common module unit test coverage
- [[#6456](https://github.com/apache/incubator-seata/pull/6456)] adjust the test cases related to dynamic configuration
- [[#6466](https://github.com/apache/incubator-seata/pull/6466)] support redis integration testing
- [[#6484](https://github.com/apache/incubator-seata/pull/6484)] fix FileConfigurationTest and MockServerTest fail
- [[#6545](https://github.com/apache/incubator-seata/pull/6545)] fix TestConfigCustomSPI compatibility test fail
- [[#6560](https://github.com/apache/incubator-seata/pull/6560)] fix mock-server test, do not shutdown in Runtime.getRuntime().addShutdownHook
- [[#6565](https://github.com/apache/incubator-seata/pull/6565)] fix testCompensationStateMachine fail

### refactor:
- [[#6280](https://github.com/apache/incubator-seata/pull/6280)] refactor Saga designer using diagram-js
- [[#6269](https://github.com/apache/incubator-seata/pull/6269)] standardize Seata Exception
- [[#6420](https://github.com/apache/incubator-seata/pull/6420)] refactor Configuration Cache

Thanks to these contributors for their code commits. Please report an unintended omission.

<!-- Please make sure your Github ID is in the list below -->
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

Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 2.0.0 (2023-11-24)

[source](https://github.com/apache/incubator-seata/archive/v2.0.0.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v2.0.0/seata-server-2.0.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 2.0.0

Seata 2.0.0 Released

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

### feature

- [[#5165](https://github.com/apache/incubator-seata/pull/5165)] optimize TCC structure, supporting API access. add integration layer module(seata-integration-tx-api) for transaction process definition and proxy enhancement.
- [[#5352](https://github.com/apache/incubator-seata/pull/5352)] add jackson json parser and gson json parser for tcc business action context
- [[#5377](https://github.com/apache/incubator-seata/pull/5377)] make AbstractHttpExecutor.class support http put
- [[#5396](https://github.com/apache/incubator-seata/pull/5396)] TC log appender metric
- [[#5118](https://github.com/apache/incubator-seata/pull/5118)] support two-stage concurrent notification execution
- [[#5529](https://github.com/apache/incubator-seata/pull/5529)] docker image supports JVM parameter injection
- [[#3887](https://github.com/apache/incubator-seata/pull/3887)] add SQL Server database support in AT mode
- [[#4033](https://github.com/apache/incubator-seata/pull/4033)] add SQLServer support for Server DB storage mode
- [[#5600](https://github.com/apache/incubator-seata/pull/5600)] feature: support trace the transaction link according to the XID
- [[#5357](https://github.com/apache/incubator-seata/pull/5357)] feature: console integration saga-statemachine-designer
- [[#5717](https://github.com/apache/incubator-seata/pull/5717)] compatible with file.conf and registry.conf configurations in version 1.4.2 and below
- [[#5842](https://github.com/apache/incubator-seata/pull/5842)] adding metainfo to docker image
- [[#5902](https://github.com/apache/incubator-seata/pull/5902)] support IPv6
- [[#5907](https://github.com/apache/incubator-seata/pull/5907)] support polardb-x 2.0 in AT mode
- [[#5932](https://github.com/apache/incubator-seata/pull/5932)] support Dameng database
- [[#5946](https://github.com/apache/incubator-seata/pull/5946)] add sqlserver's adaptation to the console paging interface
- [[#5226](https://github.com/apache/incubator-seata/pull/5226)] support raft cluster and store mode

### bugfix

- [[#5677](https://github.com/apache/incubator-seata/pull/5677)] fix saga mode serviceTask inputParams json autoType convert exception
- [[#5277](https://github.com/apache/incubator-seata/pull/5277)] fix server console has queried the released lock
- [[#5282](https://github.com/apache/incubator-seata/pull/5282)] parallel request handle throw IndexOutOfBoundsException
- [[#5294](https://github.com/apache/incubator-seata/pull/5294)] fix auto-increment of pk columns in PostgreSQL/Oracle in AT mode
- [[#5298](https://github.com/apache/incubator-seata/pull/5298)] don't remove GlobalSession when retry rollback or retry commit timeout
- [[#5304](https://github.com/apache/incubator-seata/pull/5304)] remove RollbackRetryTimeout sessions during in file storage recover
- [[#5310](https://github.com/apache/incubator-seata/pull/5310)] fix that keywords don't add escaped characters
- [[#5318](https://github.com/apache/incubator-seata/pull/5318)] fix G1 jvm parameter in jdk8
- [[#5330](https://github.com/apache/incubator-seata/pull/5330)] fix bugs found in unit tests
- [[#5337](https://github.com/apache/incubator-seata/pull/5337)] fix bugs found in feature#5165 about sorting problem of multiple interceptor under the spring used environment, by the way fix the BeforeTransaction(AfterTransaction) transaction ordering problem when the order is consistent
- [[#5347](https://github.com/apache/incubator-seata/pull/5347)] Fix console print `unauthorized error`
- [[#5355](https://github.com/apache/incubator-seata/pull/5355)] fix bug when customizing context-path
- [[#5362](https://github.com/apache/incubator-seata/pull/5362)] fix When the rollback logic on the TC side returns RollbackFailed, the custom FailureHandler is not executed
- [[#5373](https://github.com/apache/incubator-seata/pull/5373)] fix transaction timeout on client side not execute hook and failureHandler
- [[#5395](https://github.com/apache/incubator-seata/pull/5395)] check if table meta cache should be refreshed in AT mode
- [[#5426](https://github.com/apache/incubator-seata/pull/5426)] fix the GlobalTransactional annotation npe issue.
- [[#5464](https://github.com/apache/incubator-seata/pull/5464)] fix global session is always begin in saga mode
- [[#5478](https://github.com/apache/incubator-seata/pull/5478)] fix finished transaction swallows exception when committing
- [[#5490](https://github.com/apache/incubator-seata/pull/5490)] fix method name not print in logs
- [[#5449](https://github.com/apache/incubator-seata/pull/5449)] fix Oracle XA transaction reentrant issues
- [[#5462](https://github.com/apache/incubator-seata/pull/5462)] fix if using `@GlobalTransactional` in RM, `ShouldNeverHappenException` will be thrown
- [[#5498](https://github.com/apache/incubator-seata/pull/5498)] bugfix: fix the full table scan issue with 'setDate' condition in Oracle 10g
- [[#5531](https://github.com/apache/incubator-seata/pull/5531)] fix the log file path was loaded incorrectly
- [[#5523](https://github.com/apache/incubator-seata/pull/5523)] fix GlobalStatus=9 can't be cleared in DB storage mode
- [[#5558](https://github.com/apache/incubator-seata/pull/5558)] fix mariadb rollback failed
- [[#5556](https://github.com/apache/incubator-seata/pull/5556)] fix oracle insert undolog failed
- [[#5579](https://github.com/apache/incubator-seata/pull/5579)] fix RM_CHANNELS get npe when resourceId is empty
- [[#5577](https://github.com/apache/incubator-seata/pull/5577)] fix grpc interceptor xid unbinding problem
- [[#5594](https://github.com/apache/incubator-seata/pull/5594)] fix log in participant transaction role
- [[#5604](https://github.com/apache/incubator-seata/pull/5604)] fix the `asyncCommit` and `queueToRetryCommit` always failed in db mode
- [[#5658](https://github.com/apache/incubator-seata/pull/5658)] bugfix: fix escaped characters for upper and lower case column names
- [[#5661](https://github.com/apache/incubator-seata/pull/5661)] bugfix: the timeout is null when the connectionProxyXA connection is reused
- [[#5679](https://github.com/apache/incubator-seata/pull/5679)] bugfix: fix compatibility between xxx.grouplist and grouplist.xxx configuration items
- [[#5715](https://github.com/apache/incubator-seata/pull/5715)] fix get configuration item contains underlined error
- [[#5748](https://github.com/apache/incubator-seata/pull/5748)] case of the pk col-name in the business sql is inconsistent with the case in the table metadata, resulting in a rollback failure
- [[#5745](https://github.com/apache/incubator-seata/pull/5745)] fix the problem that the parameter prefix requirement of the setAttachment method in sofa-rpc is not met
- [[#5772](https://github.com/apache/incubator-seata/pull/5762)] change some fields type of TableMetaCache to avoid integer overflow
- [[#5787](https://github.com/apache/incubator-seata/pull/5794)] Solution cluster cannot be customized when redis serves as the registry
- [[#5810](https://github.com/apache/incubator-seata/pull/5810)] fix XA transaction start exception and rollback failure caused by druid dependency conflict
- [[#5821](https://github.com/apache/incubator-seata/pull/5821)] fix insert executor keywords unescape
- [[#5835](https://github.com/apache/incubator-seata/pull/5835)] bugfix: fix TC retry rollback wrongly, after the XA transaction fail and rollback
- [[#5881](https://github.com/apache/incubator-seata/pull/5880)] fix delete branch table unlock failed
- [[#5930](https://github.com/apache/incubator-seata/pull/5930)] fix the issue of missing sentinel password in store redis mode
- [[#5958](https://github.com/apache/incubator-seata/pull/5958)] required to be unlocked when a re-election occurs in a commit state
- [[#5971](https://github.com/apache/incubator-seata/pull/5971)] fix some configurations that are not deprecated show "Deprecated"
- [[#5977](https://github.com/apache/incubator-seata/pull/5977)] fix that rpcserver is not closed when raftServer is closed
- [[#5954](https://github.com/apache/incubator-seata/pull/5954)] fix the issue of saved branch session status does not match the actual branch session status
- [[#5990](https://github.com/apache/incubator-seata/pull/5990)] fix the issue that the Lua script is not synchronized when the redis sentinel master node is down
- [[#5997](https://github.com/apache/incubator-seata/pull/5997)] fix global transaction hook repeat execute
- [[#6018](https://github.com/apache/incubator-seata/pull/6018)] fix incorrect metric report
- [[#6024](https://github.com/apache/incubator-seata/pull/6024)] fix the white screen after click the "View Global Lock" button on the transaction info page in the console
- [[#6015](https://github.com/apache/incubator-seata/pull/6015)] fix can't integrate dubbo with spring
- [[#6049](https://github.com/apache/incubator-seata/pull/6049)] fix registry type for raft under the network interruption did not carry out the sleep 1s
- [[#6050](https://github.com/apache/incubator-seata/pull/6050)] change RaftServer#destroy to wait all shutdown procedures
- [[#6033](https://github.com/apache/incubator-seata/pull/6033)] fix the isReference judgment logic in HSFRemotingParser, remove unnecessary judgment about FactoryBean

### optimize

- [[#5966](https://github.com/apache/incubator-seata/pull/5966)] decouple saga expression handling and remove evaluator package
- [[#5928](https://github.com/apache/incubator-seata/pull/5928)] add Saga statelang semantic validation
- [[#4858](https://github.com/apache/incubator-seata/pull/4858)] reorganize the usage of task session manager
- [[#4881](https://github.com/apache/incubator-seata/pull/4881)] reorganize the usage of Sessionmanager and listener
- [[#5273](https://github.com/apache/incubator-seata/pull/5273)] Optimize the compilation configuration of the `protobuf-maven-plugin` plug-in to solve the problem of too long command lines in higher versions.
- [[#5278](https://github.com/apache/incubator-seata/pull/5278)] clean multi-sessionmanager-instance pattern
- [[#5302](https://github.com/apache/incubator-seata/pull/5302)] remove startup script the -Xmn configuration
- [[#4880](https://github.com/apache/incubator-seata/pull/4880)] optimize logs when commit/rollback catch an exception
- [[#5322](https://github.com/apache/incubator-seata/pull/5322)] optimize the log of SPI
- [[#5326](https://github.com/apache/incubator-seata/pull/5326)] add time info for global transaction timeout log
- [[#5328](https://github.com/apache/incubator-seata/pull/5333)] add corresponding lua implementation for Redis mode of global transaction and transaction storage
- [[#5341](https://github.com/apache/incubator-seata/pull/5341)] optimize gRPC Interceptor for TCC mode
- [[#5342](https://github.com/apache/incubator-seata/pull/5342)] optimize the check of the delay value of the TCC fence log clean task
- [[#5344](https://github.com/apache/incubator-seata/pull/5344)] add store mode,config type and registry type log info
- [[#5351](https://github.com/apache/incubator-seata/pull/5351)] optimize RPC filter for TCC mode
- [[#5354](https://github.com/apache/incubator-seata/pull/5354)] reconstruct the RPC integration module
- [[#5370](https://github.com/apache/incubator-seata/pull/5370)] optimize transaction fail handler
- [[#5431](https://github.com/apache/incubator-seata/pull/5431)] optimize github workflow
- [[#5461](https://github.com/apache/incubator-seata/pull/5461)] optimize license workflow
- [[#5456](https://github.com/apache/incubator-seata/pull/5456)] refactor ColumnUtils and EscapeHandler
- [[#5438](https://github.com/apache/incubator-seata/pull/5438)] optimize code style properties
- [[#5471](https://github.com/apache/incubator-seata/pull/5471)] optimize transaction log on client side
- [[#5485](https://github.com/apache/incubator-seata/pull/5485)] optimize server log output
- [[#4907](https://github.com/apache/incubator-seata/pull/4907)] optimize thread scheduling and code
- [[#5487](https://github.com/apache/incubator-seata/pull/5487)] mark the lockholder of branchsession as final
- [[#5519](https://github.com/apache/incubator-seata/pull/5519)] optimize FenceHandler for oracle
- [[#5501](https://github.com/apache/incubator-seata/pull/5501)] support updating transaction state with optimistic locking
- [[#5419](https://github.com/apache/incubator-seata/pull/5419)] optimize images based on java 8/17 and support maven-3.9.0
- [[#5549](https://github.com/apache/incubator-seata/pull/5549)] update expire gpg key and publish workflow
- [[#5576](https://github.com/apache/incubator-seata/pull/5576)] The common fence clean task is only initiated when useTCCFence is set to true
- [[#5623](https://github.com/apache/incubator-seata/pull/5623)] optimize possible conflict between asyncCommitting thread and retryCommitting thread
- [[#5553](https://github.com/apache/incubator-seata/pull/5553)] support case-sensitive attributes for table and column metadata
- [[#5563](https://github.com/apache/incubator-seata/pull/5563)] optimize: optimize channel availability thread log output
- [[#5644](https://github.com/apache/incubator-seata/pull/5644)] optimize server logs print
- [[#5680](https://github.com/apache/incubator-seata/pull/5680)] optimize escape character for case of columnNames
- [[#5686](https://github.com/apache/incubator-seata/pull/5686)] optimize: optimize license check actions
- [[#5714](https://github.com/apache/incubator-seata/pull/5714)] optimize distributed lock log
- [[#5723](https://github.com/apache/incubator-seata/pull/5723)] optimize docker default timezone
- [[#5779](https://github.com/apache/incubator-seata/pull/5779)] remove unnecessary log outputs and unify the log output path.
- [[#5802](https://github.com/apache/incubator-seata/pull/5802)] set server's transaction level to READ_COMMITTED
- [[#5783](https://github.com/apache/incubator-seata/pull/5783)] support the nacos application name property
- [[#5524](https://github.com/apache/incubator-seata/pull/5524)] support for more operational commands in seata-server.sh
- [[#5836](https://github.com/apache/incubator-seata/pull/5836)] separate MySQL from Mariadb implementations
- [[#5869](https://github.com/apache/incubator-seata/pull/5869)] some minor syntax optimization
- [[#5885](https://github.com/apache/incubator-seata/pull/5885)] optimize log in ConnectionProxyXA
- [[#5894](https://github.com/apache/incubator-seata/pull/5894)] remove dependency without license
- [[#5895](https://github.com/apache/incubator-seata/pull/5895)] remove 7z format compression support
- [[#5896](https://github.com/apache/incubator-seata/pull/5896)] remove mariadb.jdbc dependency
- [[#5384](https://github.com/apache/incubator-seata/pull/5384)] unified project version
- [[#5419](https://github.com/apache/incubator-seata/pull/5419)] publish images based on java 8/17 and support maven-3.9.0
- [[#5829](https://github.com/apache/incubator-seata/pull/5829)] fix codecov chart not display
- [[#5878](https://github.com/apache/incubator-seata/pull/5878)] optimize `httpcore` and `httpclient` dependencies
- [[#5917](https://github.com/apache/incubator-seata/pull/5917)] upgrade native-lib-loader version
- [[#5926](https://github.com/apache/incubator-seata/pull/5926)] optimize some scripts related to Apollo
- [[#5938](https://github.com/apache/incubator-seata/pull/5938)] support jmx port in seata
- [[#5944](https://github.com/apache/incubator-seata/pull/5944)] optimize: fix build action warning
- [[#5951](https://github.com/apache/incubator-seata/pull/5951)] remove un support config in jdk17
- [[#5959](https://github.com/apache/incubator-seata/pull/5959)] modify code style and remove unused import
- [[#6002](https://github.com/apache/incubator-seata/pull/6002)] remove fst serialization
- [[#6045](https://github.com/apache/incubator-seata/pull/6045)] optimize derivative product check base on mysql

### security

- [[#5642](https://github.com/apache/incubator-seata/pull/5642)] add Hessian Serializer WhiteDenyList
- [[#5694](https://github.com/apache/incubator-seata/pull/5694)] fix several node.js security vulnerabilities
- [[#5801](https://github.com/apache/incubator-seata/pull/5801)] fix some dependencies vulnerability
- [[#5805](https://github.com/apache/incubator-seata/pull/5805)] fix some serializer vulnerabilities
- [[#5868](https://github.com/apache/incubator-seata/pull/5868)] fix npm package vulnerabilities
- [[#5916](https://github.com/apache/incubator-seata/pull/5916)] upgrade nodejs dependency
- [[#5942](https://github.com/apache/incubator-seata/pull/5942)] upgrade dependencies version
- [[#5987](https://github.com/apache/incubator-seata/pull/5987)] upgrade some dependencies version
- [[#6013](https://github.com/apache/incubator-seata/pull/6013)] upgrade seata-server spring version

### test

- [[#5308](https://github.com/apache/incubator-seata/pull/5308)] add unit test [FileLoader, ObjectHolder, StringUtils]
- [[#5309](https://github.com/apache/incubator-seata/pull/5309)] add unit test [ArrayUtils, ConfigTools, MapUtil]
- [[#5335](https://github.com/apache/incubator-seata/pull/5335)] add unit test [EnhancedServiceLoader,ExtensionDefinition,SizeUtilTest,ReflectionUtil,LowerCaseLinkHashMap,FileLoader,ObjectHolder]
- [[#5367](https://github.com/apache/incubator-seata/pull/5367)] fix UpdateExecutorTest failed
- [[#5383](https://github.com/apache/incubator-seata/pull/5383)] fix multi spring version test failed
- [[#5391](https://github.com/apache/incubator-seata/pull/5391)] add unit test for config module
- [[#5428](https://github.com/apache/incubator-seata/pull/5428)] fix FileTransactionStoreManagerTest failed
- [[#5622](https://github.com/apache/incubator-seata/pull/5622)] add unit test [ExporterType, RegistryType]
- [[#5637](https://github.com/apache/incubator-seata/pull/5637)] add unit test [BatchResultMessage, HeartbeatMessage, RegisterRMResponse, ResultCode, RegisterTMResponse, MergeResultMessage, MergedWarpMessage, Version]
- [[#5893](https://github.com/apache/incubator-seata/pull/5893)] remove sofa test cases
- [[#5845](https://github.com/apache/incubator-seata/pull/5845)] upgrade druid and add `test-druid.yml`
- [[#5863](https://github.com/apache/incubator-seata/pull/5863)] fix unit test in java 21
- [[#5986](https://github.com/apache/incubator-seata/pull/5986)] fix zookeeper UT failed
- [[#5995](https://github.com/apache/incubator-seata/pull/5995)] add test cases for RaftClusterMetadataMsg
- [[#6001](https://github.com/apache/incubator-seata/pull/6001)] add test cases for RaftMsgExecute under branch package
- [[#5996](https://github.com/apache/incubator-seata/pull/5996)] add test cases for RaftMsgExecute under global package
- [[#6003](https://github.com/apache/incubator-seata/pull/6003)] add test cases for RaftMsgExecute under lock package
- [[#6005](https://github.com/apache/incubator-seata/pull/6005)] fix saga async tests undefined behavior
- [[#6009](https://github.com/apache/incubator-seata/pull/6009)] add test cases for RaftServerFactory
- [[#6052](https://github.com/apache/incubator-seata/pull/6052)] upgrade springboot and spring version for server for test

### Contributors

Thanks to these contributors for their code commits. Please report an unintended omission.

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

Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

#### Link

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

Seata 1.8.0 Released

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

### feature

- [[#3672](https://github.com/apache/incubator-seata/pull/3672)] support Dameng database
- [[#5892](https://github.com/apache/incubator-seata/pull/5892)] support PolarDB-X 2.0 database

### bugfix

- [[#5833](https://github.com/apache/incubator-seata/pull/5833)] bugfix: fix TC retry rollback wrongly, after the XA transaction fail and rollback
- [[#5884](https://github.com/apache/incubator-seata/pull/5884)] fix dm escaped characters for upper and lower case column names
- [[#5931](https://github.com/apache/incubator-seata/pull/5931)] fix the issue of missing sentinel password in store redis mode
- [[#5970](https://github.com/apache/incubator-seata/pull/5970)] fix some configurations that are not deprecated show "Deprecated"

### optimize

- [[#5866](https://github.com/apache/incubator-seata/pull/5866)] some minor syntax optimization
- [[#5889](https://github.com/apache/incubator-seata/pull/5889)] remove dependency without license
- [[#5890](https://github.com/apache/incubator-seata/pull/5890)] remove 7z format compression support
- [[#5891](https://github.com/apache/incubator-seata/pull/5891)] remove mariadb.jdbc dependency
- [[#5828](https://github.com/apache/incubator-seata/pull/5828)] fix codecov chart not display
- [[#5927](https://github.com/apache/incubator-seata/pull/5927)] optimize some scripts related to Apollo
- [[#5918](https://github.com/apache/incubator-seata/pull/5918)] standardized the properties of codecov.yml
- [[#5939](https://github.com/apache/incubator-seata/pull/5939)] support jmx port in seata

### security

- [[#5867](https://github.com/apache/incubator-seata/pull/5867)] fix npm package vulnerabilities
- [[#5898](https://github.com/apache/incubator-seata/pull/5898)] fix npm package vulnerabilities

### test

- [[#5888](https://github.com/apache/incubator-seata/pull/5888)] remove sofa test cases
- [[#5831](https://github.com/apache/incubator-seata/pull/5831)] upgrade druid and add `test-druid.yml`
- [[#5862](https://github.com/apache/incubator-seata/pull/5862)] fix unit test in java 21
- [[#5914](https://github.com/apache/incubator-seata/pull/5914)] upgrade native-lib-loader version
- [[#5960](https://github.com/apache/incubator-seata/pull/5960)] fix zookeeper UT failed
- [[#5981](https://github.com/apache/incubator-seata/pull/5981)] fixed jedis version for `seata-server`

Thanks to these contributors for their code commits. Please report an unintended omission.

<!-- Please make sure your Github ID is in the list below -->

- [slievrly](https://github.com/slievrly)
- [capthua](https://github.com/capthua)
- [funky-eyes](https://github.com/funky-eyes)
- [iquanzhan](https://github.com/iquanzhan)
- [leizhiyuan](https://github.com/leizhiyuan)
- [l81893521](https://github.com/l81893521)
- [PeppaO](https://github.com/PeppaO)
- [wangliang181230](https://github.com/wangliang181230)
- [hsien999](https://github.com/hsien999)

Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 1.7.1 (2023-09-05)

[source](https://github.com/apache/incubator-seata/archive/v1.7.1.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.7.1/seata-server-1.7.1.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.7.1

Seata 1.7.1 Released

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

### feature

- [[#5803](https://github.com/apache/incubator-seata/pull/5803)] docker image supports JVM parameter injection

### bugfix

- [[#5749](https://github.com/apache/incubator-seata/pull/5749)] case of the pk col-name in the business sql is inconsistent with the case in the table metadata, resulting in a rollback failure
- [[#5762](https://github.com/apache/incubator-seata/pull/5762)] change some fields type of TableMetaCache to avoid integer overflow
- [[#5769](https://github.com/apache/incubator-seata/pull/5769)] fix the problem that the parameter prefix requirement of the setAttachment method in sofa-rpc is not met
- [[#5814](https://github.com/apache/incubator-seata/pull/5814)] fix XA transaction start exception and rollback failure
- [[#5771](https://github.com/apache/incubator-seata/pull/5771)] insert executor keywords unescape
- [[#5819](https://github.com/apache/incubator-seata/pull/5814)] fix oracle column alias cannot find

### optimize

- [[#5804](https://github.com/apache/incubator-seata/pull/5804)] optimize docker default timezone
- [[#5815](https://github.com/apache/incubator-seata/pull/5815)] support the nacos application name property
- [[#5820](https://github.com/apache/incubator-seata/pull/5820)] unified log output directory
- [[#5822](https://github.com/apache/incubator-seata/pull/5822)] upgrade some deprecated github actions

### security

- [[#5728](https://github.com/apache/incubator-seata/pull/5728)] fix some dependencies vulnerability
- [[#5766](https://github.com/apache/incubator-seata/pull/5766)] fix some serializer vulnerabilities

Thanks to these contributors for their code commits. Please report an unintended omission.

<!-- Please make sure your Github ID is in the list below -->

- [slievrly](https://github.com/slievrly)
- [capthua](https://github.com/capthua)
- [robynron](https://github.com/robynron)
- [dmego](https://github.com/dmego)
- [xingfudeshi](https://github.com/xingfudeshi)
- [hadoop835](https://github.com/hadoop835)
- [funky-eyes](https://github.com/funky-eyes)
- [DroidEye2ONGU](https://github.com/DroidEye2ONGU)

Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 1.7.0 (2023-07-11)

[source](https://github.com/apache/incubator-seata/archive/v1.7.0.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.7.0/seata-server-1.7.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.7.0

Seata 1.7.0 Released

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

### feature

- [[#5476](https://github.com/apache/incubator-seata/pull/5476)] first support `native-image` for `seata-client`
- [[#5495](https://github.com/apache/incubator-seata/pull/5495)] console integration saga-statemachine-designer
- [[#5668](https://github.com/apache/incubator-seata/pull/5668)] compatible with file.conf and registry.conf configurations in version 1.4.2 and below

### bugfix

- [[#5682](https://github.com/apache/incubator-seata/pull/5682)] fix saga mode replay context lost startParams
- [[#5671](https://github.com/apache/incubator-seata/pull/5671)] fix saga mode serviceTask inputParams json autoType convert exception
- [[#5194](https://github.com/apache/incubator-seata/pull/5194)] fix wrong keyword order for oracle when creating a table
- [[#5021](https://github.com/apache/incubator-seata/pull/5201)] fix JDK Reflection for Spring origin proxy failed in JDK17
- [[#5023](https://github.com/apache/incubator-seata/pull/5203)] fix `seata-core` dependency transitive conflict in `seata-dubbo`
- [[#5224](https://github.com/apache/incubator-seata/pull/5224)] fix oracle initialize script index_name is duplicate
- [[#5233](https://github.com/apache/incubator-seata/pull/5233)] fix the inconsistent configuration item names related to LoadBalance
- [[#5266](https://github.com/apache/incubator-seata/pull/5265)] fix server console has queried the released lock
- [[#5245](https://github.com/apache/incubator-seata/pull/5245)] fix the incomplete dependency of distribution module
- [[#5239](https://github.com/apache/incubator-seata/pull/5239)] fix `getConfig` throw `ClassCastException` when use JDK proxy
- [[#5281](https://github.com/apache/incubator-seata/pull/5281)] parallel request handle throw IndexOutOfBoundsException
- [[#5288](https://github.com/apache/incubator-seata/pull/5288)] fix auto-increment of pk columns in Oracle in AT mode
- [[#5287](https://github.com/apache/incubator-seata/pull/5287)] fix auto-increment of pk columns in PostgreSQL in AT mode
- [[#5299](https://github.com/apache/incubator-seata/pull/5299)] fix GlobalSession deletion when retry rollback or retry commit timeout
- [[#5307](https://github.com/apache/incubator-seata/pull/5307)] fix that keywords don't add escaped characters
- [[#5311](https://github.com/apache/incubator-seata/pull/5311)] remove RollbackRetryTimeout sessions during in file storage recover
- [[#4734](https://github.com/apache/incubator-seata/pull/4734)] check if table meta cache should be refreshed in AT mode
- [[#5316](https://github.com/apache/incubator-seata/pull/5316)] fix G1 jvm parameter in jdk8
- [[#5321](https://github.com/apache/incubator-seata/pull/5321)] fix When the rollback logic on the TC side returns RollbackFailed, the custom FailureHandler is not executed
- [[#5332](https://github.com/apache/incubator-seata/pull/5332)] fix bugs found in unit tests
- [[#5145](https://github.com/apache/incubator-seata/pull/5145)] fix global session is always begin in saga mode
- [[#5413](https://github.com/apache/incubator-seata/pull/5413)] fix bad service configuration file and compilation failure
- [[#5415](https://github.com/apache/incubator-seata/pull/5415)] fix transaction timeout on client side not execute hook and failureHandler
- [[#5447](https://github.com/apache/incubator-seata/pull/5447)] fix oracle xa mode cannnot be used By same database
- [[#5472](https://github.com/apache/incubator-seata/pull/5472)] fix if using `@GlobalTransactional` in RM, `ShouldNeverHappenException` will be thrown
- [[#5535](https://github.com/apache/incubator-seata/pull/5535)] fix the log file path was loaded incorrectly
- [[#5538](https://github.com/apache/incubator-seata/pull/5538)] fix finished transaction swallows exception when committing
- [[#5539](https://github.com/apache/incubator-seata/pull/5539)] fix the full table scan issue with 'setDate' condition in Oracle 10g
- [[#5540](https://github.com/apache/incubator-seata/pull/5540)] fix GlobalStatus=9 can't be cleared in DB storage mode
- [[#5552](https://github.com/apache/incubator-seata/pull/5552)] fix mariadb rollback failed
- [[#5583](https://github.com/apache/incubator-seata/pull/5583)] fix grpc interceptor xid unbinding problem
- [[#5602](https://github.com/apache/incubator-seata/pull/5602)] fix log in participant transaction role
- [[#5645](https://github.com/apache/incubator-seata/pull/5645)] fix oracle insert undolog failed
- [[#5659](https://github.com/apache/incubator-seata/pull/5659)] fix the issue of case sensitivity enforcement on the database after adding escape characters to keywords
- [[#5663](https://github.com/apache/incubator-seata/pull/5663)] fix the timeout is null when the connectionProxyXA connection is reused
- [[#5675](https://github.com/apache/incubator-seata/pull/5675)] fix compatibility between xxx.grouplist and grouplist.xxx configuration items
- [[#5690](https://github.com/apache/incubator-seata/pull/5690)] fix console print `unauthorized error`
- [[#5711](https://github.com/apache/incubator-seata/pull/5711)] fix get configuration item contains underlined error

### optimize

- [[#5208](https://github.com/apache/incubator-seata/pull/5208)] optimize throwable getCause once more
- [[#5212](https://github.com/apache/incubator-seata/pull/5212)] optimize log message level
- [[#5237](https://github.com/apache/incubator-seata/pull/5237)] optimize exception log message print(EnhancedServiceLoader.loadFile#cahtch)
- [[#5089](https://github.com/apache/incubator-seata/pull/5089)] optimize the check of the delay value of the TCC fence log clean task
- [[#5243](https://github.com/apache/incubator-seata/pull/5243)] optimize kryo 5.4.0 optimize compatibility with jdk17
- [[#5153](https://github.com/apache/incubator-seata/pull/5153)] Only AT mode try to get channel with other app
- [[#5177](https://github.com/apache/incubator-seata/pull/5177)] If `server.session.enable-branch-async-remove` is true, delete the branch asynchronously and unlock it synchronously.
- [[#5273](https://github.com/apache/incubator-seata/pull/5273)] optimize the compilation configuration of the `protobuf-maven-plugin` plug-in to solve the problem of too long command lines in higher versions.
- [[#5303](https://github.com/apache/incubator-seata/pull/5303)] remove startup script the -Xmn configuration
- [[#5325](https://github.com/apache/incubator-seata/pull/5325)] add store mode,config type and registry type log info
- [[#5315](https://github.com/apache/incubator-seata/pull/5315)] optimize the log of SPI
- [[#5323](https://github.com/apache/incubator-seata/pull/5323)] add time info for global transaction timeout log
- [[#5414](https://github.com/apache/incubator-seata/pull/5414)] optimize transaction fail handler
- [[#5537](https://github.com/apache/incubator-seata/pull/5537)] optimize transaction log on client side
- [[#5541](https://github.com/apache/incubator-seata/pull/5541)] optimize server log output
- [[#5548](https://github.com/apache/incubator-seata/pull/5548)] update expire gpg key and publish workflow
- [[#5638](https://github.com/apache/incubator-seata/pull/5638)] optimize: set server's transaction level to READ_COMMITTED
- [[#5646](https://github.com/apache/incubator-seata/pull/5646)] refactor ColumnUtils and EscapeHandler
- [[#5648](https://github.com/apache/incubator-seata/pull/5648)] optimize server logs print
- [[#5647](https://github.com/apache/incubator-seata/pull/5647)] support case-sensitive attributes for table and column metadata
- [[#5678](https://github.com/apache/incubator-seata/pull/5678)] optimize escape character for case of columnNames
- [[#5684](https://github.com/apache/incubator-seata/pull/5684)] optimize github actions for CodeQL, skywalking-eyes and checkout
- [[#5700](https://github.com/apache/incubator-seata/pull/5700)] optimize distributed lock log

### security

- [[#5172](https://github.com/apache/incubator-seata/pull/5172)] fix some security vulnerabilities
- [[#5683](https://github.com/apache/incubator-seata/pull/5683)] add Hessian Serializer WhiteDenyList
- [[#5696](https://github.com/apache/incubator-seata/pull/5696)] fix several node.js security vulnerabilities

### test

- [[#5380](https://github.com/apache/incubator-seata/pull/5380)] fix UpdateExecutorTest failed
- [[#5382](https://github.com/apache/incubator-seata/pull/5382)] fix multi spring version test failed

Thanks to these contributors for their code commits. Please report an unintended omission.

<!-- Please make sure your Github ID is in the list below -->

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

Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

#### Link

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

Seata 1.6.1 Released

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

### feature

- [[#5115](https://github.com/apache/incubator-seata/pull/5115)] support for `spring-boot:3.x`

### bugfix

- [[#5179](https://github.com/apache/incubator-seata/pull/5179)] fix ClassNotFoundException when server starts using Eureka

### optimize

- [[#5120](https://github.com/apache/incubator-seata/pull/5120)] unify the format of configuration items in yml files
- [[#5180](https://github.com/apache/incubator-seata/pull/5180)] GlobalTransactionScanner,SeataAutoDataSourceProxyCreator declare @bean methods as static
- [[#5182](https://github.com/apache/incubator-seata/pull/5182)] fix some security vulnerabilities in GGEditor
- [[#5183](https://github.com/apache/incubator-seata/pull/5183)] optimize the default values for some switches

Thanks to these contributors for their code commits. Please report an unintended omission.

<!-- Please make sure your Github ID is in the list below -->

- [slievrly](https://github.com/slievrly)
- [wangliang181230](https://github.com/wangliang181230)
- [xingfudeshi](https://github.com/xingfudeshi)
- [whxxxxx](https://github.com/whxxxxx)
- [xssdpgy](https://github.com/xssdpgy)

Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

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

Seata 1.6.0 Released

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

### feature

- [[#4863](https://github.com/apache/incubator-seata/pull/4863)] support oracle and postgresql multi primary key
- [[#4649](https://github.com/apache/incubator-seata/pull/4649)] seata-server support multiple registry
- [[#4779](https://github.com/apache/incubator-seata/pull/4779)] support Apache Dubbo3
- [[#4479](https://github.com/apache/incubator-seata/pull/4479)] TCC mode supports tcc annotation marked on both interface and implementation class
- [[#4877](https://github.com/apache/incubator-seata/pull/4877)] seata client support jdk17
- [[#4914](https://github.com/apache/incubator-seata/pull/4914)] support mysql update join sql
- [[#4542](https://github.com/apache/incubator-seata/pull/4542)] support oracle timestamp types
- [[#5111](https://github.com/apache/incubator-seata/pull/5111)] support Nacos contextPath
- [[#4802](https://github.com/apache/incubator-seata/pull/4802)] dockerfile support arm64

### bugfix

- [[#4780](https://github.com/apache/incubator-seata/pull/4780)] fix can't post TimeoutRollbacked event after a successful timeout rollback
- [[#4954](https://github.com/apache/incubator-seata/pull/4954)] fix output expression incorrectly throws npe
- [[#4817](https://github.com/apache/incubator-seata/pull/4817)] fix in high version springboot property not Standard
- [[#4838](https://github.com/apache/incubator-seata/pull/4838)] fix when use Statement.executeBatch() can not generate undo log
- [[#4533](https://github.com/apache/incubator-seata/pull/4533)] fix rollback event repeated and some event status not correct
- [[#4912](https://github.com/apache/incubator-seata/pull/4912)] fix mysql InsertOnDuplicateUpdate column case is different and cannot be matched
- [[#4543](https://github.com/apache/incubator-seata/pull/4543)] fix support Oracle nclob types
- [[#4915](https://github.com/apache/incubator-seata/pull/4915)] fix failed to get server recovery properties
- [[#4919](https://github.com/apache/incubator-seata/pull/4919)] fix XID port and address null:0 before coordinator.init
- [[#4928](https://github.com/apache/incubator-seata/pull/4928)] fix rpcContext.getClientRMHolderMap NPE
- [[#4953](https://github.com/apache/incubator-seata/pull/4953)] fix InsertOnDuplicateUpdate bypass modify pk
- [[#4978](https://github.com/apache/incubator-seata/pull/4978)] fix kryo support circular reference
- [[#4874](https://github.com/apache/incubator-seata/pull/4874)] fix startup failure by using OpenJDK 11
- [[#5018](https://github.com/apache/incubator-seata/pull/5018)] fix loader path in startup scripts
- [[#5004](https://github.com/apache/incubator-seata/pull/5004)] fix duplicate image row for update join
- [[#5032](https://github.com/apache/incubator-seata/pull/5032)] fix mysql InsertOnDuplicateUpdate sql query error caused by placeholder index calculation error
- [[#5033](https://github.com/apache/incubator-seata/pull/5033)] fix null exception when sql columns is empty for insert on duplicate
- [[#5038](https://github.com/apache/incubator-seata/pull/5038)] remove @EnableConfigurationProperties(\{SagaAsyncThreadPoolProperties.class})
- [[#5050](https://github.com/apache/incubator-seata/pull/5050)] fix global session is not change to Committed in saga mode
- [[#5052](https://github.com/apache/incubator-seata/pull/5052)] fix update join condition placeholder param error
- [[#5031](https://github.com/apache/incubator-seata/pull/5031)] fix mysql InsertOnDuplicateUpdate should not use null index value as image sql query condition
- [[#5075](https://github.com/apache/incubator-seata/pull/5075)] fix InsertOnDuplicateUpdateExecutor could not intercept the sql which has no primary and unique key
- [[#5093](https://github.com/apache/incubator-seata/pull/5093)] fix access key loss after seata server restart
- [[#5092](https://github.com/apache/incubator-seata/pull/5092)] fix when seata and jpa are used together, their AutoConfiguration order is incorrect
- [[#5109](https://github.com/apache/incubator-seata/pull/5109)] fix NPE caused when there is no @GlobalTransactional annotation on the RM side
- [[#5098](https://github.com/apache/incubator-seata/pull/5098)] Druid disable oracle implicit cache
- [[#4860](https://github.com/apache/incubator-seata/pull/4860)] fix metrics tags coverage in the seata-server side
- [[#5028](https://github.com/apache/incubator-seata/pull/5028)] fix insert value null parsed as string in insert on duplicate SQL
- [[#5078](https://github.com/apache/incubator-seata/pull/5078)] fix could not intercept the sql witch has no primary and unique key
- [[#5097](https://github.com/apache/incubator-seata/pull/5097)] fix access key loss after server restart
- [[#5131](https://github.com/apache/incubator-seata/pull/5131)] fix rollback xa connection active state
- [[#5134](https://github.com/apache/incubator-seata/pull/5134)] fix hikari datasource auto proxy fail
- [[#5163](https://github.com/apache/incubator-seata/pull/5163)] fix bad service configuration file and compilation failure

### optimize

- [[#4774](https://github.com/apache/incubator-seata/pull/4774)] optimize mysql8 dependencies for seataio/seata-server image
- [[#4790](https://github.com/apache/incubator-seata/pull/4790)] Add a github action to publish Seata to OSSRH
- [[#4765](https://github.com/apache/incubator-seata/pull/4765)] mysql 8.0.29 not should be hold for connection
- [[#4750](https://github.com/apache/incubator-seata/pull/4750)] optimize unBranchLock romove xid
- [[#4797](https://github.com/apache/incubator-seata/pull/4797)] optimize the github actions
- [[#4800](https://github.com/apache/incubator-seata/pull/4800)] Add NOTICE as Apache License V2
- [[#4681](https://github.com/apache/incubator-seata/pull/4681)] optimize the check lock during global transaction
- [[#4761](https://github.com/apache/incubator-seata/pull/4761)] use hget replace hmget because only one field
- [[#4414](https://github.com/apache/incubator-seata/pull/4414)] exclude log4j dependencies
- [[#4836](https://github.com/apache/incubator-seata/pull/4836)] optimize BaseTransactionalExecutor#buildLockKey(TableRecords rowsIncludingPK) method more readable
- [[#4865](https://github.com/apache/incubator-seata/pull/4865)] fix some security vulnerabilities in GGEditor
- [[#4590](https://github.com/apache/incubator-seata/pull/4590)] auto degrade enable to dynamic configure
- [[#4490](https://github.com/apache/incubator-seata/pull/4490)] tccfence log table delete by index
- [[#4911](https://github.com/apache/incubator-seata/pull/4911)] add license checker workflow
- [[#4917](https://github.com/apache/incubator-seata/pull/4917)] upgrade package-lock.json fix vulnerabilities
- [[#4924](https://github.com/apache/incubator-seata/pull/4924)] optimize pom dependencies
- [[#4932](https://github.com/apache/incubator-seata/pull/4932)] extract the default values for some properties
- [[#4925](https://github.com/apache/incubator-seata/pull/4925)] optimize java doc warning
- [[#4921](https://github.com/apache/incubator-seata/pull/4921)] fix some vulnerabilities in console and upgrade skywalking-eyes
- [[#4936](https://github.com/apache/incubator-seata/pull/4936)] optimize read of storage configuration
- [[#4946](https://github.com/apache/incubator-seata/pull/4946)] pass the sqlexception to client when get lock
- [[#4962](https://github.com/apache/incubator-seata/pull/4962)] optimize build and fix the base image
- [[#4974](https://github.com/apache/incubator-seata/pull/4974)] optimize cancel the limit on the number of globalStatus queries in Redis mode
- [[#4981](https://github.com/apache/incubator-seata/pull/4981)] optimize tcc fence record not exists errMessage
- [[#4985](https://github.com/apache/incubator-seata/pull/4985)] fix undo_log id repeat
- [[#4995](https://github.com/apache/incubator-seata/pull/4995)] fix mysql InsertOnDuplicateUpdate duplicate pk condition in after image query sql
- [[#5047](https://github.com/apache/incubator-seata/pull/5047)] remove useless code
- [[#5051](https://github.com/apache/incubator-seata/pull/5051)] undo log dirty throw BranchRollbackFailed_Unretriable
- [[#5075](https://github.com/apache/incubator-seata/pull/5075)] intercept the InsertOnDuplicateUpdate statement which has no primary key and unique index value
- [[#5104](https://github.com/apache/incubator-seata/pull/5104)] remove the druid dependency in ConnectionProxy
- [[#5124](https://github.com/apache/incubator-seata/pull/5124)] support oracle on delete tccfence logs
- [[#4468](https://github.com/apache/incubator-seata/pull/4968)] support kryo 5.3.0
- [[#4807](https://github.com/apache/incubator-seata/pull/4807)] optimize docker image and oss publish
- [[#4445](https://github.com/apache/incubator-seata/pull/4445)] optimize transaction timeout judgment
- [[#4958](https://github.com/apache/incubator-seata/pull/4958)] do not execute triggerAfterCommit() if timeout
- [[#4582](https://github.com/apache/incubator-seata/pull/4582)] redis mode support sorted set by timeout
- [[#4963](https://github.com/apache/incubator-seata/pull/4963)] add ARM64 CI workflow
- [[#4434](https://github.com/apache/incubator-seata/pull/4434)] remove seata-server's CMS parameters

### test

- [[#4411](https://github.com/apache/incubator-seata/pull/4411)] add UT for oracle in AT mode
- [[#4794](https://github.com/apache/incubator-seata/pull/4794)] try to fix the test `DataSourceProxyTest.getResourceIdTest()`
- [[#5101](https://github.com/apache/incubator-seata/pull/5101)] fix ClassNotFoundException during the zk unit test

Thanks to these contributors for their code commits. Please report an unintended omission.

<!-- Please make sure your Github ID is in the list below -->

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

Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

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

Seata 1.5.2 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

### feature

- [[#4661](https://github.com/apache/incubator-seata/pull/4713)] support xid load balance
- [[#4676](https://github.com/apache/incubator-seata/pull/4676)] support server to expose Nacos services by mounting SLB
- [[#4642](https://github.com/apache/incubator-seata/pull/4642)] support batch message parallel processing
- [[#4567](https://github.com/apache/incubator-seata/pull/4567)] support where method condition(find_in_set)

### bugfix

- [[#4515](https://github.com/apache/incubator-seata/pull/4515)] fix the error of SeataTCCFenceAutoConfiguration when database unused
- [[#4661](https://github.com/apache/incubator-seata/pull/4661)] fix sql exception with PostgreSQL in module console
- [[#4667](https://github.com/apache/incubator-seata/pull/4682)] fix the exception in RedisTransactionStoreManager for update map During iteration
- [[#4678](https://github.com/apache/incubator-seata/pull/4678)] fix the error of key transport.enableRmClientBatchSendRequest cache penetration if not configure
- [[#4701](https://github.com/apache/incubator-seata/pull/4701)] fix missing command line args
- [[#4607](https://github.com/apache/incubator-seata/pull/4607)] fix bug on skipping lock check
- [[#4696](https://github.com/apache/incubator-seata/pull/4696)] fix oracle database insert value
- [[#4726](https://github.com/apache/incubator-seata/pull/4726)] fix batch message send may return NullPointException
- [[#4729](https://github.com/apache/incubator-seata/pull/4729)] fix set AspectTransactional.rollbackForClassName with wrong value
- [[#4653](https://github.com/apache/incubator-seata/pull/4653)] fix the sql exception when pk is non-numeric in INSERT_ON_DUPLICATE SQL

### optimize

- [[#4650](https://github.com/apache/incubator-seata/pull/4650)] fix some security vulnerabilities
- [[#4670](https://github.com/apache/incubator-seata/pull/4670)] optimize the thread pool size of branchResultMessageExecutor
- [[#4662](https://github.com/apache/incubator-seata/pull/4662)] optimize rollback transaction metrics
- [[#4693](https://github.com/apache/incubator-seata/pull/4693)] optimize the console navigation bar
- [[#4700](https://github.com/apache/incubator-seata/pull/4700)] fix maven-compiler-plugin and maven-resources-plugin execute failed
- [[#4711](https://github.com/apache/incubator-seata/pull/4711)] separate lib dependencies for deployments
- [[#4720](https://github.com/apache/incubator-seata/pull/4720)] optimize pom description
- [[#4728](https://github.com/apache/incubator-seata/pull/4728)] upgrade logback dependency to 1.2.9
- [[#4745](https://github.com/apache/incubator-seata/pull/4745)] support mysql8 in release package
- [[#4626](https://github.com/apache/incubator-seata/pull/4626)] Replace `flatten-maven-plugin` with `easyj-maven-plugin` to fix the conflict between `shade` and `flatten`
- [[#4629](https://github.com/apache/incubator-seata/pull/4629)] check relation of before status and after status when updating global session
- [[#4662](https://github.com/apache/incubator-seata/pull/4662)] make EnhancedServiceLoader more readable

### test

- [[#4544](https://github.com/apache/incubator-seata/pull/4544)] optimize jackson dependencies in TransactionContextFilterTest
- [[#4731](https://github.com/apache/incubator-seata/pull/4731)] fix UT failed in AsyncWorkerTest and LockManagerTest

Thanks to these contributors for their code commits. Please report an unintended omission.

<!-- Please make sure your Github ID is in the list below -->

- [slievrly](https://github.com/slievrly)
- [pengten](https://github.com/pengten)
- [YSF-A](https://github.com/YSF-A)
- [tuwenlin](https://github.com/tuwenlin)
- [Ifdevil](https://github.com/Ifdevil)
- [wingchi-leung](https://github.com/wingchi-leung)
- [liurong](https://github.com/robynron)
- [opelok-z](https://github.com/opelok-z)
- [funky-eyes](https://github.com/funky-eyes)
- [2129zxl](https://github.com/2129zxl)
- [Smery-lxm](https://github.com/Smery-lxm)
- [doubleDimple](https://github.com/doubleDimple)
- [wangliang181230](https://github.com/wangliang181230)
- [Bughue](https://github.com/Bughue)
- [AYue-94](https://github.com/AYue-94)
- [lingxiao-wu](https://github.com/lingxiao-wu)
- [caohdgege](https://github.com/caohdgege)

Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 1.5.1 (2021-05-17)

[source](https://github.com/apache/incubator-seata/archive/v1.5.1.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.5.1/seata-server-1.5.1.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### feature

- [[#4115](https://github.com/apache/incubator-seata/pull/4115) ] support console management
- [[#3472](https://github.com/apache/incubator-seata/pull/3472) ] add redisLocker's lua mode
- [[#3575](https://github.com/apache/incubator-seata/pull/3575) ] support the mixed use of different storages of locks and sessions
- [[#3374](https://github.com/apache/incubator-seata/pull/3374) ] add a Executor for INSERT ON DUPLICATE KEY UPDATE
- [[#3642](https://github.com/apache/incubator-seata/pull/3642) ] provide an api to share tcc phase-1's params to phase-2
- [[#3064](https://github.com/apache/incubator-seata/pull/3064) ] support configuring the order of the TM and TCC interceptor
- [[#2852](https://github.com/apache/incubator-seata/pull/2852) ] support configuring scan target for GlobalTransactionScanner
- [[#3683](https://github.com/apache/incubator-seata/pull/3683) ] support redis distributed lock to prevent multi TC competition
- [[#3545](https://github.com/apache/incubator-seata/pull/3545) ] TCC mode support idempotent and anti hanging
- [[#3009](https://github.com/apache/incubator-seata/pull/3009) ] support server start with springboot and config with application.yaml
- [[#3652](https://github.com/apache/incubator-seata/pull/3652) ] support APM with SkyWalking
- [[#3823](https://github.com/apache/incubator-seata/pull/3823) ] TCC mode supports customized parameters list of the method in phase two
- [[#3642](https://github.com/apache/incubator-seata/pull/3642) ] TCC mode's try method supports passing `BusinessActionContext` implicitly
- [[#3856](https://github.com/apache/incubator-seata/pull/3856) ] support edas-hsf RPC framework
- [[#3880](https://github.com/apache/incubator-seata/pull/3880) ] contributing md support chinese.
- [[#2568](https://github.com/apache/incubator-seata/pull/2568) ] support GlobalTransactionInterceptor expression
- [[#3886](https://github.com/apache/incubator-seata/pull/3886) ] support the registry center network preferences
- [[#3869](https://github.com/apache/incubator-seata/pull/3869) ] support get configuration from environment
- [[#3906](https://github.com/apache/incubator-seata/pull/3906) ] support SPI unload
- [[#3668](https://github.com/apache/incubator-seata/pull/3668) ] support kotlin coroutine
- [[#3968](https://github.com/apache/incubator-seata/pull/3968) ] support brpc-java RPC framework
- [[#4134](https://github.com/apache/incubator-seata/pull/4134) ] init the console basic code
- [[#4268](https://github.com/apache/incubator-seata/pull/4268) ] query global session in the file mode
- [[#4281](https://github.com/apache/incubator-seata/pull/4281) ] query global session and global lock in the redis mode
- [[#4293](https://github.com/apache/incubator-seata/pull/4293) ] get global lock in the file mode
- [[#4335](https://github.com/apache/incubator-seata/pull/4335) ] Realize configuration center upload configuration interactive script (nacos,etcd3)
- [[#4360](https://github.com/apache/incubator-seata/pull/4360) ] Realize configuration center upload configuration interactive script (apollo,consul,zk)
- [[#4320](https://github.com/apache/incubator-seata/pull/4320) ] realize the interface of console: get global session and global lock in the db mode
- [[#4435](https://github.com/apache/incubator-seata/pull/4435) ] console front-end page implementation
- [[#4480](https://github.com/apache/incubator-seata/pull/4480) ] implementation of DefaultAuthSigner
- [[#3870](https://github.com/apache/incubator-seata/pull/3870) ] make seata-bom be the real Bill-Of-Material
- [[#3487](https://github.com/apache/incubator-seata/pull/3487) ] add db realization for distribute lock
- [[#3889](https://github.com/apache/incubator-seata/pull/3889) ] registry add heartbeat
- [[#3951](https://github.com/apache/incubator-seata/pull/3951) ] support zstd compressor
- [[#2838](https://github.com/apache/incubator-seata/pull/2838) ] Saga support auto configuration in the spring boot project

### bugfix

- [[#3497](https://github.com/apache/incubator-seata/pull/3497) ] fix tcc phase two response timeout exception
- [[#3686](https://github.com/apache/incubator-seata/pull/3686) ] fix NPE and wrong cluster name of Apollo
- [[#3702](https://github.com/apache/incubator-seata/pull/3702) ] fix some comments
- [[#3716](https://github.com/apache/incubator-seata/pull/3716) ] fix the problem in the findTargetClass method
- [[#3717](https://github.com/apache/incubator-seata/pull/3717) ] fix typo of interval
- [[#3773](https://github.com/apache/incubator-seata/pull/3773) ] fix consul not found tc cluster
- [[#3695](https://github.com/apache/incubator-seata/pull/3695) ] fix mariadb unable to create XA connection
- [[#3783](https://github.com/apache/incubator-seata/pull/3783) ] fix the problem that store mode does not take effect
- [[#3740](https://github.com/apache/incubator-seata/pull/3740) ] fix that `LocalThread` is not cleared when the `Saga` transaction ends
- [[#3792](https://github.com/apache/incubator-seata/pull/3792) ] fix the Server can't find redis-host property
- [[#3828](https://github.com/apache/incubator-seata/pull/3828) ] fix StringUtils StackOverflowError
- [[#3817](https://github.com/apache/incubator-seata/pull/3817) ] fix TC SkyWalking topo calling node not gather
- [[#3803](https://github.com/apache/incubator-seata/pull/3803) ] fix ReflectionUtil throw unexpected exception
- [[#3879](https://github.com/apache/incubator-seata/pull/3879) ] fix postgresql multi schema throw not found channel exception
- [[#3881](https://github.com/apache/incubator-seata/pull/3881) ] fix getConfig with different default value return the first
- [[#3897](https://github.com/apache/incubator-seata/pull/3897) ] fix LocalDataTime type in FastjsonUndoLogParser can't be rollback
- [[#3901](https://github.com/apache/incubator-seata/pull/3901) ] fix seataio/seata-server servlet-api conflict
- [[#3931](https://github.com/apache/incubator-seata/pull/3931) ] fix the wrong path and filename when dump the jvm memory for analysis
- [[#3978](https://github.com/apache/incubator-seata/pull/3978) ] fix NPE cause by future timeout
- [[#4266](https://github.com/apache/incubator-seata/pull/4266) ] fix register branch and release lock failed when the size of rows that modified is greater than 1000 in oracle
- [[#3949](https://github.com/apache/incubator-seata/pull/3949) ] fix the problem that `nacos-config.py` will not skip blank options. fix bug that split options may cause content loss
- [[#3988](https://github.com/apache/incubator-seata/pull/3988) ] fix the problem that nacos not found user when password has special characters
- [[#3998](https://github.com/apache/incubator-seata/pull/3998) ] fix the NPE of jedis multi.exec
- [[#4011](https://github.com/apache/incubator-seata/pull/4011) ] fix can not get properties of distributed-lock-table in springboot
- [[#4025](https://github.com/apache/incubator-seata/pull/4025) ] fix potential database resource leak
- [[#4023](https://github.com/apache/incubator-seata/pull/4023) ] fix the problem that the xid is not cleared in some scenes of dubbo
- [[#4039](https://github.com/apache/incubator-seata/pull/4039) ] fix RM did not clear XID after the local transaction threw an exception
- [[#4032](https://github.com/apache/incubator-seata/pull/4032) ] fix ApplicationContext already closed problem when Seata server using ShutdownHook to destroy
- [[#4074](https://github.com/apache/incubator-seata/pull/4074) ] fix prevents XA mode resource suspension
- [[#4107](https://github.com/apache/incubator-seata/pull/4107) ] fix deadlock problems during project construction
- [[#4158](https://github.com/apache/incubator-seata/pull/4158) ] fix the logback can't load the `RPC_PORT`
- [[#4162](https://github.com/apache/incubator-seata/pull/4162) ] fix correct built-in properties for redis registry
- [[#4165](https://github.com/apache/incubator-seata/pull/4165) ] fix `StringUtils.toString(obj)` throw `ClassCastException` when the obj is primitive data array
- [[#4169](https://github.com/apache/incubator-seata/pull/4169) ] fix xa mode originalConnection has been closed, cause PhaseTwo fail to execute
- [[#4177](https://github.com/apache/incubator-seata/pull/4177) ] fix the problem of accidentally releasing the global lock
- [[#4174](https://github.com/apache/incubator-seata/pull/4174) ] fix delete undo log connection already closed
- [[#4189](https://github.com/apache/incubator-seata/pull/4189) ] fix the `kafka-appender.xml` and `logstash-appender.xml`
- [[#4213](https://github.com/apache/incubator-seata/pull/4213) ] fix code for "sessionMode" not execute problem
- [[#4220](https://github.com/apache/incubator-seata/pull/4220) ] fix some problems with `zstd` compressor and add the version of the `kotlin-maven-plugin`
- [[#4222](https://github.com/apache/incubator-seata/pull/4222) ] fix could not rollback when insert field list is empty
- [[#4253](https://github.com/apache/incubator-seata/pull/4253) ] update executor store the actually modified columns but not only the columns in set condition
- [[#4276](https://github.com/apache/incubator-seata/pull/4276) ] fix seata-test module UT not work
- [[#4278](https://github.com/apache/incubator-seata/pull/4278) ] fix the problem that mysql's Blob/Clob/NClob data type cannot be deserialized
- [[#4302](https://github.com/apache/incubator-seata/pull/4302) ] fix the problem that other ORMs may not be able to obtain the auto-incrementing primary key value
- [[#4233](https://github.com/apache/incubator-seata/pull/4233) ] fix data remanence problems in lock and branch under specific circumstances.
- [[#4308](https://github.com/apache/incubator-seata/pull/4308) ] fix the TableMetaCache parsing problem with the same table under multiple Postgresql schemas
- [[#4326](https://github.com/apache/incubator-seata/pull/4326) ] fix inability to build Executor when using mariadb driver
- [[#4355](https://github.com/apache/incubator-seata/pull/4355) ] fix mysql-loadbalance resource id error
- [[#4310](https://github.com/apache/incubator-seata/pull/4310) ] fix the problem that failed to obtain the self increment ID of MySQL database through "select last_insert_id"
- [[#4331](https://github.com/apache/incubator-seata/pull/4331) ] fix dirty write check exception that may occur when using ONLY_CARE_UPDATE_COLUMNS configuration
- [[#4228](https://github.com/apache/incubator-seata/pull/4228) ] fix resource suspension in xa mode caused by choose other ip as channel alternative
- [[#4408](https://github.com/apache/incubator-seata/pull/4408) ] fix the invalid environment variable in container env
- [[#4441](https://github.com/apache/incubator-seata/pull/4441) ] fix the problem that pipelined resources are not closed in redis mode and add branchSession judge branchSessions is not null
- [[#4438](https://github.com/apache/incubator-seata/pull/4438) ] fix the problem that GlobalSession could not be deleted normally in the case of delayed deletion in the file mode of the develop branch
- [[#4432](https://github.com/apache/incubator-seata/pull/4432) ] fix the inability to get some remote configurations
- [[#4452](https://github.com/apache/incubator-seata/pull/4452) ] fix the change log of 'service.disableGlobalTransaction' config
- [[#4449](https://github.com/apache/incubator-seata/pull/4449) ] fix redis mode page npe and optimize get globalSession on average
- [[#4459](https://github.com/apache/incubator-seata/pull/4459) ] fix the failure to obtain before image and after image on oracle and pgsql of the develop branch
- [[#4471](https://github.com/apache/incubator-seata/pull/4471) ] in branch 'develop', fix the error when service.vgroupMapping change
- [[#4474](https://github.com/apache/incubator-seata/pull/4474) ] fix Mysql multi-bit Bit type field rollback error
- [[#4492](https://github.com/apache/incubator-seata/pull/4492) ] fix the failure to update cluster list dynamically when use eureka of the develop branch
- [[#4535](https://github.com/apache/incubator-seata/pull/4535) ] fix FileSessionManagerTest fail
- [[#4561](https://github.com/apache/incubator-seata/pull/4561) ] fix allSessions/findGlobalSessions may return null and cause npe
- [[#4505](https://github.com/apache/incubator-seata/pull/4505) ] fix fastjson serialization of time data types
- [[#4579](https://github.com/apache/incubator-seata/pull/4579) ] fix prepareUndoLogAll of MySQLInsertOrUpdateExecutor
- [[#4005](https://github.com/apache/incubator-seata/pull/4005) ] fix PK constraint name isn't the same as the unique index name which is belong to PK
- [[#4062](https://github.com/apache/incubator-seata/pull/4062) ] fix saga complex parameter deserialization problem
- [[#4199](https://github.com/apache/incubator-seata/pull/4199) ] fix rpc tm request timeout
- [[#4352](https://github.com/apache/incubator-seata/pull/4352) ] fix some problem of the sql parser
- [[#4487](https://github.com/apache/incubator-seata/pull/4487) ] fix remove Pagination hideOnlyOnePage attribute
- [[#4449](https://github.com/apache/incubator-seata/pull/4449) ] fix optimize redis limit and fix redis page bug
- [[#4608](https://github.com/apache/incubator-seata/pull/4608) ] fix test case
- [[#3110](https://github.com/apache/incubator-seata/pull/3110) ] fix the problem of unit test

### optimize

- [[#4163](https://github.com/apache/incubator-seata/pull/4163) ] improve CONTRIBUTING docs
- [[#3678](https://github.com/apache/incubator-seata/pull/3678) ] supplement missing configuration and new version documents
- [[#3654](https://github.com/apache/incubator-seata/pull/3654) ] fix typo,applicationContex -> applicationContext
- [[#3615](https://github.com/apache/incubator-seata/pull/3615) ] asynchronous deletion after the transaction is committed
- [[#3687](https://github.com/apache/incubator-seata/pull/3687) ] fix the case that could not retry acquire global lock
- [[#3689](https://github.com/apache/incubator-seata/pull/3689) ] modify the attribute prefix in the file file.properties
- [[#3528](https://github.com/apache/incubator-seata/pull/3528) ] optimize the memory footprint of redis mode
- [[#3700](https://github.com/apache/incubator-seata/pull/3700) ] optimize the speed of buildLockKey
- [[#3588](https://github.com/apache/incubator-seata/pull/3588) ] optimize the logic of datasource auto proxy
- [[#3626](https://github.com/apache/incubator-seata/pull/3626) ] remove repeat change status
- [[#3722](https://github.com/apache/incubator-seata/pull/3722) ] add the basic code of distributed lock
- [[#3713](https://github.com/apache/incubator-seata/pull/3713) ] unified the default value of enableClientBatchSendRequest
- [[#3120](https://github.com/apache/incubator-seata/pull/3120) ] optimize `Configuration` and add unit tests
- [[#3735](https://github.com/apache/incubator-seata/pull/3735) ] do not load `LoadBalance` if not necessary
- [[#3770](https://github.com/apache/incubator-seata/pull/3770) ] close the `Closeable` and optimize some code
- [[#3627](https://github.com/apache/incubator-seata/pull/3627) ] use TreeMap instead of the LinkedHashMap in TableMeta to compatible high level MySQL
- [[#3760](https://github.com/apache/incubator-seata/pull/3760) ] opt the logback's config of `seata-server`
- [[#3765](https://github.com/apache/incubator-seata/pull/3765) ] Transfer the operation of adding configuration class from 'AutoConfiguration' to 'EnvironmentPostProcessor'
- [[#3730](https://github.com/apache/incubator-seata/pull/3730) ] Refactoring the code of TCC mode
- [[#3820](https://github.com/apache/incubator-seata/pull/3820) ] add column `action_name` to the `tcc_fence_log`
- [[#3738](https://github.com/apache/incubator-seata/pull/3738) ] `JacksonUndoLogParser` supports to parsing `LocalDateTime`
- [[#3794](https://github.com/apache/incubator-seata/pull/3794) ] optimize the packaging of `seata-server`
- [[#3795](https://github.com/apache/incubator-seata/pull/3795) ] optimize zk registry lookup performance
- [[#3840](https://github.com/apache/incubator-seata/pull/3840) ] optimiza `apm-skwalking` operation method to generate rules
- [[#3834](https://github.com/apache/incubator-seata/pull/3834) ] optimize `seata-distribution` add `apm-seata-skywalking`
- [[#3847](https://github.com/apache/incubator-seata/pull/3847) ] optimize ConcurrentHashMap.newKeySet replace ConcurrentSet
- [[#3311](https://github.com/apache/incubator-seata/pull/3311) ] supports reading all configurations from a single Consul key
- [[#3849](https://github.com/apache/incubator-seata/pull/3849) ] optimize string concat
- [[#3890](https://github.com/apache/incubator-seata/pull/3890) ] optimize only the inserted fields are checked
- [[#3895](https://github.com/apache/incubator-seata/pull/3895) ] optimize decode exception
- [[#3898](https://github.com/apache/incubator-seata/pull/3898) ] add jib-maven-plugin
- [[#3904](https://github.com/apache/incubator-seata/pull/3904) ] ehance metrics and fix seata-server UT not work
- [[#3212](https://github.com/apache/incubator-seata/pull/3212) ] optimize recognize sql in limit and order by
- [[#3905](https://github.com/apache/incubator-seata/pull/3905) ] optimize nacos-config.sh to support ash
- [[#3935](https://github.com/apache/incubator-seata/pull/3935) ] optimize Send redis command at one time using pipeline
- [[#3916](https://github.com/apache/incubator-seata/pull/3916) ] optimize determine whether the server in the register is alive
- [[#3918](https://github.com/apache/incubator-seata/pull/3918) ] cache reflection results of the fields and methods
- [[#3898](https://github.com/apache/incubator-seata/pull/3898) ] add jib-maven-plugin
- [[#3907](https://github.com/apache/incubator-seata/pull/3907) ] optimize set server port
- [[#3912](https://github.com/apache/incubator-seata/pull/3912) ] support config JVM param in env
- [[#3939](https://github.com/apache/incubator-seata/pull/3939) ] use map instead of if else judge for more change in the future
- [[#3955](https://github.com/apache/incubator-seata/pull/3955) ] add a start banner for seata
- [[#3954](https://github.com/apache/incubator-seata/pull/3954) ] replace @Deprecated getOwnernName to getOwnerName in druid
- [[#3981](https://github.com/apache/incubator-seata/pull/3981) ] optimize service port priority
- [[#4013](https://github.com/apache/incubator-seata/pull/4013) ] optimize channel alive check
- [[#3982](https://github.com/apache/incubator-seata/pull/3982) ] optimize readme doc and upgrade some dependencies
- [[#3949](https://github.com/apache/incubator-seata/pull/3949) ] `nacos-config.py` support default parameters and optional input parameters
- [[#3991](https://github.com/apache/incubator-seata/pull/3991) ] disable listening in the FileConfiguration center in Springboot
- [[#3994](https://github.com/apache/incubator-seata/pull/3994) ] Optimize the mechanism of periodically deleting tasks in the `tcc_fence_log` table
- [[#3327](https://github.com/apache/incubator-seata/pull/3327) ] supports reading all configurations from a single Etcd3 key
- [[#4001](https://github.com/apache/incubator-seata/pull/4001) ] support to read YML configuration from Nacos, Zookeeper, Consul, Etcd3
- [[#4017](https://github.com/apache/incubator-seata/pull/4017) ] optimize file configuration
- [[#4018](https://github.com/apache/incubator-seata/pull/4018) ] optimize Apollo configuration
- [[#4021](https://github.com/apache/incubator-seata/pull/4021) ] optimize Nacos、Consul、Zookeeper、Etcd3 configuration
- [[#4034](https://github.com/apache/incubator-seata/pull/4034) ] optimize Nacos, Consul, Zookeeper and Etcd3 configuration Junit test Class
- [[#4055](https://github.com/apache/incubator-seata/pull/4055) ] optimize NetUtil#getLocalAddress0
- [[#4086](https://github.com/apache/incubator-seata/pull/4086) ] optimize lazily load branch transactions and task scheduling
- [[#4056](https://github.com/apache/incubator-seata/pull/4056) ] optimize the DurationUtil
- [[#4103](https://github.com/apache/incubator-seata/pull/4103) ] optimize AbstractLockManager#collectRowLocks logic
- [[#3733](https://github.com/apache/incubator-seata/pull/3733) ] optimize acquire lock logic
- [[#4144](https://github.com/apache/incubator-seata/pull/4144) ] support default configuration of tx-service-group
- [[#4157](https://github.com/apache/incubator-seata/pull/4157) ] optimize client batch sending.
- [[#4191](https://github.com/apache/incubator-seata/pull/4191) ] support rpc timeout can be customized.
- [[#4216](https://github.com/apache/incubator-seata/pull/4216) ] no more attempt to clean undolog for none AT mode
- [[#4176](https://github.com/apache/incubator-seata/pull/4176) ] use expire key instead hash when using redis as registry center.
- [[#4196](https://github.com/apache/incubator-seata/pull/4196) ] tc batch response to client.
- [[#4212](https://github.com/apache/incubator-seata/pull/4212) ] optimize the interface of the console
- [[#4237](https://github.com/apache/incubator-seata/pull/4237) ] skip check lock when all the before image is empty
- [[#4251](https://github.com/apache/incubator-seata/pull/4251) ] optimize partial code handling
- [[#4262](https://github.com/apache/incubator-seata/pull/4262) ] optimize tcc module code handling
- [[#4235](https://github.com/apache/incubator-seata/pull/4235) ] optimize instance saved in eureka
- [[#4277](https://github.com/apache/incubator-seata/pull/4277) ] optimize acquire lock return fail-fast code in redis-pipeline mode.
- [[#4284](https://github.com/apache/incubator-seata/pull/4284) ] support authentication of MSE-Nacos with ak/sk
- [[#4299](https://github.com/apache/incubator-seata/pull/4299) ] optimize exceptions to make them friendly
- [[#4300](https://github.com/apache/incubator-seata/pull/4300) ] optimize let DefaultCoordinator invoke NettyRemotingServer's close method,no longer closed by ServerRunner
- [[#4270](https://github.com/apache/incubator-seata/pull/4270) ] improve the performance of global commit and global rollback, asynchronous branch transaction cleanup
- [[#4307](https://github.com/apache/incubator-seata/pull/4307) ] when in TCC mode there is no need to delete global locks
- [[#4303](https://github.com/apache/incubator-seata/pull/4303) ] `tcc_fence_log` table hanging log records are deleted asynchronously
- [[#4328](https://github.com/apache/incubator-seata/pull/4328) ] upload configuration script support comments
- [[#4305](https://github.com/apache/incubator-seata/pull/4305) ] optimize acquire global lock fail error log print on tc
- [[#4336](https://github.com/apache/incubator-seata/pull/4336) ] add SQL exception prompt not supported by AT mode
- [[#4359](https://github.com/apache/incubator-seata/pull/4359) ] support configuration metadata read from environment variables
- [[#4247](https://github.com/apache/incubator-seata/pull/4247) ] add tests for `java17` and `springboot` in the `github/actions`
- [[#4353](https://github.com/apache/incubator-seata/pull/4353) ] Slimming down for the `seata-all.jar`
- [[#4393](https://github.com/apache/incubator-seata/pull/4393) ] skip reload for redis & db mode
- [[#4400](https://github.com/apache/incubator-seata/pull/4400) ] asynchronous tasks handle global transactions in parallel
- [[#4391](https://github.com/apache/incubator-seata/pull/4391) ] commit/rollback retry timeout event
- [[#4409](https://github.com/apache/incubator-seata/pull/4409) ] add copyright header to test classes
- [[#4282](https://github.com/apache/incubator-seata/pull/4282) ] optimize build UndoItem logic
- [[#4407](https://github.com/apache/incubator-seata/pull/4407) ] file mode does not require lazy processing of sessions
- [[#4436](https://github.com/apache/incubator-seata/pull/4436) ] optimize global session query in file mode
- [[#4431](https://github.com/apache/incubator-seata/pull/4431) ] limit the number of queries in Redis storage mode
- [[#4465](https://github.com/apache/incubator-seata/pull/4465) ] optimize client version transfer in tc batch response to client mode.
- [[#4469](https://github.com/apache/incubator-seata/pull/4469) ] optimize the way to get configuration in DB mode of console
- [[#4478](https://github.com/apache/incubator-seata/pull/4478) ] optimize Nacos config and naming properties
- [[#4522](https://github.com/apache/incubator-seata/pull/4522) ] optimize GC parameters in JVM
- [[#4517](https://github.com/apache/incubator-seata/pull/4517) ] enhance fail/timeout status metric and log level
- [[#4451](https://github.com/apache/incubator-seata/pull/4451) ] filesessionmanager changed to singleton and optimized task thread pool processing
- [[#4551](https://github.com/apache/incubator-seata/pull/4551) ] optimize metrics rt statistics
- [[#4574](https://github.com/apache/incubator-seata/pull/4574) ] support accessKey/secretKey auto configuration
- [[#4583](https://github.com/apache/incubator-seata/pull/4583) ] use HmacSHA256 instead of HmacSHA1 for ram signature
- [[#4591](https://github.com/apache/incubator-seata/pull/4591) ] optimize the default value of the switch
- [[#3780](https://github.com/apache/incubator-seata/pull/3780) ] optimize upgrade the Druid version
- [[#3797](https://github.com/apache/incubator-seata/pull/3797) ] optimize support instance `BusinessActionContext` outside the TCC try method
- [[#3909](https://github.com/apache/incubator-seata/pull/3909) ] optimize `collectRowLocks` method
- [[#3763](https://github.com/apache/incubator-seata/pull/3763) ] optimize github actions
- [[#4345](https://github.com/apache/incubator-seata/pull/4345) ] optimize fix the path of the package
- [[#4346](https://github.com/apache/incubator-seata/pull/4346) ] optimize the log of the server and remove lombok
- [[#4348](https://github.com/apache/incubator-seata/pull/4348) ] optimize Unified management the versions of maven-plugin
- [[#4354](https://github.com/apache/incubator-seata/pull/4354) ] optimize the tests of `SAGA`
- [[#4227](https://github.com/apache/incubator-seata/pull/4227) ] optimize the versions of the dependencies
- [[#4403](https://github.com/apache/incubator-seata/pull/4403) ] optimize disable `SAGA` tests
- [[#4453](https://github.com/apache/incubator-seata/pull/4453) ] optimize upgrade eureka-clients and xstream dependencies
- [[#4481](https://github.com/apache/incubator-seata/pull/4481) ] optimize nacos config and naming properties
- [[#4477](https://github.com/apache/incubator-seata/pull/4477) ] optimize debug log and fix typo
- [[#4484](https://github.com/apache/incubator-seata/pull/4484) ]optimize the log of TM/RM register
- [[#3874](https://github.com/apache/incubator-seata/pull/4484) ] optimize Add logo of registered enterprise,and Change image source to Alicdn
- [[#4458](https://github.com/apache/incubator-seata/pull/4458) ] optimize fix the README.md of metrices module
- [[#4482](https://github.com/apache/incubator-seata/pull/4482) ] optimize remove duplicated word

Thanks to these contributors for their code commits. Please report an unintended omission.

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

Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

</details>

### 1.4.2 (2021-04-26)

[source](https://github.com/apache/incubator-seata/archive/v1.4.2.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.4.2/seata-server-1.4.2.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.4.2

Seata 1.4.2 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

### feature

- [[#2933](https://github.com/apache/incubator-seata/pull/2933)] add antlr for mysql sqlparser
- [[#3228](https://github.com/apache/incubator-seata/pull/3228)] support custom serialization plugin
- [[#3172](https://github.com/apache/incubator-seata/pull/3172)] support undo_loge compression mode in AT
- [[#3372](https://github.com/apache/incubator-seata/pull/3372)] Saga support customize whether update last retry log
- [[#3411](https://github.com/apache/incubator-seata/pull/3411)] support seata-server thread pool parameters configuration
- [[#3348](https://github.com/apache/incubator-seata/pull/3348)] support redis sentinel storage mode in TC
- [[#2667](https://github.com/apache/incubator-seata/pull/2667)] support password decryption when using db and redis storage mode
- [[#3427](https://github.com/apache/incubator-seata/pull/3427)] add distributed lock interface
- [[#3443](https://github.com/apache/incubator-seata/pull/3443)] support send the `seata-server` log to `logstash` or `kafka`
- [[#3486](https://github.com/apache/incubator-seata/pull/3486)] add transaction service group for metric
- [[#3317](https://github.com/apache/incubator-seata/pull/3317)] support to obtain multiple configurations through a single node when using zookeeper as configuration center
- [[#3516](https://github.com/apache/incubator-seata/pull/3516)] support acl-token when consul is used registry and configuration center
- [[#3116](https://github.com/apache/incubator-seata/pull/3116)] support configuring apollo configService and cluster
- [[#3468](https://github.com/apache/incubator-seata/pull/3468)] saga support loop execution on state
- [[#3447](https://github.com/apache/incubator-seata/pull/3447)] support Transaction context printing in logging framework

### bugfix

- [[#3258](https://github.com/apache/incubator-seata/pull/3258)] fix AsyncWorker potential OOM problem
- [[#3293](https://github.com/apache/incubator-seata/pull/3293)] fix configuration cache get value type mismatch exception
- [[#3241](https://github.com/apache/incubator-seata/pull/3241)] forbidden use order by or limit in multi sql
- [[#3406](https://github.com/apache/incubator-seata/pull/3406)] fix the value can not be push to nacos when special charset in config.txt
- [[#3418](https://github.com/apache/incubator-seata/pull/3418)] fix getGeneratedKeys may get history pk
- [[#3408](https://github.com/apache/incubator-seata/pull/3408)] fix the NPE problem of jar running mode when the third-dependency on separate packaging
- [[#3431](https://github.com/apache/incubator-seata/pull/3431)] fix property bean may not be initialized when reading configuration
- [[#3413](https://github.com/apache/incubator-seata/pull/3413)] fix the logic of rollback to savepoint and release to savepoint
- [[#3367](https://github.com/apache/incubator-seata/pull/3367)] when the xa branch is rollback, it cannot be executed due to idle state
- [[#3448](https://github.com/apache/incubator-seata/pull/3448)] reduce unnecessary competition and remove missing locks
- [[#3451](https://github.com/apache/incubator-seata/pull/3451)] fix set auto-commit to true when local transactions are not being used. Failure to compete for a lock causes the global transaction to exit, invaliding the global row lock and dirty writing of the data.
- [[#3481](https://github.com/apache/incubator-seata/pull/3481)] fix seata node refresh failure because of consul client throws exceptions
- [[#3491](https://github.com/apache/incubator-seata/pull/3491)] fix typo in README.md
- [[#3531](https://github.com/apache/incubator-seata/pull/3531)] fix the NPE of RedisTransactionStoreManager when get branch transactions
- [[#3500](https://github.com/apache/incubator-seata/pull/3500)] fix oracle and postgreSQL can't query column info
- [[#3560](https://github.com/apache/incubator-seata/pull/3560)] fix the problem that the asynchronous task of the transactions in the committing state has no time threshold and cannot recover the transaction
- [[#3555](https://github.com/apache/incubator-seata/pull/3555)] do not call setBlob to invalid the jdbc exception
- [[#3540](https://github.com/apache/incubator-seata/pull/3540)] fix server distribution missing files
- [[#3597](https://github.com/apache/incubator-seata/pull/3597)] fix the possible NPE
- [[#3568](https://github.com/apache/incubator-seata/pull/3568)] fix automatic datasource agent caused by ConcurrentHashMap.computeIfAbsent Deadlock problem
- [[#3402](https://github.com/apache/incubator-seata/pull/3402)] fix the problem that the updated column cannot be resolved because the field name in the updated SQL contains the database name
- [[#3464](https://github.com/apache/incubator-seata/pull/3464)] fix test case NPE and StackTraceLogger's log.
- [[#3522](https://github.com/apache/incubator-seata/pull/3522)] fix register branch and store undolog when AT branch does not need compete lock
- [[#3635](https://github.com/apache/incubator-seata/pull/3635)] fix pushing notification failed when the configuration changed in zookeeper
- [[#3133](https://github.com/apache/incubator-seata/pull/3133)] fix the case that could not retry acquire global lock
- [[#3156](https://github.com/apache/incubator-seata/pull/3156)] optimize the logic of SpringProxyUtils.findTargetClass

### optimize

- [[#3341](https://github.com/apache/incubator-seata/pull/3341)] optimize the format of the path to the specified configuration file
- [[#3385](https://github.com/apache/incubator-seata/pull/3385)] optimize github action and fix unit test failure
- [[#3175](https://github.com/apache/incubator-seata/pull/3175)] improve UUIDGenerator using "history time" version of snowflake algorithm
- [[#3291](https://github.com/apache/incubator-seata/pull/3291)] mysql jdbc connect param
- [[#3336](https://github.com/apache/incubator-seata/pull/3336)] support using System.getProperty to get netty config property
- [[#3369](https://github.com/apache/incubator-seata/pull/3369)] add github action secrets env for dockerHub
- [[#3343](https://github.com/apache/incubator-seata/pull/3343)] Migrate CI provider from Travis CI to Github Actions
- [[#3397](https://github.com/apache/incubator-seata/pull/3397)] add the change records folder
- [[#3303](https://github.com/apache/incubator-seata/pull/3303)] supports reading all configurations from a single Nacos dataId
- [[#3380](https://github.com/apache/incubator-seata/pull/3380)] globalTransactionScanner listener optimize
- [[#3123](https://github.com/apache/incubator-seata/pull/3123)] optimize the packing strategy of seata-server
- [[#3415](https://github.com/apache/incubator-seata/pull/3415)] optimize maven clean plugin to clear the distribution directory
- [[#3316](https://github.com/apache/incubator-seata/pull/3316)] optimize the property bean may not be initialized while reading config value
- [[#3420](https://github.com/apache/incubator-seata/pull/3420)] optimize enumerated classes and add unit tests
- [[#3533](https://github.com/apache/incubator-seata/pull/3533)] added interface to get current transaction role
- [[#3436](https://github.com/apache/incubator-seata/pull/3436)] optimize typo in SQLType class
- [[#3439](https://github.com/apache/incubator-seata/pull/3439)] adjust the order of springApplicationContextProvider so that it can be called before the XML bean
- [[#3248](https://github.com/apache/incubator-seata/pull/3248)] optimize the config of load-balance migration to belong the client node
- [[#3441](https://github.com/apache/incubator-seata/pull/3441)] optimize the auto-configuration processing of starter
- [[#3466](https://github.com/apache/incubator-seata/pull/3466)] String comparison uses equalsIgnoreCase()
- [[#3476](https://github.com/apache/incubator-seata/pull/3476)] support when the server parameter passed is hostname, it will be automatically converted to IP
- [[#3236](https://github.com/apache/incubator-seata/pull/3236)] optimize the conditions for executing unlocking
- [[#3485](https://github.com/apache/incubator-seata/pull/3485)] optimize useless codes in ConfigurationFactory
- [[#3505](https://github.com/apache/incubator-seata/pull/3505)] optimize useless if judgments in the GlobalTransactionScanner class
- [[#3544](https://github.com/apache/incubator-seata/pull/3544)] optimize the get pks by auto when auto generated keys is false
- [[#3549](https://github.com/apache/incubator-seata/pull/3549)] unified the length of xid in different tables when using DB storage mode
- [[#3551](https://github.com/apache/incubator-seata/pull/3551)] make RETRY_DEAD_THRESHOLD bigger and configurable
- [[#3589](https://github.com/apache/incubator-seata/pull/3589)] Changed exception check by JUnit API usage
- [[#3601](https://github.com/apache/incubator-seata/pull/3601)] make `LoadBalanceProperties` compatible with `spring-boot:2.x` and above
- [[#3513](https://github.com/apache/incubator-seata/pull/3513)] Saga SpringBeanService invoker support switch json parser
- [[#3318](https://github.com/apache/incubator-seata/pull/3318)] make CLIENT_TABLE_META_CHECKER_INTERVAL configurable
- [[#3371](https://github.com/apache/incubator-seata/pull/3371)] add applicationId for metric
- [[#3459](https://github.com/apache/incubator-seata/pull/3459)] remove duplicate validAddress code
- [[#3215](https://github.com/apache/incubator-seata/pull/3215)] opt the reload during startup in file mode
- [[#3631](https://github.com/apache/incubator-seata/pull/3631)] optimize nacos-config.py parameter
- [[#3638](https://github.com/apache/incubator-seata/pull/3638)] optimize the error when use update or delete with join in sql
- [[#3523](https://github.com/apache/incubator-seata/pull/3523)] optimize release savepoint when use oracle
- [[#3458](https://github.com/apache/incubator-seata/pull/3458)] reversion the deleted md
- [[#3574](https://github.com/apache/incubator-seata/pull/3574)] repair Spelling errors in comments in EventBus.java files
- [[#3573](https://github.com/apache/incubator-seata/pull/3573)] fix designer directory path in README.md
- [[#3662](https://github.com/apache/incubator-seata/pull/3662)] update gpg key
- [[#3664](https://github.com/apache/incubator-seata/pull/3664)] optimize some javadocs
- [[#3637](https://github.com/apache/incubator-seata/pull/3637)] register the participating companies and pull request information

### test

- [[#3381](https://github.com/apache/incubator-seata/pull/3381)] test case for tmClient
- [[#3607](https://github.com/apache/incubator-seata/pull/3607)] fixed bugs in EventBus unit tests
- [[#3579](https://github.com/apache/incubator-seata/pull/3579)] add test case for StringFormatUtils
- [[#3365](https://github.com/apache/incubator-seata/pull/3365)] optimize ParameterParserTest test case failed
- [[#3359](https://github.com/apache/incubator-seata/pull/3359)] remove unused test case
- [[#3578](https://github.com/apache/incubator-seata/pull/3578)] fix UnfinishedStubbing Exception in unit test case
- [[#3383](https://github.com/apache/incubator-seata/pull/3383)] optimize StatementProxyTest unit test

Thanks to these contributors for their code commits. Please report an unintended omission.

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

Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

</details>

### 1.4.1 (2021-02-08)

[source](https://github.com/apache/incubator-seata/archive/v1.4.1.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.4.1/seata-server-1.4.1.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.4.1

Seata 1.4.1 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

### feature

- [[#3238](https://github.com/apache/incubator-seata/pull/3238)] add deflater support for seata compressor

### bugfix

- [[#2879](https://github.com/apache/incubator-seata/pull/2879)] fix deadlock during springboot project startup
- [[#3296](https://github.com/apache/incubator-seata/pull/3296)] when mixed use of AT and TCC, AT branchs is not deleted
- [[#3254](https://github.com/apache/incubator-seata/pull/3254)] clear the listener map of zk registry
- [[#3309](https://github.com/apache/incubator-seata/pull/3309)] Saga statemachine definition json cannot enable jackson parser, and when no choice matched in choice state will throw NPE
- [[#3287](https://github.com/apache/incubator-seata/pull/3287)] throw exception when update pk
- [[#3323](https://github.com/apache/incubator-seata/pull/3323)] clean root context when state machine inst record failed
- [[#3281](https://github.com/apache/incubator-seata/pull/3281)] fix wrong status when exception
- [[#2949](https://github.com/apache/incubator-seata/pull/2949)] fix throw NPE when get the state list
- [[#3351](https://github.com/apache/incubator-seata/pull/3351)] fix throw IllegalArgumentException when use hystrix when using SCA 2.2.3.RELEASE and below
- [[#3349](https://github.com/apache/incubator-seata/pull/3349)] the problem test case
- [[#3325](https://github.com/apache/incubator-seata/pull/3325)] fix retry commit unsuccess when record subMachineInst failed
- [[#3357](https://github.com/apache/incubator-seata/pull/3357)] fix deploy staging rule check failed

### optimize

- [[#3188](https://github.com/apache/incubator-seata/pull/3188)] Local variable 'map' is redundant and check queue offer return value
- [[#3247](https://github.com/apache/incubator-seata/pull/3247)] change client.log.exceptionRate to log.exceptionRate
- [[#3260](https://github.com/apache/incubator-seata/pull/3260)] use PriorityQueue to simply ShutdownHook
- [[#3319](https://github.com/apache/incubator-seata/pull/3319)] delete unnecessary @Sharable
- [[#3313](https://github.com/apache/incubator-seata/pull/3313)] replace StringBuffer to StringBuilder
- [[#3335](https://github.com/apache/incubator-seata/pull/3335)] modify TransactionPropagationInterceptor name
- [[#3310](https://github.com/apache/incubator-seata/pull/3310)] enable NamedThreadFactory to get ThreadGroup from the SecurityManager or Current thread
- [[#3320](https://github.com/apache/incubator-seata/pull/3320)] load balance strategy use constants
- [[#3345](https://github.com/apache/incubator-seata/pull/3345)] adjust GlobalLockTemplateTest

Thanks to these contributors for their code commits. Please report an unintended omission.

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

Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

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

Seata 1.4.0 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

### feature

- [[#2380](https://github.com/apache/incubator-seata/pull/2380)] support yml configuration
- [[#3191](https://github.com/apache/incubator-seata/pull/3191)] support jdbc type nclob
- [[#2676](https://github.com/apache/incubator-seata/pull/2676)] support least active load balance
- [[#3198](https://github.com/apache/incubator-seata/pull/3198)] spring boot support for custom config and registry type
- [[#2806](https://github.com/apache/incubator-seata/pull/2806)] support configuring default global transaction timeoutMillis
- [[#2941](https://github.com/apache/incubator-seata/pull/2941)] add apollo secret key configuration
- [[#2080](https://github.com/apache/incubator-seata/pull/2080)] support ConsistentHashLoadBalance
- [[#2950](https://github.com/apache/incubator-seata/pull/2950)] support the reentrant lock in redis module
- [[#2913](https://github.com/apache/incubator-seata/pull/2913)] The data source proxy mode can be selected as AT or XA
- [[#2856](https://github.com/apache/incubator-seata/pull/2856)] support for undoLog using Fst serialization
- [[#3076](https://github.com/apache/incubator-seata/pull/3076)] check lock in TC when use @GlobalLock
- [[#2825](https://github.com/apache/incubator-seata/pull/2825)] support send authentication msg
- [[#2962](https://github.com/apache/incubator-seata/pull/2962)] @GlobalTransactional and @GlobalLock can support customize lock retry config

### bugfix

- [[#3214](https://github.com/apache/incubator-seata/pull/3214)] fix the 'RootContext.DEFAULT_BRANCH_TYPE' is wrong in some cases
- [[#3129](https://github.com/apache/incubator-seata/pull/3129)] forbidding execute SQL which update pk value
- [[#3205](https://github.com/apache/incubator-seata/pull/3205)] fix can not get boolean value in configuration
- [[#3170](https://github.com/apache/incubator-seata/pull/3170)] the disposables tree set won't accept another Disposable with the same priority
- [[#3180](https://github.com/apache/incubator-seata/pull/3180)] serializer fst package name error
- [[#3178](https://github.com/apache/incubator-seata/pull/3178)] remove next line to space
- [[#2929](https://github.com/apache/incubator-seata/pull/2929)] fix the application was configured to degrade at startup and can't be dynamically switch to upgraded
- [[#3050](https://github.com/apache/incubator-seata/pull/3050)] fix fetch before images when delete and update statements
- [[#2935](https://github.com/apache/incubator-seata/pull/2935)] fix saga designer bug that the property box does not switch when switching nodes
- [[#3140](https://github.com/apache/incubator-seata/pull/3140)] fix Propagation.REQUIRES_NEW and add some comments
- [[#3130](https://github.com/apache/incubator-seata/pull/3130)] fix some problems in the automatic data source proxy
- [[#3148](https://github.com/apache/incubator-seata/pull/3148)] the redis lock key and the session key has conflict
- [[#3136](https://github.com/apache/incubator-seata/pull/3136)] fix the redis pipeline
- [[#2551](https://github.com/apache/incubator-seata/pull/2551)] Saga can't be used when the dataSource is AT's dataSourceProxy
- [[#3073](https://github.com/apache/incubator-seata/pull/3073)] do not proxy connections without an xid
- [[#3074](https://github.com/apache/incubator-seata/pull/3074)] There is no need to retry if the XA schema cannot find the XID
- [[#3097](https://github.com/apache/incubator-seata/pull/3097)] fix HttpAutoConfiguration always instantiation in springboot env
- [[#3071](https://github.com/apache/incubator-seata/pull/3071)] part of the connection is not unpacked
- [[#3056](https://github.com/apache/incubator-seata/pull/3056)] fixed a bug that after branch deletion, there are still remaining branch lock
- [[#3025](https://github.com/apache/incubator-seata/pull/3025)] fix the wrong package path
- [[#3031](https://github.com/apache/incubator-seata/pull/3031)] redis locker delete lock incomplete
- [[#2973](https://github.com/apache/incubator-seata/pull/2973)] fix oracle database in field size over 1000
- [[#2986](https://github.com/apache/incubator-seata/pull/2986)] fix checkstyle plugin can't exclude single file
- [[#2910](https://github.com/apache/incubator-seata/pull/2910)] fix error registry type comment
- [[#2914](https://github.com/apache/incubator-seata/pull/2914)] fix branchType not cleaned when consumer is in TCC mode
- [[#2926](https://github.com/apache/incubator-seata/pull/2926)] fastjson write undo log not parser
- [[#2897](https://github.com/apache/incubator-seata/pull/2897)] fix jedis unlock fail
- [[#2918](https://github.com/apache/incubator-seata/pull/2918)] fix the isolation problem when rollback in AT mode
- [[#2972](https://github.com/apache/incubator-seata/pull/2972)] UUIDGenerator generates duplicated id
- [[#2932](https://github.com/apache/incubator-seata/pull/2932)] nacos-config.py script could not run with namespace
- [[#2900](https://github.com/apache/incubator-seata/pull/2900)] ColumnUtils add escape with scheme
- [[#2904](https://github.com/apache/incubator-seata/pull/2904)] fix getConfig cache value is 'null'
- [[#2890](https://github.com/apache/incubator-seata/pull/2890)] fix misspelling in statelang examples
- [[#3040](https://github.com/apache/incubator-seata/pull/3040)] fix repeated commit when autocommit is false
- [[#3230](https://github.com/apache/incubator-seata/pull/3230)] fix use @EnableAutoDataSourceProxy startup failed
- [[#2979](https://github.com/apache/incubator-seata/pull/2979)] columns of resultset integrated with sharingjdbc need to be lowercase
- [[#3233](https://github.com/apache/incubator-seata/pull/3233)] fix Collections NPE
- [[#3242](https://github.com/apache/incubator-seata/pull/3242)] fix batch sql getTableMeta error
- [[#3246](https://github.com/apache/incubator-seata/pull/3246)] fix the exception when limit condition contains VariantRefExpr

### optimize

- [[#3062](https://github.com/apache/incubator-seata/pull/3062)] refactor the redis session store
- [[#3201](https://github.com/apache/incubator-seata/pull/3201)] optimize the wrong stack not fully display
- [[#3117](https://github.com/apache/incubator-seata/pull/3117)] make log more clearly and remove the useless code
- [[#3134](https://github.com/apache/incubator-seata/pull/3134)] optimize codes related to Map and List
- [[#3195](https://github.com/apache/incubator-seata/pull/3195)] optimize XID related codes
- [[#3200](https://github.com/apache/incubator-seata/pull/3200)] optimize rpc message when message was substring
- [[#3186](https://github.com/apache/incubator-seata/pull/3186)] remove duplicated in string utils
- [[#3162](https://github.com/apache/incubator-seata/pull/3162)] remove repeated conditional tests
- [[#2969](https://github.com/apache/incubator-seata/pull/2969)] upgrade to druid 1.1.23
- [[#3141](https://github.com/apache/incubator-seata/pull/3141)] upgrade nacos and FastJSON dependencies
- [[#3118](https://github.com/apache/incubator-seata/pull/3118)] add more configuration tips in additional-spring-configuration-metadata.json
- [[#2597](https://github.com/apache/incubator-seata/pull/2597)] judging xid status to avoid repeated processing
- [[#3102](https://github.com/apache/incubator-seata/pull/3102)] optimize ContextCore, can be set 'Object' value
- [[#3016](https://github.com/apache/incubator-seata/pull/3016)] refactor the redis lock string to hash
- [[#3046](https://github.com/apache/incubator-seata/pull/3046)] remove unused code in serializer factory
- [[#3053](https://github.com/apache/incubator-seata/pull/3053)] jedis pool adds maxtotal configuration
- [[#3012](https://github.com/apache/incubator-seata/pull/3012)] remove set port repeatedly
- [[#2978](https://github.com/apache/incubator-seata/pull/2978)] optimize globalCommit for mixed use of AT and TCC
- [[#2967](https://github.com/apache/incubator-seata/pull/2967)] replace with lambda
- [[#2968](https://github.com/apache/incubator-seata/pull/2968)] ensure that the register message is sent after RM client initialization
- [[#2945](https://github.com/apache/incubator-seata/pull/2945)] optimize async commit and reduce one update
- [[#2952](https://github.com/apache/incubator-seata/pull/2952)] optimize additional-spring-configuration-metadata.json
- [[#2920](https://github.com/apache/incubator-seata/pull/2920)] optimize some grammatical errors
- [[#2906](https://github.com/apache/incubator-seata/pull/2906)] added some configuration items to keep consistent with official documents
- [[#3222](https://github.com/apache/incubator-seata/pull/3222)] optimize fileListener to decrease cpu time usage
- [[#2843](https://github.com/apache/incubator-seata/pull/2843)] removed Reloadable from the redis/db SessionManager
- [[#3209](https://github.com/apache/incubator-seata/pull/3209)] add using company logos

  Thanks to these contributors for their code commits. Please report an unintended omission.

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

  Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

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

Seata 1.3.0 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

### feature

- [[#2398](https://github.com/apache/incubator-seata/pull/2398)] support multi pk for MySQL
- [[#2484](https://github.com/apache/incubator-seata/pull/2484)] store mode support redis
- [[#2817](https://github.com/apache/incubator-seata/pull/2817)] Saga StateMachine engine and Designer support Groovy Script Task
- [[#2646](https://github.com/apache/incubator-seata/pull/2646)] server support for HikariCP
- [[#2253](https://github.com/apache/incubator-seata/pull/2253)] support for dynamic upgrade and downgrade
- [[#2565](https://github.com/apache/incubator-seata/pull/2565)] support for transaction annotations on classes
- [[#2510](https://github.com/apache/incubator-seata/pull/2510)] support LZ4 compressor
- [[#2622](https://github.com/apache/incubator-seata/pull/2622)] support version valid check
- [[#2658](https://github.com/apache/incubator-seata/pull/2658)] dataSources support different permissions of Oracle users
- [[#2620](https://github.com/apache/incubator-seata/pull/2620)] support group configuration in Nacos registry
- [[#2699](https://github.com/apache/incubator-seata/pull/2699)] compatible with ACM
- [[#2509](https://github.com/apache/incubator-seata/pull/2509)] support for undo full data columns on update operate
- [[#2584](https://github.com/apache/incubator-seata/pull/2584)] StateHandlerInterceptor and StateRouterInterceptor support SPI
- [[#2808](https://github.com/apache/incubator-seata/pull/2808)] server check auth support SPI
- [[#2616](https://github.com/apache/incubator-seata/pull/2616)] TCC adapter for Dubbo And Sofa reference annotation
- [[#2831](https://github.com/apache/incubator-seata/pull/2831)] Saga support jackson json parser
- [[#2554](https://github.com/apache/incubator-seata/pull/2554)] support zk serializer
- [[#2708](https://github.com/apache/incubator-seata/pull/2708)] support jdbc type array, datalink etc
- [[#2412](https://github.com/apache/incubator-seata/pull/2412)] xid generation strategy support snowflake
- [[#2611](https://github.com/apache/incubator-seata/pull/2611)] support the cache of configuration values

### bugfix

- [[#2893](https://github.com/apache/incubator-seata/pull/2893)] fix get table meta failed in postgresql
- [[#2887](https://github.com/apache/incubator-seata/pull/2887)] fix rm client receive response logic
- [[#2610](https://github.com/apache/incubator-seata/pull/2610)] nacos-script adapt to Nacos 1.2 on permission control
- [[#2588](https://github.com/apache/incubator-seata/pull/2588)] fix when the check_style does not pass, no detail information output
- [[#2543](https://github.com/apache/incubator-seata/pull/2543)] fix ApplicationKeeper ShutdownHook signal invalid.
- [[#2598](https://github.com/apache/incubator-seata/pull/2598)] fix unable to register Nacos
- [[#2618](https://github.com/apache/incubator-seata/pull/2618)] fix could not create folder in zookeeper
- [[#2628](https://github.com/apache/incubator-seata/pull/2628)] fix get tableName and alias error in mysql delete
- [[#2639](https://github.com/apache/incubator-seata/pull/2639)] fix Apollo configuration load fail due to camel style
- [[#2629](https://github.com/apache/incubator-seata/pull/2629)] fix duplicated resource id with different currentSchema in PostgreSQL
- [[#2659](https://github.com/apache/incubator-seata/pull/2659)] fix mysql insert use select last_insert_id is undo_log id value
- [[#2670](https://github.com/apache/incubator-seata/pull/2670)] fix dataSource initialize more times
- [[#2617](https://github.com/apache/incubator-seata/pull/2617)] fix incorrect getAnnotation about class and method
- [[#2603](https://github.com/apache/incubator-seata/pull/2603)] fix can't get generated keys value.
- [[#2725](https://github.com/apache/incubator-seata/pull/2725)] fix other expression before insert row primary key.
- [[#2698](https://github.com/apache/incubator-seata/pull/2698)] fix nested GlobalLock unbind prematurely
- [[#2755](https://github.com/apache/incubator-seata/pull/2755)] fix not return value when branchCommit and branchRollback throw exception
- [[#2777](https://github.com/apache/incubator-seata/pull/2777)] fix can't rollback when set rollback retry count was zero.
- [[#2812](https://github.com/apache/incubator-seata/pull/2812)] fix get PostgreSQL tableMeta error when using shardingSphere
- [[#2760](https://github.com/apache/incubator-seata/pull/2760)] fix TM rollback fail throw the seata exception, rollback retrying throw NPE
- [[#2837](https://github.com/apache/incubator-seata/pull/2837)] fix wrong constant used in the saga SubStateMachineHandler
- [[#2839](https://github.com/apache/incubator-seata/pull/2839)] fix business exception is lost when compensation succeed in saga mode
- [[#2650](https://github.com/apache/incubator-seata/pull/2650)] fix TCC and Saga branches will also parse SQL in AbstractConnectionProxy
- [[#2850](https://github.com/apache/incubator-seata/pull/2850)] Fix Saga designer rounded polylines cause page crashes
- [[#2868](https://github.com/apache/incubator-seata/pull/2868)] fix can't find AsyncEventBus dependency
- [[#2871](https://github.com/apache/incubator-seata/pull/2871)] fix get tableMeta failed when table name like 'schame'.'table'
- [[#2685](https://github.com/apache/incubator-seata/pull/2685)] fix oracle insert sql use sysdate error.
- [[#2872](https://github.com/apache/incubator-seata/pull/2872)] fix missing escape char in the primary key for the undo sql
- [[#2875](https://github.com/apache/incubator-seata/pull/2875)] fix ColumnUtils delEscape with scheme error

### optimize

- [[#2573](https://github.com/apache/incubator-seata/pull/2573)] replace Random with ThreadLocalRandom in RandomLoadBalance
- [[#2540](https://github.com/apache/incubator-seata/pull/2540)] refactor rpc request method and rpc interface
- [[#2642](https://github.com/apache/incubator-seata/pull/2642)] optimize unsafe double-checked locking in SofaRegistryServiceImpl
- [[#2561](https://github.com/apache/incubator-seata/pull/2561)] keep the same logic of get tableMeta
- [[#2591](https://github.com/apache/incubator-seata/pull/2591)] support the default timeout for zookeeper register
- [[#2601](https://github.com/apache/incubator-seata/pull/2601)] repackage spring-boot-starter
- [[#2415](https://github.com/apache/incubator-seata/pull/2415)] distinguish database behavior according to the branch type
- [[#2647](https://github.com/apache/incubator-seata/pull/2647)] remove the unused variable
- [[#2649](https://github.com/apache/incubator-seata/pull/2649)] optimize get tableMeta
- [[#2652](https://github.com/apache/incubator-seata/pull/2652)] consul supports custom port
- [[#2660](https://github.com/apache/incubator-seata/pull/2660)] modify IdWorker position to make it reasonable
- [[#2625](https://github.com/apache/incubator-seata/pull/2625)] polish testing code, replace with `Mockito.verify`
- [[#2666](https://github.com/apache/incubator-seata/pull/2666)] add using users organization logos
- [[#2680](https://github.com/apache/incubator-seata/pull/2680)] Change GlobalTransactionalInterceptor to singleton
- [[#2683](https://github.com/apache/incubator-seata/pull/2683)] optimize TccActionInterceptor log print
- [[#2477](https://github.com/apache/incubator-seata/pull/2477)] refactoring client request processing logic.
- [[#2280](https://github.com/apache/incubator-seata/pull/2280)] refactor InsertExecutor
- [[#2044](https://github.com/apache/incubator-seata/pull/2044)] optimize ColumnUtils.addEscape method performance
- [[#2730](https://github.com/apache/incubator-seata/pull/2730)] optimize get config type from configuration
- [[#2723](https://github.com/apache/incubator-seata/pull/2723)] optimize get tableMeta in postgreSql
- [[#2734](https://github.com/apache/incubator-seata/pull/2734)] change postgreSql driver scope to provide
- [[#2749](https://github.com/apache/incubator-seata/pull/2749)] optimize logger class misWrite
- [[#2751](https://github.com/apache/incubator-seata/pull/2751)] copy jdbc driver to image
- [[#2759](https://github.com/apache/incubator-seata/pull/2759)] optimized the generation rules of thread name factory
- [[#2607](https://github.com/apache/incubator-seata/pull/2607)] support insert pkValue support check
- [[#2765](https://github.com/apache/incubator-seata/pull/2765)] optimize the processing logic of XA's RM for unsupported transaction resources.
- [[#2771](https://github.com/apache/incubator-seata/pull/2771)] disable unstable unit tests
- [[#2779](https://github.com/apache/incubator-seata/pull/2779)] CollectionUtils.decodeMap method variables ConcurrentHashMap refact to HashMap
- [[#2486](https://github.com/apache/incubator-seata/pull/2486)] refactor server handle request process logic from client
- [[#2770](https://github.com/apache/incubator-seata/pull/2770)] TCC two phase method return type supports void
- [[#2788](https://github.com/apache/incubator-seata/pull/2788)] optimize server log pattern and support for colored log
- [[#2816](https://github.com/apache/incubator-seata/pull/2816)] optimize create clazz instance
- [[#2787](https://github.com/apache/incubator-seata/pull/2787)] modify workerId generation method
- [[#2776](https://github.com/apache/incubator-seata/pull/2776)] optimize paramsPlaceHolder generate by StringUtils.repeat()
- [[#2799](https://github.com/apache/incubator-seata/pull/2799)] code opt format
- [[#2829](https://github.com/apache/incubator-seata/pull/2829)] downgrade check unlock and asynchronous
- [[#2842](https://github.com/apache/incubator-seata/pull/2842)] code opt format about the sqls and typos
- [[#2242](https://github.com/apache/incubator-seata/pull/2242)] optimize PreparedStatementProxy initialization logic
- [[#2613](https://github.com/apache/incubator-seata/pull/2613)] fix typo and some coding guidelines

  Thanks to these contributors for their code commits. Please report an unintended omission.

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

  Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

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

Seata 1.2.0 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

### feature

- [[#2381](https://github.com/apache/incubator-seata/pull/2381)] support XA transaction mode
- [[#2206](https://github.com/apache/incubator-seata/pull/2206)] support REQUIRED、REQUIRES_NEW、SUPPORTS and NOT_SUPPORTED transaction propagation
- [[#2112](https://github.com/apache/incubator-seata/pull/2112)] support batch update and delete with multiple sql
- [[#2275](https://github.com/apache/incubator-seata/pull/2275)] support hsf on TCC transaction mode
- [[#2108](https://github.com/apache/incubator-seata/pull/2108)] support zip bzip2 7z compressor
- [[#2328](https://github.com/apache/incubator-seata/pull/2328)] support for isolated loading of mysql 5.x and 8.x jdbc drivers classes
- [[#2367](https://github.com/apache/incubator-seata/pull/2367)] add permission configuration support for Nacos 1.2
- [[#2359](https://github.com/apache/incubator-seata/pull/2359)] support propagation.never, propagation.mandatory and transaction suspend and resume api
- [[#2418](https://github.com/apache/incubator-seata/pull/2418)] support fst serialization
- [[#2135](https://github.com/apache/incubator-seata/pull/2135)] support SPI scope
- [[#2370](https://github.com/apache/incubator-seata/pull/2370)] support failureHandler implement can be read from the container
- [[#2481](https://github.com/apache/incubator-seata/pull/2481)] support the max wait configuration for db
- [[#2379](https://github.com/apache/incubator-seata/pull/2379)] support custom service name when registering with Nacos
- [[#2308](https://github.com/apache/incubator-seata/pull/2308)] add switch to control whether to register branch on Saga transaction mode
- [[#2301](https://github.com/apache/incubator-seata/pull/2301)] support default expr and nextval for postgresql

### bugfix

- [[#2575](https://github.com/apache/incubator-seata/pull/2575)] fix executeBatch can not get targetSql in Statement mode
- [[#2283](https://github.com/apache/incubator-seata/pull/2283)] fix oracle get tableMeta fail
- [[#2312](https://github.com/apache/incubator-seata/pull/2312)] fix the judgement of configuration condition
- [[#2309](https://github.com/apache/incubator-seata/pull/2309)] fix timestamp deserialize lost nano
- [[#2292](https://github.com/apache/incubator-seata/pull/2292)] fix some configuration not converted to camel style
- [[#2306](https://github.com/apache/incubator-seata/pull/2306)] fix deprecated maven prerequisites
- [[#2287](https://github.com/apache/incubator-seata/pull/2287)] fix connection context can't be remove when global lock retry
- [[#2361](https://github.com/apache/incubator-seata/pull/2361)] fix the error configuration name
- [[#2333](https://github.com/apache/incubator-seata/pull/2333)] fix wrong exception information when rollback fails due to dirty data
- [[#2390](https://github.com/apache/incubator-seata/pull/2390)] fix configuration item containing spaces
- [[#2408](https://github.com/apache/incubator-seata/pull/2408)] fix missing sequence in undo_log table
- [[#2391](https://github.com/apache/incubator-seata/pull/2391)] fix configuration exceptions lead to increased CPU usage
- [[#2427](https://github.com/apache/incubator-seata/pull/2427)] fix StringUtils.toString(o) StackOverflowError
- [[#2384](https://github.com/apache/incubator-seata/pull/2384)] fix StateMachineRepository#getStateMachineById will replace the last version in cache
- [[#2323](https://github.com/apache/incubator-seata/pull/2323)] fix wrong proxy of datasource bean
- [[#2466](https://github.com/apache/incubator-seata/pull/2466)] fix memory visibility of active attribute in file mode
- [[#2349](https://github.com/apache/incubator-seata/pull/2349)] fix insert sql primary key value support check
- [[#2479](https://github.com/apache/incubator-seata/pull/2479)] fix postgresql schema when not use lowerCase
- [[#2449](https://github.com/apache/incubator-seata/pull/2449)] fix can't get table structure when startup
- [[#2505](https://github.com/apache/incubator-seata/pull/2505)] fix bug of session store path value judgment
- [[#2456](https://github.com/apache/incubator-seata/pull/2456)] fix server encode request error
- [[#2495](https://github.com/apache/incubator-seata/pull/2495)] fix the NPE and reduce the request when lockkey is null
- [[#2490](https://github.com/apache/incubator-seata/pull/2490)] fix RpcContext.addResource when resource is null
- [[#2419](https://github.com/apache/incubator-seata/pull/2419)] fix http testcase run failed
- [[#2535](https://github.com/apache/incubator-seata/pull/2535)] fix wrong configuration name in config.txt
- [[#2524](https://github.com/apache/incubator-seata/pull/2524)] registration service configuration missing and inconsistent
- [[#2473](https://github.com/apache/incubator-seata/pull/2473)] fix flush condition of disk in file mode
- [[#2455](https://github.com/apache/incubator-seata/pull/2455)] fix child module can't execute copyright and checkstyle inspection

### optimize

- [[#2409](https://github.com/apache/incubator-seata/pull/2409)] reduce the db and network request when undoLog or lockKey is empty
- [[#2329](https://github.com/apache/incubator-seata/pull/2329)] separate the different storage pattern processing logic
- [[#2354](https://github.com/apache/incubator-seata/pull/2354)] optimize the unsupported listener logic for spring cloud config
- [[#2320](https://github.com/apache/incubator-seata/pull/2320)] optimize protostuff and kryo serialize timestamp
- [[#2307](https://github.com/apache/incubator-seata/pull/2307)] optimize transaction context switch logic when switch transaction mode
- [[#2364](https://github.com/apache/incubator-seata/pull/2364)] optimize generated instances that were not actually used when the class was loaded
- [[#2368](https://github.com/apache/incubator-seata/pull/2368)] add zk missing configuration
- [[#2351](https://github.com/apache/incubator-seata/pull/2351)] add get local global status
- [[#2529](https://github.com/apache/incubator-seata/pull/2529)] optimize druid parameter
- [[#2288](https://github.com/apache/incubator-seata/pull/2288)] codecov.yml ignore mock test
- [[#2297](https://github.com/apache/incubator-seata/pull/2297)] remove duplicated dependency
- [[#2336](https://github.com/apache/incubator-seata/pull/2336)] add using organization logos
- [[#2348](https://github.com/apache/incubator-seata/pull/2348)] remove redundant configuration
- [[#2362](https://github.com/apache/incubator-seata/pull/2362)] optimize stackTraceLogger param
- [[#2382](https://github.com/apache/incubator-seata/pull/2382)] optimize RegistryFactory singleton pattern and RegistryType judgement
- [[#2400](https://github.com/apache/incubator-seata/pull/2400)] optimize the magic num of date at UUIDGenerator
- [[#2397](https://github.com/apache/incubator-seata/pull/2397)] fix typo
- [[#2407](https://github.com/apache/incubator-seata/pull/2407)] inaccurate judgment may be lead to NPE
- [[#2402](https://github.com/apache/incubator-seata/pull/2402)] optimize the rm and tm register log
- [[#2422](https://github.com/apache/incubator-seata/pull/2422)] add link of script in document
- [[#2440](https://github.com/apache/incubator-seata/pull/2440)] optimize contact us and startup log
- [[#2445](https://github.com/apache/incubator-seata/pull/2445)] optimize the class registration method for kryo and fst
- [[#2372](https://github.com/apache/incubator-seata/pull/2372)] refactor lock store sql with SPI
- [[#2453](https://github.com/apache/incubator-seata/pull/2453)] optimize unnecessary server configuration item
- [[#2369](https://github.com/apache/incubator-seata/pull/2369)] refactor log store sql with SPI
- [[#2526](https://github.com/apache/incubator-seata/pull/2526)] optimize spring-boot startup log
- [[#2530](https://github.com/apache/incubator-seata/pull/2530)] remove use connPool
- [[#2489](https://github.com/apache/incubator-seata/pull/2489)] optimize exceptionHandler's method signature
- [[#2494](https://github.com/apache/incubator-seata/pull/2494)] reduce the redundant code
- [[#2523](https://github.com/apache/incubator-seata/pull/2523)] optimize abnormal global transaction's output logs by frequency
- [[#2549](https://github.com/apache/incubator-seata/pull/2549)] optimize the exception log for ZookeeperConfiguration
- [[#2558](https://github.com/apache/incubator-seata/pull/2558)] optimize config and server module log
- [[#2464](https://github.com/apache/incubator-seata/pull/2464)] enhance Saga transaction editor
- [[#2553](https://github.com/apache/incubator-seata/pull/2553)] add some notes about using scripts

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

### 1.1.0 (2020-02-19)

[source](https://github.com/apache/incubator-seata/archive/v1.1.0.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.1.0/seata-server-1.1.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.1.0

Seata 1.1.0 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

### feature

- [[#2200](https://github.com/apache/incubator-seata/pull/2200)] support postgresql(client and server)
- [[#1746](https://github.com/apache/incubator-seata/pull/1746)] integrate with httpClient
- [[#2240](https://github.com/apache/incubator-seata/pull/2240)] support custom saga transaction recovery strategy on transaction timeout
- [[#1693](https://github.com/apache/incubator-seata/pull/1693)] support for druid class isolation loading
- [[#2245](https://github.com/apache/incubator-seata/pull/2245)] zookeeper digest support
- [[#2239](https://github.com/apache/incubator-seata/pull/2239)] compatibility dubbo 2.7.4+
- [[#2203](https://github.com/apache/incubator-seata/pull/2203)] support nacos configuration group
- [[#2086](https://github.com/apache/incubator-seata/pull/2086)] support apollo configuration namespace
- [[#2106](https://github.com/apache/incubator-seata/pull/2106)] support FastThreadLocalContextCore
- [[#1703](https://github.com/apache/incubator-seata/pull/1703)] create sql parser SPI and a druid type sql parser
- [[#2151](https://github.com/apache/incubator-seata/pull/2151)] Saga provide a switch to skip branch report on branch success

### bugfix

- [[#2270](https://github.com/apache/incubator-seata/pull/2270)] fix worker size not support enum type and some minor problem
- [[#2258](https://github.com/apache/incubator-seata/pull/2258)] fix channelHandler not sharable
- [[#2261](https://github.com/apache/incubator-seata/pull/2261)] fix ApplicationContext has not been refreshed
- [[#2262](https://github.com/apache/incubator-seata/pull/2262)] fix nacos script set group error
- [[#2249](https://github.com/apache/incubator-seata/pull/2249)] fix saga statemachine status incorrect on register branch failed
- [[#2262](https://github.com/apache/incubator-seata/pull/2262)] fix nacos script set group error
- [[#2126](https://github.com/apache/incubator-seata/pull/2126)] fix escape characters for column and table names
- [[#2234](https://github.com/apache/incubator-seata/pull/2234)] fix type error when fastjson deserialize long type
- [[#2237](https://github.com/apache/incubator-seata/pull/2237)] fix DefaultCoordinatorTest failed in Windows OS
- [[#2233](https://github.com/apache/incubator-seata/pull/2233)] fix fastjson undo filter tableMeta
- [[#2172](https://github.com/apache/incubator-seata/pull/2172)] fix configuration center can't read configuration using SpringCloudConfig
- [[#2217](https://github.com/apache/incubator-seata/pull/2217)] correct wrong property names in seata-spring-boot-starter
- [[#2219](https://github.com/apache/incubator-seata/pull/2219)] fix the value of disableGlobalTransaction not being read correctly
- [[#2187](https://github.com/apache/incubator-seata/pull/2187)] fix the wrong rollback sequence caused by the same record request from different transaction branches on different servers
- [[#2175](https://github.com/apache/incubator-seata/pull/2175)] fix direct buffer OOM
- [[#2210](https://github.com/apache/incubator-seata/pull/2210)] fix retry expired commit and rollback globalSession can't be removed
- [[#2179](https://github.com/apache/incubator-seata/pull/2179)] fix type casting problem when using redis as registry
- [[#2192](https://github.com/apache/incubator-seata/pull/2192)] fix override eureka getHostName() return ipAddress
- [[#2198](https://github.com/apache/incubator-seata/pull/2198)] fix global lock not released when rollback retry timeout
- [[#2167](https://github.com/apache/incubator-seata/pull/2167)] fix saga concurrent asynchronous execution with duplicate primary key xid
- [[#2185](https://github.com/apache/incubator-seata/pull/2185)] fix issue of judgement container in kubernetes
- [[#2145](https://github.com/apache/incubator-seata/pull/2145)] fix Saga report branch status incorrect when service retried succeed
- [[#2113](https://github.com/apache/incubator-seata/pull/2113)] fix when branchRollback failed, it will trigger retry of multi-tc

### optimize

- [[#2255](https://github.com/apache/incubator-seata/pull/2255)] optimize some default configuration value
- [[#2230](https://github.com/apache/incubator-seata/pull/2230)] unify the config style and keep defaults consistent
- [[#1935](https://github.com/apache/incubator-seata/pull/1935)] some about rpc optimize
- [[#2215](https://github.com/apache/incubator-seata/pull/2215)] optimize handing saga transaction timeout
- [[#2227](https://github.com/apache/incubator-seata/pull/2227)] separate tc In/Outbound interface
- [[#2033](https://github.com/apache/incubator-seata/pull/2033)] an optimization about DefaultRemotingParser
- [[#1688](https://github.com/apache/incubator-seata/pull/1688)] reduce unnecessary dependences in client side
- [[#2134](https://github.com/apache/incubator-seata/pull/2134)] separate the different transaction pattern processing logic
- [[#2224](https://github.com/apache/incubator-seata/pull/2224)] optimize ContextCoreLoader code style
- [[#2171](https://github.com/apache/incubator-seata/pull/2171)] optimize script and add script usage demo
- [[#2208](https://github.com/apache/incubator-seata/pull/2208)] replace getDbType with LoadLevel name
- [[#2182](https://github.com/apache/incubator-seata/pull/2182)] optimize configuration item prefix judgment
- [[#2211](https://github.com/apache/incubator-seata/pull/2211)] optimize RootContext code style
- [[#2140](https://github.com/apache/incubator-seata/pull/2140)] optimize GzipUtil code style
- [[#2209](https://github.com/apache/incubator-seata/pull/2209)] refactor seata-discovery more readable
- [[#2055](https://github.com/apache/incubator-seata/pull/2055)] refactor tableMetaCache and undoLogManager with SPI
- [[#2184](https://github.com/apache/incubator-seata/pull/2184)] refactor seata-config more readable
- [[#2095](https://github.com/apache/incubator-seata/pull/2095)] refactor of auto proxying of datasource
- [[#2178](https://github.com/apache/incubator-seata/pull/2178)] saga statemachine designer add default properties for catch node
- [[#2103](https://github.com/apache/incubator-seata/pull/2103)] optimize tcc module code style
- [[#2125](https://github.com/apache/incubator-seata/pull/2125)] change the package path of MySQL recognizer
- [[#2176](https://github.com/apache/incubator-seata/pull/2176)] fix typos
- [[#2156](https://github.com/apache/incubator-seata/pull/2156)] refactor sql parser type druid as constant
- [[#2170](https://github.com/apache/incubator-seata/pull/2170)] enhance test coverage of seata common
- [[#2139](https://github.com/apache/incubator-seata/pull/2139)] gracefully close resources
- [[#2097](https://github.com/apache/incubator-seata/pull/2097)] use serializer package name instead of codec
- [[#2159](https://github.com/apache/incubator-seata/pull/2159)] optimize spring module code style
- [[#2036](https://github.com/apache/incubator-seata/pull/2036)] optimize Dubbo parser
- [[#2062](https://github.com/apache/incubator-seata/pull/2062)] optimize seata-rm-datasource module code style
- [[#2146](https://github.com/apache/incubator-seata/pull/2146)] optimize log specifications
- [[#2038](https://github.com/apache/incubator-seata/pull/2038)] simplify to make seata-common more readable
- [[#2120](https://github.com/apache/incubator-seata/pull/2120)] fix typos
- [[#2078](https://github.com/apache/incubator-seata/pull/2078)] enhance oracle table meta cache code coverage
- [[#2115](https://github.com/apache/incubator-seata/pull/2115)] fix typos
- [[#2099](https://github.com/apache/incubator-seata/pull/2099)] optimize tm module code style

  Thanks to these contributors for their code commits. Please report an unintended omission.

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

  Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases
- **WebSite:** https://seata.apache.org

</details>

### 1.0.0 (2019-12-21)

[source](https://github.com/apache/incubator-seata/archive/v1.0.0.zip) |
[binary](https://github.com/apache/incubator-seata/releases/download/v1.0.0/seata-server-1.0.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.0.0

Seata 1.0.0 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### feature

- [[#1966](https://github.com/apache/incubator-seata/pull/1966)] add single send request for client
- [[#2004](https://github.com/apache/incubator-seata/pull/2004)] add config center synchronization script
- [[#1997](https://github.com/apache/incubator-seata/pull/1997)] provides a tool for generating graphics that show the state machine execution path
- [[#1992](https://github.com/apache/incubator-seata/pull/1992)] support dynamic disable
- [[#1898](https://github.com/apache/incubator-seata/pull/1898)] support dynamic config
- [[#1983](https://github.com/apache/incubator-seata/pull/1983)] add hessian codec for rpc serialization
- [[#1960](https://github.com/apache/incubator-seata/pull/1960)] Provide a visual graph designer for Seata Saga StateMachine based on GGEditor
- [[#1900](https://github.com/apache/incubator-seata/pull/1900)] Saga state language support "Retry" service when error occurred
- [[#1885](https://github.com/apache/incubator-seata/pull/1885)] add configuration for build docker image in server module
- [[#1914](https://github.com/apache/incubator-seata/pull/1914)] support where condition exists for Oracle
- [[#1878](https://github.com/apache/incubator-seata/pull/1878)] support exists in where condition
- [[#1871](https://github.com/apache/incubator-seata/pull/1871)] adapt springcloud-alibaba-seata autoconfig
- [[#1844](https://github.com/apache/incubator-seata/pull/1844)] StateMachine ServiceTask supports asynchronous execution
- [[#1742](https://github.com/apache/incubator-seata/pull/1742)] add seata-spring-boot-starter
- [[#1460](https://github.com/apache/incubator-seata/pull/1460)] support gzip compressor
- [[#1492](https://github.com/apache/incubator-seata/pull/1492)] support gRpc

#### bugfix

- [[#2066](https://github.com/apache/incubator-seata/pull/2066)] fix thread unsafe which missing double check when initial eureka client
- [[#2059](https://github.com/apache/incubator-seata/pull/2059)] fix repeated rollback caused by asynchronous rollback thread
- [[#2050](https://github.com/apache/incubator-seata/pull/2050)] fix if add configListener but dataId not exist, it will throw NPE
- [[#2053](https://github.com/apache/incubator-seata/pull/2053)] fix when tableName is keyword, the insert operation will get afterImage fail
- [[#2054](https://github.com/apache/incubator-seata/pull/2054)] fix RetryRollbackingSessionManager lost Rollbacking
- [[#2043](https://github.com/apache/incubator-seata/pull/2043)] fix startup failure when dynamic proxy is turned on and use druid-spring-boot-starter
- [[#1668](https://github.com/apache/incubator-seata/pull/1668)] fix sql statement escape symbol
- [[#2029](https://github.com/apache/incubator-seata/pull/2029)] fix seata-spring-boot-starter does not work
- [[#2037](https://github.com/apache/incubator-seata/pull/2037)] fix mysql connection unable to release
- [[#2032](https://github.com/apache/incubator-seata/pull/2032)] fix Etcd3Configuration FILE_CONFIG reference incorrect
- [[#1929](https://github.com/apache/incubator-seata/pull/1929)] fix duplicated table meta cache key
- [[#1996](https://github.com/apache/incubator-seata/pull/1996)] fix auto proxying of datasource which has final modifier
- [[#2001](https://github.com/apache/incubator-seata/pull/2001)] replace deprecated jvm args
- [[#1984](https://github.com/apache/incubator-seata/pull/1984)] fix presuppose environment variable and replace base image for tool
- [[#1978](https://github.com/apache/incubator-seata/pull/1978)] fix FileTransactionStoreManagerTest failed on wins OS
- [[#1953](https://github.com/apache/incubator-seata/pull/1953)] fix get table meta failed with catalog
- [[#1973](https://github.com/apache/incubator-seata/pull/1973)] fix error of get server port in container
- [[#1905](https://github.com/apache/incubator-seata/pull/1905)] solve the lock_key length problem
- [[#1927](https://github.com/apache/incubator-seata/pull/1927)] fix class with private access constructors should not be loaded by SPI.
- [[#1961](https://github.com/apache/incubator-seata/pull/1961)] fix travis-ci exceeded the maximum log length
- [[#1893](https://github.com/apache/incubator-seata/pull/1893)] fix saga dose not delete branches when transaction ended
- [[#1932](https://github.com/apache/incubator-seata/pull/1932)] fix issue of doesn't match environment when build docker image
- [[#1912](https://github.com/apache/incubator-seata/pull/1912)] fix string.format() method formatting error
- [[#1917](https://github.com/apache/incubator-seata/pull/1917)] fix NullPointerException in DB mock during CI
- [[#1909](https://github.com/apache/incubator-seata/pull/1909)] fix xidInterceptorType is null
- [[#1902](https://github.com/apache/incubator-seata/pull/1902)] fix NPE in UndoExecutorFactory
- [[#1789](https://github.com/apache/incubator-seata/pull/1789)] fix xid header lowercase
- [[#1889](https://github.com/apache/incubator-seata/pull/1889)] fix register branch thread hang on tcc mode
- [[#1813](https://github.com/apache/incubator-seata/pull/1813)] fix TCC does not support cross-service
- [[#1825](https://github.com/apache/incubator-seata/pull/1825)] fix global status inconsistent when rollback and branch register are concurrent
- [[#1850](https://github.com/apache/incubator-seata/pull/1850)] fix server restart not recover max sessionId on db mode
- [[#1879](https://github.com/apache/incubator-seata/pull/1879)] fix jdbc parameter set null
- [[#1874](https://github.com/apache/incubator-seata/pull/1874)] fix when write the new file throw ClosedChannelException
- [[#1863](https://github.com/apache/incubator-seata/pull/1863)] fix the other of column type cause rollback fail
- [[#1837](https://github.com/apache/incubator-seata/pull/1837)] fix saga ExpressionEvaluator not support null value
- [[#1810](https://github.com/apache/incubator-seata/pull/1810)] fix statemachine def can't store to db and provide query the state logs
- [[#1834](https://github.com/apache/incubator-seata/pull/1834)] fix StateInstance log can't record output parameters
- [[#1856](https://github.com/apache/incubator-seata/pull/1856)] fix protostuff undo log get default content
- [[#1845](https://github.com/apache/incubator-seata/pull/1845)] fix when branchCommit failed,it will trigger retry of multi-tc and throw npe
- [[#1858](https://github.com/apache/incubator-seata/pull/1858)] fix Global transaction does not work
- [[#1846](https://github.com/apache/incubator-seata/pull/1846)] fix multi-thread concurrent add listener problem
- [[#1839](https://github.com/apache/incubator-seata/pull/1839)] fix filter repeated lock
- [[#1768](https://github.com/apache/incubator-seata/pull/1768)] fix problem when set useInformationSchema true and table name was keyword
- [[#1796](https://github.com/apache/incubator-seata/pull/1796)] fix unexcepted exception can roll back
- [[#1805](https://github.com/apache/incubator-seata/pull/1805)] fix connectionproxy prepareStatement not in global transaction
- [[#1780](https://github.com/apache/incubator-seata/pull/1780)] fix can't use select for update in oracle
- [[#1802](https://github.com/apache/incubator-seata/pull/1802)] changing HashMap to LinkedHashMap for deterministic iterations
- [[#1793](https://github.com/apache/incubator-seata/pull/1793)] fix auto proxy for multiple-datasource does not work
- [[#1788](https://github.com/apache/incubator-seata/pull/1788)] fix mysql can not get primary key value
- [[#1764](https://github.com/apache/incubator-seata/pull/1764)] fix jdk 11 remoteAddress is null
- [[#1778](https://github.com/apache/incubator-seata/pull/1778)] fix clean up resources in time to avoid mutual influence between unit tests
- [[#1777](https://github.com/apache/incubator-seata/pull/1777)] fix DeleteExecutor buildBeforeImageSQL keyword checker by db type

#### optimize

- [[#2068](https://github.com/apache/incubator-seata/pull/2068)] optimize get database connection
- [[#2056](https://github.com/apache/incubator-seata/pull/2056)] remove non-javadoc element
- [[#1775](https://github.com/apache/incubator-seata/pull/1775)] optimize datasource manager branch rollback exception log
- [[#2000](https://github.com/apache/incubator-seata/pull/2000)] classify script to correspond directory
- [[#2007](https://github.com/apache/incubator-seata/pull/2007)] enhance test coverage of seata common
- [[#1969](https://github.com/apache/incubator-seata/pull/1969)] add ops script for Docker-Compose, Kubernetes and Helm
- [[#1967](https://github.com/apache/incubator-seata/pull/1967)] Add Dockerfile
- [[#2018](https://github.com/apache/incubator-seata/pull/2018)] optimize about ConfigFuture
- [[#2020](https://github.com/apache/incubator-seata/pull/2020)] optimize saga log output
- [[#1975](https://github.com/apache/incubator-seata/pull/1975)] Flatten Saga nested transactions
- [[#1980](https://github.com/apache/incubator-seata/pull/1980)] show the applicationId when register TM
- [[#1994](https://github.com/apache/incubator-seata/pull/1994)] rename zk configuration root path.
- [[#1990](https://github.com/apache/incubator-seata/pull/1990)] add netty config constant keys.
- [[#1979](https://github.com/apache/incubator-seata/pull/1979)] optimize get select for update recognizer
- [[#1957](https://github.com/apache/incubator-seata/pull/1957)] load keywordChecker through SPI
- [[#1956](https://github.com/apache/incubator-seata/pull/1956)] modify no available server error more clearly, and fixed NP
- [[#1958](https://github.com/apache/incubator-seata/pull/1958)] transform desinger json to statemachine standard json
- [[#1951](https://github.com/apache/incubator-seata/pull/1951)] add using organization logo
- [[#1950](https://github.com/apache/incubator-seata/pull/1950)] leak of error trace while handleAsyncCommitting
- [[#1931](https://github.com/apache/incubator-seata/pull/1931)] nacos-config.py support namespace
- [[#1938](https://github.com/apache/incubator-seata/pull/1938)] optimize the speed when batch insert or batch update
- [[#1930](https://github.com/apache/incubator-seata/pull/1930)] reduce HashMap initial size
- [[#1919](https://github.com/apache/incubator-seata/pull/1919)] force check code style
- [[#1918](https://github.com/apache/incubator-seata/pull/1918)] optimize assert throw exception
- [[#1911](https://github.com/apache/incubator-seata/pull/1911)] javadoc should be used for classes, class variables and methods.
- [[#1920](https://github.com/apache/incubator-seata/pull/1920)] use iterator to remove timeout future.
- [[#1907](https://github.com/apache/incubator-seata/pull/1907)] encapsulation determines the supported database type
- [[#1903](https://github.com/apache/incubator-seata/pull/1903)] batch query branchSession by xid list
- [[#1910](https://github.com/apache/incubator-seata/pull/1910)] all Override methods must be annotated with [@override](https://github.com/override)
- [[#1906](https://github.com/apache/incubator-seata/pull/1906)] add exception system exit code when rpcServer init.
- [[#1897](https://github.com/apache/incubator-seata/pull/1897)] remove clientTest it's not use
- [[#1883](https://github.com/apache/incubator-seata/pull/1883)] restructure SQLRecognizer and UndoExecutor
- [[#1890](https://github.com/apache/incubator-seata/pull/1890)] reformat saga module
- [[#1798](https://github.com/apache/incubator-seata/pull/1798)] improving method format performance
- [[#1884](https://github.com/apache/incubator-seata/pull/1884)] optimize auto closeable
- [[#1869](https://github.com/apache/incubator-seata/pull/1869)] add phase one successful reporting switch
- [[#1842](https://github.com/apache/incubator-seata/pull/1842)] add some init script
- [[#1838](https://github.com/apache/incubator-seata/pull/1838)] simplify and groom configuration items
- [[#1866](https://github.com/apache/incubator-seata/pull/1866)] server lack of error trace
- [[#1867](https://github.com/apache/incubator-seata/pull/1867)] optimization of seata-spring-boot-starter
- [[#1817](https://github.com/apache/incubator-seata/pull/1817)] add unit test for seata-tm module
- [[#1823](https://github.com/apache/incubator-seata/pull/1823)] reduce server rpc with db
- [[#1835](https://github.com/apache/incubator-seata/pull/1835)] SagaTransactionalTemplate provide reloadTransaction method
- [[#1861](https://github.com/apache/incubator-seata/pull/1861)] optimize no primary key output log
- [[#1836](https://github.com/apache/incubator-seata/pull/1836)] change "IsPersist" property value type from String to Boolean
- [[#1824](https://github.com/apache/incubator-seata/pull/1824)] remove deprecated JVM arguments in Java 11
- [[#1820](https://github.com/apache/incubator-seata/pull/1820)] adjust check style
- [[#1806](https://github.com/apache/incubator-seata/pull/1806)] format error log
- [[#1815](https://github.com/apache/incubator-seata/pull/1815)] update codecov.yml
- [[#1811](https://github.com/apache/incubator-seata/pull/1811)] adjust codecov configuration
- [[#1799](https://github.com/apache/incubator-seata/pull/1799)] reduce unnecessary synchronized
- [[#1674](https://github.com/apache/incubator-seata/pull/1674)] increase rm code coverage by db mock
- [[#1710](https://github.com/apache/incubator-seata/pull/1710)] add prefix counter for NamedThreadFactory
- [[#1790](https://github.com/apache/incubator-seata/pull/1790)] format seata server register eureka instance id
- [[#1760](https://github.com/apache/incubator-seata/pull/1760)] put message to logQueue
- [[#1787](https://github.com/apache/incubator-seata/pull/1787)] make rpc remoting log easier to read
- [[#1786](https://github.com/apache/incubator-seata/pull/1786)] simplify code
- [[#1766](https://github.com/apache/incubator-seata/pull/1766)] remove unused method
- [[#1770](https://github.com/apache/incubator-seata/pull/1770)] string splice and release lock

  Thanks to these contributors for their code commits. Please report an unintended omission.

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

  Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

#### Link

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

Seata 0.9.0 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### feature

- [[#1608](https://github.com/apache/incubator-seata/pull/1608)] Saga implementation base on state machine
- [[#1625](https://github.com/apache/incubator-seata/pull/1625)] support custom config and registry type
- [[#1656](https://github.com/apache/incubator-seata/pull/1656)] support spring cloud config
- [[#1689](https://github.com/apache/incubator-seata/pull/1689)] support -e startup parameter for specifying the environment name
- [[#1739](https://github.com/apache/incubator-seata/pull/1739)] support retry when tm commit or rollback failed

#### bugfix

- [[#1605](https://github.com/apache/incubator-seata/pull/1605)] fix deadlocks that can be caused by object locks and global locks and optimize the granularity of locks
- [[#1685](https://github.com/apache/incubator-seata/pull/1685)] fix pk too long in lock table on db mode and optimize error log
- [[#1691](https://github.com/apache/incubator-seata/pull/1691)] fix can't access private member of DruidDataSourceWrapper
- [[#1699](https://github.com/apache/incubator-seata/pull/1699)] fix use 'in' and 'between' in where condition for Oracle and Mysql
- [[#1713](https://github.com/apache/incubator-seata/pull/1713)] fix LockManagerTest.concurrentUseAbilityTest assertion condition
- [[#1720](https://github.com/apache/incubator-seata/pull/1720)] fix can't refresh table meta data for oracle
- [[#1729](https://github.com/apache/incubator-seata/pull/1729)] fix oracle batch insert error
- [[#1735](https://github.com/apache/incubator-seata/pull/1735)] clean xid when tm commit or rollback failed
- [[#1749](https://github.com/apache/incubator-seata/pull/1749)] fix undo support oracle table meta cache
- [[#1751](https://github.com/apache/incubator-seata/pull/1751)] fix memory lock is not released due to hash conflict
- [[#1761](https://github.com/apache/incubator-seata/pull/1761)] fix oracle rollback failed when the table has null Blob Clob value
- [[#1759](https://github.com/apache/incubator-seata/pull/1759)] fix saga service method not support interface type parameter
- [[#1401](https://github.com/apache/incubator-seata/pull/1401)] fix the first registration resource is null when RM starts



#### optimize

- [[#1701](https://github.com/apache/incubator-seata/pull/1701)] remove unused imports
- [[#1705](https://github.com/apache/incubator-seata/pull/1705)] Based on Java5 optimization
- [[#1706](https://github.com/apache/incubator-seata/pull/1706)] optimize inner class to static class
- [[#1707](https://github.com/apache/incubator-seata/pull/1707)] default charset use StandardCharsets.UTF_8 instead
- [[#1712](https://github.com/apache/incubator-seata/pull/1712)] abstract undolog manager class
- [[#1722](https://github.com/apache/incubator-seata/pull/1722)] simplify to make codes more readable
- [[#1726](https://github.com/apache/incubator-seata/pull/1726)] format log messages
- [[#1738](https://github.com/apache/incubator-seata/pull/1738)] add server's jvm parameters
- [[#1743](https://github.com/apache/incubator-seata/pull/1743)] improve the efficiency of the batch log
- [[#1747](https://github.com/apache/incubator-seata/pull/1747)] use raw types instead of boxing types
- [[#1750](https://github.com/apache/incubator-seata/pull/1750)] abstract tableMeta cache class
- [[#1755](https://github.com/apache/incubator-seata/pull/1755)] enhance test coverage of seata-common module
- [[#1756](https://github.com/apache/incubator-seata/pull/1756)] security: upgrade jackson to avoid security vulnerabilities
- [[#1657](https://github.com/apache/incubator-seata/pull/1657)] optimize the problem of large direct buffer when file rolling in file storage mode


Thanks to these contributors for their code commits. Please report an unintended omission.


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

  Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

#### Link

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

  Seata 0.8.1 Released.

  Seata is an easy-to-use, high-performance, open source distributed transaction solution.

  The version is updated as follows:

#### feature

- [[#1598](https://github.com/apache/incubator-seata/pull/1598)] support profile to use absolute path
- [[#1617](https://github.com/apache/incubator-seata/pull/1617)] support profile’s（registry.conf） name configurable
- [[#1418](https://github.com/apache/incubator-seata/pull/1418)] support undo_log kryo serializer
- [[#1489](https://github.com/apache/incubator-seata/pull/1489)] support protobuf maven plugin
- [[#1437](https://github.com/apache/incubator-seata/pull/1437)] support kryo codec
- [[#1478](https://github.com/apache/incubator-seata/pull/1478)] support db mock
- [[#1512](https://github.com/apache/incubator-seata/pull/1512)] extended support for mysql and oracle multiple insert batch syntax
- [[#1496](https://github.com/apache/incubator-seata/pull/1496)] support auto proxy of DataSource

#### bugfix

- [[#1646](https://github.com/apache/incubator-seata/pull/1646)] fix selectForUpdate lockQuery exception in file mode
- [[#1572](https://github.com/apache/incubator-seata/pull/1572)] fix get tablemeta fail in oracle when table name was lower case
- [[#1663](https://github.com/apache/incubator-seata/pull/1663)] fix get tablemeta fail when table name was keyword
- [[#1666](https://github.com/apache/incubator-seata/pull/1666)] fix restore connection's autocommit
- [[#1643](https://github.com/apache/incubator-seata/pull/1643)] fix serialize and deserialize in java.sql.Blob, java.sql.Clob
- [[#1628](https://github.com/apache/incubator-seata/pull/1628)] fix oracle support ROWNUM query
- [[#1552](https://github.com/apache/incubator-seata/pull/1552)] fix BufferOverflow when BranchSession size too large
- [[#1609](https://github.com/apache/incubator-seata/pull/1609)] fix thread unsafe of oracle keyword checker
- [[#1599](https://github.com/apache/incubator-seata/pull/1599)] fix thread unsafe of mysql keyword checker
- [[#1607](https://github.com/apache/incubator-seata/pull/1607)] fix NoSuchMethodError when the version of druid used &lt; 1.1.3
- [[#1581](https://github.com/apache/incubator-seata/pull/1581)] fix missing some length in GlobalSession and FileTransactionStoreManager
- [[#1594](https://github.com/apache/incubator-seata/pull/1594)] fix nacos's default namespace
- [[#1550](https://github.com/apache/incubator-seata/pull/1550)] fix calculate BranchSession size missing xidBytes.length
- [[#1558](https://github.com/apache/incubator-seata/pull/1558)] fix NPE when the rpcMessage's body is null
- [[#1505](https://github.com/apache/incubator-seata/pull/1505)] fix bind public network address listen failed
- [[#1539](https://github.com/apache/incubator-seata/pull/1539)] fix nacos namespace setting does not take effect
- [[#1537](https://github.com/apache/incubator-seata/pull/1537)] fix nacos-config.txt missing store.db.driver-class-name property
- [[#1522](https://github.com/apache/incubator-seata/pull/1522)] fix ProtocolV1CodecTest testAll may be appears test not pass
- [[#1525](https://github.com/apache/incubator-seata/pull/1525)] fix when getAfterImage error, trx autocommit
- [[#1518](https://github.com/apache/incubator-seata/pull/1518)] fix EnhancedServiceLoader may be appears load class error
- [[#1514](https://github.com/apache/incubator-seata/pull/1514)] fix when lack serialization dependence can't generate undolog and report true
- [[#1445](https://github.com/apache/incubator-seata/pull/1445)] fix DefaultCoordinatorMetricsTest UT failed
- [[#1481](https://github.com/apache/incubator-seata/pull/1481)] fix TableMetaCache refresh problem in multiple datasource

#### optimize

- [[#1629](https://github.com/apache/incubator-seata/pull/1629)] optimize the watcher efficiency of etcd3
- [[#1661](https://github.com/apache/incubator-seata/pull/1661)] optimize global_table insert transaction_name size
- [[#1633](https://github.com/apache/incubator-seata/pull/1633)] optimize branch transaction repeated reporting false
- [[#1654](https://github.com/apache/incubator-seata/pull/1654)] optimize wrong usage of slf4j
- [[#1593](https://github.com/apache/incubator-seata/pull/1593)] optimize and standardize server log
- [[#1648](https://github.com/apache/incubator-seata/pull/1648)] optimize transaction_name length when building the table
- [[#1576](https://github.com/apache/incubator-seata/pull/1576)] eliminate the impact of instructions reordering on session async committing task
- [[#1618](https://github.com/apache/incubator-seata/pull/1618)] optimize undolog manager and fix delete undolog support oracle
- [[#1469](https://github.com/apache/incubator-seata/pull/1469)] reduce the number of lock conflict exception
- [[#1619](https://github.com/apache/incubator-seata/pull/1416)] replace StringBuffer with StringBuilder
- [[#1580](https://github.com/apache/incubator-seata/pull/1580)] optimize LockKeyConflictException and change register method
- [[#1574](https://github.com/apache/incubator-seata/pull/1574)] optimize once delete GlobalSession locks for db mode when commit success
- [[#1601](https://github.com/apache/incubator-seata/pull/1601)] optimize typo
- [[#1602](https://github.com/apache/incubator-seata/pull/1602)] upgrade fastjson version to 1.2.60 for security issue
- [[#1583](https://github.com/apache/incubator-seata/pull/1583)] optimize get oracle primary index
- [[#1575](https://github.com/apache/incubator-seata/pull/1575)] add UT for RegisterTMRequest
- [[#1559](https://github.com/apache/incubator-seata/pull/1559)] optimize delay to delete the expired undo log
- [[#1547](https://github.com/apache/incubator-seata/pull/1547)] TableRecords delete jackson annotation
- [[#1542](https://github.com/apache/incubator-seata/pull/1542)] optimize AbstractSessionManager debug log
- [[#1535](https://github.com/apache/incubator-seata/pull/1535)] remove H2 and pgsql get primary index code and close resultSet
- [[#1541](https://github.com/apache/incubator-seata/pull/1541)] code clean
- [[#1544](https://github.com/apache/incubator-seata/pull/1544)] remove Chinese comment
- [[#1533](https://github.com/apache/incubator-seata/pull/1533)] refactor of the logics of Multi-configuration Isolation
- [[#1493](https://github.com/apache/incubator-seata/pull/1493)] add table meta checker switch
- [[#1530](https://github.com/apache/incubator-seata/pull/1530)] throw Exception when no index in the table
- [[#1444](https://github.com/apache/incubator-seata/pull/1444)] simplify operation of map
- [[#1497](https://github.com/apache/incubator-seata/pull/1497)] add seata-all dependencies
- [[#1490](https://github.com/apache/incubator-seata/pull/1490)] remove unnecessary code

  Thanks to these contributors for their code commits. Please report an unintended omission.

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

  Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.8.0 (2019-08-16)

- [source](https://github.com/apache/incubator-seata/archive/v0.8.0.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.8.0/seata-server-0.8.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.8.0

Seata 0.8.0 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### feature

- [[#902](https://github.com/apache/incubator-seata/pull/902)] support oracle database in AT mode
- [[#1447](https://github.com/apache/incubator-seata/pull/1447)] support oracle batch operation
- [[#1392](https://github.com/apache/incubator-seata/pull/1392)] support undo log table name configurable
- [[#1353](https://github.com/apache/incubator-seata/pull/1353)] support mysql batch update and batch delete
- [[#1379](https://github.com/apache/incubator-seata/pull/1379)] support -Dkey=value SysConfig
- [[#1365](https://github.com/apache/incubator-seata/pull/1365)] support schedule check table mata
- [[#1371](https://github.com/apache/incubator-seata/pull/1371)] support mysql preparedStatement batch self-increment primary keys
- [[#1337](https://github.com/apache/incubator-seata/pull/1337)] support mysql batch insert for non-self-inc primary keys
- [[#1235](https://github.com/apache/incubator-seata/pull/1453)] support delete expired undolog use protobuf codec
- [[#1235](https://github.com/apache/incubator-seata/pull/1235)] support to delete undolog in back task use seata codec
- [[#1323](https://github.com/apache/incubator-seata/pull/1323)] support database driver class configuration item

#### bugfix

- [[#1456](https://github.com/apache/incubator-seata/pull/1456)] fix xid would be duplicate in cluster mode
- [[#1454](https://github.com/apache/incubator-seata/pull/1454)] fix DateCompareUtils can not compare byte array
- [[#1452](https://github.com/apache/incubator-seata/pull/1452)] fix select for update retry get dirty value
- [[#1443](https://github.com/apache/incubator-seata/pull/1443)] fix serialize the type of timestamp lost nano value
- [[#1374](https://github.com/apache/incubator-seata/pull/1374)] fix store.mode get configuration inconsistent
- [[#1409](https://github.com/apache/incubator-seata/pull/1409)] fix map.toString() error
- [[#1344](https://github.com/apache/incubator-seata/pull/1344)] fix ByteBuffer allocates a fixed length, which cause BufferOverflowException
- [[#1419](https://github.com/apache/incubator-seata/pull/1419)] fix if the connection is autocommit=false will cause fail to delete
- [[#1370](https://github.com/apache/incubator-seata/pull/1370)] fix begin failed not release channel and throw exception
- [[#1396](https://github.com/apache/incubator-seata/pull/1396)] fix ClassNotFound problem for Nacos config implementation
- [[#1395](https://github.com/apache/incubator-seata/pull/1395)] fix check null channel
- [[#1385](https://github.com/apache/incubator-seata/pull/1385)] fix get SessionManager error when rollback retry timeout
- [[#1378](https://github.com/apache/incubator-seata/pull/1378)] fix clusterAddressMap did not remove the instance after the instance was offline
- [[#1332](https://github.com/apache/incubator-seata/pull/1332)] fix nacos script initialization the configuration value contains ’=‘ failed
- [[#1341](https://github.com/apache/incubator-seata/pull/1341)] fix multiple operations on the same record in the same local transaction, rollback failed
- [[#1339](https://github.com/apache/incubator-seata/pull/1339)] fix when image is EmptyTableRecords, rollback failed
- [[#1314](https://github.com/apache/incubator-seata/pull/1314)] fix if don't specify the startup parameters, db mode don't take effect
- [[#1342](https://github.com/apache/incubator-seata/pull/1342)] fix ByteBuffer allocate len error
- [[#1333](https://github.com/apache/incubator-seata/pull/1333)] fix netty memory leak
- [[#1338](https://github.com/apache/incubator-seata/pull/1338)] fix lock is not acquired when multiple branches have cross locks
- [[#1334](https://github.com/apache/incubator-seata/pull/1334)] fix lock key npe bug, when tcc use protobuf
- [[#1313](https://github.com/apache/incubator-seata/pull/1313)] fix DefaultFailureHandler check status NPE

#### optimize

- [[#1474](https://github.com/apache/incubator-seata/pull/1474)] optimize data image compare log
- [[#1446](https://github.com/apache/incubator-seata/pull/1446)] optimize the server's schedule tasks
- [[#1448](https://github.com/apache/incubator-seata/pull/1448)] refactor executor class remove the duplicate code
- [[#1408](https://github.com/apache/incubator-seata/pull/1408)] change ChannelFactory package in TmRpcClientTest
- [[#1432](https://github.com/apache/incubator-seata/pull/1432)] implement equals and hashcode of the object that is used as the hash key
- [[#1429](https://github.com/apache/incubator-seata/pull/1429)] remove unused imports
- [[#1426](https://github.com/apache/incubator-seata/pull/1426)] fix syntax error
- [[#1425](https://github.com/apache/incubator-seata/pull/1425)] fix typo
- [[#1356](https://github.com/apache/incubator-seata/pull/1356)] optimize sql join
- [[#1416](https://github.com/apache/incubator-seata/pull/1416)] optimize some javadoc comments
- [[#1417](https://github.com/apache/incubator-seata/pull/1417)] optimize oracle keyword
- [[#1404](https://github.com/apache/incubator-seata/pull/1404)] optimize BranchStatus comments
- [[#1414](https://github.com/apache/incubator-seata/pull/1414)] optimize mysql keywords
- [[#1407](https://github.com/apache/incubator-seata/pull/1407)] disable unstable unit tests
- [[#1398](https://github.com/apache/incubator-seata/pull/1398)] optimize eureka registry serviceUrl with default port
- [[#1364](https://github.com/apache/incubator-seata/pull/1364)] optimize table columns name defined as constants
- [[#1389](https://github.com/apache/incubator-seata/pull/1389)] add the oracle support prompt information
- [[#1375](https://github.com/apache/incubator-seata/pull/1375)] add compareRows failed log
- [[#1358](https://github.com/apache/incubator-seata/pull/1358)] clean temporary file file runs when UT is finished
- [[#1355](https://github.com/apache/incubator-seata/pull/1355)] add test case for rpc protocol
- [[#1357](https://github.com/apache/incubator-seata/pull/1357)] code clean of Consul&Etcd config center implementations
- [[#1345](https://github.com/apache/incubator-seata/pull/1345)] code clean and modify log level
- [[#1329](https://github.com/apache/incubator-seata/pull/1329)] add `STORE_FILE_DIR` default value

  Thanks to these contributors for their code commits. Please report an unintended omission.

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

  Also, we receive many valuable issues, questions and advices from our community. Thanks for you all.

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.7.1 (2019-07-15)

- [source](https://github.com/apache/incubator-seata/archive/v0.7.1.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.7.1/seata-server-0.7.1.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.7.1

Seata 0.7.1 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### Bugfix & Optimize

- [[#1297](https://github.com/apache/incubator-seata/pull/1297)] seata-spring add dependency seata-codec-all
- [[#1305](https://github.com/apache/incubator-seata/pull/1305)] fix unable to instantiate org.springframework.cloud.alibaba.seata.GlobalTransactionAutoConfiguration
- fix in the 0.7.0 version, unable to get the seata dependency problem from the central repository

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.7.0 (2019-07-12)

- [source](https://github.com/apache/incubator-seata/archive/v0.7.0.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.7.0/seata-server-0.7.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.7.0

Seata 0.7.0 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### Feature

- [[#1276](https://github.com/apache/incubator-seata/pull/1276)] New RPC protocol
- [[#1266](https://github.com/apache/incubator-seata/pull/1266)] add enabled configuration for metrics ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1236](https://github.com/apache/incubator-seata/pull/1236)] support metrics for tc server
- [[#1214](https://github.com/apache/incubator-seata/pull/1214)] add config `shutdown.wait` and update version to 0.7.0-SNAPSHOT ([1212](https://github.com/apache/incubator-seata/issues/1212))
- [[#1206](https://github.com/apache/incubator-seata/pull/1206)] setting default values using trinomial operators
- [[#1174](https://github.com/apache/incubator-seata/pull/1174)] add nacos config initialization python script ([1172](https://github.com/apache/incubator-seata/issues/1172))
- [[#1145](https://github.com/apache/incubator-seata/pull/1145)] Change LockMode from MEMORY to DB when the StoreMode is DB
- [[#1125](https://github.com/apache/incubator-seata/pull/1125)] Add protostuff as serializer of UndoLogParser.
- [[#1007](https://github.com/apache/incubator-seata/pull/1007)] support protobuf feature ([97](https://github.com/apache/incubator-seata/issues/97))

#### Bugfix & Optimize

- [[#1286](https://github.com/apache/incubator-seata/pull/1286)] bugfix: add some configuration and exclude log dependency ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1278](https://github.com/apache/incubator-seata/pull/1278)] bugfix: pass txId into TCC interceptor
- [[#1274](https://github.com/apache/incubator-seata/pull/1274)] 1. optimization SQL join
- [[#1271](https://github.com/apache/incubator-seata/pull/1271)] bugfix: @GlobalLock get error with Response ([97](https://github.com/apache/incubator-seata/issues/97), [1224](https://github.com/apache/incubator-seata/issues/1224))
- [[#1270](https://github.com/apache/incubator-seata/pull/1270)] bugfix: print error exception
- [[#1269](https://github.com/apache/incubator-seata/pull/1269)] bugfix: fix TMClinet reconnect exception
- [[#1265](https://github.com/apache/incubator-seata/pull/1265)] Invoke addBatch of targetStatement if not in global transaction
- [[#1264](https://github.com/apache/incubator-seata/pull/1264)] configuration:update ignore and coverage ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1263](https://github.com/apache/incubator-seata/pull/1263)] docs: add doc about contribution ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1262](https://github.com/apache/incubator-seata/pull/1262)] bugfix: fix find target class issue if scan the web scope bean such a… ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1261](https://github.com/apache/incubator-seata/pull/1261)] add warn log when fail to get auto-generated keys. (#1259) ([97](https://github.com/apache/incubator-seata/issues/97), [1259](https://github.com/apache/incubator-seata/issues/1259))
- [[#1258](https://github.com/apache/incubator-seata/pull/1258)] move metrics config keys and simplify metrics modules dependency
- [[#1250](https://github.com/apache/incubator-seata/pull/1250)] fix codecov for protobuf ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1245](https://github.com/apache/incubator-seata/pull/1245)] refactor metrics let it initialize by configuration
- [[#1242](https://github.com/apache/incubator-seata/pull/1242)] perfect sql
- [[#1239](https://github.com/apache/incubator-seata/pull/1239)] bugfix:fix CME in ZK discovery implementation. ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1237](https://github.com/apache/incubator-seata/pull/1237)] bugfix:server start and handle remain branch session may cause NPE ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1232](https://github.com/apache/incubator-seata/pull/1232)] Add unit tests for io.seata.common.util CompressUtil, DurationUtil, ReflectionUtil
- [[#1230](https://github.com/apache/incubator-seata/pull/1230)] prioritize global transaction scanner #1227 ([97](https://github.com/apache/incubator-seata/issues/97), [1227](https://github.com/apache/incubator-seata/issues/1227))
- [[#1229](https://github.com/apache/incubator-seata/pull/1229)] fix a typo ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1225](https://github.com/apache/incubator-seata/pull/1225)] optimize the name of seata config environment. ([97](https://github.com/apache/incubator-seata/issues/97), [1209](https://github.com/apache/incubator-seata/issues/1209))
- [[#1222](https://github.com/apache/incubator-seata/pull/1222)] fix bug of refresh cluster ([1160](https://github.com/apache/incubator-seata/issues/1160))
- [[#1221](https://github.com/apache/incubator-seata/pull/1221)] bugfix: fix in which SQL and database field names are inconsistent#1217 ([1217](https://github.com/apache/incubator-seata/issues/1217))
- [[#1218](https://github.com/apache/incubator-seata/pull/1218)] bugfix:containsPK ignoreCase ([1217](https://github.com/apache/incubator-seata/issues/1217))
- [[#1210](https://github.com/apache/incubator-seata/pull/1210)] 1. optimize arrayList single value
- [[#1207](https://github.com/apache/incubator-seata/pull/1207)] All overriding methods must be preceded by @Override annotations.
- [[#1205](https://github.com/apache/incubator-seata/pull/1205)] remove useless code
- [[#1202](https://github.com/apache/incubator-seata/pull/1202)] output branchRollback failed log ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1200](https://github.com/apache/incubator-seata/pull/1200)] bugfix:DefaultCoreTest.branchRegisterTest ([1199](https://github.com/apache/incubator-seata/issues/1199))
- [[#1198](https://github.com/apache/incubator-seata/pull/1198)] check the third-party dependencies license ([1197](https://github.com/apache/incubator-seata/issues/1197))
- [[#1195](https://github.com/apache/incubator-seata/pull/1195)] Clear the transaction context in TCC prepare methed
- [[#1193](https://github.com/apache/incubator-seata/pull/1193)] Get lockmode by the storemode
- [[#1190](https://github.com/apache/incubator-seata/pull/1190)] remove unused semicolons ([97](https://github.com/apache/incubator-seata/issues/97), [540](https://github.com/apache/incubator-seata/issues/540))
- [[#1179](https://github.com/apache/incubator-seata/pull/1179)] fix jackson default content
- [[#1177](https://github.com/apache/incubator-seata/pull/1177)] write session may be failed，throw TransactionException but hold lock. ([97](https://github.com/apache/incubator-seata/issues/97), [1154](https://github.com/apache/incubator-seata/issues/1154))
- [[#1169](https://github.com/apache/incubator-seata/pull/1169)] bugfix: use Set to avoid duplicate listeners. fixes #1126 ([1126](https://github.com/apache/incubator-seata/issues/1126))
- [[#1165](https://github.com/apache/incubator-seata/pull/1165)] add a missing placeholder in INSERT_UNDO_LOG_SQL ([1164](https://github.com/apache/incubator-seata/issues/1164))
- [[#1162](https://github.com/apache/incubator-seata/pull/1162)] Reset initialized flag & instance while destroy(). split [##1105 ([983](https://github.com/apache/incubator-seata/issues/983), [97](https://github.com/apache/incubator-seata/issues/97))
- [[#1159](https://github.com/apache/incubator-seata/pull/1159)] bugfix: AT mode resourceId(row_key) too long ([97](https://github.com/apache/incubator-seata/issues/97), [1158](https://github.com/apache/incubator-seata/issues/1158))
- [[#1150](https://github.com/apache/incubator-seata/pull/1150)] updates seata's version in README.md ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1148](https://github.com/apache/incubator-seata/pull/1148)] bugfix:the buffer may cause overflows when sql statement is long
- [[#1146](https://github.com/apache/incubator-seata/pull/1146)] revise the package name of the module ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1105](https://github.com/apache/incubator-seata/pull/1105)] refactor TmRpcClient & RmClient for common use. ([97](https://github.com/apache/incubator-seata/issues/97))
- [[#1075](https://github.com/apache/incubator-seata/pull/1075)] Multiple environmental isolation
- [[#768](https://github.com/apache/incubator-seata/pull/768)] #751 add event bus mechanism and apply it in tc

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.6.1 (2019-05-31)

- [source](https://github.com/apache/incubator-seata/archive/v0.6.1.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.6.1/seata-server-0.6.1.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.6.1

Seata 0.6.1 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### Feature

- [[#1119](https://github.com/apache/incubator-seata/pull/1119)] support weibo/motan
- [[#1075](https://github.com/apache/incubator-seata/pull/1075)] Multiple environmental isolation

#### Bugfix & Optimize

- [[#1099](https://github.com/apache/incubator-seata/pull/1099)] UndoLogParser change to SPI
- [[#1113](https://github.com/apache/incubator-seata/pull/1113)] optimize check style
- [[#1087](https://github.com/apache/incubator-seata/pull/1087)] Remove unnecessary copy of bytes
- [[#1090](https://github.com/apache/incubator-seata/pull/1090)] Change the method definition of UndoLogParser for better extensibility
- [[#1120](https://github.com/apache/incubator-seata/pull/1120)] bugfix : use xid wrong when do branch commit and rollback
- [[#1135](https://github.com/apache/incubator-seata/pull/1135)] bugfix:zk vulnerability and optimize dependencies
- [[#1138](https://github.com/apache/incubator-seata/pull/1138)] bugfix: seata-server.bat classpath too long
- [[#1117](https://github.com/apache/incubator-seata/pull/1117)] bugfix: fix field type is datetime equals fail
- [[#1115](https://github.com/apache/incubator-seata/pull/1115)] modify seata-all & seata-bom deploy config

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.6.0 (2019-05-24)

- [source](https://github.com/apache/incubator-seata/archive/v0.6.0.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.6.0/seata-server-0.6.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.6.0

Seata 0.6.0 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### Feature

- [[#942](https://github.com/apache/incubator-seata/pull/942)] Store the transaction log into database
- [[#1014](https://github.com/apache/incubator-seata/pull/1014)] Support etcd3 as configuration center
- [[#1060](https://github.com/apache/incubator-seata/pull/1060)] Do data validation when undo

#### Bugfix & Optimize

- [[#1064](https://github.com/apache/incubator-seata/pull/1064)] bugfix:size wrong between xid and branchId
- [[#1074](https://github.com/apache/incubator-seata/pull/1074)] bugfix:typos and replace AIT's with lambdas
- [[#824](https://github.com/apache/incubator-seata/pull/824)] Add time limit when transaction retry on the server
- [[#1082](https://github.com/apache/incubator-seata/pull/1082)] add Cache configuration instance
- [[#1084](https://github.com/apache/incubator-seata/pull/1084)] Refactor Charset using and blob utils
- [[#1080](https://github.com/apache/incubator-seata/pull/1080)] upgrade fastjson and nacos-client

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.5.2 (2019-05-17)

- [source](https://github.com/apache/incubator-seata/archive/v0.5.2.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.5.2/seata-server-0.5.2.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.5.2

Seata 0.5.2 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### Feature

- [[#988](https://github.com/apache/incubator-seata/pull/988)] support Consul configuration center
- [[#1043](https://github.com/apache/incubator-seata/pull/1043)] support sofa-rpc

#### Bugfix & Optimize

- [[#987](https://github.com/apache/incubator-seata/pull/987)] optimize the use of reentrantLock instead of spinlock in concurrent scenarios within the same transaction
- [[#943](https://github.com/apache/incubator-seata/pull/943)] fix configuration wait timeout when there is no corresponding file configuration item
- [[#965](https://github.com/apache/incubator-seata/pull/965)] fix PreparedStatement where in,between problem
- [[#929](https://github.com/apache/incubator-seata/pull/929)] optimize GlobalSession for the first time to wait for locks
- [[#967](https://github.com/apache/incubator-seata/pull/967)] optimize partial log description
- [[#970](https://github.com/apache/incubator-seata/pull/970)] fix unable to read flush-disk-mode configuration item problem
- [[#916](https://github.com/apache/incubator-seata/pull/916)] optimize the readable index problem of decoding
- [[#979](https://github.com/apache/incubator-seata/pull/979)] optimize copyright
- [[#981](https://github.com/apache/incubator-seata/pull/981)] optimize pom dependencies, use caffine instead of guava cache, junit upgrade to junit5, use junit5 to transform original testng unit tests
- [[#991](https://github.com/apache/incubator-seata/pull/991)] optimize the header of the core module import
- [[#996](https://github.com/apache/incubator-seata/pull/996)] fix maven-surefire-plugin compilation error in mac environment
- [[#994](https://github.com/apache/incubator-seata/pull/994)] Fix ByteBuffer multiple flip problem
- [[#999](https://github.com/apache/incubator-seata/pull/999)] change the community's email subscription address
- [[#861](https://github.com/apache/incubator-seata/pull/861)] optimize the FailureHandler to periodically get the retrieved transaction result and print the successful result
- [[#802](https://github.com/apache/incubator-seata/pull/802)] optimize the lambda code style in GlobalTransactionalInterceptor
- [[#1026](https://github.com/apache/incubator-seata/pull/1026)] fix troubleshooting for data\* code files, add local transaction file exclusion path
- [[#1024](https://github.com/apache/incubator-seata/pull/1024)] fix Consul module SPI configuration file path problem
- [[#1023](https://github.com/apache/incubator-seata/pull/1023)] add the seata-all.jar for client full dependency
- [[#1029](https://github.com/apache/incubator-seata/pull/1029)] fix the delay rollback caused by no channel when the client is restarting
- [[#1027](https://github.com/apache/incubator-seata/pull/1027)] fix release-seata can not generate zip file problem
- [[#1033](https://github.com/apache/incubator-seata/pull/1033)] fix createDependencyReducedPom to generate redundant xml problem
- [[#1035](https://github.com/apache/incubator-seata/pull/1035)] fix branchCommit/branchRollback in TCC mode, but branchId is null
- [[#1040](https://github.com/apache/incubator-seata/pull/1040)] refactor exceptionHandleTemplate and fix the problem that cannot be returned when the GlobalRollback branch throw exception
- [[#1036](https://github.com/apache/incubator-seata/pull/1036)] replace Chinese comment with English comment
- [[#1051](https://github.com/apache/incubator-seata/pull/1051)] optimize to check data changes when rollback, stop rollback if there is no data change
- [[#1017](https://github.com/apache/incubator-seata/pull/1017)] optimize the processing logic of mysql undo executor construct undo sql
- [[#1063](https://github.com/apache/incubator-seata/pull/1063)] fix the problem that the new transaction id conflict fails after the server is restarted after the server is restarted

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.5.1 (2019-04-30)

- [source](https://github.com/apache/incubator-seata/archive/v0.5.1.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.5.1/seata-server-0.5.1.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.5.1

Seata 0.5.1 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### Feature

- [[#774](https://github.com/apache/incubator-seata/pull/869)] support Etcd3 registration center
- [[#793](https://github.com/apache/incubator-seata/pull/793)] support sofa-registry registration center
- [[#856](https://github.com/apache/incubator-seata/pull/856)] add batch delete undolog processing
- [[#786](https://github.com/apache/incubator-seata/pull/786)] support for branch transaction concurrency in global transactions

#### Bugfix & Optimize

- [[#879](https://github.com/apache/incubator-seata/pull/879)] fix when batch delete undolog,the preparedStatement does not close
- [[#945](https://github.com/apache/incubator-seata/pull/945)] add the releaseLock method in the LockManager interface to optimize the calling logic
- [[#938](https://github.com/apache/incubator-seata/pull/938)] optimize the TransactionManager service loading logic
- [[#913](https://github.com/apache/incubator-seata/pull/913)] optimize the module structure of the RPC integration framework
- [[#795](https://github.com/apache/incubator-seata/pull/795)] optimize the performance of server node write files
- [[#921](https://github.com/apache/incubator-seata/pull/921)] fix NPE exception when select for update
- [[#925](https://github.com/apache/incubator-seata/pull/925)] optimize the same DefaultCoordinator instance when the server starts
- [[#930](https://github.com/apache/incubator-seata/pull/930)] optimize field access modifiers
- [[#907](https://github.com/apache/incubator-seata/pull/907)] fix hostname can't be null exception
- [[#923](https://github.com/apache/incubator-seata/pull/923)] fix the problem that the key is not formatted when the nettyClientKeyPool connection is destroyed
- [[#891](https://github.com/apache/incubator-seata/pull/891)] fix the NPE exception when using select union all
- [[#888](https://github.com/apache/incubator-seata/pull/888)] fix copyright checkstyle verification
- [[#901](https://github.com/apache/incubator-seata/pull/901)] fix parent node path does not exist when Zookeeper is registered
- [[#904](https://github.com/apache/incubator-seata/pull/904)] optimize updated data query logic in UpdateExecutort
- [[#802](https://github.com/apache/incubator-seata/pull/802)] optimize checkstyle and add plugins
- [[#882](https://github.com/apache/incubator-seata/pull/882)] modify copyright, add copyright automatic plugin
- [[#874](https://github.com/apache/incubator-seata/pull/874)] add the communication default configuration value
- [[#866](https://github.com/apache/incubator-seata/pull/866)] fix unable to generate dubbo:reference proxy class
- [[#877](https://github.com/apache/incubator-seata/pull/877)] fix concurrentModifyException when batch deleting undolog
- [[#855](https://github.com/apache/incubator-seata/pull/855)] optimize the globalCommit always returns committed to the user in AT mode
- [[#875](https://github.com/apache/incubator-seata/pull/875)] fix select for update, Boolean cast ResultSet failed
- [[#830](https://github.com/apache/incubator-seata/pull/830)] fix RM late registration problem
- [[#872](https://github.com/apache/incubator-seata/pull/872)] fix RegisterRMRequest decoding message length check is not accurate
- [[#831](https://github.com/apache/incubator-seata/pull/831)] optimize CountDownLatch in MessageFuture and replace it with CompletableFuture
- [[#834](https://github.com/apache/incubator-seata/pull/834)] fix non-SQLException in ExecuteTemplate does not throw a exception

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.5.0 (2019-04-19)

- [source](https://github.com/apache/incubator-seata/archive/0.5.0.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/0.5.0/seata-server-0.5.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.5.0

Seata 0.5.0 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### Compatibility

- [[#809](https://github.com/apache/incubator-seata/pull/809)] Change groupId,artifactId, and package
- [[#815](https://github.com/apache/incubator-seata/pull/815)] Add maven plugin to release seata with groupId io.seata
- [[#790](https://github.com/apache/incubator-seata/pull/790)] Change the startup parameters of seata-server to support database-storage
- [[#769](https://github.com/apache/incubator-seata/pull/769)] Modify the RPC protocol, remove the client's resolution of xid to be stateless

#### Feature

- [[#774](https://github.com/apache/incubator-seata/pull/774)] optimizes the structure of config module and discovery module
- [[#783](https://github.com/apache/incubator-seata/pull/783)] Allow users config the count for client report retry dynamicly
- [[#791](https://github.com/apache/incubator-seata/pull/791)] replace magic judgement of timeout status with status enum
- [[#836](https://github.com/apache/incubator-seata/pull/836)] Use maven-compiler-plugin to revision the version and add mvnw script to unify the maven version
- [[#820](https://github.com/apache/incubator-seata/pull/820)] Add rollback on for GlobalTransaction

#### Bugfix

- [[#772](https://github.com/apache/incubator-seata/pull/772)] Fix FileConfiguration config listener logic
- [[#807](https://github.com/apache/incubator-seata/pull/807)] Optimize the setting of full name of FileBasedSessionManager
- [[#804](https://github.com/apache/incubator-seata/pull/804)] bugfix:branchCommit retry always failed

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.4.2 (2019-04-12)

- [source](https://github.com/apache/incubator-seata/archive/v0.4.2.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.4.2/fescar-server-0.4.2.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.4.2

Seata 0.4.2 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### Feature

- [[#704](https://github.com/apache/incubator-seata/pull/704)] add local file write ByteBuffer pool
- [[#679](https://github.com/apache/incubator-seata/issues/679)] The existing registry adds the implementation of the close interface, which optimizes the server's elegant offline
- [[#713](https://github.com/apache/incubator-seata/pull/713)] add local file writes enable compression for messages that exceed the configured size
- [[#587](https://github.com/apache/incubator-seata/issues/587)] Added MySQL DDL statement support
- [[#717](https://github.com/apache/incubator-seata/pull/717)] add Nacos Initialization Configuration Script Configuration and Completion Program Configuration File
- [[#726](https://github.com/apache/incubator-seata/pull/726)] support for DBCP, C3P0, BoneCP, HikariCP and Tomcat-JDBC connection pools
- [[#744](https://github.com/apache/incubator-seata/pull/744)] add ZooKeeper disconnection re-registration and subscription when reconnected
- [[#728](https://github.com/apache/incubator-seata/pull/728)] Supports service discovery with Consul

#### Bugfix

- [[#569](https://github.com/apache/incubator-seata/pull/695)] fix already jdk proxy and no target only traverses the first implementation interface problem
- [[#721](https://github.com/apache/incubator-seata/pull/721)] fix ConfigFuture constructor timeout parameter does not work
- [[#725](https://github.com/apache/incubator-seata/pull/725)] fix MergedSendRunnable channel is unexpectedly closed, and add fail-fast
- [[#723](https://github.com/apache/incubator-seata/pull/723)] fix defaultServerMessageListener is not initialized
- [[#746](https://github.com/apache/incubator-seata/pull/746)] fix the failure of the test module caused by the DataSourceManager SPI
- [[#754](https://github.com/apache/incubator-seata/pull/754)] optimize Eureka registry
- [[#750](https://github.com/apache/incubator-seata/pull/750)] fix undolog caused by DataSourceManager SPI cannot delete problem
- [[#747](https://github.com/apache/incubator-seata/pull/747)] Delete MT mode, then will be replaced by TCC mode
- [[#757](https://github.com/apache/incubator-seata/pull/757)] fix rollback caused by RPC exception when performing BranchRollback retry
- [[#776](https://github.com/apache/incubator-seata/pull/776)] fix connection creation failure caused by toString exception when connection pool creates channel

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.4.1 (2019-03-29)

- [source](https://github.com/apache/incubator-seata/archive/v0.4.1.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.4.1/fescar-server-0.4.1.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.4.1

Seata 0.4.1 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

- TBD

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.4.0 (2019-03-19)

- [source](https://github.com/apache/incubator-seata/archive/v0.4.0.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.4.0/fescar-server-0.4.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.4.0

Seata 0.4.0 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### Feature

- [[#583](https://github.com/alibaba/fescar/pull/583)] Add TCC model of Ant Financial to fescar, to suppot Local TCC bean，Dubbo TCC bean and SOFARPC TCC bean
- [[#611](https://github.com/alibaba/fescar/pull/611)] Apply p3c pmd plugin/rules
- [[#627](https://github.com/alibaba/fescar/pull/627)] Optimization dependency

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.3.1 (2019-03-15)

- [source](https://github.com/apache/incubator-seata/archive/v0.3.1.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.3.1/fescar-server-0.3.1.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.3.1

Seata 0.3.1 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### Feature

- [[#557](https://github.com/alibaba/fescar/issues/557)] add custom hook access point at each stage of the transaction process
- [[#594](https://github.com/alibaba/fescar/pull/594)] support Zookeeper Registration Center

#### Bugfix

- [[#569](https://github.com/alibaba/fescar/issues/569)] fix eureka renew url encode
- [[#551](https://github.com/alibaba/fescar/pull/551)] fix ConfigType NPE
- [[#489](https://github.com/alibaba/fescar/issues/489)] fix GlobalRollback request but not receive report
- [[#598](https://github.com/alibaba/fescar/pull/598)] fix blocker and critical level issues scanned by p3c

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.3.0 (2019-03-08)

- [source](https://github.com/apache/incubator-seata/archive/v0.3.0.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.3.0/fescar-server-0.3.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.3.0

Seata 0.3.0 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### Feature

- [[#510](https://github.com/alibaba/fescar/pull/510)] Support eureka registry center
- [[#498](https://github.com/alibaba/fescar/pull/498)] Implement local transaction mode with global locks and resolve local transaction isolation issues

#### Bugfix

- [[#459](https://github.com/alibaba/fescar/issues/459)] Fix mysql keyword generating sql problem as table name and column name
- [[#312](https://github.com/alibaba/fescar/issues/312)] Fix the original business sql no where condition generation sql error problem
- [[#522](https://github.com/alibaba/fescar/issues/522)] Fix file path security vulnerability
- Remove useless, format, optimize import, javadoc, copyright for all module code

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.2.3 (2019-03-02)

- [source](https://github.com/apache/incubator-seata/archive/v0.2.3.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.2.3/fescar-server-0.2.3.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.2.3

Seata 0.2.3 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### Feature

- [[#478](https://github.com/alibaba/fescar/pull/478)] Support redis registry and apollo configuration
- [[#478](https://github.com/alibaba/fescar/pull/478)] Support redis registry and apollo configuration

#### Bugfix

- [[#462](https://github.com/alibaba/fescar/issues/462)] Separation configuration and registration judgment
- [[#466](https://github.com/alibaba/fescar/issues/466)] Add run oldest task reject policy

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.2.2 (2019-02-22)

- [source](https://github.com/apache/incubator-seata/archive/v0.2.2.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.2.2/fescar-server-0.2.2.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.2.2

Seata 0.2.2 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

- Fixed several bugs

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.2.1 (2019-02-18)

- [source](https://github.com/apache/incubator-seata/archive/v0.2.1.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.2.1/fescar-server-0.2.1.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.2.1

Seata 0.2.1 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### Feature

- Support BETWEEN in update statement
- Add Random and RoundRobin LoadBalance
- Add dubbo-alibaba module support Alibaba Dubbo

#### Bugfix

- Fix NettyClientConfig variable name isPoolFifo-> isPoolLifo
- Fix fescar-dubbo filter SPI reference error

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.2.0 (2019-02-14)

- [source](https://github.com/apache/incubator-seata/archive/v0.2.0.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.2.0/fescar-server-0.2.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.2.0

Seata 0.2.0 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

#### Feature

- Support MySQL distributed transaction automatic mode (AT)
- Supports Dubbo seamless integration
- Support for distributed transaction API
- Support Spring transaction annotation
- Support Mybatis、JPA
- Support Nacos Service Registration and Configuration Center
- Add Fescar-Server automatic recovery from file unfinished transaction operations to memory when restarting
- Support multiple IP environment, start server to specify IP parameters

#### Bugfix

- Fix Fescar-Server restart may cause XID duplication
- Fix Windows startup script $EXTRA_JVM_ARGUMENTS parameter error
- Fix distributed transaction local nested inner transaction commit/rollback causes outer transaction exception problem
- Fix local transaction commit exception, local transaction does not rollback problem
- Fix MySQL table alias resolution

#### other

- Upgrade depends on JDK version to 1.8
- Upgrade dependency Alibaba Dubbo to Apache Dubbo 2.7.0
- Optimize related dependency references

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.1.4 (2019-02-11)

- [source](https://github.com/apache/incubator-seata/archive/v0.1.4.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.1.4/fescar-server-0.1.4.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.1.4

Seata 0.1.4 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

- Fixed several bugs
- Upgrade jdk version to 1.8

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.1.3 (2019-01-29)

- [source](https://github.com/apache/incubator-seata/archive/v0.1.3.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.1.3/fescar-server-0.1.3.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.1.3

Seata 0.1.3 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

- Fixed several bugs

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.1.2 (2019-01-25)

- [source](https://github.com/apache/incubator-seata/archive/V0.1.2.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/V0.1.2/fescar-server-0.1.2.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.1.2

Seata 0.1.2 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

- Fixed several bugs

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.1.1 (2019-01-18)

- [source](https://github.com/apache/incubator-seata/archive/v0.1.1.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.1.1/fescar-server-0.1.1.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.1.1

Seata 0.1.1 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

- Fixed several bugs

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>

### 0.1.0 (2019-01-09)

- [source](https://github.com/apache/incubator-seata/archive/v0.1.0.zip)
- [binary](https://github.com/apache/incubator-seata/releases/download/v0.1.0/fescar-server-0.1.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 0.1.0

Seata 0.1.0 Released.

Seata is an easy-to-use, high-performance, open source distributed transaction solution.

The version is updated as follows:

- Support MySQL in AT Mode
- Support Dubbo
- API Provided
- Spring based annotation Provided
- Standalone server

#### Link

- **Seata:** https://github.com/apache/incubator-seata
- **Seata-Samples:** https://github.com/apache/incubator-seata-samples
- **Release:** https://github.com/apache/incubator-seata/releases

</details>
