var mainNav = document.querySelector(".main-nav__list");
var mainNavButton = document.querySelector(".main-nav__toggle");

// Main navigation
mainNavButton.addEventListener("click", function(event) {
    event.preventDefault();
    mainNav.classList.toggle("main-nav--show");
});

// Search-block

var search  = document.querySelector(".search");
var searchBlock = document.getElementsByClassName("search__block")[0];
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

// Tabs-product

// var tabButton = document.querySelectorAll(".tabs__button-item");
// var tabContent = document.querySelectorAll(".tabs__content-item");

// for (var i = 0; i < tabButton.length; i++) {
// 	tabButton[i].addEventListener("click", function(event) {
// 		event.preventDefault;
// 		for (var i = 0; i < tabContent; i++) {
// 			tabContent[i].classList.remove("tabs__content-item--show");
// 		}

// 		tabContent[i].classList.add("tabs__content-item--show");
// 	})
// }

function openDescription (evt, tab) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for ( i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for ( i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace("active", "");
	}

	document.getElementById(tab).style.display = "block";
	evt.currentTarget.className += " active";
}




