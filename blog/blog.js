// JavaScript code for mobile menu functionality
var mobileMenu = document.querySelector('.mobile-menu');
var menu = document.querySelector('.menu');

function toggleMenu() {
  menu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}
