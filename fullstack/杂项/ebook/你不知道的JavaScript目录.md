# 你不知道的JavaScript 目录

## 上卷 Scope & Closures Objects & Classes


前言　VIII

### 第一部分 作用域和闭包
序　2

第　1章 作用域是什么　4

1.1　编译原理　4

1.2　理解作用域　6

1.2.1　演员表　6

1.2.2　对话　6

1.2.3　编译器有话说　7

1.2.4　引擎和作用域的对话　9

1.2.5　小测验　10

1.3　作用域嵌套　10

1.4　异常　12

1.5　小结　12

第　2章 词法作用域　14

2.1　词法阶段　14

2.2　欺骗词法　17

2.2.1　eval　17

2.2.2　with　18

2.2.3　性能　20

2.3　小结　21

第3章　函数作用域和块作用域　22

3.1　函数中的作用域　22

3.2　隐藏内部实现　23

3.3　函数作用域　26

3.3.1　匿名和具名　27

3.3.2　立即执行函数表达式　28

3.4　块作用域　30

3.4.1　with　31

3.4.2　try/catch　31

3.4.3　let　32

3.4.4　const　35

3.5　小结　36

第4章　提升　37

4.1　先有鸡还是先有蛋　37

4.2　编译器再度来袭　38

4.3　函数优先　40

4.4　小结　41

第5章　作用域闭包　43

5.1　启示　43

5.2　实质问题　44

5.3　现在我懂了　47

5.4　循环和闭包　48

5.5　模块　51

5.5.1　现代的模块机制　54

5.5.2　未来的模块机制　56

5.6　小结　57

附录A　动态作用域　58

附录B　块作用域的替代方案　60

附录C　this词法　64

附录D　致谢　67

### 第二部分 this和对象原型
序　72

第　1章 关于this　74

1.1　为什么要用this　74

1.2　误解　76

1.2.1　指向自身　76

1.2.2　它的作用域　79

1.3　this到底是什么　80

1.4　小结　80

第　2章 this全面解析　82

2.1　调用位置　82

2.2　绑定规则　83

2.2.1　默认绑定　83

2.2.2　隐式绑定　85

2.2.3　显式绑定　87

2.2.4　new绑定　90

2.3　优先级　91

2.4　绑定例外　95

2.4.1　被忽略的this　96

2.4.2　间接引用　97

2.4.3　软绑定　98

2.5　this词法　99

2.6　小结　101

第3章　对象　102

3.1　语法　102

3.2　类型　103

3.3　内容　105

3.3.1　可计算属性名　106

3.3.2　属性与方法　107

3.3.3　数组　108

3.3.4　复制对象　109

3.3.5　属性描述符　111

3.3.6　不变性　114

3.3.7　[[Get]]　115

3.3.8　[[Put]]　116

3.3.9　Getter和Setter　117

3.3.10　存在性　119

3.4　遍历　121

3.5　小结　124

第4章　混合对象“类”　126

4.1　类理论　126

4.1.1　“类”设计模式　127

4.1.2　JavaScript中的“类”　128

4.2　类的机制　128

4.2.1　建造　128

4.2.2　构造函数　130

4.3　类的继承　130

4.3.1　多态　132

4.3.2　多重继承　134

4.4　混入　134

4.4.1　显式混入　135

4.4.2　隐式混入　139

4.5　小结　140

第5章　原型　142

5.1　[[Prototype]]　142

5.1.1　Object.prototype　144

5.1.2　属性设置和屏蔽　144

5.2　“类”　146

5.2.1　“类”函数　146

5.2.2　“构造函数”　149

5.2.3　技术　151

5.3　（原型）继承　153

5.4　对象关联　159

5.4.1　创建关联　159

5.4.2　关联关系是备用　161

5.5　小结　162

第6章　行为委托　164

6.1　面向委托的设计　165

6.1.1　类理论　165

6.1.2　委托理论　166

6.1.3　比较思维模型　170

6.2　类与对象　173

6.2.1　控件“类”　174

6.2.2　委托控件对象　176

6.3　更简洁的设计　178

6.4　更好的语法　182

