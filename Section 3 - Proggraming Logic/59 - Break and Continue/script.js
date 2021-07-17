const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// "continue" breaks the iteration BUT continue in the loop(skip to the next iteration)
for (let i of numbers) {
  
  if (i == 5 || i == 7) {
    console.log(`I skipped the number ${i} AND continued in the loop`)
    continue;
  }
  
  console.log(i)
}

// "break" breaks the iteration AND get out of the loop(ends the loop)
for (let i of numbers) {
  
  if (i == 5) {
    console.log(`I found the number ${i} AND i get out of the loop`)
    break;
  }
  
}

