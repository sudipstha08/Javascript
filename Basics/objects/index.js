let book = {
	title: "Science",
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
