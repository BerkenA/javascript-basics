// Q1

user = "hi";
user.name = "Jonas";
user.surname = "the great";
delete user.name;

console.log(user);

// Q2
// Every function har 1 return either true or false
function isEmpty(obj){
    for(let key in obj){
        return false
    }
    return true;
}

const isMyObject = isEmpty(user);
console.log(isMyObject);

// Q3

// Given an array of numbers: [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90].
// 1) Find the maximum and minimum value of the array.
// 2) Write all positive and even numbers into another array.
// Display the results on the screen.

let numberArray = [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90];

let even = [];
for(let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 == 0)
    even.push(numberArray[i])
        if(numberArray[i] > 1){
            even.push(numberArray[i]);
        }
    }

console.log(even);

numberArray.sort(function (a , b){
    return a - b
});

console.log(numberArray);
console.log(numberArray[0]);
console.log(numberArray[numberArray.length - 1]);

