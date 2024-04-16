// var count = 0;
// function show(value) {
// 	count++;
// 	console.log(value, count);
// 	if (count > 2) return;

// 	show("second");
// 	show("test");
// }
// show("first");

function fib(n) {
	if(n===1 || n ==2) {
		return 1
	}
	return fib(n-1) + fib(n-2)
}

console.log(fib(5))

// https://www.youtube.com/watch?v=LteNqj4DFD8