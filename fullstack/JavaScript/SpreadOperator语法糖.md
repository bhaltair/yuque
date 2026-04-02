# Spread Operator 语法糖

**展开语法和剩余语法是相反的，展开语法用来属性拷贝、数组复制，剩余语法用来做剩余参数，可以用来解构数组和对象。**



```javascript
function add(a, b){
  return a + b
}

const args = [11, 12]
add(...args)   //实际上是这个 add.apply(undefined, args);
 
```





## 把 arguments 或 NodeList 转成数组
arguments是类数组



```plain
var myFn = function(...args) {
  console.log(args.forEach) //ƒ forEach() { [native code] }
  console.log(arguments.forEach) //undefined
}
myFn()
```

## 合并数组


```plain
arr1.push(...arr2)
```





## 快速赋值


构造字面量对象时,进行克隆或者属性拷贝（ECMAScript 2018规范新增特性）：





```plain
let objClone = { ...obj };

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
```



## 剩余参数 rest parameter


```javascript
```
    function max() {
      var values = Array.prototype.slice.call(arguments, 0);
      // ...
    }
    max(1,2,3);
    
    // replacement
    function max(...value) {
      // ...
    }
    max(1,2,3);
```
```





> 更新: 2020-08-24 10:13:13  
> 原文: <https://www.yuque.com/u3641/dxlfpu/sunlaq>