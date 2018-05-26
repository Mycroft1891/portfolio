var tea = {
  "white": 5,
  "green": 120,
  "black": 240,
  "infusion": 600
}

let timer = undefined;
var tea_time = tea.green;
let time_field = document.getElementById('time-field');
let start_button = document.getElementById('start');
let cancel_button = document.getElementById('cancel');
let tea_buttons = document.querySelectorAll('button');

function ms_in_minutes(ms) {
  let seconds = ms%60;
  let minutes = Math.floor(ms/60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return minutes + ":" + seconds
}

function changeTea(event) {
  let type = this.dataset.key;
  tea_time = tea[type];
  time_field.innerText = ms_in_minutes(tea[type]);
}

function startCountDown() {
  start_button.disabled = true;
  cancel_button.disabled = false;
  let time = tea_time;
  timer = setInterval(function() {
    console.log(time);
    if (time == 0) clearInterval(timer);
    time_field.innerText = ms_in_minutes(time);
    time--;
  }, 1000);
}

function cancelCountDown() {
  console.log(tea.green);
  clearInterval(timer);
  start_button.disabled = false;
  cancel_button.disabled = true;
  time_field.innerText = ms_in_minutes(tea.green);
}

window.onload = function() {
  start_button.addEventListener("click", startCountDown);
  cancel_button.addEventListener("click", cancelCountDown);
  tea_buttons.forEach(button => button.addEventListener("click", changeTea));
  time_field.innerText = ms_in_minutes(tea.green);
}
