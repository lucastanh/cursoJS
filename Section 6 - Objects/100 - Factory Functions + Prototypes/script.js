const talk = {
    talk() {
        console.log(`${this.name} is talking...`)
    }
}

const drink = {
    drink() {
        console.log(`${this.name} is drinking...`)
    }
}

const personPrototype = { ...talk, ...drink };
const personPrototype = Object.assign({}, talk, drink);

function createPerson(name, last) {

    return Object.create(personPrototype, {
        name: {value: name},
        last: {value: last},
    });
}



const p1 = createPerson("Lucas", "Vinicius");
console.log(p1)
