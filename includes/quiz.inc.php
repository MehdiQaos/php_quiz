<?php

require_once "../classes/dbh.class.php";
require_once "../classes/quiz.class.php";

if (isset($_GET['delquiz'])) {
    $id = $_GET['delquiz'];
    $quiz = new Quiz;
    $quiz->deleteQuiz($id);

    header('location: ../index.php');
} else if ($_GET['getquiz']) {
    $id = $_GET['getquiz'];
    $quiz = new Quiz;
    $result = $quiz->getQuiz($id);
    echo $result;
}