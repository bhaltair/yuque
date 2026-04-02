# Google Play

You uploaded an APK or Android App Bundle signed with a certificate that expires too soon. You need to sign your APK or Android App Bundle with a certificate that expires farther into the future. Learn more about signing.



自签名证书



aab, 需要先使用上传密钥为 app bundle 签名



对于在 Play 商店中（适用于 2021 年 8 月之前创建的应用）或其他商店中使用 APK 分发的应用，必须为 APK 手动签名才能上传。



On Android, there are two signing keys: deployment and upload. The end-users download the .apk signed with the ‘deployment key’. An ‘upload key’ is used to authenticate the .aab / .apk uploaded by developers onto the Play Store and is re-signed with the deployment key once in the Play Store.



在Android上，有两个签名密钥：部署和上传。终端用户下载用 "部署密钥 "签名的.apk。上传密钥 "用于验证开发者上传到Play Store的.aab/.apk，一旦进入Play Store，就会用部署密钥重新签名。







## 生成上传密钥和密钥库


## 使用上传密钥为应用签名
为了提高安全性，建议您使用新的上传密钥（而不是应用签名密钥）为应用签名。







## Play 应用签名计划
2021 年 8 月之前创建的应用除外，这些应用可继续分发自签名 APK）



## aab格式


aab的四大优势：



Android App Bundle: Google Play 使用App Bundle生成并优化APK，以针对不同设备配置和语言进行分发。



> 更新: 2021-10-19 19:17:02  
> 原文: <https://www.yuque.com/u3641/dxlfpu/zkkf90>