# Smooth header animation

[https://github.com/Gapur/react-native-scrollable-animated-header](https://github.com/Gapur/react-native-scrollable-animated-header)



![1675076005352-4df763a8-9cc4-434f-ab11-5ab8ce4f93eb.png](./img/hqVvfd8Msrg7Scl5/1675076005352-4df763a8-9cc4-434f-ab11-5ab8ce4f93eb-855803.png)





[https://medium.com/the-pandadoc-tech-blog/smooth-header-animation-when-scrolling-the-page-in-react-native-in-5-minutes-bd9108dd073c](https://medium.com/the-pandadoc-tech-blog/smooth-header-animation-when-scrolling-the-page-in-react-native-in-5-minutes-bd9108dd073c)



![1675076087675-8699773d-ed81-4364-85ed-30f35310e641.png](./img/hqVvfd8Msrg7Scl5/1675076087675-8699773d-ed81-4364-85ed-30f35310e641-064779.png)



[https://blog.jscrambler.com/how-to-animate-a-header-view-on-scroll-with-react-native-animated](https://blog.jscrambler.com/how-to-animate-a-header-view-on-scroll-with-react-native-animated)



[https://www.npmjs.com/package/@kanelloc/react-native-animated-header-scroll-view](https://www.npmjs.com/package/@kanelloc/react-native-animated-header-scroll-view)

# 颜色渐变
```javascript
const Max_Header_Height = 200;
const Min_Header_Height = 70;
const Scroll_Distance = Max_Header_Height - Min_Header_Height

const animateHeaderBackgroundColor = animHeaderValue.interpolate({
  inputRange: [0, Header_Max_Height - Header_Min_Height],
  outputRange: ['blue', 'red'],
  extrapolate: 'clamp'
})
```

# 高度渐变
```javascript
const Max_Header_Height = 200;
const Min_Header_Height = 70;
const Scroll_Distance = Max_Header_Height - Min_Header_Height

const animatedHeaderHeight =  animatedValue.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height , Header_Min_Height],
    extrapolate: 'clamp'
  })
```



> 更新: 2023-03-24 14:23:16  
> 原文: <https://www.yuque.com/u3641/dxlfpu/gdek2atyg6sf4gpz>