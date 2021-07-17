const persons = [
    {id: 3, name: "Maria"},
    {id: 1, name: "Lucas"},
    {id: 5, name: "Laercio"},
]

// const newPersons = {};
// for (let person of persons) {
//     const {id} = person;
//     newPersons[id] = { ...person };
// }
// console.log(newPersons)

const newPersons = new Map(); 
for (let person of persons) {
    const {id} = person;
    newPersons.set(id, { ...person }); 
}

for (let person of newPersons.values()) {
    console.log(person);
}

// console.log(newPersons.get(5))


// newPersons.delete(2)
console.log(newPersons) 