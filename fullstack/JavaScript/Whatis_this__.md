# What is "this" ?

this的字面含义就是“当前对象”。

1. 全局环境中，`this === window`
2. 作为普通函数调用，非严格模式下：`this = ` window；严格模式下：this =` undefined`，在setTimeout和setInterval里是全局作用域，不受严格模式影响，所以此时`this === window`。
3. 作为对象函数调用，this === 当前对象
4. 作为构造函数。this === new出来的新对象
5.


> 更新: 2019-09-03 22:05:47  
> 原文: <https://www.yuque.com/u3641/dxlfpu/mxq9am>