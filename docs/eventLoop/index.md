## Event Loop

- Event loop is a fundamental mechanism that enables the asynchronous execution of code. It’s an essential part of the JavaScript runtime environment, allowing the language to handle non-blocking operations efficiently. The event loop is responsible for managing the execution of code, handling events, and maintaining the flow of control.


### Main Thread
- The main thread is the one used by the browser to handle user events, render and paint the display, and to run the majority of the code that comprises a typical web page or app. Because these things are all happening in one thread, a slow website or app script slows down the entire browser; worse, if a site or app script enters an infinite loop, the entire browser will hang. This results in a frustrating, sluggish (or worse) user experience.
- Main thread is the execution thread. It stays outside the event loop and will check for any events pertaining to the event loop.

// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=eiC58R16hb8
// https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/
- https://www.geeksforgeeks.org/what-is-an-event-loop-in-javascript/