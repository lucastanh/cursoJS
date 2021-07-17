const nome = "Lucas";
const sobrenome = "Vinicius";
const peso = 75;
const altura = 1.8;
const anoDeNascimento = 2000;
let imc;
let idade;

imc = peso / (altura * altura);
idade = 2020 - anoDeNascimento;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoDeNascimento}`)