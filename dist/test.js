"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    feed(food, amount) {
        console.log('Feeding ' +
            this.name +
            ' the ' +
            this.constructor.name +
            ' ' +
            amount +
            ' kg of ' +
            food);
    }
}
class Cat extends Animal {
    constructor(name, age, isHungry) {
        super(name, age);
        this.name = 'Emmy';
        this.isHungry = isHungry;
    }
    feed(food, amount) {
        if (this.isHungry) {
            super.feed(food, amount);
        }
        else {
            console.log(this.name +
                ' the ' +
                this.constructor.name +
                ' is not hungry');
        }
    }
}
class Dog extends Animal {
}
const CAT = new Cat('Cosmo', 8, false);
const DOG = new Dog('Rusty', 12);
CAT.feed('Fish', 0.1);
DOG.feed('Beef', 0.25);
