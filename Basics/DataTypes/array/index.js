const a = ["1", "2"];
a.push(34);
a.push(["hi", "hello"]);

// array destructuring
const [c, b, ...rest] = [1, 2, 4, 5, 6];

console.log(b);
console.log(c);
console.log(rest);

// Nested arrays
const aa = [
	["hfd", "fds"],
	[1, 2],
];

console.log(aa[0][0])
