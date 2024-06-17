<?php

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;

$response = array('status' => '', 'message' => '');

if (array_key_exists('email', $_POST)) {
    require 'vendor/autoload.php';

    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->Port = 587;
    $mail->SMTPDebug = 0;
    $mail->SMTPAuth = true;
    $mail->Username = 'connect.inbox@fitnessfreaksindians.com';
    $mail->Password = 'Pk55555@@@@@';
    
    $mail->setFrom('connect.inbox@fitnessfreaksindians.com', 'Contact Form');
    $mail->addAddress('contactus@fitnessfreaksindians.com', 'Fitness Freaks Indians');

    if ($mail->addReplyTo($_POST['email'], $_POST['name'])) {
        $mail->Subject = $_POST['subject'];
        $mail->isHTML(true);

        $emailTemplate = file_get_contents('email_templatex.html');
        $placeholders = array(
            '[Name]' => $_POST['name'],
            '[Email]' => $_POST['email'],
            '[Phone]' => $_POST['phoneNumber'],
            '[Subject]' => $_POST['subject'],
            '[Message]' => nl2br($_POST['message']), 
        );
        $emailBody = strtr($emailTemplate, $placeholders);

        $mail->Body = $emailBody;

        if (!$mail->send()) {
            $response['status'] = 'error';
            $response['message'] = 'Sorry, something went wrong. Please try again later.';
        } else {
            $response['status'] = 'success';
            $response['message'] = 'Message sent! Thanks for contacting us.';
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Share it with us!';
    }
}

header('Content-Type: application/json');
echo json_encode($response);
?>
