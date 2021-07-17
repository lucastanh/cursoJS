class Person {
    constructor(name, last) {
        this.name = name;
        this.last = last;
    }

    drink() {
        console.log(`${this.name} is drinking...`)
    }
}

const p1 = new Person('Lucas', 'Castanheiro');
const p2 = new Person('Laercio', 'Castanheiro');
console.log(p1);
console.log(p2);