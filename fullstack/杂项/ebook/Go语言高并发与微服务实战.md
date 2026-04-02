# Go 语言高并发与微服务实战

# 第1章 云原生架构
+ <font style="color:#4A4A4A;">1.1 云计算的历史 1</font>
    - <font style="color:#4A4A4A;">1.1.1 云计算的基础：</font><font style="color:#4A4A4A;">虚拟化技术 1</font>
    - <font style="color:#4A4A4A;">1.1.2 基于虚拟机的云计算 3</font>
    - <font style="color:#4A4A4A;">1.1.3 容器的横空出世和容器编排大战 5</font>
    - <font style="color:#4A4A4A;">1.1.4云计算演进总结 6</font>

## 1.2 云原生是什么 7
    - <font style="color:#4A4A4A;">1.2.1 云原生出现的背景 7</font>
    - <font style="color:#4A4A4A;">1.2.2 云原生的定义 8</font>
    - <font style="color:#4A4A4A;">1.2.3 云原生与12因素 9</font>

## 1.3 云原生的基础架构 11
### 1.3.1 微服务 11
### 1.3.2 容器 12
### 1.3.3 服务网格 13
### 1.3.4 DevOps 14
+ <font style="color:#4A4A4A;">1.4 小结 15</font>

# 第2章 微服务概述
+ <font style="color:#4A4A4A;">2.1 系统架构的演进 16</font>
    - <font style="color:#4A4A4A;">2.1.1 单体架构 16</font>
    - <font style="color:#4A4A4A;">2.1.2 垂直分层架构 17</font>
    - <font style="color:#4A4A4A;">2.1.3 SOA 面向服务架构 17</font>
    - <font style="color:#4A4A4A;">2.1.4 微服务架构 19</font>
    - <font style="color:#4A4A4A;">2.1.5 云原生架构 21</font>

## <font style="color:#4A4A4A;">2.2 常见的微服务框架 22</font>
### <font style="color:#4A4A4A;">2.2.1 Java中的Spring Cloud与Dubbo框架 22</font>
### <font style="color:#4A4A4A;">2.2.2 Go语言中的Go Kit与Go Micro框架 24</font>
## <font style="color:#4A4A4A;">2.3 微服务设计的六大原则 27</font>
## <font style="color:#4A4A4A;">2.4 领域驱动设计 28</font>
    - <font style="color:#4A4A4A;">2.4.1 设计微服务的困境 28</font>
    - <font style="color:#4A4A4A;">2.4.2 解困之法：领域驱动设计（DDD） 29</font>
    - <font style="color:#4A4A4A;">2.4.3 DDD的应用领域 30</font>
    - <font style="color:#4A4A4A;">2.4.4 DDD领域划分 31</font>
    - <font style="color:#4A4A4A;">2.4.5 微服务架构中的团队组织和管理 33</font>
+ <font style="color:#4A4A4A;">2.5 小结 34</font>

# 第3章 Go语言基础
+ <font style="color:#4A4A4A;">3.1 Go语言介绍 35</font>
+ <font style="color:#4A4A4A;">3.2 环境安装 36</font>
    - <font style="color:#4A4A4A;">3.2.1 Go开发包安装 36</font>
    - <font style="color:#4A4A4A;">3.2.2 第一个Go语言程序 38</font>
    - <font style="color:#4A4A4A;">3.2.3 编译工具 40</font>
+ <font style="color:#4A4A4A;">3.3 基本语法 41</font>
    - <font style="color:#4A4A4A;">3.3.1 变量的声明与初始化 41</font>
    - <font style="color:#4A4A4A;">3.3.2 原生数据类型 43 【实例3-1】分别以byte和rune的方式遍历字符串 44</font>
    - <font style="color:#4A4A4A;">3.3.3 指针 45 【实例3-2】使用flag从命令行中读取参数 47</font>
    - <font style="color:#4A4A4A;">3.3.4 常量与类型别名 48</font>
    - <font style="color:#4A4A4A;">3.3.5 分支与循环控制 49</font>
+ <font style="color:#4A4A4A;">3.4 Go中常用的容器 50</font>
    - <font style="color:#4A4A4A;">3.4.1 数组 50</font>
    - <font style="color:#4A4A4A;">3.4.2 切片 51 【实例3-3】切片的动态扩容 53</font>
    - <font style="color:#4A4A4A;">3.4.3 列表与字典 54</font>
    - <font style="color:#4A4A4A;">3.4.4 容器遍历 57 【实例3-4】对给出的数组nums、切片slis和字典tmpMap分别进行遍历。57</font>
