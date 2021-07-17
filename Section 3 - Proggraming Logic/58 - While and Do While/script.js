function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return r.toFixed(0);
}

let rand = 0;
// checks the condition and then run the code
while (rand != 8) {
  rand = random(1, 50);
  console.log(rand);
}

console.log('----------------------------------')

// runs the code and then checks the conditon
do {
  rand = random(1, 50);
  console.log(rand)
} while (rand != 8)