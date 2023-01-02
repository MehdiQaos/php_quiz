<?php
session_start();
if (!isset($_SESSION['user_info']))
    header('location: login.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo 'Hello ' . $_SESSION['user_info']['first_name'] . ' ' . $_SESSION['user_info']['last_name'] . '<br>';
        echo 'username: ' . $_SESSION['user_info']['username'] . '<br>';
        echo 'email: ' . $_SESSION['user_info']['email'] . '<br>';
    ?>
    <a href="includes/logout.inc.php">Logout</a>
</body>
</html>