+ <font style="color:#4A4A4A;">3.5 函数与接口 58</font>
    - <font style="color:#4A4A4A;">3.5.1 函数声明和参数传递 58</font>
    - <font style="color:#4A4A4A;">3.5.2 匿名函数和闭包 59 【实例3-5】使用回调函数处理字符串 59 【实例3-6】用闭包的特性实现一个简单的计数器 60</font>
    - <font style="color:#4A4A4A;">3.5.3 接口声明和嵌套 61</font>
    - <font style="color:#4A4A4A;">3.5.4 函数体实现接口 62</font>
+ <font style="color:#4A4A4A;">3.6 结构体和方法 62</font>
    - <font style="color:#4A4A4A;">3.6.1 结构体的定义 63</font>
    - <font style="color:#4A4A4A;">3.6.2 结构体的实例化和初始化 63</font>
    - <font style="color:#4A4A4A;">3.6.3 方法与接收器 64 【实例3-7】为Person结构体添加修改姓名和输出个人信息两个方法 65</font>
    - <font style="color:#4A4A4A;">3.6.4 结构体实现接口 66 【实例3-8】使用一个结构体同时实现Cat和Dog接口 66</font>
    - <font style="color:#4A4A4A;">3.6.5 内嵌和组合 67 【实例3-9】内嵌不同结构体表现不同行为 68</font>
+ <font style="color:#4A4A4A;">3.7 小结 69</font>

# 第4章 进阶——Go语言高级特性
+ <font style="color:#4A4A4A;">4.1 依赖管理 70</font>
    - <font style="color:#4A4A4A;">4.1.1 包管理 70</font>
    - <font style="color:#4A4A4A;">4.1.2 GOPATH 72</font>
    - <font style="color:#4A4A4A;">4.1.3 Go Modules 73</font>
+ <font style="color:#4A4A4A;">4.2 反射基础 73</font>
    - <font style="color:#4A4A4A;">4.2.1 reflect.Type 类型对象 74</font>
    - <font style="color:#4A4A4A;">4.2.2 类型对象reflect.StructField和reflect.Method 76</font>
    - <font style="color:#4A4A4A;">4.2.3 reflect.Value 反射值对象 78 【实例4-1】使用反射调用接口方法 80</font>
+ <font style="color:#4A4A4A;">4.3 并发模型 82</font>
    - <font style="color:#4A4A4A;">4.3.1 并发与并行 82</font>
    - <font style="color:#4A4A4A;">4.3.2 CSP并发模型 82</font>
    - <font style="color:#4A4A4A;">4.3.3 常见的线程模型 83</font>
    - <font style="color:#4A4A4A;">4.3.4 MPG线程模型概述 85</font>
+ <font style="color:#4A4A4A;">4.4 并发实践 87</font>
    - <font style="color:#4A4A4A;">4.4.1 协程goroutine 87</font>
    - <font style="color:#4A4A4A;">4.4.2 通道channel 89</font>  
<font style="color:#4A4A4A;">【实例4-2】协程使用channel发送和接收数据 90 </font>
    - <font style="color:#4A4A4A;">实例4-3】使用带缓冲区的channel 91</font>  
<font style="color:#4A4A4A;">【实例4-4】使用switch从多个channel中读取数据 92</font>
    - <font style="color:#4A4A4A;">4.4.3 sync同步包 94</font>  
<font style="color:#4A4A4A;">【实例4-5】使用sync.Mutex控制多goroutine串行执行 94</font>  
<font style="color:#4A4A4A;">【实例4-6】sync.RWMutex允许多读和单写 95</font>  
<font style="color:#4A4A4A;">【实例4-7】sync.WaitGroup阻塞主goroutine直到其他goroutine执行结束 97 【实例4-8】使用sync.Map并发添加数据 98</font>
+ <font style="color:#4A4A4A;">4.5 小结 99</font>

# <font style="color:#4A4A4A;">第5章 构建Go Web服务器</font>
+ <font style="color:#4A4A4A;">5.1 Web的工作原理 100</font>
    - <font style="color:#4A4A4A;">5.1.1 HTTP协议详解 100</font>
    - <font style="color:#4A4A4A;">5.1.2 访问Web站点的过程 103</font>
