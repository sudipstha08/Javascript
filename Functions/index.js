/**
 * Passing function as argument
 */
function printName(name) {
	console.log(name)
}

function getPerson(x) {
	x("Micheal")
}

getPerson(printName)