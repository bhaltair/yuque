# Seneca.js 微服务

官网 3.8k stars



[https://senecajs.org/](https://senecajs.org/)



# 是什么


Seneca是一个用于编写微服务和组织应用程序业务逻辑的工具包。



你可以将应用程序分解为“正在发生的事情”，而不是专注于数据模型或管理依赖关系。



Seneca provides,

+ **pattern matching:** a wonderfully flexible way to handle business requirements
+ **transport independence:** how messages get to the right server is not something you should have to worry about
+ **maturity:** 8 years in production (before we called it _microservices_), but was once taken out by [lightning](http://aws.amazon.com/message/67457/)
+ **plus:** a deep and wide ecosystem of [plugins](https://github.com/search?utf8=%E2%9C%93&q=seneca&type=Repositories&ref=searchresults)
+ **book:** a guide to designing microservice architectures: [taomicro](https://bitly.com/rrtaomicro)



Seneca允许您轻松构建基于消息的微服务系统。您不需要知道其他服务的位置、它们的数量或它们的作用。

业务逻辑之外的一切——比如数据库、缓存和第三方集成——也同样隐藏在微服务背后。



这种解耦使您的系统易于持续构建和更改。



它之所以有效，是因为Seneca有以下三个核心特点:

+ 模式匹配 :而不是脆弱的服务发现，您只需让世界知道您所关心的消息类型。
+ 传输独立性: 您可以以多种方式在服务之间发送消息，所有这些方式都对业务逻辑隐藏。
+ 组件化: 功能被表示为一组插件，这些插件可以组合在一起作为微服务。



消息是JSON对象。它们可以有任何你喜欢的内部结构。消息可以通过HTTP/S、TCP、消息队列、发布/订阅服务或任何移动位的机制发送。从你作为服务编写者的角度来看，你只是向世界发送信息。您不需要知道哪些服务接收它们。



然后是你想要接收的信息。您指定您所关心的属性模式，并且Seneca(通过一些配置帮助)确保您获得与这些模式匹配的其他服务发送的任何消息。模式非常简单:只是一个必须与JSON消息的顶级属性匹配的键-值对列表。



本指南将带你通过seneca原则，并教你如何用它构建微服务。



让我们构建一些微服务吧!



# demo
```javascript
const seneca = require("seneca")();

// 目前，这一切都发生在同一个过程中，没有网络流量。进程内函数调用也是一种消息传输！

// seneca.add("role:math, cmd:sum", (msg, reply) => {
//   reply(null, { answer: msg.left + msg.right });
// });

seneca.add({ role: "math", cmd: "sum" }, function (msg, respond) {
  var sum = msg.left + msg.right;
  respond(null, { answer: sum });
});

seneca.act(
  {
    role: "math",
    cmd: "sum",
    left: 1,
    right: 2,
  },
  (err, result) => {
    if (err) {
      return console.error(err);
    }
    console.log(result);
  }
);

```



> 更新: 2021-09-07 11:11:21  
> 原文: <https://www.yuque.com/u3641/dxlfpu/tgeu0s>