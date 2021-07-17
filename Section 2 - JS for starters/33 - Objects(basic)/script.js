// const pessoa1 = { // criando um objeto
//     nome: 'lucas',
//     sobrenome: 'Vinicius',
//     idade: 20
// };
// console.log(pessoa1.idade) // acessando o valor de um objeto
// console.log(pessoa1.nome) // acessando o valor de um objeto

// function criarPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// const pessoa1 = criarPessoa('Lucas', 'Vinicius', 20);
// const pessoa2 = criarPessoa('Maria', 'Aparecida', 59);
// const pessoa3 = criarPessoa('Sebastião', 'Castanheiro', 60);

// console.log(pessoa1)
// console.log(pessoa2)
// console.log(pessoa3)


// 'this' referencia o próprio objeto a qual é chamado
const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'vinicius',
    idade: 20,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};  

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
