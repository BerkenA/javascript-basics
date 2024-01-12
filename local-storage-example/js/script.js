// local storage // for example if you log into your facebook ur data is allready ready there
// session storage (they both store temporary in your browser)

const myVariable = "some text in my variable";

window.localStorage.setItem("variableOne", myVariable);

window.localStorage.setItem("name", "hesham");

// save objects
// save arrays

let car = {
    make: "bmw",
    model: 1992,
    price: 2000
}

window.localStorage.setItem("myCar", JSON.stringify(car));

window.sessionStorage.setItem("fav","bmw");

// use local storage
// create three items there
// first is a variable string one
//second is an object
//third is an array

let puddingFlavour = "chocolate";
let coffe = {
    origin: "south africa",
    intensity: "medium 7"
}

let shoppingList = ["coffee","jam","milk"];

//store the date in localstorage
// and get the items from the local storage
// use JSON.stingify and JSON.parse

const myShoppingList = shoppingList;

window.localStorage.setItem("shoppingList", myShoppingList);

window.localStorage.setItem("pudding",puddingFlavour);
window.localStorage.setItem("coffee", JSON.stringify(coffe));


const shoppingListSecond = window.localStorage.getItem("shoppingList");
console.log(shoppingListSecond);

const shoppingParsed = JSON.parse(shoppingListSecond);
console.log(shoppingParsed);
