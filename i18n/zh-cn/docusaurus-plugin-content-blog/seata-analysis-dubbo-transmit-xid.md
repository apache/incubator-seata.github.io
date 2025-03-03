---
title: 源码分析Seata-XID传递 Dubbo篇
keywords: [Seata, Dubbo, 分布式事务, spring]
description: 本文讲述通过源码解析Seata-Dubbo传递XID
author: FUNKYE
date: 2020/01/01
---

# 源码分析 Seata-XID 传递 Dubbo 篇

本文作者：FUNKYE(陈健斌),杭州某互联网公司主程。

# 前言

首先来看下包结构,在 seata-dubbo 和 seata-dubbo-alibaba 下有统一由 TransactionPropagationFilter 这个类,分别对应 apache-dubbo 跟 alibaba-dubbo.

![20200101203229](/img/blog/20200101203229.png)

## 分析源码

```java
package io.seata.integration.dubbo;

import io.seata.core.context.RootContext;
import org.apache.dubbo.common.Constants;
import org.apache.dubbo.common.extension.Activate;
import org.apache.dubbo.rpc.Filter;
import org.apache.dubbo.rpc.Invocation;
import org.apache.dubbo.rpc.Invoker;
import org.apache.dubbo.rpc.Result;
import org.apache.dubbo.rpc.RpcContext;
import org.apache.dubbo.rpc.RpcException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Activate(group = {Constants.PROVIDER, Constants.CONSUMER}, order = 100)
public class TransactionPropagationFilter implements Filter {

    private static final Logger LOGGER = LoggerFactory.getLogger(TransactionPropagationFilter.class);

    @Override
    public Result invoke(Invoker<?> invoker, Invocation invocation) throws RpcException {
        //获取本地XID
        String xid = RootContext.getXID();
        String xidInterceptorType = RootContext.getXIDInterceptorType();
        //获取Dubbo隐式传参中的XID
        String rpcXid = getRpcXid();
        String rpcXidInterceptorType = RpcContext.getContext().getAttachment(RootContext.KEY_XID_INTERCEPTOR_TYPE);
        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("xid in RootContext[{}] xid in RpcContext[{}]", xid, rpcXid);
        }
        boolean bind = false;
        if (xid != null) {
            //传递XID
            RpcContext.getContext().setAttachment(RootContext.KEY_XID, xid);
            RpcContext.getContext().setAttachment(RootContext.KEY_XID_INTERCEPTOR_TYPE, xidInterceptorType);
        } else {
            if (rpcXid != null) {
                //绑定XID
                RootContext.bind(rpcXid);
                RootContext.bindInterceptorType(rpcXidInterceptorType);
                bind = true;
                if (LOGGER.isDebugEnabled()) {
                    LOGGER.debug("bind[{}] interceptorType[{}] to RootContext", rpcXid, rpcXidInterceptorType);
                }
            }
        }
        try {
            return invoker.invoke(invocation);
        } finally {
            if (bind) {
                //进行剔除已完成事务的XID
                String unbindInterceptorType = RootContext.unbindInterceptorType();
                String unbindXid = RootContext.unbind();
                if (LOGGER.isDebugEnabled()) {
                    LOGGER.debug("unbind[{}] interceptorType[{}] from RootContext", unbindXid, unbindInterceptorType);
                }
                //如果发现解绑的XID并不是当前接收到的XID
                if (!rpcXid.equalsIgnoreCase(unbindXid)) {
                    LOGGER.warn("xid in change during RPC from {} to {}, xidInterceptorType from {} to {} ", rpcXid, unbindXid, rpcXidInterceptorType, unbindInterceptorType);
                    if (unbindXid != null) {
                        //重新绑定XID
                        RootContext.bind(unbindXid);
                        RootContext.bindInterceptorType(unbindInterceptorType);
                        LOGGER.warn("bind [{}] interceptorType[{}] back to RootContext", unbindXid, unbindInterceptorType);
                    }
                }
            }
        }
    }

    /**
     * get rpc xid
     * @return
     */
    private String getRpcXid() {
        String rpcXid = RpcContext.getContext().getAttachment(RootContext.KEY_XID);
        if (rpcXid == null) {
            rpcXid = RpcContext.getContext().getAttachment(RootContext.KEY_XID.toLowerCase());
        }
        return rpcXid;
    }

}
```

根据源码,我们可以推出相应的逻辑处理

![20200101213336](/img/blog/20200101213336.png)

## 要点知识

1. Dubbo @Activate 注解:

```java
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE, ElementType.METHOD})
public @interface Activate {
    /**
     * Group过滤条件。
     * <br />
     * 包含{@link ExtensionLoader#getActivateExtension}的group参数给的值，则返回扩展。
     * <br />
     * 如没有Group设置，则不过滤。
     */
    String[] group() default {};

    /**
     * Key过滤条件。包含{@link ExtensionLoader#getActivateExtension}的URL的参数Key中有，则返回扩展。
     * <p/>
     * 示例：<br/>
     * 注解的值 <code>@Activate("cache,validatioin")</code>，
     * 则{@link ExtensionLoader#getActivateExtension}的URL的参数有<code>cache</code>Key，或是<code>validatioin</code>则返回扩展。
     * <br/>
     * 如没有设置，则不过滤。
     */
    String[] value() default {};

    /**
     * 排序信息，可以不提供。
     */
    String[] before() default {};

    /**
     * 排序信息，可以不提供。
     */
    String[] after() default {};

    /**
     * 排序信息，可以不提供。
     */
    int order() default 0;
}
```

可以分析得知,Seata 的 dubbo 过滤器上的注解@Activate(group = \{Constants.PROVIDER, Constants.CONSUMER}, order = 100),表示 dubbo 的服务提供方跟消费方都会触发到这个过滤器,所以我们的 Seata 发起者会产生一个 XID 的传递,上述流程图跟代码已经很清晰的表示了.

2. Dubbo 隐式传参可以通过 `RpcContext` 上的 `setAttachment` 和 `getAttachment` 在服务消费方和提供方之间进行参数的隐式传递。

获取:RpcContext.getContext().getAttachment(RootContext.KEY_XID);

传递:RpcContext.getContext().setAttachment(RootContext.KEY_XID, xid);

# 总结

更多源码阅读请访问[Seata 官网](https://seata.apache.org/)
