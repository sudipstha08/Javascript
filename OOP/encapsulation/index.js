class Animal {
	constructor(name, age) {
		let _type = "unknown"; // private variable declared with let
		this.name = name;
		this.age = age;
		this.getType = () => _type; // method to get the private variable
		this.setType = (type) => {
			_type = type;
		}; // method to set the private variable
	}

	getInfo() {
		return `The name of the animal is ${this.name} and the age is ${this.age}`;
	}
}

const myAnimal = new Animal("Lion", 7);
console.log(myAnimal.getInfo());
console.log(myAnimal.getType()); // accessing the private variable
myAnimal.setType("mammal"); // modifying the private variable
console.log(myAnimal.getType()); // accessing the modified private variable
