# AMQP 和 RabbitMQ

# JMS
JMS 只能用在Java中，而 RabbitMQ可以跨平台



是一个Java标准，定义了使用消息代理 message broker 的通用API



JMS使用目的地名称来寻址，而AMQP消息使用 Exchange 和 routing key 来寻址



# AMQP


明白消息通过 routing key 发送到 Exchange，而消息要在队列中被消费



## 通过 RabbitTemplate 发送消息


### 配置消息转换器


## 接收来自 RabbitMQ的消息




### 使用 RabbitTemplate 接收消息 - 手动拉取


设置 receive-timeout



### 使用监听器处理RabbitMQ的消息 - 自动拉取


@RabbitListener 注解





> 更新: 2021-05-17 22:41:21  
> 原文: <https://www.yuque.com/u3641/dxlfpu/dqmdmm>