function setTimeoutPromise(duration) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(duration), duration);
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
			return Promise.resolve("");
		}, 2000);
	})
	.then(() => {
		console.log("here", 5);
	})
	.catch((err) => console.log(err));

console.log("sd", setTimeoutPromise(20));

// in promises are not chained like above all are executed in parallel
for (let i = 0; i < 10; i++) {
	setTimeoutPromise(i).then((value) => console.log(value));
}
