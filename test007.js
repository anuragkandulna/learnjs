// Truthy and Falsy
//Values that is assumed as either true or false

// falsy
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy
// '0', 'false', " ", [], {}, function(){}

// // Empty arrays
// const arr = []
// if (arr.length === 0){
//     console.log("Array is empty")
// }

// // Empty objects
// if (Object.keys(emptyObj).length === 0){
//     console.log("Object is empty")
// }


// NULL Coalition Operator - If first value is null/undefined then second value is assigned
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20
console.log(val1)


// Ternary Operator
// condition ? true : false
const price = 60
price >= 80 ? console.log('More than 80') : console.log('Less than 80')
