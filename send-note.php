<?php
    require __DIR__ . '/lib/autoload.php'; 
    require __DIR__ . '/vendor/autoload.php';

    use YandexCheckout\Client;

    $client = new Client();
    $client->setAuth('500407', 'test_FhL1auNG7-b7Vq42X8t_XrNh_rKd0V8sC1fUzml0-80');
    $payment = $client->createPayment(
        array(
            'amount' => array(
                'value' => 2.0,
                'currency' => 'RUB'
            ),
            'confirmation' => array(
                'type' => 'redirect',
                'return_url' => 'https://avallonis.pro/send-redir.php',
            ),
        ),
        uniqid('', true)
    );
?>