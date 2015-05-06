<?php
	$mail_to = 'afinanger@gmail.com'; // specify your email here

	// Assigning data from $_POST array to variables
	$name = $_POST['sender_name'];
	$mail_from = $_POST['sender_email'];
	$phone = $_POST['sender_phone'];
	$message = $_POST['sender_message'];

	// Construct subject of the email
	$subject = 'http://whittlepeople.com/ Message from visitor ' . $name;

	// Construct email body
	$body_message = 'From: ' . $name . "\r\n";
	$body_message .= 'E-mail: ' . $mail_from . "\r\n";
	$body_message .= 'Phone: ' . $phone . "\r\n";
	$body_message .= 'Message: ' . $message;

	// Construct headers of the message
	$headers = 'From: ' . $mail_from . "\r\n";
	$headers .= 'Reply-To: ' . $mail_from . "\r\n";

	$mail_sent = mail($mail_to, $subject, $body_message, $headers);

	if ($mail_sent == true){ ?>
		<script language="javascript" type="text/javascript">
		alert('Thank you for the message. We will contact you shortly.');
		window.location = 'index.html';
		</script>
	<?php } else { ?>
    <script language="javascript" type="text/javascript">
        alert('Message not sent. Please, notify site administrator afinanger@gmail.com');
        window.location = 'index.html';
    </script>
	<?php
	}
?>