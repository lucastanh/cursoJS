// Declaration of function (Function Hoisting) - Function Hoisting is a technique which moves variables and functions to the top of their scope before code executions begins.
falaOi();
function falaOi() {
  console.log('Oi');
}

// First-class objects - Function expression - put a function inside of a variable - We can treat a function as a data
const iAmAData = function() {
  console.log('I am a data');
}
iAmAData();

// Arrow function - allow us to write a shorter function syntax
const arrowFunction = () => console.log('I am a Arrow Function');
arrowFunction();

const pessoa = {falar() {console.log('I am speaking')}};
pessoa.falar();
