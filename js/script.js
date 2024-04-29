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


// Copyright Year changing
document.addEventListener('DOMContentLoaded', function() {
    var year = new Date().getFullYear();
    document.getElementById('copyright').textContent = "@ " + year + " SIBAN. All rights reserved";
});





// SEARCH BAR FOR UPCOMING EVENTS
document.addEventListener('DOMContentLoaded', function () {
    const sibanItems = document.querySelectorAll('.SIBAN_event_info');
    const searchInput = document.getElementById('searchInput');
    const searchMessages = document.getElementById('searchMessages');

    // Function to handle search input
    function handleSearch() {
        const query = searchInput.value.toLowerCase();
        let found = false;
        sibanItems.forEach(item => {
            const header = item.querySelector('.SIBAN_event_content_2');
            const headerText = header.textContent.toLowerCase();
            if (headerText.includes(query)) {
                item.style.display = 'block';
                found = true;
            } else {
                item.style.display = 'none';
            }
        });
        if (!found) {
            searchMessages.style.display = 'block';
        } else {
            searchMessages.style.display = 'none';
        }
    }

    // Event listener for search input changes
    searchInput.addEventListener('input', handleSearch);

    // Event listener for accordion functionality
    sibanItems.forEach(item => {
        const header = item.querySelector('.SIBAN_event_info');
        const content = item.querySelector('.SIBAN_event_content_2');

        header.addEventListener('click', function () {
            const isActive = item.classList.contains('active');

            // Close all items
            sibanItems.forEach(item => {
                item.classList.remove('active');
                item.querySelector('.SIBAN_event_info').classList.remove('active');
                item.querySelector('.SIBAN_event_info').style.display = 'none';
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



// UPCOMING EVENT PAGINATION PREV AND NEXT 
document.addEventListener('DOMContentLoaded', function() {
    const contentBlocks = document.querySelectorAll('.SIBAN_event_info');
    const itemsPerPage = 8;
    const totalPages = Math.ceil(contentBlocks.length / itemsPerPage);
    let currentPage = 1;

    function showPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        contentBlocks.forEach((block, index) => {
            if (index >= startIndex && index < endIndex) {
                block.style.display = 'block';
            } else {
                block.style.display = 'none';
            }
        });
    }

    function updatePagination() {
        const pageNumbersContainer = document.getElementById('pageNumbers');
        pageNumbersContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageNumber = document.createElement('span');
            pageNumber.textContent = i;
            pageNumber.classList.add('pageNumber');
            pageNumber.addEventListener('click', function() {
                currentPage = i;
                showPage(currentPage);
                updatePagination();
            });
            pageNumbersContainer.appendChild(pageNumber);
        }

        // Highlight current page number
        const currentPageNumber = pageNumbersContainer.querySelector(`.pageNumber:nth-child(${currentPage})`);
        if (currentPageNumber) {
            currentPageNumber.classList.add('active');
        }
    }

    // Initial setup
    showPage(currentPage);
    updatePagination();

    // Previous page button
    document.getElementById('prevPage').addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
            updatePagination();
        }
    });

    // Next page button
    document.getElementById('nextPage').addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
            updatePagination();
        }
    });


    
});