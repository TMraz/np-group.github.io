$(document).ready(function(){

    $('#bg img').css({opacity: 0});
    $('#bg #img-orange').css({opacity: 1});

    $('#card-motorsport').hover(function () {
        $('#bg #img-green').stop().animate({
            opacity: 1
        }, 1000)},
        function () {
        $('#bg #img-green').stop().animate({
            opacity: 0
        }, 1000)
    });

    $('#card-development').hover(function () {
        $('#bg #img-red').stop().animate({
            opacity: 1
        }, 1000)},
        function () {
        $('#bg #img-red').stop().animate({
            opacity: 0
        }, 1000)
    });

    $('#card-medic').hover(function () {
        $('#bg #img-blue').stop().animate({
            opacity: 1
        }, 1000)},
        function () {
        $('#bg #img-blue').stop().animate({
            opacity: 0
        }, 1000)
    });

});