+ <font style="color:#4A4A4A;">5.2 使用Go语言构建服务器 104</font>  
<font style="color:#4A4A4A;">【实例5-1】快速搭建一个Go Web服务器 104</font>
+ <font style="color:#4A4A4A;">5.3 接收和处理请求 105</font>
    - <font style="color:#4A4A4A;">5.3.1 Web工作的几个概念 106</font>
    - <font style="color:#4A4A4A;">5.3.2 处理器处理请求 107</font>
    - <font style="color:#4A4A4A;">5.3.3 解析请求体 109</font>  
<font style="color:#4A4A4A;">【实例5-2】Go Web请求体解析 109</font>
    - <font style="color:#4A4A4A;">5.3.4 返回响应体 111</font>  
<font style="color:#4A4A4A;">【实例5-3】返回响应体实践 112</font>

## <font style="color:#4A4A4A;">5.4 实践案例：Golang Web框架Gin实践 113</font>
## <font style="color:#4A4A4A;">5.5 服务端数据存储 116</font>
    - <font style="color:#4A4A4A;">5.5.1 内存存储 116</font>  
<font style="color:#4A4A4A;">【实例5-4】服务端基于内存的存储方式实践 116</font>
    - <font style="color:#4A4A4A;">5.5.2 database/sql接口 118</font>
    - <font style="color:#4A4A4A;">5.5.3 关系数据库存储（MySQL） 118</font>  
<font style="color:#4A4A4A;">【实例5-5】服务端基于MySQL的存储方式实践 119</font>
    - <font style="color:#4A4A4A;">5.5.4 Nosql数据库存储（MongoDB） 120</font>  
<font style="color:#4A4A4A;">【实例5-6】服务端基于MongoDB的存储方式实践 121</font>

## <font style="color:#4A4A4A;">5.6 Golang ORM框架beego实践 122</font>
+ <font style="color:#4A4A4A;">5.7 小结 125</font>

# <font style="color:#4A4A4A;">第6章 服务注册与发现</font>
+ <font style="color:#4A4A4A;">6.1 服务注册与发现的基本原理 126</font>
    - <font style="color:#4A4A4A;">6.1.1 服务注册与发现中心的职责 126</font>
    - <font style="color:#4A4A4A;">6.1.2 服务实例注册服务信息 127</font>
    - <font style="color:#4A4A4A;">6.1.3 CAP原理 127</font>
+ <font style="color:#4A4A4A;">6.2 常用的服务注册与发现框架 128</font>
    - <font style="color:#4A4A4A;">6.2.1 基于Raft算法的开箱即用服务发现组件Consul 128</font>
    - <font style="color:#4A4A4A;">6.2.2 基于HTTP协议的分布式key/Value存储组件Etcd 130</font>
    - <font style="color:#4A4A4A;">6.2.3 重量级一致性服务组件Zookeeper 131</font>
    - <font style="color:#4A4A4A;">6.2.4 服务注册与发现组件的对比与选型 132</font>
+ <font style="color:#4A4A4A;">6.3 Consul安装和接口定义 133</font>
    - <font style="color:#4A4A4A;">6.3.1 Consul的安装与启动 133</font>
    - <font style="color:#4A4A4A;">6.3.2 Go-kit项目结构 134</font>
    - <font style="color:#4A4A4A;">6.3.3 服务注册与发现接口 135</font>
    - <font style="color:#4A4A4A;">6.3.4 项目的总体结构 135</font>
+ <font style="color:#4A4A4A;">6.4 实践案例：直接使用HTTP的方式和Consul交互 140</font>
    - <font style="color:#4A4A4A;">6.4.1 服务注册与健康检查 142</font>
    - <font style="color:#4A4A4A;">6.4.2 服务注销 144</font>
    - <font style="color:#4A4A4A;">6.4.3 服务发现 146</font>
+ <font style="color:#4A4A4A;">6.5 实践案例：借助Go-kit服务注册与发现包和Consul交互 147</font>
    - <font style="color:#4A4A4A;">6.5.1 服务注册与健康检查 148</font>
    - <font style="color:#4A4A4A;">6.5.2 服务注销 149</font>
    - <font style="color:#4A4A4A;">6.5.3 服务发现 150</font>
    - <font style="color:#4A4A4A;">6.5.4 服务实例信息缓存 150</font>
    - <font style="color:#4A4A4A;">6.5.5 MyDiscoverClient和KitDiscoverClient的比较 153</font>
+ <font style="color:#4A4A4A;">6.6 实践案例：基于服务注册与发现的string-service 153</font>
    - <font style="color:#4A4A4A;">6.6.1 项目结构 153</font>
    - <font style="color:#4A4A4A;">6.6.2 各层构建 154</font>
