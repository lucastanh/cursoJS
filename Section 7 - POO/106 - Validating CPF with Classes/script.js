class ValidateCpf {
    constructor(cpf) {
        this.cpf = cpf.replace(/\D+/g, '');
    }

    validate() {
        if(this.cpf === '') return false;
        if(this.cpf.length != 11) return false;
        if(this.cpf == this.cpf[1].repeat(11)) return false;
        return this.validation();
    }

    validation() {
        let cpfList = Array.from(this.cpf).slice(0, 9);

        for(let i = 0; i < 2; i++) {
            let digits = cpfList.reduce((total, value, index) => {
                index = i == 0 ? index += 1 : index;
                return total += value * index;
            }, 0);
            digits = digits % 11;
            digits = digits < 10 ? digits : '0';

            cpfList.push(digits);
        }
        return cpfList.join('') == this.cpf ? true : false; 
    }
}

const cpf = new ValidateCpf("118.974.219-58");
console.log(cpf)
console.log(cpf.validate());