// 1. variables

// Ecmascript 5

// ES 5
var name = "Anniken";

// ES6
let secondName = "Tom";

secondName = "Alex";

const thirdName = "Marius the great";

// 2. console.log -- console.dir -- console.info (for more info, in yellow) -- console.error (to show errors)

// 3. >= <= = < >

"H" == "h"
// true now we are using not stict equality

"H" === "h" //False if called strict equality

"1" == 1 // true 
"1" === 1 // false 

// 4. conditions
// if (){}

// swicth case

// 5. objects

let car = {
    color: "red",
    model: "bmw",
    year: "1992",
    VIN: 3434343
};

console.log(car);

console.log(car.color);
console.log(car.year);
console.log(car["year"]);

// 6. for loops

// starting point // condition // increment
for(let i = 0; i < 11; i++){
    console.log(i);
}

// 7. array

let myBigBox = ["hesham", 22232, false, {name:"layla"}];

console.log(myBigBox.length); // get the number of items in the array

console.log(myBigBox);
console.log(myBigBox[0]);
console.log(myBigBox[3].name);

const lastItemIndex = myBigBox.length -1;
console.log(lastItemIndex);

// 8. Looping over an array

for(let i = 0; i < myBigBox.length; i++){
    console.log(myBigBox[i]);
}

// 9. concatenation

let theName = "Anniken";
let theSecondName = "Hesh";
let theThirdName = "Patrick";

const myParagraph = "Hello " + theName + " and hello " + theSecondName + " hello my friend " + theThirdName;

console.log(myParagraph);

// 10. functions

function logWord(name) {
    if(name !== undefined){
        console.log("Hello " + name + " sir");
    }
    else {
        console.log("Sorry ;(");
    }
    
}

logWord("hesham"); // one time

logWord("Jonas"); // second time

logWord("Chris"); // third time