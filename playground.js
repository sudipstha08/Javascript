// setTimeout(() => console.log(1));
// Promise.resolve().then(() => console.log(2));
// Promise.resolve().then(() => setTimeout(() => console.log(3)));
// new Promise(() => console.log(4));
// setTimeout(() => console.log(5));

setTimeout(() => console.log('macrotask 1')); // Macrotask
Promise.resolve().then(() => console.log('microtask 1')); // Microtask
Promise.resolve().then(() => {
  console.log('microtask 2'); // Microtask
  setTimeout(() => console.log('macrotask 2')); // Macrotask scheduled by microtask
});
setTimeout(() => console.log('macrotask 3')); // Macrotask
console.log("fsfs")

//macrotask 1
// microtask 1