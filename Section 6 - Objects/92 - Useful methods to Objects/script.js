// Copying an object - spread operator(...)
const product = {
    name: 'mug',
    price: 1.8,
}
const outro = {...product};

// Returning a descriptor of properties to a property
Object.defineProperty(product, 'name', {
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(product, 'name'))

// returning the product keys
console.log(Object.keys(product))

// returning the product values
console.log(Object.values(product))

// returning an array with its own pairs
console.log(Object.entries(product))
// for (let [key, value] of Object.entries(product)) {
//     console.log(key, value)
// }