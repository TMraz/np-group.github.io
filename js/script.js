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

 
    
});