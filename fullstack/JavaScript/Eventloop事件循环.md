# Event loop 事件循环

JS 是门**非阻塞 单线程**语言



JS 在执行的过程中会产生**执行环境**，这些执行环境会被顺序的加入到**执行栈**中。



如果遇到异步的代码，会被挂起并加入到 任务Task队列中。



一旦执行栈为空，Event Loop 就会从 Task 队列中拿出需要执行的代码并放入执行栈中执行，所以本质上来说 JS 中的异步还是同步行为。







> 微任务包括 process.nextTick ，promise ，Object.observe ，MutationObserver
>
> 宏任务包括 script ， setTimeout ，setInterval ，setImmediate ，I/O ，UI rendering
>



## 正确的一次 Event loop 


所以正确的一次 Event loop 顺序是这样的

   

   执行同步代码，这属于宏任务

   执行栈为空，查询是否有微任务需要执行

   执行所有微任务

   必要的话渲染 UI



宏任务 -> 微任务 -> 宏任务



   然后开始下一轮 Event loop，执行宏任务中的异步代码



> 更新: 2020-03-13 17:36:36  
> 原文: <https://www.yuque.com/u3641/dxlfpu/xdie4e>