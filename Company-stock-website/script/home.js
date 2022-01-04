// Variables.

// Header.
var header__title_main = document.getElementsByClassName("header__title--main")[0];
var header__title_sub = document.getElementsByClassName("header__title--sub")[0];
var header__moto = document.getElementsByClassName("header__moto")[0];

// Slideshow.
var slideshow__inner = document.getElementsByClassName("slideshow__inner")[0];
var transform = "0";

// Scroll animation.
var elements = Array(
    Array(
        document.getElementsByClassName("container__content")[0],
        "container__content--animation"
    ),
    
    Array(
        document.getElementsByClassName("gallery")[0],
        "gallery__content--animation-left-no-delay",
        document.getElementsByClassName("gallery__content")[0],
    ),
    
    Array(
        document.getElementsByClassName("gallery")[0],
        "gallery__content--animation-right-3-delay",
        document.getElementsByClassName("gallery__content")[1],
    ),
    
    Array(
        document.getElementsByClassName("gallery")[0],
        "gallery__content--animation-left-2-delay",
        document.getElementsByClassName("gallery__content")[2],
    ),
    
    Array(
        document.getElementsByClassName("gallery")[0],
        "gallery__content--animation-right-1-delay",
        document.getElementsByClassName("gallery__content")[3],
    ),

    Array(
        document.getElementsByClassName("slideshow")[0],
        "slideshow--animation",
        "",
        2,
    ),

    Array(
        document.getElementsByClassName("services")[0],
        "services__item--animation-left-no-delay",
        document.getElementsByClassName("services__item")[0],
        2,
    ),

    Array(
        document.getElementsByClassName("services")[0],
        "services__item--animation-2-delay",
        document.getElementsByClassName("services__item")[1],
        2,
    ),

    Array(
        document.getElementsByClassName("services")[0],
        "services__item--animation-right-1-delay",
        document.getElementsByClassName("services__item")[2],
        2,
    ),

    Array(
        document.getElementsByClassName("services")[0],
        "services__title--animation",
        document.getElementsByClassName("services__title")[0],
        2,
    ),

    Array(
        document.getElementsByClassName("services")[0],
        "services__line--animation",
        document.getElementsByClassName("services__line")[0],
        2,
    ),

    Array(
        document.getElementsByClassName("services")[0],
        "services__line--animation",
        document.getElementsByClassName("services__line")[1],
        2,
    ),
) 

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
    }, 2650);
}

/**
 *  Function that adds and removes animation class of elements.
 * 
 *  @param array elements 
 * 
 *  @returns void
 */
function scrollAnimation(elements)
{
    // Loop through all elements.
    for (let $i = 0; $i <= elements.length-1; $i++)  {
        // Save values to determine if the element is in the viewport.
        let top = elements[$i][0].offsetTop;
        let height = elements[$i][0].offsetHeight;
        let bottom = top + height;
        let extraHeight = height / 2;

        // Check if element has a child element.
        if (elements[$i][2] && elements[$i][2] !== "") {
            // If so select it for the animation.
            var modifyElement = elements[$i][2];
        } else {
            // If not select the parent for the animation.
            var modifyElement = elements[$i][0];
        }

        // Check if there is a modifier.
        if (elements[$i][3]) {
            // If so save it.
            let modifier = elements[$i][3];

            // Change heights with the modifier.
            height = height * modifier;
            extraHeight = extraHeight * modifier;
        }

        // check if the element is in the viewport.
        if (window.pageYOffset > (top - extraHeight) && window.pageYOffset < bottom) {
            // Check if the element already has the class or not.
            if (!modifyElement.classList.contains(elements[$i][1])) {
                // If not add the class.
                modifyElement.classList.add(elements[$i][1]);
            }
        } else {
            // Check if the element is not in the viewport.
            if (window.pageYOffset < (top - height) || window.pageYOffset > bottom) {
                // Check if the element has the animation class or not.
                if (modifyElement.classList.contains(elements[$i][1])) {
                    // If so remove it.
                    modifyElement.classList.remove(elements[$i][1]);
                }
            }
        }
    }
}

/**
 *  function that adds class to elements so that the animations look better. 
 *  I add them here so if the user has js disabled the site looks normal.
 * 
 *  @param array elements 
 * 
 *  @returns void
 */
function addPreAnimationClasses(elements)
{
    // Add classes.
    elements[0][0].classList.add("container__content--hidden");
    elements[1][2].classList.add("gallery__content--hidden");
    elements[2][2].classList.add("gallery__content--hidden");
    elements[3][2].classList.add("gallery__content--hidden");
    elements[4][2].classList.add("gallery__content--hidden");
    elements[5][0].classList.add("slideshow--hidden");
    elements[6][2].classList.add("services__item--hidden");
    elements[7][2].classList.add("services__item--hidden");
    elements[8][2].classList.add("services__item--hidden");
    elements[9][2].classList.add("services__title--hidden");
    elements[10][2].classList.add("services__line--hidden");
    elements[11][2].classList.add("services__line--hidden");
}