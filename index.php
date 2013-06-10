<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AdLine.Web - Choose your template and create your website!</title>

<!-- StyleSheets -->
<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css">
<link rel="stylesheet/less" type="text/css" href="css/styles.less"/>
<link rel="stylesheet" href="css/layerslider.css" type="text/css">
</head>

<body>
<!-- Main Body -->

<?php include 'header.html' ?>

<!--LayerSlider begin-->
<div id="slider" style="width: 80%; height: 400px;"> 
  <div class="ls-layer">  
    <img class="ls-bg" src="assets/Charity.jpg" alt="layer1-background">
  </div>
  <div class="ls-layer"> 
    <img class="ls-bg" src="assets/Charity2.jpg" alt="layer1-background"> 
  </div>
  <div class="ls-layer"> 
    <img class="ls-bg" src="assets/Charity3.jpg" alt="layer1-background"> 
  </div>
</div>
<!--LayerSlider end--> 

<!-- Short INFO - WHAT WE DO -->
<div class="container-fluid">
	<div class="row-fluid spacing">
		<div class="span12">
			<h4 class="red">WHAT WE DO</h4>
			<div class="full-width-separator"></div>
		</div>
	</div>
	<div class="row-fluid shortInfo">
		<div class="span3 pagination-centered">
		<img src="assets/what_we_do.png">
		<p>Build websites for you so that you can focus more on developing your business.</p>
		</div>
		<div class="span3  pagination-centered">
		<img src="assets/customize.png">
		<p>Help you have a unique presence on the web by customizing your website. You won't have to move a finger!</p>
		</div>
		<div class="span3 pagination-centered">
		<img src="assets/documentation2.png">
		<p>Provide a thorough documentation, ensuring an easy maintenance process afterwards.</p>
		</div>
		<div class="span3 pagination-centered">
		<img src="assets/prof_service.png">
		<p>Deliver a professional, high-quality product that will help you overcome the competition.</p>
		</div>
	</div>
	
<!-- Short INFO - WHY US -->
	<div class="row-fluid spacing">
		<div class="span12">
			<h4 class="red">WHY US</h4>
			<div class="full-width-separator"></div>
		</div>
	</div>
	<div class="row-fluid shortInfo">
		<div class="span3 pagination-centered">
		<img src="assets/fast_service.png">
		<p>We offer a fast service! Our aim is to deliver your website in less than 3 days whenever possible!</p>
		</div>
		<div class="span3  pagination-centered">
		<img src="assets/no_headaches.png">
		<p>Us taking care of everything means no headaches and more free time to enjoy for yourself.</p>
		</div>
		<div class="span3 pagination-centered">
		<img src="assets/price-quality.png">
		<p>We guarantee the best price/quality ratio on the market. You can easily afford a website that will make you stand out!</p>
		</div>
		<div class="span3 pagination-centered">
		<img src="assets/communication.png">
		<p>We consider a good communication with our customers one of our top priorities. You can always contact us!</p>
		</div>
	</div>
</div>

<!-- Scripts --> 

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script> 
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script> 
<script src="js/jquery-easing-1.3.js" type="text/javascript"></script> 
<script src="js/layerslider.kreaturamedia.jquery-min.js" type="text/javascript"></script> 
<script src="js/less-1.3.3.min.js" type="text/javascript"></script> 
<script src="js/bootstrap.min.js" type="text/javascript"></script> 
<script src="js/customJS.js" type="text/javascript"></script> 
<script>$('#slider').layerSlider({
    autoStart               : true,
    firstLayer              : 1,
    twoWaySlideshow         : false,
    keybNav                 : true,
    touchNav                : true,
    imgPreload              : true,
    navPrevNext             : true,
    navStartStop            : false,
    navButtons              : false,
    skin                    : 'defaultskin',
    skinsPath               : 'css/skins/',
    pauseOnHover            : true,
    globalBGColor           : 'transparent',
    globalBGImage           : false,
    animateFirstLayer       : false,
    yourLogo                : false,
    yourLogoStyle           : 'position: absolute; z-index: 1001; left: 10px; top: 10px;',
    yourLogoLink            : false,
    yourLogoTarget          : '_blank',
    loops                   : 0,
    forceLoopNum            : true,
    autoPlayVideos          : true,
    autoPauseSlideshow      : 'auto',
    youtubePreview          : 'maxresdefault.jpg',
 
    // you can change this settings separately by layers or sublayers with using html style attribute
 
    slideDirection          : 'right',
    slideDelay              : 4000,
    parallaxIn              : .45,
    parallaxOut             : .45,
    durationIn              : 1000,
    durationOut             : 1000,
    easingIn                : 'easeInOutQuint',
    easingOut               : 'easeInOutQuint',
    delayIn                 : 0,
    delayOut                : 0
 
});
</script>
</body>
</html>
