# Elasticsearch

参考 [https://www.yuque.com/u3641/dxlfpu/eh6sos#IscxS](https://www.yuque.com/u3641/dxlfpu/eh6sos#IscxS)

## [概念](http://www.macrozheng.com/#/reference/elasticsearch_start?id=%e7%9b%b8%e5%85%b3%e6%a6%82%e5%bf%b5)
+ <font style="color:rgb(52, 73, 94);">Near Realtime（近实时）：Elasticsearch是一个近乎实时的搜索平台，这意味着从索引文档到可搜索文档之间只有一个轻微的延迟(通常是一秒钟)。</font>
+ <font style="color:rgb(52, 73, 94);">Cluster（集群）：群集是一个或多个节点的集合，它们一起保存整个数据，并提供跨所有节点的联合索引和搜索功能。每个群集都有自己的唯一群集名称，节点通过名称加入群集。</font>
+ <font style="color:rgb(52, 73, 94);">Node（节点）：节点是指属于集群的单个Elasticsearch实例，存储数据并参与集群的索引和搜索功能。可以将节点配置为按集群名称加入特定集群，默认情况下，每个节点都设置为加入一个名为</font><font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">elasticsearch</font><font style="color:rgb(52, 73, 94);">的群集。</font>
+ <font style="color:rgb(52, 73, 94);">Index（索引）：索引是一些具有相似特征的文档集合，类似于MySql中数据库的概念。</font>
+ <font style="color:rgb(52, 73, 94);">Type（类型）：类型是索引的逻辑类别分区，通常，为具有一组公共字段的文档类型，类似MySql中表的概念。</font><font style="color:rgb(233, 105, 0);background-color:rgb(248, 248, 248);">注意</font><font style="color:rgb(52, 73, 94);">：在Elasticsearch 6.0.0及更高的版本中，一个索引只能包含一个类型。</font>
+ <font style="color:rgb(52, 73, 94);">Document（文档）：文档是可被索引的基本信息单位，以JSON形式表示，类似于MySql中行记录的概念。</font>
+ <font style="color:rgb(52, 73, 94);">Shards（分片）：当索引存储大量数据时，可能会超出单个节点的硬件限制，为了解决这个问题，Elasticsearch提供了将索引细分为分片的概念。分片机制赋予了索引水平扩容的能力、并允许跨分片分发和并行化操作，从而提高性能和吞吐量。</font>
+ <font style="color:rgb(52, 73, 94);">Replicas（副本）：在可能出现故障的网络环境中，需要有一个故障切换机制，Elasticsearch提供了将索引的分片复制为一个或多个副本的功能，副本在某些节点失效的情况下提供高可用性。</font>



> 更新: 2021-05-17 17:33:59  
> 原文: <https://www.yuque.com/u3641/dxlfpu/mmbl6b>