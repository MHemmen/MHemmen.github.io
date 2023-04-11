$(document).ready(function(){
    scroll();
    $(window).scroll(scroll);

    function scroll(){
        $('.content-2 .entry, .content-3 .entry').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }

        });
    }

});