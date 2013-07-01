<?php

include("../base/sharedFiles/config.php");


session_start();
session_regenerate_id();

if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {}
	else {
    die(header('location:login.php'));

}



?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
<title>AdLine.Web - Bine ati venit la magazin!</title>
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
#hiw_title {
	width:710px;
}
.mobile-wwd {
    height:420px;
    margin-top:30px;
}
.mobile-wwd .viewport {
    height:420px;
}
</style>
</head>

<body data-spy="scroll" data-offset="200" data-target=".navbar">

	<div class="navbar navbar-fixed-top">
		<div class="navbar-inner">
			<div class="container">
				<button type="button" class="btn btn-navbar collapsed" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
				<a class="brand" href="index.php"> <img src="../base/assets/logo_small.png" /> </a>
					<div class="nav-collapse collapse" style="height: 0px;">
						<ul class="nav">
							<li class="active"> <a href="#shop_welcomemsg">Magazin</a> </li>
							<li><a href="#how_it_works">Cum functioneaza</a> </li>
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


<div class="container-fluid" id="shop_welcomemsg">
	<div class="row-fluid">
		<h5 class="grey"> Bine ai venit <?php echo ucwords($_SESSION['user']); ?>, mai jos poti gasi lista modelelor de site-uri disponibile. Distractie placuta! </h5>
	</div>
</div>
<!-- Masonry Shop -->
<section id="shop_container">
	<div class="row-fluid" id="outer_container">
		<ul class="grid cs-style-3">
    <li>
        <figure>
            <img class="lazy" src="../base/img/transparent.png" width="385" height="290" data-original="../base/assets/template_images/PersonalPortfolio/personalportfolio.jpg" alt="img01">
            <figcaption>
                <h3>Portofoliu</h3>
                <span>by Dragos Ionescu</span>
                <a href="#">25 €</a>
            </figcaption>
        </figure>
    </li>
    <li>
        <figure>
            <img class="lazy" src="../base/img/transparent.png" width="385" height="325" data-original="../base/assets/demo_images/2.png" alt="img01">
            <figcaption>
                <h3>Portfolio</h3>
                <span>by Dragos Ionescu</span>
                <a href="#">25 €</a>
            </figcaption>
        </figure>
    </li>
    <li>
        <figure>
            <img class="lazy" src="../base/img/transparent.png" width="385" height="335" data-original="../base/assets/demo_images/3.png" alt="img01">
            <figcaption>
                <h3>Sleek Medieval</h3>
                <span>by Dragos Ionescu</span>
                <a href="#">25 €</a>
            </figcaption>
        </figure>
    </li>
    <li>
        <figure>
            <img class="lazy" src="../base/img/transparent.png" width="385" height="546" data-original="../base/assets/demo_images/4.png" alt="img01">
            <figcaption>
                <h3>The Pusher</h3>
                <span>by Dragos Ionescu</span>
                <a href="#">25 €</a>
            </figcaption>
        </figure>
    </li>
    <li>
        <figure>
            <img class="lazy" src="../base/img/transparent.png" width="385" height="225" data-original="../base/assets/demo_images/5.png" alt="img01">
            <figcaption>
                <h3>The Pusher</h3>
                <span>by Dragos Ionescu</span>
                <a href="#">25 €</a>
            </figcaption>
        </figure>
    </li>
    <li>
        <figure>
            <img class="lazy" src="../base/img/transparent.png" width="385" height="289" data-original="../base/assets/demo_images/6.png" alt="img01">
            <figcaption>
                <h3>The Pusher</h3>
                <span>by Dragos Ionescu</span>
                <a href="#">25 €</a>
            </figcaption>
        </figure>
    </li>
    <li>
        <figure>
            <img class="lazy" src="../base/img/transparent.png" width="385" height="268" data-original="../base/assets/demo_images/7.png" alt="img01">
            <figcaption>
                <h3>The Pusher</h3>
                <span>by Dragos Ionescu</span>
                <a href="#">25 €</a>
            </figcaption>
        </figure>
    </li>
        <li>
        <figure>
            <img class="lazy" src="../base/img/transparent.png" width="385" height="263" data-original="../base/assets/shop_image1.png" alt="img01">
            <figcaption>
                <h3>The Pusher</h3>
                <span>by Dragos Ionescu</span>
                <a href="#">25 €</a>
            </figcaption>
        </figure>
    </li>
   	 <li>
        <figure>
            <img class="lazy" src="../base/img/transparent.png" width="385" height="323" data-original="../base/assets/shop_image2.png" alt="img01">
            <figcaption>
                <h3>The Pusher</h3>
                <span>by Dragos Ionescu</span>
                <a href="#">25 €</a>
            </figcaption>
        </figure>
    </li>
