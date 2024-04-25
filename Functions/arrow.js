const printName = (name) => "Hi " + name;

console.log(printName("Micheal"));

function sayHello(name, callback) {
	callback("Hello " + name);
}

sayHello("Sudip", (parameter) => {
	console.log(parameter);
});
