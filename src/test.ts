abstract class Animal {
    abstract name: string
    age = -1

    constructor() {}

    abstract feed(food: string, amount: number): void
}

class Cat extends Animal {
    name: string
    constructor(name: string, age: number) {
        super()
        this.name = name
        this.age = age
    }

    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
                this.name +
                ' the Cat ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

class Dog extends Animal {
    name: string
    constructor(name: string, age: number) {
        super()
        this.name = name
        this.age = age
    }

    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
                this.name +
                ' the Dog ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

const CAT = new Cat('Cosmo', 8)
const DOG = new Dog('Rusty', 12)
CAT.feed('Fish', 0.1)
DOG.feed('Beef', 0.25)
