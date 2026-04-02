# Dubbo

# dubbo 2.x
> Dubbo是一款高性能、轻量级的开源Java RPC框架，它提供了三大核心能力：面向接口的远程方法调用，智能容错和负载均衡，以及服务自动注册和发现。
>



[http://dubbo.apache.org/](http://dubbo.apache.org/)



[https://dubbo.apache.org/zh/docsv2.7/](https://dubbo.apache.org/zh/docsv2.7/)



Dubbo，更新了，现在文档是

> Apache Dubbo |ˈdʌbəʊ| 提供了六大核心能力：面向接口代理的高性能RPC调用，智能容错和负载均衡，服务自动注册和发现，高度可扩展能力，运行期流量调度，可视化的服务治理与运维。
>



谁在用？

当当网、网易考拉等互联网公司，也有中国人寿、青岛海尔等传统企业。



# dubbogo 3 


gRPC 协议，简单来说就是 http2 协议的基础之上，增加了特定的协议 header：“grpc-” 开头的 header 字段，采用特定的打解包工具（protobuf）对数据进行序列化，从而实现 RPC 调用。



gRPC 几乎没有服务治理能力，而阿里云现有 dubbo 框架兼具 RPC 和服务治理能力，整体实力不逊于 gRPC。但在“大家都用 gRPC” 这样的背景之下，dubbogo 3.0 的新通信协议就必须完美兼容 gRPC，对开发者已部署的服务完全兼容，并在此基础之上延续已有 dubbo 协议和服务治理能力，进而推出一系列新策略：比如 mesh 支持、应用级服务注册等。



# service mesh


> 云原生不过这世界变化快，自从以 docker 为代表的的容器技术和以 K8s 为代表的容器编排技术登上舞台之后，云原生时代到来了。在云原生时代，不可变的基础设施给原有的中间件带来了不可变的中间件基础设施：gRPC 统一了底层通信层；protobuf 统一了序列化协议；以 envoy + istio 为代表的 service mesh 逐渐统一了服务的控制面与数据面。
>

# REST与Thrift、Protobuf等的对比


> 更新: 2021-08-16 14:52:28  
> 原文: <https://www.yuque.com/u3641/dxlfpu/bp9oe0>