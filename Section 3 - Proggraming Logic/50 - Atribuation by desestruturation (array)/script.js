// // ... rest, ... spread 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const [n1, n2, n3, n4, n5, n6, ...resto] = numeros;

console.log(n6);
console.log(resto);

//                   0          2          3
//                0  1  2    0  1  2    0  1  2 
// const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const [, [,,seis]] = numeros
// console.log(seis)