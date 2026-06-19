// function addNumbers (num1 , num2){

//     console.log(num1 + num2)
// }

// addNumbers(2,5)

// function Numbersadd(num1, num2){
//     let result = (num1 + num2)
//     return result
// }

// const result = Numbersadd(2,6)
// console.log("result is ", result);

function numbers(n1 , n2){
    return  n1 + n2
}
const result = numbers(2,5)
// console.log(result);

function loggedIn(userName){
    if(!userName){

        console.log("Please enter a UserName !");
        return
        

    }

    return `${userName} just loggedin to the account!`

}

// console.log(loggedIn())


/*
here we use rest operator (...num)
*/
function calculateCartNumber(val1, val2,...num){

    return num

}
// console.log(calculateCartNumber(200,3000,400,5000));

const user = {
    userName : "Rohan",
    price : 399
}

function handleObjects(anyobject) {
    console.log(`User is ${anyobject.userName} loggedin and the price is ${anyobject.price}`);
    
}

// handleObjects(user)
handleObjects({
    userName:"rupjtt",
    price: 499
})


const myNewArray = [100,300,400,600]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500,700,800]));


