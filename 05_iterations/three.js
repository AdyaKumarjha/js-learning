//  for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(greet);
    
}

// Maps :- the Map objects hold the key value pair and remembers the original insertion of the keys.
const map = new Map()
map.set("IN", "India")
map.set("USA", "United states of America")
map.set("FR", "France")

// console.log(map);

for (const key of map) {
    // console.log(key);  
}
 
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

// for (const [key, value] of myObject) {
//     onsole.log(key, ':-', value);
// } //this will not work on object