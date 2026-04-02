# 图表-antv f2笔记

## 几要素


1. 几何标记 图形元素
2. 辅助元素 图例Legend 提示信息Tooltip 坐标轴 Axis



### 几何标记 geom


在图形语法 中几何标记的类型决定了生成图表的类型



#### chart.interval()


使用矩形或者弧形，用面积来表示大小关系的图形，一般构成柱状图、饼图等图表。



#### chart.line()


线，点按照 x 轴连接成一条线，构成线图。



#### chart.point()


点，用于绘制点图、气泡图。



#### shape类型


interval -> rect  
point -> circle  
line -> line / dash



### 辅助线 Guide


当需要在图表上绘制一些辅助线、辅助框或者文本时，比如增加预警线、最高值线或者标示明显的范围区域时，辅助标记 Guide 是非常有用的工具。



## 如何更新数据


```plain
chart.changeData(data);
```



## 更新数据，重新定义图形与法，改变图表类型


```javascript
chart.clear();

chart.souce(newData);

chart.interval().position('x*y').color('z'); // 重新定义图形语法

chart.render()
```



## 几何标记的图形属性


```plain
chart.<geomType>().<attrType>(fields[, callback]);
```



position 位置，二维坐标系内映射至 x 轴、y 轴；



color 颜色，包含了色调、饱和度和亮度；



shape 形状



size 大小



## 交互 平移事件


```plain
chart.interaction('pan', {
  mode: {String}, // 图表平移的方向，默认为 'x'
  panThreshold: {Number}, // hammer.js 设置，用于设置触发 pan 事件的最小移动距离
  pressThreshold: {Number}, // hammer.js 设置，用于设置触发 press 事件的设置
  pressTime: {Number}, // hammer.js 设置，用于设置触发 press 事件的最小时间差
  limitRange: {Object}, // 限制范围
  onStart: {Function}, // 事件触发后的回调
  onProcess: {Function}, // 事件进行中的回调
  onEnd: {Function} // 事件结束后的回调
});
```





> 更新: 2019-09-11 21:29:35  
> 原文: <https://www.yuque.com/u3641/dxlfpu/nktv5b>