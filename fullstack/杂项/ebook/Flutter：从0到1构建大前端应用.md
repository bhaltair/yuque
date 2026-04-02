# Flutter：从0到1构建大前端应用

> 何瑞君，移动端资深架构师，擅长Android、HTML5、React Native、Flutter等技术开发。GitHub重度使用者，热爱开源项目和技术文章写作。目前就职于平安银行。
>



> 和作者相识多年，从刚开始的Android原生开发，到后来的React Native开发，再到现在的Flutter开发，他都第一时间涉猎。他那种奋勇争先的精神，对新技术布道的热忱，令人敬佩。从书中精挑细选的示例和对各个技术点细致入微的讲解，可以感受到作者为本书倾注了诸多心血。本书可以称得上是Flutter入门和进阶的佳作。
>
> ——喜马拉雅大前端负责人 庞国庆
>



第1章 Flutter简介 1

1.1 Flutter的优势 1

1.2 对比其他技术 2

1.3 Flutter架构 3

1.3.1 Flutter Framework 3

1.3.2 Flutter Engine 4

1.4 开发环境搭建 4

1.4.1 Mac上的环境搭建 4

1.4.2 在Mac上获取SDK并设置环境变量 5

1.4.3 安装Xcode与运行模拟器 6

1.4.4 安装Android Studio 7

1.4.5 在Android Studio上安装Flutter开发插件 8

1.4.6 安装VSCode与Flutter开发插件 9

1.4.7 IDE的选择 11

1.4.8 使用Flutter诊断工具检查Flutter开发环境 11

1.4.9 创建Demo工程并体验热重载 12

1.5 Flutter升级 14

本章小结 15

**第2章 Dart语言入门 16**

2.1 应用场景 16

2.1.1 SDK安装和升级 17

2.1.2 编写一个HelloWorld并运行 17

2.2 变量与常量 18

2.2.1 变量 18

2.2.2 常量 18

2.2.3 内置类型 19

2.2.4 数值型 19

2.2.5 数值型操作 20

2.2.6 字符串 21

2.2.7 字符串操作 21

2.2.8 布尔型 23

2.2.9 List与数组 23

2.2.10 Map 24

2.2.11 dynamic和Object 25

2.3 算符 26

2.4 异常捕获 27

2.5 函数Function 28

2.5.1 main函数 28

2.5.2 可选参数 28

2.5.3 必传参数 29

2.5.4 可选的位置参数 29

2.5.5 默认参数 29

2.5.6 函数作为参数传递 30

2.5.7 函数作为变量 30

2.6 异步编程 30

2.6.1 Future是什么 31

2.6.2 async和await 31

2.6.3 继承、接口实现和混合 33

2.6.4 泛型 37

本章小结 39

**第3章 一切皆组件 40**

3.1 基础组件（Basic widgets） 42

3.1.1 Text 43

3.1.2 Icon 43

3.1.3 Image 45

3.1.4 Button 45

3.1.5 FlutterLogo 47

3.2 单一子元素组件（Single-child） 48

3.2.1 Container 48

3.2.2 Container的约束 49

3.2.3 SingleChildScrollView 52

3.2.4 FittedBox 53

3.2.5 FractionallySizedBox 54

3.2.6 ConstrainedBox 55

3.2.7 Baseline 56

3.2.8 IntrinsicWidth和IntrinsicHeight 58

3.3 多子元素组件（Multi-child） 58

3.3.1 Scaffold 58

3.3.2 AppBar 59

3.3.3 Row和Column 61

3.3.4 ListView 64

3.3.5 GridView 69

3.3.6 CustomScrollView 70

3.3.7 Flex 73

3.3.8 Wrap 75

3.4 状态管理 77

3.4.1 Widget树 78

3.4.2 Context 79

3.4.3 StatelessWidget 80

3.4.4 StatefulWidget 80

3.4.5 StatefulWidget的组成 81

3.4.6 State 82

3.4.7 State生命周期 82

3.4.8 Widget的唯一身份标识：key 88

3.4.9 InheritedWidget 89

3.5 包管理 93

3.6 常用代码段效果 94

3.6.1 案例一：侧滑效果 95

3.6.2 案例二：登录界面 96

3.6.3 案例三：轮播图效果 96

3.6.4 案例四：图片浏览器的相册效果 97

3.6.5 案例五：全局主题设置 97

本章小结 98

**第4章 事件处理 99**

4.1 原始指针事件 99

4.1.1 基本用法 99

4.1.2 忽略事件 102

4.2 GestureDetector 105

4.2.1 基本用法 105

4.2.2 常用事件 106

