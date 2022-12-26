const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

let questions = [
    {
        question: 'What is 2 + 2?',
        choice1: '10',
        choice2: '22',
        choice3: '35',
        choice4: '4',
        answer: 4
    },
    {
        question: 'city with the tallest building?',
        choice1: 'NY',
        choice2: 'Casablanca',
        choice3: 'Dubai',
        choice4: 'Shanghai',
        answer: 3
    },
    {
        question: 'best player in the world?',
        choice1: 'Neymar',
        choice2: 'Haaland',
        choice3: 'Mbape',
        choice4: 'Messi',
        answer: 4
    },
    {
        question: 'Who got the 4th place in the world cup?',
        choice1: 'Brazil',
        choice2: 'Argentina',
        choice3: 'Morocco',
        choice4: 'Algeria',
        answer: 3
    }
]

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    });

    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct')
            incrementScore(SCORE_POINTS);

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();
