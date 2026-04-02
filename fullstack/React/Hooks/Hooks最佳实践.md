# Hooks 最佳实践

Hooks 是 React 16.8 的新增特性，可以让你在不编写类、不使用 state 的情况下使用 Class 的状态管理、生命周期等功能。

# Hook 使用规则

Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：
```
* <font style="color:#000000;">只能在 React 的</font><font style="color:#000000;">函数组件</font><font style="color:#000000;">中调用 Hook。</font>
  * <font style="color:#000000;">不要在循环、条件判断或者子函数中调用。</font>
  * <font style="color:#000000;">不要在其他 JavaScript 函数中调用。</font>
* <font style="color:#000000;">Hook 不能在 class 组件中使用</font>
```
# Hooks 官网文档

* [基础 Hook](https://zh-hans.reactjs.org/docs/hooks-reference.html#basic-hooks)
  * `[useState](https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate)`
  * `[useEffect](https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect)`
  * `[useContext](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext)`
* [额外的 Hook](https://zh-hans.reactjs.org/docs/hooks-reference.html#additional-hooks)
  * `[useReducer](https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer)`
  * `[useCallback](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback)`
  * `[useMemo](https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo)`
  * `[useRef](https://zh-hans.reactjs.org/docs/hooks-reference.html#useref)`
  * `[useImperativeHandle](https://zh-hans.reactjs.org/docs/hooks-reference.html#useimperativehandle)`
  * `[useLayoutEffect](https://zh-hans.reactjs.org/docs/hooks-reference.html#uselayouteffect)`
  * `[useDebugValue](https://zh-hans.reactjs.org/docs/hooks-reference.html#usedebugvalue)`

# 在 Hooks 获取数据

相当于 componentDidMount 获取数据一次，传空数组

```javascript
  ...

  function App() {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('redux');
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `http://hn.algolia.com/api/v1/search?query=${query}`,
        );
  
        setData(result.data);
      };
  
      fetchData();
    }, []);
  
    return (
      ...
    );
  }
  
  export default App;

```

# 自定义Hook

## useDataApi

```javascript
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const useDataApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

function App() {
  const [query, setQuery] = useState('redux');
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'https://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] },
  );

  return null
}

export default App;
```

# FAQ

## 我应该使用 Hook，class，还是两者混用？

* 不推荐用 Hook 重写你已有的 class，除非打算重写它们。
* 可以混合使用 class 组件和使用了 Hook 的函数组件。
* Hook 应该成为编写 React 组件的主要方式，毕竟是趋势。

## 避免不必要的重新渲染
```
* useCallback
* useMemo
* React.memo(<ReactNode>)
```
<https://jancat.github.io/post/2019/translation-usememo-and-usecallback/>

# 参考

[官方 Hooks 文档](https://zh-hans.reactjs.org/docs/hooks-intro.html)

[\[译\] 如何使用 React hooks 获取 api 接口数据](https://juejin.im/post/5d5cbf545188253f64390569)

<https://stackblitz.com/edit/react-xnrgaz>

https://taro-docs.jd.com/taro/docs/hooks.html#usestate

[React Hooks完全上手指南 衍良 蚂蚁金服](https://zhuanlan.zhihu.com/p/92211533)


> 更新: 2020-09-30 18:32:47  
> 原文: <https://www.yuque.com/u3641/dxlfpu/an9hhg>