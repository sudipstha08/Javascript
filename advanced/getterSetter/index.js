let person = {
  _username: "user",
	firstName: "Mike",
	lastName: "Tyson",
	age: 23,
	get fullName() {
		return `the full name is ${this.firstName} ${this.lastName}`;
	},
	set fullName(value) {
		[this.firstName, this.lastName] = value.split(" ");
	},
};

console.log(person.fullName);

person.fullName = "George Foreman";

console.log(person.fullName);
console.log(person.firstName);
