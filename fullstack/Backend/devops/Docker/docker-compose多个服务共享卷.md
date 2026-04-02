# docker-compose 多个服务共享卷

# docker-compose 多个服务共享卷
> 比如一个服务的assets，另一个nginx的服务要使用这些静态资源，如何共享？  
Docker-compose-v3弃用volumes_from
>



## Completely within Docker
```plain
version: '3'
services:
  nginx:
    volumes:
      - asset-volume:/var/lib/assets
  asset:
    volumes:
      - asset-volume:/var/lib/assets
volumes:
  asset-volume:
```

## 使用宿主机
```plain
version: '3'
services:
  nginx:
    volumes:
      - ./assets:/var/lib/assets
  asset:
    volumes:
      - ./assets:/var/lib/assets
```

[stackoverflow.com](https://stackoverflow.com/questions/43559619/docker-compose-how-to-mount-path-from-one-to-another-container)



> 更新: 2019-01-22 10:48:48  
> 原文: <https://www.yuque.com/u3641/dxlfpu/ggw83r>