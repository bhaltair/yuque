# 使用 mpvue 的一些总结

1

关于生命周期 不要使用vue的钩子 特别是created钩子



2

页面传参在onload钩子获取

this.$root.$mp.query



3

不支持filter



4

可以使用小程序组件



5

异步登录的问题使用mixins解决



6

如果你有小程序和H5复用代码的需要 通过桥接适配层屏蔽两端差异



7

事件 bindChange -> @change=”bindPickerChange”



> 更新: 2020-03-13 17:46:40  
> 原文: <https://www.yuque.com/u3641/dxlfpu/mivuyh>