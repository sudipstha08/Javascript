/**
 * A variable that has not been assigned a value is of type undefined
 * A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. 
 * A function returns undefined if a value was not returned 
 */

let a = undefined

console.log(a) //undefined
console.log(typeof a) // undefined

let b = null
console.log(b) // null
console.log(typeof b) //object

let c
console.log(c) // undefined