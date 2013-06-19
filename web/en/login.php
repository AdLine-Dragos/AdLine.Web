<?php
include("../base/sharedFiles/config.php"); 
include("../base/sharedFiles/functions.php");


//LOGIN HANDLER

if(!empty($_POST['email']) && !empty($_POST['password'])){
	session_start();
	$email = sanitize($_POST["email"]); 
	$password = sanitize($_POST["password"]); 

	$match = "select id from $table where email = '".sanitize($_POST['email'])."'
	and password = '".sanitize($_POST['password'])."';"; 

	$qry = mysql_query($match);

	$num_rows = mysql_num_rows($qry); 

	if ($num_rows <= 0) { 
		die(sanitize(header("location:login.php?lf")));

	} else {
		$finduser = "SELECT username FROM $table WHERE email ='" . sanitize($email) . "'";
		$result = mysql_query($finduser);
		$row = sanitize(mysql_fetch_assoc($result));
		$user = $row['username'];


		if (!$user) {
    		$message  = 'Invalid query: ' . mysql_error() . "\n";
    		$message .= 'Whole query: ' . $finduser;
    		die($message);
		}

		$_SESSION['user'] = $user;
		$_SESSION['email'] = $email;
        $_SESSION['pass'] = $password;

		die(header("location:shop.php"));

	}
}

//SINGUP HANDLER

if(isset($_POST['submit_signup'])) {
// Now checking user name, email and password is entered or not.

$sign_user = sanitize($_POST['signup_name']);
$sign_email = sanitize($_POST['signup_email']);
$sign_pass = sanitize($_POST['signup_password']);
$check = "SELECT * from users where email = '".sanitize($sign_email)."'";
$qry = mysql_query($check);
$num_rows = mysql_num_rows($qry); 

if($num_rows > 0){
// Here we are checking if username already exists or not.
	die(sanitize(header("location:login.php?e")));
}

// Now inserting record in database.
$query = "INSERT INTO users (username,email,password) VALUES ('".sanitize($sign_user)."', '".sanitize($sign_email)."' ,'".sanitize($sign_pass)."')";
mysql_query($query);

die(sanitize(header("location:login.php?s")));

}

?>


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
		<div id="login_error">

		<?php
			if (isset($_GET['lf'])) {
				
				echo "<p class=\"animated shake red\">Invalid Username/Password!</p>";
			}
			elseif (isset($_GET['e'])) {
				echo "<p class=\"animated shake red\">Your email already exists!</p>";
			}	
			elseif (isset($_GET['s'])) {
				echo "<p class=\"animated fadeInUp\" style=\"color: #32b950;\">You have successfully registered! You can log in now.</p>";
			}
		?>

		</div>
		<div class="full-width-separator"></div>
		<div id="login_form">
			<form action="login.php" method="post">
				<input name="email" type="text" id="login_email" placeholder="Email">
				<input name="password" type="password" id="login_password" placeholder="Password">
				<input type="submit" id="login_submit" name="submit_login" value="LOG IN">
			</form>
		</div>

		<div id="signup_form">
			<form action="login.php" method="post">
				<input name="signup_name" type="text" id="signup_name" placeholder="Name">
				<input name="signup_email" type="text" id="signup_email" placeholder="Email">
				<input name="signup_password" type="password" id="signup_password" placeholder="Password">
				
				<input type="submit" id="signup_submit" name="submit_signup" value="SIGN-UP">
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