# react-native-linear-gradient

[https://www.jianshu.com/p/1412cf0ab3e7](https://www.jianshu.com/p/1412cf0ab3e7)



```java
// 引用官网的例子
import LinearGradient from 'react-native-linear-gradient';
// Within your render function
<LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>
    Sign in with Facebook
  </Text>
</LinearGradient>

// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
```



> 更新: 2021-05-18 11:40:09  
> 原文: <https://www.yuque.com/u3641/dxlfpu/qgoau1>