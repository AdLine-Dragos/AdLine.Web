<?php
include("../base/sharedFiles/config.php"); 
include("../base/sharedFiles/functions.php");


//LOGIN HANDLER
session_start();
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
    die(header("location:shop.php"));
}
else
	session_destroy();


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

		$_SESSION['loggedin'] = true;
		$_SESSION['user'] = $user;
		$_SESSION['email'] = $email;
        $_SESSION['pass'] = $password;

		die(header("location:shop.php"));

	}
}

/*
Validate an email address.
Provide email address (raw input)
Returns true if the email address has the email 
address format and the domain exists.
*/
function validEmail($email)
{
   $isValid = true;
   $atIndex = strrpos($email, "@");
   if (is_bool($atIndex) && !$atIndex)
   {
      $isValid = false;
   }
   else
   {
      $domain = substr($email, $atIndex+1);
      $local = substr($email, 0, $atIndex);
      $localLen = strlen($local);
      $domainLen = strlen($domain);
      if ($localLen < 1 || $localLen > 64)
      {
         // local part length exceeded
         $isValid = false;
      }
      else if ($domainLen < 1 || $domainLen > 255)
      {
         // domain part length exceeded
         $isValid = false;
      }
      else if ($local[0] == '.' || $local[$localLen-1] == '.')
      {
         // local part starts or ends with '.'
         $isValid = false;
      }
      else if (preg_match('/\\.\\./', $local))
      {
         // local part has two consecutive dots
         $isValid = false;
      }
      else if (!preg_match('/^[A-Za-z0-9\\-\\.]+$/', $domain))
      {
         // character not valid in domain part
         $isValid = false;
      }
      else if (preg_match('/\\.\\./', $domain))
      {
         // domain part has two consecutive dots
         $isValid = false;
      }
      else if
(!preg_match('/^(\\\\.|[A-Za-z0-9!#%&`_=\\/$\'*+?^{}|~.-])+$/',
                 str_replace("\\\\","",$local)))
      {
         // character not valid in local part unless 
         // local part is quoted
         if (!preg_match('/^"(\\\\"|[^"])+"$/',
             str_replace("\\\\","",$local)))
         {
            $isValid = false;
         }
      }
      
   }
   return $isValid;
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
if(validEmail($sign_email) == false)
	die(header("location:login.php?ew"));


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
<title>AdLine.Web - Autentificare</title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script> 
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script> 
<link href="../base/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="../base/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css">
<link rel="stylesheet/less" type="text/css" href="../base/css/styles.less" />
<link rel="stylesheet" type="text/css" href="../base/css/animate-custom.css">
<style>
#login_tabs_signup {
	width:200px;
}
@media (max-width: 767px) {
#login_tabs_signup {
	width:150px;
}
}
</style>
</head>

<body>

<div id="login_wrapper">
	<div id="login_tabs">
		<div id="login_tabs_login">
			<p class="tabs-text">LOGARE</p>
		</div>
		<div id="login_tabs_signup" class="login_tab_inactive">
			<p class="tabs-text">INREGISTRARE</p>
		</div>
	</div>
	<div id="login_contents">
		<a href="index.php" id="login-home-link"><img src="../base/assets/webredlogin.png"></a>
		<div id="login_error">

		<?php
			if (isset($_GET['lf'])) {
				
				echo "<p class=\"animated shake red\">Parola/Email gresit!</p>";
			}
			elseif (isset($_GET['e'])) {
				echo "<p class=\"animated shake red\">Acest mail exista deja!</p>";
			}	
			elseif (isset($_GET['ew'])) {
				echo "<p class=\"animated shake red\">Email-ul este gresit!</p>";
			}	
			elseif (isset($_GET['s'])) {
				echo "<p class=\"animated fadeInUp\" style=\"color: #32b950;\">Te-ai inregistrat cu succes! Te poti loga acum.</p>";
			}
		?>

		</div>
		<div class="full-width-separator"></div>
		<div id="login_form">
			<form action="login.php" method="post">
				<input name="email" type="text" id="login_email" placeholder="Email">
				<input name="password" type="password" id="login_password" placeholder="Parola">
				<input type="submit" id="login_submit" name="submit_login" value="LOGARE">
			</form>
		</div>

		<div id="signup_form">
			<form action="login.php" method="post">
				<input name="signup_name" type="text" id="signup_name" placeholder="Nume">
				<input name="signup_email" type="text" id="signup_email" placeholder="Email">
				<input name="signup_password" type="password" id="signup_password" placeholder="Parola">
				
				<input type="submit" id="signup_submit" name="submit_signup" value="INREGISTRARE">
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