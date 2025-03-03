---
title: Seata tcc 模块源码分析
author: 赵润泽
keywords: [Seata、分布式事务]
date: 2019/12/25
---

## 一  .导读

spring 模块分析中讲到，Seata 的 spring 模块会对涉及到分布式业务的 bean 进行处理。项目启动时，当 GlobalTransactionalScanner 扫描到 TCC 服务的 reference 时（即tcc事务参与方），会对其进行动态代理，即给 bean 织入 TCC 模式下的 MethodInterceptor 的实现类。tcc 事务发起方依然使用 @GlobalTransactional 注解开启，织入的是通用的 MethodInterceptor 的实现类。

TCC 模式下的 MethodInterceptor 实现类即 TccActionInterceptor(spring模块) ，这个类中调用了 ActionInterceptorHandler(tcc模块) 进行 TCC 模式下事务流程的处理。

TCC 动态代理的主要功能是：生成TCC运行时上下文、透传业务参数、注册分支事务记录。

## 二  .TCC模式介绍

在2PC（两阶段提交）协议中，事务管理器分两阶段协调资源管理，资源管理器对外提供三个操作，分别是一阶段的准备操作，和二阶段的提交操作和回滚操作。

```java
public interface TccAction {

    @TwoPhaseBusinessAction(name = "tccActionForTest" , commitMethod = "commit", rollbackMethod = "rollback")
    public boolean prepare(BusinessActionContext actionContext,
                           @BusinessActionContextParameter(paramName = "a") int a,
                           @BusinessActionContextParameter(paramName = "b", index = 0) List b,
                           @BusinessActionContextParameter(isParamInProperty = true) TccParam tccParam);

    public boolean commit(BusinessActionContext actionContext);

    public boolean rollback(BusinessActionContext actionContext);
}
```

这是 TCC 参与者实例，参与者需要实现三个方法，第一个参数必须是 BusinessActionContext ，方法返回类型固定，对外发布成微服务，供事务管理器调用。

prepare：资源的检查和预留。例：扣减账户的余额，并增加相同的冻结余额。

commit：使用预留的资源，完成真正的业务操作。例：减少冻结余额，扣减资金业务完成。

cancel：释放预留资源。例：冻结余额加回账户的余额。

其中 BusinessActionContext 封装了本次事务的上下文环境：xid、branchId、actionName 和被 @BusinessActionContextParam 注解的参数等。

参与方业务有几个需要注意的地方：

1. 控制业务幂等性，需要支持同一笔事务的重复提交和重复回滚。
2. 防悬挂，即二阶段的回滚，比一阶段的 try 先执行。
3. 放宽一致性协议，最终一致，所以是读已修改

##  三  . remoting 包解析

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191124211806237.png?)

包中所有的类都是为包中的 DefaultRemotingParser 服务，Dubbo、LocalTCC、SofaRpc 分别负责解析各自RPC协议下的类。

DefaultRemotingParser 的主要方法：
1.判断 bean 是否是 remoting bean，代码：

```java
    @Override
    public boolean isRemoting(Object bean, String beanName) throws FrameworkException {
        //判断是否是服务调用方或者是否是服务提供方
        return isReference(bean, beanName) || isService(bean, beanName);
    }
```

2.远程 bean 解析，把 rpc类 解析成 RemotingDesc，，代码：

```java
@Override
    public boolean isRemoting(Object bean, String beanName) throws FrameworkException {
        //判断是否是服务调用方或者是否是服务提供方
        return isReference(bean, beanName) || isService(bean, beanName);
    }
```

利用 allRemotingParsers 来解析远程 bean 。allRemotingParsers是在：initRemotingParser() 中调用EnhancedServiceLoader.loadAll(RemotingParser.class) 动态进行 RemotingParser 子类的加载，即 SPI 加载机制。

如果想扩展，比如实现一个feign远程调用的解析类，只要把RemotingParser相关实现类写在 SPI 的配置中就可以了，扩展性很强。

RemotingDesc 事务流程需要的远程 bean 的一些具体信息，比如 targetBean、interfaceClass、interfaceClassName、protocol、isReference等等。

3.TCC资源注册

