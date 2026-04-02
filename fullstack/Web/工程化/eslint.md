# eslint

# 'React' must be in scope when using JSX react/react-in-jsx-scope?
```javascript
  rules: {
    // suppress errors for missing 'import React' in files
   "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
   "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], //should add ".ts" if typescript project
  }
```



> 更新: 2021-05-19 15:44:14  
> 原文: <https://www.yuque.com/u3641/dxlfpu/zx99ox>