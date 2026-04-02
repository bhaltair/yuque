# HOC vs Render Props vs React Hooks

# hoc


```javascript
withRouter(withCounter(AnotherHoc))
```



# render props


```javascript
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initCounter };
  }

  increase = () => this.setState(prevState => ({ count: prevState.count + 1 }));
  decrease = () => this.setState(prevState => ({ count: prevState.count - 1 }));

  render() {
    const { count } = this.state;
    return (
      <div>
        {this.props.children({
          count,
          increase: this.increase,
          decrease: this.decrease
        })}
      </div>
    );
  }
}


import Counter from "./renderPropCounter";

const CompOne = ({ initCounter }) => (
  <Counter initCounter={initCounter}>
    {({ count, increase }) => (
      <div>
        Count: {count}
        <button onClick={increase}>+</button>
      </div>
    )}
  </Counter>
);
```



# hooks


```javascript
// count.js
import { useState } from "react";

const useCounter = initCount => {
  const [count, setCount] = useState(initCount);

  return [
    count,
    () => setCount(count => count + 1),
    () => setCount(count => count - 1)
  ];
};

// main.js
import useCounter from "./useCounter";

const CompOne = ({ initCounter }) => {
  const [count, increase] = useCounter(initCounter);

  return (
    <div>
      Count: {count}
      <button onClick={increase}>+</button>
    </div>
  );
};
```



> 更新: 2020-09-04 17:25:10  
> 原文: <https://www.yuque.com/u3641/dxlfpu/gyvnvg>