<?php

class A {
    public $a;
}

class B extends A {
    public function __construct($a) {
        $this->a = $a;
    }
}

$b = new B(10);
echo $b->a;