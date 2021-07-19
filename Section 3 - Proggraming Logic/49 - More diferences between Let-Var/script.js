/* 
https://www.w3schools.com/js/js_scope.asp
Variables declared within a JavaScript function, become LOCAL to the function.
JavaScript has function scope: Each function creates a new scope.
 */


function falaOi() {
  var sobreNome = 'Castanheiro';

  if (true) {
    let nome = 'Lucas';
    var sobrenome = 'Alberto'
  }

  console.log(sobrenome);
}

falaOi()

// HOISTING

// console.log(nome)
// var nome = 'Lucas';


