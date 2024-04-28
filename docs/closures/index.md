## Closures

- It makes it possible for a function to have "private" variables.
A closure is a function having access to the parent scope, even after the parent function has closed.
- They allow inner functions to access variables from their outer scope, even after the outer function has completed execution
- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). When you create a closure, you gain access to an outer function’s scope from an inner function. Closures are automatically created every time a function is defined in JavaScript.

Common Use Cases
Closures are useful in various scenarios:

Maintaining State: Closures help maintain state between events in event-driven JavaScript.
Private Variables: You can create private variables by enclosing them within a closure.
Callbacks and Asynchronous Code: Closures are essential for handling callbacks and asynchronous operations.

References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
- https://www.freecodecamp.org/news/javascript-closures-explained-with-example/


