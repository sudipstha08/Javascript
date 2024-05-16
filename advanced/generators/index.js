function* simpleGenerator() {
	console.log("Before 1");
	const value = yield 1;
	console.log("After 1======>", value);
	console.log("Before 2");
	const parameter = yield 2;
	console.log("After 2", parameter);
	console.log("Before 3");
	const parameter2 = yield 3;
	console.log("After 3", parameter2);
}

const generator = simpleGenerator();
console.log(generator);
console.log(generator.next());
console.log(generator.next("Hellooo"));
console.log(generator.next());

// exits out of the generator
console.log(generator.return());
console.log(generator.next());
// console.log(generator.next())
