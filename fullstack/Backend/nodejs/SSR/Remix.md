# Remix

loader 函数是其组件的后端“API”，

```typescript
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({
    posts: [
      {
        slug: "my-first-post",
        title: "My First Post",
      },
      {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For You",
      },
    ],
  });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  
  return (
    <main>
      <h1>Posts</h1>
    </main>
  );
}

```



> 更新: 2023-08-11 16:01:53  
> 原文: <https://www.yuque.com/u3641/dxlfpu/zgbcq4g30vlkmp9f>