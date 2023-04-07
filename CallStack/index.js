 /**
	*
console.trace();

A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.
https://www.geeksforgeeks.org/what-is-the-call-stack-in-javascript/

	*/
 
 function doStuff(a, b, name) {
	print(sum(a, b))
	print(sayHi(name))
 }

 function print(variable) {
	console.log(variable)
 }

 function sum(a, b) {
	return a + b
 }

 function sayHi(name) {
	// debugger
	return "Hi" + name
 }


 doStuff(1, 2, "Kyel")