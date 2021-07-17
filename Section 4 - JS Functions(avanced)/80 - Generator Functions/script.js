// Generator Function - Lazy Evaluation

function* generator1() {
  // any code
  yield 'Value 1';
  // any code
  yield 'Value 2';
  // any code
  yield 'Value 3';
}
const g1 = generator1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
// for (let value of g1) {
//   console.log(value);
// }


// function* generator2() {
//   let i = 0;

//   while(true) {
//     yield i;
//     i++;
//   }
// }

// const g2 = generator2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);

// function* generator3() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* generator4() {
//   yield* generator3();
//   yield 4;
//   yield 5;
//   yield 6;
// }

// const g4 = generator4();
// for (value of g4) {
//   console.log(value)
// }

// function* generator5() {
//   yield function() {
//     console.log('I come from the Y-1')
//   }
//   yield function() {
//     console.log('I come from the Y-2')
//   }
//   yield function() {
//     console.log('I come from the Y-3')
//   }
// }

// const g5 = generator5();
// const func1 = g5.next().value
// const func2 = g5.next().value
// const func3 = g5.next().value
// func1();
// func2();
// func3();
