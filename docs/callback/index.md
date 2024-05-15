## Callbacks
- A `callback` is a function that is passed as an argument to another function, and is called after the main function has finished its execution. The main function is called with a callback function as its argument, and when the main function is finished, it calls the callback function to provide a result. 
- Callbacks allow you to handle the results of an asynchronous operation in a non-blocking manner, which means that the program can continue to run while the operation is being executed.
- Asynchronous operations are operations that take a significant amount of time to complete, such as network requests, file I/O, and database queries. If these operations were executed synchronously, the program would freeze and wait for the operation to complete before continuing. This can lead to a poor user experience, as the program would appear unresponsive.

### Synchronous callback
```js
function syncFunction(callback) {
    console.log("Before callback");
    callback();
    console.log("After callback");
}

syncFunction(() => {
    console.log("Callback executed");
});
```

### Asynchronous callback
```js
function asyncFunction(callback) {
    console.log("Before asynchronous operation");
    setTimeout(() => {
        console.log("Asynchronous operation completed");
        callback();
    }, 1000);
}

asyncFunction(() => {
    console.log("Callback executed");
});
```

- https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/