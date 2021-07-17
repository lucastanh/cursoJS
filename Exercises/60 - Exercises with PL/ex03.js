// write a function that takes a number and returns the following:
// Number is divisible by 3 = Fizz
// Number is divisible by 5 = Buzz
// Number is divisible by 3 and 5 = FizzBuzz
// Number is not divisible by 3 and 5 = returns the number itself
// Check if the number is really a number
// Use the function with the numbers from 0 to 100

function fizzBuzz(number) {
  if (typeof number !== 'number' || number === 0) return number;
  if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
  if (number % 3 === 0) return 'Fizz';
  if (number % 5 === 0) return 'Buzz';
  return number;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i))
}
