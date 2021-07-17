function createCalculator() {
  return {
    display: document.getElementById('display'), 



    start() {
      this.btnClick();
      this.pressEnter();
    },

    pressEnter() {
      addEventListener('keyup', e => {
        if(e.keyCode == 13) {
          this.total();
        }
      }) 
    },

    btnClick() {
      // this -> calculator
      addEventListener('click', e => {
        el = e.target

        if (el.classList.contains('btn-num')) {
          this.toDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.display.value = '';
        }

        if (el.classList.contains('btn-del')) {
          this.backSpace();
        }

        if (el.classList.contains('btn-eq')) {
          this.total();
        }
 
      });
    },

    toDisplay(text) {
      this.display.value += text
    },

    backSpace() {
      this.display.value = this.display.value.slice(0, -1)
    },

    total() {
      let conta = this.display.value;

      try {
        conta = eval(conta);
        if(!conta) {
          alert('invalid calculation.');
          return;
        }

        this.display.value = String(conta);
      } catch(e) {
        alert('Invalid calculation.')
        this.display.value = '';
        return;
      }
    }
    
  }
}

let calculator = createCalculator()
calculator.start();







// calculator.start()