$(document).ready(function() {
	// Scroll Events
	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		// Activate menu
		if (wScroll > 20) {
			$('#header').addClass('header__active');
		}
		else {
			$('#header').removeClass('header__active');
		};
		//Scroll Effects
	});
});
