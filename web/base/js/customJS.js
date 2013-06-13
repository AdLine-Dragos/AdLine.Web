$(function() {
var getWindowWidth = $(window).width();


if (getWindowWidth <= 767 && getWindowWidth >= 361) {
	$('.shortInfo').css('display', 'block');
	$('.shortInfo div').removeClass("pagination-centered");
	$('.mobile-wwd').css('display', 'none');
}
else if (getWindowWidth <=360)
	{
		$('.shortInfo').css('display', 'none');
		$('.mobile-wwd').css('display', 'block');
	}
else {
	$('.shortInfo').css('display', 'block');
	$('.shortInfo div').addClass("pagination-centered");
	$('.mobile-wwd').css('display', 'none');
}
	

$(window).resize(function () {
var windowwidth = $(window).width();
function fixSlide() {
	if (windowwidth <= 767 && windowwidth >= 361) {
		$('.shortInfo').css('display', 'block');
		$('.shortInfo div').removeClass("pagination-centered");
		$('.mobile-wwd').css('display', 'none');
	}
	else if (windowwidth <=360)
	{
		$('.shortInfo').css('display', 'none');
		$('.mobile-wwd').css('display', 'block');
	}
	else {
	$('.shortInfo').css('display', 'block');
	$('.shortInfo div').addClass("pagination-centered");
	$('.mobile-wwd').css('display', 'none');
	}
}

fixSlide();	
});

	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1200,'easeInOutCubic');
			return false;
		});
	});
	
	

});


$('.navbar ul li a').not($('.lang ul li a')).bind('click', function(e) {
   e.preventDefault();
   $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 1200,'easeInOutCubic');

   // edit: Opera requires the "html" elm. animated
});

