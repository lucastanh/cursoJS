let date = new Date();

let weekDayNumber = date.getDay();
let weekDay;
switch (weekDayNumber) {
  case 0:
    weekDay = 'Domingo';
    break;
  case 1:
    weekDay = 'Segunda-Feira';
    break;
  case 2:
    weekDay = 'Terça-Feira';
    break;
  case 3:
    weekDay = 'Quarta-Feira';
    break;
  case 4:
    weekDay = 'Quinta-Feira';
    break;
  case 5:
    weekDay = 'Sexta-Feira';
    break;
  case 6:
    weekDay = 'Sábado';
    break;
}

let monthDay = date.getDate();

let monthNumber = date.getMonth() + 1;
let month;
switch (monthNumber) {
  case 0:
    month = 'Janeiro'
    break;
  case 2:
    month = 'Fevereiro'
    break;
  case 3:
    month = 'Março'
    break;
  case 4:
    month = 'Abril'
    break;
  case 5:
    month = 'Maio'
    break;
  case 6:
    month = 'Junho'
    break;
  case 7:
    month = 'Julho'
    break;
  case 8:
    month = 'Agosto'
    break;
  case 9:
    month = 'Setembro'
    break;
  case 10:
    month = 'Outubro'
    break;
  case 11:
    month = 'Novembro'
    break;
  case 12:
    month = 'Dezembro'
    break;
}

let year = date.getFullYear();

function zeroOnLeft(num) {
  num = num >= 10 ? num : `0${num}`
  return num
}

let hours = zeroOnLeft(date.getHours());
let minutes = zeroOnLeft(date.getMinutes());

document.getElementById('date').innerHTML = `${weekDay}, ${monthDay} de ${month} de ${year}<br>${hours}:${minutes}`