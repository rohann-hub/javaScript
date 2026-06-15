// const name = "Rohan"
// const repoCount =  48

// console.log(`my name is ${name} and my total repo is ${repoCount}`);



/*
*********** String Methods ************
*/
const newName = new String("RupjitShil")

// console.log(newName.toUpperCase());
// console.log(newName.length);
// console.log(newName.toLowerCase());
// console.log(newName.__proto__);
// console.log(newName[2]);

let newString = newName.substring(0, 4)
// console.log(newString);

let anotherString = newName.slice(2, 8);
// console.log(anotherString);

let StringOne = "   rohan   "
// console.log(StringOne);
// console.log(StringOne.trim());



const url = 'https://rohan%300softy.com'

console.log(url.replace('%300', '-'));
console.log(url.includes("rohan"));
