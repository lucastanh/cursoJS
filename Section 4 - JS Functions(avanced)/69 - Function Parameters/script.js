// functions that are created with 'function' in their declaration have 'arguments' that hold all argumets sent
function func(a, b, c) {
  let total = 0;
  for (arg of arguments) {
    total += arg
  }
  console.log(total, a, b , c)
}
func(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)


// If we don't send arguments to a function that's waiting for it, an erro will not be generated, the funtion automatically defines the additional arguments as 'undefined'
function func2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f,);
}
func2(1, 2, 3)


// We can set a default value to any parameters
function func3(a = 0, b = 0, c = 0) {
  console.log(a + b + c)
}
// to skip a parameters we can send 'undefined' or 'null' in the arguments
func3(2, null, 20)


// send parameters by destructuring 
function func4({name, lastName, age}) {
  console.log(name, lastName, age);
}
let obj = {name: 'Lucas', lastName: 'Castanheiro', age: 20}
func4(obj);


// Rest operator (...) - Must be last formal parameters
const calc = (operator, accumulator, ...numbers) => {
  for (let number of numbers) {
    if (operator === '+') accumulator += number
    if (operator === '-') accumulator -= number
    if (operator === '/') accumulator /= number
    if (operator === '*') accumulator *= number
  }
  console.log(accumulator)
};
calc('/', 1, 20, 30, 40, 50); 
