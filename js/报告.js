var new_ = document.getElementsByClassName('main-new')[0];
var hot_ = document.getElementsByClassName('main-hot')[0];

var new_btn = document.getElementsByClassName('new-btn')[0];
var hot_btn = document.getElementsByClassName('hot-btn')[0];
// 点击最热模块
hot_btn.addEventListener('click', () => {
        new_.style.display = 'none';
        hot_.style.display = 'block';
        hot_btn.className = 'new-btn';
        new_btn.className = 'hot-btn';
    })
    // 点击最新模块
new_btn.addEventListener('click', () => {
    hot_.style.display = 'none';
    new_.style.display = 'block';
    hot_btn.className = 'hot-btn';
    new_btn.className = 'new-btn';
})