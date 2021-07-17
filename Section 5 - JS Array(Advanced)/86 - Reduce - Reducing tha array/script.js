// The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).
// Note: reduce() does not execute the function for array elements without values.
// Note: This method does not change the original array.
// Syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numbers.reduce((tot, value) => tot + value, 0);

console.log(total);

// return the oldest person
const persons = [
    {name: 'Lucas', age: 20},
    {name: 'Maria', age: 59},
    {name: 'Laercio', age: 60},
    {name: 'Carla', age: 35},
    {name: 'Jéssica', age: 28},
]

const oldest = persons.reduce(function(acumulator, obj) {
    console.log(acumulator, obj);
    if(acumulator.age > obj.age) {
        return acumulator
    }

    return obj
}, 0)

console.log(oldest)

