# simple-react-snippets

| Snippet | Renders |
| --- | --- |
| `imr` | Import React |
| `imrc` | Import React / Component |
| `impt` | Import PropTypes |
| `impc` | Import React / PureComponent |
| `cc` | Class Component |
| `ccc` | Class Component With Constructor |
| `sfc` | Stateless Function Component |
| `cdm` | componentDidMount |
| `cwm` | componentWillMount |
| `cwrp` | componentWillReceiveProps |
| `gds` | getDerivedStateFromProps |
| `scu` | shouldComponentUpdate |
| `cwu` | componentWillUpdate |
| `cdu` | componentDidUpdate |
| `cwu` | componentWillUpdate |
| `cdc` | componentDidCatch |
| `gsbu` | getSnapshotBeforeUpdate |
| `ss` | setState |
| `ssf` | Functional setState |
| `ren` | render |
| `rprop` | Render Prop |
| `hoc` | Higher Order Component |

## hoc

```javascript
function | (|) {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return < | {...this.props} />;
    }
  };
}
```

## sfc

```javascript
const | = props => {
  return ( | );
};

export default |;
```

## ccc - Class Component With Constructor

```javascript
function | (|) {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return < | {...this.props} />;
    }
  };
}
```

## cc - Class Component

```javascript
class | extends Component {
 state = { | },
 render() {
   return ( | );
 }
}
export default |;
```


> 更新: 2019-11-08 14:24:15  
> 原文: <https://www.yuque.com/u3641/dxlfpu/fxxgfa>