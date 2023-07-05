

$("#topbtn").click(function() {
    $('html, body').animate({
         scrollTop: $("#menu").offset().top
    }, 500);
});

// RWD-漢堡選單
jQuery(document).ready(function(){
    let ul_open = 0;
    $('#ham').click(function(){
        $(this).toggleClass('open');
        if(ul_open == 0){
            $('.menu_bar').animate({ "right": "0" }, 500);
            ul_open = 1;
        }else{
            $('.menu_bar').animate({ "right": "-51%" }, 500);
            ul_open = 0;
        }
        
    });
});