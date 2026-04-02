# 曾探-JavaScript设计模式与开发实践

>  　曾探，2007年毕业于吉林大学软件学院。就职于国内知名前端团队腾讯AlloyTeam，高级工程师。曾参与WebQQ、QQ群、Q+开发者网站、微云、QQ兴趣部落等大型前端项目的开发。有过Java、Python和JavaScript的开发经验，业余作品有HTML5版街头霸王等。平时喜欢电影和音乐，业余时间也是一名健身教练。
>





<font style="color:#666666;">那么，在进入设计模式的学习之前，我们最好还是从模式的起源说起，分别听听这些不同的声音。</font>

<font style="color:#666666;">　　设计模式并非是软件开发的专业术语。实际上，“模式”最早诞生于建筑学。20世纪70年代，哈佛大学建筑学博士Christopher Alexander和他的研究团队花了约20年的时间，研究了为解决同一个问题而设计出的不同建筑结构，从中发现了那些高质量设计中的相似性，并且用“模式”来指代这种相似性。</font>

<font style="color:#666666;">　　受Christopher Alexander工作的启发，Erich Gamma、Richard Helm、Ralph Johnson、John Vlissides四人（人称Gang Of Four ，GoF）把这种“模式”观点应用于面向对象的软件设计中，并且总结了23种常见的软件开发设计模式，录入《设计模式：可复用面向对象软件的基础》一书。</font>

<font style="color:#666666;">　　设计模式的定义是：在面向对象软件设计过程中针对特定问题的简洁而优雅的解决方案。</font>



<font style="color:#F5222D;">如果再通俗一点说，设计模式就是给面向对象软件开发中的一些好的设计取个名字。</font>



学习模式的作用

 小说家很少从头开始设计剧情，足球教练也很少从头开始发明战术，他们总是沿袭一些已经存在的模式。当足球教练看到对方边后卫速度慢，中后卫身高矮时，自然会想到“下底传中”这种模式。

 同样，在软件设计中，模式是一些经过了大量实际项目验证的优秀解决方案。熟悉这些模式的程序员，对某些模式的理解也许形成了条件反射。当合适的场景出现时，他们可以很快地找到某种模式作为解决方案。

 比如，当他们看到系统中存在一些大量的相似对象，这些对象给系统的内存带来了较大的负担。如果他们熟悉享元模式，那么第一时间就可以想到用享元模式来优化这个系统。再比如，系统中某个接口的结构已经不能符合目前的需求，但他们又不想去改动这个被灰尘遮住的老接口，一个熟悉模式的程序员将很快地找到适配器模式来解决这个问题。

** 如果我们还没有学习全部的模式，当遇到一个问题时，我们冥冥之中觉得这个问题出现的几率很高，说不定别人也遇到过同样的问题，并且已经把它整理成了模式，提供了一种通用的解决方案。这时候去翻翻《设计模式》这本书也许就会有意外的收获。**







<font style="color:#666666;">第一部分　基础知识</font>

<font style="color:#666666;">第1章　面向对象的JavaScript</font>

<font style="color:#666666;">1.1 动态类型语言和鸭子类型</font>

<font style="color:#666666;">1.2 多态</font>

<font style="color:#666666;">1.3 封装</font>

<font style="color:#666666;">1.4 原型模式和基于原型继承的JavaScript对象系统</font>

<font style="color:#666666;">第2章　this、call和apply</font>

<font style="color:#666666;">2.1 this</font>

<font style="color:#666666;">2.2 call和apply</font>

<font style="color:#666666;">第3章　闭包和高阶函数</font>

<font style="color:#666666;">3.1 闭包</font>

<font style="color:#666666;">3.2 高阶函数</font>

<font style="color:#666666;">3.3 小结</font>

<font style="color:#666666;">第二部分 设计模式</font>

<font style="color:#666666;">第4章　单例模式</font>

<font style="color:#666666;">4.1 实现单例模式</font>

<font style="color:#666666;">4.2 透明的单例模式</font>

