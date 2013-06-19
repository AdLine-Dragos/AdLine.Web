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
<title>AdLine.Web - Choose a template and let's make your own website!</title>
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
#company_title {
	width: 500px;
}
#work_title {
	width:230px;
}
.front h2 {
	margin-left: -72px;
}
#aboutflip1 .backcontainer h2 {
	padding-top: 15px;
	margin-bottom: 0px;
}
@media (max-width: 767px) {
#company_title {
	width: 230px;
}
#work_title {
	width:105px;
	font-size: 34px;
	letter-spacing:-3px;
	padding-top:50px;
}
}


</style>
</head>

<body data-spy="scroll" data-offset="200" data-target=".navbar">
<!-- Main Body -->
<?php
if($warning_exists == false) {
    echo '<div class="alert alert-error animated fadeInUp" id="browser-alert">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>Warning!</strong><br>We, at AdLine, encourage the latest technologies. Therefore, we do not offer support for old browsers like Internet Explorer 8 and below. For the best experience, please use Google Chrome or Mozilla Firefox. Enjoy the website!
  </div>';
}
?>


<?php include 'header.html' ?>
<!-- Link catre magazin - Mobile --><div class="visible-phone mobile-image" id="caption"> <span> <a href="#">
  <h3>Enter the Shop!</h3>
  </a> </span> <img class="lazy" src="../base/img/transparent.png" data-original="../base/assets/youview.jpg" width="767" height="588"> </div>

<section class="container-fluid">
	<div class="row-fluid">
    	<div class="span12 marginTop">
      		<h4 class="red sectionTitle">WHAT WE OFFER</h4>

    	</div>
    	<div class="span5 introduction clearfix">
      		<h2 class="sectionTitle">Website Templates</h2>
      		<p>Our main activity is creating website templates available in the "Shop". You can choose any of them and we will apply a basic customization to it, to fit your needs. </p>
        </div>
    	<div class="span6 introduction clearfix">
       		<h2 class="sectionTitle">Standalone Websites</h2>
      		<p>We are also available for separate projects, way more complex and unique than the ones showcased in the "Shop". Please use the contact form if you need our services.</p>
        </div>
    </div>
    <div class="full-width-separator marginTop"></div>
</section>
          


<!-- Short INFO - WHAT WE DO -->
<section class="container-fluid">
  <div class="row-fluid">
    <div class="span12  marginTop">

      <h4 class="red sectionTitle">WHY US</h4>
    </div>
  </div>
  <!-- Desktop Version --><div class="row-fluid shortInfo clearfix">
    <div class="span3 pagination-centered clearfix"> <img class="lazy" src="../base/img/transparent.png" width="122" height"105" data-original="../base/assets/what_we_do.png">
      <h2>Create websites</h2>
      <p>We create the websites for you so that you can focus more on developing your business.</p>
    </div>
    <div class="span3 pagination-centered clearfix"> <img class="lazy" src="../base/img/transparent.png" width="122" height"105" data-original="../base/assets/customize.png">
      <h2>Customize them</h2>
      <p>Have a unique presence on the web by customizing your website. You will not have to move a finger!</p>
    </div>
    <div class="span3 pagination-centered clearfix"> <img class="lazy" src="../base/img/transparent.png" width="122" height"105" data-original="../base/assets/fast_service.png">
      <h2>Fast-service</h2>
      <p>Our aim is to deliver your website, with your help, in less than 3 days, whenever possible!</p>
    </div>
    <div class="span3 pagination-centered clearfix"> <img class="lazy" src="../base/img/transparent.png" width="122" height"105" data-original="../base/assets/price-quality.png">
      <h2>Price/Quality</h2>
      <p>We guarantee the best price/quality ratio on the market. You can easily afford a website that will make you stand out! </p>
    </div>
  </div>
  
   <!-- Slider Mobile --> 
   <div id="slider1Holder">
      <div id="slider1" class="mobile-wwd"> <a class="buttons prev" href="#">stanga</a>
        <div class="viewport">
          <ul class="overview">
            <li>
              <div class="pagination-centered"> <img src="../base/assets/what_we_do.png">
                <h2>Create websites</h2>
                <p>We create the websites for you so that you can focus more on developing your business.</p>
              </div>
            </li>
            <li>
              <div class="pagination-centered"> <img src="../base/assets/customize.png">
                <h2>Customize them</h2>
                <p>Have a unique presence on the web by customizing your website. You will not have to move a finger!</p>
              </div>
            </li>
            <li>
              <div class="pagination-centered"> <img src="../base/assets/fast_service.png">
                <h2>Fast-service</h2>
                <p>Our aim is to deliver your website, with your help, in less than 3 days, whenever possible!</p>
              </div>
            </li>
            <li>
              <div class="pagination-centered"> <img src="../base/assets/price-quality.png">
                <h2>Price/Quality</h2>
                <p>We guarantee the best price/quality ratio on the market. You can easily afford a website that will make you stand out!</p>
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

