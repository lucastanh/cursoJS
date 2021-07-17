function rand(min = 1000, max = 3000) {
  const r = Math.random() * (max - min) + min
  return Math.floor(r);
}

function f1(callback) {
  setTimeout(function () {
    console.log('f1')
    if (callback) callback();
  }, rand())
}

function f2(callback) {
  setTimeout(function () {
    console.log('f2')
    if (callback) callback();
  }, rand())
}

function f3(callback) {
  setTimeout(function () {
    console.log('f3')
    if (callback) callback();
  }, rand())
}

f1(f1Callack);

function f1Callack() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Hello world')
}

f1(function () {
  f2(function () {
    f3(function() {
      console.log('Hello world')
    })
  })
});


function myCalculator(v1, v2, callback) {
  let sum = v1 + v2;

  if(callback) callback(sum);

  return sum;
}

function showSum(valor) {
  console.log(valor)
}

myCalculator(5, 5);