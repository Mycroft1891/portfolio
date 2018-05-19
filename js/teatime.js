var tea = {
  "green": 120000,
  "black": 240000,
  "infusion": 600000
}

function ms_in_minutes(ms) {
  let seconds = ms%60000;
  let minutes = Math.floor(ms/60000);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return minutes + ":" + seconds
}

window.onload = function() {
  let time_field = document.getElementById('time-field');
  time_field.innerText = ms_in_minutes(tea.green);
}
