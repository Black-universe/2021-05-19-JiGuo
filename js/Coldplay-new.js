// var play_new = document.getElementsByClassName('body-ont-one');
// var play_most = document.getElementsByClassName('body-ont-two');

var play_one = document.querySelector('.body-ont-one');
var play_two = document.querySelector('.body-ont-two');
var play_three = document.querySelector('.body-ont-three');
var ul_nav = document.getElementById('new_nav').children;
console.log(ul_nav);
ul_nav[0].style.borderColor = 'red';
ul_nav[0].addEventListener('click', function() {
    play_one.style.display = '';
    play_two.style.display = 'none';
    play_three.style.display = 'none';
    ul_nav[1].style.borderColor = ''
    ul_nav[0].style.borderColor = 'red';
    ul_nav[2].style.borderColor = '';
});
ul_nav[1].addEventListener('click', function() {
    play_two.style.display = '';
    play_one.style.display = 'none';
    play_three.style.display = 'none';
    ul_nav[1].style.borderColor = 'red'
    ul_nav[0].style.borderColor = '';
    ul_nav[2].style.borderColor = '';
});
ul_nav[2].addEventListener('click', function() {
    play_three.style.display = '';
    play_two.style.display = 'none';
    play_one.style.display = 'none';

    ul_nav[1].style.borderColor = ''
    ul_nav[0].style.borderColor = '';
    ul_nav[2].style.borderColor = 'red';
});