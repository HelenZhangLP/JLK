// 1. 导入 express 模块
const express = require('express'), port = 8090, host = 'http://127.0.0.1'
const bodyParser = require('body-parser')

// 2. 创建 express web 服务器
const app = express()

// 4. 注册 body-parser 中间件
app.use(bodyParser.urlencoded({extended: false}))

// 5. 定义路由
app.post('/order', (req, res) => {
    console.log(req.body)
    res.send('ok')
})

// 6. 定义错误处理中间件，以防项目崩溃
app.use((err, req, res, next) => {
    res.send('Error：' + err.message )
    next()
})

// 3. app.listen 监听端口，启动服务
app.listen(port, () => {
    console.log(`Express server running at ${host}:${port}`)
})