$(document).ready(function(){

    // === #home scroll hide ===
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $('#home h2, #home .wrap-sm').fadeOut('slow')
        } else {
            $('#home h2, #home .wrap-sm').fadeIn('slow')
        }
    });

    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 350) {
    //         $('#home h1').fadeOut('slow')
    //     } else {
    //         $('#home h1').fadeIn('slow')
    //     }
    // });
});



