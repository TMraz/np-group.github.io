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

    const mqSmall = window.matchMedia('(max-width: 499px)');
    const mqMedium = window.matchMedia('(min-width: 500px)');
    const mqLarge = window.matchMedia('(min-width: 768px)');
    const mqXL = window.matchMedia('(min-width: 1024px)');

    if (mqSmall.matches) {
        $('.site-nav, .site-menu, #contact .contact > p, .site-footer ul.navigation').hide();
    };

    if (mqMedium.matches) {
        $('#site-nav-hamburger, .sidebar, .site-nav ul.contact, #contact .contact > p').hide();
    };

    if (mqLarge.matches) {
        $('#contact .container').addClass('flex');
        $('#contact .contact > p').show();
    };

    if (mqXL.matches) {
        $('.site-nav ul.contact').show();
    };

        
});



