/* 
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

// if pode ser utilizado sozinho
// else não pode ser usado sozinho, ele precisa ter a precedencia de um if 

const hora = 99;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Horário inválido!')
}

const tenhoGrana = false;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa')
}
