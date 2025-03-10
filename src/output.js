const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    loop: true,
    autoplay: {
        delay: 5000,
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 4,
        },
    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    },


});

//Email Validation
const emailField = document.querySelector("#email-field");
const emailError = document.querySelector("#email-error");
const go = document.querySelector("#Go");
console.log(emailField, emailError, go);
function validateEmail() {
    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "please enter a valid Email";
        document.getElementById("email-error").style.color = "red"
        return false;
    }
    emailError.innerHTML = "";
    document.getElementById("Go").style.color = "#fff"
    document.getElementById("Go").style.fontWeight = "bolder"
    return true;
};


//gettting the current year//
let currentYear = document.querySelector("#new");
let thisYear = new Date();
let year = thisYear.getFullYear();
currentYear.innerHTML = year;


function changeBg(params) {
    const nav = document.querySelector("#nav");
    window.addEventListener("scroll", function () {
        const scrollValue = window.scrollY;
        if (scrollValue >= 30) {
            nav.classList.add("bg-brightred-50")
            nav.classList.remove("bg-VeryPaleRed-50")
        } else {
            nav.classList.remove = ("bg-brightred-50")
            nav.classList.add("bg-veryPaleRed-50")
        }
    });
}
changeBg();


const options = document.querySelector("#options");
const links = document.querySelector("#links");
const cancel = document.querySelector("#cancel");
const body = document.querySelector("#body");
console.log(options, links, cancel)

options.addEventListener("click", function () {
    links.style.display = "inherit";
    cancel.style.display = "flex";
    options.style.display = "none"
    body.style.overflow = "hidden";
    links.style.backgroundColor = "#FAD4D4";

});

cancel.addEventListener("click", function () {
    links.style.display = "none";
    options.style.display = "initial";
    cancel.style.display = "none";
    body.style.overflow = "auto"
})