var jizai = document.getElementsByClassName('jizai')[0]
jizai.onclick = function () {
    setInterval(function () {
        jizai.style.color = 'red'
        jizai.style.fontSize = 20 + 'px'
        jizai.innerHTML = '正在加载中....'
    }, 1000)
    setInterval(function () {
        jizai.innerHTML = '正在加载中...'
    }, 2000)
    setInterval(function () {
        jizai.innerHTML = '正在加载中..'
    }, 3000)
    setInterval(function () {
        jizai.innerHTML = '正在加载中.'
    }, 4000)
}