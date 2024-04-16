## New
- The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
  
```js
    function Car(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

  const car1 = new Car('Eagle', 'Talon TSi', 1993);

  console.log(car1.make);
```

when you use the new operator with a constructor function in JavaScript, it performs several steps to create a new object and bind properties to that object:

- Creation of a new empty object: The new operator creates a new empty object. This object will become the instance of the constructor function.

- Setting the prototype of the new object: The [[Prototype]] of the newly created object is set to the prototype of the constructor function. This allows the new object to inherit properties and methods from the constructor function's prototype.

- Executing the constructor function with this bound to the new object: When the constructor function is invoked with new, the this keyword inside the constructor function refers to the newly created object. This allows you to assign properties and perform other operations on the new object within the constructor function.

- Return of the new object: If the constructor function does not explicitly return an object, the new operator implicitly returns the newly created object. This ensures that the variable assigned with new ConstructorFunction() holds a reference to the newly created object.

[References]
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
- https://www.geeksforgeeks.org/javascript-new-keyword/
- https://javascript.info/constructor-new