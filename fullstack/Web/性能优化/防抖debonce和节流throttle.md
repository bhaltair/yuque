# 防抖debonce和节流throttle

# 防抖和节流


防抖和节流的作用都是防止函数多次调用。区别在于，假设一个用户一直触发这个函数，且每次触发函数的间隔小于wait，防抖的情况下只会调用一次，而节流的 情况会每隔一定时间（参数wait）调用函数。



防抖动是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行。

## debonce


```plain
/ func是用户传入需要防抖的函数
// wait是等待时间
const debounce = (func, wait = 50) => {
  // 缓存一个定时器id
  let timer = 0
  // 这里返回的函数是每次用户实际调用的防抖函数
  // 如果已经设定过定时器了就清空上一次的定时器
  // 开始一个新的定时器，延迟执行用户传入的方法
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
// 不难看出如果用户调用该函数的间隔小于wait的情况下，上一次的时间还未到就被清除了，并不会执行函
```



这个debonce函数不是立即执行的



## throttle


```plain
// 缺陷版本
const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}


const throttle = (func, limit) => {
  let lastFunc
  let lastRan
  return function() {
    const context = this
    const args = arguments
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}

// 可理解版本

    var throttle = function (fn, delay, atleast) {
    var timer = null;
    var previous = null;

    return function () {
        var now = +new Date();

        if ( !previous ) previous = now;
        if ( atleast && now - previous > atleast ) {
            fn();
            // 重置上一次开始时间为本次结束时间
            previous = now;
            clearTimeout(timer);
        } else {
            // 最后一次执行的方法
            clearTimeout(timer);
            timer = setTimeout(function() {
                fn();
                previous = null;
            }, delay);
        }
    }
};
```



## 应用


Throttling a button click so we can’t spam click  
Throttling an API call  
Throttling a mousemove/touchmove event handler  
Debouncing a resize event handler  
Debouncing a scroll event handler  
Debouncing a save function in an autosave feature



## 讲解


[https://keelii.com/2016/06/11/javascript-throttle/](https://keelii.com/2016/06/11/javascript-throttle/)





> 更新: 2019-02-14 11:42:51  
> 原文: <https://www.yuque.com/u3641/dxlfpu/bbv2es>