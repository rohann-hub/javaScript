// let id = Symbol('123')
// let validId = Symbol('123')

// console.log(id === validId);

let userOne = {
    name: "Rupjit",
    email: "user@gmail",
    upi: "rhn@sbi"
}

let userTwo = userOne

userTwo.email = "ruup@gmail.com"
console.log(userTwo);
console.log(userOne);


