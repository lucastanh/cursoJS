// Declaração padrão de uma função
function saudacao(name) { // name é o parâmetro que a função vai receber
    console.log(`Bom dia ${name}!`);
}
saudacao('Lucas');

// Declarando uma função com um valor padrão no parâmetro
function soma(x = 1, y = 1) { // definindo um valor padrão para os parâmetros
    console.log(x + y);
}
soma()

// Declaração de uma função anônima
const raiz = function(numero) {
    return numero ** 0.5
};                              // funções anônimas precisam do ponto e vírgula
console.log(raiz(25))

// Declaração de uma arrow function
const raizQ = n => n ** 0.5; // são usadas para simplificar a sintaxe de funções simples de uma linha
console.log(raizQ(25))


