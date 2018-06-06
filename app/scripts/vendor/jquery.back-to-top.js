jQuery(document).ready(function($){
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = jQuery('.js-back-to-top');

    jQuery(window).scroll(function(){
        ( jQuery(this).scrollTop() > offset ) ? $back_to_top.addClass('back-to-top-is-visible') : $back_to_top.removeClass('back-to-top-is-visible back-to-top-fade-out');
        if( jQuery(this).scrollTop() > offset_opacity )
            $back_to_top.addClass('back-to-top-fade-out');
    });

    $back_to_top.on('click', function(e){
        e.preventDefault();
        jQuery('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });
});
