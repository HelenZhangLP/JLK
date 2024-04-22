// 导入 express
const express = require('express'), host='http://127.0.0.1', port = 9000

// 创建 web 服务
const app = express()

app.get('/api/jsonp', (req, res) => {
    // 获取 callback 函数名称
    const cb = req.query.callback
    // 定义要发送到客户端的数据对象
    const data = {name: 'callback', cname: '回调'}
    // 拼接出函数调用
    const scriptStr = `${cb}(${JSON.stringify(data)})`
    console.log(scriptStr)
    // 拼接字符串，响应给客户端
    res.send(scriptStr)
})

// listen 启动服务
app.listen(port, () => {
    console.log(`Express server is running at ${host}:${port}`)
})