<?php

session_start();

include "../classes/dbh.class.php";
include "../classes/score.class.php";

if (isset($_GET['savescore'])) {
    $user_id = $_SESSION['user_info']['id'];
    $quiz_id = $_GET['quiz_id'];
    $points = $_GET['points'];

    $score = new Score;
    $score->saveScore($user_id, $quiz_id, $points);
    echo $user_id; //delete
}
else if (isset($_GET['topscores'])) {
    $quiz_id = $_GET['quiz_id'];
    $top = $_GET['top'];

    $score = new Score;
    echo $score->topScores($quiz_id, $top);
}