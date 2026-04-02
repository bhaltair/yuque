# 部署 - 比较好的history部署方式



```javascript
var express = require('express')
var history = require('connect-history-api-fallback')
var morgan = require('morgan')
var mime = require('mime-types')

var app = express()
app.use(morgan('short'))
app.get('/check', function(req, res) {
  console.log('success')
  res.send('success')
})
app.use(history())
app.use(
  express.static('dist', {
    maxAge: '30d', // '1y' oneDay = 86400000
    setHeaders: function(res, path) {
      if (mime.lookup(path) === 'text/html') {
        res.setHeader('Cache-Control', 'public, max-age=0')
      }
    }
  })
)
app.listen(8080, () => {
  console.log('app listening on port 8080')
  return '0.0.0.0'
})

```





> 更新: 2019-08-29 11:42:56  
> 原文: <https://www.yuque.com/u3641/dxlfpu/tb9yhc>