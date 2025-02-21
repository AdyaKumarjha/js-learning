// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// const userEmail =  []

// if (userEmail) {
//     console.log("got user email");  
// }else{
//     console.log("don't have user email");
// }

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}
// Object.keys(emptyObj) this is the syntx to change the object to array
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// nullish coalescing operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = null ?? 15
console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

