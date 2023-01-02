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
        </div>
    </div>
</section>