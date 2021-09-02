$(document).ready(function(){

    $('#site-navigation-wrap ul.toggle').click(function(){
        $(this).toggleClass('active')
        $('.sidebar').toggleClass('active');
    })
 });