$(function(){
    $('.yourcity').click(function(){
        $('.popup-desk').addClass('active');     
        $('.popup').html('<div>Ваш город: Москва?</div><button type="button" class="btn-yes" onclick="fun1()">Да</button><button type="button" class="btn-no" onclick="fun2()">Нет</button>');
    });
    
    $('.like').click(function(){
        $('.popup-desk').addClass('active');     
        $('.popup').html('<p>Посмотреть "Избранное"</p><button type="button" class="btn-like-look">Открыть</button>');
    });

/*
    $('popup').on('click', '.btn-yes', function(e){
        html('Ваш город : Москва')(this);
    });

    $('popup').on('click', '.btn-no', function(e){
        html('Ваш город : Не Москва')(this);

    });

*/
   $('button.login').click(function(e){
        $('.popup-desk').addClass('active');
        $('.popup').html('<p class="popup-header">Личный кабинет</p><input type="text" name="fullname" placeholder="Логин"><input type="password" name="password" placeholder="Пароль"><button type="submit">Войти</button><a href="https://yandex.ru/" class="register">Зарегистрироваться</a>');
        
    });
 /*
      $(document).on('click', '.register', function(e){
        $('.popup').html('<p class="popup-header">Личный кабинет закрыт на ремонт.<br>Личный кабинет закрыт на ремонт.<br>Личный кабинет закрыт на ремонт.<br></p><a href="https://yandex.ru/" class="register">Войти</a>');
    });


    $('#privet').click(function(){
        alert('Привет!')}); */
    
});
