// Nodemon 实现服务热监听，监听文件修改后，自动更新，不需要重启服务

/**
 * 1. npm i nodemon -d
 * 2. 修改 package.json script 配置
 * "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
     "start:node": "node index.js",
     "start": "nodemon index.js"
   },
 * 3. 添加 nodemon.json，监听指定文件
 */

 // nrm npm 的源的管理
 // nvm node 的版本切换管理 与 n 相同

const http = require('http');
const server = http.createServer((req,res) => {
  res.end(`node second <br/> config nodemon.json`)
})

server.listen(3000,'127.0.0.1',() => {
  console.log('服务启动')
})
