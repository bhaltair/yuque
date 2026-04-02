# sw.js

Service workers are a type of web worker that serve as a proxy to the network, intercepting any requests that your PWA may make. They are event-driven and operate in a separate thread from the rest of your application.

```
<font style="color:rgb(77, 77, 77);">服务工作进程是一种 Web 辅助角色，充当网络的代理，拦截 PWA 可能发出的任何请求。它们是事件驱动的，在与应用程序其余部分不同的线程中运行。</font>

  
<font style="color:rgb(77, 77, 77);">Service workers are how progressive web apps work offline: service workers can cache essential resources and handle requests when the network is down. Every request to and from a PWA goes through the service worker, and there are a ton of different strategies for how to cache and fetch necessary resources.  
</font><font style="color:rgb(77, 77, 77);">服务工作者是渐进式 Web 应用程序离线工作的方式：服务工作者可以在网络关闭时缓存基本资源并处理请求。与 PWA 之间的每个请求都经过服务工作进程，并且对于如何缓存和获取必要的资源，有大量不同的策略。</font>

<font style="color:rgb(77, 77, 77);"></font>

<font style="color:rgb(77, 77, 77);">服务工作进程不会阻塞用户界面，而是侦听事件（例如 </font>fetch<font style="color:rgb(77, 77, 77);"> 事件）并异步处理它。</font>

<font style="color:rgb(77, 77, 77);"></font>

<font style="color:rgb(77, 77, 77);">Some common use cases for service workers:</font><font style="color:rgb(77, 77, 77);">  
</font><font style="color:rgb(77, 77, 77);">服务工作进程的一些常见用例：</font>

+ <font style="color:rgb(77, 77, 77);">Pre-caching assets</font><font style="color:rgb(77, 77, 77);"> </font><font style="color:rgb(77, 77, 77);">预缓存资产</font>
+ <font style="color:rgb(77, 77, 77);">Handling asset requests, such as deciding when to use the cache or go to the network</font><font style="color:rgb(77, 77, 77);">  
</font><font style="color:rgb(77, 77, 77);">处理资产请求，例如决定何时使用缓存或访问网络</font>
+ <font style="color:rgb(77, 77, 77);">Handling web notification related events, such as notification clicks and push events</font><font style="color:rgb(77, 77, 77);">  
</font><font style="color:rgb(77, 77, 77);">处理与 Web 通知相关的事件，例如通知点击和推送事件</font>
+ <font style="color:rgb(77, 77, 77);">Syncing your application in the background  
</font><font style="color:rgb(77, 77, 77);">在后台同步应用程序</font>

<font style="color:rgb(77, 77, 77);"></font>
```

```javascript
const CACHE_NAME = 'cool-cache';

// Add whichever assets you want to pre-cache here:
const PRECACHE_ASSETS = [
  '/assets/',
  '/src/'
]

// Listener for the install event - pre-caches our assets list on service worker install.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll(PRECACHE_ASSETS);
  })());
});

```



> 更新: 2023-08-17 14:48:59  
> 原文: <https://www.yuque.com/u3641/dxlfpu/tq0v51nlabdmdukd>