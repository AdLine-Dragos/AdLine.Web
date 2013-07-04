<?php
if(isset($_COOKIE["warningmsg"])) {
$warning_exists = true;
}
else {
  $warning_exists = false;
  $expire=time()+60*60*24*30*12;
  setcookie("warningmsg", "warning", $expire);
}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
<title>AdLine.Web - Alege-ti design-ul si creeaza-ti propriul website!</title>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script> 
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script> 
<script src="../base/js/html5shiv.js" type="text/html"></script>

<!-- StyleSheets -->
<link href="../base/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="../base/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css">
<link rel="stylesheet/less" type="text/css" href="../base/css/styles.less" />
<link rel="stylesheet" type="text/css" href="../base/css/animate-custom.css">
<link rel="stylesheet" type="text/css" href="../base/css/jquery.bxslider.css">
<!--[if lte IE 9]>
	<style>
    	.front {display:none;}
        </style>
<![endif]-->
<style>
@media (max-width: 767px) {

#company_title {
  width:300px !important;
}
}
#company_title {
	width: 660px;
}
.front h2 {
	margin-left: -94px;
}
#aboutflip1 .backcontainer h2 {
	padding-top: 15px;
	margin-bottom: 0px;
}


</style>
</head>

<body data-spy="scroll" data-offset="200" data-target=".navbar">
  <?php
if($warning_exists == false) {
    echo '<div class="alert alert-error animated fadeInUp" id="browser-alert">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>Avertisment!</strong><br>Adline incurajeaza si promoveaza noile tehnologii. De aceea, am decis sa nu oferim suport pentru Internet Explorer 8 sau mai mic. Pentru cea mai buna experienta, folositi Google Chrome sau Mozilla Firefox. Navigare placuta!
  </div>';
}
?>
<!-- Main Body -->

<?php include 'header.html' ?>
<!-- Link catre magazin - Mobile --><div class="visible-phone mobile-image" id="caption"> <span> <a href="shop.php">
  <h3>Intra in magazin!</h3>
  </a> </span> <img class="lazy" src="../base/img/transparent.png" data-original="../base/assets/youview.jpg" width="767" height="588"> </div>
<section class="container-fluid">
	<div class="row-fluid">
    	<div class="span12 marginTop">
      		<h4 class="red sectionTitle">CE OFERIM</h4>

    	</div>
    	<div class="span5 introduction clearfix">
      		<h2 class="sectionTitle">Modele de site-uri</h2>
      		<p>Principala noastra activitate este creatul template-urilor/modelelor de site-uri, pe care le postam ulterior in sectiunea "Shop", iar tu il poti alege pe cel mai potrivit afacerii tale. </p>
        </div>
    	<div class="span6 introduction clearfix">
       		<h2 class="sectionTitle">Site-uri la comanda</h2>
      		<p>In paralel, suntem disponibili si pentru comenzi de site-uri complet personalizate, complexe si diferite de cele disponibile in sectiunea Shop. Pentru mai multe detalii, va rugam folositi formularul de contact. </p>
        </div>
    </div>
    <div class="full-width-separator marginTop"></div>
</section>
          


