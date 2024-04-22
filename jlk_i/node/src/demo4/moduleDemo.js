
// module 对象 —— 共享模块作用域中的成员
// 每个 .js 自定义模块中都有一个 module 对象。module 对象中存储了和当前模块有关的信息

/**
 * Module {
 *  exports: {}  自定义模块中，可以使用 Module.exports 对象，将模块内的成员共享出去。
 * }
 */

/**
 * Module.exports = exports 指向同一个对象，exports 是 Module.exports 的简写形式。最终的导出结果以 module.exports 指赂的对象为准
 */

// console.log(`module.exports`, module.exports)
// console.log(`exports`, exports)

// console.log(module.exports === exports)

/**
 * Not standardized demo 1
 */

// exports.name = 'helen'
// exports.weight = '50kg'

// module.exports = {
//     name: 'audery',
//     weight: '22kg'
// }

// module.exports.username = 'helen'
// exports = {
//   weight: '22kg',
//   name: 'audery'
// }

exports = {
    name: 'helen',
    weight: '50kg'
  }
  module.exports = exports
  module.exports.gender = 'female'