# RN Animated 动画

react native 一共提供了两种动画，一种是可以绘制自定义动画的 Animated 库；另一种是负责布局动画的LayoutAnimation。Animated 旨在以声明的形式来定义动画，今天主要介绍 Animated。



<font style="color:rgb(37, 41, 51);">创建一个</font><font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">Animated</font><font style="color:rgb(37, 41, 51);">动画分三步：</font>

1. <font style="color:rgb(37, 41, 51);">创建一个</font><font style="color:rgb(37, 41, 51);"> </font><font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">Animated.Value</font><font style="color:rgb(37, 41, 51);">。</font>
2. <font style="color:rgb(37, 41, 51);">将创建的</font><font style="color:rgb(37, 41, 51);"> </font><font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">Animated.Value</font><font style="color:rgb(37, 41, 51);">连接到</font>**<font style="color:rgb(37, 41, 51);">动画组件</font>**<font style="color:rgb(37, 41, 51);">的一个或多个属性。</font>
3. <font style="color:rgb(37, 41, 51);">使用 </font><font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">Animated.timing</font><font style="color:rgb(37, 41, 51);"> 等方法更改 </font><font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">Animated.Value</font><font style="color:rgb(37, 41, 51);">。</font>

<font style="color:rgb(37, 41, 51);"></font>

# <font style="color:rgb(37, 41, 51);">参考</font>
[https://juejin.cn/post/7100068545953792030](https://juejin.cn/post/7100068545953792030)

[https://reactnative.cn/docs/animations](https://reactnative.cn/docs/animations)

[https://reactnative.cn/docs/animated](https://reactnative.cn/docs/animated)



# Doc
Animated 提供了三种动画类型：

+ [Animated.decay()](https://link.juejin.cn?target=https%3A%2F%2Freactnative.cn%2Fdocs%2Fanimated%23decay)以指定的初始速度开始变化，然后变化速度越来越慢直至停下。
+ [Animated.spring()](https://link.juejin.cn?target=https%3A%2F%2Freactnative.cn%2Fdocs%2Fanimated%23spring)提供了一个基础的弹簧物理模型.
+ [Animated.timing()](https://link.juejin.cn?target=https%3A%2F%2Freactnative.cn%2Fdocs%2Fanimated%23timing)使用[easing 函数](https://link.juejin.cn?target=https%3A%2F%2Freactnative.cn%2Fdocs%2Feasing)让数值随时间动起来。

  


对于一些常用的组件，Animated 默认提供它们对应的动画组件：

+ Animated.Image
+ Animated.ScrollView
+ Animated.Text
+ Animated.View
+ Animated.FlatList
+ Animated.SectionList

  




# 头部渐变效果
大部分 App 都有导航栏渐变效果，即随着页面上滑，头部的导航栏缓慢浮现。



```javascript
//1. 声明动画值保存页面已滚动的长度
const scrollY = useRef(new Animated.Value(0)).current;
//2. 使用 Animated.event方法将event.nativeEvent.contentOffset.y的值即 Y轴的移动距离映射到了scrollY上。
<ScrollView 
  onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}])}>
</ScrollView>
//3. 将scrollY通过interpolate方法映射到透明度上，当页面滑动距离为 0->100 时，状态栏的不透明度也会相应地从 0->1。
<View style={{
    opacity: scrollY.interpolate({inputRange: [0, 100], outputRange: [0, 1]})
  }}></View>
```

# ScrollView 中使用动画


```json
import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions
} from "react-native";

const images = new Array(6).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4');

const App = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ])}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => {
            return (
              <View
                style={{ width: windowWidth, height: 250 }}
                key={imageIndex}
              >
                <ImageBackground source={{ uri: image }} style={styles.card}>
                  <View style={styles.textContainer}>
                    <Text style={styles.infoText}>
                      {"Image - " + imageIndex}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp"
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
```



> 更新: 2023-03-24 14:23:20  
> 原文: <https://www.yuque.com/u3641/dxlfpu/ibwcnrgulpby00zb>