```java
public RemotingDesc parserRemotingServiceInfo(Object bean, String beanName) {
        RemotingDesc remotingBeanDesc = getServiceDesc(bean, beanName);
        if (remotingBeanDesc == null) {
            return null;
        }
        remotingServiceMap.put(beanName, remotingBeanDesc);

        Class<?> interfaceClass = remotingBeanDesc.getInterfaceClass();
        Method[] methods = interfaceClass.getMethods();
        if (isService(bean, beanName)) {
            try {
                //service bean, registry resource
                Object targetBean = remotingBeanDesc.getTargetBean();
                for (Method m : methods) {
                    TwoPhaseBusinessAction twoPhaseBusinessAction = m.getAnnotation(TwoPhaseBusinessAction.class);
                    if (twoPhaseBusinessAction != null) {
                        TCCResource tccResource = new TCCResource();
                        tccResource.setActionName(twoPhaseBusinessAction.name());
                        tccResource.setTargetBean(targetBean);
                        tccResource.setPrepareMethod(m);
                        tccResource.setCommitMethodName(twoPhaseBusinessAction.commitMethod());
                        tccResource.setCommitMethod(ReflectionUtil
                            .getMethod(interfaceClass, twoPhaseBusinessAction.commitMethod(),
                                new Class[] {BusinessActionContext.class}));
                        tccResource.setRollbackMethodName(twoPhaseBusinessAction.rollbackMethod());
                        tccResource.setRollbackMethod(ReflectionUtil
                            .getMethod(interfaceClass, twoPhaseBusinessAction.rollbackMethod(),
                                new Class[] {BusinessActionContext.class}));
                        //registry tcc resource
                        DefaultResourceManager.get().registerResource(tccResource);
                    }
                }
            } catch (Throwable t) {
                throw new FrameworkException(t, "parser remoting service error");
            }
        }
        if (isReference(bean, beanName)) {
            //reference bean, TCC proxy
            remotingBeanDesc.setReference(true);
        }
        return remotingBeanDesc;
    }
```

首先判断是否是事务参与方，如果是，拿到 RemotingDesc 中的 interfaceClass，遍历接口中的方法，判断方法上是否有@TwoParserBusinessAction 注解，如果有，把参数封装成 TCCRecource，通过 DefaultResourceManager 进行 TCC 资源的注册。

这里 DefaultResourceManager 会根据 Resource 的 BranchType 来寻找对应的资源管理器，TCC 模式下资源管理类，在 tcc 模块中。

这个 rpc 解析类主要提供给 spring 模块进行使用。parserRemotingServiceInfo() 被封装到了 spring 模块的 TCCBeanParserUtils 工具类中。spring 模块的 GlobalTransactionScanner 在项目启动的时候，通过工具类解析 TCC bean，工具类 TCCBeanParserUtils 会调用 TCCResourceManager 进行资源的注册，并且如果是全局事务的服务提供者，会织入 TccActionInterceptor 代理。这些个流程是 spring 模块的功能，tcc 模块是提供功能类给 spring 模块使用。

## 三  .tcc 资源管理器

TCCResourceManager 负责管理 TCC 模式下资源的注册、分支的注册、提交、和回滚。

1.在项目启动时， spring 模块的 GlobalTransactionScanner 扫描到 bean 是 tcc bean 时，会本地缓存资源，并向 server 注册：

```java
    @Override
    public void registerResource(Resource resource) {
        TCCResource tccResource = (TCCResource)resource;
        tccResourceCache.put(tccResource.getResourceId(), tccResource);
        super.registerResource(tccResource);
    }
```

与server通信的逻辑被封装在了父类 AbstractResourceManage 中，这里根据 resourceId 对 TCCResource 进行缓存。父类 AbstractResourceManage  注册资源的时候，使用 resourceGroupId + actionName，actionName 就是 @TwoParseBusinessAction 注解中的 name，resourceGroupId 默认是 DEFAULT。

2.事务分支的注册在 rm-datasource 包下的 AbstractResourceManager 中，注册时参数 lockKeys 为 null，和 AT 模式下事务分支的注册还是有些不一样的。

3.分支的提交或者回滚：

