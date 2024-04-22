const fs = require('fs')
const path = require('path')
// A - 文件读取
// fs.readFile('context.txt', (err, data) => {
//     if(err) throw err
//     console.log(data.toString())
// })

// B - Promise 封装读取文件
// let promise = new Promise((resolve, reject) => {
//     fs.readFile('context.txt', (err,data) => {
//         if(err) reject(err)
//         resolve(data)
//     })
// })

// // then 方法对结果进行处理
// promise.then(data=>{
//     console.log(data.toString())
// },err=>{
//     console.log(err)
// })

/**
 * C - Promise 封装文件读取
 * @param {*} file 
 * @returns 
 */
// function pReadFile(file) {
//     return new Promise((resolve, reject) => {
//         /**
//          * readFile 参数
//          * file
//          * (err, data) => {} 注意哦
//          */
//         require('fs').readFile(file, (err, data) => {
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }

// pReadFile('context.txt')
// .then(
//     v=>{console.log(v.toString())}, 
//     err => {console.error(err)}
// )

/**
 * D - util.promisify
 */
const util = require('util')
let uReadFile = util.promisify(fs.readFile)
uReadFile('./context.txt').then(v => console.log(v.toString()), e => console.log(e))