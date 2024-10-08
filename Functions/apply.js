// With the apply() method, you can write a method that can be used on different objects.
// The call() method takes arguments separately.

// The apply() method takes arguments as an array.
const person = {
	fullName: function (city, country) {
		return this.firstName + " " + this.lastName + "," + city + "," + country;
	},
};

const person1 = {
	firstName: "John",
	lastName: "Doe",
};

const personOne = person.fullName.apply(person1, ["Oslo", "Norway"]);
console.log(personOne);
