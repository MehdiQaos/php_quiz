<?php

class SignupContr extends SignupModel {
    private $first_name,
            $last_name,
            $username,
            $email,
            $pwd,
            $rpwd;
    
    public function __construct($fn, $ln, $un, $em, $pw, $rpw) {
        $this->first_name = $fn;
        $this->last_name = $ln;
        $this->username = $un;
        $this->email = $em;
        $this->pwd = $pw;
        $this->rpwd = $rpw;
    }

    public function signUpUser() {
        if ($this->emptyInput()) {
            header('location: ../signup.php?error=emptyinput');
            exit();
        }
        if ($this->invalidEmail()) {
            header('location: ../signup.php?error=invalidemail');
            exit();
        }
        if ($this->invalidUsername()) {
            header('location: ../signup.php?error=invalidusername');
            exit();
        }
        if ($this->passwordNotMatch()) {
            header('location: ../signup.php?error=passwordnotmatch');
            exit();
        }
        if ($this->checkUser($this->username, $this->email)) {
            header('location: ../signup.php?error=useroremailtaken');
            exit();
        }

        return $this->setUser($this->first_name, $this->last_name, $this->username, $this->email, $this->pwd, 0);
    }

    private function emptyInput() {
        return empty($this->first_name)    ||
               empty($this->last_name)     ||
               empty($this->username)      ||
               empty($this->email)         ||
               empty($this->pwd)           ||
               empty($this->rpwd);
    }

    private function invalidUsername() {
        return !preg_match('/^[a-zA-Z0-9-_]*$/', $this->username);
    }

    private function invalidEmail() {
        return !filter_var($this->email, FILTER_VALIDATE_EMAIL);
    }

    private function passwordNotMatch() {
        return $this->pwd !== $this->rpwd;
    }
}