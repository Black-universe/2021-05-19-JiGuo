// var inp_ = document.querySelectorAll('input');
// console.log(li_);

var phone_ = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/; //手机


// var span_ = document.getElementsByTagName('span');
// console.log(span_);
// for (var i = 0; i < span_.length; i++) {

//     for (var i = 0; i < span_.length; i++) {

//         span_[i].style.display = 'none';
//         inp_[i].addEventListener('focus', function() {
//             // this.style.display = 'block';
//             console.log(span_[i]);
//         })

//     }

// };

/* 手机号 */
var phone = document.getElementById('phone');
var span_phone = document.querySelector('.phone');
console.log(phone);
console.log(span_phone);
phone.addEventListener('focus', function() {
    // console.log(123);
    span_phone.style.display = 'block';

});
phone.addEventListener('blur', function() {
    // console.log(123);
    if (phone.value == '') {
        span_phone.style.display = 'block';
        span_phone.style.color = 'red';
        span_phone.innerHTML = '手机号不能为空';
        return false
    } else if (!phone_.test(phone.value)) {
        span_phone.style.display = 'block';
        span_phone.style.color = 'red';
        span_phone.innerHTML = '请输入正确的手机号';
        return false
    } else {
        // span_phone.style.display = 'block';
        span_phone.style.color = 'green';
        span_phone.innerHTML = '手机号输入正确';
    }
});

/*图片效验码 ，验证码 */
var num_img = document.querySelectorAll('#num_img');
var span_img = document.querySelectorAll('.num_img');
var pic = /^\d{4}$/; //图片数字
num_img[0].addEventListener('focus', function() {
    // console.log(123);
    span_img[0].style.display = 'block';

});
num_img[0].addEventListener('blur', function() {
    // console.log(123);
    if (num_img[0].value == '') {
        span_img[0].style.display = 'block';
        span_img[0].style.color = 'red';
        span_img[0].innerHTML = '效验码不能为空';
        return false
    } else if (!pic.test(num_img[0].value)) {
        span_img[0].style.display = 'block';
        span_img[0].style.color = 'red';
        span_img[0].innerHTML = '请输入正确的效验码';
        return false
    } else {
        // span_img[0].style.display = 'block';
        span_img[0].style.color = 'green';
        span_img[0].innerHTML = '效验码输入正确';
    }
});
num_img[1].addEventListener('focus', function() {
    // console.log(123);
    span_img[1].style.display = 'block';

});
num_img[1].addEventListener('blur', function() {
    // console.log(123);
    if (num_img[1].value == '') {
        span_img[1].style.display = 'block';
        span_img[1].style.color = 'red';
        span_img[1].innerHTML = '验证码不能为空';
        return false
    } else if (!pic.test(num_img[1].value)) {
        span_img[1].style.display = 'block';
        span_img[1].style.color = 'red';
        span_img[1].innerHTML = '请输入正确的验证码';
        return false
    } else {
        // span_img[0].style.display = 'block';
        span_img[1].style.color = 'green';
        span_img[1].innerHTML = '验证码输入正确';
    }
});

/* 用户名 */
var user = document.querySelector('#user');
var user_span = document.querySelector('.user');
var user_ = /^[\u4E00-\u9FA5A-Za-z0-9_]{6,12}$/;
var user_pic = /^\d+$/; //图片数字

user.addEventListener('focus', function() {
    // console.log(123);
    user_span.style.display = 'block';

});
user.addEventListener('blur', function() {
    // console.log(123);
    if (user.value == '') {
        user_span.style.display = 'block';
        user_span.style.color = 'red';
        user_span.innerHTML = '用户名不能为空';
        return false
    } else if (!user_.test(user.value)) {
        user_span.style.display = 'block';
        user_span.style.color = 'red';
        user_span.innerHTML = '请输入6~12位正确的用户名';
        return false
    } else {
        // span_img[0].style.display = 'block';
        user_span.style.color = 'green';
        user_span.innerHTML = '验证码输入正确';
    }
});

/* 新密码 */
var password = document.querySelector('#password');
var password_span = document.querySelector('.password');
var pass_reg = /^[A-Za-z0-9]{6,12}$/;
/* // 查看密码 */
var inpbox = document.querySelectorAll('#inpbox');


inpbox[0].addEventListener('click', function() {
    if (inpbox[0].checked) {
        password.type = "text";
        // return false;
    } else {
        password.type = "password";
    }
})


password.addEventListener('focus', function() {
    // console.log(123);
    password_span.style.display = 'block';

});
password.addEventListener('blur', function() {
    // console.log(123);
    if (password.value == '') {
        password_span.style.display = 'block';
        password_span.style.color = 'red';
        password_span.innerHTML = '密码不能为空';
        return false
    } else if (!pass_reg.test(password.value)) {
        password_span.style.display = 'block';
        password_span.style.color = 'red';
        password_span.innerHTML = '请输入6~12位正确的密码';
        return false
    } else {
        // span_img[0].style.display = 'block';
        password_span.style.color = 'green';
        password_span.innerHTML = '密码输入正确';
    }
});

var pass2 = document.querySelector('#pass2');
var pass2_span = document.querySelector('.pass2');

pass2.addEventListener('focus', function() {
    pass2_span.style.display = 'block';
})
pass2.addEventListener('blur', function() {
    if (pass2.value == '') {
        pass2_span.style.display = 'block';
        pass2_span.style.color = 'red';
        pass2_span.innerHTML = '密码不能为空';
        return false
    } else if (pass2.value != password.value) {
        pass2_span.style.display = 'block';
        pass2_span.innerHTML = '请输入相同的密码'
        pass2_span.style.color = 'red';
        return false
    } else {
        pass2_span.style.color = 'green';
        pass2_span.innerHTML = '密码输入正确';
    }
})
inpbox[1].addEventListener('click', function() {
    if (inpbox[1].checked) {
        pass2.type = "text";
        // return false;
    } else {
        pass2.type = "password";
    }
});
var btn = document.querySelector('#btn')
btn.addEventListener('click', function(e) {
        if (!phone_.test(phone.value) || !pic.test(num_img[0].value) || !pic.test(num_img[1].value) || !user_.test(user.value) || !pass_reg.test(password.value) || pass2.value != password.value) {
            // document.getElementById('btn').submit();
            e.preventDefault()
        }
    })
    // console.log(btn);