<section id="about_company_container">
  <h3 id="company_title" class="white">THE COMPANY</h3>
  <div id="company_holder" class="hidden-phone">
    <div id="company_mainpic"></div>
    <div id="aboutflip1" class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <h2 class="white">Hover/Tap to<br>
            find out</h2>
        </div>
        <div class="back">
          <div class="backcontainer">
            <h2>We are new</h2>
            <div class="aboutsep"></div>
            <p>We have just opened our gates recently, but we are eager to start producing tons of cool designs for you to use.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="aboutflip2" class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <h2 class="white">Hover/Tap to<br>
            find out</h2>
        </div>
        <div class="back">
          <div class="backcontainer">
            <h2>Location</h2>
            <div class="aboutsep"></div>
            <p>We are based in Craiova, Romania but we are hoping to expand in many other cities and countries around the globe.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="aboutflip3" class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <h2 class="white">Hover/Tap to<br>
            find out</h2>
        </div>
        <div class="back">
          <div class="backcontainer">
            <h2>Not only Web</h2>
            <div class="aboutsep"></div>
            <p>The company aims to extend into fields like print, mobile and motion graphics in the near future.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="aboutflip4" class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <h2 class="white">Hover/Tap to<br>
            find out</h2>
        </div>
        <div class="back">
          <div class="backcontainer">
            <h2>Our Team</h2>
            <div class="aboutsep"></div>
            <p>We are a group of young individuals, endowed with fresh ideas for your projects.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div id="mobile-about-company" class=" visible-phone pagination-centered container-fluid">
  	<div class="row-fluid mobile-circle">
    <img class="lazy" src="../base/img/transparent.png" width="210" height"83"="" data-original="../base/assets/blue-smaller.png">
    </div>
    <div class="row-fluid">
    	<div class="mobile-about-info clearfix">
        <h2 class="white">We are new</h2>
        <p class="white">We have just opened our gates recently, but we are eager to start producing tons of cool designs for you to use.</p>
        </div>
    	<div class="mobile-about-info clearfix">
        <h2 class="white">Location</h2>
        <p class="white">We are based in Craiova, Romania but we are hoping to expand in many other cities and countries around the globe.</p>
        </div>
    	<div class="mobile-about-info clearfix">
        <h2 class="white">Not only Web</h2>
        <p class="white">The company aims to extend into fields like print, mobile and motion graphics in the near future.</p>
        </div>
    	<div class="mobile-about-info clearfix">
        <h2 class="white">Our Team</h2>
        <p class="white">We are a group of young individuals, endowed with fresh ideas for your projects.</p>
        </div>
    </div>
  </div>  
</section>

<!-- WORK SLIDER -->
<section id="work-slider">
	<h3 id="work_title">WORK</h3>
<ul class="bxslider">
  <li><img src="../base/assets/work1.png" /></li>
  <li><img src="../base/assets/word2.png" /></li>
  <li><img src="../base/assets/work3.png" /></li>
</ul>
</section>

<!-- CONTACT -->

<section id="contact_section">

  <div class="container-fluid">
    <h3 id="contact_title" class="white">CONTACT US</h3>
    <div class="row-fluid">


      <div class="span6 hidden-phone">
        <h2 class="white title_formInfo">Drop us a line!</h2>
        <p class="white para_formInfo">Whether you have some ideas for a new project and need someone to take care of the design and code, or you just want to say hi, please feel free to send us a message using the form on the left. 
        <h2 class="white title_formInfo">Social Networks</h2>
        <p class="white para_formInfo">We are active on many social networks, so if you want to get the latest news faster, all you have to do is follow us.</p>
        <div id="socialnetworks">
          <div class="soc_net_ico">
             <a href="#"><img class="lazy animated" src="../base/img/transparent.png" width="128" height"128" data-original="../base/assets/facebook.png"></a>
             <a href="#"><img class="lazy animated" src="../base/img/transparent.png" width="128" height"128" data-original="../base/assets/twitter-128.png"></a>
             <a href="#"><img class="lazy animated" src="../base/img/transparent.png" width="128" height"128" data-original="../base/assets/linkedin-128.png"></a>
             <a href="#"><img class="lazy animated" src="../base/img/transparent.png" width="128" height"128" data-original="../base/assets/behance-128.png"></a>
            
          </div>
        </div>
      </div>
            
      <div class="span6" id="form_div">
        <form action="../base/sharedFiles/sendform.php" id="contact_form" method="get" onsubmit="return false">
          <input name="name" type="text" id="form_name" placeholder="Name"></input>
          <input name="email" type="text" id="form_email" placeholder="Email"></input>
          <textarea name="message" id="form_message" placeholder="Message"></textarea>
          <div id="form_errorbox"></div>
          <div class="loading"></div>
          <button type="submit" id="form_button">Send the Message!</button>
        </form>
      </div>
      <div class="span6 visible-phone">
<div id="socialnetworks">
          <div class="soc_net_ico">
             <a href="#"><img class="lazy animated" src="../base/img/transparent.png" width="128" height"128" data-original="../base/assets/facebook.png"></a>
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
<script src="../base/js/jquery.lazyload.min.js" type="text/javascript"></script> 
<script src="../base/js/jquery.bxslider.min.js" type="text/javascript"></script>
<script src="../base/js/jquery.fitvids" type="text/javascript"></script>
<script src="../base/js/customJS.js" type="text/javascript"></script> 
</body>
</html>
