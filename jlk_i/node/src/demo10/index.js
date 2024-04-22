// 1. 导入 express 模块
const express = require('express'), port = 8090, host = '127.0.0.1'
// 2. 创建 express web 服务器
const server = express()
// 4. 配置解析 application/x-www-form-urlencoded 格式数据解析内置中间件
server.use(express.urlencoded({extended: false}))
// 5. 定义路由
server.post('/order', (req, res) => {
    console.log(req.body)
    res.send('ok')
})
// 6. 定义错误处理中间件，以防项目崩溃
server.use((err, req, res, next) => {
    res.send('Error：' + err.message )
    next()
})
// 3. app.listen 监听端口，启动服务
server.listen(port, () => {
    console.log(`Express server running at ${host}:${port}`)
})