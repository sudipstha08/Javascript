## class
- Template for an object

## object
- instance of the class
In object-oriented programming, an instance is a concrete realization of a class. When you define a class, you're essentially creating a blueprint. An instance, then, is an object built from that blueprint. It has all the characteristics defined in the class, but with specific values.

## Main principles of OOP
- encapsulation
- abstraction
- inheritance
- polymorphism

### Encapsulation
- Encapsulation is a concept in object-oriented programming that allows us to keep the internal details of an object hidden from the outside world, and only expose a public interface for interacting with the object.
- The object's internal state (properties and methods) is kept private, meaning that it can only be accessed by the object's own methods, not from other objects. Keeping an object's internal state private, and generally making a clear division between its public interface and its private internal state, is called encapsulation.
This will keep code that's outside the class from accidentally manipulating internal methods and properties.

### Abstraction
- Abstraction in JavaScript is the concept of hiding unnecessary details of an object or system and only exposing the essential features that are relevant to the current context. This helps to simplify code and reduce complexity, making it easier to understand and maintain.

### Inheritance
- allows classes to derive from other classes
- Inheritance makes all properties and methods available to a child class. This allows us to reuse common logic and to model real-world relationships. 

### Polymorphism
- Polymorphism means having different and many forms. We can overwrite a method inherited from a parent class.
- describes methods that are able to take on many forms
- two types
  - dynamic
    - occurs during runtime
  - static 
    - occurs during compile time
    - refers to whem multiple methods with the same name but different arguments are defined in the same class 


- https://www.freecodecamp.org/news/object-oriented-programming-javascript
- https://medium.com/@priyam_mondal/exploring-object-oriented-programming-in-javascript-25ebb1cc13c9