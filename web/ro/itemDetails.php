<?php
include("../base/sharedFiles/config.php"); 
include("../base/sharedFiles/functions.php");

session_start();
session_regenerate_id();

if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {}
	else {
    die(header('location:login.php'));

}

if (!empty($_POST['product_title'])){ 
     $product_title = $_POST['product_title']; 
}else{ 
     $product_title = "empty"; 
} 

$findproduct = "SELECT Title, Code, Features, PriceBasic, PriceMedium, PricePremium, sliderLinks, largeImageLink FROM templates WHERE Title ='" . sanitize($product_title) . "'";
$result = mysql_query($findproduct);
$row = sanitize(mysql_fetch_assoc($result));
$sliderLinks = explode(",",$row['sliderLinks']);
$featuresList = explode(",",$row['Features']);
?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
<title>AdLine.Web - Produsul <?php echo $row['Title'];?>!</title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script> 
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script> 
<script src="../base/js/html5shiv.js" type="text/html"></script>

<!-- StyleSheets -->
<link href="../base/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="../base/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css">
<link rel="stylesheet/less" type="text/css" href="../base/css/styles.less" />
<link rel="stylesheet" type="text/css" href="../base/css/animate-custom.css">
<link rel="stylesheet" type="text/css" href="../base/css/jquery.bxslider.css">
<style>
.fancybutton {
	margin-top:10px;
}
</style>
</head>

<body>
	<div class="navbar navbar-fixed-top" id="iDnav">
		<div class="navbar-inner">
			<div class="container">
				<button type="button" class="btn btn-navbar collapsed" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
				<a class="brand" href="index.php"> <img src="../base/assets/logo_small.png" /> </a>
					<div class="nav-collapse collapse" style="height: 0px;">
						<ul class="nav">
							<li> <a href="shop.php">Magazin</a> </li>
							<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Schimba limba<b class="caret"></b></a>
  								<ul class="dropdown-menu">
    								<li><a id="language-bar" href="../en/shop.php">
      								<span class="flag"></span>
      								English</a> </li>
  								</ul>
							</li>
						</ul>
						<ul class="nav pull-right" id="log-out">
								<li><a href="logging-out.php">LOG-OUT</a></li>
						</ul>
					</div>
			</div>
		</div>
	</div>

<div class="container-fluid" id="itemdetails_container">
	<div class="row-fluid clearfix">

			<h4><?php echo $row['Title'];?></h4>
			<p>Cod produs: <span class="red"><strong><?php echo $row['Code'];?></strong></span></p>

		
		<div class="full-width-separator clearfix"></div>
	</div>
	<div class="row-fluid marginTop">
		<div class="span9" id="itemdetails_slider">
			<ul class="bxslider">
  				<li><img src=<?php echo "$sliderLinks[0]" ?> /></li>
  				<li><img src=<?php echo "$sliderLinks[1]" ?> /></li>
  				<li><img src=<?php echo "$sliderLinks[2]" ?> /></li>
			</ul>
		</div>
		<div class="span3" id="itemdetails_features">
			<h4 class="features_title">CARACTERISTICI STANDARD</h4>
			<div class="full-width-separator marginTop marginBottom"></div>
			<ul class="features_list">
				<li><?php echo "$featuresList[0]" ?></li>
				<li><?php echo "$featuresList[1]" ?></li>
				<li><?php echo "$featuresList[2]" ?></li>
				<li><?php echo "$featuresList[3]" ?></li>
				<li><?php echo "$featuresList[4]" ?></li>
			</ul>
		</div>
		<a href=<?php  echo $row['largeImageLink']  ?> class="span3 fancybutton">	
			Vezi Mare
		</a>
	</div>
	<div class="row-fluid" id="pricingplans">
		<div class="span4" id="priceplan_medium">
			<div class="priceplan_title clearfix darkBlue bg_white">MEDIU</div>
			<div class="priceplan_mainBody clearfix">
				<h4 class="priceBig white"><?php echo $row['PriceMedium']; ?></h4>
				<div class="full-width-separator marginBottom" style="width:20%; margin-left:auto; margin-right:auto;"></div>
				<h4 class="priceplan_title white">SIMPLU</h4>
				<img src="../base/img/plus_12x12.png">
				<ul class="included_list">
					<li>4 Pagini</li>
					<li>Scheme de culoare diferite</li>
					<li>Optimizare motoare de cautare</li>
				</ul>
			</div>
			<a class="priceplan_proceed clearfix" href="#">CUMPARA</a>
		</div>


		<div class="span4" id="priceplan_basic">
			<div class="basic_mainBody clearfix">
				<div class="priceplan_title clearfix white marginBottom" style="font-size:30px; padding-top:30px;">SIMPLU</div>
				<h4 class="priceBig white clearfix" style="font-size: 85px; padding-bottom:20px;"><?php echo $row['PriceBasic']; ?></h4>
				<div class="full-width-separator bg_white marginBottom" style="width:20%; margin-left:auto; margin-right:auto;"></div>
				<h4 class="priceplan_title white" style="font-size: 25px">Produsul Final Include</h4>
				<ul class="included_list" style="padding-bottom:10px;">
					<li>Caracteristicile Standard</li>
					<li>Texi si Imagini modificate<br>(la cererea ta)</li>
				</ul>
				<a class="priceplan_proceed_basic clearfix" href="#">CUMPARA</a>
			</div>
		</div>


		<div class="span4" id="priceplan_premium">
			<div class="priceplan_title clearfix darkBlue bg_white">PREMIUM</div>
			<div class="priceplan_mainBody clearfix">
				<h4 class="priceBig white"><?php echo $row['PricePremium']; ?></h4>
				<div class="full-width-separator marginBottom" style="width:20%; margin-left:auto; margin-right:auto;"></div>
				<h4 class="priceplan_title white">MEDIU</h4>
				<img src="../base/img/plus_12x12.png">
				<ul class="included_list">
					<li>5 Pagini</li>
					<li>Formular de Contact</li>
					<li>Design Adaptabil</li>
				</ul>
			</div>
			<a class="priceplan_proceed clearfix" href="#">CUMPARA</a>
		</div>
	</div>
</div>

	<?php include 'footer.html' ?>

<p id="back-top" alt="Back to Top"> <a href="#shop_container"><span></span></a> </p>

<!-- Scripts --> 

 
<script src="../base/js/jquery.tinycarousel.min.js" type="text/javascript"></script> 
<script src="../base/js/jquery-easing-1.3.js" type="text/javascript"></script> 
<script src="../base/js/less-1.3.3.min.js" type="text/javascript"></script> 
<script src="../base/js/bootstrap.min.js" type="text/javascript"></script> 
<script src="../base/js/jquery.lazyload.min.js" type="text/javascript"></script> 
<script src="../base/js/jquery.bxslider.min.js" type="text/javascript"></script>
<script src="../base/js/jquery.fitvids" type="text/javascript"></script>
<script src="../base/js/customJS.js" type="text/javascript"></script>
<script src="../base/js/jquery.isotope.min.js" type="text/javascript"></script>
<script src="../base/js/modernizr.custom.js" type="text/javascript"></script>
<script src="../base/js/toucheffects.js" type="text/javascript"></script>
</body>
</html>