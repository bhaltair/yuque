# web components

Web Components 规范已经完成并通过，但未被所有浏览器原生实现。



目前 <font style="color:#F5222D;">Safari 10.1+、Chrome 54+ 和 Firefox 63+</font> 原生支持 Web Components。



相比之下，Vue 组件不需要任何 polyfill，并且在所有支持的浏览器 (IE9 及更高版本) 之下表现一致。必要时，Vue 组件也可以包装于原生自定义元素之内。





## HTML Imports
这块存在争议，Mozilla认为将来应该用更合适的方式



## close


Shadow DOM会在自定义标签解析时，加载到普通的DOM上。内部可以通过Element.attachShadow()来获取shadow root。它有一个mode属性，值可以是open或者closed,表示能否在外部获取Shadow DOM对象，一般而言应当为closed，内部实现不应该对外可见。



## play


[https://stackblitz.com/edit/4wm6j6?file=custom-element.js](https://stackblitz.com/edit/4wm6j6?file=custom-element.js)



## 参考


w3c web components规范

[https://www.w3.org/wiki/WebComponents/](https://www.w3.org/wiki/WebComponents/)



https://developer.mozilla.org/zh-CN/docs/Web/Web_Components



https://www.webcomponents.org/



http://taobaofed.org/blog/2018/10/31/a-tag/



> 更新: 2019-05-31 17:56:50  
> 原文: <https://www.yuque.com/u3641/dxlfpu/cwheb9>