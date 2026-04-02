# 封装 FlastList



# ListEmptyComponent


列表加载



+ 初始加载 
    - 局中 Indicator
+ 刷新加载 
    - 刷新loading + 居中 Indicator
+ 加载更多
+ 没有数据 
    -  



详情加载



+ 初始加载 
    - 局中 Indicator
+ 刷新加载 
    - 刷新loading + 居中 Indicator
+ 操作loading 
    - loadingModal
+ 加载更多 
    - ActivityIndicator
+ 没有数据 
    -  



ListEmptyComponent



# ListFooterComponent flex: 1 无效
```plain
contentContainerStyle={dataSource?.length ? {} : { flexGrow: 1 }}

```

# onEndReached not called
do not use conditional render



> 更新: 2023-03-24 14:22:42  
> 原文: <https://www.yuque.com/u3641/dxlfpu/nyim27>