6.5　内省　185

6.6　小结　187

附录A　ES6中的Class　189



## 中卷 Types & Grammar Sync & Async


前言　XI

### 第一部分 类型和语法
序　2

第　1 章 类型　3

1.1　类型　4

1.2　内置类型　4

1.3　值和类型　6

1.3.1　undefined 和undeclared　6

1.3.2　typeof Undeclared　7

1.4　小结　10

第　2 章 值　11

2.1　数组　11

2.2　字符串　13

2.3　数字　15

2.3.1　数字的语法　16

2.3.2　较小的数值　18

2.3.3　整数的安全范围　19

2.3.4　整数检测　20

2.3.5　32 位有符号整数　20

2.4　特殊数值　21

2.4.1　不是值的值　21

2.4.2　undefined　21

2.4.3　特殊的数字　23

2.4.4　特殊等式　27

2.5　值和引用　28

2.6　小结　31

第3　章 原生函数　33

3.1　内部属性[[Class]]　34

3.2　封装对象包装　35

3.3　拆封　36

3.4　原生函数作为构造函数　37

3.4.1　Array(..)　37

3.4.2　Object(..)、Function(..) 和RegExp(..)　40

3.4.3　Date(..) 和Error(..)　41

3.4.4　Symbol(..)　42

3.4.5　原生原型　43

3.5　小结　45

第4　章 强制类型转换　46

4.1　值类型转换　46

4.2　抽象值操作　47

4.2.1　ToString　48

4.2.2　ToNumber　52

4.2.3　ToBoolean　53

4.3　显式强制类型转换　56

4.3.1　字符串和数字之间的显式转换　57

4.3.2　显式解析数字字符串　62

4.3.3　显式转换为布尔值　65

4.4　隐式强制类型转换　67

4.4.1　隐式地简化　67

4.4.2　字符串和数字之间的隐式强制类型转换　68

4.4.3　布尔值到数字的隐式强制类型转换　71

4.4.4　隐式强制类型转换为布尔值　72

4.4.5　|| 和&&　73

4.4.6　符号的强制类型转换　76

4.5　宽松相等和严格相等　77

4.5.1　相等比较操作的性能 .77

4.5.2　抽象相等

4.6　抽象关系比较　89

4.7　小结　91

第5　章 语法　92

5.1　语句和表达式　92

5.1.1　语句的结果值　93

5.1.2　表达式的副作用　95

5.1.3　上下文规则　99

5.2　运算符优先级　104

5.2.1　短路　107

5.2.2　更强的绑定　107

5.2.3　关联　108

5.2.4　释疑　110

5.3　自动分号　111

5.4　错误　113

5.5　函数参数　115

5.6　try..finally　117

5.7　switch　120

5.8　小结　122

附录A　混合环境JavaScript　123



### 第二部分 异步和性能
序　136

第　1 章 异步：现在与将来　138

1.1　分块的程序　139

1.2　事件循环　141

1.3　并行线程　143

1.4　并发　148

1.4.1　非交互　150

1.4.2　交互　150

1.4.3　协作　154

1.5　任务　156

1.6　语句顺序　157

1.7　小结　159

第　2 章 回调　161

2.1　continuation　162

2.2　顺序的大脑　163

2.2.1　执行与计划　164

2.2.2　嵌套回调与链式回调　165

2.3　信任问题　169

2.3.1　五个回调的故事　170

2.3.2　不只是别人的代码　171

2.4　省点回调　173

2.5　小结　176

第3　章 Promise　178

3.1　什么是Promise　179

3.1.1　未来值　179

3.1.2　完成事件　183

3.2　具有then 方法的鸭子类型　188

3.3　Promise 信任问题　190

3.3.1　调用过早　190

3.3.2　调用过晚　191

3.3.3　回调未调用　192

3.3.4　调用次数过少或过多　193

3.3.5　未能传递参数/ 环境值　193

3.3.6　吞掉错误或异常　194

3.3.7　是可信任的Promise 吗　195

3.3.8　建立信任　197

3.4　链式流　198

3.5　错误处理　206

3.5.1　绝望的陷阱　208

