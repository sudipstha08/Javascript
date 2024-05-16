function* fibonacciGenerator() {
	let prevOne = 0;
	let prevTwo = 1;
	yield 0;
  yield 1

	while (true) {
		const result = prevOne + prevTwo;
		yield result;

		prevOne = prevTwo;
		prevTwo = result;
	}
}

const fibonacci = fibonacciGenerator();
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log("-----------")
const fibonacci2= fibonacciGenerator()
console.log(fibonacci2.next());
console.log(fibonacci2.next());
console.log(fibonacci2.next());

