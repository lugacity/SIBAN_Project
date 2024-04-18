// JavaScript code for mobile menu functionality
var mobileMenu = document.querySelector('.mobile-menu');
var menu = document.querySelector('.menu');

function toggleMenu() {
  menu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}


// Open and Close Dropdown Button
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.toggle-dropdown');
    dropdownToggles.forEach(function(dropdownToggle) {
        dropdownToggle.addEventListener('click', function(event) {
            event.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('active');
            const icon = this.querySelector('i.fa');
            icon.classList.toggle('fa-angle-up');
            icon.classList.toggle('fa-angle-down');
        });
    });
});