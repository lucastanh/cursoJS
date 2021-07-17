// For in - Reads and returns the values of each index of the object  

// let name = 'Lucas Vinicius Castanheiro'

// for(let valor of name) {
//   console.log(valor)
// }

// let products = [
//   {'desc':'rice', 'price':5.99},
//   {'desc':'meat', 'price':13.50},
//   {'desc':'bean', 'price':1.84},
// ]

// for (let i of products) {
//   console.log(i)
// }

let names = ['Lucas', 'Vinicius', 'Castanheiro']

names.forEach(function(value, index, array){
  console.log(value, index, array)
})