<!-- Short INFO - WHAT WE DO -->
<section class="container-fluid">
  <div class="row-fluid">
    <div class="span12  marginTop">

      <h4 class="red sectionTitle">AVANTAJELE NOASTRE</h4>
    </div>
  </div>
  <!-- Desktop Version --><div class="row-fluid shortInfo clearfix">
    <div class="span3 pagination-centered clearfix"> <img class="lazy" src="../base/img/transparent.png" width="122" height"105" data-original="../base/assets/what_we_do.png">
      <h2>Cream Site-uri</h2>
      <p>Noi construim site-urile in locul tau pentru ca tu sa te poti concentra pe dezvoltarea afacerii tale.</p>
    </div>
    <div class="span3 pagination-centered clearfix"> <img class="lazy" src="../base/img/transparent.png" width="122" height"105" data-original="../base/assets/customize.png">
      <h2>Le personalizam</h2>
      <p>Ne ocupam de personalizarea site-ului, iar tu nu va trebui sa misti un deget!</p>
    </div>
    <div class="span3 pagination-centered clearfix"> <img class="lazy" src="../base/img/transparent.png" width="122" height"105" data-original="../base/assets/fast_service.png">
      <h2>Serviciu rapid</h2>
      <p>Obiectivul nostru este sa livram site-ul in maximum 3 zile, cu putin ajutor din partea ta.</p>
    </div>
    <div class="span3 pagination-centered clearfix"> <img class="lazy" src="../base/img/transparent.png" width="122" height"105" data-original="../base/assets/price-quality.png">
      <h2>Pret/Calitate</h2>
      <p>Garantam cel mai bun raport calitate/pret de pe piata. </p>
    </div>
  </div>
  
   <!-- Slider Mobile --> 
   <div id="slider1Holder">
      <div id="slider1" class="mobile-wwd"> <a class="buttons prev" href="#">stanga</a>
        <div class="viewport">
          <ul class="overview">
            <li>
              <div class="pagination-centered"> <img src="../base/assets/what_we_do.png">
                <h2>Cream Site-uri</h2>
                <p>Noi construim site-urile in locul tau pentru ca tu sa te poti concentra pe dezvoltarea afacerii tale.</p>
              </div>
            </li>
            <li>
              <div class="pagination-centered"> <img src="../base/assets/customize.png">
                <h2>Le personalizam</h2>
                <p>Ne ocupam de personalizarea site-ului, iar tu nu va trebui sa misti un deget!</p>
              </div>
            </li>
            <li>
              <div class="pagination-centered"> <img src="../base/assets/fast_service.png">
                <h2>Serviciu rapid</h2>
                <p>Obiectivul nostru este sa livram site-ul in maximum 3 zile, cu putin ajutor din partea ta.</p>
              </div>
            </li>
            <li>
              <div class="pagination-centered"> <img src="../base/assets/price-quality.png">
                <h2>Pret/Calitate</h2>
                <p>Garantam cel mai bun raport calitate/pret de pe piata.</p>
              </div>
            </li>
          </ul>
        </div>
        <a class="buttons next" href="#">dreapta</a> 
      </div>
    </div>
    
  </div>
</section>

<!--------------------------------------------   END HOME    ----------------------------------------> 

<!---------------------------------------    ABOUT THE COMPANY    ---------------------------------------->

<section id="about_company_container" >
  <h3 id="company_title" class="white">DESPRE COMPANIE</h3>
  <div id="company_holder" class="hidden-phone">
    <div id="company_mainpic"></div>
    <div id="aboutflip1" class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <h2 class="white">Hover/Tap<br>
            pentru a intoarce</h2>
        </div>
        <div class="back">
          <div class="backcontainer">
            <h2>Suntem la inceput</h2>
            <div class="aboutsep"></div>
            <p>Ne-am deschis recent portile si suntem motivati sa producem  pentru voi o multile de design-uri.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="aboutflip2" class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <h2 class="white">Hover/Tap<br>
            pentru a intoarce</h2>
        </div>
        <div class="back">
          <div class="backcontainer">
            <h2>Locatie</h2>
            <div class="aboutsep"></div>
            <p>Avem biroul in Craiova, dar lucram la extinderea pe viitor si in alte orase, chiar alte tari.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="aboutflip3" class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <h2 class="white">Hover/Tap<br>
            pentru a intoarce</h2>
        </div>
        <div class="back">
          <div class="backcontainer">
            <h2>Nu doar Site-uri</h2>
            <div class="aboutsep"></div>
            <p>Scopul nostru este sa ne dezvoltam si in printare, aplicatii iOS/Android si grafica computerizata.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="aboutflip4" class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <h2 class="white">Hover/Tap<br>
            pentru a intoarce</h2>
        </div>
        <div class="back">
          <div class="backcontainer">
            <h2>Echipa</h2>
            <div class="aboutsep"></div>
            <p>Suntem un grup de tineri pana in 25 de ani, plini de idei si entuziasm.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="mobile-about-company" class=" visible-phone pagination-centered container-fluid">
    <div class="row-fluid mobile-circle"> <img class="lazy" src="../base/img/transparent.png" width="210" height"83" data-original="../base/assets/blue-smaller.png"> </div>
    <div class="row-fluid">
      <div class="mobile-about-info clearfix">
        <h2 class="white">Suntem la inceput</h2>
        <p class="white">Ne-am deschis recent portile si suntem motivati sa producem pentru voi o multile de design-uri.</p>
      </div>
      <div class="mobile-about-info clearfix">
        <h2 class="white">Locatie</h2>
        <p class="white">Avem biroul in Craiova, dar lucram la extinderea pe viitor si in alte orase, chiar alte tari.</p>
      </div>
      <div class="mobile-about-info clearfix">
        <h2 class="white">Nu doar Site-uri</h2>
        <p class="white">Scopul nostru este sa ne integram si in industrii precum printarea, aplicatii iOS/Android si grafica computerizata.</p>
      </div>
      <div class="mobile-about-info clearfix">
        <h2 class="white">Echipa</h2>
        <p class="white">Suntem un grup de tineri pana in 25 de ani, plini de idei si entuziasm.</p>
      </div>
    </div>
  </div>
