// 1 导入 express 模块
const express = require('express')
// 2 创建 express 服务器实例
const server = express()

// 4 定义路由
server.get('/', (req, res) => {
    // 定义错误
    throw new Error('服务器错误')
    res.send('响应请求')
})

// 5 中件间捕获整个项目中发生的异常错误，从而防止项目异常崩溃。
server.use((err, req, res, next) => {
    console.log('错误：' + err.message)
    res.send('Error：' + err.message )
})

// 3 调用 app.listen 方法，指定端口号启动 web 服务器
server.listen(8090, function() {
    console.log(`Express server running at http://127.0.0.1:8090`)
})