# immer

```javascript
import { useImmer } from 'use-immer';
const [state, setState] = useImmer({
    id: 14,
    email: "stewie@familyguy.com",
    profile: {
      name: "Stewie Griffin",
      bio: "You know, the... the novel you've been working on",
      age:1
    }
 });
function changeBio(newBio) {
   setState(draft => {
      draft.profile.bio = newBio;
    });
  }
```



实现不可变数据结构，可以优化性能，避免不必要的render



> 更新: 2023-07-18 11:34:49  
> 原文: <https://www.yuque.com/u3641/dxlfpu/dcd2gs5gg7uc9sil>