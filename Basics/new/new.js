function createPerson(name, age) {
	return { name, age };
}

const person = createPerson("Micheal", 34);
console.log("person=====>", person);

function Person(name, age) {
	// this = {} //implicitly
	// Inside the constructor function, `this` refers to the newly created object
	this.name = name; // Bind the `name` property to the new object
	this.age = age; // Bind the `age` property to the new object
	// return this //implicitly
}

// The person1 variable holds a reference to the newly created object,
// which contains the name and age properties.
const person1 = new Person("Alice", 30); // implicit return when Person is invoked with new operator
console.log(person1); // Output: Person { name: 'Alice', age: 30 }

//  the Person function is not returning anything explicitly. 
// In JavaScript, if a function doesn't have a return statement, 
// it implicitly returns undefined.
const person2 = Person("Jack", 34);
console.log(person2); // undefined

class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

const user = new User("Samantha", 34);

console.log("user====>", user);
