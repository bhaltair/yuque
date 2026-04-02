# 奇舞团-常用函数的JS实现

## throttle


```javascript
function throttle(fn, threshhold) {
    var last, timerId;
    threshhold || (threshhold = 250);

    return function() {
      var now = Date.now();
      if(last && now - last < threshhold) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
          fn.apply(this, arguments);
        }, threshhold)
      } else {
        last = now;
        fn.apply(this, arguments);
      }
    }
  }
```



## debonce


去抖 连续触发 



```javascript
function debounce(fn, interval) {
    var timerId = null;

    return function() {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn.apply(this, arguments)
      }, interval)
    }
  }
```



## call apply bind
主要是借助对象的方法调用可以指定this

### 简单版本
```javascript
var foo = {
    value: 1,
    bar: function() {
        console.log(this.value)
    }
}
foo.bar() // 1
```

### 进阶
```javascript
// 修改 prototype 版本
Function.prototype.call2 = function(content = window, ...args) {
    content.fn = this;
    let result = content.fn(...args);
    delect content.fn;
    return result;
}

// 函数版本
function call2 (context = window, fn) {
  context.fn = fn;
  let args = [...arguments].slice(2);
  let result = context.fn(...args);
  delete context.fn;
  return result;
}

// apply 第2个参数是数组
Function.prototype.apply2 = function(content = window, args) {
    content.fn = this;
    let result = content.fn(...args);
    delect content.fn;
    return result;
}
```



```javascript
// bind
Funtion.prototype.bind = function(obj) {
    if(type of this !== 'function') {
      return;
    }

    var _self = this;
    var args = [].slice.call(arguments, 1);
    return function() {
      return _self.apply(obj, args.concat([].slice.call(arguments)))
    }
  }
```



## 斐波那契


```javascript
// R1
let fib = (function() {
  let memory = []
  return function(n) {
      if(memory[n] !== undefined) {
        return memory[n]
    }
    return memory[n] = (n === 0 || n === 1) ? n : fibonacci(n-1) + fibonacci(n-2)
  }
})()

// R2
function fib(n) {
  if(n === 0 || n === 1) return n;
  return fib(n - 2) + fib(n - 1);
}
```



## 继承


```javascript
function Dog(color) {

  Animal.apply(this, arguments);

  this.name = 'dog';

}

/* 注意下面两行 */

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;
```



## 柯里化


```javascript
function currying(fn) {
  const argArr = [];
  let closure = function(...args) {
    if(args.length > 0) {
      argArr = [...argArr, ...args];
      return closure;
    }
    return fn(...argArr);
  }
  return closure;
}
```



## new 


```javascript
function newOps (ctor) {
      if(typeof ctor !== 'function') {
        throw new Error('the first param must be a function');
      }

      const new0bj = Object.create(ctor.prototype);
      const args = [].slice.call(arguments, 1);

      const ctorReturnResult = ctor.apply(newObj, args);

      if((typeof ctorReturnResult === 'object' && typeof ctorReturnResult !== null) || typeof ctorReturnResult === 'function') {
        return ctorReturnResult;
      }
      return newObj;
    }
```





> 更新: 2020-08-24 10:35:06  
> 原文: <https://www.yuque.com/u3641/dxlfpu/xcms3m>