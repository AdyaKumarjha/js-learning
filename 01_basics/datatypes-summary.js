//  Primitive

// 7 types : String, Number, Boolean, null, undifined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)

const bigNumber = 3334654667n

// Reference (Non Primitive)

// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "adya",
    age: 23,
}

const myFunction = function(){
    console.log("Hello world");
}
// console.log(typeof myFunction)

// *********************************************

// stack (Primitive)in stack we have the copy , Heap(Non-primitive)in heap we have the refference

let myYoutubename = "adyajha"

let anothername = myYoutubename
anothername = "ashish"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "adya@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);