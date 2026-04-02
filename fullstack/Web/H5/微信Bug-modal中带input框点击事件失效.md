# 微信Bug - modal中带input框 点击事件失效

## 场景


机型：iphone7 - iphonex



微信版本：最新版微信下



页面弹出层中有input框，blur后，滑动页面，其他按钮的点击事件错位。





## 解决办法


> 在input唤醒键盘输入后，在input上加入onBlur事件，input失去焦点后，让页面滚动到顶部（document.body.scrollTop = 0 ）
>



```javascript
<div class="mobile-phone" @click="$refs['input'].focus()">
 <input class="input_phone" type="number" ref="input" placeholder="输入手机号" v-model="phoneNumber" @blur="onBlur">
</div>

private onBlur(event: any) {
  if (/(Android)/i.test(navigator.userAgent)) {
  	return
  }
  if (document.body) {
  	document.body.scrollTop = 0
  }
}
```





## 参考文章


[https://sevencai.github.io/2019/03/01/%E8%A7%A3%E5%86%B3-IOS-%E5%BE%AE%E4%BF%A1%E6%9F%90%E4%BA%9B%E7%89%88%E6%9C%AC%E4%B8%8B%E9%94%AE%E7%9B%98%E6%94%B6%E8%B5%B7%E9%A1%B5%E9%9D%A2%E4%B8%BA%E4%B8%8B%E7%A7%BB%E5%AF%BC%E8%87%B4%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6%E5%A4%B1%E6%95%88%E9%97%AE%E9%A2%98/](https://sevencai.github.io/2019/03/01/%E8%A7%A3%E5%86%B3-IOS-%E5%BE%AE%E4%BF%A1%E6%9F%90%E4%BA%9B%E7%89%88%E6%9C%AC%E4%B8%8B%E9%94%AE%E7%9B%98%E6%94%B6%E8%B5%B7%E9%A1%B5%E9%9D%A2%E4%B8%BA%E4%B8%8B%E7%A7%BB%E5%AF%BC%E8%87%B4%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6%E5%A4%B1%E6%95%88%E9%97%AE%E9%A2%98/)



```javascript
;(/iphone|ipod|ipad/i.test(navigator.appVersion)) && document.addEventListener('blur', (e) => { 'input', 'textarea'].includes(e.target.localName) && document.body.scrollIntoView(false) }, true)
```





> 更新: 2019-11-06 16:48:17  
> 原文: <https://www.yuque.com/u3641/dxlfpu/em187l>