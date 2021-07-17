let num1 = Number(prompt('Digite um número'));
let num2 = Number(prompt('Digite outro número'));
const soma = num1 + num2;
const confirmed = confirm('Deseja ver o resultado da soma?');
if (confirmed) {
    alert(`O resultado da soma entre ${num1} e ${num2} é igual a ${soma}`);
}

