$(document).ready(function(){

    // === hamburger menu ===
   $('ul.toggle').click(function(){
        $(this).toggleClass('active')
        $('.sidebar').toggleClass('active');
    });

    // === home to division ===
    $('.clickable').click(function () {
        window.location = $(this).find('a').attr('href');
    });

 });