+ <font style="color:#4A4A4A;">6.7 小结 162</font>

# <font style="color:#4A4A4A;">第7章 远程过程调用RPC</font>
## <font style="color:#4A4A4A;">7.1 RPC机制和实现过程 164</font>
### <font style="color:#4A4A4A;">7.1.1 RPC机制 164</font>
### <font style="color:#4A4A4A;">7.1.2 传递参数 167</font>
    - <font style="color:#4A4A4A;">7.1.3 通信协议制定 168</font>
    - <font style="color:#4A4A4A;">7.1.4 出错和超时处理 170</font>
    - <font style="color:#4A4A4A;">7.1.5 通用RPC接口 171</font>
+ <font style="color:#4A4A4A;">7.2 简易的Go语言原生RPC 172</font>
    - <font style="color:#4A4A4A;">7.2.1 实践案例：Go语言RPC过程调用实践 172</font>
    - <font style="color:#4A4A4A;">7.2.2 服务端注册实现原理分析 175</font>
    - <font style="color:#4A4A4A;">7.2.3 服务端处理RPC请求原理分析 178</font>
    - <font style="color:#4A4A4A;">7.2.4 客户端发送RPC请求原理分析 182</font>
    - <font style="color:#4A4A4A;">7.2.5 资源重用 187</font>
+ <font style="color:#4A4A4A;">7.3 高性能的gRPC 188</font>
    - <font style="color:#4A4A4A;">7.3.1 gRPC的安装 189</font>
    - <font style="color:#4A4A4A;">7.3.2 实践案例：gRPC过程调用实践 190</font>
    - <font style="color:#4A4A4A;">7.3.3 流式编程 193 【实例7-1】gRPC流式请求 193</font>
+ <font style="color:#4A4A4A;">7.4 便捷的Go-kit RPC 196</font>
    - <font style="color:#4A4A4A;">7.4.1 Go-kit简介 196</font>
    - <font style="color:#4A4A4A;">7.4.2 实践案例：Go-kit过程调用实践 197</font>
+ <font style="color:#4A4A4A;">7.5 小结 202</font>

# <font style="color:#4A4A4A;">第8章 分布式配置中心</font>
+ <font style="color:#4A4A4A;">8.1 如何管理分布式应用的配置 203</font>
+ <font style="color:#4A4A4A;">8.2 常见分布式配置中心开源组件 204</font>
    - <font style="color:#4A4A4A;">8.2.1 Spring Cloud Config 204</font>
    - <font style="color:#4A4A4A;">8.2.2 Apollo 205</font>
    - <font style="color:#4A4A4A;">8.2.3 Disconf 208</font>
    - <font style="color:#4A4A4A;">8.2.4 分布式配置中心的对比 210</font>
+ <font style="color:#4A4A4A;">8.3 应用Spring Cloud Config统一管理配置 210</font>
    - <font style="color:#4A4A4A;">8.3.1 搭建Spring Cloud Config Server 210</font>
    - <font style="color:#4A4A4A;">8.3.2 Viper介绍 213 【实例8-1】Viper实现读取本地配置信息 214</font>
    - <font style="color:#4A4A4A;">8.3.3 实战案例：动手实现Spring Cloud Config的Go语言客户端 216</font>
+ <font style="color:#4A4A4A;">8.4 实践案例：实现配置的热更新 219</font>
    - <font style="color:#4A4A4A;">8.4.1 如何实现热更新 219</font>
    - <font style="color:#4A4A4A;">8.4.2 Go语言客户端改进 220</font>
    - <font style="color:#4A4A4A;">8.4.3 结果验证 223</font>
+ <font style="color:#4A4A4A;">8.5 配置信息的加密解密 224</font>
    - <font style="color:#4A4A4A;">8.5.1 JCE环境安装 225</font>
    - <font style="color:#4A4A4A;">8.5.2 对称加密与解密 225</font>
    - <font style="color:#4A4A4A;">8.5.3 非对称加密与解密 226</font>
+ <font style="color:#4A4A4A;">8.6 小结 227</font>

# <font style="color:#4A4A4A;">第9章 微服务网关</font>
+ <font style="color:#4A4A4A;">9.1 微服务网关介绍与功能特性 228</font>
+ <font style="color:#4A4A4A;">9.2 实践案例：自己动手实现一个网关 231</font>
    - <font style="color:#4A4A4A;">9.2.1 实现思路 231</font>
    - <font style="color:#4A4A4A;">9.2.2 编写反向代理方法 232</font>
    - <font style="color:#4A4A4A;">9.2.3 编写入口方法 233</font>
    - <font style="color:#4A4A4A;">9.2.4 运行 235</font>
    - <font style="color:#4A4A4A;">9.2.5 测试 235</font>
