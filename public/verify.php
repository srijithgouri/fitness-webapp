<?php

require('config.php');
require_once('vendor/autoload.php');

session_start();

$data = json_decode(file_get_contents('php://input'), true);

use Razorpay\Api\Api;
use Razorpay\Api\Errors\SignatureVerificationError;

$response = array(
    'success' => false,
    'message' => 'Payment Failed',
    'error' => ''
);

if (!empty($data['razorpay_payment_id'])) {
    $name = $data['name'];
    $email = $data['email'];
    $phoneNumber = $data['phoneNumber'];
    $address = $data['address'];
    $plan = $data['plan'];
    $receiptId = $data['receiptId'];

    $api = new Api($keyId, $keySecret);

    try {
        $attributes = array(
            'razorpay_order_id' => $data['razorpay_order_id'],
            'razorpay_payment_id' => $data['razorpay_payment_id'],
            'razorpay_signature' => $data['razorpay_signature']
        );

        $api->utility->verifyPaymentSignature($attributes);

        $response['success'] = true;
        $response['message'] = 'Your payment was successful';
        $response['name'] = $name;
        $response['email'] = $email;
        $response['address'] = $address;
        $response['plan'] = $plan;
        $response['receiptId'] = $receiptId;
        $response['razorpay_order_id'] = $data['razorpay_order_id'];
        $response['razorpay_payment_id'] = $data['razorpay_payment_id'];
    } catch (Exception $e) {
        $response['message'] = 'Error: ' . $e->getMessage();
        $response['error'] = $e->getMessage();
    }
}

header('Content-Type: application/json');
echo json_encode($response);
