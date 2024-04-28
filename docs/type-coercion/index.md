## Type Coercion

- `Type Coercion` refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number, etc. when different types of operators are applied to the values.
- In case the behavior of the implicit conversion is not sure, the constructors of a data type can be used to convert any value to that datatype, like the Number(), String() or Boolean() constructor.
- `Type conversion` is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

Number to String Conversion
-When any string or non-string value is added to a string, it always converts the non-string value to a string implicitly. 
```js
// The Number 10 is converted to
// string '10' and then '+'
// concatenates both strings   
let x = 10 + '20';
let y = '20' + 10;
 
// The Boolean value true is converted
// to string 'true' and then '+'
// concatenates both the strings
let z = true + '10';
 
console.log(x);
console.log(y);
console.log(z);
```

String to Number Conversion
- When an operation like subtraction (-), multiplication (*), division (/), or modulus (%) is performed, all the values that are not numbers are converted into the number data type, as these operations can be performed between numbers only. 
```js
// The string '5' is converted
// to number 5 in all cases
// implicitly
let w = 10 - '5';
let x = 10 * '5';
let y = 10 / '5';
let z = 10 % '5';

console.log(w);
console.log(x);
console.log(y);
console.log(z);
```

Boolean to Number
- When a Boolean is added to a Number, the Boolean value is converted to a number as it is safer and easier to convert Boolean values to Number values. A Boolean value can be represented as 0 for ‘false’ or 1 for ‘true’. 

```js
// The Boolean value true is
// converted to number 1 and
// then operation is performed
let x = true + 2;

// The Boolean value false is
// converted to number 0 and
// then operation is performed
let y = false + 2;

console.log(x); //3
console.log(y); //2

```

References
- https://medium.com/@atuljha2402/understanding-javascript-type-coercion-type-conversion-a2ce84c00331#:~:text=Type%20coercion%20refers%20to%20the,complete%20the%20operation%20or%20comparison.
- https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/