// 1. Select the heading h2

// querySelector (Select a specific element? Not sure)
// querySelectorAll (all the paragraphs, all the images of that class)
// getElementById (put in an ID to select it.)


const heading2 = document.querySelector("h2");
console.dir(heading2);

// 2. select element with class .heading2

const headingByClass = document.querySelector(".heading2");
console.dir(headingByClass);

// 3. select element with and id #list using querySelector

const list = document.querySelector ("#list");
console.log(list);

// 4. select element with id ¤list using getElementById

const list2 = document.getElementById("list");
console.log(list2);

// 5. select singe li

const listItem = document.querySelector ("li");
console.log(listItem);

// 6. select multiple li's

const listItems = document.querySelectorAll ("li");
console.log(typeof listItems);

// 7. select the h1 and change the color to be red

const heading1 = document.querySelector("h1");
console.log("before i do my change");
console.dir(heading1);
heading1.style.color = "red";
heading1.style.border = "5px solid green";
heading1.style.padding = "1rem";

//task change the background of the heading1

heading1.style.backgroundColor = "purple";

// 8. select the div and add a class .container to it

const myDiv = document.querySelector("div");
console.dir(myDiv);

myDiv.classList.add("container");

// change the heading text

heading1.innerText = "Hei Ingrid og Hei Line"
heading2.innerHTML = `<p class = green>Hello Ingrid and Hello Line<p>`

                        //0        1         2         3
const myArrayOfNames = ["hesh", "kjetil", "jonas", "johnny", "Marius"]

// console.log(myArrayOfNames[0]);
// console.log(myArrayOfNames[1]);
// console.log(myArrayOfNames[2]);
// console.log(myArrayOfNames[3]);

for(let i = 0; i < myArrayOfNames.length; i++){
    console.log(myArrayOfNames[i]);
}

// i = 0
// 0 < 4
// i = 0 + 1 = 1

for(let i = 1; i <= 100; i++) {
    console.log(i);
}

// Arithmetic Operators

// = + ++

// Addition
// 10 + 5 = 15
        //<<< 15
let sum = 10 + 5;
console.log(sum);

// Subtraction ( - )
// 10 - 5 = 5
let difference = 10 - 5;
console.log("difference:", difference)

// Multiplication 
// 10 * 5 // 50

let product = 10 * 5;
console.log(product)

// Division
// 10 / 5 = 2

let result = 10 / 5;
console.log("result:",result);

// Modulus how many times a number appears in another. How many 4s are in 10? Answer 2

let remainder = 10 % 4;
console.log(remainder)

// Simple operators

let a = 5; // a is 5

// Addition assignment (+=)

let b = 10;

b += 5; // b is now 15
b = b + 5;

// Subtraction assignment (-=)

let c = 15;

c -= 5; // 10

c = c - 5;

// Comparison operators

// equal to (==) its to compare to things to eachother

let isEqual = (5 == "5");
// result is true (it is equal to eachother)
console.log("isEqual:", isEqual);

// Strict equal (===)

let isStrictEqual = (5 === "5"); // false

console.log(isStrictEqual);

// Not equal (!=)

// 5 != 6 // true. 5 is not equal to 6
let isNotEqual = (5 != "6"); 
console.log(isNotEqual);

// greater than (>)

// 10 > 5 // true

let isGreaterThan = (10 > 5); //true
console.log("isGreaterThan:", isGreaterThan)

// < less than
// >= greater than or equal
// <= 


// AND // OR
// &&  // ||
// in order to get true. Both conditions have to be true
//               true      true  = true
let andResult = (5 > 4 && 10 > 5);
console.log(andResult)

//false      true      true
let orResult = (5 > 10 || 10 > 5);
console.log(orResult)