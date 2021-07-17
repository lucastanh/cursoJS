// 'this.' reference the object it was called from
// Factory Functions are any function that returns a object without the 'new' keyword 

function Person(name, last, hei, wei) {
  return {
    name,
    last,
    hei,
    wei,

    // Getter
    get fullName() {
      return `${this.name} ${this.last}`
    },

    // Setter
    set fullName(value) {
      value = value.split(' ');
      this.name = value.shift();
      this.last = value.join(' ');
    },

    say(subject) {
      return `${name} is ${subject}.`;
    },
    // Getter
    get imc() {
      const result = this.wei / (this.hei ** 2);
      return result.toFixed(2);
    } 
  };
}

const p1 = Person('Lucas', 'Castanheiro', 1.80, 70);

console.log(p1)
p1.fullName = 'Joao Adalberto Da Silva Ferreira Santos' // calling set
console.log(p1.fullName) // calling get



// console.log(p1)
// console.log(p2)