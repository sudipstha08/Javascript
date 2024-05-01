function TimeoutPromise() {
	return new Promise((resolve, reject) => {
		setTimeout(resolve("hi"), 100);
	});
}

Promise.all([
  TimeoutPromise(),
	Promise.resolve("1"),
	Promise.resolve("2"),
	Promise.resolve("3"),
]).then((messages) => console.log(messages));
