// function TimeoutPromise = 

Promise.allSettled([
	Promise.resolve("1"),
	Promise.resolve("2"),
	Promise.resolve("3"),
	Promise.reject("4"),
]).then((messages) => console.log(messages));
