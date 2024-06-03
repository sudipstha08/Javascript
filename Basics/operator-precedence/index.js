/**
 * Operator precedence determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.
 */
// The associativity represents which operator has to solve first while going from left to right if two or more operators have the same precedence in the expression.
console.log("aaa", 1 > 2 > 3);
console.log("bbb", 3 > 2 > 1);

// 23, because parentheses here are superfluous
console.log(3 + (10 * 2))
let x = 100 + 50 * 3;
console.log("x", x)

// Within operators of the same precedence, the language groups them by associativity

// . Left-associativity (left-to-right) means that it is interpreted as (a OP1 b) OP2 c,
let a = b = 5; // same as writing a = (b = 5);
// the unique exponentiation operator has right-associativity
const d = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144

// arithmetic operators have left-associativity.
console.log("cc", 4 * 3 / 2)

console.log(4 + 4 * 8 / 3)


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
// https://www.freecodecamp.org/news/javascript-operators-and-operator-precedence/