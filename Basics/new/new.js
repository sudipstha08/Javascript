function Person(name, age) {
	// Inside the constructor function, `this` refers to the newly created object
	this.name = name; // Bind the `name` property to the new object
	this.age = age; // Bind the `age` property to the new object
}

//The person1 variable holds a reference to the newly created object, which contains the name and age properties.
const person1 = new Person("Alice", 30);
console.log(person1); // Output: Person { name: 'Alice', age: 30 }
