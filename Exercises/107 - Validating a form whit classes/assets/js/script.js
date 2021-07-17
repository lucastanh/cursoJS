class User {
    constructor() {
        this.form = document.querySelector(".form");
        this.events();
    }

    events() {
        this.form.addEventListener("submit", e => {
            if (this.isValid()) {
                alert("Form sent")
            } else {
                e.preventDefault();
            }
        })
    }


    isValid() {
        $("p.msg-error").remove();
        $("input").removeClass("input-error");
        let errors = 0;
        for(let i of this.form.querySelectorAll("input")) {
            if(i.value.trim() == '') {
                this.createError(i, `Field "${i.className}" is not be empty.`);
                errors += 1;
            } else {
                if(i.id == 'User') {
                    if(i.value.length < 3 || i.value.length > 12) {
                        this.createError(i, "User must contain between 3 and 12 characters");
                        errors += 1;
                    }
                    if(!i.value.match(/^[a-zA-Z0-9]+$/g)) {
                        this.createError(i, "User can only contain letter and/or numbers");
                        errors += 1;
                    }
                }
                if(i.id == 'Cpf') {
                    const cpf = new ValidateCpf(i.value);
                    if(!cpf.validate()) {
                        this.createError(i, "Invalid CPF");
                        errors += 1;
                    }
                }
                if(i.id == 'Password' || i.id == 'Confirm') {
                    if(i.value.length < 3 || i.value.length > 12) {
                        if(i.id == 'Password') {
                            this.createError(i, "Password needs contain between 3 and 12");
                            errors += 1;
                        }
                        if(i.id == 'Confirm') {
                            this.createError(i, "Confirm password needs contain between 3 and 12");
                            errors += 1;
                        }
                    }
                }
            }
        }
        if($("#Password").val() !== $("#Confirm").val()) {
            this.createError("#Password", 'Passwords do not match');
            this.createError("#Confirm", 'Passwords do not match');
            errors += 1;
        }
        return errors > 0 ? false : true;
    }

    createError(field, msg) {
        let pError = $(`<p>${msg}</p>`).addClass("msg-error")
        $(field).after(pError).addClass("input-error");
        return;
    
    }   
}

const u = new User();