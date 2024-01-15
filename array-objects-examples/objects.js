//If you use var you can redefine a variable again in the code like bellow
// {
//     var name = "hesham";
// }

// var name = "julie";

// const CURRENCY = "NOK";

// console.log(CURRENCY);


// let name = "Kenneth";
// let teacherName = "Hesh";
// let teacherFriendName = "Monde";

// name = "Erica";
// console.log(name);

// name = "Jonas";
// console.log(name);

//Const should be uppercase to tell others developers to not play around in it. It shouldnt be changed. Also readability
const API_URL = "https://api.example.com/data";
const PORT = 8080;
const MAX_CONNECTIONS = 4;

// Arrays
//.length gives you the length of the array. fruits.length shows length for fruits.
                // 0          1          2
const fruits = ["Apple", "Blueberry","oranges"];
console.log(fruits.length); // 3 the total items in the array

//Adds an extra item to the array in the end
fruits.push("Mango");
console.log(fruits);

//Adds an extra item to the beggining of the array
fruits.unshift("Grapes");
console.log(fruits);

// remove the last item in the array 

fruits.pop();

console.log(fruits);

// remove the first item in the array

fruits.shift();
console.log(fruits);

const numbers = [3, 4, 99, 88, 54, 5];

numbers.sort();
console.log(numbers);

//Javascript sees a string as an array. In the example bellow the d = 0; o = 1; g = 2
         //   012
let animal = "dog";
console.log(animal.length);

const cars = ["BMW", "Volkswagen", "Toyota"]

//by using indexOf you can see what the index of your item is in the array
console.log(cars.indexOf("Volkswagen"));

//How to find and item in an array we will use .find

const user = {
    name: "Berken",
    age: 30,
    job: "Student",
    wealth: 213284921418
}
console.log(user);
console.log(user.age);
console.log(user.name);
console.log(user.wealth);


const someText = "Hello my name is " + user.name;

console.log("someText:",someText);

const someTextTwo = `Hello my name is ${user.name} and I am ${user.age} I own ${user.wealth} in dollars and I work as ${user.job}`;
console.log(someTextTwo);

const books = [
    {
        title: "the hobbit",
        author: "J.K Rowling",
        pages: 300
    },
    {
        title: "Drive with me in my car",
        author: "Kevin Hart",
        pages: 1000
    },
    {
        title: "1000 nights and one nights",
        author: "Some guy",
        pages: 3000
    }
]

const searchBook = books.find(function (book){
    return book.title === "the hobbit";
});
console.log(searchBook);

const findPages = books.find(function (book){
    return book.pages < 300;
})

console.log(findPages);

// console.log("My first book:", books[1]);

// function is a set of action or code run when we call this function name

function doorRing (withCamera) {
    console.log("I will open the door " + withCamera);
}

doorRing("Monde photo");


function logWord (theWord){
    console.log(theWord);
}

logWord ("Berken");
logWord ("Hesh");


//Every function will give you something in return
function addTwoNumbers (num1, num2){
    return num1 + num2;
}

const sum = addTwoNumbers(10, 20);
console.log(sum);

// console.log("whatever I want: ")