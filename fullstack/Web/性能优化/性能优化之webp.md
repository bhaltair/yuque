# 性能优化之webp

## webp

google开发的一种有损、透明图片格式，相当于jpg和png的合体

##

## 好处

质量降低后的webp图片仍旧保持了不错的观感，30% 的质量设置下，JPG 图片的大小为 10.6KB，而 WebP 仅为 7.1KB。

PNG另一个优点是支持透明背景

同一张图片在png和webp格式下，webp所带来的优势：

1.图片体积会减少将近80%

2.请求时间也会减少将近80%

3.图片不会失真

## 缺点

缺点是安卓4.4下和IOS的不支持

需要我们的iOS同学支持一下了

## 兼容性

### 检查设备是否支持webp格式图片

```javascript
// 大致的原理就是，先加载一个小的webp格式的图片，给这个img绑定onload和onerror两个事件，
// 如果在图片展示的过程中进入了onload函数中，并且图片的width和height都大于0，
// 那么说明该设备支持webp格式的图片
// 反之，如果进入了onerror中，说明该设备不支持
function check_webp_feature(feature, callback) {
    var kTestImages = {
        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA=="
    };
    var img = new Image();
    img.onload = function () {
        var result = (img.width > 0) && (img.height > 0);
        callback(feature, result);
    };
    img.onerror = function () {
        callback(feature, false);
    };
    img.src = "data:image/webp;base64," + kTestImages[feature];
}
```

## 格式转换

把图片资源全部放到阿里云的OSS上，利用OSS的格式转换

> ?x-oss-process=image/format,webp

压缩到70%质量的webp

> `${src}?x-oss-process=image/resize,w_300,h_300,image/format,webp/quality,q_70`


> 更新: 2019-03-09 13:07:01  
> 原文: <https://www.yuque.com/u3641/dxlfpu/abeyse>