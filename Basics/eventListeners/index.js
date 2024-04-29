const btn = document.querySelector("[data-btn]");
const inputField = document.querySelector("[data-input2]");
const form = document.querySelector("form");
const button = document.querySelector("#button");

const handleClick = (e) => {
	console.log("Clicked", e);
};

btn.addEventListener("click", handleClick);

inputField.addEventListener("input", (e) => {
	console.log("changed", e.target.value);
});

// btn.removeEventListener("click", handleClick);

form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("form submitted");
});

// Arrow vs Function
/**
 * The this inside the arrow function refers to the this value
 * of the surrounding lexical context, which is the global object (window in a browser environment)
 * because arrow functions don't have their own this.
 * Therefore, this inside the arrow function refers to the global window object.
 */
button.addEventListener("click", (e) => {
	console.log("Arrow this");
	console.log(this);
});

button.addEventListener("click", function () {
	console.log("Function this");
	console.log(this);
});

/**
 * when JavaScript code is executed in the global scope (outside of any function),
 * this refers to the global object. In a browser environment,
 * the global object is window. So, when you compare this === window,
 * you're checking if the current execution context is the global object.
 *  */
console.log(this === window); //true