4.2.3 拖曳和缩放效果 109

4.2.4 事件竞争与手势冲突 112

4.2.5 手势识别器 114

4.3 事件原理与分发机制 117

4.4 事件通知 122

本章小结 125

**第5章 动画 126**

5.1 动画原理及概述 126

5.1.1 Animation 127

5.1.2 Animatable 127

5.1.3 AnimationController 128

5.1.4 Tween 130

5.1.5 Tween.animate 133

5.1.6 Curve 133

5.2 动画的封装与简化 136

5.2.1 AnimatedWidget 136

5.2.2 AnimatedBuilder 137

5.3 Hero动画 141

5.3.1 基本用法 141

5.3.2 实现原理 143

5.4 交错动画 145

5.5 动画示例 151

5.5.1 自定义加载动画 151

5.5.2 实现动画效果 153

5.5.3 Dialog加载框 157

5.5.4 测试加载框效果 159

本章小结 161

**第6章 使用网络技术与异步编程 162**

6.1 网络协议简介 162

6.1.1 HTTP协议简介 163

6.1.2 HTTP 2.0能给我们带来什么 164

6.1.3 HTTPS 166

6.2 网络编程 167

6.2.1 HttpClient 167

6.2.2 http库 170

6.3 JSON解析 171

6.3.1 JSON转成Dart对象 172

6.3.2 一个完整的例子 173

6.3.3 根据JSON用工具生成实体类 175

6.4 dio库 176

6.4.1 基本用法 177

6.4.2 dio单例 177

6.4.3 dio拦截器 178

6.4.4 dio拦截器链 180

6.4.5 dio适配器 181

6.4.6 dio库总结 183

6.5 异步编程 184

6.5.1 isolate 184

6.5.2 event loop 184

6.5.3 线程模型与isolate 188

6.5.4 创建单独的isolate 190

6.5.5 Stream事件流 192

本章小结 195

**第7章 路由 196**

7.1 路由简介 196

7.1.1 基本用法 197

7.1.2 静态路由 197

7.1.3 动态路由 200

7.1.4 参数回传 203

7.2 路由栈 206

7.2.1 路由栈详解 207

7.2.2 pushReplacementNamed方法 207

7.2.3 popAndPushNamed方法 208

7.2.4 pushNamedAndRemoveUntil方法 209

7.2.5 popUntil方法 210

7.3 自定义路由 210

本章小结 214

**第8章 持久化 215**

8.1 shared_preferences本地存储 215

8.1.1 shared_preferences的常用操作 216

8.1.2 shared_preferences举例 216

8.2 SQLite数据库 219

8.2.1 sqflite依赖库简介 220

8.2.2 封装SQL Helpers 223

8.2.3 sqflite实现员工打卡示例 225

8.3 文件形式存储 232

8.3.1 path_provider简介 233

8.3.2 一个简单的日记本示例 233

本章小结 236

**第9章 插件与混合工程 237**

9.1 package 237

9.1.1 添加package的几种方式 238

9.1.2 更新package 239

9.1.3 创建自己的package 240

9.1.4 发布package 240

9.2 理解Platform Channel 241

9.2.1 消息传递与编解码器 242

9.2.2 Platform数据类型支持 243

9.2.3 MethodChannel简介 243

9.2.4 SharedPreferences插件源码解析 245

9.3 混合开发 247

9.3.1 创建Flutter模块 248

9.3.2 关联原生工程 248

9.3.3 编写混合工程代码 249

9.3.4 热重载混合端代码 251

9.3.5 aar模块化打包 252

9.4 FlutterBoost混合方案 253

9.4.1 框架的由来 253

9.4.2 使用FlutterBoost改进 254

9.4.3 FlutterBoost源码分析 255

本章小结 263

**第10章 项目实战 264**

10.1 实战一：实现一个招聘类App 264

10.1.1 项目需求与技术选型 264

10.1.2 服务端设计 265

10.1.3 Flutter基础架构 270

10.1.4 启动页面 271

10.1.5 使用dio实现网络请求 273

10.1.6 公司列表与详情实现 275

10.1.7 用WebSocket实现聊天模块 281

10.2 实战二：实现异常上报系统 286

10.2.1 实现原理 286

10.2.2 FlutterError.onError和Zone 287

10.2.3 异常上报Flutter的实现 288

10.2.4 异常上报Android端的实现 290

10.2.5 服务端接收异常上报 293

10.3 实战项目源码 299

10.4 性能分析与辅助工具 300

本章小结 304





> 更新: 2019-09-01 11:15:21  
> 原文: <https://www.yuque.com/u3641/dxlfpu/nsgtgf>