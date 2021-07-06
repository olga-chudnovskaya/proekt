$(function(){
    $('.yourcity').click(function(){
        $('.popup-desk').addClass('active');     
        $('.popup').html('<p>Ваш город: Москва?<p/><div><button type="button" class="btn-yes" onclick="fun1()">Да</button><button type="button" class="btn-no" onclick="fun2()">Нет</button></div>');
    });
});
     
    
    function fun1(){
        document.querySelector('#yourcity').innerHTML = 'Москва';
        }
    function fun2(){
        document.querySelector('#yourcity').innerHTML = 'Не Москва';
        };

        $('.popup-desk').click(function(e){
                $(this).removeClass('active');

        });
	