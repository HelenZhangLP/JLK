
// 引入 express
const express = require('express')
const app = express();

// 引入 router
const memberRouter = require('./router.member.js');
const skuRouter = require('./router.sku.js');

// app.user 中间件注册路由
app.use('/member',memberRouter)
app.use('/sku',skuRouter)

app.listen(3000,()=>{
  console.log('start server')
})
