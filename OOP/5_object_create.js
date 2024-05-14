// Object of Protos
const bookProtos = {
	getSummary: function () {
		return `${this.title} was written by ${this.author}`;
	},
	getAge: function () {
		const years = new Date().getFullYear() - this.year;
		return `${this.title} is ${years} years old`;
	},
};

// Create Object
const book1 = Object.create(bookProtos);
book1.title = "Book one";
book1.author = "Micheal";

// second way
const book2 = Object.create(bookProtos, {
	title: { value: "Book two" },
	author: { value: "Johnn" },
});
