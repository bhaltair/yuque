# vercel edge function

# <font style="color:#DF2A3F;">不是 Node.js Runtime</font>
```javascript
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getCountdownFromKV, getNftId } from '../kv';

export const config = {
  runtime: 'edge',
};

export default async(request: VercelRequest, response: VercelResponse) => {
  const urlParams = new URL(request.url).searchParams;
  const query = Object.fromEntries(urlParams);
  const cookies = request.headers.get('cookie');
  let body;
  try {
    body = await request.json();
  } catch (e) {
    body = null;
  }
  
  return new Response(
    JSON.stringify({
      success: true
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    },
  );
}


```



平均而言，我们的边缘运行时比无服务器函数的性能更高、成本效益更高。边缘功能在我们的边缘网络上全局部署，并且可以在离触发它们的用户最近的区域自动执行。它们也没有冷启动，这意味着它们在执行代码之前不需要额外的时间来启动。



<font style="color:#DF2A3F;">edge functions also reduce latency.</font>

<font style="color:#DF2A3F;"> “Edge functions are serverless functions run at the Edge.”</font>

<font style="color:#DF2A3F;"></font>

<font style="color:#DF2A3F;">对于无服务器功能，冷启动启动时间平均为 50-500 毫秒</font>



例如执行 OAuth 回调、响应 Webhook 请求或与在短时间内未完成请求时失败的 API 交互。



```javascript
export const handler = async () => {
  return {
      statusCode: 200
    }
}
```

# edge function
If you were not aware, an Edge-based function is a bit of code that lives in the cloud that you can access via <font style="color:#DF2A3F;">an HTTP request</font>. Edge functions can be a lot cheaper to run compared to APIs that are always on. As Edge functions are only spun up when needed, they use less CPU time. Less CPU time means cheaper costs compared to using a dedicated server which always needs to be up and running.



如果您不知道，基于 Edge 的函数是一些位于云中的代码，您可以通过 HTTP 请求访问这些代码。与始终打开的 API 相比，边缘函数的运行成本要低得多。由于 Edge 函数仅在需要时启动，因此它们使用的 CPU 时间更少。与使用始终需要启动和运行的专用服务器相比，更少的 CPU 时间意味着更低的成本。



您不应该将无服务器函数和边缘函数混合使用。无服务器函数非常相似，但是，触发该函数的位置非常不同。边缘函数在边缘上运行，这意味着代码将被复制到遍布全球的一组节点中。这样做的好处是，请求从浏览器到函数的距离会更短，从而使您的应用程序运行得更快！



Cloudflare Workers利用Cloudflare传奇的CDN网络。这意味着您在 Cloudflare 中创建的功能将分布在全球 200 多个位置的边缘网络中。Cloudflare Workers将在V8引擎上快速执行。与使用NodeJs和传统的JavaScript运行时运行函数相比，此引擎要快得多。





> 更新: 2023-08-18 11:22:31  
> 原文: <https://www.yuque.com/u3641/dxlfpu/dfg8m4m67yesgr5o>