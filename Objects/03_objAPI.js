/*

De-structure

*/

const course = {
    courseName : "JavaScript",
    price : 999,
    courseOwner : "Chai aur code"
}

const {courseOwner : owner} = course
console.log(owner);

