function Person(_name, _last) {
    let name = _name;
    this.last = _last;

    this.getName = function() {
        return name;
    }

}

const p1 = new Person('Lucas', 'Vinicius');
console.log(p1.getName())