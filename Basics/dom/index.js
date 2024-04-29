const dataAttributeElement = document.querySelector("[data-test]");

const divWithClass = document.querySelector(".div-class");
const divsWithClass = document.querySelectorAll(".div-class");

console.log(dataAttributeElement);
console.log(divWithClass);
console.log(divsWithClass);

// NodeList has forEach method but not map
divsWithClass.forEach((div) => (div.style.color = "red"));

const input = document.querySelector("input[type='text']");
const input2 = document.querySelector("body > input[type='text']");
console.log(input)
