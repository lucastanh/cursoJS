const paragraphs = document.querySelector('.paragraphs');
const ps = paragraphs.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const bgColor = estilosBody.backgroundColor;


for (let p of ps) {
  p.style.backgroundColor = bgColor;
  p.style.color = '#FFF'
}