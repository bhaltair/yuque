# Node.js实战：使用Egg.js+Vue.js+Docker构建渐进式、可持续集成与交付应用

<font style="color:#F5222D;">使用Egg.js+Vue.js+Docker构建渐进式、可持续集成与交付应用</font>



**<font style="color:#666666;">第1章　Node．js的优势 1</font>**

<font style="color:#666666;">1．1　为什么是JavaScript语言 1</font>

<font style="color:#666666;">1．2　为什么经常说Node．js不适合大型应用 3</font>

**<font style="color:#666666;">第2章　Egg．js框架核心原理与实现 6</font>**

<font style="color:#666666;">2．1　异步基础 6</font>

<font style="color:#666666;">2．2　Koa．js基础知识 15</font>

<font style="color:#666666;">2．2．1　Koa．js 中间件核心代码 16</font>

<font style="color:#666666;">2．2．2　Koa．js插件 18</font>

<font style="color:#666666;">2．3　Egg．js 基础知识 21</font>

<font style="color:#666666;">2．3．1　实现 egg-core 22</font>

<font style="color:#666666;">2．3．2　实现 egg-init 26</font>

<font style="color:#666666;">2．3．3　实现egg-cluster 30</font>

<font style="color:#666666;">2．4　Egg．js插件 33</font>

<font style="color:#666666;">2．4．1　egg-socket．io 33</font>

<font style="color:#666666;">2．4．2　原理解读 39</font>

<font style="color:#666666;">2．5　制作一个Egg．js插件 43</font>

**<font style="color:#666666;">第3章　构建后端API服务 52</font>**

<font style="color:#666666;">3．1　安装相关组件 52</font>

<font style="color:#666666;">3．2　发布一个插件 59</font>

<font style="color:#666666;">3．2．1　创建Flash插件 59</font>

<font style="color:#666666;">3．2．2　使用egg-msg-flash 72</font>

<font style="color:#666666;">3．2．3　使用egg-y-validator 73</font>

<font style="color:#666666;">3．3　规范化 73</font>

<font style="color:#666666;">3．3．1　添加新的scripts支持ESLint自修复 74</font>

<font style="color:#666666;">3．3．2　添加插件支持 74</font>

<font style="color:#666666;">3．3．3　prettier格式化工具 76</font>

<font style="color:#666666;">3．3．4　同步代码编辑器配置 76</font>

<font style="color:#666666;">3．4　第一个JSON请求 77</font>

<font style="color:#666666;">3．4．1　给全局添加一些方法 77</font>

<font style="color:#666666;">3．4．2　全局化一些东西 84</font>

<font style="color:#666666;">3．4．3　自动路由 86</font>

<font style="color:#666666;">3．4．4　创建 PostMan 测试 88</font>

<font style="color:#666666;">3．5　注册服务 91</font>

<font style="color:#666666;">3．5．1　Invitation模型 91</font>

<font style="color:#666666;">3．5．2　注释 93</font>

<font style="color:#666666;">3．5．3　User模型 96</font>

<font style="color:#666666;">3．5．4　修改控制器 97</font>

<font style="color:#666666;">3．5．5　添加验证逻辑 98</font>

<font style="color:#666666;">3．5．6　帮助方法 99</font>

<font style="color:#666666;">3．5．7　User服务 101</font>

<font style="color:#666666;">3．5．8　PostMan测试 103</font>

<font style="color:#666666;">3．6　登录服务 104</font>

<font style="color:#666666;">3．7　邮件与调试 115</font>

<font style="color:#666666;">3．7．1　理解发送邮件的原理 115</font>

<font style="color:#666666;">3．7．2　安装邮件插件 115</font>

<font style="color:#666666;">3．7．3　环境与调试 116</font>

<font style="color:#666666;">3．7．4　全局调试 118</font>

<font style="color:#666666;">3．7．5　VSCode全局调试 121</font>

<font style="color:#666666;">3．7．6　发送验证邮件 122</font>

<font style="color:#666666;">3．7．7　添加逻辑 125</font>

<font style="color:#666666;">3．7．8　验证 135</font>

<font style="color:#666666;">3．8　构建 RESTful API 137</font>

<font style="color:#666666;">3．8．1　什么是RESTful API 137</font>

<font style="color:#666666;">3．8．2　创建RESTController基础类便于继承 138</font>

<font style="color:#666666;">3．8．3　测试Images RESTful API 141</font>

<font style="color:#666666;">3．8．4　构建后台的REST路由 143</font>

