// Step 1: Select the navigation element with class 'nav'
const nav = document.querySelector('.nav');

// Step 2: Define the 'fixNav' function
function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

// Step 3: Add a scroll event listener to the window
window.addEventListener('scroll', fixNav);
