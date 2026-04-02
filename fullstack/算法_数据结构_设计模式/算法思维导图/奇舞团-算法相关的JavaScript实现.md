# 奇舞团-算法相关的JavaScript实现

# 位运算相关


## 判断奇数偶数


> &以特定的方式组合操作二进制数中对应的位，如果对应的位都为1，那么结果就是1， 如果任意一个位是0 则结果就是0。
>



```javascript
// 0的二进制表示为: 00000000 00000000 00000000 00000000
// 1的二进制表示为: 00000000 00000000 00000000 00000001
// 2的二进制表示为: 00000000 00000000 00000000 00000010
// 3的二进制表示为: 00000000 00000000 00000000 00000011
// 4的二进制表示为: 00000000 00000000 00000000 00000100

funciton isOdd(n) {
    return n & 1 === 1;
}
```



# 二分查找


```javascript
// 非递归版本
function binarySearch(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
      let mid = parseInt((low + high) / 2);
      if(nums[mid] === target) {
        return mid;
      }
      if(nums[mid] > target) {
        high = mid - 1;
      }
      if(nums[mid] < target) {
        low = mid + 1;
      }
    }
    return -1;
  }

// 递归
function binarySearch(nums, target) {
    let low = 0;
    let high = nums.length -1;
    const binaryWalker = (nums, low, high, target) => {
      if(low > high) return -1;
      const mid = parseInt((low + high) / 2);
      if(nums[mid] === target) return mid;
      if(nums[mid] > target) return binaryWalker(nums, low, mid - 1, target);
      if(nums[mid] < target) return binaryWalker(nums, low + 1, high, target);
    }
    return binaryWalker(nums, low, high, target);

  }
```



# 常见排序
## 冒泡


```javascript
function bubbleSort(arr) {
    let i = arr.length - 1;
    while(i >= 0) {
      for(let j = 0; j < i; j++) {
        if(arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
      i--;
    }
    return arr;
  }
```



## 快排


```javascript
function quickSort(arr) {
    if(arr.length <= 1) return arr;

    let left = [];
    let right = [];

    let pivot = arr[0];

    for(let i = 1; i < arr.length; i++) {
      if(arr[i] >= pivot) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
  }
```



# 二叉树遍历相关
## 先序遍历（中->左->右）


```javascript
// 递归实现
function preOrderTraverse(root) {
    if(root) {
      console.log(root);
      preOrderTraverse(root.left);
      preOrderTraverse(root.right);
    }
  }
// 非递归实现
function preOrderTraverse(root) {
    let stack = [];

    if(root) {
      stack.push(root);
    }

    while(stack.length) {
      let temp = stack.pop();
      console.log(temp);

      if(temp.right) stack.push(temp.right);

      if(temp.left) stack.pus(temp.left);
    }
  }
```



## 层次遍历


```javascript
function levelTraverse(root) {
    if(!root) return;
    let stack = [];
    stack.push(root);

    while(stack.length) {
      let temp = stack.shift();
      console.log(temp);
      if(temp.left) stack.push(temp.left);
      if(temp.right) stack.push(temp.right);
    }
  }
```





> 更新: 2019-07-24 17:57:00  
> 原文: <https://www.yuque.com/u3641/dxlfpu/tgu66e>