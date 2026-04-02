# 一次生产环境docker部署vue history模式

## 通用 - hash模式 Dockerfile


```dockerfile
FROM node:9 as builder
ARG ENV=development
# http-server 不变动也可以利用缓存
WORKDIR /code
ADD package.json /code
ADD package-lock.json /code
ADD .npmrc /code
RUN npm set strict-ssl false
RUN npm install
RUN npm install pm2 -g
ADD . /code
RUN npm run "build:${ENV}"

# 选择更小体积的基础镜像
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=builder /code/dist /usr/share/nginx/html
EXPOSE 80

```



---



## history模式 反向代理和静态资源缓存的问题


我们是在另外一台主机上配置nginx，这台机器我们暂且称为base001，然后通过反向代理跳到目标机器上。



刚开始在配置Nginx的base机器上面这样配置，发现无效



```plain
location / {
  try_files $uri $uri/ /index.html;
}
```



转而在dockerfile中修改nginx镜像的配置文件，还是没用。



在dockerfile中起一个Node应用，在这里配置history，见下面的app.js





```javascript
var express = require('express');
var history = require('connect-history-api-fallback');
var morgan = require('morgan');
var mime = require('mime-types')


var app = express();
app.use(morgan('short'));
app.get('/check', function (req, res) {
  console.log('success');
  res.send('success');
});
app.use(history());
app.use(express.static('dist', {
  maxAge: "30d", // '1y' oneDay = 86400000
  setHeaders: function (res, path) {
    if (mime.lookup(path) === 'text/html') {
      res.setHeader('Cache-Control', 'public, max-age=0')
    }
  }
}));
app.listen(8080, () => {
  console.log('app listening on port 8080');
  return '0.0.0.0'
});

```





在base001无法设置缓存相关的header，所以我转而在dockerfile中起一个Node应用，在express的static方法中，配置setHeaders



创建app.js



## 进程守护


pm2 start app.js -i max

pm2 start ecosystem.config.js

pm2 logs APP-NAME

docker exect -it CONTAINER_NAME /bin/sh



```

# Monitoring CPU/Usage of each process

docker exec -it <container-id> pm2 monit

# Listing managed processes

docker exec -it <container-id> pm2 list

# Get more information about a process

docker exec -it <container-id> pm2 show

# 0sec downtime reload all applications

docker exec -it <container-id> pm2 reload all

```



### 多环境变量


```plain
{
    "apps" : [
        {
            "script"      : "server-local.js",
            "watch"       : ["views"],
            "ignore_watch": ["node_modules"],
            "env": {
            		"PORT": 3000,
                "NODE_ENV": "development",
            },
            "env_production" : {
		            "PORT": 8080,
                "NODE_ENV": "production"
            }
        }
    ]
}
```





### 容器内使用


一个注意点 CMD里不要使用 pm2 而是要pm2-runtime

```

> RUN npm install pm2 -g
>
> CMD [ "pm2-runtime", "start", "ecosystem.config.js"]
>

```

> 更新: 2019-03-20 17:56:03  
> 原文: <https://www.yuque.com/u3641/dxlfpu/pxcf6b>