const questionElm = document.getElementById("question");
const choicesElms = document.querySelectorAll(".choice-container");

let questions = [
    {
        question: "what is 2 + 2?",
        choices: [
            "mehdi qaos",
            "khouribga",
            "ock",
            "morocco"
        ],
        answer: "2"
    }
];

function get_question() {
    let question = questions.pop();
    questionElm.innerText = question.question;
    for (let i=0; i<4; i++) {
        choicesElms[i].querySelector(".choice-text").innerText = question.choices[i];
        choicesElms[i].querySelector(".choice-text").dataset.number = i + 1;
        choicesElms[i].addEventListener('click', (e) => {
            let number = e.dataset.number;
        });
    }
}

// function get_answer() {

// }

get_question();