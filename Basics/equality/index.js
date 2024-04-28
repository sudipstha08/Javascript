// When you compare primitive values, you are comparing static values, which have a fixed size on the stack
let name1 = "Dillion";
let name2 = "Dillion";

console.log(name1 === name2);

const a = 1;
const b = "1";

console.log(a != b); //false
console.log(a !== b); // true

// In R.H.S. string "9" is converted into
// number 9, hence returns true.
console.log(9 == "9");

// Here no type of conversion takes place,
// hence returns false
console.log(9 === "9");

// type conversion takes place .
// Here L.H.S. is a string literal whereas R.H.S. is a string object,
// due to the type conversion of a string object into a string literal, it returns true.
console.log("GeeksforGeeks" == new String("GeeksforGeeks"));

// No type of conversion takes place
console.log("GeeksforGeeks" === new String("GeeksforGeeks"));

//  Here number 1 is converted into true(boolean type)
console.log(true == "1");
