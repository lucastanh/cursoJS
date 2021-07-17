const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [8, 9, 0];

// with .concat()
// const a4 = a1.concat(a2, a3, [10, 11], 'Lucas', 10);

// with ...spread
const a4 = [...a1, ...a2, ...a3, ...[10, 11], 'Lucas'];

console.log(a4);