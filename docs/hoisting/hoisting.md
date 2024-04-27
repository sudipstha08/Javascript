## Hoisting

- hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope during the compilation phase – all before code execution. In turn, this allows us to use functions, variables, and classes before they are declared.
- JavaScript allocates memory for all variables and functions defined in the program before execution.
-  in javascript, undeclared variables do not exist until the code assigning them is executed. Therefore, assigning a value to an undeclared variable implicitly creates it as a global variable when the assignment is executed. This means that all undeclared variables are global variables.

## Features of Hoisting
- Declarations are hoisted, not initializations.
- Allows calling functions before their declarations.
- All variable and function declarations are processed before any code execution.
- Undeclared variables are implicitly created as global variables when assigned a value.

### Temporal Dead Zone (TDZ)
- 


## References
- https://www.freecodecamp.org/news/what-is-hoisting-in-javascript-3/