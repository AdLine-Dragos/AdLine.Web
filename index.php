<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>AdLine.Web - Choose your template and create your website!</title>

<!-- StyleSheets -->
<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css">
<link rel="stylesheet/less" type="text/css" href="css/styles.less"/>
<link rel="stylesheet" href="css/layerslider.css" type="text/css">

</head>

<body>
<!-- Main Body -->
<div class="navbar navbar-inverse navbar-fixed-top">
		<div class="navbar-inner">
				<div class="container">
						<button type="button" class="btn btn-navbar collapsed" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
						<div class="nav-collapse collapse" style="height: 0px;">
								<ul class="nav">
										<li class=""> <a href="#">Home</a> </li>
										<li class=""> <a href="#">About</a> </li>
										<li class=""> <a href="#">Contact</a> </li>
								</ul>
						</div>
				</div>
		</div>
</div>
<?php include 'header.html' ?>

<!--LayerSlider begin-->
<div id="slider" style="width: 100%; height: 400px;">
 
    <!--LayerSlider layer-->
    <div class="ls-layer">
 
        <!--LayerSlider background-->
        <img class="ls-bg" src="assets/l3.jpg" alt="layer1-background">
 
        <!--LayerSlider sublayers-->
        <h3 class="ls-s2" alt="layer1-sublayer1" style="left: 50%; top: 50%;">Test 1</h3>
        <h3 class="ls-s4" alt="layer1-sublayer2" style="left: 20%; top: 20%;">Test 2</h3>
        <h3 class="ls-s6" alt="layer1-sublayer3" style="left: 80%; top: 80%;">Test 3</h3>
    </div>
	
	<!--LayerSlider layer-->
    <div class="ls-layer">
 
        <!--LayerSlider background-->
        <img class="ls-bg" src="assets/image1.jpg" alt="layer1-background">
 
        <!--LayerSlider sublayers-->
        <h3 class="ls-s1" alt="layer1-sublayer1" style="left: 50%; top: 50%;">Test 1</h3>
        <h3 class="ls-s2" alt="layer1-sublayer2" style="left: 20%; top: 20%;">Test 2</h3>
        <h3 class="ls-s3" alt="layer1-sublayer3" style="left: 80%; top: 80%;">Test 3</h3>
    </div>
 
</div>
<!--LayerSlider end-->

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
    navStartStop            : true,
    navButtons              : true,
    skin                    : 'darkskin',
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
