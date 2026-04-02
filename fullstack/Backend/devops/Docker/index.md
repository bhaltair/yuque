# Docker

## 官方文档
[https://docs.docker.com/registry/](https://docs.docker.com/registry/)



## 使用Docker的好处


+ 拥有沙盒机制，系统隔离，绿色无污染；
+ 应用服务化，端口即服务；
+ 一次创建或配置，可以在任意地方正常运行；
+ 分享。
+ 每个部署的应用程序都是一个容器，彼此隔离，互不影响
+ 简化了自动化部署和运维的繁琐流程，只需将构建好的镜像load到服务器的docker中即可运行我们的应用程序
+ 服务器只需要安装docker即可运行构建好的应用程序镜像，不会涉及复杂的服务器环境配置，因为配置都在特定的应用程序所在的镜像中去配置即可



## 三个基本概念
+ 镜像（Image）
+ 容器（Container）
+ 仓库（Repository

Docker 利用容器来运行应用。

### 
## Dockerfile
Dockerfile是一个用来生成docker镜像的文件，其有特定的语法。



在一个路径中如果有一个Dockerfile文件，那么在这个路径下执行

命令“docker build --tag name:tag .”就可以按照描述构建

一个镜像了，其中name是镜像的名称，tag是镜像的版本（不写就是lastest）



### 语法


Dockerfile的基本指令有十三个，分别是：

FROM、MAINTAINER、RUN、CMD、EXPOSE、ENV、ADD、COPY、ENTRYPOINT、VOLUME、USER、WORKDIR、ONBUILD



```dockerfile
FROM node:9-alpine

ARG ENV=development

WORKDIR /app

COPY package*.json ./

RUN npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass && \
  npm install http-server -g && \
  npm config set registry https://registry.npm.wosai-inc.com/ && \
  npm --registry https://registry.npm.taobao.org install wenwen-ui && \
  npm install

COPY . .

RUN npm run "build:${ENV}" && \
  rm -rf node_modules

```



## 创建镜像


> docker build -t seanlook/nginx:bash_vim_Df .
>



## 镜像


### 查看已有镜像
```plain
docker image ls
```



+ login 登陆到镜像仓库
+ pull 从镜像仓库中拉取指定的镜像
+ push 将本地镜像上传到镜像仓库，要先登陆到镜像仓库
+ search 查找镜像
+ images 列出本地镜像
+ rmi 删除镜像
+ tag 标记本地镜像，将其归入某个仓库
+ build 用于使用Dockerfile创建镜像



### 查看该镜像中每一层
使用 docker history 命令查看该镜像中每一层的信息：



### 创建镜像的过程
Docker 在需要执行指令时通过创建临时镜像，运行指定的命令，再通过 docker commit 来生成新的镜像，中间过程创建的镜像不能通过docker images看到，可以通过docker inspect 镜像ID查看



## 容器
容器是从镜像创建的运行实例。它可以被启动、开始、停止、删除。每个容器都是相互隔离的、保证安全的平台。

可以把容器看做是一个简易版的 Linux 环境（包括root用户权限、进程空间、用户空间和网络空间等）和运行在其中的应用程序

### 生命周期管理
+ run 创建一个新的容器并运行一个命令
+ start/stop/restart 启动/停止/重启容器
+ kill 杀掉一个运行中的容器
+ rm 删除一个或多个容器
+ pause/unpause 暂停/恢复容器中所有进程（_pause暂时停止容器，以释放一部分CPU出来给其他服务使用_）
+ create 创建一个新的容器但不启动

### 容器操作
+ ps 列出容器
+ inspect 获取镜像/容器的元数据
+ attach 连接正在运行中的容器
+ logs 获取容器的日志
+ exec 在运行的容器中执行命令



## 仓库
存放镜像的地方，可以是私有的。



公共的

https://hub.docker.com



### Docker Registry
利用Docker Registry搭建私有仓库



registry.wosai-inc.com



### pull


### push


## 数据存储


+ 容器运行期间产生的数据是不会主动写入镜像，重新用镜像启动新的容器就会初始化
+ 容器其实都有数据持久化需求，因此一般采用data volume（数据卷）的形式来向容器提供持久化存储。
+ 当删除一个容器时，Docker 不会自动地删除一个volume。
+ 如果需要在删除容器的同时移除数据卷，可以在删除容器的时候使用 docker rm -v
+ 无主的数据卷可能会占据很多空间，要清理使用以下命令docker volume prune





## Docker compose


我所理解的docker-compose是编排容器的。例如，你有一个php镜像，一个mysql镜像，一个nginx镜像。如果没有docker-compose，那么每次启动的时候，你需要敲各个容器的启动参数，环境变量，容器命名，指定不同容器的链接参数等等一系列的操作，相当繁琐。而用了docker-composer之后，你就可以把这些命令一次性写在docker-composer.yml文件中，以后每次启动这一整个环境（含3个容器）的时候，你只要敲一个docker-composer up命令就ok了



### 启动服务
> docker-compose -f docker-compose.dev.yml up -d
>



### 例子


```bash
```
version: '2'
services:
  support-web:
    image: registry.wosai-inc.com/support-web:{{ tag }}
    restart: always
    container_name: support-web
    environment:
      - WOSAI_ENV={{ WOSAI_ENV }}
      - NODE_ENV={{ NODE_ENV }}
    build: .
    ports:
      - "{{ port }}:5000"
    volumes:
      - /app/log/support-web:/app/log/support-web
    network_mode: "host"
```
```



## 参考
[https://yeasy.gitbooks.io/docker_practice/repository/registry.html](https://yeasy.gitbooks.io/docker_practice/repository/registry.html)



> 更新: 2019-01-11 11:06:28  
> 原文: <https://www.yuque.com/u3641/dxlfpu/kukzl7>