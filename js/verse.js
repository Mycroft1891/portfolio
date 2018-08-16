if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js', {scope: './'})

var verse_paragraph = document.getElementById('verse');
var book_paragraph = document.getElementById('verse_book');
var verse_id = document.location.hash.split("=")[1];
var base_url = "https://mycroft1891.github.io/portfolio/bible-verse.html";
var verse = "";
var book = "";

function get_day_of_year() {
  if (typeof verse_id != 'undefined') return verse_id;
  var today = new Date();
  var beginning_of_year = new Date(today.getFullYear(), 0, 0);
  var time_zone_offset = beginning_of_year.getTimezoneOffset() - today.getTimezoneOffset();
  var time_elapsed_in_ms = (today - beginning_of_year) + (time_zone_offset * 60 * 1000);
  var day = 1000 * 60 * 60 * 24;
  var day_of_year = Math.floor(time_elapsed_in_ms / day);
  return day_of_year;
}

function get_verse(e) {
  var language = e ? e.target.dataset.key : "spanish";
  var day = get_day_of_year();
  verse = verses[0][day][language]['verse'];
  book = verses[0][day][language]['book'];
  verse_paragraph.innerText = verse;
  book_paragraph.innerText = book;
  setupShareAction();
}

function setupShareAction() {
  var twitterButton = document.getElementById('twitter');
  var twitter_url = "https://twitter.com/intent/tweet?text=";
  var tweet = encodeURI(verse + " " + book + " " + base_url);
  twitterButton.href = twitter_url + tweet;
}

window.onload = function() {
  get_verse();
  setupShareAction();
  var language_list = document.querySelectorAll('.language');
  language_list.forEach(lang => lang.addEventListener('click', get_verse));
}
