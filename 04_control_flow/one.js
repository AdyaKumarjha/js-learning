//  If

// const Temp = 41

// if(Temp===40){
//     console.log("temprature is qual to 40");
// }else{
//     console.log("temprature is greater than 40")
// }

// <, >,<=, >=, ==, !=, ===, !==

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power is ${power}`);
// }
// console.log(`User power is ${power}`);


// implecite scope in if note:- we have to give the semicolon in the last
const balance = 1000

// if(balance > 500) console.log("balance is greater than 500"), console.log("abcd"); 

if(balance < 500) {
    console.log("less than 500");
}else if(balance < 750){
    console.log("balance is less than 750");
}else if(balance < 900){
    console.log("balance is less than 900");
}else{
    console.log("balance is greatr than 900");
}

const userLoggedIn =  true
const userDebitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && userDebitCard){
    console.log("Allow to Buy"); 
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}