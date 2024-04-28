let a = "1";
let b = "1.34";
let c = 11;

// Explicit type coercion
console.log(typeof parseInt(a));
console.log(typeof parseFloat(b));
console.log(typeof c.toString());

// Implicit type coercion
let e = 1;
let f = "Hello";

// e is converted imlicitly to string
console.log(e + f); // 1Hello
// f is converted implicity to number
console.log(e - f); // NaN
