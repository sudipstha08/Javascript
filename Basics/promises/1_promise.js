const buttonPromise = document.querySelector("#promise");

function addEventListenerPromise(element, method) {
	return new Promise((resolve, reject) => {
		element.addEventListener(method, resolve);
	});
}

addEventListenerPromise(buttonPromise, "click").then((msg) =>
	console.log("Helloo", msg)
);

const promise = Promise.reject("here");

promise
	.then((message) => console.log(message))
	.catch((err) => console.log(err))
	.finally(() => console.log("finally"));
