# SFC

# 创建组件的形式：


```javascript
ES5写法：React.createClass
ES6写法：React.Component 官方推荐
无状态的函数写法，又称为纯组件SFC
```



# <font style="color:#F5222D;">无状态功能组件</font>
<font style="color:#F5222D;">  
</font>无状态的函数创建的组件是无状态组件，它是一种只负责展示的纯组件



优势：避免无意义的状态检查，提高性能



> 您可能以前将这些称为“无状态组件”。 我们现在介绍的这些组件将具有 React state(状态) 的能力，所以我们更喜欢称他为 “函数式组件”。
>



在 SFC 中添加一个接口定义:



```javascript
import * as React from “react”
interface WelcomeProps {
 name: string,
}
const Welcome: React.SFC<WelcomeProps> = (props) => {
 return <h1>Hello, {props.name}</h1>;
}
```



为 props 设置一些默认值



```javascript
import * as React from “react”
interface WelcomeProps {
 name?: string, // Change the required prop to an optional prop.
}
const Welcome: React.SFC<WelcomeProps> = (props) => {
 return <h1>Hello, {props.name}</h1>;
}
Welcome.defaultProps = {
 name: “Guest User”, // This value is adopted when name prop is omitted.
}
```



React.SFC 为我们定义了一些通用的 props 类型



> 更新: 2020-08-21 16:22:32  
> 原文: <https://www.yuque.com/u3641/dxlfpu/whqtf8>