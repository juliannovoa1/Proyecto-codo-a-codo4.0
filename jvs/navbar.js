var navbar = document.getElementById("myTopnav");

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNavbar() {
    if (navbar) {
        if (navbar.classList.contains("topnav")) {
            navbar.classList.add('responsive');
        } else {
            navbar.classList.remove('responsive');
        }
    }
}