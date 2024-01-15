
const myName = window.localStorage.getItem("name");

console.log("myName: ", myName);

const myCar = window.localStorage.getItem("myCar");
console.log(myCar);

// parse (is to take something from a string and make it into js)

const myCarParsed = JSON.parse(myCar);
console.log(myCarParsed);