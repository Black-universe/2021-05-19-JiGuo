var help_nav_ul = document.getElementById('help_nav_ul').children;
console.log(help_nav_ul);


var help_nav_div_center_two = document.getElementsByClassName('help_nav_div_center_two')[0]
var help_nav_div_center_one = document.getElementsByClassName('help_nav_div_center_one')[0]
    // for (var i = 0; i < help_nav_ul.length; i++) {
    //     help_nav_ul[i].addEventListener('click', function() {
    //         for (var i = 0; i < help_nav_ul.length; i++) {
    //             help_nav_ul[i].style.color = '#ACACAE';
    //         }
    //         this.style.color = 'black';

//     })
// }
help_nav_ul[0].addEventListener('click', function() {
    help_nav_div_center_one.style.display = 'block';
    help_nav_div_center_one.style.display = 'flex';

    help_nav_div_center_two.style.display = 'none';
})
help_nav_ul[1].addEventListener('click', function() {
    help_nav_div_center_one.style.display = 'none';
    help_nav_div_center_two.style.display = 'block';
    help_nav_div_center_two.style.display = 'flex';
})