const express = require("express");
const userRouter = require("./user_router")

const app = express();

// 注册路由
app.use(userRouter);

// 注册一个 express 内置，处理静态资源的中间件
// app.use(express.static('static',{
//   extensions: ['html', 'htm']
// }))

// 日志中间件
function log_middleware(req, res, next) {
  console.log('handle log middleware')
  next();
}

// 注册中间件
app.use(log_middleware);

// 参数校验中间件
function valid_name_middleware(req, res, next) {
  const { name } = req.query;
  if (!name || !name.length) {
    res.json({
      message: "The parameter of name is required"
    })
  } else {
    next()
  }
}

app.all('*', valid_name_middleware);

app.listen(3000, () => {
  console.log("start server")
})
