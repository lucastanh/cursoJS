function showHours() {
  let date = new Date();

  return date.toLocaleTimeString('pt-BR');
}

const timer = setInterval(function() {
  console.log(showHours());
}, 1000)

setTimeout(function() {
  clearInterval(timer);
}, 5000)