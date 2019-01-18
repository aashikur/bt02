$(document).ready(function () {
	// ------------------ slidk Slider ------------------
	$(document).ready(function () {
		$('.header-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: false,
			pauseOnHover: false,
			pauseOnFocus: false,
			draggable: false
		});
	});
	// ------------------Slick Slider End------------------------
	// Wow Js 
	new WOW().init();

	// Isotope strt
	var grid = $('.protfolio_gallary').isotope();

	$('.protfolio-filter a').on('click', function () {
		var filterValue = $(this).attr('data-filter');
		grid.isotope({ filter: filterValue });
	});
	// Isotope strt


	// contect form focfixed

	$('.contact_form input, .contact_form textarea').focus(function () {
		$(this).css('background', '#F7F7F7').css('outline', 'none');
	});
	// ======================  Scroll sky =====================================
		  var offsetTop = 70 ;
	  
  $('nav #navBar a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - (offsetTop-5) 
        }, 500);
        return false;
      }
    }
  });  // End ====== scroll spy //
	// ======================= Click Active menu ========================================
	$('nav #navBar a').click(function () {
		$('nav #navBar a').removeClass("active");
		$(this).addClass("active");
	});
	// =======================Filter active menu =============================================
	$(' .protfolio-filter a').click(function () {
		$(' .protfolio-filter a').removeClass("active");
		$(this).addClass("active");
	});


	// ======================================== scroll active ============================

		
	$(window).scroll(function () {
		var scrollDistance = $(window).scrollTop();
		// Show/hide menu on scroll
		if (scrollDistance >= 350) {
			$('nav').addClass('shink');
			$('nav.navbar .navbar-nav .nav-link').addClass('color');
			$('nav.navbar .navbar-brand img').attr('src', 'img/logo-dark.png');
			$('.navbar-dark .navbar-toggler').addClass('nav_black');
		} else {
			$('nav').removeClass("shink");
			$('nav.navbar .navbar-nav .nav-link').removeClass('color');
			$('nav.navbar .navbar-brand img').attr('src', 'img/logo-light.png');
			$('.navbar-dark .navbar-toggler').removeClass('nav_black');

		}
	})// ======== Scroll function End 




});//=================== document.ready End 

$(window).on('load', function () {
	$('.wrapper_loading').hide();
});