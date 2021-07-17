async function execute() {
    let result = await axios('pessoas.json');
    console.log(result)
    
    for(let person of result.data){
        $(".result").append(`<tr><td>${person.nome}</td><td>${person.idade}</td><td>${person.salario}</td></tr>`);
    }
}

execute();