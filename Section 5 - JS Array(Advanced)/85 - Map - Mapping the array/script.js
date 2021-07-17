// The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.
// Note: map() does not execute the function for array elements without values.
// Note: this method does not change the original array.
// array.map(function(currentValue, index, arr), thisValue)

// Double the number
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const doubles = numbers.map((value, index) => value * 2)
console.log(doubles)


// for each element:
// returns a single string with the person's name
// remove the single key 'name' from the object
// add an 'id' key to each element
const persons = [
    {name: 'Lucas', age: 20},
    {name: 'Maria', age: 59},
    {name: 'Laercio', age: 60},
    {name: 'Carla', age: 35},
    {name: 'Jéssica', age: 28},
]


const names = persons.map(obj => obj.name)

const ages = persons.map(obj => ({age: obj.age}))

const ids = persons.map(function(obj, index) {
    newObj = {...obj};
    newObj.id = index + 1;
    return newObj;
})



console.log(ages)


