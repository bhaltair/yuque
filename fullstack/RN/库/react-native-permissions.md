# react-native-permissions

react-native-permissions



android

```yaml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.myawesomeapp">

  <!-- 🚨 Keep only the permissions used in your app 🚨 -->

  <uses-permission android:name="android.permission.ACCEPT_HANDOVER" />
  <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  <uses-permission android:name="android.permission.ACTIVITY_RECOGNITION" />
  <uses-permission android:name="android.permission.ANSWER_PHONE_CALLS" />
  <uses-permission android:name="android.permission.BODY_SENSORS" />
  <uses-permission android:name="android.permission.CALL_PHONE" />
  <uses-permission android:name="android.permission.CAMERA" />
  <uses-permission android:name="android.permission.GET_ACCOUNTS" />
  <uses-permission android:name="android.permission.PROCESS_OUTGOING_CALLS" />
  <uses-permission android:name="android.permission.READ_CALENDAR" />
  <uses-permission android:name="android.permission.READ_CALL_LOG" />
  <uses-permission android:name="android.permission.READ_CONTACTS" />
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
  <uses-permission android:name="android.permission.READ_PHONE_NUMBERS" />
  <uses-permission android:name="android.permission.READ_PHONE_STATE" />
  <uses-permission android:name="android.permission.READ_SMS" />
  <uses-permission android:name="android.permission.RECEIVE_MMS" />
  <uses-permission android:name="android.permission.RECEIVE_SMS" />
  <uses-permission android:name="android.permission.RECEIVE_WAP_PUSH" />
  <uses-permission android:name="android.permission.RECORD_AUDIO" />
  <uses-permission android:name="android.permission.SEND_SMS" />
  <uses-permission android:name="android.permission.USE_SIP" />
  <uses-permission android:name="android.permission.WRITE_CALENDAR" />
  <uses-permission android:name="android.permission.WRITE_CALL_LOG" />
  <uses-permission android:name="android.permission.WRITE_CONTACTS" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
  <uses-permission android:name="com.android.voicemail.permission.ADD_VOICEMAIL" />

  <!-- … -->

</manifest>
```



iOS

```yaml
target 'YourAwesomeProject' do

  # …

  permissions_path = '../node_modules/react-native-permissions/ios'

  pod 'Permission-AppTrackingTransparency', :path => "#{permissions_path}/AppTrackingTransparency"
  pod 'Permission-BluetoothPeripheral', :path => "#{permissions_path}/BluetoothPeripheral"
  pod 'Permission-Calendars', :path => "#{permissions_path}/Calendars"
  pod 'Permission-Camera', :path => "#{permissions_path}/Camera"
  pod 'Permission-Contacts', :path => "#{permissions_path}/Contacts"
  pod 'Permission-FaceID', :path => "#{permissions_path}/FaceID"
  pod 'Permission-LocationAccuracy', :path => "#{permissions_path}/LocationAccuracy"
  pod 'Permission-LocationAlways', :path => "#{permissions_path}/LocationAlways"
  pod 'Permission-LocationWhenInUse', :path => "#{permissions_path}/LocationWhenInUse"
  pod 'Permission-MediaLibrary', :path => "#{permissions_path}/MediaLibrary"
  pod 'Permission-Microphone', :path => "#{permissions_path}/Microphone"
  pod 'Permission-Motion', :path => "#{permissions_path}/Motion"
  pod 'Permission-Notifications', :path => "#{permissions_path}/Notifications"
  pod 'Permission-PhotoLibrary', :path => "#{permissions_path}/PhotoLibrary"
  pod 'Permission-PhotoLibraryAddOnly', :path => "#{permissions_path}/PhotoLibraryAddOnly"
  pod 'Permission-Reminders', :path => "#{permissions_path}/Reminders"
  pod 'Permission-Siri', :path => "#{permissions_path}/Siri"
  pod 'Permission-SpeechRecognition', :path => "#{permissions_path}/SpeechRecognition"
  pod 'Permission-StoreKit', :path => "#{permissions_path}/StoreKit"

end
```



> 更新: 2021-08-26 16:29:57  
> 原文: <https://www.yuque.com/u3641/dxlfpu/kixwai>