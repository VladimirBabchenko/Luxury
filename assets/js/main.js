var mainNav = document.querySelector(".main-nav__list");
var mainNavButton = document.querySelector(".main-nav__toggle");

// Main navigation
mainNavButton.addEventListener("click", function(event) {
    event.preventDefault();
    mainNav.classList.toggle("main-nav--show");
});


