var loading = document.getElementsByClassName("loading")[0];
var icon = loading.children[0].children[0];

document.onreadystatechange = function() 
{
    var state = document.readyState;
    if (state === "complete") {
        loading.style.transition = "1s ease-in";
        icon.style.transition = "0.5s ease-in";
        icon.style.top = "-100%";

        setTimeout(() => {  
            loading.style.top = "-100%"; 
        }, 500);
    }
}