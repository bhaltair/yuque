# vw

长宽比

+ [CSS实现长宽比的几种方案](https://www.w3cplus.com/css/aspect-ratio.html)
+ [容器长宽比](https://www.w3cplus.com/css/aspect-ratio-boxes.html)
+ [Web中如何实现纵横比](https://www.w3cplus.com/css/experiments-in-fixed-aspect-ratios.html)
+ [实现精准的流体排版原理](https://www.w3cplus.com/css/css-polyfluidsizing-using-calc-vw-breakpoints-and-linear-equations.html)



为了更好的实现长宽比，特别是针对于img、vedio和iframe元素，通过PostCSS插件postcss-aspect-ratio-mini来实现，在实际使用中，只需要把对应的宽和高写进去即可





在哪些地方可以使用vw来适配我们的页面。根据相关的测试：

+ <font style="color:rgb(0, 0, 0);">容器适配，可以使用</font><font style="color:rgb(0, 0, 0);">vw</font>
+ <font style="color:rgb(0, 0, 0);">文本的适配，可以使用</font><font style="color:rgb(0, 0, 0);">vw</font>
+ <font style="color:rgb(0, 0, 0);">大于</font><font style="color:rgb(0, 0, 0);">1px</font><font style="color:rgb(0, 0, 0);">的边框、圆角、阴影都可以使用</font><font style="color:rgb(0, 0, 0);">vw</font>
+ <font style="color:rgb(0, 0, 0);">内距和外距，可以使用vw</font>

<font style="color:rgb(0, 0, 0);"></font>

<font style="color:rgb(0, 0, 0);">1px方案</font>

解决1px可以使用[<font style="color:rgb(0, 0, 0);">postcss-write-svg</font>](https://github.com/jonathantneal/postcss-write-svg)。



> 更新: 2023-08-11 17:15:30  
> 原文: <https://www.yuque.com/u3641/dxlfpu/lphczxe266lvko12>