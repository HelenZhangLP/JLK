// 导入 http 模块
const http = require('http')
// 创建 http web 服务
const server = http.createServer()
const port='8888'; host='127.0.0.1'
// 绑定 request 事件
server.on('request', (req, res) => {
    const url = req.url
    let str = '<h1>Not Found</h1>'
    if (url === '/' || url === '/index.html') {
        str = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        str = '<h1>关于</h1>'
    }

    // 处理响应数据乱码的问题
    res.setHeader('content-type', 'text/html; charset=utf-8')
    // 响应发送给客户端
    res.end(str)
})

// 启动服务
server.listen(port, host, () => {
    console.log(`http://${host}:${port} 已启动`)
})