// Return the sum of the double of all pairs
// - Filter pairs
// - Double the values
// - Reduce (sum all)

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const result = numbers
    .filter(value => value % 2 === 0)
    .map(value => value * 2)
    .reduce((total, value) => total += value);

console.log(result)