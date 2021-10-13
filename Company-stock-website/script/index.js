var loading = document.getElementsByClassName("loading")[0];
var title = loading.children[0].children[0];
var nav = document.getElementsByClassName("nav")[0];
var header__content_container = document.getElementsByClassName("header__content-container")[0];
var slideshow__inner = document.getElementsByClassName("slideshow__inner")[0];
var transform = "0";

if (window.pageYOffset === 0) {
    nav.classList.remove("nav--loose");
} else if (!nav.classList.contains("nav--loose")) {
    nav.classList.add("nav--loose");
}

window.onscroll = function()
{
    if (window.pageYOffset === 0) {
        nav.classList.remove("nav--loose");
    } else if (!nav.classList.contains("nav--loose")) {
        nav.classList.add("nav--loose");
    }
}

document.onreadystatechange = function() 
{
    var state = document.readyState;
    loading.style.display = "block";
    nav.classList.remove("nav--animation");
    header__content_container.classList.remove("header__content-container--animation");

    if (state === "complete") {
        loading.style.transition = "1s ease-in";
        title.style.transition = "0.5s ease-in";
        slideshow();

        setTimeout(() => {  
            title.style.top = "-50%";
        }, 400);

        setTimeout(() => {  
            title.style.display = "none";
        }, 800);

        setTimeout(() => {  
            loading.style.top = "-100%"; 
        }, 1000);

        setTimeout(() => {  
            loading.style.display = "none";
        }, 2000);

        setTimeout(() => {  
            nav.classList.add("nav--animation");
        }, 2100);

        setTimeout(() => {  
            header__content_container.classList.add("header__content-container--animation");
        }, 2500);
    }
}

function slideshow() {
    transform--;
    if (transform > -320) {
        slideshow__inner.style.transform = "translateX(" + transform + "%)";
    } else {
        slideshow__inner.style.transition = "none 0s ease 0s";
        transform = 0;
        slideshow__inner.style.transform = "translateX(" + transform + "%)";
        setTimeout(() => {  
            slideshow__inner.style.transition = "0.5s linear transform";
        }, 100);
    }
    setTimeout(() => {  
        slideshow();
    }, 400);
}