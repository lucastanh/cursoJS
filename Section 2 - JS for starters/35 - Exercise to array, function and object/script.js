function meuEscopo() {
  const form = document.querySelector('form');
  const result = document.querySelector('.result');

  const pessoas = [];
  
  form.addEventListener('submit', recebeEventoForm);

  function recebeEventoForm(evento) {
    evento.preventDefault();
    
    const fname = form.querySelector('.fname');
    const lname = form.querySelector('.lname');
    const weight = form.querySelector('.weight');
    const height = form.querySelector('.height');

    pessoas.push({
      name: fname.value,
      lname: lname.value,
      weight: weight.value,
      height: height.value
    });

    console.log(pessoas);

    for(let i of pessoas) {
      result.innerHTML += `${i.name} ${i.lname} ${i.weight}kg ${i.height}</p>`;
    }
  }
  
}

meuEscopo();

