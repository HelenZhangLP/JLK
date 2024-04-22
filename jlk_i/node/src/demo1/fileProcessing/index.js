/**
 * 拆解代码
 */
// 1. 导入 fs 文件系统模块
const fs = require('fs')
// 2. 导入 path 路径处理模块
const path = require('path')

/**
 * 正则匹配 <style>...</style>
 * \S 非空白字符 \s 空白字符 * 任意多次
 * [] 方括号在正则表达式中用于单个匹配，可用于字符集、排除字符集之中。
 */
const regStyle = /<style>[\s\S]*<\/style>/
// 正则匹配 <script>...</script>
const regScript = /<script>[\s\S]*<\/script>/

// 通过正则处理 css 串
function resolveCss(str) {
    var css = regStyle.exec(str), cssStr = ''
    if(!css) {
        console.log('没有找到 css 文本')
        return;
    }

    cssStr = css[0].replace('<style>', '').replace('</style>', '')

    fs.writeFile(path.join(__dirname, './generateFiles/index.css'), cssStr, 'utf8', err => {
        if(err) return console.log(`css 写入文件失败，错误信息为：${err.message}`)
        console.log(`css 写入文件成功！`)
    })
}

// 通过正则处理 js 串
function resolveScript(str) {
    var js = regScript.exec(str), jsStr = ''
    if (!js) {
        console.log('没有找到 js 脚本')
        return;
    }

    jsStr = js[0].replace('<script>', '').replace('</script>', '')

    fs.writeFile(path.join(__dirname, './generateFiles/index.js'), jsStr, 'utf-8', err => {
        return err ? console.log(`js 写入文件失败，错误信息为：${err.message}`) : console.log(`js 写入文件成功！`)
    }) 
}

// 通过正则处理 html 串
function resolveHtml(str) {
    var html = str.replace(regStyle, `<link type='stylesheet' href='./generateFiles/index.css'/>`).replace(regScript, `<script src='./generateFiles/index.js'></script>`)
    fs.writeFile(path.join(__dirname, './index.html'), html, 'utf-8', err => {
        return err ? console.log(`html 写入文件失败，错误信息为：${err.message}`) : console.log(`html 写入文件成功！`)
    })
}

/**
 * 3. 读取 ./index.html
 * 注意：添加字符编码 utf8，否则默认为 buffer
 */
fs.readFile(path.join(__dirname, './index.html'), 'utf-8', (err, data) => {
    if(err) throw err;
    resolveCss(data)
    resolveScript(data)
    resolveHtml(data)
})