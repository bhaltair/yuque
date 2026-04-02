# sentry iOS 自动生成脚本

```ruby
1 Bundle React Native Code and Images

export NODE_BINARY=node
export EXTRA_PACKAGER_ARGS="--sourcemap-output $DERIVED_FILE_DIR/main.jsbundle.map"
export SENTRY_PROPERTIES=../sentry.properties

# If you are using RN 0.46+
../node_modules/@sentry/cli/bin/sentry-cli react-native xcode \
  ../node_modules/react-native/scripts/react-native-xcode.sh

# For RN < 0.46
../node_modules/@sentry/cli/bin/sentry-cli react-native xcode \
  ../node_modules/react-native/packager/react-native-xcode.sh

2 Upload Debug Symbols to Sentry

export SENTRY_PROPERTIES=../sentry.properties

../node_modules/@sentry/cli/bin/sentry-cli upload-dif "$DWARF_DSYM_FOLDER_PATH"
```



> 更新: 2023-03-24 14:22:11  
> 原文: <https://www.yuque.com/u3641/dxlfpu/lzxoqk>