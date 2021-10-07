var loading = document.getElementsByClassName("loading")[0];
var title = loading.children[0].children[0];
var vid = document.getElementsByClassName("header__video")[0];
var nav = document.getElementsByClassName("nav")[0];

vid.playbackRate = 0.5;
document.onreadystatechange = function() 
{
    var state = document.readyState;
    loading.style.display = "block";
    nav.classList.remove("nav--animation");
    if (state === "complete") {
        loading.style.transition = "1s ease-in";
        title.style.transition = "0.5s ease-in";

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
    }
}