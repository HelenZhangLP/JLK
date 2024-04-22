// express 创建一个 web 服务
const express = require('express');

const app = express();

// app.use((req, res) => {
//   res.json({
//     name: 'helen'
//   })
// })

// http://127.0.0.1:3000/name/:id
app.get('/name/:age', (req, res) => {
  const {age} = req.params
  res.json({
    name: 'helen',
    age
  })
})

app.post('/name', (req, res) => {
  res.send('post')
})

app.listen(3001,()=>{
  console.log('启动成功')
})
