const navMob = document.querySelector('.mob-nav');
const navLink = document.querySelector('.nav-links');
const navBar = document.querySelector('.navbar');
const main = document.querySelector('.main');

navMob.addEventListener('click', () => {
  navMob.classList.toggle('active');
  navLink.classList.toggle('active');
  navBar.classList.toggle('active');
  main.classList.toggle('active');
});

document.querySelectorAll('.nav-links > ul').forEach((n) => n.addEventListener('click', () => {
  navMob.classList.remove('active');
  navLink.classList.remove('active');
  navBar.classList.remove('active');
  main.classList.remove('active');
}));

window.addEventListener('resize', () => {
  if (this.window.innerWidth >= 768) {
    navMob.classList.remove('active');
    navLink.classList.remove('active');
    navBar.classList.remove('active');
    main.classList.remove('active');
  }
});