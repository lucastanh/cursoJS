// For in - Reads and returns the index of the object

// let fruits = ['Apple', 'Pear', 'Grape']

// for (let i in fruits) {
//   console.log(fruits[i])
// }

let person = {
  'Name' : 'Lucas',
  'Lastname' : 'Castanheiro',
  'Age': 20 
}

for (key in person) {
  console.log(`${key}:`, person[key])
}