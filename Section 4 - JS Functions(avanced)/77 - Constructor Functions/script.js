// Constructor Functions - Return a object  - Is instantiated with the 'new' keyword.
// Methods or attrs that have been declared with 'this.' are public.
// Private methods or attrs are been declareds normally, without 'this.'

function Person(_name, _last, _id) {
  // Privates
  let id = _id;
  const interMethod = function() {
  } 

  // Publics
  this.name = _name;
  this.last = _last;
}


let p1 = new Person('Lucas', 'Castanheiro', 01);
console.log(p1.name)