/**
 * 用 node 获取计算机的信息
 */

// 引入 os 操作系统模块
const os = require('os');

// 获取 cpu 信息
const cpus = os .cpus();

console.log('当前系统的 cpu 数量', cpus.length); // 当前系统的 cpu 数量 4

// 获取内存信息 获取到的是字节
const memory = os.totalmem()
console.log(memory, 'bytes')
console.log('当前系统内存', memory/1024/1024/1024, 'GB') //bate/kb/mb/gb

// 当前可用内存
const freeMemory = os.freemem();
console.log(freeMemory, 'bytes');
console.log('当前系统可用内存', freeMemory/1024/1024/1024, 'GB')

/**
 * 1. node 做文件读写
 *
 fs.readFile(path.join(__dirname, 'text-1.txt'), 'utf-8', (err, data) => {
   if (err) throw err;
   console.log('text-1 的文本是',data);
 })
 *
 * 2. 封装文件读取方法
 *
   function getFileByPath(path, succCB, errCB) {
     fs.readFile(path, 'utf-8', (err, data) =>{
       if (err) return errCB(err)
       succCB(data)
     })
   }

   getFileByPath(path.join(__dirname, 'text-1.txt'),(data) => {
     console.log('获取的文本是：', data) // 获取的文本是： choosing a birthday cake
   }, (err) => {
     console.dir(err)
   })

   getFileByPath(path.join(__dirname, 'text-4.txt'),(data) => {
     console.log('获取的文本是：', data)
   }, (err) => {
     console.error(err.message) // ENOENT: no such file or directory, open '/Users/zhangliping/Documents/demo/node/node-demo/demo-1/text-4.txt'
   })
 *
 * 3. 条件读取文件，text-1 读取到了，再取 text-2 ... 以此类推
 *    采用 promise 封装
 *
   function readFileByPath(path) {
     return new Promise(function (resovle, reject) {
       fs.readFile(path, 'utf-8', (err, data) => {
         if (err) reject(err)
         resovle(data)
       })
     })
   }

  let str = '';
   readFileByPath(path.join(__dirname, 'text-1.txt'))
   .then(data => {
     str = data;
     return readFileByPath(path.join(__dirname, 'text-21.txt'))
   }).then(data => {
     str += "\n\r" + data;
     return readFileByPath(path.join(__dirname, 'text-3.txt'))
   }).then(data => {
     str += "\n\r" + data;
     console.log(str)
   })
   .catch(err => {
     console.log(err.message)
   })
 *
 * 4. 采用 async/await 封装
 */
 const fs = require('fs')
 const path = require('path')

 function readFileByPath(path) {
   return new Promise((resovle, reject) => {
     fs.readFile(path, 'utf-8', (err, data) => {
       if(err) reject(err)
       resovle(data)
     })
   })
 }

 async function readAllFile() {
   await readFileByPath(path.join(__dirname, 'text-10.txt'))
    .then(data => {
      console.log('text-1.txt', data)
    })
    .catch(err=>{
      console.log(err)
    })

    await readFileByPath(path.join(__dirname, 'text-2.txt'))
     .then(data => {
       console.log('text-2.txt', data)
     })

     await readFileByPath(path.join(__dirname, 'text-03.txt'))
      .then(data => {
        console.log('text-3.txt', data)
      })
      .catch(err=>{
        console.log(err)
      })
 }

 readAllFile()
