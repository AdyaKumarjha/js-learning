// singleton:- if the object is made up with constructor that is singleton
// Object.create

// object Literals

const mysym = Symbol("key1")

const JsUser = {
    name: "Adya",
    [mysym]: "myKey1",
    age: 23,
    location: "Banglore",
    email: "abcd@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(typeof JsUser[mysym])

JsUser.email = "hitesh@gmail"
// Object.freeze(JsUser)
JsUser.email = "adyakr12@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js")
}



JsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
