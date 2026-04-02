# tanstack

# 常用参数
+ staleTime 重新获取数据的时间间隔 默认0
+ cacheTime 数据缓存时间
+ retry 失败重试次数 默认3次
+ refetchOnWindowsFocus 
+ refetchOnReconnect 
+ refetchOnMount
+ enabled

# useQuery
```javascript
function Todos() {
  // Access the client
  const queryClient = useQueryClient()

  // Queries
  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  // Mutations
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  return (
    <div>
      <ul>
        {query.data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'Do Laundry',
          })
        }}
      >
        Add Todo
      </button>
    </div>
  )
}
```



## staleTime 重新获取数据的时间间隔 默认0
```javascript
	return useQuery({
		queryKey: ['transactions-by-address', address],
		queryFn: async () => {
			// combine from and to transactions
			const [txnIds, fromTxnIds] = await Promise.all([
				rpc.queryTransactionBlocks({
					filter: {
						ToAddress: address!,
					},
					options: {
						showInput: true,
						showEffects: true,
						showEvents: true,
					},
				}),
				rpc.queryTransactionBlocks({
					filter: {
						FromAddress: address!,
					},
					options: {
						showInput: true,
						showEffects: true,
						showEvents: true,
					},
				}),
			]);

			const inserted = new Map();
			const uniqueList: SuiTransactionBlockResponse[] = [];

			[...txnIds.data, ...fromTxnIds.data]
				.sort((a, b) => Number(b.timestampMs ?? 0) - Number(a.timestampMs ?? 0))
				.forEach((txb) => {
					if (inserted.get(txb.digest)) return;
					uniqueList.push(txb);
					inserted.set(txb.digest, true);
				});

			return uniqueList;
		},
		enabled: !!address,
		staleTime: 10 * 1000,
		refetchInterval,
```



## persist
```javascript
	return useQuery({
		queryKey: ['qredo', 'info', filter],
		queryFn: async () => backgroundClient.getQredoConnectionInfo(filter!),
		enabled: !!filter,
		staleTime: 0,
		refetchInterval: 1000,
		meta: { skipPersistedCache: true },
	});
```

## select
```javascript
	return useQuery({
		queryKey: [
			'get',
			'qredo',
			'transacions',
			qredoAPI,
			qredoID,
			networkName,
			activeAddress,
			filterStatus,
		],
		queryFn: () =>
			qredoAPI!.getTransactions({
				network: networkName!,
				address: activeAddress!,
			}),
		select: ({ list }) =>
			list.filter(({ status }) => !filterStatus?.length || filterStatus.includes(status)),
		enabled: !!(qredoAPI && qredoID && networkName && activeAddress && !forceDisabled),
		staleTime: 5000,
		refetchInterval: 5000,
	});
```

## QueryClient
```javascript
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// Only retry once by default:
			retry: 1,
			// Default stale time to 30 seconds, which seems like a sensible tradeoff between network requests and stale data.
			staleTime: 30 * 1000,
			// Default cache time to 24 hours, so that data will remain in the cache and improve wallet loading UX.
			cacheTime: 24 * 60 * 60 * 1000,
			// Disable automatic interval fetching
			refetchInterval: 0,
			refetchIntervalInBackground: false,
			refetchOnWindowFocus: false,

			refetchOnMount: true,
		},
	},
});
```

# Devtools
ReactQueryDevtools



# useMutation
突变通常用于创建/更新/删除数据或执行副作用



```javascript
function App() {
  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.post('/todos', newTodo)
    },
  })

  return (
    <div>
      {mutation.isLoading ? (
        'Adding todo...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate({ id: new Date(), title: 'Do Laundry' })
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  )
}
```



## 副作用
```javascript
useMutation({
  mutationFn: addTodo,
  onMutate: (variables) => {
    // A mutation is about to happen!

    // Optionally return a context containing data to use when for example rolling back
    return { id: 1 }
  },  
  onSuccess: (data, variables, context) => {
    // I will fire first
  },
  onError: (error, variables, context) => {
    // I will fire first

    // An error happened!
    console.log(`rolling back optimistic update with id ${context.id}`)
  },
  onSettled: (data, error, variables, context) => {
    // I will fire first
  },
})

mutate(todo, {
  onSuccess: (data, variables, context) => {
    // I will fire second!
  },
  onError: (error, variables, context) => {
    // I will fire second!
  },
  onSettled: (data, error, variables, context) => {
    // I will fire second!
  },
})
```



