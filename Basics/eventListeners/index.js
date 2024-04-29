const btn = document.querySelector("[data-btn]");
const inputField = document.querySelector("[data-input2]");
const form = document.querySelector("form");

const handleClick = (e) => {
	console.log("Clicked", e);
};

btn.addEventListener("click", handleClick);

inputField.addEventListener("input", (e) => {
	console.log("changed", e.target.value);
});

// btn.removeEventListener("click", handleClick);

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log("form submitted")
})