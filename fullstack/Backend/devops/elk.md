# elk

## elk
+ e Elasticsearch
+ l Logstash
+ k Kibana



## Kibana


Kibana 6.4.0 不支持安装 sense 插件，因为内置有 devtools



sense 已经是2016年最后更新了。。，其实就是模拟发送 rest 请求



我看的文档是有多旧



## es
[index.html](https://www.elastic.co/guide/cn/elasticsearch/guide/current/index.html)

```
> <font style="color:rgb(33, 37, 41);">Elasticsearch 是一个分布式、可扩展、实时的搜索与数据分析引擎。</font>
>
> _<font style="color:rgb(33, 37, 41);">Elasticsearch</font>_<font style="color:rgb(33, 37, 41);">是一个实时的分布式搜索分析引擎。</font>
>
> <font style="color:rgb(33, 37, 41);">它能从项目一开始就赋予你的数据以搜索、分析和探索的能力</font>
>

<font style="color:rgb(33, 37, 41);"></font>

<font style="color:rgb(33, 37, 41);">学习：</font>

<font style="color:rgb(52, 73, 94);">《Elasticsearch 权威指南》：</font>[https://www.elastic.co/guide/cn/elasticsearch/guide/current/index.html](https://www.elastic.co/guide/cn/elasticsearch/guide/current/index.html)
```


场景：

+ 无论你是需要全文搜索，还是结构化数据的实时统计
+ GitHub 使用 Elasticsearch 对1300亿行代码进行查询。



Elasticsearch 也是使用 Java 编写的，它的内部使用 Lucene 做索引与搜索，但是它的目的是使全文检索变得简单， 通过隐藏 Lucene 的复杂性，取而代之的提供一套简单一致的 RESTful API。



测试 Elasticsearch 是否启动成功
```
> curl '[http://localhost:9200/?pretty'](http://localhost:9200/?pretty')
>
```


Elasticsearch 是 **面向文档** 的，意味着它存储整个对象或 文档



在 Elasticsearch 中，我们对文档进行索引、检索、排序和过滤—而不是对行列数据。这是一种完全不同的思考数据的方式，也是 Elasticsearch 能支持复杂全文检索的原因。



使用 JSON 作为文档的序列化格式



[Elasticsearch 客户端](https://www.elastic.co/guide/en/elasticsearch/client/index.html)



### 基础概念
索引、搜索及聚合等基础概念



更多诸如 suggestions、geolocation、percolation、fuzzy 与 partial matching 等特性均被省略



### 复杂搜索
```bash
curl -X GET "localhost:9200/megacorp/employee/_search?pretty" -H 'Content-Type: application/json' -d'
{
    "query" : {
        "bool": {
            "must": {
                "match" : {
                    "last_name" : "smith" 
                }
            },
            "filter": {
                "range" : {
                    "age" : { "gt" : 30 } 
                }
            }
        }
    }
}
'

```

### 全文搜索
返回字段中有个score，代表相关性得分

```bash
curl -X GET "localhost:9200/megacorp/employee/_search?pretty" -H 'Content-Type: application/json' -d'
{
    "query" : {
        "match" : {
            "about" : "rock climbing"
        }
    }
}
```

短语搜索

match 改为 match_phrase



### 高亮搜索
```bash
GET /megacorp/employee/_search?pretty
{
    "query" : {
        "match_phrase" : {
            "about" : "rock climbing"
        }
    },
    "highlight": {
        "fields" : {
            "about" : {}
        }
    }
}
```

### 聚合分析
查询特定兴趣爱好员工的平均年龄

```bash
curl -X GET "localhost:9200/megacorp/employee/_search?pretty" -H 'Content-Type: application/json' -d'
{
    "aggs" : {
        "all_interests" : {
            "terms" : { "field" : "interests" },
            "aggs" : {
                "avg_age" : {
                    "avg" : { "field" : "age" }
                }
            }
        }
    }
}

```





### nodejs 客户端
```javascript
const { Client } = require('@elastic/elasticsearch')
const client = new Client({
  node: 'https://localhost:9200',
  auth: {
    apiKey: {
      id: 'foo',
      api_key: 'bar'
    }
  }
})

// promise API
const result = await client.search({
  index: 'my-index',
  body: {
    query: {
      match: { hello: 'world' }
    }
  }
})

// callback API
client.search({
  index: 'my-index',
  body: {
    query: {
      match: { hello: 'world' }
    }
  }
}, (err, result) => {
  if (err) console.log(err)
})
```



### go 客户端
```go
package main

import (
  "log"

  "github.com/elastic/go-elasticsearch/v7"
)

func main() {
  es, _ := elasticsearch.NewDefaultClient()
  log.Println(es.Info())
}
```



### java 客户端
```plain
<dependency>
    <groupId>org.elasticsearch.client</groupId>
    <artifactId>elasticsearch-rest-client</artifactId>
    <version>7.12.1</version>
</dependency>

<dependency>
    <groupId>org.elasticsearch.client</groupId>
    <artifactId>elasticsearch-rest-high-level-client</artifactId>
    <version>7.12.1</version>
</dependency>
```

## filebeat
之前我们搭建的ELK日志收集系统，主要是用来收集SpringBoot应用的日志。其原理是应用通过Logstash插件，使用TCP向Logstash传输日志，从而存储到Elasticsearch中去。但是有很多中间件的日志都是直接存储在文件中的，比如Nginx、Elasticsearch和MySQL，此时我们就需要一个搬运工来把日志搬到Elasticsearch中去，Filebeat正是这样一个日志搬运工





## efk
> ELK日志收集系统大家都知道，但是还有一种日志收集系统EFK，肯定有很多朋友不知道！这里的F指的是Fluentd，它具有Logstash类似的日志收集功能，但是内存占用连Logstash的十分之一都不到
>



## 参考
[https://mp.weixin.qq.com/s/8nUunL02Y5AfXTCscYg54w](https://mp.weixin.qq.com/s/8nUunL02Y5AfXTCscYg54w)



> 更新: 2021-05-12 15:17:20  
> 原文: <https://www.yuque.com/u3641/dxlfpu/eh6sos>