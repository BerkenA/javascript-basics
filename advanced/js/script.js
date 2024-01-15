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