</ul>

	</div>
</section>


<!-- How it works -->
<section id="how_it_works">
	<div class="container-fluid">
		<h3 id="hiw_title">CUM FUNCTIONEAZA</h3>
		<div class="row-fluid">
			<div id="hiw_id">
		<div class="span4 hiw">
			<img class="lazy" src="../base/img/transparent.png" width="170" height="160" data-original="../base/assets/choosedesign.png">
			<div class="full-width-separator" style="width:80%; margin-left:auto;margin-right:auto;" ></div>
			<h2>Alege-ti design-ul</h2>
			<p>Primul pas este foarte simplu. Tot ce trebuie sa faci este sa gasesti un design care iti place si sa dai click pe el. Vei gasi apoi informatii detaliate despre acesta.</p>
		</div>
		<div class="span4 hiw">
			<img class="lazy" src="../base/img/transparent.png" width="170" height="160" data-original="../base/assets/priceplan.png">
			<div class="full-width-separator" style="width:80%; margin-left:auto;margin-right:auto;" ></div>
			<h2>Alege un pret</h2>
			<p>Afla despre functionalitatile standard pe care le are deja design-ul si imbunatateste-le, ramanand in bugetul tau in tot acest timp. Este usor, iefin si convenabil.</p>
		</div>
		<div class="span4 hiw">
			<img class="lazy" src="../base/img/transparent.png" width="170" height="160" data-original="../base/assets/deliver.png">
			<div class="full-width-separator" style="width:80%; margin-left:auto;margin-right:auto;" ></div>
			<h2>Trimite comanda</h2>
			<p>Dupa ce ai acceptat termenii si conditiile, poti trimite comanda. Te vom contacta noi in 24 de ore pentru a stabili detaliile proiectului. </p>
		</div>
	</div>

 <!-- Slider Mobile --> 
   <div id="slider2Holder">
      <div id="slider1" class="mobile-wwd"> <a class="buttons prev" href="#">left</a>
        <div class="viewport">
          <ul class="overview">
            <li>
              <div class="pagination-centered"> <img src="../base/assets/choosedesign.png">
                <h2>Alege-ti design-ul</h2>
                <p>Primul pas este foarte simplu. Tot ce trebuie sa faci este sa gasesti un design care iti place si sa dai click pe el. Vei gasi apoi informatii detaliate despre acesta.</p>
              </div>
            </li>
            <li>
              <div class="pagination-centered"> <img src="../base/assets/priceplan.png">
                <h2>Alege un pret</h2>
                <p>Afla despre functionalitatile standard pe care le are deja design-ul si imbunatateste-le, ramanand in bugetul tau in tot acest timp. Este usor, iefin si convenabil.</p>
              </div>
            </li>
            <li>
              <div class="pagination-centered"> <img src="../base/assets/deliver.png">
                <h2>Trimite comanda</h2>
                <p>Dupa ce ai acceptat termenii si conditiile, poti trimite comanda. Te vom contacta noi in 24 de ore pentru a stabili detaliile proiectului.</p>
              </div>
            </li>
          </ul>
        </div>
        <a class="buttons next" href="#">right</a> 
      </div>
    </div>

	</div>
	</div>

</section>
<form action="itemDetails.php" method="post" id="titleD">
<input type="hidden" name="product_title" value="titleHolder">
<input type="submit" value="Submit">
</form>

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