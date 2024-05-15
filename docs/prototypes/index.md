## Prototypical inheritance
- Prototypical inheritance is a fundamental feature of JavaScript's object-oriented programming model. It allows objects to inherit properties and methods from other objects, known as prototypes, forming a prototype chain.
  
- In JavaScript, every object has an internal property called Prototype, which points to another object referred to as its prototype. When you attempt to access a property or method on an object, JavaScript first checks if that property or method exists on the object itself. If it doesn't find it, it looks for it on the object's prototype. This process continues recursively up the prototype chain until the property or method is found or until the end of the chain is reached (i.e., the prototype is null).

- Prototypical inheritance allows for code reuse, modularity, and extensibility in JavaScript, enabling developers to create complex object structures and hierarchies with shared behavior