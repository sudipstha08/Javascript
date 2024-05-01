// The JavaScript for in statement loops through the properties of an Object:
//for (key in object) {
// code block to be executed
//}

const person = { fname: "John", lname: "Doe", age: 25 };

let txt = "";
for (let x in person) {
	console.log(x);
	txt += person[x] + " ";
}

console.log(txt);
