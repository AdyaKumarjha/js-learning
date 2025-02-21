// Immediately Invoked Function Expressions(IIFE)
// we use the IIFE to aovide the problems occurs form the global scope

(function chai(){
    // this is named IIFE
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`DB TWO ${name}`)
})("Adya");