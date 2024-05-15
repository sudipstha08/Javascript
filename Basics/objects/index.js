const propertyName = "Year"
const year = 2020

let book = {
	title: "Science",
	[propertyName]: year,
	author: {
		name: "Ateenborough",
		age: 60,
	},
	// Methods
	getBookName: () => {
		console.log("Hello", book.title);
	},
};

book.author.name = "New Name";

console.log("books", book.getBookName());
