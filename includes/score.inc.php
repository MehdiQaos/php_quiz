<?php

session_start();

include "../classes/dbh.class.php";
include "../classes/score.class.php";

if (isset($_GET['savescore'])) {
    $user_id = $_SESSION['user_info']['id'];
    $quiz_id = $_GET['quiz_id'];
    $points = $_GET['points'];

    $score = new Score;
    echo $score->topScores(2, 3);
}