---
title: Seata config 模块源码分析
author: 赵润泽
keywords: [Seata、分布式事务]
date: 2020/1/11
---

## 一 . 导读

根据[大佬](https://www.iteye.com/blog/javatar-949527)定义的分类，配置可以有三种：环境配置、描述配置、扩展配置。

环境配置：像一些组件启动时的参数等，通常是离散的简单值，多是 key-value 型数据。

描述配置：与业务逻辑相关，比如：事务发起方和参与方，通常会嵌到业务的生命周期管理中。描述配置信息较多，甚至有层次关系。

扩展配置：产品需要发现第三方实现，对配置的聚合要求比较高，比如：各种配置中心和注册中心，通常做法是在 jar 包的 META-INF/services 下放置接口类全名文件，内容为每行一个实现类类名。

## 二. 环境配置

seata server 在加载的时候，会使用 resources/registry.conf 来确定配置中心和注册中心的类型。而 seata client 在 1.0 版本后，不仅能使用 conf 文件进行配置的加载，也可以在 springboot 的 yml 配置文件中，使用 seata.config.\{type} 来进行配置中心的选择，注册中心与之类似。通过 yml 加载配置的源码在 `io.seata.spring.boot.autoconfigure.properties.registry` 包下。

如果 seata 客户端的使用者既在 resources 下放了 conf 配置文件又在 yml 文件中配置，那么会优先使用 yml 中配置的。代码：

```java
CURRENT_FILE_INSTANCE = null == extConfiguration ? configuration : extConfiguration;
```

这里 extConfiguration 是外部配置实例，即 ExtConfigurationProvider#provide() 外部配置提供类提供的，而 configuration 是另一个配置提供类提供的 ConfigurationProvider#provide()，这两个配置提供类是在 config 模块 ConfigurationFactory 静态块中，通过 SPI 的方式加载。

```java
EnhancedServiceLoader.load(ExtConfigurationProvider.class).provide(configuration);
```

上面说的是配置中心类型的选择，而配置环境的加载，是在确定了使用什么配置中心类型后，再通过相应的配置中心加载环境配置。File 即文本方式配置也是一种配置中心。

client 和 server 获取配置参数，是通过 ConfigurationFactory#getInstance() 获取配置类实例，再使用配置类实例获取配置参数，配置的 key 这些常量的定义，主要在 core 模块下 config 文件中。

一些重要的环境配置属性的意义，[官网都有介绍](/docs/user/configurations/)。

在实例化的时候通过 ConfigurationFactory 获取后注入构造函数中的，需要重启才能生效，而在使用时通过 ConfigurationFactory 实时获取的，配置改了就可以生效。

但是 config 模块提供了 ConfigurationChangeListener#onChangeEvent 接口方法来修改实例内部的属性。即在这个方法中，监听动态变化的属性，如果检测到自身使用的属性和刚开始注入时不一样了，就修改实例中保存的属性，和配置中心保持一致，这样就实现了动态配置。

```java
public class GlobalTransactionalInterceptor implements ConfigurationChangeListener {
  private volatile boolean disable = ConfigurationFactory.getInstance()
    .getBoolean(ConfigurationKeys.DISABLE_GLOBAL_TRANSACTION,false);
  @Override public Object invoke(Param param) {
     if(disable){//事务业务处理}
  }
  @Override public void onChangeEvent(Param param) {
     disable = param;
  }
}
```

上面是 spring 模块下的 GlobalTransactionalInterceptor 与降级属性相关的伪代码。 GlobalTrarnsactionalScanner 在上面的 interceptor 类被实例化时，把 interceptor 注册到了配置变化监听列表中，当配置被改变的时候，会调用监听器：

```java
ConfigurationFactory.getInstance()
    .addConfigListener(ConfigurationKeys.DISABLE_GLOBAL_TRANSACTION,(ConfigurationChangeListener)interceptor);
```

降级的意思是，当服务某一项功能不可用的时候，通过动态配置的属性，把某一项功能给关了，这样就可以避免一直尝试失败的处理。interceptor#invoke() 只有当这个 disable 属性为 true 时，才会执行 seata 事务相关业务。

## 三. 描述配置

一般性框架描述性配置通常信息比较多，甚至有层次关系，用 xml 配置比较方便，因为树结构描述性更强。而现在的习惯都在提倡去繁琐的约束性配置，采用约定的方式。

seata AT 模式是通过代理数据源的方式来进行事务处理，对业务方入侵较小，只需让 seata 在启动时，识别哪些业务方需要开启全局事务，所以用注解就可以实现描述性配置。

```java
@GlobalTransactional(timeoutMills = 300000, name = "busi-doBiz")
public String doBiz(String msg) {}
```

如果是 tcc 模式，事务参与方还需使用注解标识：

```java
@TwoPhaseBusinessAction(name = "tccActionForSpringTest" , commitMethod = "commit", rollbackMethod = "rollback")
public boolean prepare(BusinessActionContext actionContext, int i);
public boolean commit(BusinessActionContext actionContext);
public boolean rollback(BusinessActionContext actionContext);
```

## 四 .扩展配置

扩展配置，通常对产品的聚合要求比较高，因为产品需要发现第三方实现，将其加入产品内部。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200110213751452.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3ODA0NzM3,size_16,color_FFFFFF,t_70)
这是一个自定义配置中心提供类的例子，在 META-INF/services 下放置一个接口同名的文本文件，文件的内容为接口的实现类。这是标准的 spi 方式。然后修改配置文件 registry.conf 中的 config.type=test 。

但是如果你认为这样就可以被 seata 识别到，并且替换掉配置中心，那你就错了。seata 在加载配置中心的时候，使用 enum ConfigType 包裹了一下配置文件中配置的配置中心的类型的值：

```java
private static Configuration buildConfiguration() {
   configTypeName = "test";//registry.conf中配置的config.type
   configType = ConfigType.getType(configTypeName);//ConfigType获取不到会抛异常
}
```

如果在 ConfigType 中没有定义 test 这种配置中心类型，那么会抛异常。所以单纯的修改配置文件而不改变源码是无法使用 ConfigType 中定义的配置中心提供类以外的配置中心提供类。

目前 1.0 版本在 ConfigType 中定义的配置中心类型有：File,ZK,Nacos,Apollo,Consul,Etcd3,SpringCloudConfig,Custom。如果用户想使用自定义的配置中心类型，可以使用 Custom 这种类型。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200110215249152.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3ODA0NzM3,size_16,color_FFFFFF,t_70)
这里可以使用不优雅的方式，即提供一个指定名称 ZK 但是级别 order=3 更高的实现类（ZK 默认 order=1），就可以让 ConfigurationFactory 使用 TestConfigurationProvider 作为配置中心提供类。

通过上面的步骤，就可以让 seata 使用我们自己提供的代码。seata 中 codec、compressor、discovery、integration 等模块，都是使用 spi 机制加载功能类，符合微内核 + 插件化，平等对待第三方的设计思想。

## 五 . seata 源码分析系列地址

作者：赵润泽，[系列地址](https://blog.csdn.net/qq_37804737/category_9530078.html)。
