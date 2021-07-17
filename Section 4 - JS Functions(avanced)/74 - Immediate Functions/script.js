//  IIFE -> Immedeately invokec function expression
(function(age) {

  const lastName = 'Castanheiro';
  function createName(name) {
    return name + ' ' + lastName;
  }

  function sayName() {
    console.log(createName('Lucas'));
  };

  sayName();
  console.log(age)
})(20);
