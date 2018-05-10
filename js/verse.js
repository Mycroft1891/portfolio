// bible verse selection logic
var verse_paragraph = document.getElementById('verse');
var verse_id = document.location.hash.split("=")[1];

function get_day_of_year() {
  if (typeof verse_id != 'undefined') return verse_id;
  var today = new Date();
  var beginning_of_year = new Date(today.getFullYear(), 0, 0);
  var time_zone_offset = beginning_of_year.getTimezoneOffset() - today.getTimezoneOffset()
  var time_elapsed_in_ms = (today - beginning_of_year) + (time_zone_offset * 60 * 1000);
  var day = 1000 * 60 * 60 * 24;
  var day_of_year = Math.floor(time_elapsed_in_ms / day);
  return day_of_year
}

function get_verse(event) {
  var language = event ? event.target.dataset.key : "english"
  var day = get_day_of_year();
  verse_paragraph.innerText = verses[day][language];
}

window.onload = function() {
  get_verse();
  var language_list = document.querySelectorAll('.language');
  language_list.forEach(lang => lang.addEventListener('click', get_verse));
}
