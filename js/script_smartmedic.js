$(document).ready(function(){

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

    // === #home scroll hide ===

    ScrollReveal({
        reset: true,
        distance:'40px',
        duration: 900,
        delay: 0
    });

    ScrollReveal().reveal('.main-title, .post-title, .paragraph, .line:not(.nojs)', {origin: 'bottom'});

    if (window.matchMedia('(min-width:901px) and (max-height: 650px)').matches) {
        ScrollReveal().reveal('#about .main-title, #about .post-title, #about .paragraph, #about .line', {origin: 'bottom', viewOffset: {bottom: 0}});
    };

    if (window.matchMedia('(min-width:799px) and (max-width:999px) and (min-height: 1101px)').matches) {
        ScrollReveal().reveal('#about .main-title, #about .post-title, #about .paragraph, #about .line', {origin: 'bottom', viewOffset: {bottom: 500}});
    };

    if (window.matchMedia('(min-width:799px) and (max-width:999px) and (min-height: 1201px)').matches) {
        ScrollReveal().reveal('#about .main-title, #about .post-title, #about .paragraph, #about .line', {origin: 'bottom', viewOffset: {bottom: 700}});
    };

    if (window.matchMedia('(min-width:401px) and (max-height: 900px)').matches) {
        ScrollReveal().reveal('#about .main-title, #about .post-title, #about .paragraph, #about .line', {origin: 'bottom', viewOffset: {bottom: 0}});
    };

    if (window.matchMedia('(min-width:599px) and (max-width:799px) and (min-height: 901px)').matches) {
        ScrollReveal().reveal('#about .main-title, #about .post-title, #about .paragraph, #about .line', {origin: 'bottom', viewOffset: {bottom: 500}});
    };

    if (window.matchMedia('(max-width:400px) and (max-height: 900px)').matches) {
        ScrollReveal().reveal('#about .main-title, #about .post-title, #about .paragraph, #about .line', {origin: 'bottom', viewOffset: {bottom: 300}});
    };

    //teardown hide
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 1600) {
    //         $('#teardown-image').fadeOut('fast')
    //     } else {
    //         $('#teardown-image').fadeIn('slow')
    //     }
    // });

    // if (window.matchMedia('(min-width:401px) and (min-height: 901px)').matches) {
    //     $(window).scroll(function () {
    //         if ($(this).scrollTop() > 800) {
    //             $('#teardown-image').fadeOut('fast')
    //         } else {
    //             $('#teardown-image').fadeIn('slow')
    //         }
    //     });
    // };

    
    
});


  
  
  
    



