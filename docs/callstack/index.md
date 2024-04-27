## Stack Trace
- A stack trace is a list of the functions, in order, that lead to a given point in a software program.
- The stack trace helps us to know the steps that lead up to our error. And the stack trace isn’t only useful for humans. If you’re using error tooling that tracks and stores errors, it can use these stack traces to count how often an error occurs.
- The stack trace is a report of the active stack frames at a particular point in time during the execution of a program. When the program is running, memory is often dynamically allocated in the stack as well as the heap. The stack is more active as compared to heap because it usually a continuous region of memory allocating local context for each executing function. Stack also refers to programming construct so this stack is referred to as a program’s runtime stack. Once a block of memory has been allocated on the stack. It cannot be easily removed as there can be other blocks of memory that were allocated before it. Every time when the function is called in the program a block of memory is allocated on the top of the runtime stack called the activation record. Programmers commonly use stack tracing during interactive and debugging. End-users may see stack trace displayed as part of an error message, which the users can report to the programmers.
- A stack trace is essentially a breadcrumb trail for your software. 
- You can easily see the stack trace in JavaScript by adding the following into your code:
- 
  
```js
console.trace();
```


## Call Stack
- The call stack is a crucial concept in JavaScript’s runtime environment, representing the mechanism by which the JavaScript engine keeps track of function calls in a program. It operates as a Last In, First Out (LIFO) data structure, meaning that the last function called is the first one to be resolved.

### References
- https://www.linkedin.com/pulse/what-call-stack-javascript-jay-tillu-252vf/
- https://www.geeksforgeeks.org/what-is-the-call-stack-in-javascript/