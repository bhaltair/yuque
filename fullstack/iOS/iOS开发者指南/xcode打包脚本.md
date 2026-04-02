# xcode 打包脚本

```json
#工程绝对路径
project_path=~/.jenkins/workspace/kikitrade_ios_beta
#工程名 将XXX替换成自己的工程名
project_name=kikitrade

#scheme名 将aaa替换成自己的sheme名
scheme_name=kikitrade

#打包模式 Debug/Release
development_mode=Release


export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8
export LC_ALL=en_US.UTF-8



rm -rf .env
echo API_ENV=$env >> .env
echo BUGSNAG_KEY=b4401ea0bd0baf6ff5d4d6f1d584b690 >> .env



#
git fetch -a
#git merge origin/feature-opentracing
#curl -o klog.patch https://gitlab.com/vincent.yang1/gitpatch/-/raw/main/klog.patch
#git apply klog.patch

WeekDay=$(date +%u)
DayHour=$(date +%H)
if [ "$WeekDay" == "6" ] && [ "$DayHour" == "10" ]
then
	rm -rf $project_path/node_modules
	rm -rf $project_path/ios/Pods/
	echo 'delete node_modules ios/Pods'
fi

/usr/local/bin/npm install

cd ~/.jenkins/workspace/kikitrade_ios_beta
echo "increment ios build number"
cd ios/



CONFIG_FILE="AppCenter-Config.plist"
SOURCEMAP_IOS=$project_path/sourcemap_ios.sh
APPCENTER_CONFIG_JSON_FILE=$project_path/ios/$CONFIG_FILE
plutil -replace AppSecret -string $APPCENTER_APP_SECRET $APPCENTER_CONFIG_JSON_FILE
echo "File $CONFIG_FILE content:"
cat $APPCENTER_CONFIG_JSON_FILE


    
agvtool new-version -all ${BUILD_NUMBER} 
INFO_PLIST_FILE=${project_path}/ios/${project_name}/Info.plist
echo $env
echo "Updating appName to ${project_name}-$env in Info.plist"
plutil -replace CFBundleDisplayName -string Kikitrade-$env ${INFO_PLIST_FILE}
plutil -replace CFBundleShortVersionString -string $version $INFO_PLIST_FILE

plutil -replace FacebookAppID -string 1052114598639186 ${INFO_PLIST_FILE}
plutil -replace FacebookDisplayName -string kikitrade-beta ${INFO_PLIST_FILE}

sed -i '' 's/fb1052114598639186/fb1052114598639186/' ${INFO_PLIST_FILE}
sed -i '' 's/fb4082693721745670/fb1052114598639186/' ${INFO_PLIST_FILE}
sed -i '' 's/fb219948165709979/fb1052114598639186/' ${INFO_PLIST_FILE}

sed -i '' 's/com.googleusercontent.apps.311695539840-86t92kk23d4nf32an8o2p7vdt9kp2lat/com.googleusercontent.apps.983830855482-7srttj39aub02lvko5jnjnkr3lsm8372/g'  $INFO_PLIST_FILE

cat $INFO_PLIST_FILE

sed -i '' 's/szAtEKkR19t5Exyjg-Qow-2ls6n2sDyU1jCov/dMz8lkmSrlmyIycmF9KrjhUgB5_DTEwz-pXiW/' ${project_path}/ios/kikitrade.xcodeproj/project.pbxproj 

sed -i '' 's/org.evg.kikitrade/com.kktd.kikitrade/' ${project_path}/ios/kikitrade.xcodeproj/project.pbxproj 
sed -i '' 's/ENV=dev/ENV='$env'/' ${project_path}/ios/kikitrade.xcodeproj/project.pbxproj
sed -i '' 's/ENV=pro/ENV='$env'/' ${project_path}/ios/kikitrade.xcodeproj/project.pbxproj
sed -i '' 's/ENV=prod/ENV='$env'/' ${project_path}/ios/kikitrade.xcodeproj/project.pbxproj

echo "Updating version code to $BUILD_NUMBER in sourcemap.sh"

sed -i '' 's/--app-version [0-9.]*/--app-version '$version'/' $SOURCEMAP_IOS
sed -i '' 's/--app-bundle-version [0-9.]*/--app-bundle-version '$BUILD_NUMBER'/' $SOURCEMAP_IOS
    



cat ${project_path}/ios/kikitrade.xcodeproj/project.pbxproj
#rm -rf Podfile.lock
#/usr/local/bin/pod install --repo-update
 arch -arch x86_64 /usr/local/bin/pod install
 #arch -arch x86_64 /usr/local/bin/pod install --repo-update



#xxx是工程名
if [ ! -d ./IPADir ];
then
mkdir -p IPADir;
fi

security unlock-keychain -p "longmao" ~/Library/Keychains/login.keychain
 





#build文件夹路径
build_path=${project_path}/build

#plist文件所在路径
exportOptionsPlistPath=${project_path}/ExportTest.plist

#导出.ipa文件所在路径
exportIpaPath=${project_path}/IPADir/${development_mode}


echo "Place enter the number you want to export ? [ 1:app-store 2:ad-hoc] "

##
#read number
#while([[ $number != 1 ]] && [[ $number != 2 ]])
#do
#echo "Error! Should enter 1 or 2"
#echo "Place enter the number you want to export ? [ 1:app-store 2:ad-hoc] "
#read number
#done



      
      echo '///-----------'
      echo '/// 正在清理工程'
      echo '///-----------'
      #xcodebuild \
      #clean -configuration ${development_mode} -quiet  || exit
      
      xcodebuild -workspace ${project_path}/ios/${project_name}.xcworkspace -scheme ${scheme_name} -configuration ${development_mode} 

      echo '///--------'
      echo '/// 清理完成'
      echo '///--------'
      echo ''
	  echo '///-----------'
      echo '/// 正在编译工程:'${development_mode}
      echo '///-----------'
      xcodebuild \
      archive -workspace ${project_path}/ios/${project_name}.xcworkspace \
      -scheme ${scheme_name} \
      -configuration ${development_mode} \
      -archivePath ${build_path}/${project_name}.xcarchive  -quiet  || exit
      
      echo '///--------'
      echo '/// 编译完成'
      echo '///--------'
      echo ''

    echo '///----------'
    echo '/// 开始ipa打包'
    echo '///----------'
    xcodebuild -exportArchive -archivePath ${build_path}/${project_name}.xcarchive \
    -configuration ${development_mode} \
    -exportPath ${exportIpaPath} \
    -exportOptionsPlist ${exportOptionsPlistPath} \
    -quiet || exit
    
    if [ -e $exportIpaPath/$scheme_name.ipa ]; then
    echo '///----------'
    echo '/// ipa包已导出'
    echo '///----------'
    #open $exportIpaPath
    else
    echo '///-------------'
    echo '/// ipa包导出失败 '
    echo '///-------------'
    fi
    echo '///------------'
    echo '/// 打包ipa完成  '
    echo '///-----------='
    echo ''
    
echo "开始上传到appcenter"
#上传到蒲公英
#蒲公英aipKey
#MY_PGY_API_K=1675322c9c2c06fd5b17f9aa4f4e5f6a
#蒲公英uKey


#MY_PGY_UK=f272f68503bd4d39bd1217dd050429be

#curl -F "file=@${exportIpaPath}/${scheme_name}.ipa" -F "uKey=${MY_PGY_UK}" -F "_api_key=${MY_PGY_API_K}" https://www.pgyer.com/apiv2/app/upload
 
#    echo "蒲公英上传成功，请到https://www.pgyer.com/fR8O安装试用"
#MESSAGE="kikitrade_$env ios包，上传蒲公英成功，请到https://www.pgyer.com/oivF 安装试用"
#DINGTALKTOKEN="c0871f81bcadafccd3bce65a74cdfb11d9ae5be4c919e6bfa363a779aceb4316"
cd ..

appcenter distribute release --app KIKITrade_IOS/Kikitrade_IOS_Beta --file ./IPADir/Release/Kikitrade.ipa --group pgyer




bash ./sourcemap_ios.sh 
 
rm -rf ios-release*

```

