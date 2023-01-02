const HtmlQuestions = [
    {
        question: "Is HTML a programming language?",
        choices: [
            "Yes",
            "No",
        ],
        time: 15,
        multiple: false,
        answer: "2"
    },
    {
        question: "Which tag is used to specify an inline frame?",
        choices: [
            "<jframe>",
            "<frameset>",
            "<iframe>",
            "<frame>",
        ],
        time: 15,
        multiple: false,
        answer: "1"
    },
    {
        question: "What does HTML stand for?",
        choices: [
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Text Markup Language",
        ],
        time: 15,
        multiple: false,
        answer: "3"
    },
    {
        question: "Who is making the Web standards?",
        choices: [
            "Microsoft",
            "Mozilla",
            "Google",
            "The World Wide Web Consortium",
        ],
        time: 20,
        multiple: false,
        answer: "4"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        choices: [
            "<br>",
            "<break>",
            "<lb>",
        ],
        time: 20,
        multiple: false,
        answer: "1"
    },
    {
        question: "HTML Language uses",
        choices: [
            "Tabs",
            "Tags",
            "Punctuation",
            "Quotations",
        ],
        time: 20,
        multiple: false,
        answer: "2"
    },
    {
        question: "What is the difference between HTML and CSS?",
        choices: [
            "CSS is one type of HTML",
            "HTML gives a webpage structure. CSS provides styling.",
            "CSS structures a webpage. HTML strictly provides styling.",
            "There is no difference.",
        ],
        time: 30,
        multiple: false,
        answer: "2"
    },
    {
        question: "Which of these is an HTML attribute?",
        choices: [
            "table",
            "border",
            "tr",
            "td",
        ],
        time: 30,
        multiple: false,
        answer: "2"
    },
    {
        question: "Which item interprets the source code in a web document?",
        choices: [
            "Text editor",
            "Web browser",
            "HTML editor",
            "Web server",
        ],
        time: 30,
        multiple: false,
        answer: "2"
    },
    {
        question: "Which of these is NOT an element of the HTML5 family?",
        choices: [
            "XML",
            "HTML",
            "CSS",
            "JavaScript",
        ],
        time: 30,
        multiple: false,
        answer: "1"
    },
]

const fs = require('fs');
let jsondata = JSON.stringify(HtmlQuestions);

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