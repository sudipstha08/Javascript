Promise.any([
	Promise.resolve("1"),
	Promise.reject("2"),
	Promise.resolve("3"),
	Promise.resolve("4"),
]).then((messages) => console.log(messages));