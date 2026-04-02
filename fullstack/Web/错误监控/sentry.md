# sentry

## sentry sdk
raven-js不再更新，使用@sentry/browser



## sourcemap


sourcemap不可以上传到服务器上



适用sentry-webpack上传sourcemap文件



## 


### 手动上传soucemap


```plain
sentry-cli releases -o MY_ORG -p MY_PROJECT files \
      2da95dfb052f477380608d59d32b4ab9 upload-sourcemaps --url-prefix \
      https://mydomain.invalid/static /path/to/assets
      
      -o hemayun -p vue
      
      sentry-cli releases -o hemayun -p vue files 0.0.9 upload-sourcemaps --url-prefix https://subscribe-wechat-app.shouqianba.com/js ./
```



### 检测sourcemaps是否生效


[http://sourcemaps.io/](http://sourcemaps.io/)



### 清空sourcemaps


sentry-cli releases -o hemayun -p vue files 0.0.9 delete --all



## sentry-cli


login



```plain
sentry-cli --url https://sentry.hemayun.net/ login
```



创建token



复制token



## 创建releases


### 3个办法创建releases


via the releases API, sentry-cli or sentry-webpack-plugin



sentry-cli releases -o 团队名称 -p 项目名称 new release名称





### tag your error


```plain
Sentry.init({
  release: "my-project-name@2.3.12"
})

or 

  Raven.config(DSN, {
    release: 'staging@1.0.1'
  }).addPlugin(RavenVue, Vue).install()
```



### 记得别把map文件传到生产环节了，又大又不安全


## test


```plain
//# sourceMappingURL=app.25839392.js.map
https://subscribe-wechat-app.shouqianba.com/js/app.25839392.js.map
```



## 下载一个JS文件


wget [https://subscribe-wechat-app.shouqianba.com/js/app.25839392.js.map](https://subscribe-wechat-app.shouqianba.com/js/app.25839392.js.map)



## 参考


[https://segmentfault.com/a/1190000014683598#articleHeader1](https://segmentfault.com/a/1190000014683598#articleHeader1)



[sentry文档](https://docs.sentry.io/clients/javascript/sourcemaps/)



[https://zhuanlan.zhihu.com/zaihuidev](https://zhuanlan.zhihu.com/zaihuidev)





> 更新: 2019-02-14 14:25:54  
> 原文: <https://www.yuque.com/u3641/dxlfpu/agiq4q>