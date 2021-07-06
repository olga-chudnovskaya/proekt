let m = true;

$(function(){
    $('.yourcity').click(function(){
        $('.popup-desk').addClass('active');     
        $('.popup').html('<p>Ваш город: Москва?<p/><div><button type="button" class="btn-yes">Да</button><button type="button" class="btn-no">Нет</button></div>');
    });

    $('.btn-yes').click(function(){
        document.querySelector('#yourcity').innerHTML = 'Москва';
        
    $('.btn-no').click(function(){
        document.querySelector('#yourcity').innerHTML = 'Не Москва';
        });
            
    $('.popup-desk').click(function(e){
        $(this).removeClass('active');

    });

});
     
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
		
		
		
        