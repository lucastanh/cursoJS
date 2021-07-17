// // Primitivos (imutáveis) = string, number, boolean, undefined, null, (bigint, symbol) - valores copiados
// // Referência (mutáveis) = array, object, function - Passados por referência

// let a = [1, 2, 3];
// let b = [...a]; // '...a' copia os dados ao invés de passa-los por referência tornando a variável 'b' independente de 'a'
// let c = b; // aponta para o mesmo local na memória que o 'a', sendo assim se 'a' for alterado 'c' também é

// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(b, a)

// a.push('Lucas')
// console.log(c)

let a = {
    nome: 'Lucas',
    sobrenome: 'Vinicius'
}

let b = a;

a.nome = 'Luiz'
console.log(a)
console.log(b)

let c = {
    nome: 'Lucas',
    sobrenome: 'Vinicius'
}

let d = {...c}; // spread, copiando os dados de 'c'

d.nome = 'Luiz'
console.log(c)
console.log(d)


