// Closure Function - is a function that remebers the lexical scope which it was created.

function returnFunction(name) {
  return function() {
    return name;
  }
}

const func = returnFunction("Lucas");
const func2 = returnFunction("Maria");
console.dir(func());
console.dir(func2());