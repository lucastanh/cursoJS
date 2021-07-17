// JavaScript is based ON prototypes to pass properties and methods from one object to another.

// Constructor -> mold (Class)
function Person(name, last) {
    this.name = name;
    this.last = last;
    // this.fullName = () => `ORIGINAL ${this.name} ${this.last}`
}
Person.prototype.fullName = function() {return `${this.name} ${this.last}`;}


// Instance
const person1 = new Person('Lucas', 'Castanheiro'); 

console.dir(person1)
