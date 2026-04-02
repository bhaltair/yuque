# Chrome 90 正式发布

# DevTools 新功能

中文

<https://www.youtube.com/watch?v=UyXPdYLQVQk>

[What's New in DevTools](https://www.youtube.com/watch?v=UyXPdYLQVQk\&list=PLNYkxOF6rcIBDSojZWBv4QJNoT4GNYzQD)

* 支持 AV1 视频解码器，AV1 是开放媒体联盟（AOM）开发的开源、**免版权费**的视频格式，它比 H.265/264/VP9 在相同画质下有更高的压缩率，也就是同等带宽下可以传输更高清的画质。这也是 [WebRTC](https://blog.chromium.org/2021/03/chrome-90-beta-av1-encoder-for-webrtc.html) 中使用的编码格式（推荐阅读[ AV1 vs HEVC——WebRTC编解码器之争卷土重来？一](https://webrtc.org.cn/20200520-av1-hevc1/)）。[此前 Firefox 67 已经支持](https://caniuse.com/av1)。
* CSS `overflow` 新增 [clip](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow) 属性值，其效果与 `hidden` 类似，区别是 `clip` 还会禁止一切程序滚动，包括通过 DOM API 调整滚动位置。此外 `clip` 不会产生新的格式化上下文（Formatting context），如果希望同时建立格式化上下文（比如闭合浮动时），可以使用新的 [display: flow-root](https://caniuse.com/flow-root)。
* CSS 纵横比属性 `aspect-ratio` 现在[支持插值动画](https://www.chromestatus.com/features/5682100885782528)。
* 剪切板 API 现在支持[读取文件路径](https://www.chromestatus.com/feature/5671807392677888)。
* [禁用 HTTP、HTTPS、FTP 的 554 端口](https://www.chromestatus.com/feature/5329879744643072)，以减缓 [NAT Slipstream 2.0 攻击](https://www.armis.com/resources/iot-security-blog/nat-slipstreaming-v2-0-new-attack-variant-can-expose-all-internal-network-devices-to-the-internet/)，Edge、Firefox、Safari 也均已禁用。
* 支持[声明式 Shadow DOM](https://web.dev/declarative-shadow-dom/)，可以直接在 `<template>` 元素中使用 `shadowroot` 属性创建 Shadow DOM。


> 更新: 2021-05-15 13:58:14  
> 原文: <https://www.yuque.com/u3641/dxlfpu/hk6fsu>