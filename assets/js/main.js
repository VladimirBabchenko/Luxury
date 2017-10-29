var mainNav = document.querySelector(".main-nav__list");
var mainNavButton = document.querySelector(".main-nav__toggle");

// Main navigation
mainNavButton.addEventListener("click", function(event) {
    event.preventDefault();
    mainNav.classList.toggle("main-nav--show");
});

// Search-block

var search  = document.querySelector(".search");
var searchBlock = search.getElementsByClassName("search__block")[0];
search.addEventListener("click", function(event) {
    event.preventDefault();
    searchBlock.classList.toggle("search__block--show");
});

// Bucket-block
var bucket = document.querySelector(".bucket");
var bucketBlock = document.querySelector(".bucket__block");
bucket.addEventListener("click", function(event) {
    event.preventDefault();
    bucketBlock.classList.toggle("bucket__block--show");
});





