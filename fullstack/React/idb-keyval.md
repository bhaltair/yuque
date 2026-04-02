# idb-keyval

This is a super-simple promise-based keyval store implemented with IndexedDB,



用来 react-query 的持久化保存



```javascript
import { get, set, del } from 'idb-keyval';

function createIDBPersister(idbValidKey: IDBValidKey) {
	return {
		persistClient: async (client: PersistedClient) => {
			await set(idbValidKey, client);
		},
		restoreClient: async () => {
			return await get<PersistedClient>(idbValidKey);
		},
		removeClient: async () => {
			await del(idbValidKey);
		},
	} as Persister;
}

export const persister = createIDBPersister('queryClient.v1');

```



> 更新: 2023-07-28 14:43:06  
> 原文: <https://www.yuque.com/u3641/dxlfpu/fghau3ayyl8tbf0g>