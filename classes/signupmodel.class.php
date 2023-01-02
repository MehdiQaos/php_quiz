<?php

class SignupModel extends Dbh {
    protected function setUser($first_name, $last_name, $username, $email, $password, $admin) {
        $sql = 'INSERT INTO Users (first_name, last_name, username, email, admin, password)
                VALUES (:fn, :ln, :un, :em, :ad, :pw)
                ;';

        $hashedPwd = password_hash($password, PASSWORD_DEFAULT);
        $params = [
            'fn' => $first_name,
            'ln' => $last_name,
            'un' => $username,
            'em' => $email,
            'ad' => $admin,
            'pw' => $hashedPwd
        ];
        try {
            $stm = $this->connect()->prepare($sql);
            return $stm->execute($params); //TODO we want to return true or false
        } catch (PDOException $e) {
            echo 'error SignupModel->setuser: ' . $e->getMessage();
            exit();
        }
    }

    protected function checkUser($username, $email) {
        $sql = 'SELECT *
                FROM Users
                WHERE username = :username
                OR email = :email
                ;';
        $params = [
            'username' => $username,
            'email' => $email
        ];

        try {
            $stm = $this->connect()->prepare($sql);
            $stm->execute($params);
            return $stm->rowCount() > 0;
        } catch (Exception $e) {
            echo 'error SignupModel->checkuser';
            exit();
        }
    }
}