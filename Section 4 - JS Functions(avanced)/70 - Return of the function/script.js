// return - return a value - ends the function
let sum = (a, b) => a + b
s1 = sum(5, 6);
console.log(s1);
 

function createPerson(name, lastName) {
  return {name, lastName};
}
const p1 = createPerson('Lucas', 'Castanheiro')
console.log(p1)


function speakPhrase(init) {
  function speakRest(rest) {
    return init + ' ' + rest;
  }

  return speakRest;
}
const hW = speakPhrase('Hello');
console.log(hW('World'))


// Closure function - is a function that remembers the lexical scope in which it was created.
function createMultiplier(multiplier) {
  // multiplier
  return function(n) {
    return multiplier * n
  }
}

const double = createMultiplier(2);
console.log(double(2))