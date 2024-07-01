"use strict";

// alert(3+3) // in node js this will not work. This syntax only works in browser.

// Data Types:
// numbers => 2 ^ 53
// bigint
// string
// boolean
// null => standalone value
// undefined
// symbol => will be used in react

// object
// console.log(typeof undefined);
// console.log(typeof null)
// console.log("Data Types finished ...")


// COnversion
let score = "11a"
// console.log(typeof(score))

let scoreInNum = Number(score)
// console.log(typeof(scoreInNum))
// console.log(scoreInNum)

// "33" => 33
// "33asc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false; "jshd" => true

// Strings
const key = new String('Anurag')
const val = "abckd"
console.log(typeof key)
console.log(typeof val)
console.log(val[1])
