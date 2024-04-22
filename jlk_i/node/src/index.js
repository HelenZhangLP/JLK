exports.a = 1
console.log(module.exports === exports, module.exports, exports)
exports = 1
console.log(module.exports === exports, module.exports, exports, this)
module.exports = 1
console.log(module.exports === exports, module.exports, exports, this)