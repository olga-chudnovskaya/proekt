$(function(){
    $('.like').click(function(){
        $('.popup-desk').addClass('active');     
        $('.popup').html('<p>Посмотреть "Избранное"</p><button type="button" class="btn-like-look">Открыть</button>');
    });

   $('.login').click(function(e){
        $('.popup-desk').addClass('active');
        $('.popup').html('<p class="popup-header">Личный кабинет</p><input type="text" name="fullname" placeholder="Логин"><input type="password" name="password" placeholder="Пароль"><button type="submit">Войти</button><a href="https://yandex.ru/" class="register">Зарегистрироваться</a>');
        
    });
 
      $(document).on('click', '.register', function(e){
        $('.popup').html('<p class="popup-header">Личный кабинет закрыт на ремонт.<br>Личный кабинет закрыт на ремонт.<br>Личный кабинет закрыт на ремонт.<br></p><a href="https://yandex.ru/" class="register">Войти</a>');
    });


    $('#privet').click(function(){
        alert('Привет!')});
    
});

/*

        $('.popup-desk .register').click(function(){
            $('.popup').html('<p class="popup-header">Личный кабинет закрыт на ремонт.<br>Регистрации не будет до 1 января.</p>');
        });
        */