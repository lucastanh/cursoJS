//               01234567   
let umaString = 'Um texto';

console.log(umaString.charAt(3)); //retorna o valor do índice passado no parâmetro

console.log(umaString.concat(' ', 'concatenar')); // concatena uma string, mesma função do +

console.log(umaString.indexOf('texto')); //retorna em qual índice começa a palavra no parâmetro

console.log(umaString.lastIndexOf('texto')); // mesma função do indexOf mas de trás para frente

console.log(umaString.match(/[a-zA-Z0-9]/)); // retorna padrões/combinações de caracteres dentro da string
console.log(umaString.match(/[a-z]/g)); // a flag 'g' faz retornar uma lista

console.log(umaString.search(/[a-z]/g)); // retorna o index dos padrões/caracteres dentro da string

console.log(umaString.replace('Um', 'Outro')); // substitui uma palavra ou caracter por outro
console.log(umaString.replace(/t/g, 'r')); // a flag 'g' faz substituir todas as palavras ou caracteres por outro

console.log(umaString.length); // retorna o tamanho da string

console.log(umaString.slice(3, 6)); // .slice(inicio, fim) fatia e retorna a string conforme os parâmetros
console.log(umaString.slice(3)); // .slice(inicio) fatia e retorna a string do parâmetro pra frente
console.log(umaString.slice(-3)); // .slice(inicio) numeros negativos no parametro começam de trás pra frente

console.log(umaString.split('')); // divide as palavra da string pelo parametro e as colocam dentro de uma lista

console.log(umaString.toUpperCase()); // retorna a string em letras maiúsculas
console.log(umaString.toLowerCase()); // retorna a string em letras minúscula
