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
        $('.basket').html('<img src="images/bootstrap-icons-1.5.0/bag-check.svg" alt="корзина"><span>1</span>');
    });
    
    $('.popup-desk').click(function(e){
        if (e.target == this) {
            $(this).removeClass('active');
            $('.popup').empty();
            $('.basket').html('<img src="images/bootstrap-icons-1.5.0/bag.svg" alt="корзина"><span>0</span>');
        }
    });
    
    $(document).on('click', '.register', function(e){
        e.preventDefault();
        if ($('.basket').html()=='<img src="images/bootstrap-icons-1.5.0/bag-check.svg" alt="корзина"><span>1</span>') {
            $('.popup').html('<p class="popup-header">Личный кабинет закрыт на ремонт.<br>Регистрации не будет до 1 января.</p><a href="https://yandex.ru/" class="register">Войти</a>');
            $('.basket').html('<img src="images/bootstrap-icons-1.5.0/bag.svg" alt="корзина"><span>1</span>');
        } else {
            $('.popup').html('<p class="popup-header">Личный кабинет</p><input type="text" name="fullname" placeholder="Логин"><input type="password" name="password" placeholder="Пароль"><button type="submit">Войти</button><a href="https://yandex.ru/" class="register">Зарегистрироваться</a>');
            $('.basket').html('<img src="images/bootstrap-icons-1.5.0/bag-check.svg" alt="корзина"><span>1</span>');
        }
    });
    
    $(document).on('click', 'button[type="submit"]', function(){
        alert('OGOGO!!!');
    });
    
    $(document).on('click', '.order .del > div', function(){
        tovarDelete(this);
    });
    
    $(document).on('input', '.order .num > input', function(){
        tovarChange(this);
    });
});



/* order */
const order = [
    {
        id: 5711,
        value: 10
    },
    {
        id: 3432,
        value: 10
    },
    {
        id: 4846,
        value: 10
    }
]
function tovarDelete(point) {
    let b = point.parentNode.parentNode;
    let t_id = b.querySelector('th').dataset.tovar;
    for (let i = 0; i < order.length; i++) {
        if (order[i].id == t_id) {
            order.splice(i, 1);
            console.log(t_id); // имитация отправки бэку сообщения об удалении товара
            break;
        }
    }
    b.remove();
    if (order.length > 0) {
        tovarCount();
    } else {
        orderEmpty();
    }
}
function tovarChange(point) {
    let new_quantity = point.value;
    if (new_quantity <= 0) {
        tovarDelete(point);
    } else {
        let tovar_id = point.parentNode.parentNode.querySelector('th').dataset.tovar;
        for (let i = 0; i < order.length; i++) {
            if (order[i].id == tovar_id) {
                order[i].value = new_quantity;
                console.log(order[i]);
                break;
            }
        }
        tovarCount();
    }
}
function tovarCount() { // пересчет товара
    let itog = 0; // общий итог
    for (let i = 0; i < order.length; i++) { // перебираем в цикле корзину
        const row = $('.order .table tbody tr').eq(i); // берем строку, соответствующую по порядковому номеру перебираемому товару в корзине
        row.find('th').html(i + 1); // выставляем порядковый номер товара. +1 потому что надо считать с 1, а у нас счет с 0
        row.find('.sum').html(row.find('.rub').html() * order[i].value); // в ячейку с классом sum кладем произведение количества товара, взятого из корзины, на цену товара, взятую из ячейки с классом rub
        itog += +row.find('.sum').html(); // плюсуем к итогу содержимое ячейки с классом sum (произведение количества на цену нашего товара)
    }
    $('.order .table .allsum').html(itog); // кладем итог в ячейку с классом allsum
}
function orderEmpty() {
    $('.order').addClass('empty');
}