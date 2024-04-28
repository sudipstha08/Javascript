const object1 = {
	key: "value",
};

const object2 = {
	key: "value",
};

// In the case of objects & arrays, you are comparing the references (the addresses) and not the exact values. 
console.log(object1 === object2); // false
console.log(object1 === object1); // true

let array = [1, 2, 3]
let array2 = [1, 2, 3]

console.log("arr",array == array2)
