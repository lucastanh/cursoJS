class Person {
    constructor(name, last) {
        this.name = name;
        this.last = last;
    }

    get fullName() {
        return this.name +  ' ' + this.last;
    }

    set fullName(name) {
        name = name.split(' ');
        this.name = name.shift();
        this.last = name.join(' ');
    }
}

const p1 = new Person('Lucas', 'Castanheiro');
p1.fullName = 'Lucas Vinicius Castanheiro';
console.log(p1.fullName);

