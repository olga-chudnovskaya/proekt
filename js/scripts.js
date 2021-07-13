$(function(){
 // Выбор города
        $('#yourcity').click(function(){
            $('.popup-desk').addClass('active').html('<div class="popup gorod"><p>Ваш город - Москва?</p><button class="yes" type="button">ДА</button><button class="no"  type="button">НЕТ</button></div>');
            $('.gorod button').click(function(){
                // if $('.gorod button').index(this) == 1
                // if $(this).html() == 'НЕТ'
                if ($(this).hasClass('no')) {
                    $('#yourcity').html('Ваш город:  Немосква');
                } else {
                    $('#yourcity').html('Ваш город:  Москва');
                }
                $('.popup-desk').click();
            })
        });                     
        
        // Раскрытие пунктов боковогго меню
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
                    height: ($(this).parent().find('.submenu a').length * $('.submenu a').innerHeight())
                }, 1000);
            }
        });
        
        // Login
        $('.login').click(function(){
            $('.popup-desk').addClass('active');
            $('.popup-desk').html('<div class="popup log"></div>');
            $('.popup').html('<p class="popup-header">Личный кабинет</p><input type="text" name="fullname" placeholder="Логин"><input type="password" name="password" placeholder="Пароль"><button type="submit">Войти</button><a href="https://yandex.ru/" class="register">Зарегистрироваться</a>');
        });
        
        // Закрытие попапа по клику 
        $('.popup-desk').click(function(e){
            if (e.target == this) {
                $(this).removeClass('active');
                $('.popup-desk').empty();
            }
        });
        

        $(document).on('click', '.register', function(e){
            e.preventDefault();
            if ($('.popup').hasClass('log')) {
                $('.popup').html('<p class="popup-header">Личный кабинет закрыт на ремонт.<br>Регистрации не будет до 1 января.</p><a href="https://yandex.ru/" class="register">Войти</a>');
                $('.popup').removeClass('log');
            } else {
                $('.popup').html('<p class="popup-header">Личный кабинет</p><input type="text" name="fullname" placeholder="Логин"><input type="password" name="password" placeholder="Пароль"><button type="submit">Войти</button><a href="https://yandex.ru/" class="register">Зарегистрироваться</a>');
                $('.popup').addClass('log');
            }
        });
        // order
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
        
        
        $('#orderdata').on('submit', function(e){// отправка формы
            e.preventDefault();
            orderAction();
        })
        
        if ($('.product').length) {
            $('.main-image').on('click', 'img', seebigimage);
            $('.small-image').on('click', 'img', changeimage);
        }
    });

    /* burger-menu */
$(document).ready(function() {
	$('.btn-burger').click(function() {
		let e = document.getElementById('bottom-header');
		e.style.display = 'block';
	});
});
