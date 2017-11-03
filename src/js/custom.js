(function($) {

	console.log("CUSTOM START");
	// Preloader
	$(window).on('load', function() {
		console.log("CUSTOM preloader...");
		$('#preloader').delay(100).fadeOut('slow', function() {
			$(this).remove();
		});
	});

	// Hero rotating texts
	$("#hero .rotating").Morphext({
		animation : "flipInX",
		separator : ",",
		speed : 5000
	});

	// Init Wow
	wow = new WOW({
		animateClass : 'animated',
		offset : 100
	});
	wow.init();

	// Navigation scrolls
	$('.navbar-nav li a').bind('click', function(event) {
		$('.navbar-nav li').removeClass('active');
		$(this).closest('li').addClass('active');
		var $anchor = $(this);
		var nav = $($anchor.attr('href'));
		if (nav.length) {
			$('html, body').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');

			event.preventDefault();
		}
	});

	// jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar-default").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}

	});

})(jQuery);