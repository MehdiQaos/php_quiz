<?php

session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Nova+Square&display=swap" rel="stylesheet">
    <title>Home Page</title>
</head>
<body>
    <?php
    if (!isset($_SESSION['user_info'])) {
        require 'includes/templates/begin-section.php';
    } else if ($_SESSION['user_info']['admin'] == '1') {
        require 'includes/templates/admin-section.php';
    } else if ($_SESSION['user_info']['admin'] == '0') {
        require 'includes/templates/user-section.php';
    }

    require_once 'includes/templates/quiz-section.php';
    require_once 'includes/templates/ready-to-play-section.php';
    require_once 'includes/templates/score-saving-section.php';
    require_once 'includes/templates/highscores-section.php';
    ?>
    <script src="scripts/main.js"></script>
</body>
</html>