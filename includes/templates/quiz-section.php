<section class="container section hidden" id="quiz-section" style="height: auto;">
    <div id="quiz" class="justify-center flex-column">
        <div id="quiz-info">
            <div class="quiz-info-item">
                <p id="progressText" class="quiz-info-prefix">Question</p>
                <div id="progressBar">
                    <div id="progressBarFull"></div>
                </div>
            </div>
            <div class="quiz-info-item">
                <p class="quiz-info-prefix">Score</p>
                <h2 class="quiz-info-main-text" id="score">0</h1>
            </div>
        </div>
        <div id="timer-progress">
            <div id="timer-progressFull"></div>
        </div>
        <div style="margin-left: auto;">
            <h1 id="timer">10</h1>
        </div>
        <h1 id="question">What is the answer to this question?</h1>
        <!-- TODO: remove this dummy choices -->
        <div class="choice-container">
            <p class="choice-prefix">A</p>
            <p class="choice-text" data-number="1">Choice 1</p>
        </div>
        <div class="choice-container">
            <p class="choice-prefix">B</p>
            <p class="choice-text" data-number="2">Choice 2</p>
        </div>
        <div class="choice-container">
            <p class="choice-prefix">C</p>
            <p class="choice-text" data-number="3">Choice 3</p>
        </div>
        <div class="choice-container">
            <p class="choice-prefix">D</p>
            <p class="choice-text" data-number="4">Choice 4</p>
        </div>
    </div>
</section>
