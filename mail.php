<?php

// Change to email and subject
$to = "nat.miletic@gmail.com";
$subject = "Email Contact Form Submission";

$message = "";

// Read POST data
 $data = json_decode(file_get_contents("php://input"));

 $name = $data->name;
 $email = $data->email;
 $phone = $data->phone;
 $comment = $data->comment;

$message = 'Name: ' . $name . '<br><br>' . 
            'Email: ' . $email . '<br><br>' . 
            'Phone: ' . $phone . '<br><br>' . 
            'Comment: ' . $comment;

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <nat.miletic@gmail.com>' . "\r\n";

mail($to,$subject,$message,$headers); //send email

?>