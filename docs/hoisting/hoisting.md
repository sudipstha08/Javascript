## Hoisting

- `Hoisting` refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope during the compilation phase – all before code execution. In turn, this allows us to use functions, variables, and classes before they are declared.
- JavaScript allocates memory for all variables and functions defined in the program before execution.
- In javascript, undeclared variables do not exist until the code assigning them is executed. Therefore, assigning a value to an undeclared variable implicitly creates it as a global variable when the assignment is executed. This means that all undeclared variables are global variables.
- Hoisting makes the computer process declarations before any other code.Hoisting gives higher specificity to JavaScript declarations. Thus, it makes the computer read and process statements first before analyzing any other code in a program.

## Features of Hoisting
- Declarations are hoisted, not initializations.
- Allows calling functions before their declarations.
- All variable and function declarations are processed before any code execution.
- Undeclared variables are implicitly created as global variables when assigned a value.

### Temporal Dead Zone (TDZ)
- A `temporal dead zone (TDZ)` is the block where a variable is inaccessible until the moment the computer initializes it with a value.
- A block’s temporal dead zone starts at the beginning of the block’s local scope. It ends when the computer fully initializes your variable with a value.

Scope of a Temporal Dead Zone

```js
{
  // bestPlace’s TDZ starts here (at the beginning of this block’s local scope)
  // bestPlace’s TDZ continues here
  // bestPlace’s TDZ continues here
  // bestPlace’s TDZ continues here
  console.log(bestplace); // returns ReferenceError because bestplace’s TDZ continues here
  // bestPlace’s TDZ continues here
  // bestPlace’s TDZ continues here
  let bestPlace = "Delhi"; // bestPlace’s TDZ ends here
  // bestPlace’s TDZ does not exist here
  // bestPlace’s TDZ does not exist here
  // bestPlace’s TDZ does not exist here
}
```

## References
- https://www.freecodecamp.org/news/what-is-hoisting-in-javascript-3/
- https://codesweetly.com/declaration-initialization-invocation-in-programming/
- https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/