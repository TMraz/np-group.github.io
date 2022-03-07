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

    ScrollReveal().reveal('#about .line', { origin: 'bottom'});
    ScrollReveal().reveal('#about .main-title, #about .post-title, #about .paragraph, #about .line', {origin: 'bottom', viewOffset: {bottom: 300}});

    
});


  
  
  
    