## optimistic updates 立即更新 乐观更新
在某些情况下，我们需要在发送请求之前立即更新 UI，以提高用户体验。例如，在添加一条待办事项时，我们可以立即将它展示在列表中，而不必等待服务器返回确认信息



```javascript
const queryClient = useQueryClient()

useMutation({
  mutationFn: updateTodo,
  // When mutate is called:
  onMutate: async (newTodo) => {
    // Cancel any outgoing refetches
    // (so they don't overwrite our optimistic update)
    // 取消 refetch
    await queryClient.cancelQueries({ queryKey: ['todos'] })

    // Snapshot the previous value
    // 获取之前的数据
    const previousTodos = queryClient.getQueryData(['todos'])

    // Optimistically update to the new value
    // 更新数据
    queryClient.setQueryData(['todos'], (old) => [...old, newTodo])

    // Return a context object with the snapshotted value
    return { previousTodos }
  },
  // If the mutation fails,
  // use the context returned from onMutate to roll back
  onError: (err, newTodo, context) => {
    // 回滚
    queryClient.setQueryData(['todos'], context.previousTodos)
  },
  // Always refetch after error or success:
  onSettled: () => {
    // 重新获取
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
})
```

## Updates from Mutation Response
```javascript
const queryClient = useQueryClient()

const mutation = useMutation({
  mutationFn: editTodo,
  onSuccess: data => {
    queryClient.setQueryData(['todo', { id: 5 }], data)
  }
})

mutation.mutate({
  id: 5,
  name: 'Do the laundry',
})

// The query below will be updated with the response from the
// successful mutation
const { status, data, error } = useQuery({
  queryKey: ['todo', { id: 5 }],
  queryFn: fetchTodoById,
})
```

# hydration


**hydrate** 注水 侵泡

**<font style="color:#DF2A3F;">dehydrate</font>** 脱水



next.js CSR SSR SSG静态站点生成

getStaticProps 打包阶段执行



## next.js


如何在服务器上预取数据并将其传递给 queryClient

+ 1 自己预取数据并将其作为 initialData
+ 2 在服务器上预取查询，冻结缓存并在客户端上解除冻结



```javascript
export async function getStaticProps() {
  const posts = await getPosts()
  return { props: { posts } }
}

function Posts(props) {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    initialData: props.posts,
  })

  // ...
}
```



**若要支持服务器上的缓存查询并设置冻结**

Prefetch the query on the server, dehydrate the cache and rehydrate it on the client



[https://codesandbox.io/s/react-query-next-js-hydration-wurll?file=/pages/_app.js](https://codesandbox.io/s/react-query-next-js-hydration-wurll?file=/pages/_app.js)

```javascript
// _app.jsx
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
    	// 解冻
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}
```



```javascript
import Head from "next/head";
import { QueryClient, dehydrate, useQuery } from "react-query";

function fetchIssues({ queryKey }) {
  const [issues, org, repo] = queryKey;
  return fetch(
    `https://api.github.com/repos/${org}/${repo}/issues`
  ).then((response) => response.json());
}

export async function getServerSideProps({ req, res, query }) {
  const org = "facebook";
  const repo = "react";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["issues", org, repo], fetchIssues);

  return {
    props: {
      // 冻结
      reactQueryData: dehydrate(queryClient),
      org,
      repo
    }
  };
}

const Issue = ({ issue }) => {
  return (
    <li>
      <h3>{issue.title}</h3>
    </li>
  );
};

export default function IndexPage({ org, repo }) {
  const issuesQuery = useQuery(["issues", org, repo], fetchIssues);
  return (
    <div>
      <Head>
        <title>{`${issuesQuery.data?.length} Issues for ${org}/${repo}`}</title>
        <meta
          name="description"
          content={`${issuesQuery.data?.length} Issues for ${org}/${repo}`}
        />
      </Head>
      <h1>
        Issues for {org}/{repo}
      </h1>
      <ul>
        {issuesQuery.data?.map((issue) => (
          <Issue key={issue.id} issue={issue} />
        ))}
      </ul>
    </div>
  );
}

```







> 更新: 2023-07-28 17:03:47  
> 原文: <https://www.yuque.com/u3641/dxlfpu/xggem509cpkw8uh4>