<font style="color:#666666;">3．8．5　构建控制器 145</font>

<font style="color:#666666;">3．8．6　测试后台路由 148</font>

<font style="color:#666666;">3．8．7　关于验证 149</font>

<font style="color:#666666;">3．9　安全地开放API 151</font>

<font style="color:#666666;">3．10　实现OAuth接口 158</font>

<font style="color:#666666;">3．10．1　实现授权码官方文档所要求的接口 158</font>

<font style="color:#666666;">3．10．2　实现刷新验证码接口 167</font>

<font style="color:#666666;">3．10．3　实现 authenticate 所需接口 169</font>

<font style="color:#666666;">3．11　完善OAuth与测试 170</font>

<font style="color:#666666;">3．11．1　发放Token 170</font>

<font style="color:#666666;">3．11．2　新建客户端项目 172</font>

<font style="color:#666666;">3．11．3　测试OAuth 173</font>

<font style="color:#666666;">3．12　支付宝支付 176</font>

<font style="color:#666666;">3．12．1　什么是非对称加密 176</font>

<font style="color:#666666;">3．12．2　注册支付宝 176</font>

<font style="color:#666666;">3．12．3　生成非对称秘钥 176</font>

<font style="color:#666666;">3．12．4　实现 177</font>

<font style="color:#666666;">3．12．5　添加路由 180</font>

<font style="color:#666666;">3．12．6　内网穿透 180</font>

<font style="color:#666666;">3．12．7　测试 182</font>

<font style="color:#666666;">3．13　社会化登录 183</font>

**<font style="color:#666666;">第4章　构建后台管理页面 189</font>**

<font style="color:#666666;">4．1　后端开发 189</font>

<font style="color:#666666;">4．1．1　安装VSCode插件 189</font>

<font style="color:#666666;">4．1．2　获取脚手架 189</font>

<font style="color:#666666;">4．1．3　安装依赖 190</font>

<font style="color:#666666;">4．1．4　修改代码 190</font>

<font style="color:#666666;">4．1．5　跨域请求 191</font>

<font style="color:#666666;">4．1．6　修改后端代码支持跨域 192</font>

<font style="color:#666666;">4．1．7　在前端添加存储 198</font>

<font style="color:#666666;">4．2　模型列表 200</font>

<font style="color:#666666;">4．3　添加数据 209</font>

<font style="color:#666666;">4．4　修改逻辑 220</font>

**<font style="color:#666666;">第5章　前端界面设计与实现 228</font>**

<font style="color:#666666;">5．1　搭建前端开发环境 228</font>

<font style="color:#666666;">5．1．1　开始 228</font>

<font style="color:#666666;">5．1．2　创建Header头部 229</font>

<font style="color:#666666;">5．1．3　将变量提取出来 234</font>

<font style="color:#666666;">5．1．4　添加路径重写 235</font>

<font style="color:#666666;">5．2　AppFooter组件 237</font>

<font style="color:#666666;">5．2．1　做一些配置 237</font>

<font style="color:#666666;">5．2．2　创建src/components/layouts/AppFooter．vue 238</font>

<font style="color:#666666;">5．2．3　网络识别信息 247</font>

<font style="color:#666666;">5．2．4　修改一下全局样式 247</font>

<font style="color:#666666;">5．2．5　查看页面 248</font>

<font style="color:#666666;">5．2．6　提升编译速度 248</font>

<font style="color:#666666;">5．3　首页 249</font>

<font style="color:#666666;">5．4　替换成为真实数据 269</font>

<font style="color:#666666;">5．4．1　完成后端Image API 269</font>

<font style="color:#666666;">5．4．2　修改首页的代码 271</font>

<font style="color:#666666;">5．4．3　添加API逻辑 276</font>

<font style="color:#666666;">5．4．4　效果 278</font>

<font style="color:#666666;">5．5　图片详情页 278</font>

<font style="color:#666666;">5．5．1　创建路由 279</font>

<font style="color:#666666;">5．5．2　安装依赖 279</font>

<font style="color:#666666;">5．5．3　创建视图 279</font>

<font style="color:#666666;">5．5．4　添加插件 285</font>

<font style="color:#666666;">5．5．5　创建评论组件 286</font>

<font style="color:#666666;">5．5．6　测试 290</font>

<font style="color:#666666;">5．5．7　关于服务端访问DOM 290</font>

<font style="color:#666666;">5．6　注册页面 294</font>

<font style="color:#666666;">5．6．1　注册路由 294</font>

