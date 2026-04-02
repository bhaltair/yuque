# hadoop

> <font style="color:rgb(51, 51, 51);">Hadoop是一个开源框架，允许使用简单的编程模型在跨计算机集群的分布式环境中存储和处理大数据。它的设计是从单个服务器扩展到数千个机器，每个都提供本地计算和存储。</font>
>



Hadoop就是存储海量数据和分析海量数据的工具。



离线计算



Hadoop是由java语言编写的，在分布式服务器集群上存储海量数据并运行分布式分析应用的开源框架，其核心部件是HDFS与MapReduce。



# HDFS
HDFS是一个分布式文件系统：引入存放文件元数据信息的服务器Namenode和实际存放数据的服务器Datanode，对数据进行分布式储存和读取。



# MapReduce
MapReduce是一个计算框架：MapReduce的核心思想是把计算任务分配给集群内的服务器里执行。通过对计算任务的拆分（Map计算/Reduce计算）再根据任务调度器（JobTracker）对任务进行分布式计算。





> 更新: 2021-05-03 19:34:02  
> 原文: <https://www.yuque.com/u3641/dxlfpu/svf438>