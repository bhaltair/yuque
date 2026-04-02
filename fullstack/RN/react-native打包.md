# react-native 打包

# 安卓
## 签名配置
## 生成 APK
```json
$ cd android
$ ./gradlew assembleRelease
```

生成的 APK 文件位于android/app/build/outputs/apk/release/app-release.apk，它已经可以用来发布了。



## 测试生成的 APK
```json
$ npx react-native run-android --variant=release
```

## 生成发行 AAB 包
```json
cd android
./gradlew bundleRelease
```

生成的 AAB 文件位于android/app/build/outputs/bundle/release/app-release.aab，它已经可以用来上传到 Google Play 市场了。



# iOS


## 打生产包
不访问本地开发环境，配置 release scheme 为 Release，然后 ⌘B或从菜单栏选择 Product → Build 编译发布 app



或者



> npx react-native run-ios --configuration Release
>



一旦编译发布，就能够向 beta 测试者发布 app，提交 app 到 App Store



> 更新: 2021-08-13 15:19:27  
> 原文: <https://www.yuque.com/u3641/dxlfpu/yldrgy>