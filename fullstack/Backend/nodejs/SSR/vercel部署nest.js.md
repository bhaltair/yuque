# vercel 部署 nest.js

### <font style="color:rgb(37, 41, 51);">部署 Nest.js</font>
[https://juejin.cn/post/7023690214803505166](https://juejin.cn/post/7023690214803505166)



vercel.json

```javascript
{
    "version": 2,
    "name": "blog-server",
    "builds": [
        {
            "src": "dist/main.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "dist/main.js"
        }
    ]
}

```



> 更新: 2023-08-04 15:03:53  
> 原文: <https://www.yuque.com/u3641/dxlfpu/ag2om9bikfxvbyoq>