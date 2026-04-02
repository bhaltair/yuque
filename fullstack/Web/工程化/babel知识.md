# babel 知识

<font style="color:rgb(38, 38, 38);">大家对</font>



+ <font style="color:rgb(38, 38, 38);">@babel/preset-env</font>
+ <font style="color:rgb(38, 38, 38);">@babel/plugin-transform-runtime</font>
+ <font style="color:rgb(38, 38, 38);">@babel/runtime</font>
+ <font style="color:rgb(38, 38, 38);">core-js</font>
+ <font style="color:rgb(38, 38, 38);">@babel/polyfills</font>
+ <font style="color:rgb(38, 38, 38);">babel-polyfills</font>



<font style="color:rgb(38, 38, 38);">等等这些熟悉但又陌生的原因。</font>

<font style="color:rgb(38, 38, 38);"></font>

# babel 6 & babel 7


在 babel@6 时候，最常收到反馈之一就是 regeneratorRuntime is not defined



而到了 babel@7，最常收到反馈之一 Cannot find module 'core-js/library/fn/**'.



# @babel/preset-env
在 babel@7 推出之际，babel 官方把 babel preset stage 以及 es2015 es2016 等等都废弃了，取而代之的是 @babel/preset-env。



+ 在 babel@6 年代，我们使用的是 stage，那 stage 其实只会翻译 Syntax，而 API 则交给 babel-plugin-transform-runtime 或者 babel-polyfill 来实现。（这也是为什么大家在老项目中可以看到有引入 babel-polyfill 的原因）
+ 在 babel@7 年代，我们废弃了 stage，使用的 preset-env，同时他也可以提供 polyfill 的能力



> 通过官方文档的描述，preset-env 主要做的是转换 JavaScript 最新的 Syntax（指的是 const let ... 等）， 而作为可选项 preset-env 也可以转换 JavaScript 最新的 API （指的是比如 数组最新的方法 filter 、includes，Promise 等等）。
>

## targets
该参数决定了我们项目需要适配到的环境，比如可以申明适配到的浏览器版本，这样 babel 会根据浏览器的支持情况自动引入所需要的 polyfill。

## useBuiltIns
<font style="background-color:#FADB14;">"usage" | "entry" | false, defaults to false</font>





<font style="color:#F5222D;">false</font>

false: 这种方式下，不会引入 polyfills，<font style="background-color:#FADB14;">你需要人为在入口文件处@import '@babel/polyfill';</font>

<font style="background-color:#FADB14;"></font>

<font style="background-color:#FADB14;">但如上这种方式在 @babel@7.4 之后被废弃了，</font>取而代之的是在入口文件处自行 import 如下代码



```typescript
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// your code
```



**不推荐采用 false，这样会把所有的 polyfills 全部打入，造成包体积庞大**



<font style="color:#F5222D;">usage:</font>



我们在项目的入口文件处不需要 import 对应的 polyfills 相关库。babel 会根据用户代码的使用情况，并根据 targets 自行注入相关 polyfills。







<font style="color:#F5222D;">entry:</font>



我们在项目的入口文件处 import 对应的 polyfills 相关库，例如



```typescript

import 'core-js/stable';
import 'regenerator-runtime/runtime';
// your code
```



此时 babel 会根据当前 targets 描述，把需要的所有的 polyfills 全部引入到你的入口文件（**注意是全部，不管你是否有用到高级的 API**）



## 2个问题


问题一：还是会有一定程度的代码重复，举个例子：



问题二：针对项目，polyfill 会污染全局可以接受，但是作为 Library 我更希望它不会污染全局环境



# corejs:
使用 preset-env 注入的 polyfill 是会污染全局的，但是如果是自己的应用其实是在可控的。



总结下：用 corejs-3，开启 proposals: true，proposals 为真那样我们就可以使用 proposals 阶段的 API 了。



# @babel/plugin-transform-runtime
很明显该插件的出现就是复<font style="color:#F5222D;">用 babel 注入的关联代码。</font>



针对项目，polyfill 会污染全局可以接受，但是作为 Library 我更希望它不会污染全局环境



做了3件事情

> Automatically requires @babel/runtime/regenerator when you use generators/async functions (toggleable with the regenerator option).
>
> 
>
> Can use core-js for helpers if necessary instead of assuming it will be polyfilled by the user (toggleable with the corejs option)
>
> 
>
> Automatically removes the inline Babel helpers and uses the module @babel/runtime/helpers instead (toggleable with the helpers option).
>

使用生成器/异步功能时自动需要@ Babel /运行时/重新生物器（使用Regenerator选项转换）。



如果需要，可以使用core-js为everyers而不是假设它将由用户聚集（与corejs选项）来电（togllable）



自动删除内联babel evergers并使用模块@ babel /运行时/ eververs（使用Helpers选项toglable）。



# 业务代码中怎么使用


## 只使用preset-env
```typescript
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "58" // 按自己需要填写
        },
        "useBuiltIns": "entry",
        "corejs": {
          "version": 3,
          "proposals": true
        }
      }
    ]
  ],
  "plugins": []
}


import 'core-js/stable';
import 'regenerator-runtime/runtime';
// 入口文件代码
```

这样配置的原因是：targets 下设置我们业务项目所需要支持的最低环境配置，useBuiltIns 设置为 entry ，将最低环境不支持的所有 polyfill 都引入到入口文件（即使你在你的业务代码中并未使用）。



这是一种兼顾最终打包体积和稳妥的方式，为什么说稳妥呢，<font style="color:#F5222D;">因为我们很难保证引用的三方包有处理好 polyfill 这些问题。</font>当然如果你能充分保证你的三方依赖 polyfill 处理得当，那么<u>也可以把 useBuiltIns 设置为 usage。</u>



## 解决2个问题，结合plugin-transform-runtime使用


> 如果是业务项目开发者：@babel/plugin-transform-runtime ，建议关闭 corejs，polyfill 的引入由 @babel/preset-env 完成，即开启 useBuiltIns（如需其他配置，自行根据诉求配置）
>



```typescript

{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": {
          "version": 3,
          "proposals": true
        }
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": false
      }
    ]
  ]
}

并在入口文件处 import 如下内容


import 'core-js/stable';
import 'regenerator-runtime/runtime';
// 入口文件代码
```

## 如果是 Library 开发者
@babel/plugin-transform-runtime ，建议开启 corejs，polyfill 由 @babel/plugin-transform-runtime 引入。@babel/preset-env 关闭 useBuiltIns。



```typescript

{
  "presets": [
    [
      "@babel/preset-env",
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": {
          "version": 3,
          "proposals": true
        }
      }
    ]
  ]
}
```



> 更新: 2021-05-15 23:30:16  
> 原文: <https://www.yuque.com/u3641/dxlfpu/xm9gil>