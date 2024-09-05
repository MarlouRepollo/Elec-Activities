const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) { // Check if elements exist
        toggle.addEventListener('click', () => {
            // Toggle show-menu class on nav menu
            nav.classList.toggle('show-menu');

            // Toggle show-icon class on toggle
            toggle.classList.toggle('show-icon');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');