```java
    @Override
    public BranchStatus branchCommit(BranchType branchType, String xid, long branchId, String resourceId,
                                     String applicationData) throws TransactionException {
        TCCResource tccResource = (TCCResource)tccResourceCache.get(resourceId);
        if (tccResource == null) {
            throw new ShouldNeverHappenException("TCC resource is not exist, resourceId:" + resourceId);
        }
        Object targetTCCBean = tccResource.getTargetBean();
        Method commitMethod = tccResource.getCommitMethod();
        if (targetTCCBean == null || commitMethod == null) {
            throw new ShouldNeverHappenException("TCC resource is not available, resourceId:" + resourceId);
        }
        try {
            boolean result = false;
            //BusinessActionContext
            BusinessActionContext businessActionContext = getBusinessActionContext(xid, branchId, resourceId,
                applicationData);
            Object ret = commitMethod.invoke(targetTCCBean, businessActionContext);
            if (ret != null) {
                if (ret instanceof TwoPhaseResult) {
                    result = ((TwoPhaseResult)ret).isSuccess();
                } else {
                    result = (boolean)ret;
                }
            }
            return result ? BranchStatus.PhaseTwo_Committed : BranchStatus.PhaseTwo_CommitFailed_Retryable;
        } catch (Throwable t) {
            LOGGER.error(msg, t);
            throw new FrameworkException(t, msg);
        }
    }
```
通过参数 xid、branchId、resourceId、applicationData 恢复业务的上下文 businessActionContext。

根据获取到的上下文通过反射执行 commit 方法，并返回执行结果。回滚方法类似。

这里 branchCommit() 和 branchRollback() 提供给 rm 模块资源处理的抽象类 AbstractRMHandler 调用，这个 handler 是 core 模块定义的模板方法的进一步实现类。和 registerResource() 不一样，后者是 spring 扫描时主动注册资源。

## 四  . tcc 模式事务处理

spring 模块中的 TccActionInterceptor 的 invoke() 方法在被代理的 rpc bean 被调用时执行。该方法先获取 rpc 拦截器透传过来的全局事务 xid ，然后 TCC 模式下全局事务参与者的事务流程还是交给 tcc 模块 ActionInterceptorHandler  处理。

也就是说，事务参与者，在项目启动的时候，被代理。真实的业务方法，在 ActionInterceptorHandler 中，通过回调执行。

```java
    public Map<String, Object> proceed(Method method, Object[] arguments, String xid, TwoPhaseBusinessAction businessAction,
                                       Callback<Object> targetCallback) throws Throwable {
        Map<String, Object> ret = new HashMap<String, Object>(4);

        //TCC name
        String actionName = businessAction.name();
        BusinessActionContext actionContext = new BusinessActionContext();
        actionContext.setXid(xid);
        //set action anme
        actionContext.setActionName(actionName);

        //Creating Branch Record
        String branchId = doTccActionLogStore(method, arguments, businessAction, actionContext);
        actionContext.setBranchId(branchId);

        //set the parameter whose type is BusinessActionContext
        Class<?>[] types = method.getParameterTypes();
        int argIndex = 0;
        for (Class<?> cls : types) {
            if (cls.getName().equals(BusinessActionContext.class.getName())) {
                arguments[argIndex] = actionContext;
                break;
            }
            argIndex++;
        }
        //the final parameters of the try method
        ret.put(Constants.TCC_METHOD_ARGUMENTS, arguments);
        //the final result
        ret.put(Constants.TCC_METHOD_RESULT, targetCallback.execute());
        return ret;
    }
```

这里有两个重要操作：

1.doTccActionLogStore() 这个方法中，调用了两个比较重要的方法：
fetchActionRequestContext(method, arguments)，这个方法把被 @BusinessActionContextParam 注解的参数取出来，在下面的 init 方法中塞入 BusinessActionComtext ，同时塞入的还有事务相关参数。
DefaultResourceManager.get().branchRegister(BranchType.TCC, actionName, null, xid,applicationContextStr, null)，这个方法执行 TCC 模式下事务参与者事务分支的注册。

2.回调执行 targetCallback.execute() ，被代理的 bean 具体的业务，即 prepare() 方法。


## 五  .总结
tcc模块，主要提供以下功能 ：

1. 定义两阶段协议注解，提供 tcc 模式下事务流程需要的属性。
2. 提供解析不同 rpc 框架 remoting bean 的 ParserRemoting 实现，供 spring 模块调用。
3. 提供 TCC 模式下资源管理器，进行资源注册、事务分支注册提交回滚等。
4. 提供 TCC 模式下事务流程的处理类，让 MethodInterceptor 代理类不执行具体模式的事务流程，而是下放到 tcc 模块。

## 五  .相关
作者：赵润泽，[系列地址](https://blog.csdn.net/qq_37804737/category_9530078.html)。
