function sum(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('X and Y must be a number');
  }

  return x + y
}

try {
  console.log(sum(1, 1))
  console.log(sum('1', 1))
} catch(error) {
  console.log(error)
}