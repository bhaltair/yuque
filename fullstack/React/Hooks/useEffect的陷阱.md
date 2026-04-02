# useEffect 的陷阱

[https://zhuanlan.zhihu.com/p/84697185](https://zhuanlan.zhihu.com/p/84697185)

[https://zhuanlan.zhihu.com/p/366145115](https://zhuanlan.zhihu.com/p/366145115)

[https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)

[https://juejin.cn/post/7046358484610187277](https://juejin.cn/post/7046358484610187277)



# 我应该把函数当做effect的依赖吗？
+ 一般建议把不依赖props和state的函数提到你的组件外面，并且把那些仅被effect使用的函数放到effect里面。
+ 如果这样做了以后，你的effect还是需要用到组件内的函数（包括通过props传进来的函数），可以在定义它们的地方用useCallback包一层。为什么要这样做呢？因为这些函数可以访问到props和state，因此它们会参与到数据流中。



[https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies](https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies)



```plain
function Example({ someProp }) {
  useEffect(() => {
    function doSomething() {
      console.log(someProp);
    }

    doSomething();
  }, [someProp]); // ✅ OK (our effect only uses `someProp`)
}
```



> 更新: 2023-07-17 19:06:10  
> 原文: <https://www.yuque.com/u3641/dxlfpu/mt7eh3>