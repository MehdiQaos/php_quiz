<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signin</title>
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
        <form class="signin" method="POST" action="includes/login.inc.php">
            <input type="text" name="uid" id="username" placeholder="User name or Email">
            <input type="password" name="password" id="password" placeholder="Enter your password">
            <button class="btn" id="save_score_Btn" name="submit" type="submit">Login</button>
        </form>
    </div>
</body>
</html>