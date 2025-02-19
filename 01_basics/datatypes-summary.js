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
console.log(typeof myFunction)