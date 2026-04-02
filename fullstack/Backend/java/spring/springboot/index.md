# spring boot

> Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".
>
> We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need minimal Spring configuration.

# feature

* Create stand-alone Spring applications
* Embed Tomcat, Jetty or Undertow directly (no need to deploy WAR files)
* Provide opinionated 'starter' dependencies to simplify your build configuration
* Automatically configure Spring and 3rd party libraries whenever possible
* Provide production-ready features such as metrics, health checks, and externalized configuration
* Absolutely no code generation and no requirement for XML configuration

Need more details?

* **Core Features:** [SpringApplication](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-spring-application) | [External Configuration](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-external-config) | [Profiles](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-profiles) | [Logging](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-logging)
* **Web Applications:** [MVC](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-spring-mvc) | [Embedded Containers](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-embedded-container)
* **Working with data:** [SQL](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-sql) | [NO-SQL](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-nosql)
* **Messaging:** [Overview](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-messaging) | [JMS](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-jms)
* **Testing:** [Overview](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-testing) | [Boot Applications](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-testing-spring-boot-applications) | [Utils](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-test-utilities)
* **Extending:** [Auto-configuration](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-developing-auto-configuration) | [@Conditions](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-condition-annotations)

![1615429505670-0a2bc2e8-14c5-4f81-af9a-75f39737bc4b.png](./img/6l0tejWWN4I4PlB2/1615429505670-0a2bc2e8-14c5-4f81-af9a-75f39737bc4b-100592.png)

`@SpringBootApplication` is a convenience annotation that adds all of the following:

* `@Configuration`: Tags the class as a source of bean definitions for the application context.
* `@EnableAutoConfiguration`: Tells Spring Boot to start adding beans based on classpath settings, other beans, and various property settings. For example, if `spring-webmvc` is on the classpath, this annotation flags the application as a web application and activates key behaviors, such as setting up a `DispatcherServlet`.
* `@ComponentScan`: Tells Spring to look for other components, configurations, and services in the `com/example` package, letting it find the controllers.

# 代码结构

com

 +- example

     +- myapplication

         +- Application.java

         |

         +- customer

         |   +- Customer.java

         |   +- CustomerController.java

         |   +- CustomerService.java

         |   +- CustomerRepository.java

         |

         +- order

             +- Order.java

             +- OrderController.java

             +- OrderService.java

             +- OrderRepository.java

<https://spring.io/guides#tutorials>

# 使用到的技术

* Spring Boot - 2.0.4.RELEASE
* JDK - 1.8 or later
* Spring Framework - 5.0.8 RELEASE
* Hibernate - 5.2.17.Final
* Maven - 3.2+
* Spring Data JPA - 2.0.10 RELEASE
* IDE - Eclipse or Spring Tool Suite (STS)
* MYSQL - 5.1.47
* Spring Security - 5.0.7 RELEASE
* JSP

# docs

<https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-security>

# Spring Data

1. JPA : Java persistence api which provide specification for persisting, reading, managing data from your java object to relations in database.
2. Hibernate: There are various provider which implement jpa. Hibernate is one of them. So we have other provider as well. But if using jpa with spring it allows you to switch to different providers in future.
3. Spring Data JPA : This is another layer on top of jpa which spring provide to make your life easy.

## Spring Data JPA

实现应用程序的数据访问层已经很麻烦了。为了执行简单的查询、分页和审计，必须编写太多的样板代码。

**Spring Data JPA的目标是通过减少实际需要的工作量来显著改进数据访问层的实现。**

作为开发人员，您编写**存储库接口**，包括自定义查找器方法，Spring将自动提供实现。

## hibernate

jpa是利用Hibernate生成各种自动化的sql

> orm框架的本质是简化编程中操作数据库的编码，发展到现在基本上就剩两家了，一个是宣称可以不用写一句SQL的hibernate，一个是可以灵活调试动态sql的mybatis

## mongodb

依赖添加 spring-boot-starter-data-mongodb包

在application.properties中添加配置

1. <code><font style="color:#1B1918;">spring</font><font style="color:#1B1918;">.</font><font style="color:#1B1918;">data</font><font style="color:#1B1918;">.</font><font style="color:#1B1918;">mongodb</font><font style="color:#1B1918;">.</font><font style="color:#1B1918;">uri</font><font style="color:#1B1918;">=</font><font style="color:#1B1918;">mongodb</font><font style="color:#1B1918;">:</font><font style="color:#9C9491;">//name:pass@localhost:27017/test</font></code>

# 定时任务

# 异步任务

异步发送邮件

# production

For additional “production ready” features, such as health, auditing, and metric REST or JMX end-points, consider adding `spring-boot-actuator`. See [*Spring Boot Actuator: Production-ready Features*](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#production-ready) for details.

***

Build an executable JAR

If you use Maven, you can run the application by using ./mvnw spring-boot:run. Alternatively, you can build the JAR file with ./mvnw clean package and then run the JAR file, as follows:

> java -jar target/gs-rest-service-0.1.0.jar

监控

使用Spring Boot Actuator监控应用

使用Spring-boot-admin对Spring-boot服务进行监控 

# 整合

Redis


> 更新: 2021-05-03 13:21:57  
> 原文: <https://www.yuque.com/u3641/dxlfpu/mgz8t2>