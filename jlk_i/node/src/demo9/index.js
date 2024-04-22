// 导入 express 模块
const express = require('express'), port = 8090, host = 'http://127.0.0.1'
// 创建 web 服务器实例
const app = express()

// 定义 express.json 解决 json 格式请求体
app.use(express.json())

// 定义路由
app.post('/user', (req, res) => {
    // 服务端用 req.body 接收客户端发送过来的请求体，在没有配置解析表单中间件， req.body 为 undefined
    console.log(req.body)
    res.send('ok')
})

// 定义错误中间件，防止项目异常崩溃

// 使用 .listen 方法，指定端口，并启动服务
app.listen(port, () => {
    console.log(`${host}/${port}`)
})