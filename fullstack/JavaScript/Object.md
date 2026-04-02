# Object

## 存在值检查

```plain
"key" in object
```

## 复制对象

循环赋值法子

```plain
let user = {
  name: "John",
  age: 30
};
let clone = {}; // 新的空对象
// 复制所有的属性值
for (let key in user) {
  clone[key] = user[key];
}
```

遇到value是对象的时候 懵逼了 复制的还是对象的地址 

## 垃圾回收

引擎内部的垃圾回收是自动的

JavaScript 中主要的内存管理概念是可达性。

## Symbol

对象的属性键只能是 String 类型或者 Symbol 类型。不是 Number，也不是 Boolean，只有 String 或 Symbol 这两种类型。

Symbol 使用 Symbol() 创建的，调用带有一个可选的描述。

重要属性

* Symbolic 属性不参与 for..in 循环。
* Object.assign 同时复制字符串和符号属性：
* Symbol 总是不同的，即使它们有相同的名称【描述符】。

```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false
```

* 如果我们要在 object 字面量中使用 Symbol，则需要方括号。

```javascript
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // 不仅仅是 "id：123"
};
```

Symbol 有两个主要的使用场景：

1. “隐藏” 对象属性 Symbol 属性不出现在 for..in中，因此不会无心列出。另外，它不会被直接访问

## 对象方法与this

* 箭头函数没有自己的 “this” 在箭头函数内部访问的都是来自外部的 this 值。
* this 是在运行时求值的。它可以是任何值。->  \[ 在 JavaScript 中，`this` 是『自由』的，它的值是在调用时进行求值的，它的值并不取决于方法声明的位置，而是（取决）于在『点之前』的是什么对象。]
* 『复杂』的方法调用可能会失去 this

```plain
(user.name == "John" ? user.hi : user.bye)(); // 错误！
```

* ss

## 对象原始值转换

**为了进行转换，JavaScript 尝试查找并调用三个对象方法：**

1. 调用 `obj[Symbol.toPrimitive](hint)` 如果这个方法存在的话，
2. 否则如果暗示是`"string"`
   * 尝试 `obj.toString()` 和 `obj.valueOf()`，无论哪个存在。
3. 否则，如果暗示`"number"`或者`"default"`
   * 尝试 `obj.valueOf()` 和 `obj.toString()`，无论哪个存在。

用内置符号命名转换方法

```javascript
obj[Symbol.toPrimitive] = function(hint) {
  // 返回一个原始值
  // hint = "string"，"number" 和 "default" 中的一个
}
```

```javascript
let user = {
  name: "John",
  money: 1000,
  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};
// 转换演示：
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
```

## 构造函数和操作符 new 

构造函数

* 构造函数的主要目的 — 实现可重用的对象创建代码
* 任何函数都可以用作构造函数。即：任何函数都可以运行 new，它会执行上面的算法。
* “首字母大写”是一个共同的约定，以明确表示一个函数将被使用 new 运行
* 通常，构造函数没有 return 语句
* new.target 在构造函数内部判断函数调用是否是用new 操作符 ，某些情况下 我们可以这样做

```javascript
function User(name) {
  if (!new.target) { // 如果你没有运行 new
    return new User(name); // ...会为你添加 new
  }

  this.name = name;
}

let john = User("John"); // 重新调用 new User
alert(john.name); // John
```

new User所做的事情

```javascript
function User(name) {
  // this = {};（隐式创建）
  // 添加属性到 this
  this.name = name;
  this.isAdmin = false;
  // return this;（隐式返回）
}
```

构造函数的return

* 如果 `return` 对象，则返回它，而不是 `this`。
* 如果 `return` 一个原函数，则忽略。


> 更新: 2019-08-05 15:13:23  
> 原文: <https://www.yuque.com/u3641/dxlfpu/nq298x>