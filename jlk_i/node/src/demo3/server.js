
// 1. 导入 http 请求
const http = require('http')
const fs = require('fs')
const path = require('path')
const host = '127.0.0.1', port = '8888'
// 2. 创建 http web 服务器
const server = http.createServer()
// 3. 绑定 request 事件
server.on('request', (req, res) => {
    let html = '<h1>Not Found</h1>'
    let url = req.url, file = ''
    
    // 要读取的文件
    file = path.join(__dirname, url)
    if (url === '/') file = path.join(__dirname, '/index.html')

    fs.readFile(file, 'utf-8', (err, data) => {
        if (data) html = data
        res.setHeader('content-type', 'text/html;charset=utf-8')
        res.end(html)
    })
})
// 4. 启动 web 服务
server.listen(port, host, () => {
    console.log(`http://${host}:${port}`)
})
