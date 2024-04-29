## Objects

- Objects in `JavaScript` are core data structures that comprise properties and methods. While methods are functions/actions an object can perform (such as driving and cooling rooms with real life objects like cars and fans), properties are characteristics of an object such as its name and value.
- Objects are mutable: They are addressed by reference, not by value.
- All JavaScript values, except primitives, are objects.
  - Booleans can be objects (if defined with the new keyword)
  - Numbers can be objects (if defined with the new keyword)
  - Strings can be objects (if defined with the new keyword)
  - Dates are always objects
  - Maths are always objects
  - Regular expressions are always objects
  - Arrays are always objects
  - Functions are always objects
  - Objects are always objects
- Objects are more complex and each object may contain any combination of these primitive data-types as well as reference data-types.
- Objects are variables too. But objects can contain many values.
- An object is a reference data type. Variables that are assigned a reference value are given a reference or a pointer to that value. That reference or pointer points to the location in memory where the object is stored. The variables don’t actually store the value.
- Loosely speaking, objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, respectively, in the context of an object.

## Inherited Properties
Inherited properties of an object are those properties that have been inherited from the object’s prototype, as opposed to being defined for the object itself, which is known as the object’s Own property. To verify if a property is an object’s Own property, we can use the hasOwnProperty method. Property Attributes Data properties in JavaScript have four attributes.

- `value`: The property’s value.
- `writable`: When true, the property’s value can be changed
- `enumerable`: When true, the property can be iterated over by “for-in” enumeration. Otherwise, the property is said to be non-enumerable.
- `configurable`: If false, attempts to delete the property, change the property to be an access-or property, or change its attributes (other than [[Value]], or changing [[Writable]] to false) will fail.

```js
const object1 = new Object();
object1.property1 = 42;
 
console.log(object1.hasOwnProperty('property1')); // true
```


## Object Methods
- Methods are actions that can be performed on objects.

- Object properties can be both primitive values, other objects, and functions.


### Creating a JavaScript Object
There are different ways to create new objects:

- Create a single object, using an object literal.
  
  ```js
  const person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
  };
  ```

- Create a single object, with the keyword new.
```js
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
```

- Define an object constructor, and then create objects of the constructed type.
- Create an object using Object.create().


### JavaScript Objects are Mutable
```js
  const person = {
    firstName:"John",
    lastName:"Doe",
    age:50, 
  }

// The object x is not a copy of person. It is person. Both x and person are the same object.
  const x = person;
// Any changes to x will also change person, because x and person are the same object.
  x.age = 10;      // Will change both x.age and person.age
```


### Accessing Object Members
- Dot Notation
```js
let school = { 
    name : "Vivekanada", 
    location : "Delhi", 
    20 : 1000, 
    displayinfo : function() { 
        console.log(`${school.name} was established 
        at ${school.location}`); 
    } 

} 
console.log(school.name); 
```
- Bracket Notation
```js
let school = {
    name: "Vivekanada School",
    20: 1000,
    displayinfo: function () {
        document.write(`${school.name} was established 
        at ${school.location}`);
    }
}
 
// Output : Vivekanada School 
console.log(school['name']);
 
// Output: 1000 
console.log(school['20']); 
```


## Iterating over all keys of an object
To iterate over all existing enumerable keys of an object, we may use the for…in construct. It is worth noting that this allows us to access only those properties of an object which are enumerable (Recall that enumerable is one of the four attributes of data properties). For instance, properties inherited from the Object.prototype are not enumerable. But, enumerable properties inherited from somewhere can also be accessed using the for…in construct
```js
  let person = {
      gender: "male"
  }
  
  let person1 = Object.create(person);
  person1.name = "Adam";
  person1.age = 45;
  person1.nationality = "Australian";
  
  for (let key in person1) {
      // Output : name, age, nationality 
      // and gender
      console.log(key);
  }        
  
```

### Deleting Properties
  - To Delete a property of an object we can make use of the delete operator
```js
  let obj1 = { 
	propfirst : "Name"
} 

console.log(obj1.propfirst); 
// Output : Name 
delete obj1.propfirst 

console.log(obj1.propfirst);			 
// Output : undefined 

```


## REFERENCES
- https://www.freecodecamp.org/news/objects-in-javascript/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object