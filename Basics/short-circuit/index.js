// Short-circuiting or short circuit evaluation is a behavior exhibited by logical operators (&&, ||)
// where the evaluation of the second operand is skipped if the outcome can be
// determined by evaluating the first operand alone.

printTrue() || printFalse(); //true

function printTrue() {
	console.log("true");
	return true;
}

function printFalse() {
	console.log("False");
	return false;
}

console.log(printTrue() && printFalse());
console.log(printFalse() || printTrue());


function printName(name) {
  return name || "default"
}

printName("hello")