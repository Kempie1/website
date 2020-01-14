$( document ).ready(function() {
$(window).scroll(function () {
        var nav = $('.navbar');
        var top = 10;
        if ($(window).scrollTop() >= top) {

            nav.addClass('fixed-top');

        } else {
            nav.removeClass('fixed-top');
        }
    });
});
