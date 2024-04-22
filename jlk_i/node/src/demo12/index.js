
// 导入 express 模块
const express = require('express'), port = 8090, host = 'http://127.0.0.1'
const qs = require('querystring') // NodeJs 内置 querystring 模块，用来处理查询字符串。该模块中提供了 parse() 函数，将查询字符串解析为对象格式。

// 创建 web 服务器
const app = express()

// 自定义 bodyParser 中间件
function middleware(req, res, next) {
    // 监听 req 对象的 data 事件，获取客户端发送到服务器的数据
    // 数据量大时，无法一次性发送完毕，客户端会进行数据切割，分批发送到服务器。req 的 data 事件可能会触发多次，需要每次触发 data 事件时，获取到的数据只是完整数据的一部分，需要手动拼接接收的数据

    let str = '' // 存储客户端发送过来的请求体
    // 监听 req 的 data 事件，拼接客户端发送回来的数据
    req.on('data', (chunk) => {
        str += chunk
    })

    // 监听 req 的 end 事件；TODO：把字符串格式的请求体数据，解析成对象格式
    req.on('end', () => {
        const body = qs.parse(str)
        // 将 body 挂载到 req.body 上（上游中间件和下游中间件及路由之间共享一份 req 与 res.）方便后面路由访问
        req.body = body
        next()
    })
}
// 注册自定义中间件
app.use(middleware)

// 定义路由
app.post('/user', (req, res) => {
    res.send('ok')
})

// 监听端口，启动 web 服务器
app.listen(port, () => {
    console.log(`Express server is running at ${host}:${port}`)
})