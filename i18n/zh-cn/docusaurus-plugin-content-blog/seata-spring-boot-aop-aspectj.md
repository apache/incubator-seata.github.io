---
title: 通过AOP动态创建/关闭Seata分布式事务
keywords: [Seata,Nacos,分布式事务,spring]
description: 本文讲述如何通过AOP动态创建/关闭Seata分布式事务
author: FUNKYE
date: 2019/12/23
---

# 通过AOP动态创建/关闭Seata分布式事务

本文作者：FUNKYE(陈健斌),杭州某互联网公司主程。

# 前言

通过GA大会上滴滴出行的高级研发工程陈鹏志的在滴滴两轮车业务中的实践,发现动态降级的必要性是非常的高,所以这边简单利用spring boot aop来简单的处理降级相关的处理,这边非常感谢陈鹏志的分享!

可利用此demo[项目地址](https://gitee.com/itCjb/springboot-dubbo-mybatisplus-seata )

通过以下代码改造实践.

## 准备工作

 	1.创建测试用的TestAspect:

```java
package org.test.config;

import java.lang.reflect.Method;

import org.apache.commons.lang3.StringUtils;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import io.seata.core.context.RootContext;
import io.seata.core.exception.TransactionException;
import io.seata.tm.api.GlobalTransaction;
import io.seata.tm.api.GlobalTransactionContext;

@Aspect
@Component
public class TestAspect {
    private final static Logger logger = LoggerFactory.getLogger(TestAspect.class);

    @Before("execution(* org.test.service.*.*(..))")
    public void before(JoinPoint joinPoint) throws TransactionException {
        MethodSignature signature = (MethodSignature)joinPoint.getSignature();
        Method method = signature.getMethod();
        logger.info("拦截到需要分布式事务的方法," + method.getName());
        // 此处可用redis或者定时任务来获取一个key判断是否需要关闭分布式事务
        // 模拟动态关闭分布式事务
        if ((int)(Math.random() * 100) % 2 == 0) {
            GlobalTransaction tx = GlobalTransactionContext.getCurrentOrCreate();
            tx.begin(300000, "test-client");
        } else {
            logger.info("关闭分布式事务");
        }
    }

    @AfterThrowing(throwing = "e", pointcut = "execution(* org.test.service.*.*(..))")
    public void doRecoveryActions(Throwable e) throws TransactionException {
        logger.info("方法执行异常:{}", e.getMessage());
        if (!StringUtils.isBlank(RootContext.getXID()))
            GlobalTransactionContext.reload(RootContext.getXID()).rollback();
    }

    @AfterReturning(value = "execution(* org.test.service.*.*(..))", returning = "result")
    public void afterReturning(JoinPoint point, Object result) throws TransactionException {
        logger.info("方法执行结束:{}", result);
        if ((Boolean)result) {
            if (!StringUtils.isBlank(RootContext.getXID())) {
                logger.info("分布式事务Id:{}", RootContext.getXID());
                GlobalTransactionContext.reload(RootContext.getXID()).commit();
            }
        }
    }

}
```

请注意上面的包名可改为你自己的service包名:

 	2.改动service代码:

```java
    public Object seataCommit() {
        testService.Commit();
        return true;
    }
```

因为异常跟返回结果我们都会拦截,所以这边可以trycatch或者直接让他抛异常来拦截也行,或者直接判断返回结果,比如你的业务代码code=200为成功,那么就commit,反之在拦截返回值那段代码加上rollback;

# 进行调试

 	1.更改代码主动抛出异常

```java
    public Object seataCommit() {
        try {
            testService.Commit();
            int i = 1 / 0;
            return true;
        } catch (Exception e) {
            // TODO: handle exception
            throw new RuntimeException();
        }
    }
```

 	查看日志:

```java
2019-12-23 11:57:55.386  INFO 23952 --- [.0-28888-exec-7] org.test.controller.TestController       : 拦截到需要分布式事务的方法,seataCommit
2019-12-23 11:57:55.489  INFO 23952 --- [.0-28888-exec-7] i.seata.tm.api.DefaultGlobalTransaction  : Begin new global transaction [192.168.14.67:8092:2030765910]
2019-12-23 11:57:55.489  INFO 23952 --- [.0-28888-exec-7] org.test.controller.TestController       : 创建分布式事务完毕192.168.14.67:8092:2030765910
2019-12-23 11:57:55.709  INFO 23952 --- [.0-28888-exec-7] org.test.controller.TestController       : 方法执行异常:null
2019-12-23 11:57:55.885  INFO 23952 --- [.0-28888-exec-7] i.seata.tm.api.DefaultGlobalTransaction  : [192.168.14.67:8092:2030765910] rollback status: Rollbacked
2019-12-23 11:57:55.888 ERROR 23952 --- [.0-28888-exec-7] o.a.c.c.C.[.[.[/].[dispatcherServlet]    : Servlet.service() for servlet [dispatcherServlet] in context with path [] threw exception [Request processing failed; nested exception is java.lang.RuntimeException] with root cause

```

 	可以看到已被拦截也触发了rollback了.

 	2.恢复代码调试正常情况:

```java
    public Object seataCommit() {
        testService.Commit();
        return true;
    }
```

 	查看日志:

```
2019-12-23 12:00:20.876  INFO 23952 --- [.0-28888-exec-2] org.test.controller.TestController       : 拦截到需要分布式事务的方法,seataCommit
2019-12-23 12:00:20.919  INFO 23952 --- [.0-28888-exec-2] i.seata.tm.api.DefaultGlobalTransaction  : Begin new global transaction [192.168.14.67:8092:2030765926]
2019-12-23 12:00:20.920  INFO 23952 --- [.0-28888-exec-2] org.test.controller.TestController       : 创建分布式事务完毕192.168.14.67:8092:2030765926
2019-12-23 12:00:21.078  INFO 23952 --- [.0-28888-exec-2] org.test.controller.TestController       : 方法执行结束:true
2019-12-23 12:00:21.078  INFO 23952 --- [.0-28888-exec-2] org.test.controller.TestController       : 分布式事务Id:192.168.14.67:8092:2030765926
2019-12-23 12:00:21.213  INFO 23952 --- [.0-28888-exec-2] i.seata.tm.api.DefaultGlobalTransaction  : [192.168.14.67:8092:2030765926] commit status: Committed
```

 	可以看到事务已经被提交了.

# 总结

更详细的内容希望希望大家访问以下地址阅读详细文档

[nacos官网](https://nacos.io/zh-cn/index.html)

[dubbo官网](http://dubbo.apache.org/en-us/)

[seata官网](https://seata.apache.org/zh-cn/)

[docker官网](https://www.docker.com/)
