(function($) {

    $(document).ready(function(){

        // ---------------- Main slider ----------------
		$('.sliderContent').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			prevArrow: $('.sliderContent--left'),
			nextArrow: $('.sliderContent--right'),
		  });
        // -------------- Main slider END --------------

    }); //document ready
    
    $(window).on('scroll', function() {
		stickyNav();
    });
    

    function fixedMenuHeightMargin() {
		$navbar = $('.navbar-starter-theme');

		if (window.innerWidth > 767) {
			var $menuHeight = $navbar.height();
		} else {
			var $menuHeight = $('.navbar-header').outerHeight();
		}
	
		$('.navSpaceHolder').css('height', $menuHeight);

	}

	function stickyNav() {
		var $navbar = $('.navbar-starter-theme');
		var $navbarHolder = $('.navSpaceHolder');

		if ($(window).scrollTop() > $navbarHolder.offset().top) {
			if (!$navbar.hasClass('sticky')) {
				fixedMenuHeightMargin();
				$navbar.addClass('sticky');
			}

		} else {
			if ($navbar.hasClass('sticky')) {
				$('.navSpaceHolder').css('height', 0);
				$navbar.removeClass('sticky').trigger('stickyRemove');
			} 
		}
	}

	$(document).on('click', '.menu li a[href^="#"]', function (event){
		event.preventDefault();
		// document.querySelector('.navbar').
		if (window.innerWidth < 768){
			$('.navbar-toggle').trigger('click');
		}
		$('html, body') .animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 132 
		}, 500);
	});	

	$(document).on('click', '.back-to-top', function (event){
		$('html, body') .animate({
			scrollTop: 0
		}, 500);
	});	


})(jQuery);
