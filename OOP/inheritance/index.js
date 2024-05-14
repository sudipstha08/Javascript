class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getInfo() {
		return `The name of the animal is ${this.name} & age is ${this.age}`;
	}
}

class Dog extends Animal {
	constructor(name, age, breed) {
		super(name, age);
		this.breed = breed;
	}

	bark() {
		return `${this.breed} - Wooffff!!`;
	}
}

class Cat extends Animal {
	constructor(name, age, weight) {
		super(name, age);
		this.weight = weight;
	}

	getWeight() {
		return `The cat weigh ${this.weight} KGs`;
	}
}

const myDog = new Dog("Jack", 10, "Bulldog");
const myCat = new Cat("Daisy", 5, "20");

console.log(myDog.name)
console.log(myDog.getInfo())
console.log(myDog.bark())

console.log(myCat.name)
console.log(myCat.getInfo())
console.log(myCat.getWeight())
