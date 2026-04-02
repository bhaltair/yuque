# DSL

> DSL（Domain Specific Language）中文翻译为领域特定语言，例如 SQL、JSON、正则表达式等。
>
> 
>
> 与之形成对比的是 GPL（General Purpose Language），中文翻译为通用编程语言，我们熟悉的C、C++、JavaScript、Java 语言等就是。
>



[https://juejin.cn/post/6889432050240061447](https://juejin.cn/post/6889432050240061447)





大部分使用的是JSON Schema形式；

```json
{
    "type": "page",
    "body": {
        "title": "",
        "type": "form",
        "autoFocus": false,
        "api": "https://houtai.baidu.com/api/mock2/saveForm?waitSeconds=1",
        "mode": "horizontal",
        "controls": [
            {
                "type": "fieldSet",
                "title": "基本配置",
                "controls": [
                    {
                        "name": "a",
                        "type": "text",
                        "label": "文本1"
                    },
                    {
                        "name": "a",
                        "type": "text",
                        "label": "文本2"
                    }
                ]
            },
            {
                "type": "fieldSet",
                "title": "其他配置",
                "collapsable": true,
                "collapsed": true,
                "controls": [
                    {
                        "name": "c",
                        "type": "text",
                        "label": "文本3"
                    },
                    {
                        "name": "d",
                        "type": "text",
                        "label": "文本4"
                    }
                ]
            }
        ],
        "submitText": null,
        "actions": []
    }
}

```



> 更新: 2021-05-28 10:14:34  
> 原文: <https://www.yuque.com/u3641/dxlfpu/ygfhiy>