$(function(){
    $('#yourcity').click(function(){
        $('.popup-desk').addClass('active');     
        $('.popup').html('<p>Ваш город - Москва?<p/><div><button type="button" class="btn-yes" onclick="fun1()">Да</button><button type="button" class="btn-no" onclick="fun2()">Нет</button></div>');
    });
});
     
    
    function fun1(){
        document.querySelector('#city').innerHTML = 'Москва';
        }
    function fun2(){
        document.querySelector('#city').innerHTML = 'Не Москва';
        };

        $('.popup-desk').click(function(e){
                $(this).removeClass('active');

        });


/*
Дарья

$(function){
    $('#yourcity').click(function(){
    $('.popup-desk').addClass('active');
    $('.popup').html('<p class="popup-header">Ваш город: Москва?</p><button type="button" class="btn-yes">Да</button> <button type="button" class="btn-no">Нет</button>');
    });
*/

/*
Кира

//popup имитатор определения местоположения
$('.btn-yes').click(function() {
    let e = document.getElementById('city');
    e.style.display = 'block';
    e.style = 'display:block'; // аналог предидущей строки
    e.innerText = e.innerText + ' Москва';
    document.getElementById('popup').style.display = 'none';
});
$('.btn-no').click(function() {
    let e = document.getElementById('city');
    e.style.display = 'block';
    document.getElementById('popup').style.display = 'none';
    document.getElementById('prompt').style.display = 'block';
});
$('#prompt-ok').click(function() {
    document.getElementById('prompt').style.display = 'none';
    let e = document.getElementById('city');
    e.style.display = 'block';
    e.innerText = e.innerText + ' ' + document.getElementById('text').value;
});

setTimeout(function() {
    document.getElementById('popup').style.display = 'block';
}, 1000);

*/