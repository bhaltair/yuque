# Chanify 一个简单的消息推送工具

Chanify 是一个简单的消息推送工具。每一个人都可以利用提供的 API 来发送消息推送到自己的 iOS 设备上。



1. [功能](https://github.com/chanify/chanify#%E5%8A%9F%E8%83%BD)
2. [入门](https://github.com/chanify/chanify#%E5%85%A5%E9%97%A8)
3. [安装](https://github.com/chanify/chanify#%E5%AE%89%E8%A3%85)
    - [预编译包](https://github.com/chanify/chanify#%E9%A2%84%E7%BC%96%E8%AF%91%E5%8C%85)
    - [Docker](https://github.com/chanify/chanify#docker)
    - [从源代码](https://github.com/chanify/chanify#%E4%BB%8E%E6%BA%90%E4%BB%A3%E7%A0%81)
4. [用法](https://github.com/chanify/chanify#%E7%94%A8%E6%B3%95)
    - [作为客户端](https://github.com/chanify/chanify#%E4%BD%9C%E4%B8%BA%E5%AE%A2%E6%88%B7%E7%AB%AF)
    - [作为无状态服务器](https://github.com/chanify/chanify#%E4%BD%9C%E4%B8%BA%E6%97%A0%E7%8A%B6%E6%80%81%E6%9C%8D%E5%8A%A1%E5%99%A8)
    - [作为有状态服务器](https://github.com/chanify/chanify#%E4%BD%9C%E4%B8%BA%E6%9C%89%E7%8A%B6%E6%80%81%E6%9C%8D%E5%8A%A1%E5%99%A8)
    - [添加节点服务器](https://github.com/chanify/chanify#%E6%B7%BB%E5%8A%A0%E8%8A%82%E7%82%B9%E6%9C%8D%E5%8A%A1%E5%99%A8)
    - [发送消息](https://github.com/chanify/chanify#%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF)
        * [命令行](https://github.com/chanify/chanify#%E5%91%BD%E4%BB%A4%E8%A1%8C)
        * [Python 3](https://github.com/chanify/chanify#python-3)
        * [Ruby](https://github.com/chanify/chanify#ruby)
        * [NodeJS](https://github.com/chanify/chanify#nodejs)
        * [PHP](https://github.com/chanify/chanify#php)
5. [HTTP API](https://github.com/chanify/chanify#http-api)
    - [发送文本](https://github.com/chanify/chanify#%E5%8F%91%E9%80%81%E6%96%87%E6%9C%AC)
    - [发送链接](https://github.com/chanify/chanify#%E5%8F%91%E9%80%81%E9%93%BE%E6%8E%A5)
    - [发送图片](https://github.com/chanify/chanify#%E5%8F%91%E9%80%81%E5%9B%BE%E7%89%87)
    - [发送文件](https://github.com/chanify/chanify#%E5%8F%91%E9%80%81%E6%96%87%E4%BB%B6)
    - [发送动作](https://github.com/chanify/chanify#%E5%8F%91%E9%80%81%E5%8A%A8%E4%BD%9C)
6. [配置文件](https://github.com/chanify/chanify#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
7. [安全](https://github.com/chanify/chanify#%E5%AE%89%E5%85%A8)
8. [Chrome 插件](https://github.com/chanify/chanify#chrome%20%E6%8F%92%E4%BB%B6)
9. [贡献](https://github.com/chanify/chanify#%E8%B4%A1%E7%8C%AE)
10. [许可证](https://github.com/chanify/chanify#%E8%AE%B8%E5%8F%AF%E8%AF%81)

## 功能
Chanify 包括这些功能：

+ 支持自定义频道分类消息
+ 支持部署自己的节点服务器
+ 依照分布式架构设计系统
+ 随机账号生成保护隐私
+ 支持文本/图片/文件等多种消息格式

## 入门
1. 从 AppStore 安装[iOS 应用](https://itunes.apple.com/cn/app/id1531546573)（1.0.0 或以上版本）。
2. 获取发送使用的令牌token，[更多细节](https://github.com/chanify/chanify-ios)。
3. 使用 API 来发送消息。

## 安装
### 预编译包
可以[这里](https://github.com/chanify/chanify/releases/latest)下载最新的预编译二进制包。

### Docker
$ docker pull wizjin/chanify:latest

### 从源代码
$ go install github.com/chanify/chanify

## 用法
### 作为客户端
可以使用下列命令来发送消息
```
# 文本消息  
$ chanify send --endpoint=http://<address>:<port> --token=<token> --text=<文本消息>  
  
# 链接消息  
$ chanify send --endpoint=http://<address>:<port> --token=<token> --link=<网页链接>  
  
# 图片消息  
$ chanify send --endpoint=http://<address>:<port> --token=<token> --image=<图片文件路径>  
  
# 文件消息  
$ chanify send --endpoint=http://<address>:<port> --token=<token> --file=<文件路径> --text=<文件描述>  
  
# 动作消息  
$ chanify send --endpoint=http://<address>:<port> --token=<token> --text=<文本消息> --title=<文本标题> --action="<动作名字>|<动作链接 url>"

endpoint默认值是https://api.chanify.net，并且会使用默认服务器发送消息。 如果使用的是自建的节点服务器，请在讲endpoint设置成自建服务器的 URL。

### 作为无状态服务器
Chanify 可以作为无状态服务器运行，在这种模式下节点服务器不会保存设备信息（APNS 令牌）。

所有的设备信息会被存储在 api.chanify.net。

消息会在节点服务器加密之后由 api.chanify.net 代理发送给苹果的 APNS 服务器。

消息的流动如下:

开始 => 自建节点服务器 => api.chanify.net => 苹果APNS服务器 => iOS客户端  


# 命令行启动  
$ chanify serve --host=<ip address> --port=<port> --secret=<secret key> --name=<node name> --endpoint=http://<address>:<port>  
  
# 使用Docker启动  
$ docker run -it wizjin/chanify:latest serve --secret=<secret key> --name=<node name> --endpoint=http://<address>:<port>

### 作为有状态服务器
Chanify 可以作为有状态服务器运行，在这种模式下节点服务器会保存用户的设备信息（APNS 令牌）。

消息会直接由节点服务器加密之后发送给苹果的 APNS 服务器。

消息的流动如下:

开始 => 自建节点服务器 => Apple server => iOS客户端  


启动服务器

# 命令行启动  
$ chanify serve --host=<ip address> --port=<port> --name=<node name> --datapath=~/.chanify --endpoint=http://<address>:<port>  
  
# 使用Docker启动  
$ docker run -it -v /my/data:/root/.chanify wizjin/chanify:latest serve --name=<node name> --endpoint=http://<address>:<port>

默认会使用 sqlite 保存数据，如果要使用 MySQL 作为数据库存储信息可以添加如下参数：
--dburl=mysql://<user>:<password>@tcp(<ip address>:<port>)/<database name>?charset=utf8mb4&parseTime=true&loc=Local
注意：Chanify 不会创建数据库，只会创建表格，所以使用前请先自行建立数据库。
```

### 添加节点服务器
```
+ 启动节点服务器
+ 获取服务器二维码（http://<address>:<port>/）
+ 打开 iOS 的客户端扫描二维码添加节点
```
### 发送消息
#### 命令行
```
# 发送文本消息  
$ curl --form-string "text=hello" "http://<address>:<port>/v1/sender/<token>"  
  
# 发送文本文件  
$ cat message.txt | curl -H "Content-Type: text/plain" --data-binary @- "http://<address>:<port>/v1/sender/<token>"
```
#### Python 3
```
from urllib import request, parse  
  
data = parse.urlencode({ 'text': 'hello' }).encode()  
req = request.Request("http://<address>:<port>/v1/sender/<token>", data=data)  
request.urlopen(req)
```
#### Ruby
```
require 'net/http'  
  
uri = URI('http://<address>:<port>/v1/sender/<token>')  
res = Net::HTTP.post_form(uri, 'text' => 'hello')  
puts res.body

#### NodeJS
const https = require('https')  
const querystring = require('querystring');  
  
const data = querystring.stringify({ text: 'hello' })  
const options = {  
    hostname: '<address>:<port>',  
    port: 80,  
    path: '/v1/sender/<token>',  
    method: 'POST',  
    headers: {  
        'Content-Type': 'application/x-www-form-urlencoded',  
        'Content-Length': data.length  
        }  
    }  
    var req = https.request(options, (res) => {  
    res.on('data', (d) => {  
        process.stdout.write(d);  
    });  
});    
req.write(data);  
req.end();
```
#### PHP
```
$curl = curl_init();  
  
curl_setopt_array($curl, [  
    CURLOPT_URL           => 'http://<address>:<port>/v1/sender/<token>',  
    CURLOPT_CUSTOMREQUEST => 'POST',  
    CURLOPT_POSTFIELDS    => [ 'text' => 'hello' ],  
]);  
  
$response = curl_exec($curl);  
  
curl_close($curl);  
echo $response;
```
## HTTP API
### 发送文本
```
+ **GET**

http://<address>:<port>/v1/sender/<token>/<message>  


+ **POST**

http://<address>:<port>/v1/sender/<token>  
```

Content-Type:
```
+ text/plain: Body is text message
+ multipart/form-data: The block of data("text") is text message
+ application/x-www-form-urlencoded:text=<url encoded text message>
+ application/json; charset=utf-8: 字段都是可选的

{  
    "token": "<令牌Token>",  
    "title": "<消息标题>",  
    "text": "<文本消息内容>",  
    "copy": "<可选的复制文本>",  
    "autocopy": 1,  
    "sound": 1,  
    "priority": 10,  
    "actions": [  
        "动作名称1|http://<action host>/<action1>",  
        "动作名称2|http://<action host>/<action2>",  
    ]  
}
```
支持以下参数：

| **参数名** | **默认值** | **描述** |
| --- | --- | --- |
| title | 无 | 通知消息的标题 |
| copy | 无 | 可选的复制文本（仅文本消息有效） |
| autocopy | 0 | 是否自动复制文本（仅文本消息有效） |
| sound | 0 | 1<br/>启用声音提示, 其他情况会静音推送 |
| priority | 10 | 10<br/>正常优先级,<br/>5<br/>较低优先级 |
| actions | 无 | 动作列表 |


例如：
```
http://<address>:<port>/v1/sender/<token>?sound=1&priority=10&title=hello&copy=123&autocopy=1  
```

### 发送链接
```
$ curl --form "link=@<web url>" "http://<address>:<port>/v1/sender/<token>"

{  
    "link": "<web url>",  
    "sound": 1,  
    "priority": 10,  
}
```
### 发送图片

目前仅支持使用**POST**方法通过自建的有状态服务器才能发送图片。
```
+ Content-Type:image/png或者image/jpeg

cat <jpeg文件路径> | curl -H "Content-Type: image/jpeg" --data-binary @- "http://<address>:<port>/v1/sender/<token>"

+ Content-Type:multipart/form-data

$ curl --form "image=@<jpeg文件路径>" "http://<address>:<port>/v1/sender/<token>"
```
### 发送文件
目前仅支持使用**POST**方法通过自建的有状态服务器才能发文件。

+ Content-Type:multipart/form-data
```
$ curl --form "file=@<文件路径>" "http://<address>:<port>/v1/sender/<token>"
```
### 发送动作
发送动作消息（最多 4 个动作）。

+ Content-Type:multipart/form-data
```
$ curl --form "action=动作名称1|http://<action host>/<action1>" "http://<address>:<port>/v1/sender/<token>"
```
## 配置文件
可以通过 yml 文件来配置 Chanify，默认路径~/.chanify.yml。

```
server:  
    host: 0.0.0.0   # 监听IP地址  
    port: 8080      # 监听端口  
    endpoint: http://my.server/path # 入口URL  
    name: Node name # 节点名称  
    secret: <secret code> # 无状态服务器使用的密钥  
    datapath: <data path> # 有状态服务器使用的数据存储路径  
    dburl: mysql://root:test@tcp(127.0.0.1:3306)/chanify?charset=utf8mb4&parseTime=true&loc=Local # 有状态服务器使用的数据库链接  
    register:  
        enable: false # 关闭注册  
        whitelist: # 白名单  
            - <user id 1>  
            - <user id 2>  
  
client: # 作为客户端发送消息时使用  
    sound: 1    # 是否有提示音  
    endpoint: <default node server endpoint>  
    token: <default token>
```
## 安全
可以通过禁用节点服务器的用户注册功能，来使 Node 服务器成为私有服务器，防止非授权用户使用。
```
chanify serve --registerable=false --whitelist=<user1 id>,<user2 id>
```
+ --registerable=false: 这个参数用来禁用用户注册
+ whitelist: 服务器禁用用户注册后，仍然可以添加使用的用户

## Chrome 插件
可以从[Chrome web store](https://chrome.google.com/webstore/detail/chanify/llpdpmhkemkjeeigibdamadahmhoebdg)下载插件.

插件有以下功能:

+ 发送选中的文本/图片/链接消息到 Chanify
+ 发送网页链接到 Chanify

## 贡献
贡献使开源社区成为了一个令人赞叹的学习，启发和创造场所。**十分感谢**您做出的任何贡献。

1. Fork 本项目
2. 切换到 dev 分支 (git checkout dev)
3. 创建您的 Feature 分支 (git checkout -b feature/AmazingFeature)
4. 提交您的更改 (git commit -m 'Add some AmazingFeature')
5. 推送到分支 (git push origin feature/AmazingFeature)
6. 开启一个 Pull Request (合并到chanify:dev分支)

## 许可证
根据 MIT 许可证分发，详情查看[LICENSE](https://github.com/chanify/chanify/blob/main/LICENSE)。



+ © 2021 GitHub, Inc.
+ [Terms](https://docs.github.com/en/github/site-policy/github-terms-of-service)
+ [Privacy](https://docs.github.com/en/github/site-policy/github-privacy-statement)
+ [Security](https://github.com/security)
+ [Status](https://www.githubstatus.com/)
+ [Docs](https://docs.github.com/)
+ [Contact GitHub](https://support.github.com/)
+ [Pricing](https://github.com/pricing)
+ [API](https://docs.github.com/)
+ [Training](https://services.github.com/)
+ [Blog](https://github.blog/)
+ [About](https://github.com/about)

Loading page
```
<font style="color:rgb(255, 92, 0) !important;">O</font>ctotree



<font style="background-color:rgb(239, 239, 239);">Login with GitHub</font>
```


> 更新: 2021-05-15 14:02:49  
> 原文: <https://www.yuque.com/u3641/dxlfpu/nm4lff>