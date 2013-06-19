<?php

//Retrieve form data. 
//GET - user submitted data using AJAX
//POST - in case user does not support javascript, we'll use POST instead
$name = ($_GET['name']) ? $_GET['name'] : $_POST['name'];
$email = ($_GET['email']) ?$_GET['email'] : $_POST['email'];
$comment = ($_GET['message']) ?$_GET['message'] : $_POST['message'];

//flag to indicate which method it uses. If POST set it to 1
if ($_POST) $post=1;

//Simple server side validation for POST data, of course, 
//you should validate the email
if (!$name) $errors[count($errors)] = 'Please enter your name.';
if (!$email) $errors[count($errors)] = 'Please enter your email.'; 
if (!$comment) $errors[count($errors)] = 'Please enter your comment.'; 

//if the errors array is empty, send the mail
if (!$errors) {

	 $subject = 'ADline - Message from ' . $name;
       $to = 'dragosionescuu@gmail.com';
       $from = $name . ' <' . $email . '>';

		$message = '<html><body>';
		$message .= '<h1>ADline Message/h1>';
		$message .= '</body></html>';
		$message = '<html><body>';
		$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
		$message .= "<tr><td style='background-color: #eee') repeat;'><strong>Name:</strong> </td><td style='color=#db2121;'>" . strip_tags($_GET['name']) . "</td></tr>";
		$message .= "<tr><td style='background-color: #eee') repeat;'><strong>Email:</strong> </td><td style='color=#db2121;'>" . strip_tags($_GET['email']) . "</td></tr>";
		$message .= "<tr><td style='background-color: #eee'') repeat;'><strong>Message:</strong> </td><td style='color=#db2121;'>" . htmlentities($_GET['message']) . "</td></tr>";
		$message .= "</table>";
		$message .= "</body></html>";



       // send the email
     $result = sendmail($to, $subject, $message, $from);


		
//if POST was used, display the message straight away
	if ($_POST) {
		if ($result) echo 'Thank you! We have received your message.';
		else echo 'Sorry, unexpected error. Please try again later';
		
	//else if GET was used, return the boolean value so that 
	//ajax script can react accordingly
	//1 means success, 0 means failed
	} else {
		echo $result;	
	}

//if the errors array has values
} else {
	//display the errors message
	for ($i=0; $i<count($errors); $i++) echo $errors[$i] . '<br/>';
	echo '<a href="en/index.php">Back</a>';
	exit;
}

//Simple mail function with HTML header
function sendmail($to, $subject, $message, $from) {
    $headers = "From: Adline - <" . strip_tags($_POST['email']) . ">\r\n";
	$headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	
	$result = mail($to,$subject,$message,$headers);
	
	if ($result) return 1;
	else return 0;
}
?>