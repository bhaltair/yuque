# 使用 redux-actions 简化 reducer 书写

# before
```javascript
// actionTypes.js
const BOOK_LIST_GET = 'BOOK_LIST_GET';
const BOOK_DELETE = 'BOOK_DELETE';

export default {
  /**
   *  获取书籍列表
   */
  BOOK_LIST_GET,
  /**
   *  删除书籍
   */
  BOOK_DELETE,
};

// reducer.js
import actionTypes from './actionTypes';

const initialState = {
  bookList: [],
};

const pageMainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BOOK_LIST_GET:
      return {
        ...state,
        bookList: action.bookList,
      };
    default:
      return state;
  }
};
export default pageMainReducer;
```

# **after**
```javascript
import { createActions, handleActions, combineActions } from 'redux-actions';

const defaultState = { counter: 10 };

const { increment, decrement } = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount: -amount })
});

// increment(); // { type: 'INCREMENT' }
// decrement(); // { type: 'DECREMENT' }


const reducer = handleActions(
  {
    [combineActions(increment, decrement)]: (
      state,
      { payload: { amount } }
    ) => {
      return { ...state, counter: state.counter + amount };
    }
  },
  defaultState
);

export default reducer;
```

## createAction
```javascript
import { createActions } from 'redux-actions';
import actionTypes from './actionTypes';

export default createActions({
  [actionTypes.BOOK_LIST_GET]: () => {
    const bookList = [{
      id: '1',
      title: '123',
      description: '123',
    }, {
      id: '2',
      title: '234',
      description: '234',
    }];
    return bookList;
  },
  [actionTypes.BOOK_DELETE]: (id) => {
    console.info(`删除id为${id}的Book`);
    return { id };
  },
});
```

****

## handleAction
```javascript
import { handleActions } from 'redux-actions';
import actionTypes from './actionTypes';


const initialState = {
  bookList: [],
};

const pageMainReducer = handleActions({
  [actionTypes.BOOK_LIST_GET]: (state, action) => {
    return {
      ...state,
      bookList: action.payload,
    };
  },
  [actionTypes.BOOK_DELETE]: (state, action) => {
    return {
      ...state,
      bookList: state.bookList.filter(l => l.id !== action.payload.id),
    };
  },
}, initialState);

export default pageMainReducer;
```



# ref
[https://www.jianshu.com/p/d2615a7d725e](https://www.jianshu.com/p/d2615a7d725e)



[https://redux-actions.js.org/](https://redux-actions.js.org/)

****





> 更新: 2020-09-05 14:12:44  
> 原文: <https://www.yuque.com/u3641/dxlfpu/bboh09>