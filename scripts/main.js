const containers = document.querySelectorAll('.container');
const home_section = document.getElementById('home-section');
const quiz_section = document.getElementById('quiz-section');
const highScores_section = document.getElementById('high-scores-section');
const scoreSaving_section = document.getElementById('score-saving-section');

const play_btn = document.getElementById('play-btn');
const highScores_btn = document.getElementById('highscores-btn');
const highScores_to_home_btn = document.getElementById('highscores_to_home');
const save_score_btn = document.getElementById('save_score_Btn');
const saving_to_quiz_btn = document.getElementById('saving_to_quiz');
const saving_to_home_btn = document.getElementById('saving_to_home');
const userNameInput = document.getElementById('username');

function go_home() {
    containers.forEach(container => container.classList.add('hidden'));
    home_section.classList.remove('hidden');
}

play_btn.addEventListener('click', () => {
    home_section.classList.add('hidden');
    quiz_section.classList.remove('hidden');
    start_quiz();
});

highScores_btn.addEventListener('click', () => {
    home_section.classList.add('hidden');
    highScores_section.classList.remove('hidden');

    const highScoresList = document.getElementById('highScoresList');
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    let i = 1;
    highScoresList.innerHTML = highScores.map(score => {
        return `<li class="high-score">${i++}- ${score.name} : ${score.score}</li>`;
    }).join('');
});

highScores_to_home_btn.addEventListener('click', () => {
    highScores_section.classList.add('hidden');
    home_section.classList.remove('hidden');
});

saving_to_quiz_btn.addEventListener('click', () => {
    scoreSaving_section.classList.add('hidden');
    quiz_section.classList.remove('hidden');
});

saving_to_home_btn.addEventListener('click', () => {
    scoreSaving_section.classList.add('hidden');
    home_section.classList.remove('hidden');
});

userNameInput.addEventListener('keyup', () => {
    save_score_btn.disabled = !userNameInput.value;
});

save_score_btn.addEventListener('click', (e) => {
    e.preventDefault();
    const userName = document.getElementById('username');
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const newScore = {
        score: score,
        name: userName.value
    };
    userName.value = '';
    highScores.push(newScore);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(MAX_HIGH_SCORES);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    go_home();
});

// quiz section
const MAX_HIGH_SCORES = 5;
let allQuestions = [
    {
        question: "what is 2 + 2?",
        choices: [
            "4",
            "3",
            "50",
            "8"
        ],
        time: 60,
        multiple: false,
        answer: "1"
    },
    {
        question: "city with the tallest building?",
        choices: [
            "NY",
            "Casablanca",
            "Dubai",
            "Shanghai",
        ],
        time: 30,
        multiple: false,
        answer: "3"
    },
    {
        question: "best player in the world?",
        choices: [
            "Neymar",
            "Haaland",
            "Mbape",
            "Messi",
        ],
        time: 30,
        multiple: false,
        answer: "4"
    },
    {
        question: "Who got the 4th place in the world cup?",
        choices: [
            "Brazil",
            "Argentina",
            "Morocco",
            "Algeria",
        ],
        time: 30,
        multiple: false,
        answer: "3"
    }
];

const questionElm = document.getElementById("question");
let question, score = 0, questionNumber = 0, numQuestions = allQuestions.length;
const SCORE_POINTS = 50;
let availableQuestions = [...allQuestions].sort(() => Math.random() - 0.5);

function start_quiz() {
    score = 0, questionNumber = 0, numQuestions = allQuestions.length;
    availableQuestions = [...allQuestions].sort(() => Math.random() - 0.5);
    new_question();
}

function remove_choices() {
    document.querySelectorAll(".choice-container").forEach(e => e.remove());
}

function make_choices(choices) {
    shuffle(choices);
    let letterCode = 65; // ASCII code of 'A'
    choices.forEach(choice => {
        let quiz = document.getElementById('quiz');
        quiz.innerHTML += 
            `<div class="choice-container">
                <p class="choice-prefix">${String.fromCharCode(letterCode++)}</p>
                <p class="choice-text" data-number="${choice.number}">${choice.text}</p>
            </div>`;
        
        document.querySelectorAll('.choice-container').forEach(choice => {
            choice.addEventListener('click', get_answer);
        })
    });
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function new_question() {
    if (availableQuestions.length == 0) {
        document.getElementById('finalScore').innerText = score;
        quiz_section.classList.add('hidden');
        scoreSaving_section.classList.remove('hidden');
        return;
    }

    questionNumber++;
    question = availableQuestions.pop();
    remove_choices();
    document.getElementById('question').innerText = question.question;
    document.getElementById('progressBarFull').style.width = `${Math.floor(questionNumber / numQuestions * 100)}%`; 
    document.getElementById('progressText').innerText = `Question ${questionNumber} of ${numQuestions}`;
    let choices = question.choices;
    assoc_choices = [];
    for (const [index, choice] of choices.entries()) {
        assoc_choices.push({number: index + 1, text: choice});
    }
    make_choices(assoc_choices);
}

function get_answer(e) {
    let number = e.target.dataset.number;
    if (question.answer === number) {
        score += SCORE_POINTS;
        document.getElementById('score').innerText = score;
    }
    new_question();
}

go_home();