const elements = [
  {tag: 'p', text: 'phrase 1'},
  {tag: 'div', text: 'phrase 2'},
  {tag: 'footer', text: 'phrase 3'},
  {tag: 'section', text: 'phrase 4'},
]

let container = $('#container');
let div = document.createElement('div');

container.appendChild(div);

for (let i = 0; i < elements.length; i++) {
  let {tag, text} = elements[i];
  div.innerHTML += `<${tag}>${text}`;
}


