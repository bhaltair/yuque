# React Native 中文文档

# 组件

## Props

### 图片属性

### 布局属性

position

width

zIndex

padding 单值

margin

overflow

maxHeight/Width

minHeight/Width

display

borderWidth

flex

flexDirection

flexGrow

flexShrink

flexBasis

flexWrap

### 阴影属性

shadowColor

### Text属性

color

fontSize

fontWeight

lineHeight

textAlign

fontFamily

letterSpacing

### View属性

border相关

opacity

## 核心组件

### TextInput

### Modal

### ScrollView

记住 ScrollView 必须有一个确定的高度才能正常工作

ScrollView和FlatList应该如何选择？

FlatList会惰性渲染子元素，只在它们将要出现在屏幕中时开始渲染。

### StatusBar

控制显示或隐藏

控制dark或light

### FlatList

### SectionList

###

### Switch

### View

### Text

### Image

### VirtualizedList

FlatList和SectionList的底层实现

### TouchableOpacity

### TouchableHighlight

封装带触摸的元素

# API

## Core

### Vibration

### StyleSheet

### Platform

### Keyboard

### Alert

### Share

### Transforms

### Appearance

```javascript
const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
  // 用户开启了暗色模式
}
```

### Dimensions

获取屏幕宽高

## Hooks

### useColorScheme

```javascript
import React from 'react';
import { Text, StyleSheet, useColorScheme, View } from 'react-native';

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text>useColorScheme(): {colorScheme}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default App;
```

# 文档

## 网络

可以使用axios

React Native 还支持WebSocket

## 原生模块

## JS 环境

<font style="color:rgb(28, 30, 33);">ES6</font>

* [箭头函数 Arrow functions](http://babeljs.io/docs/learn-es2015/#arrows)<font style="color:rgb(28, 30, 33);">:</font>\<C onPress={() => this.setState({pressed: true})} />
* [块级作用域 Block scoping](https://babeljs.io/docs/learn-es2015/#let-const)<font style="color:rgb(28, 30, 33);">:</font>let greeting = 'hi';
* [数组的扩展运算 Call spread](http://babeljs.io/docs/learn-es2015/#default-rest-spread)<font style="color:rgb(28, 30, 33);">:</font>Math.max(...array);
* [类 Classes](http://babeljs.io/docs/learn-es2015/#classes)<font style="color:rgb(28, 30, 33);">:</font>class C extends React.Component { render() { return <View />; } }
* [常量 Constants](https://babeljs.io/docs/learn-es2015/#let-const)<font style="color:rgb(28, 30, 33);">:</font>const answer = 42;
* [解构 Destructuring](http://babeljs.io/docs/learn-es2015/#destructuring)<font style="color:rgb(28, 30, 33);">:</font>var {isActive, style} = this.props;
* [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)<font style="color:rgb(28, 30, 33);">:</font>for (var num of \[1, 2, 3]) {}
* [模块 Modules](http://babeljs.io/docs/learn-es2015/#modules)<font style="color:rgb(28, 30, 33);">:</font>import React, { Component } from 'react';
* [动态属性键 Computed Properties](http://babeljs.io/docs/learn-es2015/#enhanced-object-literals)<font style="color:rgb(28, 30, 33);">:</font>var key = 'abc'; var obj = {\[key]: 10};
* <font style="color:rgb(28, 30, 33);">对象方法的简写 Object Consise Method:</font>var obj = { method() { return 10; } };
* [对象属性的简写 Object Short Notation](http://babeljs.io/docs/learn-es2015/#enhanced-object-literals)<font style="color:rgb(28, 30, 33);">:</font>var name = 'vjeux'; var obj = { name };
* [参数的扩展运算 Rest Params](https://github.com/sebmarkbage/ecmascript-rest-spread)<font style="color:rgb(28, 30, 33);">:</font>function(type, ...args) { }
* [字符串模板 Template Literals](http://babeljs.io/docs/learn-es2015/#template-strings)<font style="color:rgb(28, 30, 33);">:</font>var who = 'world'; var str = `Hello ${who}`;

<font style="color:rgb(28, 30, 33);">ES8</font>

* [参数列表末尾允许放置逗号 Function Trailing Comma](https://github.com/jeffmo/es-trailing-function-commas)<font style="color:rgb(28, 30, 33);">:</font>function f(a, b, c,) { }
* [异步函数 Async Functions](https://github.com/tc39/ecmascript-asyncawait)<font style="color:rgb(28, 30, 33);">:</font>async function doStuffAsync() { const foo = await doOtherStuffAsync(); };

<font style="color:rgb(28, 30, 33);">Stage 3</font>

* [对象的扩展运算 Object Spread](https://github.com/tc39/proposal-object-rest-spread)<font style="color:rgb(28, 30, 33);">:</font>var extended = { ...obj, a: 10 };
* [Optional Chaining](https://github.com/tc39/proposal-optional-chaining)<font style="color:rgb(28, 30, 33);">:</font>var name = obj.user?.name;

### Polyfills

<font style="color:rgb(28, 30, 33);">浏览器</font>

* [console.{log, warn, error, info, trace, table, group, groupEnd}](https://developer.chrome.com/devtools/docs/console-api)
* [CommonJS require](https://nodejs.org/docs/latest/api/modules.html)
* [XMLHttpRequest, fetch](https://reactnative.cn/docs/network#content)
* [{set, clear}{Timeout, Interval, Immediate}, {request, cancel}AnimationFrame](https://reactnative.cn/docs/timers#content)

<font style="color:rgb(28, 30, 33);">ES6</font>

* [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
* <font style="color:rgb(28, 30, 33);">String.prototype.{</font>[startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)<font style="color:rgb(28, 30, 33);">,</font>[endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)<font style="color:rgb(28, 30, 33);">,</font>[repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)<font style="color:rgb(28, 30, 33);">,</font>[includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)<font style="color:rgb(28, 30, 33);">}</font>
* [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
* <font style="color:rgb(28, 30, 33);">Array.prototype.{</font>[find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)<font style="color:rgb(28, 30, 33);">,</font>[findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)<font style="color:rgb(28, 30, 33);">}</font>

<font style="color:rgb(28, 30, 33);">ES7</font>

* <font style="color:rgb(28, 30, 33);">Array.prototype.{</font>[includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)<font style="color:rgb(28, 30, 33);">}</font>

<font style="color:rgb(28, 30, 33);">ES8</font>

* <font style="color:rgb(28, 30, 33);">Object.{</font>[entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)<font style="color:rgb(28, 30, 33);">,</font>[values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)<font style="color:rgb(28, 30, 33);">}</font>

<font style="color:rgb(28, 30, 33);"></font>

## 交互

动画

导航

手势

## 设计

### 样式

### 宽高

React Native 中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。

固定宽高

Flex 宽高

百分比宽高

### Flexbox

<https://reactnative.cn/docs/flexbox>


> 更新: 2021-05-20 10:48:45  
> 原文: <https://www.yuque.com/u3641/dxlfpu/ts29b3>