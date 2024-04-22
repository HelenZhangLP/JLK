
// 引入 express web 框架
const express = require('express');

// 创建 express 实例
const app = new express();

// define route according to request mode(post/put/get/delete)
app.get('/name',(req,res) => {
  res.send('define route according to request method')
})

app.post('/name', (req,res) => {
  res.json({
    message: "define route according to request method"
  })
})

// define route according to uri
app.get('/name/byid',(req, res) => {
  const {id} = req.query;
  res.json({
    id
  })
})

app.get('/name/byname',(req, res) => {
  const {name} = req.query;
  res.json({
    name
  })
})

// app.all
app.all('/demo', (req, res) => {
  res.send('receive any request method, whether put or post');
})

app.all('*', (req, res) => {
  res.send('receive all request')
})

app.listen(3000, () => {
  console.log('server start')
})
