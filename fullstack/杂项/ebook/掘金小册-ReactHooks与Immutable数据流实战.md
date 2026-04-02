# 掘金小册 - React Hooks 与 Immutable 数据流实战

[https://juejin.cn/book/6844733816460804104](https://juejin.cn/book/6844733816460804104)



<font style="color:rgb(51, 51, 51);">读完小册你会有什么收获:</font>

1. <font style="color:rgb(51, 51, 51);">熟练使用React Hooks进行业务开发，理解哪些场景产生</font><font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">闭包陷阱</font><font style="color:rgb(51, 51, 51);">，如何避免掉坑。</font>
2. <font style="color:rgb(51, 51, 51);">手写近</font><font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">6000行代码</font><font style="color:rgb(51, 51, 51);">，封装</font><font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">13</font><font style="color:rgb(51, 51, 51);">个基础UI组件、</font><font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">12</font><font style="color:rgb(51, 51, 51);">个业务组件，让你知道关于 React + Redux 业内公认的</font>**<font style="color:rgb(51, 51, 51);">最佳实践</font>**<font style="color:rgb(51, 51, 51);">到底是什么样子。</font>
3. <font style="color:rgb(51, 51, 51);">封装常用的移动端组件，实现常见的需求，如</font><font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">封装滚动组件</font><font style="color:rgb(51, 51, 51);">、</font><font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">实现图片懒加载</font><font style="color:rgb(51, 51, 51);">、</font><font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">实现上拉/下拉刷新</font><font style="color:rgb(51, 51, 51);">的功能、</font><font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">实现防抖</font><font style="color:rgb(51, 51, 51);">功能、</font><font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">实现组件代码分割</font><font style="color:rgb(51, 51, 51);">(CodeSpliting)等。</font>
4. <font style="color:rgb(51, 51, 51);">拥有实现前端复杂交互的实际项目经验，提升自己的</font>**<font style="color:rgb(51, 51, 51);">内功</font>**<font style="color:rgb(51, 51, 51);">，比如开发播放器内核就是其中一个很大的挑战。</font>
5. <font style="color:rgb(51, 51, 51);">掌握CSS中的诸多技巧，提升自己的CSS能力，无论布局还是动画，都有相当多的实践和探索，</font>**<font style="color:rgb(51, 51, 51);">未使用任何UI框架</font>**<font style="color:rgb(51, 51, 51);">，样式代码独立实现。</font>
6. <font style="color:rgb(51, 51, 51);">彻底理解</font>**<font style="color:rgb(51, 51, 51);">redux原理</font>**<font style="color:rgb(51, 51, 51);">，并能够独立开发redux的中间件。</font>



![1619765623400-2dc3835b-bd96-4fa9-af1e-98fa7c1ce16f.png](./img/0oILrWHAgiz5bjL2/1619765623400-2dc3835b-bd96-4fa9-af1e-98fa7c1ce16f-124182.png)



**<font style="color:rgb(51, 51, 51);">技术栈</font>**<font style="color:rgb(51, 51, 51);">:</font>

+ <font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">react v16.8全家桶(react，react-router)</font><font style="color:rgb(51, 51, 51);">: 用于构建用户界面的 MVVM 框架</font>
+ <font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">redux</font><font style="color:rgb(51, 51, 51);">: 著名JavaScript状态管理容器</font>
+ <font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">redux-thunk</font><font style="color:rgb(51, 51, 51);">: 处理异步逻辑的redux中间件</font>
+ <font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">immutable</font><font style="color:rgb(51, 51, 51);">: Facebook历时三年开发出的进行持久性数据结构处理的库</font>
+ <font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">react-lazyload</font><font style="color:rgb(51, 51, 51);">: react懒加载库better-scroll: 提升移动端滑动体验的知名库</font>
+ <font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">styled-components</font><font style="color:rgb(51, 51, 51);">: 处理样式，体现css in js的前端工程化神器</font>
+ <font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">axios</font><font style="color:rgb(51, 51, 51);">: 用来请求后端api的数据。</font>



> 更新: 2021-04-30 14:54:07  
> 原文: <https://www.yuque.com/u3641/dxlfpu/nkygmm>