3.5.2　处理未捕获的情况　209

3.5.3　成功的坑　211

3.6　Promise 模式　212

3.6.1　Promise.all([ .. ])　212

3.6.2　Promise.race([ .. ])　213

3.6.3　all([ .. ]) 和race([ .. ]) 的变体　216

3.6.4　并发迭代　217

3.7　Promise API 概述　219

3.7.1　new Promise(..) 构造器　219

3.7.2　Promise.resolve(..) 和Promise.reject(..)　219

3.7.3　then(..) 和catch(..)　220

3.7.4　Promise.all([ .. ]) 和Promise.race([ .. ])　221

3.8　Promise 局限性　222

3.8.1　顺序错误处理　222

3.8.2　单一值　223

3.8.3　单决议　225

3.8.4　惯性　227

3.8.5　无法取消的Promise　230

3.8.6　Promise 性能　231

3.9　小结　233

第4　章 生成器　234

4.1　打破完整运行　234

4.1.1　输入和输出　236

4.1.2　多个迭代器　239

4.2　生成器产生值　243

4.2.1　生产者与迭代器　243

4.2.2　iterable　246

4.2.3　生成器迭代器　247

4.3　异步迭代生成器　250

4.4　生成器+Promise　254

4.4.1　支持Promise 的Generator Runner　256

4.4.2　生成器中的Promise 并发　258

4.5　生成器委托　262

4.5.1　为什么用委托　264

4.5.2　消息委托　264

4.5.3　异步委托　268

4.5.4　递归委托　268

4.6　生成器并发　269

4.7　形实转换程序　273

4.8　ES6 之前的生成器　279

4.8.1　手工变换　280

4.8.2　自动转换　284

4.9　小结　285

第5　章 程序性能　287

5.1　Web Worker　288

5.1.1　Worker 环境　290

5.1.2　数据传递　291

5.1.3　共享Worker　291

5.1.4　模拟Web Worker　293

5.2　SIMD　293

5.3　asm.js　295

5.3.1　如何使用asm.js 优化　295

5.3.2　asm.js 模块　296

5.4　小结　298

第6　章 性能测试与调优　299

6.1　性能测试　99

6.1.1　重复　300

6.1.2　Benchmark.js　301

6.2　环境为王　303

6.3　jsPerf.com　305

6.4　写好测试　309

6.5　微性能　309

6.5.1　不是所有的引擎都类似　312

6.5.2　大局　314

6.6　尾调用优化　316

6.7　小结　318

附录A　asynquence 库　319

附录B　高 级异步模式　339



## 下卷 ES.Next & Beyond


<font style="color:#666666;">前言 xi</font>

<font style="color:#666666;">致谢 xvii</font>

### <font style="color:#666666;">第 一部分 起步上路</font>
<font style="color:#666666;">序 2</font>

<font style="color:#666666;">第 1 章 深入编程 4</font>

<font style="color:#666666;">1．1 代码 4</font>

<font style="color:#666666;">1．2 表达式 5</font>

<font style="color:#666666;">1．3 实践 6</font>

<font style="color:#666666;">1．3．1 输出 7</font>

<font style="color:#666666;">1．3．2 输入 8</font>

<font style="color:#666666;">1．4 运算符 9</font>

<font style="color:#666666;">1．5 值与类型 11</font>

<font style="color:#666666;">1．6 代码注释 13</font>

<font style="color:#666666;">1．7 变量 14</font>

<font style="color:#666666;">1．8 块 16</font>

<font style="color:#666666;">1．9 条件判断 17</font>

<font style="color:#666666;">1．10 循环 18</font>

<font style="color:#666666;">1．11 函数 20</font>

<font style="color:#666666;">1．12 实践 23</font>

<font style="color:#666666;">1．13 小结 25</font>

<font style="color:#666666;">第 2 章 深入JavaScript 26</font>

**<font style="color:#666666;">2．1 值与类型 26</font>**

<font style="color:#666666;">2．1．1 对象 28</font>

<font style="color:#666666;">2．1．2 内置类型方法 30</font>

<font style="color:#666666;">2．1．3 值的比较 31</font>

