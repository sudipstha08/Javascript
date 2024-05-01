// Write a function that takes a string as input and returns a compressed version of the string,
// where repeated characters are replaced with the character followed by the count of consecutive
// occurrences. For example, "aaabbcccaa" would become "a3b2c3a2".

function compressString(input) {
	if (input.length === 0) return "";

	let compressed = "";
	let currentChar = "";
	let count = 1;

	for (let i = 1; i < input.length; i++) {
		if (input[i] === currentChar) {
			count++;
		} else {
			compressed += currentChar + count;
			currentChar = input[i];
			count = 1;
		}
	}

	// Append the last character and its count
	compressed += currentChar + count;

	return compressed;
}

// Test the function
const input = "aaabbcccaa";
console.log(compressString(input)); // Output: "a3b2c3a1"
