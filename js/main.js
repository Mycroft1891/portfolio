window.onload = function() {
  attachEvents();
}

const pages     = document.querySelectorAll(".page")
let currentPage = document.querySelector(`.skill-list`);

function attachEvents() {
  pages.forEach(page => {
    page.addEventListener('click', switchPage);
  });
}

function switchPage(e) {
  e.preventDefault();
  let element = this.dataset.key
  if (element == currentPage.className) return;
  let section = document.querySelector(`.${element}`);
  section.classList.toggle('invisible');
  currentPage.classList.toggle('invisible');
  currentPage = section;
}
