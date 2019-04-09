$(document).ready(function () {
    $(".main__btn").click(function() {
        $('html,body').animate({
            scrollTop: $("#about").offset().top},
            "ease-in");
    });

    $(window).on("scroll", function() {
        var s = $(window).scrollTop();
        var d = $(".main").innerHeight();
        var main = $(".main__header").offset().top;
        console.log(main);
        if(s <= d - 10) {
            $("header")
                .removeClass("header__scrolled")
                .css("opacity",(main - s - 20)/main);
        }
        if(s > d - 10) {
            $("header")
                .addClass("header__scrolled")
                .css("opacity", 1);
        }
    });
});

