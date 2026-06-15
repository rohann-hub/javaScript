// DATE 
let myDate = new Date
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myNewdate = new Date(2026, 0, 23)
// let myNewdate = new Date(2026, 0, 23, 5, 3)
// console.log(myNewdate.toLocaleDateString());
let myNewdate = new Date("2026-06-15")
// console.log(myNewdate.toLocaleString());

let myTimestramp = Date.now()
// console.log(myTimestramp);
// console.log(myNewdate.getTime());

// convert in seconds
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})