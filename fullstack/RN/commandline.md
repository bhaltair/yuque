# command line

## android


scripts/android/builder.sh



```yaml
#!/bin/bash

set -e
cur_dir=`dirname $0`

echo "BUILDING ANDROID";
cd $cur_dir/../../android &&
./gradlew clean assembleRelease -PBUILD_NAME=$BUILD_NAME -PBUILD_NUMBER=$BUILD_NUMBER -PANDROID_APP_ID=$ANDROID_APP_ID -PMYAPP_RELEASE_STORE_FILE=$ANDROID_KEYSTORE_FILE -PMYAPP_RELEASE_KEY_ALIAS=$ANDROID_KEY_ALIAS -PMYAPP_RELEASE_STORE_PASSWORD=$ANDROID_KEYSTORE_PASSWORD -PMYAPP_RELEASE_KEY_PASSWORD=$ANDROID_KEY_PASSWORD && cd ..

echo "APK will be present at android/app/build/outputs/apk/app-release.apk"
```

android/app/build.gradle



```yaml
...
def enableProguardInReleaseBuilds = false
...
...
def appID = System.getenv("ANDROID_APP_ID") ?: "com.notetaker"
def vCode = System.getenv("BUILD_NUMBER") ?: "0"
def vName = System.getenv("BUILD_NAME") ?: "1.0.local"

android {
    compileSdkVersion 23
    buildToolsVersion "23.0.1"
    defaultConfig {
        applicationId appID
        minSdkVersion 16
        targetSdkVersion 22
        versionCode Integer.parseInt(vCode)
        versionName vName
        ndk {
            abiFilters "armeabi-v7a", "x86"
        }
    }
  ...
  ...
  ...
    signingConfigs {
       release {
           if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
               storeFile file(MYAPP_RELEASE_STORE_FILE)
               storePassword MYAPP_RELEASE_STORE_PASSWORD
               keyAlias MYAPP_RELEASE_KEY_ALIAS
               keyPassword MYAPP_RELEASE_KEY_PASSWORD
           }
       }
   }
    buildTypes {
      release {
          minifyEnabled enableProguardInReleaseBuilds
          proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
          signingConfig signingConfigs.release
      }
    }
...
...
...
```

## iOS
[https://www.reactnative.guide/11-devops/11.2-ios-build-setup.html](https://www.reactnative.guide/11-devops/11.2-ios-build-setup.html)



taget: <font style="color:rgb(51, 51, 51);">release ipa file</font>

<font style="color:rgb(51, 51, 51);"></font>

+ **<font style="color:rgb(51, 51, 51);">BUILD_NAME</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">- The name that will be used by testers to identify the build, for example: '1.1.1', '1.0-alpha', etc.</font>
+ **<font style="color:rgb(51, 51, 51);">BUILD_NUMBER</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">- A unique integer number identifying the build. This is used by iOS to identify which build is the updated build. This should be an integer number. For example: 1, 111, 111, etc.</font>
+ **<font style="color:rgb(51, 51, 51);">IOS_APP_ID</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">- This is the unique app identifier which is used to identify the app uniquely in the App Store or it can be used to identify if the build is dev, preprod or prod. App ids may look like this: com.app.notetaker-dev, com.app.notetaker-alpha.</font>
+ **<font style="color:rgb(51, 51, 51);">IOS_CERTIFICATE</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">- This is the certificate file used to sign the app.</font>
+ **<font style="color:rgb(51, 51, 51);">IOS_CERTIFICATE_KEY</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">- This is the password used while creating the certificate.</font>
+ **<font style="color:rgb(51, 51, 51);">IOS_PROVISION_PROFILE</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">- This is the provision profile needed to build the app. This file mentions the capabilities/devices that are allowed to run the app.</font>
+ **<font style="color:rgb(51, 51, 51);">IOS_EXPORT_OPTIONS_PLIST</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">- This is the options file needed to specify parameters for the build.</font>
+ **<font style="color:rgb(51, 51, 51);">IOS_SCHEME</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">- The scheme which should be used to build the IPA. Typically, we will have different schemes per environment. For example, we can have a local, a preprod and a production scheme.</font>
+ **<font style="color:rgb(51, 51, 51);">IOS_CONFIGURATION</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">- This is the setting which specifies if the build is DEBUG or RELEASE.</font>
+ **<font style="color:rgb(51, 51, 51);">PROJECT_NAME</font>**<font style="color:rgb(51, 51, 51);"> - This is the name of the project. For example, if your project name inside ios folder says SampleProject.xcworkspace or SampleProject.xcodeproj, then PROJECT_NAME=SampleProject .</font>

<font style="color:rgb(51, 51, 51);"></font>

### certificates and provisioning profiles


### Archiving the project 


### Exporting the IPA


```yaml
IOS_SCHEME='vibraexpo' IOS_CONFIGURATION='RELEASE' IOS_EXPORT_OPTIONS_PLIST='exportOptions-dev.plist' sh ./scripts/ios/build.sh
```



第一步 打包

+ 选择 schema
+ 选择证书
+ 选择描述文件

第二步 导出



## appcenter-cli
[https://github.com/Microsoft/appcenter-cli](https://github.com/Microsoft/appcenter-cli)





> 更新: 2021-10-19 15:18:43  
> 原文: <https://www.yuque.com/u3641/dxlfpu/kiwggq>