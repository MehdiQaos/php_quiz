<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
    <style>
        body > div {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .signup, .signin {
            display: flex;
            flex-direction: column;
        }
    </style>
</head>
<body>
    <div>
        <form class="signup" method="POST" action="includes/signup.inc.php">
            <input type="text" class="flex-input-left" name="firstname" id="firstname" placeholder="First name" required>
            <input type="text" name="lastname" id="lastname" placeholder="Last name" required>
            <input type="text" name="username" id="username" placeholder="User name" required>
            <input type="text" name="email" id="email" placeholder="Email" required>
            <input type="password" class="flex-input-left" name="pwd" id="password" placeholder="Enter password" required>
            <input type="password" name="rpwd" id="repeated-password" placeholder="Repeat password" required>
            <button class="btn" name="submit" id="save_score_Btn" type="submit">Register</button>
        </form>
    </div>
</body>
</html>