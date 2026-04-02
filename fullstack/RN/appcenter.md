# appcenter

[https://install.appcenter.ms/orgs/Vibra/apps/Vibra_android_beta/releases/17](https://install.appcenter.ms/orgs/Vibra/apps/Vibra_android_beta/releases/17)



appcenter-pre-build.sh

appcenter-post-build.sh

+ 发送丁丁推送





pre-build.sh

```yaml
#!/usr/bin/env bash

# Example: Change bundle name of an iOS app for non-production
if [ "$APPCENTER_BRANCH" != "main" ];
then
    plutil -replace CFBundleDisplayName -string "\$(PRODUCT_NAME) Beta" $APPCENTER_SOURCE_DIRECTORY/MyApp/Info.plist
fi
```





post-build.sh

```yaml
echo "get the message of the last commit "
COMMIT_MESSAGE=$(git log -1 HEAD --pretty=format:%s --no-merges)

if [ "$APP_RELEASE" == "store" ]
then
    MESSAGE="kikitrade testflight准备发布，请等待10分钟后打开testflight安装试用或者留意苹果消息推送, 版本号：$VERSION_NAME ($APPCENTER_BUILD_ID) , 更新日志：$COMMIT_MESSAGE"
fi

if [ "$AGENT_JOBSTATUS" == "Succeeded" ]; then
    HOCKEYAPP_API_TOKEN={API_Token}
    HOCKEYAPP_APP_ID={APP_ID}

    # Example: Upload main branch app binary to HockeyApp using the API
    if [ "$APPCENTER_BRANCH" == "main" ];
     then
        curl \
        -F "status=2" \
        -F "ipa=@$APPCENTER_OUTPUT_DIRECTORY/MyApps.ipa" \
        -H "X-HockeyAppToken: $HOCKEYAPP_API_TOKEN" \
        https://rink.hockeyapp.net/api/2/apps/$HOCKEYAPP_APP_ID/app_versions/upload
    else
        echo "Current branch is $APPCENTER_BRANCH"
    fi
fi
```

## environment
[https://docs.microsoft.com/en-us/appcenter/build/custom/variables/](https://docs.microsoft.com/en-us/appcenter/build/custom/variables/)

```yaml
"$APPCENTER_BRANCH" == "beta"
"$APPCENTER_PLATFORM" == "ios"
```



> 更新: 2021-10-18 15:41:50  
> 原文: <https://www.yuque.com/u3641/dxlfpu/wq7xnv>