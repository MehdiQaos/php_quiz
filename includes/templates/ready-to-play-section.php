<style>
#progress {
  position: relative;
  margin: auto;
  margin-top: 30px;   
  width: 50%;
}
#progress-bar {
  position: absolute;
  background: lightseagreen;
  height: 5px;
  width: 0%;
  top: 50%;
  left: 0;
}
#progress-num {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
#progress-num::before {
  content: "";
  background-color: lightgray;
  position: absolute;
  top: 50%;
  left: 0;
  height: 5px;
  width: 100%;
  z-index: -1;
}
.step { /* progress-num not needed */
  border: 3px solid lightgray;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background-color: #fff;
  font-family: sans-serif;
  font-size: 14px;    
  position: relative; /* not needed */
  z-index: 1;
}
.step.active {
  border-color: lightseagreen;
  background-color: lightseagreen;
  color: #fff;
}
</style>
<section class="section hidden" id="readytoplay-section" style="height: auto;">
    <div id="progress">
        <div id="progress-bar"></div>
        <ul id="progress-num">
            <li class="step active">1</li>
            <li class="step">2</li>
            <li class="step">3</li>
        </ul>
    </div>
    <div class="container">
    <div id="home" class="flex-column flex-center">
        <h1>Ready to play?</h1>
        <h2>
        <!-- <pre style="border: 2px solid white; padding: 10px; border-radius: 10px">
1. You have a timer for each question.
2. Once you select Your answer, it can't be undone.
3. You'll get points on the basic of your correct answers.
4. You can't exit from the quiz while you are playing.</pre> -->
        </h2>
        <button id="play-btn" class="btn">Play</button>
        <a href="index.php" id="goback-btn" class="btn">Go back</a>
        <button id="highscores-btn" class="btn yellow-btn">High Scores<i class="fas fa-crown"></i></button>
    </div>
    </div>
</section>