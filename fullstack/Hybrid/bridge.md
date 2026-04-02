# bridge

# 原理
## Android
1. 实现Android 的JavascriptInterface 类及call方法

package ...  
...  
import android.webkit.JavascriptInterface;  
public class JSBridgeChannel {  
    @JavascriptInterface  
    // JS侧JSON.stringify序列化处理options对象  
    public void call(String api, String options){  
        //根据api及传递过来的参数处理Native对应的功能  
        ...  
    }  
}  


1. 在 WebView 的 loadUrl 时候，注入 Android 类实例对象，并映射为window.JSBridge

@Override  
public void loadUrl(String url) {  
    ...  
    //…构造函数所需参数；AliJSBridge 为JS映射对象名  
    mWebView.addJavascriptInterface(new JSBridgeChannel(…), "JSBridge");  
}  


1. 在前端可以这样调用

window.JSBridge.call('api', JSON.stringify(options));  


## iOS
iOS 8 WKWebView提供了 MessageHandler 方式来处理 JS 与 Native 的数据交互，要求 iOS 8+

+ UIWebView
+ WKWebView

WebView 里 JS 即可同步调用

const options = {  
    //注意这里，是一个技巧性的处理方式，可以避免过多的messageHandlers注册  
   _api_: ‘apiName',  
   ...  
};  
window.webkit.messageHandlers['bridge'].postMessage(options);  


## 统一调用
两端需要分别注意一段兼容封装的JS脚本

将两端的桥功能统一成下面形式调用。

// success会正确回调函数  
// failure是错误回调函数  
JSBridge.call('api', options, success, failure)   




> 更新: 2021-05-16 20:45:51  
> 原文: <https://www.yuque.com/u3641/dxlfpu/yhqw9v>