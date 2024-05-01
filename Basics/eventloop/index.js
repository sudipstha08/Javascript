function sayHi() {
	console.log("hi 1");
	console.log("hi 2");

	setTimeout(() => console.log("hi 3"), 10);

	setTimeout(() => console.log("hi 4"), 0);

	console.log("hi 5");
}

sayHi()
