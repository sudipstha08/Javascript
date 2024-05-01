const a = "radar";

const splitA = a.split("");
const reversedSplitA = [...splitA]; // Create a reversed copy of splitA

console.log("reversedSplitA", reversedSplitA);
let data = "";

for (let i = 0; i < splitA.length; i++) {
	console.log("u", i);
	let ele = reversedSplitA.pop();
	console.log("splitA", splitA);
	data += ele;
}

console.log("string==>", data);

if (data === a) {
	console.log("This word is a palindrome");
} else {
	console.log("This is not a palindrome");
}
