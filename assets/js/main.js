$(window).scroll(function() {
    if ($(document).scrollTop()) {
        $(".header").addClass("sticky");
    } else {
        $(".header").removeClass("sticky");
    }
});

var length = $('#right').height() - $('#sidebar').height() + $('#right').offset().top;

    $(window).scroll(function () {

        var scroll = $(this).scrollTop();
        var height = $('#sidebar').height() + 'px';

        if (scroll < $('#right').offset().top) {

            $('#sidebar').css({
                'position': 'absolute',
                'top': '0'
            });

        } else if (scroll > length) {

            $('#sidebar').css({
                'position': 'absolute',
                'bottom': '0',
                'top': 'auto'
            });

        } else {

            $('#sidebar').css({
                'position': 'fixed',
                'top': '0',
                'height': height
            });
        }
    });
