$(window).scroll(function () {
    function Utils() {

    }
    
    Utils.prototype = {
        constructor: Utils,
        isElementInView: function (element, fullyInView) {
            var pageTop = $(window).scrollTop();
            var pageBottom = pageTop + $(window).height();
            var elementTop = $(element).offset().top;
            var elementBottom = elementTop + $(element).height();
    
            if (fullyInView === true) {
                return ((pageTop < elementTop) && (pageBottom > elementBottom));
            } else {
                return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
            }
        }
    };
    
    var Utils = new Utils();

    var isAbout = Utils.isElementInView($('#about'), false);
    var isSkills = Utils.isElementInView($('#skills'), false);
    var isPortfolio = Utils.isElementInView($('#portfolio'), false);
    var isContact = Utils.isElementInView($('#contact'), false);

    if(isAbout) {
        setTimeout(function() {
            $('#about').addClass("animate")
        }, 500);
    }
    if(isSkills) {
        setTimeout(function() {
            $('#skills').addClass("animate")
        }, 500);
    }
    if(isPortfolio) {
        setTimeout(function() {
            $('#portfolio').addClass("animate")
        }, 500);
    }
    if(isContact) {
        setTimeout(function() {
            $('#contact').addClass("animate")
        }, 500);
    }
});