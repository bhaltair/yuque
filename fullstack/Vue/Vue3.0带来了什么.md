# Vue 3.0 带来了什么

# Vite


+ 可以直接在浏览器运行请求的vue文件
+ 利用浏览器 ESM 的特性
+ 热更新速度很快
    - 热更新的速度不会随着模块增多而变慢
+ 不用打包
+ 生产模式是用 rollup 打包



## 原理
Vite 通过劫持浏览器发出的 import 请求，在后端进行相应的处理（比如将 Vue 文件拆分成 template、style、script 三个部分），然后再返回给浏览器



```javascript
<script type="module">
    // index.js可以通过export导出模块，也可以在其中继续使用import加载其他依赖 
    import App from './index.js'
</script>
```



运行

```bash
$ npx create-vite-app <project-name>
$ cd <project-name>
$ npm install
$ npm run dev
```



> 更新: 2020-09-20 22:32:32  
> 原文: <https://www.yuque.com/u3641/dxlfpu/zsu07h>