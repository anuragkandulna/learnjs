// Immediately Invoked Function Expressions (IIFE)
// To execute function immediatly upon writing definition and isolate the function from global variables pollutions

function printName(){
    console.log(`Anurag here`)
}
printName(); // NOTE: apparantly semi-colon is required here for iify isolation and execution

( (name) => {
    console.log(`Anurag here ${name}`)
})('me'); // closing sem-color is a must in iify


(function printName2(){
    console.log(`this is named iify`)
})();
