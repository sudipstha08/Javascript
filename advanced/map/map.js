// The Map object is a built-in data structure in JavaScript that allows you to 
// store key-value pairs where both keys and values can be of any data type.
// The garbage collector doesn’t remove a key pointer from “Map” and also doesn’t remove the key from memory.
const user = { name: "mike" };

const map = new Map([
	[false, "hello"],
	["hi", "hello"],
	[user, { age: 25 }],
  [1, "34"]
]);

console.log(map)
console.log(map.size)
console.log(map.get(false));
console.log(map.get(user));

map.set(1, {loc: "43434"})

console.log(map)

map.forEach((key, value) => {
  console.log("key: ", key)
  console.log("value: ", value)
})