**<font style="color:#666666;">2．2 变量 35</font>**

<font style="color:#666666;">2．3 条件判断 37</font>

<font style="color:#666666;">2．4 严格模式 39</font>

<font style="color:#666666;">2．5 作为值的函数 40</font>

<font style="color:#666666;">2．5．1 立即调用函数表达式 41</font>

<font style="color:#666666;">2．5．2 闭包 42</font>

<font style="color:#666666;">2．6 this标识符 44</font>

<font style="color:#666666;">2．7 原型 46</font>

<font style="color:#666666;">2．8 旧与新 47</font>

<font style="color:#666666;">2．8．1 polyfilling 47</font>

<font style="color:#666666;">2．8．2 transpiling 48</font>

<font style="color:#666666;">2．9 非JavaScript 49</font>

<font style="color:#666666;">2．10 小结 50</font>

**<font style="color:#666666;">第 3 章 深入“你不知道的JavaScript”系列 51</font>**

**<font style="color:#666666;">3．1 作用域和闭包 51</font>**

**<font style="color:#666666;">3．2 this和对象原型 52</font>**

**<font style="color:#666666;">3．3 类型和语法 53</font>**

**<font style="color:#666666;">3．4 异步和性能 53</font>**

**<font style="color:#666666;">3．5 ES6及更新版本 54</font>**

**<font style="color:#666666;">3．6 小结 55</font>**

### <font style="color:#666666;">第 二部分 ES6及更新版本</font>
<font style="color:#666666;">序 58</font>

<font style="color:#666666;">第 1 章 ES？现在与未来 59</font>

<font style="color:#666666;">1．1 版本 60</font>

<font style="color:#666666;">1．2 transpiling 61</font>

<font style="color:#666666;">1．3 小结 63</font>

<font style="color:#666666;">第 2 章 语法 64</font>

<font style="color:#666666;">2．1 块作用域声明 64</font>

<font style="color:#666666;">2．1．1 let声明 65</font>

<font style="color:#666666;">2．1．2 const声明 68</font>

<font style="color:#666666;">2．1．3 块作用域函数 70</font>

<font style="color:#666666;">2．2 spread/rest 71</font>

<font style="color:#666666;">2．3 默认参数值 73</font>

<font style="color:#666666;">2．4 解构 77</font>

<font style="color:#666666;">2．4．1 对象属性复制模式 78</font>

<font style="color:#666666;">2．4．2 不只是声明 79</font>

<font style="color:#666666;">2．4．3 重复赋值 81</font>

<font style="color:#666666;">2．5 太多，太少，刚刚好 83</font>

<font style="color:#666666;">2．5．1 默认值赋值 84</font>

<font style="color:#666666;">2．5．2 嵌套解构 84</font>

<font style="color:#666666;">2．5．3 解构参数 85</font>

<font style="color:#666666;">2．6　对象字面量扩展 90</font>

<font style="color:#666666;">2．6．1　简洁属性 90</font>

<font style="color:#666666;">2．6．2　简洁方法 90</font>

<font style="color:#666666;">2．6．3　计算属性名 95</font>

<font style="color:#666666;">2．6．4　设定[[Prototype]] 96</font>

<font style="color:#666666;">2．6．5　super对象 97</font>

<font style="color:#666666;">2．7　模板字面量 98</font>

<font style="color:#666666;">2．7．1　插入表达式 99</font>

<font style="color:#666666;">2．7．2　标签模板字面量 100</font>

<font style="color:#666666;">2．8　箭头函数 103</font>

<font style="color:#666666;">2．9　for．．of循环 109</font>

<font style="color:#666666;">2．10　正则表达式 111</font>

<font style="color:#666666;">2．10．1　Unicode标识 111</font>

<font style="color:#666666;">2．10．2　定点标识 112</font>

<font style="color:#666666;">2．10．3　正则表达式flags 116</font>

<font style="color:#666666;">2．11　数字字面量扩展 117</font>

<font style="color:#666666;">2．12　Unicode 118</font>

<font style="color:#666666;">2．12．1　支持Unicode的字符串运算 119</font>

