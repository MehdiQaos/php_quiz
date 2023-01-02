DROP DATABASE IF EXISTS quizDb;

CREATE DATABASE quizDb;

USE quizDb;

CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    admin BOOLEAN NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Quizes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    quiz_name VARCHAR(255) NOT NULL,
    image_name VARCHAR(255) NOT NULL,
    quiz_data JSON NOT NULL
);

CREATE TABLE Scores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    points INT,
    quiz_id INT,
    user_id INT,
    FOREIGN KEY (quiz_id) REFERENCES Quizes(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

INSERT INTO Users (first_name, last_name, email, username, admin, password)
VALUES ('mehdi', 'qaos', 'm@gmail.com', 'mqaos', TRUE, '$2y$10$A/fNlcbZAa3MGyI50g3K.exs789LHVYgZsQM5AIrqHZxWvS1xo0LS'),
       ('Lionel', 'Messi', 'leo@messi.com', 'leo', FALSE, '$2y$10$bXTwdNocD0OFbqotawZWB.raW2nyS8N57bwG8j3NdqzKJTTRFv6mm');

INSERT INTO Quizes (quiz_name, image_name, quiz_data)
VALUES ('php', 'images/quiz-images/html5_640.png', '[{"question":"What does PHP stand for?","choices":["Personal Hypertext Processor","PHP: Hypertext Preprocessor","Private Home Page"],"time":10,"multiple":false,"answer":"2"},{"question":"How do you get information from a form that is submitted using the GET method?","choices":["Request.Form","Request.QueryString","$_GET[]"],"time":10,"multiple":false,"answer":"3"},{"question":"Include files must have file extension *.inc?","choices":["True","False"],"time":10,"multiple":false,"answer":"2"},{"question":"Which keyword is used to refer to properties or methods within the class itself?","choices":["Private","Public","Protected","$this"],"time":10,"multiple":false,"answer":"4"},{"question":"How can we call the parent constructor in PHP?","choices":["parent:__construct()","parent:construct()","parent::construct()","parent::__construct()"],"time":10,"multiple":false,"answer":"4"},{"question":"Which of the following is used to convert all applicable characters to HTML entities?","choices":["html_entities","html_elements","htmlentities","htmlelements"],"time":10,"multiple":false,"answer":"3"},{"question":"Which of the following is the Scope Resolution Operator?","choices":["\\"","::",":","^"],"time":10,"multiple":false,"answer":"2"},{"question":"What keyword prevents a method from being redefined by a child class?","choices":["abstract","protected","final","static"],"time":10,"multiple":false,"answer":"3"},{"question":"What is the correct way to end a PHP statement?","choices":[";",".","New line","None of the above"],"time":10,"multiple":false,"answer":"1"},{"question":"PHP server scripts are surrounded by delimiters, which?","choices":["<?php...?>","<&>...</&>","<?php>...</?>","<script>...</script>"],"time":10,"multiple":false,"answer":"1"},{"question":"Which of this statements is correct?","choices":["PHP is a compiled language","PHP is a scripting language","PHP can handle the DOM","PHP is an interpreted language"],"time":10,"multiple":true,"answer":["2","4"]}]'),
		('html', 'images/quiz-images/html5_640.png', '[{"question":"Is HTML a programming language?","choices":["Yes","No"],"time":15,"multiple":false,"answer":"2"},{"question":"Which tag is used to specify an inline frame?","choices":["<jframe>","<frameset>","<iframe>","<frame>"],"time":15,"multiple":false,"answer":"1"},{"question":"What does HTML stand for?","choices":["Home Tool Markup Language","Hyperlinks and Text Markup Language","Hyper Text Markup Language"],"time":15,"multiple":false,"answer":"3"},{"question":"Who is making the Web standards?","choices":["Microsoft","Mozilla","Google","The World Wide Web Consortium"],"time":20,"multiple":false,"answer":"4"},{"question":"What is the correct HTML element for inserting a line break?","choices":["<br>","<break>","<lb>"],"time":20,"multiple":false,"answer":"1"},{"question":"HTML Language uses","choices":["Tabs","Tags","Punctuation","Quotations"],"time":20,"multiple":false,"answer":"2"},{"question":"What is the difference between HTML and CSS?","choices":["CSS is one type of HTML","HTML gives a webpage structure. CSS provides styling.","CSS structures a webpage. HTML strictly provides styling.","There is no difference."],"time":30,"multiple":false,"answer":"2"},{"question":"Which of these is an HTML attribute?","choices":["table","border","tr","td"],"time":30,"multiple":false,"answer":"2"},{"question":"Which item interprets the source code in a web document?","choices":["Text editor","Web browser","HTML editor","Web server"],"time":30,"multiple":false,"answer":"2"},{"question":"Which of these is NOT an element of the HTML5 family?","choices":["XML","HTML","CSS","JavaScript"],"time":30,"multiple":false,"answer":"1"}]');