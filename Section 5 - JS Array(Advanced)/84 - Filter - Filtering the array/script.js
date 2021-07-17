// The filter() method creates an array filled with all array elements that pass a test (provided as a function).
// Note: filter() does not execute the function for array elements without values.
// Note: filter() does not change the original array.
// Syntax: array.filter(function(currentValue, index, arr), thisValue)


// return numbers greater than 10
// const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const filteredNumbers = numbers.filter(value => value > 10)

// console.log(filteredNumbers)


// return people who have names with 5 or more letters
// return people over 50
// return people whose name ends with the 'a'
const pessoas = [
    {name: 'Lucas', age: 20},
    {name: 'Maria', age: 59},
    {name: 'Laercio', age: 60},
    {name: 'Carla', age: 35},
    {name: 'Jéssica', age: 28},
]

const nameWith5 = pessoas.filter(obj => obj.name.length >= 5)
const over50 = pessoas.filter(obj => obj.age > 50)
const nameEndsA = pessoas.filter(obj => obj.name.endsWith('a'))

// console.log(nameWith5)
// console.log(over50)
console.log(nameEndsA)
