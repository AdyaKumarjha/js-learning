const accountId = 144553
let accountEmail = "adya@google.com"
var accountPassword = "12345"
accountCity = "banglore"

// accountId = 2 //not allowed
accountEmail ="ac@ac"
accountPassword="211222"
accountCity = "jaipur"
let accountState;

console.log(accountId);

/*
preffer not to use var
bescause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
