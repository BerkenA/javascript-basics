// serInterval it is similar to the setTimeout but it executes the function at a certain interval untill it is cleared

// let count = 0;

// const intervalId = setInterval (function (){
//     console.log(intervalId);
//     count++; // incerment
//     if(count === 5){
//         clearInterval(intervalId);
//     }
// }, 1000);

let heshContainer = document.querySelector(".container");


let count = 1;

const intervalId = setInterval(function() {
    heshContainer.innerHTML += `<li>Hesham the ${count}</li>`;
    count++;
    if(count === 6){
        clearInterval (intervalId);
    }
}, 1000);
