// The extends keyword is used in class declarations or class expressions 
// to create a class as a child of another class.

class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  // call the super class constructor and pass in the name parameter
  constructor(name) {
    super(name)
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.