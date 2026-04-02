# iPhone 强制显示滚动条

如果设置了-webkit-overflow-scrolling: touch。iPhone是不会显示滚动条的。





```javascript
.van-list {
    overflow-y: scroll;
    -webkit-overflow-scrolling: auto;
}
.van-list::-webkit-scrollbar {
    -webkit-appearance: none;
}

.van-list::-webkit-scrollbar:vertical {
    width: 8px;
}

.van-list::-webkit-scrollbar:horizontal {
    height: 11px;
}

.van-list::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid white; /* should match background, can't be transparent */
    background-color: rgba(0, 0, 0, .5);
}
```





> 更新: 2019-07-23 10:56:06  
> 原文: <https://www.yuque.com/u3641/dxlfpu/eud3f4>