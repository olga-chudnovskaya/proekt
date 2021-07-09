/*карусель*/
$(function(){
    sliderRun(); 
});
function sliderRun() {
    const w = $('.slide').width(); 
    const t = 3000; 
    let current = 0; 
    let left = -1; 
    let right = 1;
    let flag1 = false; 
    let flag2 = false;
    let flag3 = false;
    $('.slide').eq(current).css('left', 0);
    $('.slide').eq(left).css('left', -w); 
    $('.slide').eq(right).css('left', w);
    function moveLeft() {
        if (flag1 || flag2 || flag3) return; 
        flag1 = true; 
        flag2 = true;
        flag3 = true;
        left = current; /
        $('.slide').eq(left).animate({left: -w}, t, function(){
            flag1 = false; 
        });
        current = right; 
        $('.slide').eq(current).animate({left: 0}, t, function(){
            flag2 = false; 
        });
        right++; 
        if (right > $('.slide').length - 2) {
            right -= $('.slide').length; 
        }
        $('.slide').eq(right).css('left', w); 
        flag3 = false; 
    }
    function moveRight() { 
        if (flag1 || flag2 || flag3) return;
        flag1 = true;
        flag2 = true;
        flag3 = true;
        right = current;
        $('.slide').eq(right).animate({left: w}, t, function(){
            flag1 = false;
        });
        current = left;
        $('.slide').eq(current).animate({left: 0}, t, function(){
            flag2 = false;
        });
        left--;
        if (left < -1) {
            left += $('.slide').length;
        }
        $('.slide').eq(left).css('left', -w);
        flag3 = false;
    }
    setTimeout(everScroll, t * 2); 
    function everScroll() {
        moveLeft(); 
        setTimeout(everScroll, t * 2); 
    }
    $('.left').click(moveLeft); 
    $('.right').click(moveRight);
}
/*город*/
$(function(){
    $('#yourcity').click(function(){
        $('.popup-desk').addClass('active').html('<div class="popup gorod"><p>Ваш город: Москва</p><p>Выберите город:</p><button class="bratsk" type="button">Братск</button><button class="london"  type="button">Лондон</button><button class="moscow" type="button">Москва</button><button class="piter" type="button">Санкт-Петербург</button></div>');
        $('.gorod button').click(function(){
            if ($(this).hasClass('london')) {
                $('#yourcity').html('<p>Ваш город: Лондон</p>');
            } else if ($(this).hasClass('bratsk')) {
                $('#yourcity').html('<p>Ваш город: Братск</p>');
            } else if ($(this).hasClass('moscow')) {
                $('#yourcity').html('<p>Ваш город: Москва</p>');
            } else if ($(this).hasClass('piter')) {
                $('#yourcity').html('<p>Ваш город: Санкт-Петербург</p>');
            }
            $('.popup-desk').click();
        })
    });

    $('.submenu_mover').click(function(){
        if ($(this).parent().hasClass('open')) {
            $('.catmenu_item.open').removeClass('open').find('.submenu').animate({
                height: 0
            }, 1000);
        } else {
            $('.catmenu_item.open').removeClass('open').find('.submenu').animate({
                height: 0
            }, 1000);
            $(this).parent().addClass('open').find('.submenu').animate({
                height: ($(this).parent().find('.submenu a').length * $('.submenu a').height())
            }, 1000);
        }
    });

    $('button.basket').click(function(){
        $('.popup-desk').addClass('active');
        $('.popup-desk').html('<div class="popup"></div>');
        $('.popup').html('<p class="popup-header">Личный кабинет</p><input type="text" name="fullname" placeholder="Логин"><input type="password" name="password" placeholder="Пароль"><button type="submit">Войти</button><a href="https://yandex.ru/" class="register">Зарегистрироваться</a>');
        $('.basket').html(6);
    });

    $('.popup-desk').click(function(e){
        if (e.target == this) {
            $(this).removeClass('active');
            $('.popup-desk').empty();
            $('.basket').html(5);
        }
    });

    $(document).on('click', '.register', function(e){
        e.preventDefault();
        if ($('.basket').html()==6) {
            $('.popup').html('<p class="popup-header">Личный кабинет закрыт на ремонт.<br>Регистрации не будет до 1 января.</p><a href="https://yandex.ru/" class="register">Войти</a>');
            $('.basket').html(5);
        } else {
            $('.popup').html('<p class="popup-header">Личный кабинет</p><input type="text" name="fullname" placeholder="Логин"><input type="password" name="password" placeholder="Пароль"><button type="submit">Войти</button><a href="https://yandex.ru/" class="register">Зарегистрироваться</a>');
            $('.basket').html(6);
        }
    });

    $(document).on('click', '.order .del > div', function(){
        tovarDelete(this);
    });

    $(document).on('input', '.order .num > input', function(){
        tovarChange(this);
    });

    if ($('#date').length) {
        $('#date').click(function(){
            if ($('#date').val()) {
                selected_day = makeSelectedDate($('#date').val());
                makePopup(selected_day.getFullYear(),selected_day.getMonth());
            } else {
                makePopup(TODAY.getFullYear(),TODAY.getMonth());
            }
        });

        $('#date').mask('00-00-0000');
    }


    $('#orderdata').on('submit', function(e){
        e.preventDefault();
        orderAction();
    })
        if ($('.product').length) {
        $('.main-image').on('click', 'img', seebigimage);
        $('.small-image').on('click', 'img', changeimage);
    }
});


/*gallery*/

function seebigimage() {
    let imageurl = document.querySelector('.main-image img').src.split('_medium.jpg').join('_big.jpg');
    document.querySelector('.popup-desk').innerHTML = '<div class="popup lightbox"><img src="' + imageurl + '"><div class="cross">+</div></div>';
    let winsize = {
        w: document.documentElement.clientWidth - 120,
        h: document.documentElement.clientHeight - 120
    };
    let sides = document.querySelector('.main-image img').clientWidth / document.querySelector('.main-image img').clientHeight;
    if (winsize.w / sides > winsize.h) {
        let correction = (winsize.w - (winsize.h * sides)) / 2;
        document.querySelector('.popup').style = 'margin: 0 ' + correction + 'px';
        winsize.w = winsize.h * sides;
    } else {
        winsize.h = winsize.w / sides;
    }
     document.querySelector('.lightbox img').style = 'width:' + winsize.w + 'px;height:' + winsize.h + 'px';
    document.querySelector('.cross').addEventListener('click',function(){
        document.querySelector('.popup-desk').dispatchEvent(new Event("click"));
    });
     document.querySelector('.popup-desk').classList.add('active');
}
function changeimage(event) { 
    let imageurl = event.target.src.split('_small').join('_medium');
       document.querySelector('.main-image img').src = imageurl;
}