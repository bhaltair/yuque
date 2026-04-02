# Promise async await

# Promise

## 未处理的 Error

在浏览器中，我们可以使用 `unhandledrejection` 事件捕获它：

```plain
window.addEventListener('unhandledrejection', function(event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});
new Promise(function() {
  throw new Error("Whoops!");
}); // no catch to handle the error
```

## “error-first callback” 风格

```javascript
loadScript('/my/script.js', function(error, script) {
  if (error) {
    // handle error
  } else {
    // 成功加载脚本
  }
});

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}
```

`promise` 对象有内部属性：

* `state` —— 最初是 “pending”，然后被改为 “fulfilled” 或 “rejected”，
* `result` —— 一个任意值，最初是 `undefined`。

## reject/throw a error

> 从技术上来说，我们可以使用任何类型的参数来调用 reject（就像 resolve）。但建议在 reject（或从它们中继承）中使用 Error 对象。 错误原因就会显示出来。

## Promise chain

因为 `promise.then` 返回了一个 promise，所以我们可以用它调用下一个 `.then`。

当控制函数返回一个值时，它会变成当前 promise 的 result，所以会用它调用下一个 `.then`

```javascript
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});
```

## 返回thenable对象

<font style="color:#333333;">  
</font>.then 可以返回任意的 “thenable” 对象，并且会被当做一个 promise 来对待

```javascript
class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve); // function() { native code }
    // 1 秒后用 this.num*2 来 resolve
    setTimeout(() => resolve(this.num * 2), 1000); // (**)
  }
}

new Promise(resolve => resolve(1))
  .then(result => {
    return new Thenable(result); // (*)
  })
  .then(alert); // 1000 ms 后显示 2
```

then方法中返回 promises 允许我们建立异步动作链。

## 错误处理

当一个 promise reject 时，代码控制流程跳到链中最近的 rejection 处理程序。这在实践中非常方便。

### 隐式catch

```javascript
new Promise(function(resolve, reject) {
  throw new Error("Whoops!");
}).catch(alert); // Error: Whoops!

=== 等于下面的
  
new Promise(function(resolve, reject) {
  reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!
```

### re-throw

如果我们在 .catch 里面 throw，那么控制流程将转到<font style="color:#F5222D;">下一个最接近的错误处理程序</font>。

如果我们处理错误并正常结束，那么它将继续执行最接近的 .then 成功处理程序。

## Promise.resolve

根据给定的 `value` 值返回 resolved promise。

等价于：

```plain
let promise = new Promise(resolve => resolve(value));
```

如何接口的一致性 可以使用loadCached(url).then这样子

确保接口返回都返回Promise

```javascript
function loadCached(url) {
  let cache = loadCached.cache || (loadCached.cache = new Map());

  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
  }

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache[url] = text;
      return text;
    });
}
```

## Promise.all

<font style="color:#333333;">下面的 </font>`Promise.all`<font style="color:#333333;"> 在 3 秒之后被处理，然后它的结果就是一个 </font>`[1, 2, 3]`<font style="color:#333333;"> 数组</font>

<font style="color:#333333;"></font>

```javascript
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert);
```

如果任何 promise 为 rejected，Promise.all 就会立即以 error reject。

**如何避免fetch请求中一个错误导致Promise.all失败**

根据 promise 的工作原理，只要 .then/catch 处理器返回值（无论是 error 对象或其他内容），执行流程就会“正常”进行

```javascript
Promise.all(
  urls.map(url => fetch(url).catch(err => err))
)
```

# await-to-js - <font style="color:#F5222D;">优雅的try-catch</font>

await-to-js

<https://www.npmjs.com/package/await-to-js>

```javascript
import to from 'await-to-js';
// If you use CommonJS (i.e NodeJS environment), it should be:
// const to = require('await-to-js').default;
 
async function asyncTaskWithCb(cb) {
     let err, user, savedTask, notification;
 
     [ err, user ] = await to(UserModel.findById(1));
     if(!user) return cb('No user found');
 
     [ err, savedTask ] = await to(TaskModel({userId: user.id, name: 'Demo Task'}));
     if(err) return cb('Error occurred while saving task');
 
    if(user.notificationsEnabled) {
       [ err ] = await to(NotificationService.sendNotification(user.id, 'Task Created'));
       if(err) return cb('Error while sending notification');
    }
 
    if(savedTask.assignedUser.id !== user.id) {
       [ err, notification ] = await to(NotificationService.sendNotification(savedTask.assignedUser.id, 'Task was created for you'));
       if(err) return cb('Error while sending notification');
    }
 
    cb(null, savedTask);
}
```


> 更新: 2019-09-12 14:23:36  
> 原文: <https://www.yuque.com/u3641/dxlfpu/ikzs1e>