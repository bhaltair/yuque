# 写一个JS-sdk

一个jssdk一般是指提供给第三方人员使用的一段js，通过这个js实现一些平台化产品提供的服务，比如[微博的jssdk](http://jssdk.sinaapp.com/)。



## 核心问题
整个jssdk的设计有一下几个核心问题：

+ 代码如何被使用页面接入
+ 如何实现跨域通信
+ 如何实现优雅api的设计
+ 公共资源的使用
+ 代码组件化



## 我的理解
+ <font style="color:#2F2F2F;">要给SDK写文档 、写注释、做单元测试和情景测试。</font>
+ 暴露一个公共变量，最好能支持多种加载方式
+ Changelog要有
+ 发布到Npm
+ 优雅api的设计





## 参考


[https://juejin.im/post/5a2a53b151882503dc539f41#heading-1](https://juejin.im/post/5a2a53b151882503dc539f41#heading-1)



[https://js8.in/2016/06/29/javascript sdk(jssdk)设计指南/](https://js8.in/2016/06/29/javascript%20sdk(jssdk)%E8%AE%BE%E8%AE%A1%E6%8C%87%E5%8D%97/)



> 更新: 2019-01-15 14:50:44  
> 原文: <https://www.yuque.com/u3641/dxlfpu/ifhr9c>