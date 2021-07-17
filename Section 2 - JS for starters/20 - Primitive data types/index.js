// String, number, undefined, null, boolean, symbol
const nome = 'lucas';   // string
const nome2 = "lucas";  // string
const nome3 = `lucas`;  // string
const num = 10; // number
const num2 = 10.50; // number
let nomeAluno;  // undefiened -> não aponta para nenhum lugar na memória
let sobrenomeAluno = null;  // Nulo -> não aponta para nenhum lugar na memória
const boolean = true;    // true ou false (lógico)

console.log(typeof nome);    // typeof mostra o tipo de dado

let a = 2;
const b = a;
console.log(a, b)   // 2, 2

a = 3
console.log(a, b)   // 3, 2