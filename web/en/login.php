<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
<title>AdLine.Web - Login</title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script> 
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script> 
<link href="../base/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="../base/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css">
<link rel="stylesheet/less" type="text/css" href="../base/css/styles.less" />
<link rel="stylesheet" type="text/css" href="../base/css/animate-custom.css">
</head>

<body>

<div id="login_wrapper">
	<div id="login_tabs">
		<div id="login_tabs_login">
			<p class="tabs-text">LOGIN</p>
		</div>
		<div id="login_tabs_signup" class="login_tab_inactive">
			<p class="tabs-text">SIGN-UP</p>
		</div>
	</div>
	<div id="login_contents">
		<a href="index.php" id="login-home-link"><img src="../base/assets/webredlogin.png"></a>
		<div class="full-width-separator"></div>
		<div id="login_form">
			<form action="">
				<input name="email" type="text" id="login_email" placeholder="Email">
				<input name="password" type="password" id="login_password" placeholder="Password">
				<input type="checkbox" id="login_remember" name="remember" checked class="regular-checkbox big-checkbox"><label for="login_remember">Remember me?</label><span id="boxmaker"></span>
				<input type="submit" id="login_submit" value="LOG IN">
			</form>
		</div>
		<div id="signup_form">
			<form action="">
				<input name="name" type="text" id="signup_name" placeholder="Name">
				<input name="email" type="text" id="signup_email" placeholder="Email">
				<input name="password" type="password" id="signup_password" placeholder="Password">
				
				<input type="submit" id="signup_submit" value="SIGN-UP">
			</form>
		</div>
	</div>
</div>





<script src="../base/js/jquery-easing-1.3.js" type="text/javascript"></script> 
<script src="../base/js/less-1.3.3.min.js" type="text/javascript"></script> 
<script src="../base/js/bootstrap.min.js" type="text/javascript"></script> 
<script src="../base/js/customJS.js" type="text/javascript"></script>
</body>
</html>