<font style="color:#666666;">5．6．2　新建signup．vue页面 295</font>

<font style="color:#666666;">5．6．3　增强错误提示 299</font>

<font style="color:#666666;">5．7　登录页面 299</font>

<font style="color:#666666;">5．8　完善详情与评论 310</font>

<font style="color:#666666;">5．9　个人中心 321</font>

<font style="color:#666666;">5．10　创建图片 336</font>

<font style="color:#666666;">5．10．1　创建又拍云存储 336</font>

<font style="color:#666666;">5．10．2　添加后端API 338</font>

<font style="color:#666666;">5．10．3　前端界面 340</font>

<font style="color:#666666;">5．10．4　测试 348</font>

<font style="color:#666666;">5．11　团队 349</font>

<font style="color:#666666;">5．11．1　功能是如何工作的 350</font>

<font style="color:#666666;">5．11．2　数据库 350</font>

<font style="color:#666666;">5．11．3　后端 356</font>

<font style="color:#666666;">5．11．4　前端 363</font>

<font style="color:#666666;">5．11．5　测试 372</font>

**<font style="color:#666666;">第6章　部署与运维 374</font>**

<font style="color:#666666;">6．1　认识Docker 374</font>

<font style="color:#666666;">6．1．1　解决了什么问题 374</font>

<font style="color:#666666;">6．1．2　使用Docker的流程 375</font>

<font style="color:#666666;">6．1．3　安装Docker 378</font>

<font style="color:#666666;">6．1．4　使用加速器 378</font>

<font style="color:#666666;">6．1．5　下载一个基础镜像 379</font>

<font style="color:#666666;">6．1．6　hello world 379</font>

<font style="color:#666666;">6．2　手动构建镜像 380</font>

<font style="color:#666666;">6．3　编写Dockerfile文件 384</font>

<font style="color:#666666;">6．4　Docker Compose 387</font>

<font style="color:#666666;">6．4．1　安装docker-compose 387</font>

<font style="color:#666666;">6．4．2　命令行接口 388</font>

<font style="color:#666666;">6．4．3　Egg．js简单实例 389</font>

<font style="color:#666666;">6．4．4　增加服务 391</font>

<font style="color:#666666;">6．5　集群 396</font>

<font style="color:#666666;">6．5．1　Docker集群 396</font>

<font style="color:#666666;">6．5．2　集群初始化 396</font>

<font style="color:#666666;">6．5．3　实例 397</font>

**<font style="color:#666666;">6．6　持续部署 400</font>**

<font style="color:#666666;">6．6．1　部署主机免密码登录 400</font>

<font style="color:#666666;">6．6．2　客户端钩子 401</font>

<font style="color:#666666;">6．6．3　使用服务端钩子进行部署 403</font>

<font style="color:#666666;">6．6．4　使用 shipit 404</font>

<font style="color:#666666;">6．6．5　使用 Ansible 部署 406</font>

**<font style="color:#666666;">6．7　持续集成 409</font>**

<font style="color:#666666;">6．8　Kubernetes集群 423</font>

<font style="color:#666666;">6．8．1　简单使用 423</font>

<font style="color:#666666;">6．8．2　如何创建应用 425</font>

<font style="color:#666666;">6．8．3　命令行管理 430</font>

<font style="color:#666666;">6．8．4　通过UI创建应用 433</font>

<font style="color:#666666;">6．8．5　添加持续集成 439</font>

<font style="color:#666666;">6．8．6　固定IP地址 441</font>

<font style="color:#666666;">6．8．7　部署前端 442</font>

**<font style="color:#666666;">第7章　性能分析与优化 448</font>**

<font style="color:#666666;">7．1　服务器性能分析与测试 448</font>

<font style="color:#666666;">7．2　用户追踪 458</font>

<font style="color:#666666;">7．2．1　百度分析 458</font>

<font style="color:#666666;">7．2．2　Google分析 460</font>

<font style="color:#666666;">7．2．3　其他付费服务 461</font>

<font style="color:#666666;">7．3　前端性能分析与优化 461</font>

<font style="color:#666666;">7．3．1　lighthouse 461</font>

<font style="color:#666666;">7．3．2　sonarwhal 462</font>

<font style="color:#666666;">7．3．3　图片压缩 464</font>

<font style="color:#666666;">7．3．4　错误上报 465</font>

<font style="color:#666666;">7．3．5　接收用户反馈 466</font>



> 更新: 2021-02-23 10:04:55  
> 原文: <https://www.yuque.com/u3641/dxlfpu/kagb56>