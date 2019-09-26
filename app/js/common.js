var
    images = document.images,
    images_total_count = images.length,
    images_loader_count = 0,
    preloader = document.getElementById('page-preloader'),
    pers_display = document.getElementById('load_pers');

for( var i = 0; i < images_total_count; i++ )
{
    image_clone = new Image();
    image_clone.onload = image_loaded;
    image_clone.onerror = image_loaded;
    image_clone.src = images[i].src;
}

function image_loaded() {
    images_loader_count++;
    pers_display.innerHTML = (((100 / images_total_count) * images_loader_count ) << 0) + '%';
    if( images_loader_count >= images_total_count)
    {
        setTimeout(function () {
            if( !preloader.classList.contains('done') )
            {
                preloader.classList.add('done');
            }
        }, 1000);
    }
}


$(function () {
    $('.burger').click(function () {
        $('.menu-content').toggleClass('menu-content_close');
    })
});
$('.sl').slick({
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});




$("a.bottomLink").click(function() {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
        duration: 900,
        easing: "swing"
    });
    return false;
});

$(function () {
    $(".feature_item1").mouseenter(function(){
        $('.item1').addClass('item_opened')
    }).mouseleave(function(){
        $('.item1').removeClass('item_opened')
    });
});
$(function () {
    $(".feature_item2").mouseenter(function(){
        $('.item2').addClass('item_opened')
    }).mouseleave(function(){
        $('.item2').removeClass('item_opened')
    });
});
$(function () {
    $(".feature_item3").mouseenter(function(){
        $('.item3').addClass('item_opened')
    }).mouseleave(function(){
        $('.item3').removeClass('item_opened')
    });
});
$(function () {
    $(".feature_item4").mouseenter(function(){
        $('.item4').addClass('item_opened')
    }).mouseleave(function(){
        $('.item4').removeClass('item_opened')
    });
});
$(function () {
    $(".feature_item5").mouseenter(function(){
        $('.item5').addClass('item_opened')
    }).mouseleave(function(){
        $('.item5').removeClass('item_opened')
    });
});
$(function () {
    $(".feature_item6").mouseenter(function(){
        $('.item6').addClass('item_opened')
    }).mouseleave(function(){
        $('.item6').removeClass('item_opened')
    });
});
$(function () {
    $(".feature_item7").mouseenter(function(){
        $('.item7').addClass('item_opened')
    }).mouseleave(function(){
        $('.item7').removeClass('item_opened')
    });
});
$(function () {
    $(".feature_item8").mouseenter(function(){
        $('.item8').addClass('item_opened')
    }).mouseleave(function(){
        $('.item8').removeClass('item_opened')
    });
});


$(function () {
    var url = "portfolio_1.html";
    $('.feature_item1').click(function () {
        $(location).attr('href',url);
    })
});
$(function () {
    var url = "portfolio_1.html";
    $('.feature_item2').click(function () {
        $(location).attr('href',url);
    })
});
$(function () {
    var url = "portfolio_1.html";
    $('.feature_item3').click(function () {
        $(location).attr('href',url);
    })
});
$(function () {
    var url = "portfolio_1.html";
    $('.feature_item4').click(function () {
        $(location).attr('href',url);
    })
});
$(function () {
    var url = "portfolio_1.html";
    $('.feature_item5').click(function () {
        $(location).attr('href',url);
    })
});
$(function () {
    var url = "portfolio_1.html";
    $('.feature_item6').click(function () {
        $(location).attr('href',url);
    })
});
$(function () {
    var url = "portfolio_1.html";
    $('.feature_item7').click(function () {
        $(location).attr('href',url);
    })
});
$(function () {
    var url = "portfolio_1.html";
    $('.feature_item8').click(function () {
        $(location).attr('href',url);
    })
});


$(document).scroll(function(){
    $('#button1').css({
        left: $(document).scrollLeft(-196)
    });
});


var translateWidth = 0;
var slideNow = 1;
var slideCount = $('.number_container').children().length;
var slideInterval = 3400;

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.number_container').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('.number').width() * (slideNow);
        $('.number_container').css({
            'transform': 'translate(0, ' + translateWidth + 'px)',
            // '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            // '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow++;
    }
}






$(document).ready(function () {

    var switchInterval = setInterval(nextSlide, slideInterval);

    $('.sl_img').hover(function () {
        clearInterval(switchInterval);
    }, function () {
        switchInterval = setInterval(nextSlide, slideInterval);
    });





    $('.category_item').click(function () {
        var category = $(this).attr('id');

        if(category == 'all'){
            $('.feature_item').addClass('hide');
            setTimeout(function () {
                $('.feature_item').removeClass('hide');
            }, 300);
        } else {
            $('.feature_item').addClass('hide');
            setTimeout(function () {
                $('.' + category).removeClass('hide');
            }, 300);
        }
    });
});




