$(document).ready(function() {
    $('.box').change(function(){
        var list = $(this).children('ul');
        //var chkd = $(this).children('input').is(":checked");
        list.slideToggle();
        $(this).toggleClass('activeBox');
    });

    $('#phone').click(function(){
        $(this).text('+7 (342) 271–63–41');
    });

    $('#mail').click(function(){
        $(this).text('\u0069\u006E\u0073\u0074\u0072\u0075\u006D\u0065\u006E\u0074\u002D\u006F\u0070\u0074\u0069\u006D\u0061\u0040\u0079\u0061\u002E\u0072\u0075');
    });

    $('#address').click(function(){
        $(this).text('614081, г. Пермь , Плеханова ул., 46 , оф. 219');
    });

    var minOffset = $('#content').offset().top;
    
    $('.menu').hide();

    $(window).scroll(function(){
        var myPos = $(window).scrollTop();
        if (myPos > 20) {
            $('.menu').fadeIn();
        } else {
            $('.menu').fadeOut();
        }
    });

    
});