<font style="color:#666666;">4.3 用代理实现单例模式</font>

<font style="color:#666666;">4.4 JavaScript中的单例模式</font>

<font style="color:#666666;">4.5 惰性单例</font>

<font style="color:#666666;">4.6 通用的惰性单例</font>

<font style="color:#666666;">4.7 小结</font>

<font style="color:#666666;">第5章　策略模式</font>

<font style="color:#666666;">5.1 使用策略模式计算奖金</font>

<font style="color:#666666;">5.2 JavaScript 版本的策略模式</font>

<font style="color:#666666;">5.3 多态在策略模式中的体现</font>

<font style="color:#666666;">5.4 使用策略模式实现缓动动画</font>

<font style="color:#666666;">5.5 更广义的"算法"</font>

<font style="color:#666666;">5.6 表单校验</font>

<font style="color:#666666;">5.7 策略模式的优缺点</font>

<font style="color:#666666;">5.8 一等函数对象与策略模式</font>

<font style="color:#666666;">5.9 小结</font>

<font style="color:#666666;">第6章　代理模式</font>

<font style="color:#666666;">6.1 第一个例子--小明追MM的故事</font>

<font style="color:#666666;">6.2 保护代理和虚拟代理</font>

<font style="color:#666666;">6.3 虚拟代理实现图片预加载</font>

<font style="color:#666666;">6.4 代理的意义</font>

<font style="color:#666666;">6.5 代理和本体接口的一致性</font>

<font style="color:#666666;">6.6 虚拟代理合并HTTP 请求</font>

<font style="color:#666666;">6.7 虚拟代理在惰性加载中的应用</font>

<font style="color:#666666;">6.8 缓存代理</font>

<font style="color:#666666;">6.9 用高阶函数动态创建代理</font>

<font style="color:#666666;">6.10 其他代理模式</font>

<font style="color:#666666;">6.11 小结</font>

<font style="color:#666666;">第7章　迭代器模式</font>

<font style="color:#666666;">7.1 jQuery 中的迭代器</font>

<font style="color:#666666;">7.2 实现自己的迭代器</font>

<font style="color:#666666;">7.3 内部迭代器和外部迭代器</font>

<font style="color:#666666;">7.4 迭代类数组对象和字面量对象</font>

<font style="color:#666666;">7.5 倒序迭代器</font>

<font style="color:#666666;">7.6 中止迭代器</font>

<font style="color:#666666;">7.7 迭代器模式的应用举例</font>

<font style="color:#666666;">7.8 小结</font>

<font style="color:#666666;">第8章　发布-订阅模式</font>

<font style="color:#666666;">8.1 现实中的发布-订阅模式</font>

<font style="color:#666666;">8.2 发布-订阅模式的作用</font>

<font style="color:#666666;">8.3 DOM 事件</font>

<font style="color:#666666;">8.4 自定义事件</font>

<font style="color:#666666;">8.5 发布-订阅模式的通用实现</font>

<font style="color:#666666;">8.6 取消订阅的事件</font>

<font style="color:#666666;">8.7 真实的例子--网站登录</font>

<font style="color:#666666;">8.8 全局的发布-订阅对象</font>

<font style="color:#666666;">8.9 模块间通信</font>

<font style="color:#666666;">8.10 必须先订阅再发布吗</font>

<font style="color:#666666;">8.11 全局事件的命名冲突</font>

<font style="color:#666666;">8.12 JavaScript实现发布-订阅模式的便利性</font>

<font style="color:#666666;">8.13 小结</font>

<font style="color:#666666;">第9章　命令模式</font>

<font style="color:#666666;">9.1 命令模式的用途</font>

<font style="color:#666666;">9.2 命令模式的例子--菜单程序</font>

<font style="color:#666666;">9.3 JavaScript中的命令模式</font>

<font style="color:#666666;">9.4 撤销命令</font>

<font style="color:#666666;">9.5 撤消和重做</font>

