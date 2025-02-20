//  Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

let myCreatedDate = new Date(2025, 1, 21)
// console.log(myCreatedDate.toDateString());

let myCreatedDate1 =new Date(2025, 1 ,21 ,3, 20)
// console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 =new Date("2025-02-21")
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate2.getTime());
// console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday:"long",
})