$(document).ready(function () {
    $(".main__btn").click(function() {
        $('html,body').animate({
            scrollTop: $("#about").offset().top},
            "ease-in");
    });

    $(window).on("scroll", function() {
        var window_h = $(window).scrollTop();
        var main_h = $(".main").innerHeight();
        var main__header = $(".main__header").offset().top;
        if(window_h <= main_h - 10) {
            $("header")
                .removeClass("header__scrolled")
                .css("opacity",(main__header - window_h - 20)/main__header);
        }
        if(window_h > main_h - 10) {
            $("header")
                .addClass("header__scrolled")
                .css("opacity", 1);
        }
    });

    function addNavActive(selector, number) {
        var window_h = $(window).scrollTop();
        var selector_h = $(selector).offset().top;
        var header_h = $(".header").innerHeight();

        if (($(window).innerHeight() + $(window).scrollTop()) >= $("body").height()) {
            $('.header__nav-menu li').removeClass('active');
            $('.header__nav-menu li:nth-of-type(5)').addClass('active');
        }
        else if(window_h + header_h >= selector_h) {
            $('.header__nav-menu li').removeClass('active');
            $('.header__nav-menu li:nth-of-type('+number+')').addClass('active');
        }
    }

    $(window).on('scroll', function () {
        addNavActive('#main', 1);
        addNavActive('#about', 2);
        addNavActive('#skills', 3);
        addNavActive('#portfolio', 4);
    }); 
});

