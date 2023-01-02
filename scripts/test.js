// let l = [];
const allQuestions = [
    {
        question: "What does PHP stand for?",
        choices: [
            "Personal Hypertext Processor",
            "PHP: Hypertext Preprocessor",
            "Private Home Page",
        ],
        time: 10,
        multiple: false,
        answer: "2"
    },
    {
        question: "How do you get information from a form that is submitted using the GET method?",
        choices: [
            "Request.Form",
            "Request.QueryString",
            "$_GET[]",
        ],
        time: 10,
        multiple: false,
        answer: "3"
    },
    {
        question: "Include files must have file extension *.inc?",
        choices: [
            "True",
            "False",
        ],
        time: 10,
        multiple: false,
        answer: "2"
    },
    {
        question: "Which keyword is used to refer to properties or methods within the class itself?",
        choices: [
            "Private",
            "Public",
            "Protected",
            "$this",
        ],
        time: 10,
        multiple: false,
        answer: "4"
    },
    {
        question: "How can we call the parent constructor in PHP?",
        choices: [
            "parent:__construct()",
            "parent:construct()",
            "parent::construct()",
            "parent::__construct()",
        ],
        time: 10,
        multiple: false,
        answer: "4"
    },
    {
        question: "Which of the following is used to convert all applicable characters to HTML entities?",
        choices: [
            "html_entities",
            "html_elements",
            "htmlentities",
            "htmlelements",
        ],
        time: 10,
        multiple: false,
        answer: "3"
    },
    {
        question: "Which of the following is the Scope Resolution Operator?",
        choices: [
            "\"",
            "::",
            ":",
            "^",
        ],
        time: 10,
        multiple: false,
        answer: "2"
    },
    {
        question: "What keyword prevents a method from being redefined by a child class?",
        choices: [
            "abstract", 
            "protected", 
            "final", 
            "static",
        ],
        time: 10,
        multiple: false,
        answer: "3"
    },
    {
        question: "What is the correct way to end a PHP statement?",
        choices: [
            ";",
            ".",
            "New line",
            "None of the above",
        ],
        time: 10,
        multiple: false,
        answer: "1"
    },
    {
        question: "PHP server scripts are surrounded by delimiters, which?",
        choices: [
            "<?php...?>",
            "<&>...</&>",
            "<?php>...</?>",
            "<script>...</script>",
        ],
        time: 10,
        multiple: false,
        answer: "1"
    },
    {
        question: "Which of this statements is correct?",
        choices: [
            "PHP is a compiled language",
            "PHP is a scripting language",
            "PHP can handle the DOM",
            "PHP is an interpreted language",
        ],
        time: 10,
        multiple: true,
        answer: ["2", "4"]
    },
];

const fs = require('fs');
let jsondata = JSON.stringify(allQuestions);

const content = 'Some content!';

try {
  fs.writeFileSync('jsondata.txt', jsondata);
  // file written successfully
} catch (err) {
  console.error(err);
}

// fetch('includes/quiz.inc.php')
//     .then((res) => res.json())
//     .then((data) => {

//     });

// choices = [
//     "NY",
//     "Casablanca",
//     "Dubai",
//     "Shanghai",
// ];

// assoc_choices = [];
// for (const [index, choice] of choices.entries()) {
//     // console.log(index, e);
//     assoc_choices.push({number: index + 1, text: choice});
// }

// console.log(typeof(assoc_choices[0]));

// function random(r_min, r_max) {
//     return parseInt(Math.random() * (r_max - r_min) + r_min);
// }

// function shuffle(array) {
//     return array.sort(() => Math.random() - 0.5);
// }

// function shuffle_copy(array) {
//     return [...array].sort(() => Math.random() - 0.5);
// }

// for (let i=0; i<10; i++)
//     l.push(i);

// l.sort(() => Math.random() - 0.5);
// l.sort((a, b) => a - b);
// l.forEach(v => console.log(v));

// let ll = shuffle_copy(l);

// console.log(l);
// console.log(ll);