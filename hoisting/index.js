let a; // Declaration
a = 100; // Assignment
console.log(a); // Usage

// JavaScript Declarations are Hoisted
x = 5; // Assign 5 to x
console.log("X=====>", x);
// Declare X
var x;

// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
carName = "Volvo";
console.log("carName", carName);
let carName;

// Using a const variable before it is declared, is a syntax error,
//so the code will simply not run.
bikeName = "Ducati";
const bikeName;

console.log("bikeName", bikeName);

// JavaScript Initializations are Not Hoisted
var x = 5; // Initialize x
var y = 7; // Initialize y
console.log("sum===>", x + "" + y);
