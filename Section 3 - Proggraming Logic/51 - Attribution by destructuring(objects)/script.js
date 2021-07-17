const pessoa = {
  name: 'Lucas',
  lastname: 'Castanheiro',
  age: 18,
  address: {
    city: 'Maringá',
    state: 'Paraná'
  }
}


// const {name:nome, lastname, age, address, address: {cidade = '"Valor padrão caso a variável não exista"',
//  state:estado}, contador = 1} = pessoa;

// console.log(nome, lastname, age, address, cidade, estado, contador)


const {name, lastname, ...resto} = pessoa;

console.log(name)
