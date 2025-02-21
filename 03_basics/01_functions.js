// function

function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("Y");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 4)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)

// console.log("Result:", result)

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter your name");
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username = "Aj"){
    if(!username){
        console.log("please enter your name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Adya Jha"));
// console.log(loginUserMessage())

// ... spread operator or rest operator

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 400))

const user = {
    username: "Adya",
    price: 199
}

function handleObject(anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "adya",
    price: 399
})

const myNewArray = [100, 200, 400]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500]))