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
        $('#about').addClass("animate")
    }
    if(isSkills) {
        $('#skills').addClass("animate")
    }
    if(isPortfolio) {
        $('#portfolio').addClass("animate")
    }
    if(isContact) {
        $('#contact').addClass("animate")
    }
});