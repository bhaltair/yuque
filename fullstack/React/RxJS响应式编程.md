# RxJS 响应式编程

> 如果你熟悉了函数式编程,请把RxJS理解为异步化的Underscore.js
>



Think of RxJS as Lodash for events.





RxJS 是一个用于处理异步和事件驱动程序的 JavaScript 库。它提供了一种响应式编程模式，使您可以使用 Observables 来处理异步数据流。以下是一个简单的示例



## 观察者模式


手动订阅，手动管理声明周期，还要通过 React 中的 state 搭建一个与 render 函数 (UI) 之间的桥梁。



```javascript
import React from 'react';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

class Timer extends React.Component {
  state = {
    val: 0,
  };

  subscription = new Subscription();

  componentDidMount() {
    const sub = interval(1000).pipe(
	  	tap((val) => this.setState({ val }))
		)
    // 添加订阅
    this.subscription.add(sub)
  }

  componentWillUnmount() {
    // 删除订阅
    this.subscription.unsubscribe()
  }

  render() {
    return <h1>{this.state.val}</h1>
  }
}
```



## Leetcode方案 rxjs + rxjs-hooks


```javascript
import React from 'react';
import { interval } from 'rxjs';
import { useObservable } from 'rxjs-hooks';

function Timer() {
  const val = useObservable(() => interval(1000), 0);

  return <h1>{val}</h1>
}

```



[https://github.com/LeetCode-OpenSource/rxjs-hooks](https://github.com/LeetCode-OpenSource/rxjs-hooks)



# sui
```css
import {
	BehaviorSubject,
	distinctUntilChanged,
	filter,
	from,
	fromEventPattern,
	map,
	merge,
	mergeWith,
	share,
	Subject,
	switchMap,
} from 'rxjs';
```





## 参考
[https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)

[https://jerryzou.com/posts/rxjs-hooks/](https://jerryzou.com/posts/rxjs-hooks/)

[https://github.com/LeetCode-OpenSource/rxjs-hooks](https://github.com/LeetCode-OpenSource/rxjs-hooks)







> 更新: 2023-07-31 17:39:11  
> 原文: <https://www.yuque.com/u3641/dxlfpu/hkhc8y>