# React FAQ

# 传递函数给组件
class 属性（第三阶段提案）



```javascript
class Foo extends Component {
  // Note: this syntax is experimental and not standardized yet.
  handleClick = () => {
    console.log('Click happened');
  }
  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
```





# 为什么 setState 给了我一个错误的值？


setState是异步的



如何解决？

给 setState 传递一个函数，而不是一个对象，就可以确保每次的调用都是使用最新



```javascript
incrementCount() {
  this.setState((state) => {
    // 重要：在更新的时候读取 `state`，而不是 `this.state`。
    return {count: state.count + 1}
  });
}
```





# setState 什么时候是异步的？


目前，在事件处理函数内部的 setState 是异步的。



例如，如果 Parent 和 Child 在同一个 click 事件中都调用了 setState ，这样就可以确保 Child 不会被重新渲染两次。



# 什么是 Virtual DOM？


虚拟的DOM，使用React-Dom库和真实的DOM同步，这一过程叫做协调。



> 更新: 2019-09-26 09:39:24  
> 原文: <https://www.yuque.com/u3641/dxlfpu/qn1wx5>