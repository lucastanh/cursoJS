const timerElement = document.getElementById('timer');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;
document.addEventListener('click', function(e) {
  const el = e.target;
  
  if (el.id == 'start') {
    start.style.display = 'none';
    pause.style.display = 'inline';
    timerElement.style.color = '#000';
    timer = setInterval(function(){
      second++;
      if (second == 60) {
        minute++;
        second = 0;
      }
      if (minute == 60) {
        hour++;
        minute = 0;
      }
      if (hour == 0 && minute == 2 && second == 59) {
        clearInterval(timer) 
      }
      timerElement.innerHTML = `${formatTimer(hour)}:${formatTimer(minute)}:${formatTimer(second)}`
    }, 1000)
  
  }

  if (el.id == 'pause') {
    pause.style.display = 'none';
    start.style.display = 'inline';
    start.innerHTML = 'Continue';
    timerElement.style.color = '#f00';
    clearInterval(timer);  
  }

  if (el.id == 'reset') {
    start.style.display = 'inline';
    start.innerHTML = 'Start';
    pause.style.display = 'none';
    clearInterval(timer);
    timerElement.innerHTML = '00:00:00';
    timerElement.style.color = '#000';
    hour = 0;
    minute = 0;
    second = 0;  
  }
})

function formatTimer(time) {
  return time < 10 ? `0${time}` : time
}