
/*     
    function fun1(){
        document.querySelector('#yourcity').innerHTML = m;
        }
    function fun2(){
        document.querySelector('#yourcity').innerHTML = n;
        };

        $('.popup-desk').click(function(e){
                $(this).removeClass('active');

        });
*/		
		
$(function(){		
		
        /*
    1. В черхней черной полосе в шапке на любой странице проекта (ориентируемся на index) есть блок с текстом "Ваш город: Москва". Прикрепляем к нему обработчик кликов.
    2. Обработчик поднимает попап (или вызывает confirm) с вопросом "Ваш город - Москва?".
    3. Варианты ответа - true, false. В попапе их присылают обработчики на кнопках попапа, сам попап при этом закрывается. В конфирме их возвращает конфирм.
    4. При ответе false в блоке пишем "Ваш город: Немосква".
    5. При ответе true ничего больше не делаем.
    */
        /*
        // берем элемент с нужным id поиском по документу, навешиваем на него слушатель события "клик"
        document.getElementById('yourcity').addEventListener('click', function(){
            // делаем видимым блок - держатель попапа (при помощи класса active, свойства для которого у нас уже заранее прописаны). при этом мы получаем готовый скринер, уже обрабатывающий клик мимо попапа.
            document.querySelector('.popup-desk').classList.add('active');
            // кладем в держатель попапа наш попап. при этом используем заранее прописанные стили.
            document.querySelector('.popup-desk').innerHTML = '<div class="popup gorod"><p>Ваш город - Москва?</p><button type="button">ДА</button><button type="button">НЕТ</button></div>';
            // выбираем кнопки (в виде массива) и вешаем на них обработчик событий
            document.querySelectorAll('.gorod button').forEach(item => item.addEventListener('click', clickGorod));
    
            // выносим функцию-обработчик в отдельную функцию, чтобы было удобнее ее навешивать и код лучше читался
            function clickGorod(event) {
                if (event.target.innerHTML == 'НЕТ') {
                    document.getElementById('yourcity').innerHTML = '<p>Ваш город: Немосква</p>';
                } else {
                    document.getElementById('yourcity').innerHTML = '<p>Ваш город: Москва</p>';
                }
                document.querySelector('.popup-desk').dispatchEvent(new Event("click"));
            }
        });
        */
        $('#yourcity').click(function(){
            $('.popup-desk').addClass('active').html('<div class="popup gorod"><p>Ваш город - Москва?</p><button class="yes" type="button">ДА</button><button class="no"  type="button">НЕТ</button></div>');
            $('.gorod button').click(function(){
                // if $('.gorod button').index(this) == 1
                // if $(this).html() == 'НЕТ'
                if ($(this).hasClass('no')) {
                    $('#yourcity').html('<p>Ваш город: Немосква</p>');
                } else {
                    $('#yourcity').html('<p>Ваш город: Москва</p>');
                }
                $('.popup-desk').click();
            })
        });
        
        
        /*
        document.getElementById('yourcity').addEventListener('click', function(){
            (confirm('Ваш город - Москва?')) ? (document.getElementById('yourcity').innerHTML = '<p>Ваш город: Москва</p>') : (document.getElementById('yourcity').innerHTML = '<p>Ваш город: Немосква</p>');
        });
        *//*
    1. В черхней черной полосе в шапке на любой странице проекта (ориентируемся на index) есть блок с текстом "Ваш город: Москва". Прикрепляем к нему обработчик кликов.
    2. Обработчик поднимает попап (или вызывает confirm) с вопросом "Ваш город - Москва?".
    3. Варианты ответа - true, false. В попапе их присылают обработчики на кнопках попапа, сам попап при этом закрывается. В конфирме их возвращает конфирм.
    4. При ответе false в блоке пишем "Ваш город: Немосква".
    5. При ответе true ничего больше не делаем.
    */
        /*
        // берем элемент с нужным id поиском по документу, навешиваем на него слушатель события "клик"
        document.getElementById('yourcity').addEventListener('click', function(){
            // делаем видимым блок - держатель попапа (при помощи класса active, свойства для которого у нас уже заранее прописаны). при этом мы получаем готовый скринер, уже обрабатывающий клик мимо попапа.
            document.querySelector('.popup-desk').classList.add('active');
            // кладем в держатель попапа наш попап. при этом используем заранее прописанные стили.
            document.querySelector('.popup-desk').innerHTML = '<div class="popup gorod"><p>Ваш город - Москва?</p><button type="button">ДА</button><button type="button">НЕТ</button></div>';
            // выбираем кнопки (в виде массива) и вешаем на них обработчик событий
            document.querySelectorAll('.gorod button').forEach(item => item.addEventListener('click', clickGorod));
    
            // выносим функцию-обработчик в отдельную функцию, чтобы было удобнее ее навешивать и код лучше читался
            function clickGorod(event) {
                if (event.target.innerHTML == 'НЕТ') {
                    document.getElementById('yourcity').innerHTML = '<p>Ваш город: Немосква</p>';
                } else {
                    document.getElementById('yourcity').innerHTML = '<p>Ваш город: Москва</p>';
                }
                document.querySelector('.popup-desk').dispatchEvent(new Event("click"));
            }
        });
        */
        $('#yourcity').click(function(){
            $('.popup-desk').addClass('active').html('<div class="popup gorod"><p>Ваш город - Москва?</p><button class="yes" type="button">ДА</button><button class="no"  type="button">НЕТ</button></div>');
            $('.gorod button').click(function(){
                // if $('.gorod button').index(this) == 1
                // if $(this).html() == 'НЕТ'
                if ($(this).hasClass('no')) {
                    $('#yourcity').html('<p>Ваш город: Немосква</p>');
                } else {
                    $('#yourcity').html('<p>Ваш город: Москва</p>');
                }
                $('.popup-desk').click();
            })
        });
        
        
        /*
        document.getElementById('yourcity').addEventListener('click', function(){
            (confirm('Ваш город - Москва?')) ? (document.getElementById('yourcity').innerHTML = '<p>Ваш город: Москва</p>') : (document.getElementById('yourcity').innerHTML = '<p>Ваш город: Немосква</p>');
        });
        */
    });