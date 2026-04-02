# React Patterns 设计模式

[https://reactpatterns.com/#destructuring-props](https://reactpatterns.com/#destructuring-props)



chinese

[https://reactpatterns.cn/](https://reactpatterns.cn/)



## Render prop
```javascript
const Width = ({ children }) => children(500);

<Width>
  {width => (width > 600 ? <div>min-width requirement met!</div> : null)}
</Width>
```



## 容器组件 (Container component)
「容器用来获取数据然后渲染到子组件上



## 高阶组件 (Higher-order component)




> 更新: 2023-07-17 19:03:03  
> 原文: <https://www.yuque.com/u3641/dxlfpu/cx6mca>