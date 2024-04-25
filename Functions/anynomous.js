/**
 *
 * Anynomous function: Function without a name
 */

function sayHello(name, callback) {
	callback("Hello " + name);
}

sayHello("Micheal", function (variable) {
	console.log(variable);
});
