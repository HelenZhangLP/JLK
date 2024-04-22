// 创建一个 web 服务

// 引入 http 模块 HyperText Transfer Protocol
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('first node')
})

// 启动一个 TCP 服务监听输入的 port 和 host
server.listen('3000','127.0.0.1',() => {
  console.log('启动服务')
})
