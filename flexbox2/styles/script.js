const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

// toggle mobile menu
function toggleMenu() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  } else {
    menu.classList.add('active');
  }
}

toggle.addEventListener('click', toggleMenu, false);
