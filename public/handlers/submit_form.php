<?php
header('Content-Type: application/json');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// global error handler to return JSON
set_exception_handler(function ($e) {
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
    exit;
});

set_error_handler(function ($severity, $message, $file, $line) {
    echo json_encode([
        'status' => 'error',
        'message' => "$message in $file on line $line"
    ]);
    exit;
});

$data = [];
foreach ($_POST as $key => $value) {
    $data[$key] = $value;
}

$filenames = [];
if (!empty($_FILES['attachments'])) {
    foreach ($_FILES['attachments']['name'] as $name) {
        $filenames[] = $name;
    }
}

require __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    // SMTP config
    $mail->isSMTP();
    $mail->Host       = getenv('MAIL_SERV');
    $mail->SMTPAuth   = true;
    $mail->Username   = getenv('MAIL_USER');
    $mail->Password   = getenv('MAIL_PASS');
    $mail->SMTPSecure = false;
    $mail->Port       = 2525;

    // Sender and recipient
    $mail->setFrom(getenv('MAIL_USER'), 'Automatic Message');
    $mail->addAddress(getenv('MAIL_RECP'));

    // Attach uploaded files
    if (!empty($_FILES['attachments']['tmp_name'][0])) {
        foreach ($_FILES['attachments']['tmp_name'] as $idx => $tmpName) {
            if (is_uploaded_file($tmpName)) {
                $mail->addAttachment($tmpName, $_FILES['attachments']['name'][$idx]);
            }
        }
    }

    // Content
    $mail->isHTML(true);
    $mail->Subject = '[WeDispatch] ' . ($data['name'] ?? '');
    $mail->Body    = '<pre>' . json_encode($data, JSON_PRETTY_PRINT) . '</pre>';

    $mail->send();
    $status = 'success';
    $message = 'Message sent';
} catch (Exception $e) {
    $status = 'error';
    $message = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

$response = [
    'status' => 'success',
    'fields' => $data,
    'filenames' => $filenames,
    'message' => $message
];

echo json_encode($response);
