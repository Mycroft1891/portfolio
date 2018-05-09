// bible verse selection logic

var verse_paragraph = document.getElementById('verse');

function get_day_of_year() {
  var today = new Date();
  var beginning_of_year = new Date(today.getFullYear(), 0, 0);
  var time_zone_offset = beginning_of_year.getTimezoneOffset() - today.getTimezoneOffset()
  var time_elapsed_in_ms = (today - beginning_of_year) + (time_zone_offset * 60 * 1000);
  var day = 1000 * 60 * 60 * 24;
  var day_of_year = Math.floor(time_elapsed_in_ms / day);
  return day_of_year
}

window.onload = function() {
  verse_paragraph.innerText = get_day_of_year();
}
