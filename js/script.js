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


//Search Bar 
// JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    const sibanItems = document.querySelectorAll('.siban-item');
    const searchInput = document.getElementById('searchInput');
    const searchMessage = document.getElementById('searchMessage');

    // Function to handle search input
    function handleSearch() {
        const query = searchInput.value.toLowerCase();
        let found = false;
        sibanItems.forEach(item => {
            const header = item.querySelector('.siban-header');
            const headerText = header.textContent.toLowerCase();
            if (headerText.includes(query)) {
                item.style.display = 'block';
                found = true;
            } else {
                item.style.display = 'none';
            }
        });
        if (!found) {
            searchMessage.style.display = 'block';
        } else {
            searchMessage.style.display = 'none';
        }
    }

    // Event listener for search input changes
    searchInput.addEventListener('input', handleSearch);

    // Event listener for accordion functionality
    sibanItems.forEach(item => {
        const header = item.querySelector('.siban-header');
        const content = item.querySelector('.siban-content');

        header.addEventListener('click', function () {
            const isActive = item.classList.contains('active');

            // Close all items
            sibanItems.forEach(item => {
                item.classList.remove('active');
                item.querySelector('.siban-header').classList.remove('active');
                item.querySelector('.siban-content').style.display = 'none';
            });

            // If the clicked item is not active, open it
            if (!isActive) {
                item.classList.add('active');
                header.classList.add('active');
                content.style.display = 'block';
            }
        });
    });
});
