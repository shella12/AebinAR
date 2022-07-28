const nav = document.querySelector('nav');
const navMob = document.querySelector('.mob-nav');
const navLink = document.querySelector('.nav-links');
const navBar = document.querySelector('.navbar');
const main = document.querySelector('.main');

navMob.addEventListener('click', () => {
  nav.classList.toggle('active');
  navMob.classList.toggle('active');
  navLink.classList.toggle('active');
  navBar.classList.toggle('active');
  main.classList.toggle('active');
});

document.querySelectorAll('.nav-links > ul').forEach((n) => n.addEventListener('click', () => {
  nav.classList.remove('active');
  navMob.classList.remove('active');
  navLink.classList.remove('active');
  navBar.classList.remove('active');
  main.classList.remove('active');
}));

window.addEventListener('resize', function () {
  if (this.window.innerWidth >= 768) {
    nav.classList.remove('active');
    navMob.classList.remove('active');
    navLink.classList.remove('active');
    navBar.classList.remove('active');
    main.classList.remove('active');
  }
});