$(window).scroll(function (){
    $('.mov').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) {
            $(this).addClass('bounceInUp');
        }
    });
});﻿
$(window).scroll(function (){
    $('.mov2').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+200) {
            $(this).addClass('bounceInRight');
        }
    });
});﻿
$(window).scroll(function (){
    $('.mov').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+502) {
            $(this).addClass('show');
        }
    });
});﻿
$(window).scroll(function (){
    $('.mov2').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+202) {
            $(this).addClass('show');
        }
    });
});﻿