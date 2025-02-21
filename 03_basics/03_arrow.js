const user = {
    username: "Adya",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); //this tell us about the current context
    }

}

// user.welcomeMessage()
// user.username = "Ashish"
// user.welcomeMessage()

// console.log(this);

// this only work on object not in function

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// basic arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

// implecite return arrow function

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4))
const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo())