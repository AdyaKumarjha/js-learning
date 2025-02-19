const name = "Adya"
const repoCount = 10

// console.log(name + repoCount + " value");

console.log(`Hello My Name is ${name} and my repocount is ${repoCount}`);//string interpolation

const gameName = new String('Adyajha-ha-ky-kr-rhe-ho')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('h'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-10,5)
console.log(anotherString);

const newStringOne = "    Adya    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20choudhry"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'))