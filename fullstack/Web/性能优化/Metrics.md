# Metrics

# Important metrics to measure
+ [First Contentful Paint (FCP)](https://web.dev/fcp/)
+ [Largest Contentful Paint (LCP)](https://web.dev/lcp/)
+ [First Input Delay (FID)](https://web.dev/fid/)
+ [Time to Interactive (TTI)](https://web.dev/tti/)
+ [Total Blocking Time (TBT)](https://web.dev/tbt/)
+ [Cumulative Layout Shift (CLS)](https://web.dev/cls/)



# LCP


```javascript
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP candidate:', entry.startTime, entry);
  }
}).observe({type: 'largest-contentful-paint', buffered: true});
```

![1621062935519-9ad6fc5c-bde8-4c5c-b304-80e1f853a94e.png](./img/GAlWC4-lhBS9h0oB/1621062935519-9ad6fc5c-bde8-4c5c-b304-80e1f853a94e-658190.png)

# web-vitals


[https://github.com/GoogleChrome/web-vitals](https://github.com/GoogleChrome/web-vitals)

```javascript
import {getLCP, getFID, getCLS} from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);

```



# TTI


![1621062889763-85a6b759-a0fa-4c55-bd75-45956d9f6024.png](./img/GAlWC4-lhBS9h0oB/1621062889763-85a6b759-a0fa-4c55-bd75-45956d9f6024-285501.png)

# FID
First input delay



![1621063074865-aef98475-b15e-42a0-8379-2b9cecdd6805.png](./img/GAlWC4-lhBS9h0oB/1621063074865-aef98475-b15e-42a0-8379-2b9cecdd6805-660544.png)



```javascript
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    const delay = entry.processingStart - entry.startTime;
    console.log('FID candidate:', delay, entry);
  }
}).observe({type: 'first-input', buffered: true});
```



> 更新: 2021-05-15 15:19:33  
> 原文: <https://www.yuque.com/u3641/dxlfpu/zdt26n>