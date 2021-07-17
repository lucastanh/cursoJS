/* 
Aritméticos
    + Adição / Concatenação
    - Subtração
    / Divisão
    * Multiplicação
    ** Potenciação
    % Resto da divisão
    ++ Incremento
    -- Decremento
Ordem de precedência
    ()
    **
    *, /
    +, -
*/
let contador = 0;
// contador++; // ++ incrementa 1 a variavel contador
console.log(++contador); // contador = 1
console.log(contador++); // contador = 1


let passo = 2;
let contador = 0;
contador += passo; // += equivale a contador = contador + passo
console.log(contador) // contador = 2
contador += passo;
console.log(contador) // contador = 4
contador += passo;
console.log(contador) // contador = 6

let num1 = 10;
let num2 = parseInt('5'); // parseInt() converte str para um numero inteiro
console.log(num1 + num2);

let num1 = 10;
let num2 = parseFloat('5.2'); // parseFloat() converte str para um numero com casas decimais
console.log(num1 + num2);

