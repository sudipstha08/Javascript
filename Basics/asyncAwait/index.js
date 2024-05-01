function setTimeoutPromise(duration) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`You waited ${duration} ms`);
			// reject(`You waited ${duration} ms`);
		}, duration);
	});
}

// async function sayHello() {
// 	try {
// 		const res = await setTimeoutPromise(2000);
// 		console.log("res", res);
// 		await setTimeoutPromise(2200);

// 		console.log("hey");
// 	} catch (err) {
// 		console.log(`Err: ${err}`);
// 	} finally {
// 		console.log("finally is executed always");
// 	}
// }

// sayHello();

for (let i = 0; i < 10; i++) {
	setTimeoutPromise(i).then((value) => console.log(value));
}
