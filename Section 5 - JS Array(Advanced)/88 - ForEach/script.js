// The forEach() method calls a function once for each element in an array, in order.
// Note: the function is not executed for array elements without values.
// Syntax array.forEach(function(currentValue, index, arr), thisValue)

const numbers = [10, 20, 30];
let total = 0;
numbers.forEach((value, index) => total += value);
