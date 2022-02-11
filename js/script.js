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

    // $('.sidebar .menu-item.division').click(function(){
    //     $('.menu-item:not(.menu-item.division)').toggleClass('inactive');
    // });


    // === scroll reveal ===
    ScrollReveal({
        // reset: true,
        distance:'40px',
        duration: 2500,
        delay: 0
    });

    ScrollReveal().reveal('.main-title, .post-title, .paragraph, #about .flex, #reference .wrap-sm, #contact .contact, .map', { origin: 'bottom'});
    ScrollReveal().reveal('#work.container', { origin: 'bottom', distance: '0'});
    ScrollReveal().reveal('.right', { origin: 'right', distance: '60px'});
    ScrollReveal().reveal('.left', { origin: 'left', distance: '60px'});
    ScrollReveal().reveal('.line:not(first-child)', { origin: 'top', distance: '60px', delay: '800'});

    // === drop-down menu ===
    $('.drop-down').hide();
    $('.main-nav li.division').click(function () {
        $('.drop-down').slideToggle('slow');
    });

    // === accordion ===
    var list = $('.accordion');    
    list.find('.wrap-sm ul').hide();
    list.find('.wrap-sm h2').on('click', function() {
        $(this).find('span.arrow').css({'width' : '0px', 'margin-left': '20px'});        
        $(this).closest('.wrap-sm').siblings().find('span.arrow').css({'width' : '60px', 'margin-left': '0px'});
        $(this).closest('.wrap-sm').css('border', '1px solid white');
        $(this).closest('.wrap-sm').siblings().css('border', 'none');
        $(this).next().slideToggle('slow');
        $(this).closest('.wrap-sm').siblings().find('ul').stop().slideUp();
    });

    // === slider ===
    $('#work img.slide-1, #work img.slide-3').hide();

    $('#work .link-1 h2').on('click', function () {
        $(this).parents('.wrap').find('img.slide-2, img.slide-3').fadeOut(200);
        $(this).parents('.wrap').find('img.slide-1').fadeIn(800);
        $(this).parents('#work.container').addClass('slide-1');
        $(this).parents('#work.container').removeClass('slide-3')
    });

    $('#work .link-2 h2').on('click', function () {
        $(this).parents('.wrap').find('img.slide-1, img.slide-3').fadeOut(200);
        $(this).parents('.wrap').find('img.slide-2').fadeIn(800);
        $(this).parents('#work.container').removeClass('slide-1 slide-3')
    });

    $('#work .link-3 h2').on('click', function () {
        $(this).parents('.wrap').find('img.slide-1, img.slide-2').fadeOut(200);
        $(this).parents('.wrap').find('img.slide-3').fadeIn(800);
        $(this).parents('#work.container').addClass('slide-3');
        $(this).parents('#work .wrap-sm').css('border', '1px solid rgb(17, 20, 26)')
    });

    // $('#work .link-4 h2').on('click', function () {
    //     $(this).parents('.wrap').removeClass('slide-2 slide-3 slide-1').addClass('slide-4')
    // });



});



