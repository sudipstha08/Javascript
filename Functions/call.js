// With the call() method, you can write a method that can be used on different objects.
// The call() method can accept arguments:

const person = {
	fullName: function (city, country) {
		return this.firstName + " " + this.lastName + " " + city + " " + country;
	},
};
const person1 = {
	firstName: "John",
	lastName: "Doe",
};
const person2 = {
	firstName: "Mary",
	lastName: "Doe",
};

const newPerson = person.fullName.call(person1, "Ktm", "Nepal");
const newPerson2 = person.fullName.call(person2);
console.log(newPerson);
console.log(newPerson2);
