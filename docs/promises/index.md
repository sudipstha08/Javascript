## Promises

- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

- A Promise is an object that will produce a single value some time in the future. 
- JavaScript promises can be in one of three possible states. These states indicate the progress of the promise. They are:

  - `pending`: This is the default state of a defined promise
  - `fulfilled`:  This is the state of a successful promise
  - `rejected`: This is the state of a failed promise
  
- A promise goes from pending to fulfilled, or from pending to rejected—‘fulfilled’ and ‘rejected’ indicate the end of a promise.

- Using finally() helps prevent possible code repetition in .then() and .catch(). It is for operations you must run whether there is an error or not.
 It is important if you want to perform cleanup operations for activities the promise initiated. Another use case—on Front-End Web Applications—is making user interface updates like stopping a loading spinner.

 ## Promise.all()
 - The Promise.all() method accepts an array of promises, and when all promises are resolved, the method will pass the messages returned by the promises as an array and pass it to the then() method.

If one of the promises is rejected, then the method returns the first rejection it encounters and stops any further process.

## The Promise.allSettled() method
- The Promise.allSettled() method is similar to the Promise.all() method, but instead of  proceeding to catch() when one of the promises got rejected, the method will store the reject result and continue processing other promises.
  
## The Promise.any() method
The Promise.any() method is similar to the Promise.all() method, except that it returns only a single value from any promise that calls the resolve() function first

## The Promise.race() method
The Promise.race() method is like the Promise.any() method, with one difference: the promise is settled when any promise is resolved or rejected:

 - https://www.freecodecamp.org/news/guide-to-javascript-promises/
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 - https://www.freecodecamp.org/news/javascript-promise-object-explained/


## Async Await
- Async/await is a feature in JavaScript that allows you to work with asynchronous code in a more synchronous-like manner, making it easier to write and understand asynchronous code.
- The `async/await` syntax is a special syntax created to help you work with promise objects. It makes your code cleaner and clearer.
- Async Functions always return a `promise`. Await Keyword is used only in Async Functions to wait for promise.
- To create an asynchronous function, you need to add the async keyword before your function name. 
- JS Async/Await is the extension of promises that we get as support in the language
- By using the async/await syntax, you reduce the need for method chaining and nested callbacks. This impact the readability of your code, especially when you have nested code like if/else and a for loop block.
- https://www.freecodecamp.org/news/javascript-async-await/

## Async Function
- The Async function simply allows us to write promises-based code as if it were synchronous and it checks that we are not breaking the execution thread.
- Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
```js
const getData = async () => {
	let data = "Hello World";
	return data;
}

getData().then(data => console.log(data));

```

## Await Keyword
Await is used to wait for the promise. It could be used within the async block only.
It makes the code wait until the promise returns a result

```js
const getData = async () => {
	let y = await "Hello World";
	console.log(y);
}

console.log(1);
getData();
console.log(2);

```
- However, in this case, the awaited value is a string literal “Hello World”, which is not a promise, so it will be immediately resolved.


- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
