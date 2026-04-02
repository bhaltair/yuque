# custom font

[https://levelup.gitconnected.com/use-custom-fonts-and-icons-in-your-react-native-application-b7498462cc4f](https://levelup.gitconnected.com/use-custom-fonts-and-icons-in-your-react-native-application-b7498462cc4f)



[https://medium.com/bam-tech/add-custom-icons-to-your-react-native-application-f039c244386c](https://medium.com/bam-tech/add-custom-icons-to-your-react-native-application-f039c244386c)



[https://icomoon.io/app/#/select/font](https://icomoon.io/app/#/select/font)





react-native.config.js

```txt
module.exports = {
    project: {
        ios:{},
        android:{}
    },
    assets:['./assets/fonts/'],
}
```



// First install react-native-asset as a dependency

yarn add -D react-native-asset



// Then link your assets

yarn react-native-asset





> 更新: 2023-10-09 15:57:45  
> 原文: <https://www.yuque.com/u3641/dxlfpu/cxw4bhpydwwglwia>