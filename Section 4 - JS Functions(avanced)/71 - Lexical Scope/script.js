const name = 'Lucas';

function sayName() {
  console.log(name);
}

function useSayName() {
  const name = 'Castanheiro';
  sayName();
}

useSayName();