<font style="color:#666666;">2．12．2　字符定位 121</font>

<font style="color:#666666;">2．12．3　Unicode标识符名 123</font>

<font style="color:#666666;">2．13　符号 123</font>

<font style="color:#666666;">2．13．1　符号注册 125</font>

<font style="color:#666666;">2．13．2　作为对象属性的符号 127</font>

<font style="color:#666666;">2．14　小结 128</font>

<font style="color:#666666;">第 3 章　代码组织 129</font>

<font style="color:#666666;">3．1　迭代器 129</font>

<font style="color:#666666;">3．1．1　接口 130</font>

<font style="color:#666666;">3．1．2　next()迭代 131</font>

<font style="color:#666666;">3．1．3　可选的return(．．)和throw(．．) 132</font>

<font style="color:#666666;">3．1．4　迭代器循环 133</font>

<font style="color:#666666;">3．1．5　自定义迭代器 134</font>

<font style="color:#666666;">3．1．6　迭代器消耗 137</font>

<font style="color:#666666;">3．2　生成器 138</font>

<font style="color:#666666;">3．2．1　语法 139</font>

<font style="color:#666666;">3．2．2　迭代器控制 144</font>

<font style="color:#666666;">3．2．3　提前完成 147</font>

<font style="color:#666666;">3．2．4　错误处理 149</font>

<font style="color:#666666;">3．2．5　Transpile生成器 151</font>

<font style="color:#666666;">3．2．6　生成器使用 152</font>

<font style="color:#666666;">3．3　模块 153</font>

<font style="color:#666666;">3．3．1　旧方法 153</font>

<font style="color:#666666;">3．3．2　前进 154</font>

<font style="color:#666666;">3．3．3　新方法 156</font>

<font style="color:#666666;">3．3．4　模块依赖环 164</font>

<font style="color:#666666;">3．3．5　模块加载 166</font>

<font style="color:#666666;">3．4　类 167</font>

<font style="color:#666666;">3．4．1　class 168</font>

<font style="color:#666666;">3．4．2　extends和super 169</font>

<font style="color:#666666;">3．4．3　new．target 174</font>

<font style="color:#666666;">3．4．4　static 175</font>

<font style="color:#666666;">3．5　小结 176</font>

<font style="color:#666666;">第 4 章　异步流控制 177</font>

<font style="color:#666666;">4．1　Promise 177</font>

<font style="color:#666666;">4．1．1　构造和使用Promise 178</font>

<font style="color:#666666;">4．1．2　Thenable 180</font>

<font style="color:#666666;">4．1．3　Promise API 181</font>

<font style="color:#666666;">4．2　生成器 + Promise 183</font>

<font style="color:#666666;">4．3　小结 185</font>

<font style="color:#666666;">第 5 章　集合 187</font>

<font style="color:#666666;">5．1　TypedArray 187</font>

<font style="color:#666666;">5．1．1　大小端（Endianness） 188</font>

<font style="color:#666666;">5．1．2　多视图 189</font>

<font style="color:#666666;">5．1．3　带类数组构造器 190</font>

<font style="color:#666666;">5．2　Map 192</font>

<font style="color:#666666;">5．2．1　Map值 194</font>

<font style="color:#666666;">5．2．2　Map键 194</font>

<font style="color:#666666;">5．3　WeakMap 195</font>

<font style="color:#666666;">5．4　Set 196</font>

<font style="color:#666666;">5．5　WeakSet 198</font>

<font style="color:#666666;">5．6　小结 199</font>

<font style="color:#666666;">第 6 章　新增API 200</font>

<font style="color:#666666;">6．1　Array 200</font>

<font style="color:#666666;">6．1．1　静态函数Array．of(．．) 200</font>

<font style="color:#666666;">6．1．2　静态函数Array．from(．．) 201</font>

<font style="color:#666666;">6．1．3　创建数组和子类型 204</font>

<font style="color:#666666;">6．1．4　原型方法copyWithin(．．) 205</font>

<font style="color:#666666;">6．1．5　原型方法fill(．．) 206</font>

