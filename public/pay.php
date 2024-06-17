<?php

require('config.php');
require_once('vendor/autoload.php');

session_start();

$orderData = json_decode(file_get_contents('php://input'), true);

use Razorpay\Api\Api;

$api = new Api($keyId, $keySecret);

$razorpayOrder = $api->order->create($orderData);

$razorpayOrderId = $razorpayOrder['id'];

$response = ['razorpay_order_id' => $razorpayOrderId];

header('Content-Type: application/json');
echo json_encode($response);
?>
