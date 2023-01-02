<?php

require_once "classes/dbh.class.php";
require_once "classes/quiz.class.php";

function show_quizes($admin) {
    $q = new Quiz;
    $quizes = $q->getAll();
    $cards = '';

    foreach ($quizes as $quiz) {
        $id = $quiz['id'];
        $quiz_name = $quiz['quiz_name'];
        $image_name = $quiz['image_name'];
        $num_questions = count(json_decode($quiz['quiz_data']));
        $remove_quiz = $admin ? "<a href='includes/quiz.inc.php?delquiz=$id' class='del-button'><i class='fa-solid fa-trash-can'></i></a>" : '';

        $cards .= "
            <div class='card'>
                <div data-id='$id' class='card-button'>
                    <img src='$image_name'>
                </div>
                <h4>$quiz_name quiz</h4>
                <div class='card-infos'>
                    <p>$num_questions questions</p>
                    $remove_quiz
                </div>
            </div>
        ";
    }

    echo $cards;
}