"use strict";
class Animal {
    constructor() {
        this.age = -1;
    }
}
class Cat extends Animal {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }
    feed(food, amount) {
        console.log('Feeding ' +
            this.name +
            ' the Cat ' +
            amount +
            ' kg of ' +
            food);
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }
    feed(food, amount) {
        console.log('Feeding ' +
            this.name +
            ' the Dog ' +
            amount +
            ' kg of ' +
            food);
    }
}
const CAT = new Cat('Cosmo', 8);
const DOG = new Dog('Rusty', 12);
CAT.feed('Fish', 0.1);
DOG.feed('Beef', 0.25);
