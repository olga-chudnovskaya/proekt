$(function(){
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
                height: ($(this).parent().find('.submenu a').length * 24)
            }, 1000);
        }
    });
    
    $('button.basket').click(function(){
        $('.popup-desk').addClass('active');
        $('.popup').html('<p class="popup-header">Личный кабинет</p><input type="text" name="fullname" placeholder="Логин"><input type="password" name="password" placeholder="Пароль"><button type="submit">Войти</button><a href="https://yandex.ru/" class="register">Зарегистрироваться</a>');
        $('.basket').html('<img src="images/bootstrap-icons-1.5.0/bag-check.svg" alt="корзина">');
    });
    
    $('.popup-desk').click(function(e){
        if (e.target == this) {
            $(this).removeClass('active');
            $('.popup').empty();
            $('.basket').html('<img src="images/bootstrap-icons-1.5.0/bag.svg" alt="корзина">');
        }
    });
    
    $(document).on('click', '.register', function(e){
        e.preventDefault();
        if ($('.basket').html()=='<img src="images/bootstrap-icons-1.5.0/bag-check.svg" alt="корзина">') {
            $('.popup').html('<p class="popup-header">Личный кабинет закрыт на ремонт.<br>Регистрации не будет до 1 января.</p><a href="https://yandex.ru/" class="register">Войти</a>');
            $('.basket').html('<img src="images/bootstrap-icons-1.5.0/bag.svg" alt="корзина">');
        } else {
            $('.popup').html('<p class="popup-header">Личный кабинет</p><input type="text" name="fullname" placeholder="Логин"><input type="password" name="password" placeholder="Пароль"><button type="submit">Войти</button><a href="https://yandex.ru/" class="register">Зарегистрироваться</a>');
            $('.basket').html('<img src="images/bootstrap-icons-1.5.0/bag-check.svg" alt="корзина">');
        }
    });
    
    $(document).on('click', 'button[type="submit"]', function(){
        alert('OGOGO!!!')
    });
    
});

