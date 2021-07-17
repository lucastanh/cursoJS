// Recursive Function 

// function recursive(max) {
//   if (max > 10) return;
//   console.log(max);

//   max++;
//   recursive(max);

// };
// recursive(1)


function fatorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * fatorial(num-1);
  }
}
console.log(fatorial(10));
