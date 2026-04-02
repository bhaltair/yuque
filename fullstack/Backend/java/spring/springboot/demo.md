# demo

该项目已成功集成

* actuator(监控)、
* admin(可视化监控)、
* logback(日志)、
* aopLog(通过AOP记录web请求日志)、
* 统一异常处理(json级别和页面级别)、
* freemarker(模板引擎)、
* thymeleaf(模板引擎)、
* Beetl(模板引擎)、
* Enjoy(模板引擎)、
* JdbcTemplate(通用JDBC操作数据库)、
* JPA(强大的ORM框架)、
* mybatis(强大的ORM框架)、
* 通用Mapper(快速操作Mybatis)、
* PageHelper(通用的Mybatis分页插件)、
* mybatis-plus(快速操作Mybatis)、
* BeetlSQL(强大的ORM框架)、
* upload(本地文件上传和七牛云文件上传)、
* redis(缓存)、
* ehcache(缓存)、
* email(发送各种类型邮件)、
* task(基础定时任务)、
* quartz(动态管理定时任务)、
* xxl-job(分布式定时任务)、
* swagger(API接口管理测试)、
* security(基于RBAC的动态权限认证)、
* SpringSession(Session共享)、
* Zookeeper(结合AOP实现分布式锁)、
* RabbitMQ(消息队列)、Kafka(消息队列)、
* websocket(服务端推送监控服务器运行信息)、
* socket.io(聊天室)、
* ureport2(中国式报表)、
* 打包成war文件、
* 集成 ElasticSearch(基本操作和高级查询)、
* Async(异步任务)、
* 集成Dubbo(采用官方的starter)、
* MongoDB(文档数据库)、
* neo4j(图数据库)、
* docker(容器化)、
* JPA多数据源、
* Mybatis多数据源、
* 代码生成器、
* GrayLog(日志收集)、
* JustAuth(第三方登录)、
* LDAP(增删改查)、
* 动态添加/切换数据源、
* 单机限流(AOP + Guava RateLimiter)、
* 分布式限流(AOP + Redis + Lua)、
* ElasticSearch 7.x(使用官方 Rest High Level Client)、
* HTTPS、
* Flyway(数据库初始化)、
* UReport2(中国式复杂报表)。

