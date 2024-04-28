## Equality

### Loose Equality (==)
- This operator checks equality only after converting both the values to a common type i.e type coercion returning a Boolean result.
-  The double equal(‘==’) operator tests for abstract equality i.e. it does the necessary type conversions before doing the equality comparison.

```js
    console.log(21 == 21); //true
    console.log(21 == '21'); //true
    console.log('food is love'=='food is love');//true
    console.log(true == 1);//true
    console.log(false == 0);//true
    console.log(null == undefined);//true

    console.log(21 == 32); //false
   console.log(21 == '32'); //false
   console.log(true == 0); // false
   console.log(null == false); // false
```

### Strict Equality (===)
-  The triple equal(‘===’) operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, when compared, it will return false. 

```js
 // '===' operator
    console.log(true === 1);
    console.log(true === 'true');
    console.log(5 === '5');
```


[References]
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
- https://www.freecodecamp.org/news/loose-vs-strict-equality-in-javascript/