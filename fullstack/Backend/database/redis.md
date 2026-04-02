# redis

Redis 是完全开源的，遵守 BSD 协议，是一个高性能的 key-value 数据库。



Redis支持五种数据类型：string（字符串），hash（哈希），list（列表），set（集合）及zset(sorted set：有序集合)。

# 为什么要用 redis
内存存储，不能永久保存，重启后丢失



一般我们只是使用 Redis 存储一些常用和主要的数据，减少数据库的压力



# 使用场景
```plain
一般而言在使用 Redis 进行存储的时候，我们需要从以下几个方面来考虑：

**业务数据常用吗？命中率如何？**如果命中率很低，就没有必要写入缓存；
**该业务数据是读操作多，还是写操作多？**如果写操作多，频繁需要写入数据库，也没有必要使用缓存；
**业务数据大小如何？**如果要存储几百兆字节的文件，会给缓存带来很大的压力，这样也没有必要；
```



# 原生命令
Redis命令十分丰富，包括的命令组有Cluster、Connection、Geo、Hashes、HyperLogLog、Keys、Lists、Pub/Sub、Scripting、Server、Sets、Sorted Sets、Strings、Transactions一共14个redis命令组两百多个redis命令

```plain
String
GET/MGET
SET/SETEX/MSET/MSETNX
INCR/DECR
GETSET
DEL


List的操作命令如下：
LPUSH/LPUSHX/LPOP/RPUSH/RPUSHX/RPOP/LINSERT/LSET
LINDEX/LRANGE
LLEN/LTRIM

集合
SADD/SPOP/SMOVE/SCARD
SINTER/SDIFF/SDIFFSTORE/SUNION
```



# 五大数据类型
redis提供五种数据类型：string，hash，list，set及zset(sorted set)



+ 字符串，不仅能够存储字符串、还能存储图片、视频等多种类型, 最大长度支持512M
+ 列表
+ 哈希，<font style="color:rgb(51, 51, 51);">field和value都是字符串类型的</font>
+ 集合 Set，元素没有顺序，且唯一
+ 顺序集合 ZSet







# 特性 - 事务


# 特性 - 持久化
为了应对高并发，将数据先存在 redis，然后再将redis的数据同步到数据库中

# 
# 特性 - 发布订阅


# 常见问题 - 缓存穿透


概念：在Redis获取某一key时, 由于key不存在, 而必须向DB发起一次请求的行为, 称为“Redis击穿”。



```plain
引发击穿的原因：
第一次访问
恶意访问不存在的key
Key过期

合理的规避方案：
服务器启动时, 提前写入
规范key的命名, 通过中间件拦截
对某些高频访问的Key，设置合理的TTL或永不过期
```

# 常见问题 - 雪崩
> <font style="color:rgb(51, 51, 51);">Redis缓存层由于某种原因宕机后，所有的请求会涌向存储层，短时间内的高并发请求可能会导致存储层挂机，称之为“Redis雪崩”。</font>
>
> <font style="color:rgb(51, 51, 51);">合理的规避方案：</font>
>
> + <font style="color:rgb(51, 51, 51);">使用Redis集群</font>
> + <font style="color:rgb(51, 51, 51);">限流</font>
>



# Spring Boot 中使用
```plain
<!-- Radis -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```



# vercel kv


# upstash
[https://upstash.com/about](https://upstash.com/about)



https://www.npmjs.com/package/@upstash/redis



**<font style="color:#DF2A3F;">Support Client side web/mobile applications</font>**





```javascript
import { Redis } from "@upstash/redis"

const redis = new Redis({
  url: <UPSTASH_REDIS_REST_URL>,
  token: <UPSTASH_REDIS_REST_TOKEN>,
})

// string
await redis.set('key', 'value');
let data = await redis.get('key');
console.log(data)

await redis.set('key2', 'value2', {ex: 1});

// sorted set
await redis.zadd('scores', { score: 1, member: 'team1' })
data = await redis.zrange('scores', 0, 100 )
console.log(data)

// list
await redis.lpush('elements', 'magnesium')
data = await redis.lrange('elements', 0, 100 )
console.log(data)

// hash
await redis.hset('people', {name: 'joe'})
data = await redis.hget('people', 'name' )
console.log(data)

// sets
await redis.sadd('animals', 'cat')
data  = await redis.spop('animals', 1)
console.log(data)
```



## workers
[https://github.com/upstash/upstash-redis/tree/main/examples/cloudflare-workers](https://github.com/upstash/upstash-redis/tree/main/examples/cloudflare-workers)



## ratelimit
[https://github.com/upstash/ratelimit](https://github.com/upstash/ratelimit)



# 参考


[葡萄城 - Redis是什么？看这一篇就够了](https://www.cnblogs.com/powertoolsteam/p/redis.html)



> 更新: 2023-08-11 16:18:30  
> 原文: <https://www.yuque.com/u3641/dxlfpu/sdygxe>