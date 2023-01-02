<?php

require 'classes/dbh.class.php';
require 'classes/quiz.class.php';
require 'classes/score.class.php';

$score = new Score;
var_dump($score->topScores(2, 3));
// $score->saveScore(1, 2, 300);
// $score->saveScore(2, 2, 70);
// $score->saveScore(3, 2, 10);
// $score->saveScore(4, 2, 2000);
// $score->saveScore(5, 2, 220);
// $score->saveScore(6, 2, 50);
// $score->saveScore(7, 2, 20);
// $score->saveScore(8, 2, 200);
// $score->saveScore(9, 2, 100);

// $sql = "SELECT *
//         FROM Users
//         WHERE id = ?
//         ;";
// try {
//     $dbh = new DBH;
//     $stm = $dbh->connect()->prepare($sql);
//     $stm->execute([10]);
//     $r = $stm->fetch();
// } catch (PDOException $e) {
//     echo 'pdoexception: ' . $e->getMessage();
//     die();
// }

// if ($r)
//     echo 'yes';
// else
//     echo 'no';


// $q = new Quiz;
// $quizes = $q->getAll();
// var_dump($quizes);
// $id = 4;
// $quiz = new Quiz;
// $result = $quiz->getQuiz($id);
// echo $result;

// $dbh = new Dbh();
// $pdo = $dbh->connect();

// $sql = "SELECT * FROM Quizes;";
// $result = $pdo->query($sql);
// $row = $result->fetch();

// var_dump($row['quiz_data']);
// $aa = json_decode($row['quiz_data']);
// echo count($aa);


// $raw = ["name"=> "mehdi", "age"=> "32"];
// $s = json_decode($raw);
// // $arr = json_encode($raw);
// var_dump($s);

// $jsn = $row['quiz_data'];

// echo $jsn;

// $arr = json_decode($jsn);
// echo $arr;
// echo count($arr);

// echo strlen($jsn);
// echo strlen($raw);

// var_dump($jsn == $raw);

// $arr = json_decode($row['quiz_data']);
// var_dump($arr);

// echo count($arr);