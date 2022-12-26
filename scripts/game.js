const questionElm = document.getElementById("question");
const choicesElms = document.querySelectorAll(".choice-container");
let question;

let questions = [
    {
        question: "what is 2 + 2?",
        choices: [
            "4",
            "3",
            "50",
            "8"
        ],
        answer: "1"
    }
];

function get_question() {
    question = questions.pop();
    questionElm.innerText = question.question;
    let numChoices = question.choices.length;
    for (let i=0; i<numChoices; i++) {
        choicesElms[i].querySelector(".choice-text").innerText = question.choices[i];
        choicesElms[i].querySelector(".choice-text").dataset.number = i + 1;
        choicesElms[i].addEventListener('click', (e) => {
            let number = e.dataset.number;
            if (number === question.answer) {

            }
        });
    }
}

// function get_answer() {

// }

get_question();
