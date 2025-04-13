"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Cat extends Animal {
    constructor(name, age) {
        super(name, age);
        console.log(this.name);
    }
}
const CAT = new Cat('Cosmo', 8);
console.log(CAT);
