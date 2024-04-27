// Note: There’s a difference between ReferenceError and undefined errors. An undefined error occurs when we have a variable that is either not defined or explicitly defined as type undefined. ReferenceError is thrown when trying to access a previously undeclared variable.
// Global scope
// all undeclared variables are global variables.

function codeHoist() {
	a = 10;
	let b = 50;
}
codeHoist();

console.log("a", a); // 10
console.log("b", b); // ReferenceError : b is not defined

