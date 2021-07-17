// Date é uma função construtora por isso precisa do pressuposto 'new'
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
// const data = new Date(2019, 3, 20, 15, 14, 27, 500); // a, m, d, h, M, s, ms 

// const data = new Date('2019-04-20 20:20:59.100'); // a-m-d h-M-s.ms
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // Mês começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minuto', data.getMinutes());
// console.log('Segundo', data.getSeconds());
// console.log('Ms', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado
// console.log(data.toString()); 

// const data = new Date(Date.now());
// console.log(data);

function zeroAEsquerda (num) {
 return num >= 10 ? num : `0${num}`
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const sec = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`
}

const data = new Date();
console.log(data)
const dataBrasil = formataData(data);
console.log(dataBrasil);