```shell
# echo "Archiving the project"
# xcodebuild clean archive -workspace ios/${PROJECT_NAME}.xcworkspace -scheme $IOS_SCHEME -configuration $IOS_CONFIGURATION -archivePath ios/build/${PROJECT_NAME}.xcarchive

# use project to build
# xcodebuild clean archive -project $cur_dir/../../ios/${PROJECT_NAME}.xcodeproj -scheme $IOS_SCHEME -configuration $IOS_CONFIGURATION -derivedDataPath $cur_dir/../../ios/build -archivePath $cur_dir/../../ios/build/Products/${PROJECT_NAME}.xcarchive

# xcodebuild -workspace vibra.xcworkspace -configuration Beta -scheme vibra

# use xcworkspace to build
# xcodebuild clean archive PRODUCT_BUNDLE_IDENTIFIER=${IOS_APP_ID} -workspace $cur_dir/../../ios/${PROJECT_NAME}.xcworkspace -scheme $IOS_SCHEME -configuration $IOS_CONFIGURATION -derivedDataPath $cur_dir/../../ios/build -archivePath $cur_dir/../../ios/build/Products/${PROJECT_NAME}.xcarchive

# echo "Export archive to create IPA file using $IOS_EXPORT_OPTIONS_PLIST"
# xcodebuild -exportArchive -archivePath $cur_dir/../../ios/build/Products/${PROJECT_NAME}.xcarchive -exportPath $cur_dir/../../ios/build/Products/IPA

# echo "IPA will be found at $cur_dir/../../ios/build/Products/IPA/$IOS_SCHEME.ipa"
```



> 更新: 2023-03-24 14:21:26  
> 原文: <https://www.yuque.com/u3641/dxlfpu/zp4vfq>