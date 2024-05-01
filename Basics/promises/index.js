// const promise = new Promise((resolve, reject) => {
// 	const sum = 1 + 3;
// 	if (sum === 2) {
// 		resolve("success");
// 	} else {
// 		reject("Error");
// 	}
// });

// promise.then((data) => console.log(data)).catch((err) => console.error(err));

// setTimeout(() => {
// 	console.log("here");
// }, 250);

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
		console.log("here", 2);
		return setTimeoutPromise(1000);
	})
	.then(() => {
		console.log("here", 3);
	})
	.catch((err) => console.log(err));
