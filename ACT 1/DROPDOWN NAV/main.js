// Function to show/hide the menu when the toggle button is clicked
const showMenu = (toggleId, navId) => {
    // Get the toggle button (hamburger icon) and navigation menu by their IDs
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    // Check if both the toggle and nav elements exist in the DOM
    if (toggle && nav) {
        // Add an event listener to the toggle button for the 'click' event
        toggle.addEventListener('click', () => {
            // When the toggle is clicked, add/remove the 'show-menu' class to/from the nav menu
            nav.classList.toggle('show-menu');

            // Toggle the 'show-icon' class on the toggle button (change icon between burger and close)
            toggle.classList.toggle('show-icon');
        });
    }
};

// Call the showMenu function with the IDs of the toggle button and navigation menu
showMenu('nav-toggle', 'nav-menu');