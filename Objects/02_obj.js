// const tinderUser = new Object() // it is a singleton object


const tinderUser = {} // its a non singleton object

tinderUser.id = "1001",
tinderUser.name = "Rohan kumar",
tinderUser.loggedIn = false



const regularUser = {
    email : "rhn@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Rupjit",
            lastName : "Shil"
        }
    }
}
// console.log(regularUser.fullName.userFullName);

// Object Merge:-

const obj1 = {1 : "A", 2 : "B"}
const obj2 = {3 : "C", 4 : "D"}
const obj4 = {5 : "E", 6 : "F"}

// const obj3 = Object.assign( {},obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2} // Here we use Spread Oparator
// console.log(obj3);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // => it gives output in array format
// console.log(Object.values(tinderUser)); // => it gives output in array format
// console.log(Object.entries(tinderUser)); // => it gives output in array format

console.log(Object.hasOwnProperty('name'));
