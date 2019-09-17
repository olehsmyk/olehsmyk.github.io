$(document).ready(function () {
    $(".main__btn").click(function() {
        $('html,body').animate({
            scrollTop: $("#about").offset().top},
            "ease-in");
    });

    $(window).on("scroll", function() {
        var window_h = $(window).scrollTop();
        var main_h = $(".main").innerHeight();
        var main__header = $(".main__pretitle").offset().top;

        if(window_h <= 5) {
            $("header")
                .removeClass("header__scrolled")
                .css("opacity",1);
        }
        
        else if(window_h <= main_h - 10) {
            var op = (main__header - window_h - 100)/main__header
            $("header")
                .removeClass("header__scrolled")
                .css("opacity",op);
            if(op < 0) {
                $("header").addClass('display_none');
            }
            else {
                $("header").removeClass('display_none');
            }
        }
        if(window_h > main_h - 10) {
            $("header")
                .removeClass('display_none')
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

    /*$(window).on('scroll', function () {
        addNavActive('#main', 1);
        addNavActive('#services', 2);
        addNavActive('#ideas', 3);
        addNavActive('#purchase', 4);
        addNavActive('#projects', 5);
        addNavActive('#video', 6);
        addNavActive('#mobile', 7);
        addNavActive('#counters', 8);
        addNavActive('#posts', 9);
        addNavActive('#partners', 10);
        addNavActive('#footer', 11);
        addNavActive('#copy', 12);
    });*/
});

