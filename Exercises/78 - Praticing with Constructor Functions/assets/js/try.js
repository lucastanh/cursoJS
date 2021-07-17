function Calculator() {
  let display = document.getElementById('display');


  this.init = function () {
    display.focus();
    btnClick();
    keyPress();
  };


  btnClick = function () {
    addEventListener('click', e => {
      el = e.target;
      if (el.classList.contains('btn-num')) display.value += el.innerText;
      if (el.classList.contains('btn-clear')) display.value = '';
      if (el.classList.contains('btn-del')) display.value = display.value.slice(0, -1);
      if (el.classList.contains('btn-eq')) doCalc();
    })
  };

  keyPress = function () {
    addEventListener('keypress', e => {
      console.log(e)
      id = e.key;
      code = e.keyCode;
      if (code == 13) {
        doCalc();
      }

      if(!Number(id) && id != '(' && id != ')' && id != '/' && id != '*' && id != '+' && id != '-' && id != '0') {
        e.preventDefault();
      }

    })
  }

  doCalc = function () {
    conta = display.value;

    try {
      display.value = eval(conta)
    } catch {
      alert('Invalid calculation.');
    }
  };
}
let calculator = new Calculator();
calculator.init()
