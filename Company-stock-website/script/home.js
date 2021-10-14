// Variables.

// Header.
var header__title_main = document.getElementsByClassName("header__title--main")[0];
var header__title_sub = document.getElementsByClassName("header__title--sub")[0];
var header__moto = document.getElementsByClassName("header__moto")[0];

// Slideshow.
var slideshow__inner = document.getElementsByClassName("slideshow__inner")[0];
var transform = "0";

/**
 * Function that makes the animation for the slideshow.
 * 
 * @returns void
 */
function slideshow() {
    // Lower transform value.
    transform--;
    // Check if the value is higher or the same as the max.
    if (transform >= -308) {
        // If not add to the value.
        slideshow__inner.style.transform = "translateX(" + transform + "%)";
    } else {
        // If so set it to the beginning.
        slideshow__inner.style.transition = "none 0s ease 0s";
        transform = 0;
        slideshow__inner.style.transform = "translateX(" + transform + "%)";
        setTimeout(() => {  
            slideshow__inner.style.transition = "0.5s linear transform";
        }, 100);
    }
    // Repeat the animation.
    setTimeout(() => {  
        slideshow();
    }, 400);
}

/**
 *  Function that give the header title an animation.
 * 
 *  @returns void
 */
function headerTitleAnimation()
{
    // Remove the class to show the animation.
    header__title_main.classList.remove("header__title--animation");
    header__title_sub.classList.remove("header__title--animation");
    header__moto.classList.remove("header__moto--animation");

    // Add the animation class.
    setTimeout(() => {  
        header__title_main.classList.add("header__title--animation");
    }, 2600);

    // Add the animation class.
    setTimeout(() => {  
        header__title_sub.classList.add("header__title--animation");
    }, 2900);

    // Add the animation class.
    setTimeout(() => {  
        header__moto.classList.add("header__moto--animation");
    }, 2950);
}