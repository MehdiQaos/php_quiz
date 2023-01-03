const containers = document.querySelectorAll('.container');
const sections = document.querySelectorAll('.section');
const user_section = document.getElementById('user-section');
const home_section = document.getElementById('readytoplay-section');
const quiz_section = document.getElementById('quiz-section');
const highScores_section = document.getElementById('high-scores-section');
const scoreSaving_section = document.getElementById('score-saving-section');
const quizCards = document.querySelectorAll('.card-button');
const progressBar = document.getElementById("progress-bar");
const stepper = document.getElementById("progress");

const goBAckBtn = document.getElementById('goback-btn');
const play_btn = document.getElementById('play-btn');
const highScores_btn = document.getElementById('highscores-btn');
const highScores_to_home_btn = document.getElementById('highscores_to_home');
const save_score_btn = document.getElementById('save_score_Btn');
const saving_to_quiz_btn = document.getElementById('saving_to_quiz');
const saving_to_home_btn = document.getElementById('saving_to_home');
const userNameInput = document.getElementById('username');
const timerElm = document.getElementById('timer');

const userName = document.getElementById('username');
const MAX_HIGH_SCORES = 5;

let question, timer, timeOut, score = 0, questionNumber = 0, numQuestions, quizId, acceptingQuestions;
const SCORE_POINTS = 50;
let allQuestions, availableQuestions;

quizCards.forEach(card => {
    card.addEventListener('click', function() {
        quizId = this.dataset.id;
        fetch(`./includes/quiz.inc.php?getquiz=${quizId}`)
            .then((res) => res.json())
            .then((data) => {
                allQuestions = data;
                go_home();
            });
    });
});

function go_home() {
    sections.forEach(container => container.classList.add('hidden'));
    home_section.classList.remove('hidden');
}

play_btn.addEventListener('click', () => {
    home_section.classList.add('hidden');
    quiz_section.classList.remove('hidden');
    stepper.remove();
    quiz_section.prepend(stepper);
    active = 2;
    updateProgress();
    start_quiz();
});

highScores_btn.addEventListener('click', () => {
    home_section.classList.add('hidden');
    highScores_section.classList.remove('hidden');

    const highScoresList = document.getElementById('highScoresList');
    // const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    let highScores;

    fetch(`./includes/score.inc.php?quiz_id=${quizId}&top=${3}&topscores=`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            highScores = data;
            let i = 1;
            highScoresList.innerHTML = highScores.map(score => {
                return `<li class="high-score">${i++}- ${score.name} : ${score.score}</li>`;
            }).join('');
        });

    // console.log(highScores);

});

highScores_to_home_btn.addEventListener('click', () => {
    highScores_section.classList.add('hidden');
    home_section.classList.remove('hidden');
    active = 1;
    updateProgress()
    stepper.remove();
    home_section.prepend(stepper);
});

saving_to_quiz_btn.addEventListener('click', () => {
    scoreSaving_section.classList.add('hidden');
    quiz_section.classList.remove('hidden');
    start_quiz();
});

saving_to_home_btn.addEventListener('click', () => {
    scoreSaving_section.classList.add('hidden');
    user_section.classList.remove('hidden');
});

userNameInput.addEventListener('keyup', () => {
    save_score_btn.disabled = !userNameInput.value;
});

save_score_btn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(`./includes/score.inc.php?quiz_id=${quizId}&points=${score}&savescore=`)
        .then((res) => res.text())
        .then((data) => {
            scoreSaving_section.classList.add('hidden');
            user_section.classList.remove('hidden');
        });
         
    userName.value = '';
    // const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    // const newScore = {
    //     score: score,
    //     name: userName.value
    // };
    // highScores.push(newScore);
    // highScores.sort((a, b) => b.score - a.score);
    // highScores.splice(MAX_HIGH_SCORES);

    // localStorage.setItem('highScores', JSON.stringify(highScores));
    // go_home();
});

function start_quiz() {
    score = 0, questionNumber = 0, numQuestions = allQuestions.length;
    document.getElementById('score').innerText = score;
    availableQuestions = [...allQuestions].sort(() => Math.random() - 0.5);
    new_question();
}

function remove_choices() {
    document.querySelectorAll(".choice-container").forEach(e => e.remove());
}

function remove_submit_button() {
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn)
        submitBtn.remove();
}

