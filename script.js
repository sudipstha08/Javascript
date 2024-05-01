const obj = {
	count: 0,
	handleClick: function () {
		obj.count++;
		console.log(this);
		console.log("Button clicked:", this.count);
	},
};

// Bind the handleClick method to the obj object
// const handleClickBound = obj.handleClick.bind(obj);

// Attach the bound handleClick method as an event listener to the button
const button2 = document.getElementById("button2");
button2.addEventListener("click", obj.handleClick.bind(obj));

// Modal

const modal = document.querySelector("#modal");
const openModalButton = document.querySelector("#open-modal-btn");
const closeModalButton = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

openModalButton.addEventListener("click", () => {
	modal.classList.add("open");
	overlay.classList.add("open");
});

const closeModal = () => {
	modal.classList.remove("open");
	overlay.classList.remove("open");
};

closeModalButton.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

/**
 * Event Delegation
 */
const eventButton = document.querySelector("#event");

document.addEventListener(
	"click",
	() => {
		console.log(" document clicked");
	},
	//capture is false by default
	{ capture: true }
);

document.body.addEventListener(
	"click",
	() => {
		console.log("body clicked");
	},
	{ capture: true }
);

eventButton.addEventListener("click", (e) => {
	e.stopPropagation()
	console.log("button clicked");
});
