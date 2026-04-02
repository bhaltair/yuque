# 常见bug

## weex
github.com/eros





## iOS
### 消息提醒机制
iOS系统对权限控制比较严，每当我们下载一个新的app，当要调用相册权限、相机、麦克风、位置等都需要用户选择确定，如果用户点击不允许，就没法调取。想要再次允许的时候操作也比较麻烦，需要到系统设置里面去打开权限。这也就是为什么iOS消息设置相对来说复杂一点，根本原因是iOS系统



### 导航栏高度
Android的状态栏为24dp，iOS的为20pt。

安卓的顶部导航栏为56dp，iOS的为44pt。





## 移动设备兼容机型


兼容性目标是安卓4.1+，IOS7+，UC和qq浏览器



## 手势库
AlloyFinger





## 常见bug


### 确保弹出来的是数字键盘
<input type="number" pattern="[0-9]*" />

<input type="password" pattern="[0-9]*" />

只有number或者tel还是不够，只有加入正则，ios才会出现九宫格。



### IOS端:active不生效
常见效果长按按钮状态发生变化,比如切换src等，用:active再方便不过，可是可是。。。  
解决方案：body标签里绑定个,可写js绑定

### IOS端：点击会有黑色阴影，很丑
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);

### line-height==height 在安卓上显示偏上问题
不垂直居中  
选择加padding替代line-height

### ios input不能输入
*:not(input) {  
-webkit-user-select: none;  
}

### 安卓4.3系统以下webview兼容性
对css兼容性很差，比如calc，display:flex...



### 输入框
[转转FE=-一个听话的输入框](https://zhuanlan.zhihu.com/p/33298947)



### video player
xgplayer  
Chimee  
flv.js



### 图片预览
FileReader 提供 readAsDataURL 方法可以实现我们的需求，当 FileReader 的实例把图片通过 readAsDataURL 方法转换为 base64 格式之后，会触发 onload 方法，此方法内的 event.target.result 就是我们所需要的 base64 格式图片。

```javascript
function previewImgFile(event, files, index) {
    var _files = files || event.target.files;
    var _index = index || 0;
    var reader = new FileReader();
    reader.onload = function(event) {
      var eImg = document.createElement('img');
      eImg.src = event.target.result;
      document.body.appendChild(eImg);
      if ((_index += 1) < _files.length) previewFiles(event, _files, _index);
    }
    reader.readAsDataURL(_files[_index]);
  }
  document.querySelector('#uploadFileBtn').addEventListener('change', previewImgFile, false);
```



### 图片上传
这里有个非常重要的点需要明白，图片上传不同于普通表单数据提交，它们需要的编码格式是不一样的。

  
普通表单数据的编码类型为 application/x-www-form-urlencoded，

  
而对于<font style="color:#F5222D;">文件上传，编码类型应该使用 multipart/form-data。</font>



## 移动端调试利器
Weinre  
edura  
vconsole

[安卓微信里打开debugx5.qq.com](http://xn--debugx5-2y6k69wt7v3wiv5br1ogr7o.qq.com)，里边有选项可以打开vConsole，之后所有微信内的网页都会被自动注入vConsole。不过iOS是不行的……



> 更新: 2020-03-13 17:56:01  
> 原文: <https://www.yuque.com/u3641/dxlfpu/degxkf>