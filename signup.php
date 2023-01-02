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
    <section class="container" id="signup">
        <div id="end" class="flex-center flex-column">
            <form class="sign-up-container" method="POST" action="includes/signup.inc.php">
                <h1>SIGN UP</h2>
                <div class="flex-center">
                    <input type="text" class="flex-input-left" name="firstname" id="firstname" placeholder="First name" required>
                    <input type="text" name="lastname" id="lastname" placeholder="Last name" required>
                </div>
                <input type="text" name="username" id="username" placeholder="User name" required>
                <input type="text" name="email" id="email" placeholder="Email" required>
                <div class="flex-center">
                    <input type="password" class="flex-input-left" name="pwd" id="password" placeholder="Enter password" required>
                    <input type="password" name="rpwd" id="repeated-password" placeholder="Repeat password" required>
                </div>
                <button class="btn" id="save_score_Btn" name="submit" type="submit">Register</button>
            </form>
        </div>
    </section>
</body>
</html>