<font style="color:#666666;">9.6 命令队列</font>

<font style="color:#666666;">9.7 宏命令</font>

<font style="color:#666666;">9.8 智能命令与傻瓜命令</font>

<font style="color:#666666;">9.9 小结</font>

<font style="color:#666666;">第10章　组合模式</font>

<font style="color:#666666;">10.1 回顾宏命令</font>

<font style="color:#666666;">10.2 组合模式的用途</font>

<font style="color:#666666;">10.3 请求在树中传递的过程</font>

<font style="color:#666666;">10.4 更强大的宏命令</font>

<font style="color:#666666;">10.5 抽象类在组合模式中的作用</font>

<font style="color:#666666;">10.6 透明性带来的安全问题</font>

<font style="color:#666666;">10.7 组合模式的例子--扫描文件夹</font>

<font style="color:#666666;">10.8 一些值得注意的地方</font>

<font style="color:#666666;">10.9 引用父对象</font>

<font style="color:#666666;">10.10 何时使用组合模式</font>

<font style="color:#666666;">10.11 小结</font>

<font style="color:#666666;">第11章　模板方法模式</font>

<font style="color:#666666;">11.1 模板方法模式的定义和组成</font>

<font style="color:#666666;">11.2 第一个例子--Coffee or Tea</font>

<font style="color:#666666;">11.3 抽象类</font>

<font style="color:#666666;">11.4 模板方法模式的使用场景</font>

<font style="color:#666666;">11.5 钩子方法</font>

<font style="color:#666666;">11.6 好莱坞原则</font>

<font style="color:#666666;">11.7 真的需要"继承"吗</font>

<font style="color:#666666;">11.8 小结</font>

<font style="color:#666666;">第12章　享元模式</font>

<font style="color:#666666;">12.1 初识享元模式</font>

<font style="color:#666666;">12.2 内部状态与外部状态</font>

<font style="color:#666666;">12.3 享元模式的通用结构</font>

<font style="color:#666666;">12.4 文件上传的例子</font>

<font style="color:#666666;">12.5 享元模式的适用性</font>

<font style="color:#666666;">12.6 再谈内部状态和外部状态</font>

<font style="color:#666666;">12.7 对象池</font>

<font style="color:#666666;">12.8 小结</font>

<font style="color:#666666;">第13章　职责链模式</font>

<font style="color:#666666;">13.1 现实中的职责链模式</font>

<font style="color:#666666;">13.2 实际开发中的职责链模式</font>

<font style="color:#666666;">13.3 用职责链模式重构代码</font>

<font style="color:#666666;">13.4 灵活可拆分的职责链节点</font>

<font style="color:#666666;">13.5 异步的职责链</font>

<font style="color:#666666;">13.6 职责链模式的优缺点</font>

<font style="color:#666666;">13.7 用AOP 实现职责链</font>

<font style="color:#666666;">13.8 用职责链模式获取文件上传对象</font>

<font style="color:#666666;">13.9 小结</font>

<font style="color:#666666;">第14章　中介者模式</font>

<font style="color:#666666;">14.1 现实中的中介者</font>

<font style="color:#666666;">14.2 中介者模式的例子--泡泡堂游戏</font>

<font style="color:#666666;">14.3 中介者模式的例子--购买商品</font>

<font style="color:#666666;">14.4 小结</font>

<font style="color:#666666;">第15章　装饰者模式</font>

<font style="color:#666666;">15.1 模拟传统面向对象语言的装饰者模式</font>

<font style="color:#666666;">15.2 装饰者也是包装器</font>

<font style="color:#666666;">15.3 回到JavaScript 的装饰者</font>

<font style="color:#666666;">15.4 装饰函数</font>

<font style="color:#666666;">15.5 用AOP 装饰函数</font>

<font style="color:#666666;">15.6 AOP 的应用实例</font>

<font style="color:#666666;">15.7 装饰者模式和代理模式</font>

<font style="color:#666666;">15.8 小结</font>

