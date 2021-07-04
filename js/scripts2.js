$(function(){
    $('.submenu_mover').click(function(){ // срабатывает по клику на эл.с классом submenu_mover
        if ($(this).parent().hasClass('open')) { // если у родителя этого (this) эл. класс=open (меню открыто)...
            $('.catmenu_item.open').removeClass('open').find('.submenu').animate({ // то у эл. с классом=catmenu_item очищается () класс open и для потомка с кл.=submenu срабатывает анимация
                height: 0 // высота submenu становится=0, то есть меню сворачивается
            }, 1000); // за 1000ms
        } else { // иначе 
            $('.catmenu_item.open').removeClass('open').find('.submenu').animate({ // к отрытому submenu (другому) применяется анимация
                height: 0 // т.е. его высота становиться=0
            }, 1000); // за 1000ms
            $(this).parent().addClass('open').find('.submenu').animate({ // родитель этого submenu_mover-а (на котором кликнули) присваевается кл.open, а к потомкам submenu применяется анимация
                height: ($(this).parent().find('.submenu a').length * $('.submenu a').innerHeight() + 20) // высота родителя (submenu)=количеству (length) его потомков (а) * на высоту <а> + 20
            }, 1000); // за 1000ms
        }
    });
    
    $('button.basket').click(function(){
        $('.popup-desk').addClass('active');
        $('.popup').html('<p class="popup-header">Личный кабинет</p><input type="text" name="fullname" placeholder="Логин"><input type="password" name="password" placeholder="Пароль"><button type="submit">Войти</button><a href="https://yandex.ru/" class="register">Зарегистрироваться</a>');
        $('.basket').html(6);
    });
    
    $('.popup-desk').click(function(e){
        if (e.target == this) {
            $(this).removeClass('active');
            $('.popup').empty();
            $('.basket').html(5);
        }
    });
    
 /*$('button.basket').click(function(){ // безъимянная функция по клику на кнопке с кл.=basket
        $('.popup-desk').addClass('active'); // эл. с кл.=popup-desk добавляется к.=active, ниже: эл с кл.=popup получается "на лету"
        $('.popup').html('<p class="popup-header">Личный кабинет</p><input type="text" name="fullname" placeholder="Логин"><input type="password" name="password" placeholder="Пароль"><button type="submit">Войти</button><a href="https://yandex.ru/" class="register">Зарегистрироваться</a>');
        $('.basket').html(6); // в эл. кл.=basket помещается содержимое "6"
    
    $('.popup-desk').click(function(e){
        if (e.target == this) { // 
            $(this).removeClass('active'); // 
            $('.popup').empty(); // 
            $('.basket').html(5); // 
        }
    });
*/    
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

$('#date').click(function(){
    if ($('#date').val()) {
        selected_day = makeSelectedDate($('#date').val());
        makePopup(selected_day.getFullYear(),selected_day.getMonth());
    } else {
        makePopup(TODAY.getFullYear(),TODAY.getMonth());
    }
});

$('#date').mask('00-00-0000');

$('#orderdata').on('submit', function(e){// отправка формы
    e.preventDefault();
    orderAction();
})
});