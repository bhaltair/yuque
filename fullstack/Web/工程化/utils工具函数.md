# utils 工具函数

## 获取查询字符串参数


```javascript
// Assuming "?post=1234&action=edit"

var urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.has('post')); // true
console.log(urlParams.get('action')); // "edit"
console.log(urlParams.getAll('action')); // ["edit"]
console.log(urlParams.toString()); // "?post=1234&action=edit"
console.log(urlParams.append('active', '1')); // "?post=1234&action=edit&active=1"
```



## 创建空对象
我们可以使用对象字面量{}来创建空对象，但这样创建的对象有隐式原型__proto__和一些对象方法比如常见的hasOwnProperty，下面这个方法可以创建一个纯对象。



```javascript

let dict = Object.create(null);

// dict.__proto__ === "undefined"
// No object properties exist until you add them
```





## 数组清洗


洗掉数组中一些无用的值，如0, undefined, null, false等



```javascript
myArray
    .map(item => {
        // ...
    })
    // Get rid of bad values
    .filter(Boolean);
```



## 键盘弹出挡表单


```javascript
window.addEventListener('resize', function () {
if (
  document.activeElement.tagName === 'INPUT' ||
  document.activeElement.tagName === 'TEXTAREA' ||
  document.activeElement.getAttribute('contenteditable') == 'true'
) {
  window.setTimeout(function () {
    if ('scrollIntoView' in document.activeElement) {
      document.activeElement.scrollIntoView();
    } else {
      // @ts-ignore
      document.activeElement.scrollIntoViewIfNeeded();
    }
  }, 0);
}
})
```



## 解决 iOS iPhone 下键盘收起[页面不收起]导致点击事件失效问题


1 scrollIntoView方案



<font style="color:#F5222D;">在 IOS 11 上某个版本的时候，用 scrollIntoView会遇到页面卡住滑不动的情况，并且只在IOS11上的某个小版本出现</font>



```javascript
    ;(/iphone|ipod|ipad/i.test(navigator.appVersion)) && document.addEventListener('blur', (e) => {['input', 'textarea'].includes(e.target.localName) && document.body.scrollIntoView(false) }, true)
```



2 document.body方案



```javascript
// 自行实现是否是 iOS 的判断，一般把 ipad,ipod, iphone 跟 navigagor.userAgent indexOf 一下就行
if (this.userAgent.iOS) {
  document.addEventListener('blur', e => {
    ['input', 'textarea'].indexOf(e.target.localName) ！== -1 && (document.body.scrollTop = document.body.scrollTop)
  }, true)
}
```





> 更新: 2019-11-06 16:41:35  
> 原文: <https://www.yuque.com/u3641/dxlfpu/kr4s9k>