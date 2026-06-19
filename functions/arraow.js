const user = {
    username : "rohan",
    price : 999,


    welcomeMessage: function(){
        console.log(`${this.username}, welcome to this website!`);
        console.log(this);
        
        
    }

    
}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// function bun(){
//     console.log(this);
    
// }

// //
// const sun = () => {
//     let user = "rohan"
//     console.log(this.user);
    
// }

// sun()

// const addNum = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addNum(2,3));

/*
here we use implicet return.
mostly used in react
*/
const addNum = (num1,num2) =>  (num1 + num2)

console.log(addNum(2,9));

