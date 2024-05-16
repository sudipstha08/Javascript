// Symbol is Primitive Type

const sym1 = Symbol("Name");
const sym2 = Symbol("Name");

console.log(sym1);
console.log(sym2);
console.log(sym1 == sym2);

const person = {
	age: 25,
	[sym1]: "George",
};

Object.entries(person).forEach(([key, value]) => {
	console.log(key);
	console.log(value);
});

// symbol can be accessed only through this
console.log(Object.getOwnPropertySymbols(person));

console.log(person[sym1]);

// Global symbol
const name = Symbol.for("name");
