var tea = {
  "white": 60000,
  "green": 120000,
  "black": 240000,
  "infusion": 600000
}

let time_field = document.getElementById('time-field');

function ms_in_minutes(ms) {
  let seconds = ms%60000;
  let minutes = Math.floor(ms/60000);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return minutes + ":" + seconds
}

function changeTea(event) {
  let type = this.dataset.key;
  time_field.innerText = ms_in_minutes(tea[type]);
}

window.onload = function() {
  let tea_buttons = document.querySelectorAll('button');
  tea_buttons.forEach(button => button.addEventListener("click", changeTea))
  time_field.innerText = ms_in_minutes(tea.green);
}
