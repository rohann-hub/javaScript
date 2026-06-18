// singleton


// object litrels

const mySym = Symbol("key1")

const jsUser = {
    name: "Rohan",
    "full name" : "Rupjit Shil",
    [mySym]: "rhnKey1",
    age: 21,
    location: "agartala",
    email: "rhn@gmail.com",
    loggedIn : false,
    lastDayLoggedIn: ["MonDay", "SaturDay"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]); // allow this bcoz optimal
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// chnage something in Object

jsUser.email = "rupjit@yahoo.com"

// Object.freeze(jsUser) // => it use when you  frezz the objct no one can chnage it
// jsUser.email = "Rohan@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user!!");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



