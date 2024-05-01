function setTimeoutPromise(duration) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, duration);
	});
}


setTimeoutPromise(1000)
	.then(() => {
		console.log("here", 1);
		return setTimeoutPromise(1000);
	})
	.then(() => {
		console.log("2");
		setTimeout(() => {
			return Promise.resolve("hi");
		}, 2000);
	})
	.then(() => {
		console.log("here", 5);
	})
	.catch((err) => console.log(err));