+ <font style="color:#4A4A4A;">9.3 API网关选型 235</font>
    - <font style="color:#4A4A4A;">9.3.1 标配组件：Nginx网关 236</font>
    - <font style="color:#4A4A4A;">9.3.2 Java前置网关服务最佳选型：Netflix Zuul 237</font>
    - <font style="color:#4A4A4A;">9.3.3 高可用服务网关：Mashape Kong 239</font>
    - <font style="color:#4A4A4A;">9.3.4 三种常用API网关组件的性能对比 240</font>
+ <font style="color:#4A4A4A;">9.4 Kong接入 240</font>
    - <font style="color:#4A4A4A;">9.4.1 为什么使用Kong 240</font>
    - <font style="color:#4A4A4A;">9.4.2 Kong安装实践 241 【实例9-1】Docker方式安装Kong 242</font>
    - <font style="color:#4A4A4A;">9.4.3 创建服务 244 9.4.4 创建路由 245</font>
+ <font style="color:#4A4A4A;">9.5 安装Kong插件 246</font>
    - <font style="color:#4A4A4A;">9.5.1 跨域身份验证：JWT认证插件 246</font>
    - <font style="color:#4A4A4A;">9.5.2 系统监控报警：Prometheus可视化监控插件 248</font>
    - <font style="color:#4A4A4A;">9.5.3 实时链路数据追踪：Zipkin插件 250</font>
    - <font style="color:#4A4A4A;">9.5.4 进阶应用：自定义Kong插件 252 【实例9-2】自定义鉴权插件token-auth 252</font>
+ <font style="color:#4A4A4A;">9.6 小结 257</font>

# <font style="color:#4A4A4A;">第10章 微服务的容错处理与负载均衡</font>
+ <font style="color:#4A4A4A;">10.1 服务熔断 258</font>
    - <font style="color:#4A4A4A;">10.1.1 分布式系统中的服务雪崩 258</font>
    - <font style="color:#4A4A4A;">10.1.2 服务熔断保障系统可用性 260</font>
    - <font style="color:#4A4A4A;">10.1.3 断路器 261</font>
+ <font style="color:#4A4A4A;">10.2 负载均衡 262</font>
    - <font style="color:#4A4A4A;">10.2.1 负载均衡类型 262</font>
    - <font style="color:#4A4A4A;">10.2.2 负载均衡算法 262</font>
+ <font style="color:#4A4A4A;">10.3 实践案例：服务熔断和负载均衡使用 263</font>
    - <font style="color:#4A4A4A;">10.3.1 负载均衡器 263</font>
    - <font style="color:#4A4A4A;">10.3.2 服务编写 264</font>
    - <font style="color:#4A4A4A;">10.3.3 使用Go-kit Hystrix中间件 270 【实例10-1】使用Go-kit中Hystrix中间件修饰Endpoint 270</font>
+ <font style="color:#4A4A4A;">10.4 Hystrix详解 271</font>
    - <font style="color:#4A4A4A;">10.4.1 Hystrix基本使用 272</font>
    - <font style="color:#4A4A4A;">10.4.2 运行流程 273</font>
    - <font style="color:#4A4A4A;">10.4.3 常用参数配置 274</font>
+ <font style="color:#4A4A4A;">10.5 Hystrix监控面板 275</font>
    - <font style="color:#4A4A4A;">10.5.1 获取Hystirx命令调用信息 275</font>
    - <font style="color:#4A4A4A;">10.5.2 使用Hystrix Dashboard可视化面板 277</font>
+ <font style="color:#4A4A4A;">10.6 实践案例：在网关中添加Hystrix熔断和负载均衡 279</font>
+ <font style="color:#4A4A4A;">10.7 小结 282</font>

# <font style="color:#4A4A4A;">第11章 统一认证与授权</font>
+ <font style="color:#4A4A4A;">11.1 微服务安全的挑战和现状 283</font>
    - <font style="color:#4A4A4A;">11.2 常见的认证与授权方案 283</font>
    - <font style="color:#4A4A4A;">11.2.1 当前行业授权标准OAuth2 283</font>
    - <font style="color:#4A4A4A;">11.2.2 数据共享的分布式Session 287</font>
    - <font style="color:#4A4A4A;">11.2.3 安全传输对象JWT 288</font>
