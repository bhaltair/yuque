# zustand vs recoil vs jotai

zustand



```javascript
import create from 'zustand';

const useCounter = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

import { useCounter } from './useCounter';

function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

# persist
```javascript
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useBearStore = create(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
```

## version
如果要在存储中引入重大更改（例如重命名字段），可以指定新版本号。默认情况下，如果存储中的版本与代码中的版本不匹配，则不会使用存储的值。可以使用 migrate 迁移函数（见下文）来处理中断性更改，以便保留以前存储的数据。



## migrate
```javascript
export const useBoundStore = create(
  persist(
    (set, get) => ({
      newField: 0, // let's say this field was named otherwise in version 0
    }),
    {
      // ...
      version: 1, // a migration will be triggered if the version in the storage mismatches this one
      migrate: (persistedState, version) => {
        if (version === 0) {
          // if the stored value is in version 0, we rename the field to the new name
          persistedState.newField = persistedState.oldField
          delete persistedState.oldField
        }

        return persistedState
      },
    }
  )
)
```



# immer
处理不可变

```javascript
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type State = {
  count: number
}

type Actions = {
  increment: (qty: number) => void
  decrement: (qty: number) => void
}

export const useCountStore = create(
  immer<State & Actions>((set) => ({
    count: 0,
    increment: (qty: number) =>
      set((state) => {
        state.count += qty
      }),
    decrement: (qty: number) =>
      set((state) => {
        state.count -= qty
      }),
  }))
)
```



> 更新: 2023-07-31 11:45:44  
> 原文: <https://www.yuque.com/u3641/dxlfpu/ho457bmsepcu4lvb>