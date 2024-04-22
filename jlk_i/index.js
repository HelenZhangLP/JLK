/**
 * 存储客户信息
 * for admin
 */
const fs = require('fs')
const path = require('path')
const express = require('express'), port=9000, host='http://127.0.0.1'
// 浏览器跨域处理
const cors = require('cors');
// http 请求体解析
const bodyParser = require('body-parser');

// 获取用户数据
let users = require('./db.json')

// 用户信息入库
function saveInfo(data) {
    data = {u_id: `u_${users.length}`, ...data}
    users.push(data)
    fs.writeFile(path.join(__dirname, './db.json'), JSON.stringify(users), 'utf-8', (err) => {
        if(err) throw err;
        console.log('add client info')
    })
}

// 创建 web 服务器
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 跨域处理
app.use(cors({
    origin: '*', // 允许的源
    methods: ['GET', 'POST', 'OPTIONS'], // 允许的HTTP请求方法
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header'], // 允许的HTTP请求头
    exposedHeaders: ['Content-Length', 'X-Custom-Header'], // 允许浏览器访问的响应头
    credentials: true // 是否允许发送凭证
}));

// 定义路由s
app.post('/addUser', (req, res) => {
    console.log(typeof req.body, '新增用户数据')
    saveInfo(req.body)
    res.send('OK')
})

// 启动 web 服务器
app.listen(port, () => {
    console.log(`接口服务器运行在 ${host}:${port}`)
})