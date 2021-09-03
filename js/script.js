$(document).ready(function(){

   $('ul.toggle').click(function(){
        $(this).toggleClass('active')
        $('.sidebar').toggleClass('active');
    })
 });