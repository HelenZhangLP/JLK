
// 后缀 .js 可以省略
const moduleDemo = require('./moduleDemo') // 导入的自定义模块 = module.exports 所指向的对象，并且永远以 module.exports 指向的对象为准

console.log(moduleDemo)