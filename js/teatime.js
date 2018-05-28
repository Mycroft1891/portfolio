var tea = {
  "white": 5,
  "green": 120,
  "black": 240,
  "infusion": 600
}

let timer = undefined;
let tea_time = tea.green;
const time_field = document.getElementById('time-field');
const start_button = document.getElementById('start');
const cancel_button = document.getElementById('cancel');
const tea_buttons = document.querySelectorAll('.teas');

function ms_in_minutes(ms) {
  let seconds = ms%60;
  let minutes = Math.floor(ms/60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return minutes + ":" + seconds
}

function changeTea(event) {
  cancelCountDown();
  const type = this.dataset.key;
  tea_time = tea[type];
  time_field.innerText = ms_in_minutes(tea[type]);
}

function startCountDown() {
  start_button.disabled = true;
  cancel_button.disabled = false;
  let time = tea_time;
  timer = setInterval(function() {
    if (time == 0) return cancelCountDown();
    time_field.innerText = ms_in_minutes(time);
    time--;
  }, 1000);
}

function cancelCountDown() {
  clearInterval(timer);
  start_button.disabled = false;
  cancel_button.disabled = true;
  time_field.innerText =  ms_in_minutes(tea.green);
}

window.onload = function() {
  start_button.addEventListener("click", startCountDown);
  cancel_button.addEventListener("click", cancelCountDown);
  tea_buttons.forEach(button => button.addEventListener("click", changeTea));
  time_field.innerText = ms_in_minutes(tea.green);
}
