// copiating datas to the other array using spread operator(...)
const names = ['Eduardo', 'Maria', 'Joana']
const copy = [...names]


// Array methods
// names.pop() // remove and returns the last item - 'Joana'
// names.shift() // remove and returns the first item - 'Eduardo'
// names.push('Lucas') // add the item in the end of the array
// names.unshift('Lucas') // add the item in the beginning of the array
let result = names.slice(0, 2) // The slice() method returns the selected elements in an array, as a new array object.
let result2 = names.splice(0, 2) // The splice() method adds/removes items to/from an array, and returns the removed item(s).
console.log(result2);
console.log(names);


// const name = 'Lucas Vinicius Castanheiro'
// const names = name.split(' ') //The split() method is used to split a string into an array of substrings, and returns the new array.
// nome = names.join(' ') // The join() method returns the array as a string.

