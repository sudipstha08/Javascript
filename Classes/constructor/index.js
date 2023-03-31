class Person {
  // constructor() is where you can initialize the properties of an instance. 
  // JavaScript automatically calls the constructor() method when
  // you instantiate an object of the class.
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

console.log(typeof Person)