## Variables

- In `JavaScript`, var, let, and const are used to declare variables, but they have some differences in their behavior and scope:


### Var
- Before the introduction of let and const, `var` was the primary way to declare variables in JavaScript
- `Function Scope`: Variables declared with var are function-scoped. This means that they are visible throughout the function in which they are defined.
- `Hoisting`: Variables declared with var are hoisted to the top of their function or global scope. This means you can access the variable before it's declared, though its value will be undefined.
- `Reassignable`: Variables declared with var can be reassigned and re-declared within the same scope.
- `No Block Scope`: Unlike let and const, var does not have block scope. Variables declared with var are visible throughout the function, even outside of conditional blocks
  ```js
  function example() {
  if (true) {
    var x = 10;
    console.log(x); // Output: 10
  }
  console.log(x); // Output: 10
    }

  example()
  ```
  In this example, the variable x is declared using var. It has a function scope, so it is accessible both inside and outside the if block. This behaviour is known as hoisting, where the variable declaration is moved to the top of the function. Therefore, even though x is declared inside the if block, it can still be accessed outside of it.

### Let
- let was introduced in ECMAScript 6 (ES6) to address some of the issues with var.
- `Block Scope`: Variables declared with let are block-scoped. They are only visible within the block (enclosed by curly braces) in which they are defined.
- `Hoisting`: Variables declared with let are hoisted to the top of their block scope, but they are not initialized. Accessing them before declaration results in a ReferenceError.
- `Reassignable`: Variables declared with let can be reassigned within the same block scope, but cannot be re-declared in the same scope.
```js
  function example() {
    if (true) {
      let y = 20;
      console.log(y); // Output: 20
    }
    console.log(y); // ReferenceError: y is not defined
  }

  example();
```
In this example, the variable y is declared using let. It has block scope, which means it is only accessible within the block it's declared in (inside the if block). When we try to access y outside of the block, we get a ReferenceError because y is not defined in that scope. This behaviour helps prevent unintended variable leakage and makes the code easier to understand.

### Const
- const is also introduced in ES6 and stands for "constant." 
- `Block Scope`: Variables declared with const are also block-scoped.
- `Constant Value`: Variables declared with const must be assigned a value at the time of declaration, and that value cannot be changed afterward.
- `Reassignment Forbidden`: Variables declared with const cannot be reassigned or re-declared within the same scope.
  ```js
  function example() {
  const z = 30;
  console.log(z); // Output: 30

  z = 40; // TypeError: Assignment to constant variable
}

example();
  ```
  In this example, the variable z is declared using const. It is also block-scoped like let. However, the difference is that const variables cannot be reassigned once they are assigned a value. In the example, when we try to assign a new value to z, we get a TypeError because we are trying to modify a constant variable. This behaviour ensures that the value of z remains constant throughout the code, promoting immutability and preventing accidental changes.