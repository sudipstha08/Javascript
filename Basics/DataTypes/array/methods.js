const arr = [1, 2, 3, 4, 5, 6];

// forEach loop through the array and doesnot return anything
arr.forEach((element, index) => {
	console.log(index + " " + element);
});

// loop & modify the array and return the new array
const arraymap = arr.map((element) => element * 2);

// filter
const filteredArr = arr.filter((element) => element > 3);

// Find returns the single element matching the set condition
const findArr = arr.find((element) => element > 2);

//some => checks if atleast one element satisfies the condition & return boolean
const someArray = arr.some((element) => element > 3); //true

// every => checks if every element satisfies the condition & returns boolean
const everyArray = arr.every((element) => element > 3); //false

console.log("original arr=>", arr);
console.log("arraymap", arraymap);
console.log("filter", filteredArr);
console.log("findArr", findArr);
console.log("someArray", someArray);
console.log("everyArray", everyArray);

// reduce
const reduceArr = arr.reduce((sum, element) => {
	console.log("sum", sum);
	console.log("element", element);
	return sum + element;
}, 2);

console.log("reduceArr", reduceArr);

// includes => check if the provided item is in the array & returns boolean
const includes = arr.includes(3);
console.log("includes=>", includes);
