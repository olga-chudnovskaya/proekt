$(function(){
    $('.submenu_mover').click(function(){
        if ($(this).parent().hasClass('open')) {
        $('.catmenu_item.open').removeClass('open').find('.submenu').animate({
        height: 0
        }, 1000);
        } else if ($('.catmenu_item.open').length > 0) {
        let _this = this;
        $('.catmenu_item.open').removeClass('open').find('.submenu').animate({
        height: 0
        }, 1000, function(){
        $(_this).parent().addClass('open').find('.submenu').animate({
        height: ($(_this).parent().find('.submenu a').length * 24)
        }, 1000);
        });
        } else {
        $(this).parent().addClass('open').find('.submenu').animate({
        height: ($(this).parent().find('.submenu a').length * 24)
        }, 1000);
        }
        });
});


