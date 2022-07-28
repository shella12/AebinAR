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