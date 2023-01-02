<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Nova+Square&display=swap" rel="stylesheet">
    <title>Home Page</title>
</head>
<body>
    <section class="container" id="login-section">
        <div id="end" class="flex-center flex-column">
            <form class="end-form-container" method="POST" action="includes/login.inc.php">
                <h1>LOGIN</h2>
                <input type="text" name="uid" id="username" placeholder="Enter your User name">
                <input type="password" name="password" id="password" placeholder="Enter your password">
                <button type="submit" class="btn" id="save_score_Btn" name="submit">Login</button>
            </form>
            <a href="signup.php" id="saving_to_quiz" class="btn yellow-btn">Sign Up</a>
        </div>
    </section>
</body>
</html>