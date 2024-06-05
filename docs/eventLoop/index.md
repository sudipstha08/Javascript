## Event Loop

- Event loop is a fundamental mechanism that enables the asynchronous execution of code. It’s an essential part of the JavaScript runtime environment, allowing the language to handle non-blocking operations efficiently. The event loop is responsible for managing the execution of code, handling events, and maintaining the flow of control.


### Main Thread
- The main thread is the one used by the browser to handle user events, render and paint the display, and to run the majority of the code that comprises a typical web page or app. Because these things are all happening in one thread, a slow website or app script slows down the entire browser; worse, if a site or app script enters an infinite loop, the entire browser will hang. This results in a frustrating, sluggish (or worse) user experience.
- Main thread is the execution thread. It stays outside the event loop and will check for any events pertaining to the event loop.

## Micro Task
- Microtasks are executed at the end of the current synchronous code execution, before any macrotasks but before the next iteration of the event loop.
- They are processed sequentially and must be completed before returning to the event loop to process macrotasks.
- e.g., Promise.then callbacks, MutationObserver

## Macro Task
- Macrotasks are scheduled to run after the current synchronous code and the microtasks have been executed. Each macrotask is processed one at a time, with the event loop checking for microtasks after each macrotask completes.
- e.g., setTimeout, setInterval, I/O tasks
  
```js
setTimeout(() => console.log(1)); // Macrotask
Promise.resolve().then(() => console.log(2)); // Microtask
Promise.resolve().then(() => setTimeout(() => console.log(3))); // Microtask -> Macrotask
new Promise(() => console.log(4)); // Synchronous
setTimeout(() => console.log(5)); // Macrotask

```

// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=eiC58R16hb8
// https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/
- https://www.geeksforgeeks.org/what-is-an-event-loop-in-javascript/