
// 导入 express 
const express = require('express')

// 创建 web 服务器
const server = express(), host = '127.0.0.1', port = 80

// 启动 web 服务
server.listen(port, () => {
    console.log(`express server running at http://${host}/${port}`)
})