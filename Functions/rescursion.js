// var count = 0;
// function show(value) {
// 	count++;
// 	console.log(value, count);
// 	if (count > 2) return;

// 	show("second");
// 	show("test");
// }
// show("first");

// TODO: call stack for recursive function

// function fib(n) {
// 	if(n===1 || n ==2) {
// 		return 1
// 	}
// 	return fib(n-1) + fib(n-2)
// }

// console.log(fib(5))

// https://www.youtube.com/watch?v=LteNqj4DFD8

function printNumber(number) {
	if (number > 2) return;
	console.log("entry", number)
	printNumber(number + 1);
	console.log("exiting",number);
}

printNumber(1)