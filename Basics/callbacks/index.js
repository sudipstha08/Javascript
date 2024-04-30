// const button = document.querySelector("button");

// addClickEventListener(button, () => console.log("clicked"));

// function addClickEventListener(element, callback) {
// 	element.addEventListener("click", callback);
// }

// // callback hell
// setTimeout(() => {
// 	console.log("Hoi");
// 	setTimeout(() => {
// 		console.log("Hi");
// 		setTimeout(() => {
// 			console.log("Hi");
// 		}, 100);
// 	}, 100);
// }, 100);

var numbers = [1, 2, 3, 4, 5];
console.log("helloo0000 start");

function mainFunction(callback) {
	console.log("Performing operation...");
	// Use Array.forEach to loop through the array of numbers
	numbers.forEach(callback);
}

// Define the callback function
function callbackFunction(number) {
	console.log("Result: " + number);
}

// Call the main function with the callback function
mainFunction(callbackFunction);

console.log("helloo0000");
