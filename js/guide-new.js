// var play_new = document.getElementsByClassName('body-ont-one');
// var play_most = document.getElementsByClassName('body-ont-two');

var guide_one = document.querySelector('.body-ont-one');
var guide_two = document.querySelector('.body-ont-two');
// var play_three = document.querySelector('.body-ont-three');
var ul_nav = document.getElementById('new_nav').children;
console.log(ul_nav);
ul_nav[0].style.borderColor = 'red';
ul_nav[0].addEventListener('click', function() {
    guide_one.style.display = '';
    guide_two.style.display = 'none';
    ul_nav[1].style.borderColor = ''
    ul_nav[0].style.borderColor = 'red';

});
ul_nav[1].addEventListener('click', function() {
    guide_two.style.display = '';
    guide_one.style.display = 'none';
    ul_nav[1].style.borderColor = 'red'
    ul_nav[0].style.borderColor = '';

});