| Module 名称 | Module 介绍 |
| --- | --- |
| [demo-helloworld](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-helloworld) | spring-boot 的一个 helloworld |
| [demo-properties](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-properties) | spring-boot 读取配置文件中的内容 |
| [demo-actuator](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-actuator) | spring-boot 集成 spring-boot-starter-actuator 用于监控 spring-boot 的启动和运行状态 |
| [demo-admin-client](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-admin/admin-client) | spring-boot 集成 spring-boot-admin 来可视化的监控 spring-boot 程序的运行状态，可以与 actuator 互相搭配使用，客户端示例 |
| [demo-admin-server](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-admin/admin-server) | spring-boot 集成 spring-boot-admin 来可视化的监控 spring-boot 程序的运行状态，可以与 actuator 互相搭配使用，服务端示例 |
| [demo-logback](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-logback) | spring-boot 集成 logback 日志 |
| [demo-log-aop](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-log-aop) | spring-boot 使用 AOP 切面的方式记录 web 请求日志 |
| [demo-exception-handler](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-exception-handler) | spring-boot 统一异常处理，包括2种，第一种返回统一的 json 格式，第二种统一跳转到异常页面 |
| [demo-template-freemarker](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-template-freemarker) | spring-boot 集成 Freemarker 模板引擎 |
| [demo-template-thymeleaf](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-template-thymeleaf) | spring-boot 集成 Thymeleaf 模板引擎 |
| [demo-template-beetl](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-template-beetl) | spring-boot 集成 Beetl 模板引擎 |
| [demo-template-enjoy](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-template-enjoy) | spring-boot 集成 Enjoy 模板引擎 |
| [demo-orm-jdbctemplate](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-orm-jdbctemplate) | spring-boot 集成 Jdbc Template 操作数据库，并简易封装通用 Dao 层 |
| [demo-orm-jpa](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-orm-jpa) | spring-boot 集成 spring-boot-starter-data-jpa 操作数据库 |
| [demo-orm-mybatis](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-orm-mybatis) | spring-boot 集成原生mybatis，使用 <br/>[mybatis-spring-boot-starter](https://github.com/mybatis/spring-boot-starter)<br/> 集成 |
| [demo-orm-mybatis-mapper-page](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-orm-mybatis-mapper-page) | spring-boot 集成<br/>[通用Mapper](https://github.com/abel533/Mapper)<br/>和<br/>[PageHelper](https://github.com/pagehelper/Mybatis-PageHelper)<br/>，使用 <br/>[mapper-spring-boot-starter](https://github.com/abel533/Mapper/tree/master/spring-boot-starter)<br/> 和 <br/>[pagehelper-spring-boot-starter](https://github.com/pagehelper/pagehelper-spring-boot)<br/> 集成 |
| [demo-orm-mybatis-plus](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-orm-mybatis-plus) | spring-boot 集成 <br/>[mybatis-plus](https://mybatis.plus/)<br/>，使用 <br/>[mybatis-plus-boot-starter](http://mp.baomidou.com/)<br/> 集成，集成 BaseMapper、BaseService、ActiveRecord 操作数据库 |
| [demo-orm-beetlsql](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-orm-beetlsql) | spring-boot 集成 <br/>[beetl-sql](http://ibeetl.com/guide/#beetlsql)<br/>，使用 <br/>[beetl-framework-starter](http://ibeetl.com/guide/#beetlsql)<br/> 集成 |
| [demo-upload](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-upload) | spring-boot 文件上传示例，包含本地文件上传以及七牛云文件上传 |
| [demo-cache-redis](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-cache-redis) | spring-boot 整合 redis，操作redis中的数据，并使用redis缓存数据 |
| [demo-cache-ehcache](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-cache-ehcache) | spring-boot 整合 ehcache，使用 ehcache 缓存数据 |
| [demo-email](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-email) | spring-boot 整合 email，包括发送简单文本邮件、HTML邮件（包括模板HTML邮件）、附件邮件、静态资源邮件 |
| [demo-task](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-task) | spring-boot 快速实现定时任务 |
| [demo-task-quartz](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-task-quartz) | spring-boot 整合 quartz，并实现对定时任务的管理，包括新增定时任务，删除定时任务，暂停定时任务，恢复定时任务，修改定时任务启动时间，以及定时任务列表查询，<br/>`提供前端页面` |
| [demo-task-xxl-job](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-task-xxl-job) | spring-boot 整合<br/>[xxl-job](http://www.xuxueli.com/xxl-job/en/#/)<br/>，并提供绕过 <br/>`xxl-job-admin`<br/> 对定时任务的管理的方法，包括定时任务列表，触发器列表，新增定时任务，删除定时任务，停止定时任务，启动定时任务，修改定时任务，手动触发定时任务 |
| [demo-swagger](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-swagger) | spring-boot 集成原生的 <br/>`swagger`<br/> 用于统一管理、测试 API 接口 |
| [demo-swagger-beauty](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-swagger-beauty) | spring-boot 集成第三方 <br/>`swagger`<br/> <br/>[swagger-bootstrap-ui](https://github.com/xiaoymin/Swagger-Bootstrap-UI)<br/> 美化API文档样式，用于统一管理、测试 API 接口 |
| [demo-rbac-security](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-rbac-security) | spring-boot 集成 spring security 完成基于RBAC权限模型的权限管理，支持自定义过滤请求，动态权限认证，使用 JWT 安全认证，支持在线人数统计，手动踢出用户等操作 |
| [demo-rbac-shiro](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-rbac-shiro) | spring-boot 集成 shiro 实现权限管理   <br/>待完成 |
| [demo-session](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-session) | spring-boot 集成 Spring Session 实现Session共享、重启程序Session不失效 |
| [demo-oauth](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-oauth) | spring-boot 实现 oauth 服务器功能，实现授权码机制   <br/>待完成 |
| [demo-social](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-social) | spring-boot 集成第三方登录，集成 <br/>`justauth-spring-boot-starter`<br/> 实现QQ登录、GitHub登录、微信登录、谷歌登录、微软登录、小米登录、企业微信登录。 |
| [demo-zookeeper](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-zookeeper) | spring-boot 集成 Zookeeper 结合AOP实现分布式锁 |
| [demo-mq-rabbitmq](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-mq-rabbitmq) | spring-boot 集成 RabbitMQ 实现基于直接队列模式、分列模式、主题模式、延迟队列的消息发送和接收 |
| [demo-mq-rocketmq](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-mq-rocketmq) | spring-boot 集成 RocketMQ，实现消息的发送和接收   <br/>待完成 |
| [demo-mq-kafka](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-mq-kafka) | spring-boot 集成 kafka，实现消息的发送和接收 |
| [demo-websocket](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-websocket) | spring-boot 集成 websocket，后端主动推送前端服务器运行信息 |
| [demo-websocket-socketio](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-websocket-socketio) | spring-boot 使用 netty-socketio 集成 websocket，实现一个简单的聊天室 |
| [demo-ureport2](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-ureport2) | spring-boot 集成 ureport2 实现复杂的自定义的中国式报表   <br/>待完成 |
| [demo-uflo](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-uflo) | spring-boot 集成 uflo 快速实现轻量级流程引擎   <br/>待完成 |
| [demo-urule](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-urule) | spring-boot 集成 urule 快速实现规则引擎   <br/>待完成 |
| [demo-activiti](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-activiti) | spring-boot 集成 activiti 7 流程引擎   <br/>待完成 |
| [demo-async](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-async) | spring-boot 使用原生提供的异步任务支持，实现异步执行任务 |
| [demo-war](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-war) | spring-boot 打成 war 包的配置 |
| [demo-elasticsearch](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-elasticsearch) | spring-boot 集成 ElasticSearch，集成 <br/>`spring-boot-starter-data-elasticsearch`<br/> 完成对 ElasticSearch 的高级使用技巧，包括创建索引、配置映射、删除索引、增删改查基本操作、复杂查询、高级查询、聚合查询等 |
| [demo-dubbo](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-dubbo) | spring-boot 集成 Dubbo，分别为公共模块 <br/>`spring-boot-demo-dubbo-common`<br/>、服务提供方<br/>`spring-boot-demo-dubbo-provider`<br/>、服务调用方<br/>`spring-boot-demo-dubbo-consumer` |
| [demo-mongodb](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-mongodb) | spring-boot 集成 MongoDB，使用官方的 starter 实现增删改查 |
| [demo-neo4j](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-neo4j) | spring-boot 集成 Neo4j 图数据库，实现一个校园人物关系网的demo |
| [demo-docker](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-docker) | spring-boot 容器化 |
| [demo-multi-datasource-jpa](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-multi-datasource-jpa) | spring-boot 使用JPA集成多数据源 |
| [demo-multi-datasource-mybatis](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-multi-datasource-mybatis) | spring-boot 使用Mybatis集成多数据源，使用 Mybatis-Plus 提供的开源解决方案实现 |
| [demo-sharding-jdbc](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-sharding-jdbc) | spring-boot 使用 <br/>`sharding-jdbc`<br/> 实现分库分表，同时ORM采用 Mybatis-Plus |
| [demo-tio](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-tio) | spring-boot 集成 tio 网络编程框架   <br/>待完成 |
| demo-grpc | spring-boot 集成grpc，配置tls/ssl，参见<br/>[ISSUE#5](https://github.com/xkcoding/spring-boot-demo/issues/5)<br/>   <br/>待完成 |
| [demo-codegen](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-codegen) | spring-boot 集成 velocity 模板技术实现的代码生成器，简化开发 |
| [demo-graylog](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-graylog) | spring-boot 集成 graylog 实现日志统一收集 |
| demo-sso | spring-boot 集成 SSO 单点登录，参见 <br/>[ISSUE#12](https://github.com/xkcoding/spring-boot-demo/issues/12)<br/>   <br/>待完成 |
| [demo-ldap](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-ldap) | spring-boot 集成 LDAP，集成 <br/>`spring-boot-starter-data-ldap`<br/> 完成对 Ldap 的基本 CURD操作, 并给出以登录为实战的 API 示例，参见 <br/>[ISSUE#23](https://github.com/xkcoding/spring-boot-demo/issues/23)<br/>，感谢 <br/>[@fxbin](https://github.com/fxbin) |
| [demo-dynamic-datasource](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-dynamic-datasource) | spring-boot 动态添加数据源、动态切换数据源 |
| [demo-ratelimit-guava](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-ratelimit-guava) | spring-boot 使用 Guava RateLimiter 实现单机版限流，保护 API |
| [demo-ratelimit-redis](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-ratelimit-redis) | spring-boot 使用 Redis + Lua 脚本实现分布式限流，保护 API |
| [demo-https](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-https) | spring-boot 集成 HTTPS |
| [demo-elasticsearch-rest-high-level-client](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-elasticsearch-rest-high-level-client) | spring boot 集成 ElasticSearch 7.x 版本，使用官方 Rest High Level Client 操作 ES 数据 |
| [demo-flyway](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-flyway) | spring boot 集成 Flyway，项目启动时初始化数据库表结构，同时支持数据库脚本版本控制 |
| [demo-ureport2](https://github.com/xkcoding/spring-boot-demo/blob/master/demo-ureport2) | spring boot 集成 Ureport2，实现中国式复杂报表设计 |


> 更新: 2021-04-29 10:17:17  
> 原文: <https://www.yuque.com/u3641/dxlfpu/elwo4k>