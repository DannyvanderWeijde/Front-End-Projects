// Variables.

// Loading screen.
var loading = document.getElementsByClassName("loading")[0];
var title_main = loading.children[0].children[0].children[0];
var title_sub = loading.children[0].children[0].children[1];

// Navbar.
var nav = document.getElementsByClassName("nav")[0];

// Custom scroll bar
var scrollTop = document.getElementsByClassName("scrollbar__top")[0];
var scrollBottom = document.getElementsByClassName("scrollbar__bottom")[0];

/**
 *  Function that runs if the user scrolls and runs the functions and actions within it.
 * 
 *  @returns void.
 */
window.onscroll = function()
{
    // Check where the nav is and give the right background.
    navAtTop();

    // Run custom scrollbar.
    customScrollBar();
}

/**
 *  Function that checks if the nav is at the top and change style depending on that.
 * 
 *  @returns void.
 */
function navAtTop() 
{
    // Check if the user is at the top of the page.
    if (window.pageYOffset === 0) {
        // If so make the nav transparent.
        nav.classList.remove("nav--loose");
    } else if (!nav.classList.contains("nav--loose")) {
        // If not give it the nav a background.
        nav.classList.add("nav--loose");
    }
}

/**
 *  Function that removes all classes that would get an user stuck that has js disabled.
 * 
 *  @returns void.
 */
function removeClassesForNoneJsUsesers()
{
    // Set loading element to block so if user have js disabled they're not stuck on the loading screen.
    loading.style.display = "block";

    // Remove the nav animation class again for if people have js disabled.
    nav.classList.remove("nav--animation");

    // Check if header__content_container is defined.
    if (typeof header__content_container !== 'undefined') {
        // If so remove the animation from it for again people who have js disabled.
        header__content_container.classList.remove("header__content-container--animation");
    }
}

/**
 *  Function that runes other functions on startup of the page when the state of the site is completed.
 * 
 *  @returns void
 */
function completed()
{
    // Run function navAtTop.
    navAtTop();

    // Check if function slideshow can be performed if so run it.
    if (typeof transform !== 'undefined') {
        slideshow();
    }
}

/**
 *  Function that runs a loading screen animation.
 * 
 *  @returns void
 */
function loadingAnimation()
{
    // Add transition
    loading.style.transition = "1s ease-in";
    title_main.style.transition = "0.5s ease-in";
    title_sub.style.transition = "0.5s ease-in";

    // Change top of the title_main.
    setTimeout(() => {  
        title_main.style.top = "-100px";
    }, 300);

    // Remove the title_main.
    setTimeout(() => {  
        title_main.style.display = "none";
    }, 900);

    // Change top of the title.
    setTimeout(() => {  
        title_sub.style.top = "-100px";
    }, 500);

    // Remove the title.
    setTimeout(() => {  
        title_sub.style.display = "none";
    }, 900);

    // Change the top of the loading screen.
    setTimeout(() => {  
        loading.style.top = "-100%"; 
    }, 1100);

    // Remove the loading screen.
    setTimeout(() => {  
        loading.style.display = "none";
    }, 2100);

    // Add the nav bar to the page.
    setTimeout(() => {  
        nav.classList.add("nav--animation");
    }, 2200);
}


/**
 *  Function that shows a custom scroll bar.
 * 
 *  @returns void
 */
function customScrollBar()
{
    // Calc the height of the page.
    var heightTop = ((window.pageYOffset + window.innerHeight) / document.body.clientHeight) * 100;
    // Calc the bottom line of the scorll bar.
    var heightBottom = 100 - heightTop;

    // Change heights of bar to match where the user is on the page.
    scrollTop.style.height = heightTop + "%";
    scrollBottom.style.height = heightBottom + "%";
}

/**
 *  Function that runs went the state of the site changes.
 * 
 *  @returns void
 */
document.onreadystatechange = function() 
{
    // remove normal scroll bar.
    document.body.classList.add("remove-scrollbar");

    // Check what the state of the site is.
    var state = document.readyState;

    // Run function to remove classes that would get an user that have js disabled stuck.
    removeClassesForNoneJsUsesers();

    // Check if the state of the site is complete.
    if (state === "complete") {

        // Run all functions and actions that should run by default.
        completed();

        // Run loading screen animation.
        loadingAnimation();

        // Check if function headerTitleAnimation can be performed if so run it.
        if (typeof header__title_main !== 'undefined') {
            headerTitleAnimation();
        }
    }
}