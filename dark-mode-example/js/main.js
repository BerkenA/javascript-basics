

// addEventListener
// onClick

// 1. select the body

const body = document.querySelector("body");
const darkModeBtn = document.querySelector(".mode-btn");
let isDarkMode = false;

console.log(body);
console.log(darkModeBtn);

function init (){
    isDarkMode = window.localStorage.getItem("darkMode");
    console.log("DarkMode ", isDarkMode);
    if(isDarkMode){
        body.style.backgroundColor = "#0A0A0A";
    } else {
        body.style.backgroundColor = "#FFFFFF";
    }
}

console.log(isDarkMode);

function toggleMode (){
    isDarkMode = !isDarkMode; //if its true and you click it goes to false and the other way around
    //will use localstorage to save your choice
    window.localStorage.getItem("darkMode", isDarkMode);

    if (isDarkMode){
        body.style.backgroundColor = "#0A0A0A";
    } else {
        body.style.backgroundColor = "#FFFFFF"
    }
    console.log(isDarkMode);
}

darkModeBtn.addEventListener("click", toggleMode);

