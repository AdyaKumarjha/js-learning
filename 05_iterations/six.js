const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums)

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums);


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {titles: 'Book one', genre: 'fiction', publish: 1981, edition: 2004},
    {titles: 'Book two', genre: 'science', publish: 1981, edition: 2005},
    {titles: 'Book three', genre: 'physics', publish: 1981, edition: 2007},
    {titles: 'Book four', genre: 'fiction', publish: 1981, edition: 2009},
    {titles: 'Book five', genre: 'eng', publish: 1981, edition: 2011},
    {titles: 'Book six', genre: 'eng', publish: 1981, edition: 2013},
    {titles: 'Book seven', genre: 'eng', publish: 1981, edition: 2015},
    {titles: 'Book eight', genre: 'bio', publish: 1981, edition: 2017},
    {titles: 'Book nine', genre: 'css', publish: 1981, edition: 2019},
];

let userBooks = books.filter( (bk) => bk.genre === 'fiction')
//  userBooks = books.filter( (bk) => {
//     if (bk.edition >= 2000 && bk.genre === 'eng') {
//         return userBooks
//     }
// })

userBooks = books.filter( (bk) => { return bk.edition >= 2000 && bk.genre === 'eng'})

console.log(userBooks);
