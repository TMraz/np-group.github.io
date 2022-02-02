$(document).ready(function(){

    // === hamburger menu ===
    $('ul.toggle').click(function(){
         $(this).toggleClass('active')
         $('.sidebar').toggleClass('active');
     });


    $('.sidebar .menu-item').click(function(){
        $('.sidebar').toggleClass('active')
        $('ul.toggle').toggleClass('active');
    });

    // === scroll reveal ===
    ScrollReveal({
        // reset: true,
        distance:'60px',
        duration: 2500,
        delay: 0
    });

    ScrollReveal().reveal('.main-title, .post-title, #about .paragraph', { origin: 'left'});
    ScrollReveal().reveal('.line', { delay: 600, origin: 'top'});
    ScrollReveal().reveal('.rectangle, #about .wrap-sm img', { origin: 'right'});
    ScrollReveal().reveal('#about .card, #contact .contact, #contact .map, #contact .main-title, #contact .btn', { origin: 'bottom'});


});



