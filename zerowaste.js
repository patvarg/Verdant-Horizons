// This function handles the dropdown menu
function handleDropdownMenu() {
    const dropdownBtn = document.querySelector('.dropbtn');

    dropdownBtn.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.nextElementSibling.classList.toggle('show');
    });

    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach((dropdown) => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });
}

// This function handles the header shrinking and navigation scrolling
function handleHeaderAndNav() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    let scrollPosition = 0;

    window.addEventListener('scroll', function () {
        const windowPosition = window.scrollY;
        if (windowPosition > 100 && windowPosition > scrollPosition) {
            header.classList.add('shrink');
            nav.classList.add('scrolled');
        } else if (windowPosition < scrollPosition - 100) {
            header.classList.remove('shrink');
            nav.classList.remove('scrolled');
        }
        scrollPosition = windowPosition;
    });
}

// This function initializes all the event handlers
function initializeEventHandlers() {
    handleDropdownMenu();
    handleHeaderAndNav();
}

// This function is called when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeEventHandlers);

var greenShades = ['#228B22', '#008000', '#ADFF2F', '#7CFC00', '#32CD32']; // Add more green shades as needed

var colorShades = ['#F0FFF0', '#F5FFFA', '#F0F8FF', '#F5F5DC', '#FFFACD']; // Honeydew, Mint Cream, Alice Blue, Beige, Lemon Chiffon

document.body.addEventListener('click', function () {
    var randomIndex = Math.floor(Math.random() * colorShades.length);
    var selectedColor = colorShades[randomIndex];
    document.body.style.backgroundColor = selectedColor;
});