</section>

<!-- WORK SLIDER -->
<section id="work-slider">
	<h3 id="work_title">LUCRARI</h3>
<ul class="bxslider">
  <li><img src="../base/assets/work1.png" /></li>
  <li><img src="../base/assets/word2.png" /></li>
  <li><img src="../base/assets/work3.png" /></li>
</ul>
</section>

<!-- CONTACT -->

<section id="contact_section">

  <div class="container-fluid">
    <h3 id="contact_title" class="white">CONTACT</h3>
    <div class="row-fluid">


      <div class="span6 hidden-phone">
        <h2 class="white title_formInfo">Scrie-ne cateva cuvinte!</h2>
        <p class="white para_formInfo">Daca ca ai nevoie de serviciile noastre pentru un proiect nou, sau vrei doar sa ne saluti, nu ezita sa folosesti formularul de contact!</p>
        <h2 class="white title_formInfo">Retele Sociale</h2>
        <p class="white para_formInfo">Suntem activi pe multe retele sociale, iar daca vrei sa afli noutatile cat mai rapid, ne poti urmari pe oricare dintre ele.</p>
        <div id="socialnetworks">
          <div class="soc_net_ico">
             <a href="https://www.facebook.com/AdlineAdvertisement"><img class="lazy animated" src="../base/img/transparent.png" width="128" height"128" data-original="../base/assets/facebook.png"></a>
             <a href="#"><img class="lazy animated" src="../base/img/transparent.png" width="128" height"128" data-original="../base/assets/twitter-128.png"></a>
             <a href="#"><img class="lazy animated" src="../base/img/transparent.png" width="128" height"128" data-original="../base/assets/linkedin-128.png"></a>
             <a href="#"><img class="lazy animated" src="../base/img/transparent.png" width="128" height"128" data-original="../base/assets/behance-128.png"></a>
            
          </div>
        </div>
      </div>
            
      <div class="span6" id="form_div">
        <form action="../base/sharedFiles/sendform.php" id="contact_form" method="get" onsubmit="return false">
          <input name="name" type="text" id="form_name" placeholder="Nume"></input>
          <input name="email" type="text" id="form_email" placeholder="Email"></input>
          <textarea name="message" id="form_message" placeholder="Mesaj"></textarea>
          <div id="form_errorbox"></div>
          <div class="loading"></div>
          <button type="submit" id="form_button">Trimite mesajul!</button>
        </form>
      </div>
      <div class="span6 visible-phone">
<div id="socialnetworks">
          <div class="soc_net_ico">
             <a href="https://www.facebook.com/AdlineAdvertisement"><img class="lazy animated" src="../base/img/transparent.png" width="128" height"128" data-original="../base/assets/facebook.png"></a>
             <a href="#"><img class="lazy animated" src="../base/img/transparent.png" width="128" height"128" data-original="../base/assets/twitter-128.png"></a>
             <a href="#"><img class="lazy animated" src="../base/img/transparent.png" width="128" height"128" data-original="../base/assets/linkedin-128.png"></a>
             <a href="#"><img class="lazy animated" src="../base/img/transparent.png" width="128" height"128" data-original="../base/assets/behance-128.png"></a>
            
          </div>

      </div>

    </div>
  </div>

</section>


<?php include 'footer.html' ?>
<p id="back-top" alt="Back to Top"> <a href="#home"><span></span></a> </p>

<!-- Scripts --> 


<script src="../base/js/jquery.tinycarousel.min.js" type="text/javascript"></script> 
<script src="../base/js/jquery-easing-1.3.js" type="text/javascript"></script> 
<script src="../base/js/less-1.3.3.min.js" type="text/javascript"></script> 
<script src="../base/js/bootstrap.min.js" type="text/javascript"></script> 
<script src="../base/js/jquery.lazyload.min.js"></script> 
<script src="../base/js/jquery.bxslider.min.js" type="text/javascript"></script>
<script src="../base/js/jquery.fitvids" type="text/javascript"></script>
<script src="../base/js/customJS.js" type="text/javascript"></script> 

</body>
</html>