<font style="color:#666666;">第16章　状态模式</font>

<font style="color:#666666;">16.1 初识状态模式</font>

<font style="color:#666666;">16.2 状态模式的定义</font>

<font style="color:#666666;">16.3 状态模式的通用结构</font>

<font style="color:#666666;">16.4 缺少抽象类的变通方式</font>

<font style="color:#666666;">16.5 另一个状态模式示例--文件上传</font>

<font style="color:#666666;">16.6 状态模式的优缺点</font>

<font style="color:#666666;">16.7 状态模式中的性能优化点</font>

<font style="color:#666666;">16.8 状态模式和策略模式的关系</font>

<font style="color:#666666;">16.9 JavaScript版本的状态机</font>

<font style="color:#666666;">16.10 表驱动的有限状态机</font>

<font style="color:#666666;">16.11 实际项目中的其他状态机</font>

<font style="color:#666666;">16.12 小结</font>

<font style="color:#666666;">第17章　适配器模式</font>

<font style="color:#666666;">17.1 现实中的适配器</font>

<font style="color:#666666;">17.2 适配器模式的应用</font>

<font style="color:#666666;">17.3 小结</font>

<font style="color:#666666;">第三部分 设计原则和编程技巧</font>

<font style="color:#666666;">第18章　单一职责原则</font>

<font style="color:#666666;">18.1 设计模式中的SRP原则</font>

<font style="color:#666666;">18.2 何时应该分离职责</font>

<font style="color:#666666;">18.3 违反SRP原则</font>

<font style="color:#666666;">18.4 SRP 原则的优缺点</font>

<font style="color:#666666;">第19章　最少知识原则</font>

<font style="color:#666666;">19.1 减少对象之间的联系</font>

<font style="color:#666666;">19.2 设计模式中的LKP原则</font>

<font style="color:#666666;">19.3 封装在LKP 原则中的体现</font>

<font style="color:#666666;">第20章　开放-封闭原则</font>

<font style="color:#666666;">20.1 扩展window.onload函数</font>

<font style="color:#666666;">20.2 开放和封闭</font>

<font style="color:#666666;">20.3 用对象的多态性消除条件分支</font>

<font style="color:#666666;">20.4 找出变化的地方</font>

<font style="color:#666666;">20.5 设计模式中的开放-封闭原则</font>

<font style="color:#666666;">20.6 开放-封闭原则的相对性</font>

<font style="color:#666666;">20.7 接受第一次愚弄</font>

<font style="color:#666666;">第21章　接口和面向接口编程</font>

<font style="color:#666666;">21.1 回到Java的抽象类</font>

<font style="color:#666666;">21.2 interface</font>

<font style="color:#666666;">21.3 JavaScript 语言是否需要抽象类和interface</font>

<font style="color:#666666;">21.4 用鸭子类型进行接口检查</font>

<font style="color:#666666;">21.5 用TypeScript 编写基于interface的命令模式</font>

<font style="color:#666666;">第22章　代码重构</font>

<font style="color:#666666;">22.1 提炼函数</font>

<font style="color:#666666;">22.2 合并重复的条件片段</font>

<font style="color:#666666;">22.3 把条件分支语句提炼成函数</font>

<font style="color:#666666;">22.4 合理使用循环</font>

<font style="color:#666666;">22.5 提前让函数退出代替嵌套条件分支</font>

<font style="color:#666666;">22.6 传递对象参数代替过长的参数列表</font>

<font style="color:#666666;">22.7 尽量减少参数数量</font>

<font style="color:#666666;">22.8 少用三目运算符</font>

<font style="color:#666666;">22.9 合理使用链式调用</font>

<font style="color:#666666;">22.10 分解大型类</font>

<font style="color:#666666;">22.11 用return退出多重循环</font>

<font style="color:#666666;">参考文献</font>



> 更新: 2019-09-01 11:00:32  
> 原文: <https://www.yuque.com/u3641/dxlfpu/zxhi5o>