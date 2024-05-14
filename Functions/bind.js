// With the bind() method, an object can borrow a method from another object.

const person = {
	firstName: "Mike",
	lastName: "Tyson",
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};

const member = {
	firstName: "Joe",
	lastName: "Frazier",
};

let fullName = person.fullName.bind(member);

console.log(fullName())