<font style="color:#666666;">6．1．6　原型方法find(．．) 206</font>

<font style="color:#666666;">6．1．7　原型方法findIndex(．．) 207</font>

<font style="color:#666666;">6．1．8　原型方法entries()、values()、keys() 208</font>

<font style="color:#666666;">6．2　Object 209</font>

<font style="color:#666666;">6．2．1　静态函数Object．is(．．) 209</font>

<font style="color:#666666;">6．2．2　静态函数Object．getOwnPropertySymbols(．．) 210</font>

<font style="color:#666666;">6．2．3　静态函数Object．setPrototypeOf(．．) 210</font>

<font style="color:#666666;">6．2．4　静态函数Object．assign(．．) 211</font>

<font style="color:#666666;">6．3　Math 212</font>

<font style="color:#666666;">6．4　Number 214</font>

<font style="color:#666666;">6．4．1　静态属性 214</font>

<font style="color:#666666;">6．4．2　静态函数Number．isNaN(．．) 214</font>

<font style="color:#666666;">6．4．3　静态函数Number．isFinite(．．) 215</font>

<font style="color:#666666;">6．4．4　整型相关静态函数 215</font>

<font style="color:#666666;">6．5　字符串 216</font>

<font style="color:#666666;">6．5．1　Unicode函数 217</font>

<font style="color:#666666;">6．5．2　静态函数String．raw(．．) 217</font>

<font style="color:#666666;">6．5．3　原型函数repeat(．．) 217</font>

<font style="color:#666666;">6．5．4　字符串检查函数 218</font>

<font style="color:#666666;">6．6　小结 218</font>

<font style="color:#666666;">第 7 章　元编程 219</font>

<font style="color:#666666;">7．1　函数名称 219</font>

<font style="color:#666666;">7．2　元属性 222</font>

<font style="color:#666666;">7．3　公开符号 223</font>

<font style="color:#666666;">7．3．1　Symbol．iterator 223</font>

<font style="color:#666666;">7．3．2　Symbol．toStringTag与Symbol．hasInstance 224</font>

<font style="color:#666666;">7．3．3　Symbol．species 225</font>

<font style="color:#666666;">7．3．4　Symbol．toPrimitive 226</font>

<font style="color:#666666;">7．3．5　正则表达式符号 226</font>

<font style="color:#666666;">7．3．6　Symbol．isConcatSpreadable 227</font>

<font style="color:#666666;">7．3．7　Symbol．unscopables 228</font>

<font style="color:#666666;">7．4　代理 228</font>

<font style="color:#666666;">7．4．1　代理局限性 231</font>

<font style="color:#666666;">7．4．2　可取消代理 232</font>

<font style="color:#666666;">7．4．3　使用代理 233</font>

<font style="color:#666666;">7．5　Reflect API 240</font>

<font style="color:#666666;">7．6　特性测试 243</font>

<font style="color:#666666;">7．7　尾递归调用（Tail Call Optimization，TCO） 245</font>

<font style="color:#666666;">7．7．1　尾调用重写 247</font>

<font style="color:#666666;">7．7．2　非TCO优化 248</font>

<font style="color:#666666;">7．7．3　元在何处 250</font>

<font style="color:#666666;">7．8　小结 251</font>

<font style="color:#666666;">第 8 章　ES6之后 253</font>

<font style="color:#666666;">8．1　异步函数 254</font>

<font style="color:#666666;">8．2　Object．observe(．．) 257</font>

<font style="color:#666666;">8．2．1　自定义改变事件 258</font>

<font style="color:#666666;">8．2．2　结束观测 259</font>

<font style="color:#666666;">8．3　幂运算符 260</font>

<font style="color:#666666;">8．4　对象属性与．．． 260</font>

<font style="color:#666666;">8．5　Array#includes 261</font>

<font style="color:#666666;">8．6　SIMD 262</font>

<font style="color:#666666;">8．7　WebAssembly (WASM) 262</font>

<font style="color:#666666;">8．8　小结 264</font>



> 更新: 2020-01-15 14:25:42  
> 原文: <https://www.yuque.com/u3641/dxlfpu/pfv1fr>