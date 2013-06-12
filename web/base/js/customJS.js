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

});


$('.navbar ul li a').bind('click', function(e) {
   
   $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 'EaseOutQuad');

   // edit: Opera requires the "html" elm. animated
});