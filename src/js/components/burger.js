const brgBtn = document.querySelector('.nav-burger');
const nav = document.querySelector('.nav');
const lang = document.querySelector('.language');

const menuClose = ({ target }) => {
  if(!target.closest(".nav, .nav-burger, .language") || target.closest('.nav__link')) {
    brgBtn.classList.remove('nav-burger_active');
    nav.classList.remove('nav_active');
    lang.classList.remove('language_mobile');
    
    document.body.removeEventListener('click', menuClose);
  }
}

brgBtn.addEventListener('click', () => {
  brgBtn.classList.toggle('nav-burger_active');
  nav.classList.toggle('nav_active');
  lang.classList.toggle('language_mobile');

  document.body.addEventListener('click', menuClose);
});


