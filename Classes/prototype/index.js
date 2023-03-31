// Prior to ES6, JavaScript had no concepts of classes. 
// To mimic a class, you often use the constructor/prototype pattern

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// The getName() function is assigned to the prototype so that 
// it can be shared by all instances of the Person type.
Person.prototype.getName = function () {
    return "My name is " + this.name;
};

Person.prototype.getAge = function () {
    return "My age is " + this.age;
};

// create a new instance of the Person type using the new operator. The john object, 
// hence, is an instance of the Person and Object through prototypal inheritance.
var john = new Person("John Doe", "23");
console.log(john.getName());
console.log(john.getAge())
console.log(john instanceof Person); 
console.log(john instanceof Object); 