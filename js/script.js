$(document).ready(function(){

    // === hamburger menu ===
    $('ul.toggle').click(function(){
         $(this).toggleClass('active')
         $('.sidebar').toggleClass('active');
     });


    $('.sidebar .menu-item:not(.menu-item.division)').click(function(){
        $('.sidebar').toggleClass('active')
        $('ul.toggle').toggleClass('active');
    });

    // === drop-down menu ===
    $('.drop-down').hide();
    $('.main-nav li.division').click(function () {
        $('.drop-down').slideToggle('slow');
        $('span.arrow').toggleClass('active');
        $('.main-nav li.division').siblings().mouseenter(function () {
            $('.drop-down').slideUp('slow');
            $('span.arrow').removeClass('active');
        });
    });    

    // === scroll reveal ===
    ScrollReveal({
        // reset: true,
        distance:'40px',
        duration: 1500,
        delay: 0
    });

    ScrollReveal().reveal('.main-title, .post-title, .paragraph, #about .flex, #reference, #about .quote picture, figcaption, #contact .wrap-sm .card', { origin: 'bottom'});
    ScrollReveal().reveal('#work.container', { origin: 'bottom', distance: '0'});
    ScrollReveal().reveal('.right', { origin: 'right', distance: '60px'});
    ScrollReveal().reveal('.left', { origin: 'left', distance: '60px'});
    ScrollReveal().reveal('.line:not(first-child, .nojs)', { origin: 'top', distance: '60px', delay: '800'});

    // === accordion ===
    var list = $('.accordion');    
    list.find('.wrap-sm ul').hide();
    list.find('.wrap-sm h2').on('click', function() {
        $(this).find('span.arrow').toggleClass('active');             
        $(this).closest('.wrap-sm').siblings().find('span.arrow').removeClass('active');
        $(this).next().slideToggle('slow');
        $(this).closest('.wrap-sm').siblings().find('ul').stop().slideUp();
    });

    // === slider ===
    $('#work img.slide-1, #work img.slide-3, #work img.slide-4').hide();

    $('#work .link-1 h2').on('click', function () {
        $(this).parents('.wrap').find('img.slide-2, img.slide-3, img.slide-4').fadeOut(200);
        $(this).parents('.wrap').find('img.slide-1').fadeIn(800);
    });

    $('#work .link-2 h2').on('click', function () {
        $(this).parents('.wrap').find('img.slide-1, img.slide-3, img.slide-4').fadeOut(200);
        $(this).parents('.wrap').find('img.slide-2').fadeIn(800);
    });

    $('#work .link-3 h2').on('click', function () {
        $(this).parents('.wrap').find('img.slide-1, img.slide-2, img.slide-4').fadeOut(200);
        $(this).parents('.wrap').find('img.slide-3').fadeIn(800);
    });

    $('#work .link-4 h2').on('click', function () {
        $(this).parents('.wrap').find('img.slide-1, img.slide-2, img.slide-3').fadeOut(200);
        $(this).parents('.wrap').find('img.slide-4').fadeIn(800);
    });



});