function make_choices(choices, multiple) {
    shuffle(choices);
    let letterCode = 65; // ASCII code of 'A'
    choices.forEach(choice => {
        let quiz = document.getElementById('quiz');
        const choiceContainer = document.createElement('div');
        choiceContainer.dataset.number = choice.number;
        choiceContainer.classList.add('choice-container');
        choiceContainer.innerHTML = 
            `<p class="choice-prefix">${String.fromCharCode(letterCode++)}</p>
             <p class="choice-text"></p>
            `;
        choiceContainer.querySelector('.choice-text').innerText = choice.text;
        quiz.appendChild(choiceContainer);
        
        if (multiple) {
            choiceContainer.addEventListener('click', function() {
                this.classList.toggle('checked');
            });
        }
        else
            choiceContainer.addEventListener('click', get_answer);
    });
    if (multiple) {
        const submitBtn = document.createElement('div');
        submitBtn.classList.add('flex-center');
        submitBtn.id = 'submit-btn';
        submitBtn.innerHTML = "<button class='btn yellow-btn'>Submit</button>";
        quiz.appendChild(submitBtn);
        submitBtn.addEventListener('click', get_answer_multiple);
    }
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

const timerProgress = document.getElementById('timer-progressFull');
let myInterval;

function new_question() {
    if (availableQuestions.length == 0) {
        document.getElementById('finalScore').innerText = score;
        quiz_section.classList.add('hidden');
        scoreSaving_section.classList.remove('hidden');
        return;
    }
    acceptingQuestions = true;
    questionNumber++;
    question = availableQuestions.pop();
    remove_choices();
    remove_submit_button();

    timer = question.time * 1000;
    myInterval = setInterval(() => {
        timer -= 10;
        if (timer == 0) {
            clearInterval(myInterval);
            new_question();
        }
        else {
            timerProgress.style.width = `${parseInt(timer / (question.time * 1000) * 100)}%`;
            timerElm.innerText = parseInt(timer / 1000) + 1;
        }
    }, 10);

    document.getElementById('question').innerText = question.question;
    document.getElementById('progressBarFull').style.width = `${Math.floor(questionNumber / numQuestions * 100)}%`; 
    document.getElementById('progressText').innerText = `Question ${questionNumber} of ${numQuestions}`;
    let choices = question.choices;
    const assoc_choices = [];
    for (const [index, choice] of choices.entries()) {
        assoc_choices.push({number: index + 1, text: choice});
    }
    make_choices(assoc_choices, question.multiple);
}

function get_answer_multiple() {
    if (!acceptingQuestions)
        return;
    acceptingQuestions = false;
    let correctAnswer = true;
    clearInterval(myInterval);
    let answers = [], wrongAnswers = [];
    document.querySelectorAll('.choice-container').forEach(choice => {
        if (choice.classList.contains('checked')) {
            answers.push(choice);
        }
    });

    for (const answer of answers) {
        if (!question.answer.includes(answer.dataset.number)) {
            correctAnswer = false;
            wrongAnswers.push(answer);
        }
    }

    if (correctAnswer) {
        score += SCORE_POINTS;
        document.getElementById('score').innerText = score;
    }
    else {
        // TODO: use functional style (filter?)
        wrongAnswers.forEach(choice => { 
            choice.classList.toggle('incorrect');
            choice.classList.toggle('checked');
        });
    }
    document.querySelectorAll('.choice-container').forEach(choice => {
        if (question.answer.includes(choice.dataset.number))
            choice.classList.add('correct');
    });
    setTimeout(() => new_question(), 1000);
    document.getElementById('submit-btn').remove();
}

function get_answer() {
    if (!acceptingQuestions)
        return;
    acceptingQuestions = false;
    clearInterval(myInterval);
    let number = this.dataset.number;
    if (question.answer === number) {
        score += SCORE_POINTS;
        document.getElementById('score').innerText = score;
        this.classList.add('correct');
    }
    else {
        this.classList.add('incorrect');
        // TODO: use functional style (filter?)
        document.querySelectorAll('.choice-container').forEach(choice => { 
            if (choice.dataset.number == question.answer) {
                choice.classList.add('correct');
            }
        });
    }
    setTimeout(() => new_question(), 1000);
}
// const progressNext = document.getElementById("progress-next");
// const progressPrev = document.getElementById("progress-prev");
const steps = document.querySelectorAll(".step");
let active = 1;

// progressNext.addEventListener("click", () => {
//     if (active < steps.length) {
//         active++;
//         updateProgress();
//     }
// });

// progressPrev.addEventListener("click", () => {
//     if (active > 1) {
//         active--;
//         updateProgress();
//     }
// });

const updateProgress = () => {
    // toggle active class on list items
    steps.forEach((step, i) => {
        if (i < active) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });
    // set progress bar width  
    progressBar.style.width =
        ((active - 1) / (steps.length - 1)) * 100 + "%";
    // enable disable prev and next buttons
    // progressPrev.disabled = false;
    // progressNext.disabled = false;
    // if (active === 1)
    //     progressPrev.disabled = true;
    // else if (active === steps.length)
    //     progressNext.disabled = true;
};