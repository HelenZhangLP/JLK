
// 创建格式化时间方法
function formatDate(dateStr) {
    let month,day,year,hours,minutes,seconds
    month = fillZero(dateStr.getMonth())
    day = fillZero(dateStr.getDay())
    year = dateStr.getFullYear()

    hours = fillZero(dateStr.getHours())
    minutes = fillZero(dateStr.getMinutes())
    seconds = fillZero(dateStr.getSeconds())

    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`
}

// 补零 -> 2 位 月/ 2 位 日/ 2 位 时分秒
function fillZero(n) {
    return n < 9 ? '0' + n : n
}

module.exports = {
    formatDate
}