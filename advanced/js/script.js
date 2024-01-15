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

const numberArray = [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90];
const odds = numberArray.filter((num) => num % 2 === 1);
console.log(odds);

numberArray.sort(function (a , b){
    return a - b
});

console.log(numberArray);
console.log(numberArray[0]);
console.log(numberArray[numberArray.length - 1]);

function countingEvenOdd(arr, arr_size){
    let even_count = 0;
    let odd_count = 0;
    for(let i=0; i < arr_size; i++){
        if(arr[i] & 1 == 1)
        odd_count++;
        else
        even_count++;
    }
    document.write("number of even element = " + even_count + "<br>" + "number of odd elements = " + odd_count);
}

console.log(countingEvenOdd);
