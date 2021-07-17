// let tem escopo de bloco {... bloco}
// var só tem escopo de função

// 

function falaOi() {
  var sobreNome = 'Castanheiro';

  if (true) {
    var let = 'Lucas';
    var sobrenome = 'Alberto'
  }

  console.log(sobrenome);
}

falaOi()

// HOISTING

// console.log(nome)
// var nome = 'Lucas';


