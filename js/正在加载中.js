var jizai = document.getElementsByClassName('jizai')[0]
jizai.onclick = function () {
    setInterval(function () {
        jizai.style.color = 'red'
        jizai.style.fontSize = 20 + 'px'
        jizai.innerHTML = '<img src="./img/loading-icon.gif" alt="">正在加载中....'
    }, 1000)
    setInterval(function () {
        jizai.innerHTML = '<img src="./img/loading-icon.gif" alt="">正在加载中...'
    }, 2000)
    setInterval(function () {
        jizai.innerHTML = '<img src="./img/loading-icon.gif" alt="">正在加载中..'
    }, 3000)
    setInterval(function () {
        jizai.innerHTML = '<img src="./img/loading-icon.gif" alt="">正在加载中.'
    }, 4000)
}

var btnn = document.getElementById('btnn')
var rs = document.getElementById('rs')
var a = rs.querySelector('span').innerHTML - 0
console.log(a);
btnn.onclick = function () {
    a++
    rs.innerHTML = a + '人申请'
}