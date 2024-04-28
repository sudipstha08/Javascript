const a = "fsdfds"
const b = 1

console.log(parseInt(a)) //NaN

// NaN never equals to anything
console.log(parseInt(a) == NaN) //false

console.log(isNaN(parseInt(a)))
console.log(isNaN(b))