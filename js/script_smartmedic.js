$(document).ready(function(){

    // === slider ===
    // $('.slide2, .slide3, .slide4, .slide5').hide();

    $(".slides > .slide:gt(0)").hide();

    setInterval(function() {
        $('.slides > .slide:first')
            .fadeOut(6000)
            .next()
            .fadeIn(6000)
            .end()
            .appendTo('.slides');
        }, 6000
    ); 

    $('.slider .nav-manual .link1').on('click', function () {
        $(this).parents('.slides').find('.slide1').show(800);
        $(this).parents('.slides').find('.slide2, .slide3, .slide4, .slide5').hide(200);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.slider .nav-manual .link2').on('click', function () {
        $(this).parents('.slides').find('.slide2').show(800);
        $(this).parents('.slides').find('.slide1, .slide3, .slide4, .slide5').hide(200);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.slider .nav-manual .link3').on('click', function () {
        $(this).parents('.slides').find('.slide3').show(800);
        $(this).parents('.slides').find('.slide2, .slide1, .slide4, .slide5').hide(200);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.slider .nav-manual .link4').on('click', function () {
        $(this).parents('.slides').find('.slide4').show(800);
        $(this).parents('.slides').find('.slide2, .slide3, .slide1, .slide5').hide(200);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.slider .nav-manual .link5').on('click', function () {
        $(this).parents('.slides').find('.slide5').show(800);
        $(this).parents('.slides').find('.slide2, .slide3, .slide4, .slide1').hide(200);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

});



