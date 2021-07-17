function createcalculator() {
  return {
    display: document.getElementById('display'),

    init() {
      this.display.focus();
      this.btnClick();
      this.keyPress();
    },

    btnClick() {
      addEventListener('click', e => {
        el = e.target;

        if (el.classList.contains('btn-num')) {
          this.display.value += el.innerText;
        }

        if (el.classList.contains('btn-del')) {
          this.display.value = display.value.slice(0, -1);
        }

        if (el.classList.contains('btn-clear')) {
          this.display.value = '';
        }

        if (el.classList.contains('btn-eq')) {
          this.doCalc();
        }
      })
    },

    doCalc() {
      if (this.display.value == '') return;
      conta = this.display.value;

      try {
        this.display.value = eval(conta);
      } catch {
        alert('Invalid calculation');
      }
    },

    keyPress() {
      addEventListener('keypress', e => {
        id = e.key;
        if (id == 'Enter') {
          this.doCalc();
        }
        if (id != '(' && id != ')' && id != '/' && id != '*' && id != '-' && id != '+' && id != '.' && !Number(id)) {
          e.preventDefault();
        }
      })
    },

  }
}

let calculator = createcalculator();
calculator.init();

