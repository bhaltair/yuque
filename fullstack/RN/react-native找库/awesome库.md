# awesome 库

# react-native-root-toast
# teaset
UI 库



# notification


react-native-notifications

react-native-push-notification



# @react-native-async-storage/async-storage


封装好的 react-native-simple-store



# react-native-localize 国际化


# nativebase
[https://docs.nativebase.io/](https://docs.nativebase.io/)



# 输入框表单验证
https://github.com/gcanti/tcomb-form-native

https://github.com/FaridSafi/react-native-gifted-form

https://github.com/bartonhammond/snowflake



# 键盘遮挡问题
https://github.com/reactnativecn/react-native-inputscrollview

https://github.com/wix/react-native-keyboard-aware-scrollview



# 扫描二维码
https://github.com/lazaronixon/react-native-qrcode-reader



# 缓存管理
https://github.com/reactnativecn/react-native-http-cache



# 手势放大缩小移动
[https://github.com/kiddkai/react-native-gestures](https://github.com/kiddkai/react-native-gestures)

[https://github.com/johanneslumpe/react-native-gesture-recognizers](https://github.com/johanneslumpe/react-native-gesture-recognizers)

# 下拉-上拉-刷新
[https://github.com/FaridSafi/react-native-gifted-listview](https://github.com/FaridSafi/react-native-gifted-listview)

[https://github.com/jsdf/react-native-refreshable-listview](https://github.com/jsdf/react-native-refreshable-listview)

[https://github.com/greatbsky/react-native-pull/wiki](https://github.com/greatbsky/react-native-pull/wiki)

# 下拉选择
[https://github.com/alinz/react-native-dropdown](https://github.com/alinz/react-native-dropdown)

# 图片查看
[https://github.com/oblador/react-native-lightbox](https://github.com/oblador/react-native-lightbox)

# 照片选择
[https://github.com/marcshilling/react-native-image-picker](https://github.com/marcshilling/react-native-image-picker)

[https://github.com/ivpusic/react-native-image-crop-picker](https://github.com/ivpusic/react-native-image-crop-picker)

# 图片加载进度条
[https://github.com/oblador/react-native-image-progress](https://github.com/oblador/react-native-image-progress)



# 加密 crypto-js
[https://github.com/brix/crypto-js](https://github.com/brix/crypto-js)



# 国际化
[https://github.com/joshswan/react-native-globalize](https://github.com/joshswan/react-native-globalize)

# react-native-storage 持久化存储


# react-native-countdown 倒计时


# react-native-keychain
iOS KeyChain管理  


# react-native-fast-image
# react-native-easy-toast
[https://www.npmjs.com/package/react-native-easy-toast](https://www.npmjs.com/package/react-native-easy-toast)

# react-native-device-info
[https://www.npmjs.com/package/react-native-device-info](https://www.npmjs.com/package/react-native-device-info)



```json
import { getUniqueId, getManufacturer } from 'react-native-device-info';

```

# react-native-safe-area-context
A flexible way to handle safe area, also works on Android and Web!



[https://www.npmjs.com/package/react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context)



# react-native-reanimated
## Shared Values 共享的值
> Shared Values are among fundamental concepts behind Reanimated 2.0. If you are familiar with React Native's Animated API you can compare them to Animated.Values. 
>
> 
>
> They serve a similar purpose of carrying "animateable" data, providing a notion of reactiveness, and driving animations. We will discuss each of those key roles of Shared Values in sections below. At the end we present a brief overview of the differences between Shared Values and Animated.Value for the readers familiar with the Animated API.
>



共享值是Reanimated 2.0背后的基本概念。 如果您熟悉React Native的Animated API，可以将它们与Animated.Values进行比较。

它们具有类似的目的，即携带“可动画处理的”数据，提供反应性的概念并驱动动画。 



| What | Animated Value | Shared Value |
| --- | --- | --- |
| Payload 负载 | Only numeric and string values are supported | Any primitive or nested data structure (like objects, arrays, strings, numbers, booleans). |
| Connecting with View's props | By passing<br/>Animated.Value<br/>directly as a prop | Shared Values cannot be directly hooked as View's props. You should use<br/>useAnimatedStyle<br/>or<br/>useAnimatedProps<br/>where you can access Shared Values and return them as selected styles/props or process them to calculate the styles. |
| Updating values<br/>更新值 | Using<br/>value.setValue<br/>method (which is an async call when the value is using native driver) | By updating<br/>.value<br/>property. Updating<br/>.value<br/>is sync when running on the UI thread, or async when running on the React Native JS thread. |
| Reading values<br/>读取值 | Register listener with<br/>value.addListener<br/>to get all animated value updates. | By reading<br/>.value<br/>property you can access the current value stored in the Shared Value (both from the UI and React Native JS thread). |
| Running animations<br/>运行动画 | Use<br/>Animated.spring<br/>,<br/>Animated.timing<br/>(or others), pass Animated Value as an argument, and run<br/>.start()<br/>method to launch the animation. | Update<br/>.value<br/>prop as usual while wrapping the target with one of the animation utility methods (e.g.,<br/>withTiming<br/>). |
| Stopping animations<br/>停止动画 | Hold the reference to the animation object returned by<br/>Animated.timing<br/>and similar, then call<br/>stopAnimation()<br/>method on it. | Use<br/>cancelAnimation<br/>method and pass the Shared Value that runs the animation. |
| Interpolating<br/>值的映射 | Use<br/>interpolate()<br/>member method of Animated Value. | Use an<br/>interpolate<br/>method that takes a number and config similar to Animated's interpolate, then returns an interpolated number. This can be used along with<br/>useDerivedValue<br/>if you need a Shared Value that automatically tracks the interpolation of another Shared Value. |




## animations
> Animations are first-class citizens in Reanimated 2. 
>
> The library comes bundled with a number of animation helper methods that makes it very easy to go from immediate property updates into animated ones.
>



### withSpring
### withTiming
### 
### withDelay
### withSequence 
### withRepeat
```javascript
<Button
  onPress={() => {
    offset.value = withSpring(Math.random(), {}, (finished) => {
      if (finished) {
        console.log("ANIMATION ENDED");
      } else {
        console.log("ANIMATION GOT CANCELLED");
      }
    });
  }}
  title="Move"
/>
    
    
import { Easing, withTiming } from 'react-native-reanimated';

offset.value = withTiming(0, {
  duration: 500,
  easing: Easing.out(Easing.exp),
});

 const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255, {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
    };
  });


rotation.value = withSequence(
  withTiming(-10, { duration: 50 }),
  withRepeat(withTiming(ANGLE, { duration: 100 }), 6, true),
  withTiming(0, { duration: 50 })
);
```

## events
### gesture events
```javascript
const EventsExample = () => {
  const pressed = useSharedValue(false);
  return (
    <TapGestureHandler onGestureEvent={eventHandler}>
      // <Animated.View style={[styles.ball]} />
      <Animated.View style={[styles.ball, uas]} />
    </TapGestureHandler>
  );
};

const eventHandler = useAnimatedGestureHandler({
  onStart: (event, ctx) => {
    pressed.value = true;
  },
  onEnd: (event, ctx) => {
    pressed.value = false;
  },
});

const uas = useAnimatedStyle(() => {
  return {
    backgroundColor: pressed.value ? '#FEEF86' : '#001972',
    transform: [{ scale: withSpring(pressed.value ? 1.2 : 1) }],
  };
});
```

### Using context
Let's now try to modify the above example <u>to make the view stay in the place where we lift the finger up</u>

```javascript
// we can save the starting position in onStart callback using context
onStart: (event, ctx) => {
  pressed.value = true;
  ctx.startX = x.value;
  ctx.startY = y.value;
},
  
onActive: (event, ctx) => {
  x.value = ctx.startX + event.translationX;
  y.value = ctx.startY + event.translationY;
},
```





# react-native-screens
 It is not designed to be used as a standalone library but rather as a dependency of a full-featured navigation library.





# react-native-gesture-handler


# react-native-tab-view


> 更新: 2021-06-07 14:29:04  
> 原文: <https://www.yuque.com/u3641/dxlfpu/ex3bdz>