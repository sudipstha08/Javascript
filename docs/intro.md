## Javascript

When the JavaScript engine scans a script file, it makes an environment called the Execution Context that handles the entire transformation and execution of the code.

### Global execution context
- In JavaScript, the global execution context is the first context created when a script is loaded into a web page or node environment. It consists of two main components: the creation phase and the execution phase.
- The creation phase of the global execution context includes the following steps:

Creation of the global object (e.g., window in a browser, global in Node.js).
Creation of the this keyword, which refers to the global object.
Creation of the outer environment, which is null for the global context.
Setting up the scope chain, which includes the global scope and any outer functions or lexical environments.

After the creation phase, the execution phase begins. The global execution context is added to the call stack, and the JavaScript engine starts executing the code in the global context. Any code defined in the global scope, such as variable declarations or function definitions, is executed in the global context.

https://www.javascripttutorial.net/javascript-execution-context/
- https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/
- https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/
- https://medium.com/@rabailzaheer/javascript-execution-context-behind-the-call-stack-19f253aad0a4#:~:text=The%20global%20execution%20context%20is,managing%20global%20variables%20and%20functions.