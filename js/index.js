/////////////////
/* 首页，酷玩等标题颜色 */
// var UL_top = document.getElementsByClassName(".top-ul");
// console.log(UL_top);
// for (var i = 0; i < UL_top.length; i++) {
//     UL_top[i].onclick = function() {
//         this.style.color = "red ";
//         this.style.fontFamily = 'Times New Roman';
//         for (var i = 0; i < UL_top.length; i++) {
//             UL_top[i].style.color = "";
//             UL_top[i].style.fontFamily = '';
//         }


//     }
// }
// console.log(aa);
///////////////////////////

/* 倒计时 */

// function tim() {
//     var inTime = new Date();
//     var newTime = new Date('2025-05-01');
//     var timer = (newTime - inTime) / 1000;
//     var t = Math.floor(timer / 60 / 60 / 24);
//     var s = Math.floor(timer / 60 / 60 % 24);
//     var f = Math.floor(timer / 60 % 60);
//     var m = Math.floor(timer % 60);
//     document.getElementById('le').innerHTML = '申请时间剩余：' + t + '天' + s + '小时' + f + '分' + m + '秒';

// }
// setInterval(tim, 1000);