class Animal {
    protected name: string
    protected age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

class Cat extends Animal {
    constructor(name: string, age: number) {
        super(name, age)
        console.log(this.name)
    }
}

const CAT = new Cat('Cosmo', 8)
console.log(CAT)
