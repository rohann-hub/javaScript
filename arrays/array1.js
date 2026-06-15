
const myArr = new Array(1,2,3,4,5)

// myArr.push(6,7)
// myArr.pop()
// myArr.unshift(2)
// myArr.shift()

// console.log(myArr.includes(8))
// console.log(myArr.indexOf(3));


// let newArr = myArr.join() // convert arr to a string format

// console.log(myArr);
// console.log(typeof newArr);

/*
SLICE and SPLICE
*/

console.log("Original array", myArr);

const myNewArr = myArr.slice(1, 3)

console.log("After slicing : ",myNewArr);
console.log("Original array", myArr);

const myNewArr2 = myArr.splice(1, 3)
console.log("After splicing: ", myNewArr2);
console.log("Original array", myArr);


