<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AdLine.Web - Choose your template and create your website!</title>

<!-- StyleSheets -->
<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="css/responsiveslides.css" type="text/css">
<link rel="stylesheet/less" type="text/css" href="css/styles.less"/>
<link rel="stylesheet" href="css/royal-slider-1.0.min.css" type="text/css">

</head>

<body>
<!-- Main Body -->

<?php include 'header.html' ?>

<ul class="rslides hidden-phone" id="slider">
  <li><img src="assets/Charity.jpg" alt=""></li>
  <li><img src="assets/Charity2.jpg" alt=""></li>
  <li><img src="assets/Charity3.jpg" alt=""></li>
</ul>

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
		<h2>Create websites</h2>
		<p>We create the websites for you so that you can focus more on developing your business.</p>
		</div>
		<div class="span3  pagination-centered">
		<img src="assets/customize.png">
		<h2>Customize them</h2>
		<p>Have a unique presence on the web by customizing your website. You will not have to move a finger!</p>
		</div>
		<div class="span3 pagination-centered">
		<img src="assets/documentation2.png">
		<h2>Document them</h2>
		<p>Provide a thorough documentation, ensuring an easy maintenance process afterwards.</p>
		</div>
		<div class="span3 pagination-centered">
		<img src="assets/prof_service.png">
		<h2>Deliver them</h2>
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
		<h2>Fast-service</h2>
		<p>Our aim is to deliver your website, with your help, in less than 3 days, whenever possible!</p>
		</div>
		<div class="span3  pagination-centered">
		<img src="assets/no_headaches.png">
		<h2>No headaches</h2>
		<p>Us taking care of everything means more free time to enjoy for yourself.</p>
		</div>
		<div class="span3 pagination-centered">
		<img src="assets/price-quality.png">
		<h2>Price/Quality</h2>
		<p>We guarantee the best price/quality ratio on the market. You can easily afford a website that will make you stand out!</p>
		</div>
		<div class="span3 pagination-centered">
		<img src="assets/communication.png">
		<h2>Great support</h2>
		<p>We consider a good communication with our customers the key to a successful collaboration.</p>
		</div>
	</div>
</div>

<!-- Scripts --> 

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script> 
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script> 
<script src="js/jquery-easing-1.3.js" type="text/javascript"></script> 
<script src="js/responsiveslides.min.js" type="text/javascript"></script>
<script src="js/royal-slider-1.0.min.js" type="text/javascript"></script>
<script src="js/less-1.3.3.min.js" type="text/javascript"></script> 
<script src="js/bootstrap.min.js" type="text/javascript"></script> 
<script src="js/customJS.js" type="text/javascript"></script> 
<script>
$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: true,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: true,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "#slider",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "centered-btns",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});
</script>

</body>
</html>
