# Vue 原理

## 一个框架的学习方法
React 的重点概念有 JSX，虚拟 DOM，Diff 算法，setState 机制，这些重点概念自己是否能有他们的实现思路，甚至在没有看源码的情况下是否能自己根据思路实现出来。

## 
## 数据劫持实现双向绑定


Vue 内部使用了 Object.defineProperty() 来实现双向绑定，通过这个函数可以监听到 set 和 get 的事件



Object.defineProperty 虽然已经能够实现双向绑定了，但是他还是有缺陷的。

   1 只能对属性进行数据劫持，所以需要深度遍历整个对象

   2 对于数组不能监听到数据的变化





> Vue如何实现双向绑定的？ 很多候选人老老实实答了object.defineproperty如何如何操作,然后就没有了,其实你可以在回答完之后加上一嘴「Vue 3.0则选择了更好用的Proxy来替代object.defineproperty」或者「除了object.defineproperty这种数据劫持的方式，观察者模式和脏检查都可以实现双向绑定」，面试官大概率会问「Proxy好在哪？」或者「聊聊脏检查」等等，这样下一个问题就会依然在你的可控范围内
>



## virtual DOM
Virtual Dom 算法的实现也就是以下三步



+ 通过 JS 来模拟创建 DOM 对象
+ 判断两个对象的差异
+ 渲染差异





## 读源码
[Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)  
[imooc Vue.js 源码全方位深入解析](http://coding.imooc.com/class/228.html)  
[逐行级别的源码分析](http://hcysun.me/vue-design/)



> 更新: 2019-08-28 22:05:55  
> 原文: <https://www.yuque.com/u3641/dxlfpu/ox8oi2>