$(function() {
var getWindowWidth = $(window).width();

if (getWindowWidth <= 767) {
	$('.shortInfo div').removeClass("pagination-centered");
}
else 
	$('.shortInfo div').addClass("pagination-centered");

$(window).resize(function () {
var windowwidth = $(window).width();
function fixSlide() {
	if (windowwidth <= 767) {
		$('.shortInfo div').removeClass("pagination-centered");
	}
	else 
	$('.shortInfo div').addClass("pagination-centered");
}

fixSlide();	
});
});