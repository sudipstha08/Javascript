## Scoping
- scope in JavaScript refers to the context or environment in which variables are declared and can be accessed.

It dictates the visibility and lifetime of a variable, determining where in your code a particular variable is valid and accessible.

- The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

### JavaScript has the following kinds of scopes:

- Global scope: The default scope for all code running in script mode.
- Module scope: The scope for code running in module mode.
- Function scope: The scope created with a function.
In addition, variables declared with let or const can belong to an additional scope:

- Block scope: The scope created with a pair of curly braces (a block).
  
A function creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions. For instance, the following is invalid:

```js
function exampleFunction() {
  const x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}

console.log(x); // Causes error
```

However, the following code is valid due to the variable being declared outside the function, making it global:

```js
const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);
```

- Blocks only scope let and const declarations, but not var declarations.

```
{
  var x = 1;
}
console.log(x); // 1
```

```
{
  const x = 1;
}
console.log(x); // ReferenceError: x is not defined
```

### The Concept of Variable Shadowing
Variable shadowing occurs when you declare a variable with the same name inside a local scope, effectively "hiding" the variable with the same name in a higher scope.

This is similar to placing an object with the same name in multiple rooms, and the one in the inner room takes precedence when you try to access it.

Consider this example:
```js
var message = "Global message";

function showMessage() {
  var message = "Local message"; // This "shadows" the global variable
  console.log(message); // Accessing the local variable
}

showMessage();
console.log(message); // Accessing the global variable##
```

### References
- https://www.freecodecamp.org/news/scope-in-javascript-global-vs-local-vs-block-scope/#:~:text=At%20its%20core%2C%20scope%20in,variable%20is%20valid%20and%20accessible.