+ <font style="color:#4A4A4A;">11.3 实践案例：基于OAuth2协议和JWT实现一套简单 的认证和授权系统 290</font>
    - <font style="color:#4A4A4A;">11.3.1 系统整体架构 290</font>
    - <font style="color:#4A4A4A;">11.3.2 授权服务器 291 </font>
    - <font style="color:#4A4A4A;">11.3.3 资源服务器 311</font>
+ <font style="color:#4A4A4A;">11.4 小结 317</font>

# <font style="color:#4A4A4A;">第12章 分布式链路追踪</font>
+ <font style="color:#4A4A4A;">12.1 诊断分布式系统的问题 318</font>
    - <font style="color:#4A4A4A;">12.1.1 为什么需要分布式链路追踪 318</font>
    - <font style="color:#4A4A4A;">12.1.2 什么是分布式链路追踪 319</font>
    - <font style="color:#4A4A4A;">12.1.3 分布式链路追踪规范：OpenTracing 320</font>
    - <font style="color:#4A4A4A;">12.1.4 分布式链路追踪的基础概念 321</font>
+ <font style="color:#4A4A4A;">12.2 几种流行的分布式链路追踪组件 323</font>
    - <font style="color:#4A4A4A;">12.2.1 简单易上手的Twitter Zipkin 323</font>
    - <font style="color:#4A4A4A;">12.2.2 云原生链路监控组件Uber Jaeger 324</font>
    - <font style="color:#4A4A4A;">12.2.3 探针性能低损耗的SkyWalking 326</font>
    - <font style="color:#4A4A4A;">12.2.4 链路统计详细的Pinpoint 327</font>
    - <font style="color:#4A4A4A;">12.2.5 4种分布式链路追踪组件的性能对比 328</font>
+ <font style="color:#4A4A4A;">12.3 实践案例：应用Zipkin追踪Go微服务 329</font>
    - <font style="color:#4A4A4A;">12.3.1 微服务中集成zipkin-go 330</font>
    - <font style="color:#4A4A4A;">12.3.2 Go-kit微服务框架集成Zipkin实现链路追踪 337</font>
+ <font style="color:#4A4A4A;">12.4 小结 346</font>

# <font style="color:#4A4A4A;">第13章 综合实战：秒杀系统的设计与实现</font>
+ <font style="color:#4A4A4A;">13.1 秒杀系统简介 347</font>
+ <font style="color:#4A4A4A;">13.2 项目架构简介 350</font>
    - <font style="color:#4A4A4A;">13.2.1 项目简述 350</font>
    - <font style="color:#4A4A4A;">13.2.2 架构信息 350</font>
    - <font style="color:#4A4A4A;">13.2.3 流程简介 352</font>
+ <font style="color:#4A4A4A;">13.3 整合升级：各个微服务脚手架的组装 353</font>
    - <font style="color:#4A4A4A;">13.3.1 服务注册和发现 353</font>
    - <font style="color:#4A4A4A;">13.3.2 负载均衡策略 357 13.3.3 RPC客户端装饰器 360</font>
    - <font style="color:#4A4A4A;">13.3.4 限流 362 </font>
    - <font style="color:#4A4A4A;">13.3.5 Go语言Redis使用简介 364</font>
    - <font style="color:#4A4A4A;">13.3.6 Zookeeper集成 365</font>
    - <font style="color:#4A4A4A;">13.3.7 Go-kit开发利器Truss 367</font>
+ <font style="color:#4A4A4A;">13.4 秒杀核心逻辑 368</font>
    - <font style="color:#4A4A4A;">13.4.1 秒杀业务系统 369</font>
    - <font style="color:#4A4A4A;">13.4.2 秒杀核心系统 380</font>
    - <font style="color:#4A4A4A;">13.4.3 秒杀管理系统 384</font>
+ <font style="color:#4A4A4A;">13.5 运行展示与性能压测 386</font>
    - <font style="color:#4A4A4A;">13.5.1 Consul截图 386</font>
    - <font style="color:#4A4A4A;">13.5.2 查看服务的配置文件 387</font>
    - <font style="color:#4A4A4A;">13.5.3 zipkin主页信息 388</font>
    - <font style="color:#4A4A4A;">13.5.4 压测实验 389</font>
+ <font style="color:#4A4A4A;">13.6 小结 392</font>



> 更新: 2021-02-28 11:40:36  
> 原文: <https://www.yuque.com/u3641/dxlfpu/egyg3y>