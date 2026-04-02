# Function Component



## ProfilePageFunction.js
```javascript
import React from 'react';

function ProfilePage(props) {
  const showMessage = () => {
    alert('Followed ' + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <button onClick={handleClick}>Follow</button>
  );
}

export default ProfilePage;

```



函数式组件2

```javascript
const App = () => {
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);

  const increment = c => c + 1

  // 只有 useCallback 对应的 c1 或 c2 的值改变时，才会返回新的函数
  const increment1 = useCallback(() => setC1(increment), [c1]);
  const increment2 = useCallback(() => setC2(increment), [c2]);

  return (<View>
    <Text> Counter 1 is {c1} </Text>
    <Text> Counter 2 is {c2} </Text>
    <Text> Counter 3 is {c3} </Text>
    <View>
      <Button onClick={increment1}>Increment Counter 1</Button>
      <Button onClick={increment2}>Increment Counter 2</Button>
      <Button onClick={() => setC3(increment)}>Increment Counter 3</Button>
    </View>
  </View>)
}
```



## ProfilePageClass.js
```javascript
import React from 'react';

class ProfilePage extends React.Component {
  showMessage = () => {
    alert('Followed ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Follow</button>;
  }
}

export default ProfilePage;

```



## 参考


[https://juejin.im/post/5ceb36dd51882530be7b1585](https://juejin.im/post/5ceb36dd51882530be7b1585)



> 更新: 2019-09-18 18:24:58  
> 原文: <https://www.yuque.com/u3641/dxlfpu/ryhwdi>