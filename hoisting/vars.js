// var code (global)
// With variables declared var, the variable declaration is hoisted but with a
// default value of undefined
console.log(name); // undefined
var name = "Mukul Latiyan";

//let example(global)
// The variables are hoisted to the top of the scope they are declared in
// (local, global, or block), but are not accessible because they have not been initialized.
console.log(name2);
let name2 = "Mukul Latiyan"; // ReferenceError: name is not defined
