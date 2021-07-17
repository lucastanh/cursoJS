const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const peso = Number(form.querySelector('.peso').value);
  const altura = Number(form.querySelector('.altura').value);

  const imc = getImc(peso, altura);

  const situacao = nivelImc(imc);

  if (!peso || peso == 0) {
    setResultado('Peso inválido.', false);
    return
  }

  if (!altura || altura == 0) {
    setResultado('Altura inválida.', false);
    return
  }

  setResultado(`Seu IMC é ${imc} (${situacao})`, true);

  console.log(peso, altura);
})

function setResultado(msg, isValid) {
  const resultado = document.querySelector('.resultado');
  const p = document.createElement('p');
  resultado.innerHTML = '';

  if (isValid) {
    p.classList.add('msg-result');
  } else {
    p.classList.add('msg-error');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

function getImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(1)
}

function nivelImc(imc) {
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc >= 18.5 && imc < 25) return 'Peso normal';
  if (imc >= 25 && imc < 30) return 'Sobrepeso';
  if (imc >= 30 && imc < 35) return 'Obesidade grau 1';
  if (imc >= 35 && imc < 40) return 'Obesidade grau 2';
  if (imc >= 40) return 'Obesidade grau 3';
}



