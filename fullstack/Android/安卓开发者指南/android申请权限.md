# android 申请权限

CAMERA

扫码



ACCESS_NETWORK_STATE

获取网络信息状态，如当前的网络连接是否有效



INTERNET



READ_EXTERNAL_STORAGE

WRITE_EXTERNAL_STORAGE

存储卡读写权限



VIBRATE



WAKE_LOCK 

保持屏幕常亮



RECORD_AUDIO

录制音频



READ_PHONE_STATE 可选

读取手机状态和身份权限



ACCESS_COARSE_LOCATION

获取错略位置



ACCESS_FINE_LOCATION

获取精确位置 



```plain
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
  <uses-permission android:name="android.permission.CAMERA"/>
  <uses-permission android:name="android.permission.INTERNET"/>
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
  <uses-permission android:name="android.permission.RECORD_AUDIO"/>
  <uses-permission android:name="android.permission.VIBRATE"/>
  <uses-permission android:name="android.permission.WAKE_LOCK"/>
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
  <uses-permission android:name="com.google.android.c2dm.permission.RECEIVE"/>
```

# Info.plist


[https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW1](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW1)



```plain
	<key>NSCameraUsageDescription</key>
	<string>Vibra would like to use your camera for uploading headshots, posting messages</string>
	<key>NSMicrophoneUsageDescription</key>
	<string>Allow $(PRODUCT_NAME) to access your microphone</string>
	<key>NSPhotoLibraryUsageDescription</key>
	<string>Vibra would like to access your image gallery for uploading avatars and posting pictures</string>
```



> 更新: 2023-03-24 14:20:54  
> 原文: <https://www.yuque.com/u3641/dxlfpu/gw2trz>