## Pure Function

- A pure function in JavaScript (or any other programming language) is a function that adheres to the following two principles:

- `Deterministic`: Given the same input, a pure function will always return the same output. This means that the function's output is solely dependent on its input parameters.
- `No Side Effects`: A pure function does not cause any observable side effects. This means it does not alter any external state, such as modifying global variables, changing the input parameters, or performing any I/O operations like logging to the console, making HTTP requests, or modifying the DOM. Few example of side effects
  - Mutating your input
  - console.log
  - HTTP calls (AJAX/fetch)
  - Changing the filesystem (fs)
  - Querying the DOM
  
### Characteristics of Pure Functions
- `No dependency on external state`: Pure functions rely only on their input parameters and do not use or modify external variables or states.
- `Immutability`: Pure functions do not alter the input parameters; instead, they work with copies or return new values.
- `Predictability`: Because pure functions always produce the same output for the same input, they are easier to test and debug.

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (Always the same output for the same input)

```

```js
function getDoubledNumbers(numbers) {
  return numbers.map(n => n * 2);
}

const nums = [1, 2, 3];
console.log(getDoubledNumbers(nums)); // [2, 4, 6]
console.log(nums); // [1, 2, 3] (Original array remains unchanged)

```

### Benefits of Pure Functions
- `Predictability`: Easier to reason about and understand.
- `Testability`: Simpler to test because they do not depend on external state or cause side effects.
- `Concurrency`: Safe to use in concurrent or parallel environments because they do not modify shared state.
- `Reusability`: More reusable since they are self-contained and independent of external context.
- Pure functions are a fundamental concept in functional programming and contribute to writing cleaner, more maintainable, and more predictable code. By ensuring that functions are pure wherever possible, developers can take advantage of these benefits and create more robust applications.



## Impure Functions
```js
let counter = 0;

function incrementCounter() {
  counter += 1;
  return counter;
}

console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2 (Different output for same input due to external state change)

```

```js
function appendToArray(array, value) {
  array.push(value);
  return array;
}

const myArray = [1, 2, 3];
console.log(appendToArray(myArray, 4)); // [1, 2, 3, 4]
console.log(myArray); // [1, 2, 3, 4] (Original array is modified)

```