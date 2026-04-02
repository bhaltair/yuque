# xcodebuild 命令行



```java
xcodebuild -list

xcodebuild -workspace ${project_path}/ios/${project_name}.xcworkspace -scheme ${scheme_name} -configuration ${development_mode} -allowProvisioningUpdates

// archive
xcodebuild archive -workspace ${project_path}/ios/${project_name}.xcworkspace \
-scheme ${scheme_name} \
-configuration ${development_mode} \
-archivePath ${build_path}/${project_name}.xcarchive -quiet  || exit

// export
xcodebuild -exportArchive -archivePath ${build_path}/${project_name}.xcarchive -configuration ${development_mode} -exportPath "${exportIpaPath}" -exportOptionsPlist ${exportOptionsPlistPath} -allowProvisioningUpdates -quiet || exit

```

# xcodebuild export 报错的解决办法
[https://www.jianshu.com/p/6b68cd9307bc](https://www.jianshu.com/p/6b68cd9307bc)



> 更新: 2023-03-24 14:22:09  
> 原文: <https://www.yuque.com/u3641/dxlfpu/ugllef>