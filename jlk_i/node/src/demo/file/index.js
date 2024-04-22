/**
 * 问：score 会创建到哪个文件夹下？
 * 答：代码运行过程中，node 命令执行时所处的目录，动态拼接出被操作文件的完整路径。
 * 如：$    node ./src/demo/file/index.js
 * 则：创建在同 src 同级目录
 */
// 导入 fs 模块
const fs = require('fs')
const path = require('path')

let scoreJson = [{
    studentID: 0,
    score: 99
}]

// 写文件 —— ./ 指的是执行 node 命令时所处目录
/**  
 * 1.   可以用绝对路径将 score.js 写入指定文件夹下，不受 node 执行所处目录影响 
 *      '/Users/xx/Desktop/node/src/demo/file/score.js'
 *      问题：可难护性差，不利于迁移
 * 2.   __dirname 当前文件所处目录，同样不受 node 执行所处目录影响
 *      __dirname = '/Users/xx/Desktop/node/src/demo/files'
 *      filename = __dirname + '/score.js'
 * 3.   path.join()拼接多个路径片段为完整的路径字符串
 *      filename = path.join(__dirname, 'score.js') 
*/
fs.writeFile(path.join(__dirname, 'score.js') , JSON.stringify(scoreJson), 'utf-8', function(err){
    if(err) throw err;
    console.log('the file has been resaved')
})

