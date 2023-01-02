<?php

include "../classes/dbh.class.php";
include "../classes/signupmodel.class.php";
include "../classes/signupcontr.class.php";

if (isset($_POST['submit'])) {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $pwd = $_POST['pwd'];
    $rpwd = $_POST['rpwd'];

    $signup = new SignupContr($firstname, $lastname, $username, $email, $pwd, $rpwd);

    if ($signup->signUpUser())
        header('location: ../index.php?error=none');
    else
        header('location: ../signup.php?error=errorsignup');
}