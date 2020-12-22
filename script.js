let mainNav = document.querySelector(".inner-main-header");
let middleNav = document.querySelector(".nav-2")
let sticky = document.querySelector(".sticky");

let header = document.querySelector("header");
let bookings = document.querySelector(".bookings");
let allBooking = document.querySelectorAll("._book")
let stickySearch = document.querySelector(".sticky-form-search");
let wordSearch = document.querySelector(".search-word");
let searchButton = document.querySelector(".search-bar");
const searchBar = document.querySelector(".search-bar-header");
const clear = document.querySelector(".clear");
const inputToggle = document.querySelector(".input-toggle");
const nextPhoto = document.querySelector("#next")
const previousPhoto = document.querySelector("#previous")
const slidePhoto = document.querySelector(".sect-two-img");
const innerImage = document.querySelector('.inner-image img');

let mainNavOffset = mainNav.offsetTop;

function showHideOpacity(show, hide) {
    let element = document.querySelector(show);
    element.classList.add("display");

    let secElement = document.querySelector(hide)
    secElement.classList.remove("display");

}

function removeOpacity() {
    for (let element of arguments) {
        let elementOne = document.querySelector(element);
        elementOne.classList.remove("display");
    }
}


window.addEventListener("scroll", function() {
    if (window.pageYOffset > mainNavOffset) {
        searchBar.classList.add("sticky-search");
        sticky.classList.add("sticky-nav");
        bookings.classList.add("scale-collapse");
        // bookings.classList.add("toggle-display");
        sticky.classList.remove("toggle-display");

    } else {
        searchBar.classList.add("sticky-search");
        sticky.classList.remove("sticky-nav")
        bookings.classList.remove("scale-collapse");
        bookings.classList.remove("toggle-display");
    }
})

stickySearch.addEventListener("click", () => {

    bookings.classList.toggle("scale-collapse");
    sticky.classList.toggle("toggle-display");

})
window.scrollBy
console.log(window.scrollY)
let scrolled = window.screenY;

window.addEventListener('scroll', () => {
    removeTollip();
})

function removeTollip() {
    wordSearch.style.display = "none";
    removeOpacity(".explore-tollip", ".calendar-tollip");
    let innerBookings = document.querySelectorAll(".bk");
    for (let each of innerBookings) {
        each.parentElement.classList.remove("_display-book");
    }

}

window.addEventListener("click", (e) => {
    let bk = e.target.parentElement;
    const check = bk.classList[0] == "bk";
    if (check) {
        wordSearch.style.display = "block";
        if (e.target.parentElement.classList[1] == "bk1") showHideOpacity(".explore-tollip", ".calendar-tollip");
        else if (e.target.parentElement.classList[1] == "bk2") showHideOpacity(".calendar-tollip", ".explore-tollip");
        else if (e.target.parentElement.classList[1] == "bk3") showHideOpacity(".calendar-tollip", ".explore-tollip");

    } else if (!check) {
        removeTollip();
    }

})

clear.addEventListener('click', function() {
    inputToggle.focus = false;
    inputToggle.value = null;
})

let counter = 0;
const image = innerImage.clientWidth;
slidePhoto.style.transform = 0;

nextPhoto.onclick = function() {
    counter++;
    if (counter <= 1) {
        slidePhoto.style.transform = `translateX(${counter *(-image)}px)`;
    }
    console.log(image)
}

previousPhoto.onclick = function() {
    counter--;

    if (counter >= 0) {
        console.log(-image);
        slidePhoto.style.transform = `translateX(${(-image) * counter}px)`;
    }


}
x
//loop through 
bookings.addEventListener('click', function(e) {
    let targetElement = e.target.parentElement;
    target = targetElement.classList[1];
    if (targetElement.classList[0] == "bk")
        targetElement.parentElement.classList.add("_display-book");

    let innerBookings = document.querySelectorAll(".bk");

    innerBookings.forEach(element => {
        if (element.classList[1] !== target) element.parentElement.classList.remove("_display-book");

    })

})