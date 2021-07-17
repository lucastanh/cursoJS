function ValidateCPF(cpf) {
    Object.defineProperty(this, 'cleanedCPF', {
        enumerable: true, 
        get: function () {
            return cpf.replace(/\D+/g, '');
        }
    });
}

ValidateCPF.prototype.validate = function () {
    if (typeof this.cleanedCPF === 'undefined') return false;
    if (this.cleanedCPF.length !== 11) return false;

    let sequence = this.cleanedCPF[0].repeat(11);
    if (sequence === this.cleanedCPF) return false;

    return this.createDigits();
}

ValidateCPF.prototype.createDigits = function () {
    let cpfList = Array.from(this.cleanedCPF).slice(0, 9);

    for (let i = 0; i < 2; i++) {
        let total = cpfList.reduce((total, value, index) => {
            index = i === 0 ? index + 1 : index;
            return total += value * index;
        }, 0)
        total %= 11;
        let digit = total < 10 ? String(total) : '0';
        cpfList.push(digit);
    }
    cpfList = cpfList.join('');
    
    return cpfList === this.cleanedCPF;
}

const cpf = new ValidateCPF('49090879900');

if (cpf.validate()) {
    console.log('Cpf is Valid');
} else {
    console.log('Cpf is NOT Valid');
}


// function validatingCPF(cpf) {
//     let cleanedCPF = cpf.replace(/\D+/g, '');

//     let sequence = cleanedCPF[0].repeat(11);
//     if(sequence === cleanedCPF) return 'CPF is NOT VALID';

//     let cpfList = Array.from(cleanedCPF).slice(0, 9);

//     for(let i = 0; i < 2; i++) {
//         let total = cpfList.reduce((total, value, index) => {
//             index = i === 0 ? index + 1 : index;
//             return total += value * index
//         }, 0);
//         console.log(total)

//         total = total % 11;
//         let digit = total < 10 ? String(total) : '0';

//         cpfList.push(digit);
//     }
//     cleanedCPF = Array.from(cleanedCPF);
//     return JSON.stringify(cleanedCPF) === JSON.stringify(cpfList) ? 'CPF is VALID' : 'CPF is NOT VALID';
// }

// console.log(validatingCPF('11897421958'));




