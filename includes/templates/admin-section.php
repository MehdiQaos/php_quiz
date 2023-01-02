<section class="section" id="user-section">
    <header>
        <nav>
            <ul>
                <a href="index.php" style="text-decoration: none; color: white;"><h2>Quizes</h2></a>
            </ul>
                <h2>Admin</h2>
                <a id="logout-button" href="includes/logout.inc.php">LOGOUT</a>
        </nav>
    </header>
    <div class="" >
        <div id="quizes" data-admin="1">
            <?php
                require_once 'includes/functions.inc.php';
                show_quizes(true);
            ?>
            <!-- <div class="card">
                <div class="card-button">
                    <img src="images/quiz-images/html5_640.png">
                </div>
                <h4>HTML 5 quiz</h4>
                <div class="card-infos">
                    <p>25 questions</p>
                    <button class="del-button"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            <div class="card">
                <div>
                    <img src="images/quiz-images/phplogo.jpg">
                </div>
                <h4>php quiz</h4>
                <div class="card-infos">
                    <p>25 questions</p>
                    <button><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            <div class="card">
                <div>
                    <img src="images/quiz-images/Unofficial_JavaScript_logo_2.svg.png">
                </div>
                <h4>Javascript quiz</h4>
                <div class="card-infos">
                    <p>25 questions</p>
                    <button><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            <div class="card">
                <div>
                    <img src="images/quiz-images/html5_640.png">
                </div>
                <h4>HTML 5 quiz</h4>
                <div class="card-infos">
                    <p>25 questions</p>
                    <button><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            <div class="card">
                <div>
                    <img src="images/quiz-images/html5_640.png">
                </div>
                <h4>HTML 5 quiz</h4>
                <div class="card-infos">
                    <p>25 questions</p>
                    <button><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div> -->
        </div>
    </div>
</section>