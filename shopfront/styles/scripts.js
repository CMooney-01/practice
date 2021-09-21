const toggle = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.navbar-menu');

function menuToggle() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  } else {
    menu.classList.add('active');
  }
}

toggle.addEventListener('click', menuToggle, false);
