<?php

require 'classes/dbh.class.php';
require 'classes/quiz.class.php';


// $q = new Quiz;
// $quizes = $q->getAll();
// var_dump($quizes);
$id = 4;
$quiz = new Quiz;
$result = $quiz->getQuiz($id);
echo $result;

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