// setTimeout

// It is a built in function
// Is used to execute after a specific period of time



// 1.

setTimeout(function (){
    console.log("Hello Jack");
}, 5000);


setTimeout(logHello, 5000);


function logHello (){
    console.log("Hello Jack");
}

// 1. select the element with class .loader

const loading = document.querySelector(".loader");
console.log(loading);

// 2. use the setTimeout

setTimeout(function (){
    // 3. change the inner HTML of the loading
    loading.innerHTML = "Finished loading my boy ;)))";
}, 5000);