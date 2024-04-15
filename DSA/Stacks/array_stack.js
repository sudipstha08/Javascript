/**
 * Implementing stack using arrays for palindrome
 * Palindrome - A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. 
 * For example, "radar"
 */

let letters = [];
let word = "racecarr";

let rword = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  // push on top of stack
	letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
	rword += letters.pop();
}

if (rword === word) {
	console.log(word + " is a palindrome");
} else {
	console.log(word + " is not a palindrome");
}
