## demo/demo-1
> 了解 node，使用 node api 获取计算机信息

## demo/demo-2
> 用 node 构建一个 web 服务

## demo/demo-3/

### node 工具
* nrm npm 源管理
* nvm 管理 nodeJs 版本，同 n
* nodemon 监听文件变化，自动重启服务（热启动）

### nodemon 的使用
1.  `npm i nodemon -d`
2.  package.json 配置 script `nodemon index.js`
3.  nodemon.json 配置部分监听的文件

## demo/demo-4
### 什么是 web 应用

### Express 在 web 应用中的作用
> node 中的一种 web 框架，处理 request and response

## demo/demo-5
###  web 服务如何处理一个请求

```flow
url --> 网络 --> dns解析 --> 目标服务器
```
> 目标服务器通过路由（规则）响应请求

区分路由规则的两种方式：
1.  请求方式区分（get/put/post）
2.  通过 uri (路径)区分（a/b/index.html）

### 根据以上两种方式定义路由

### express().all 的使用
1.  同一 api 路由，不管哪种请求方式，都处理响应
  ```javascript
    app.all('/demo', (req, res) => {})
  ```
2.  任何 api 路由，任何请求方式，都处理响应（如：记录日志）
  ```javascript
    app.all('*', (req, res) => {})
  ```

## demo/demo-6
* app.use 路由注册
* express.Router() 路由拆分

## 中间件的使用和介绍
* 中间件
  - application 级别使用
    1. 注册时一定是在最顶级；
    2. app.user 加载中间件；
  - router 级别
  - 异常处理
* express 中间件
  - express.static()
* 内置中间件和第三方中间件
* 自定义中间件
```javascript
/**
 * 中间件
 * demo_middleware function
 * 入参 error, request, response, next()
 */

 function demo_middleware(err, req, res, next) {
   /**
    * 1. 异常处理
    * 2. 处理业务功能，转交控制权 （next()）
    * 3. 响应请求，结束响应，当作路由的处理函数
    */
 }
```
## DEMO8 错误级别中间件
## DEMO9 中间件 express.json 的应用
## DEMO10 中间件 express.urlencoded 的应用
## DEMO11 第三方中间件 body-parser 使用
> express@4.16.2 之前经常使用，express.urlencoded 是基于 body-parser 封装的
## DEMO12 自定义中间件
## DEMO13 JSONP 请求解决跨域
## DEMO14 Promise 封装读取文件异步操作

## mysql
结构化数据库的一种，提供数据存放服务
数据库：划分存储区域
表：

1. 安装 `brew install mysql`
2. `brew list |grep mysql` 查看安装
3. `brew services list` 查看启动服务
4. `brew services start(stop) mysql` 启动服务
5.  `mysql -u root -p(password)`
6.  `show database`
7.  `use todo_development`
8.  `show tables`
9.   `select * from todos`

## Sequelize 介绍和使用

ORM 对象模型
Sequelize 作用
node 集成 Sequelize
