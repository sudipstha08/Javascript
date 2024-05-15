// Spread operator in function calls
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // Output: 3

// Spread operator in array literals
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2]; // Concatenates arrays
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Spread operator in object literals
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const mergedObj = { ...obj1, ...obj2 }; // Merges objects
console.log(mergedObj); // Output: { x: 1, y: 2, z: 3 }

// Rest parameter in function definition
function sum(...numbers) {
	console.log("numbers=>",numbers)
	return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// creates a new array
const newArray = [...numbers]
const [first, ...rest] = numbers
