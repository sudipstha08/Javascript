// Object literal
const book = {
	title: "Book one",
	author: "John doe",
	year: "2013",
	getSummary: function () {
		return `${this.title} was written by ${this.author}`;
	},
};

const book2 = {
	title: "Book two",
	author: "John doe",
	year: "2023",
	getSummary: function () {
		return `${this.title} was written by ${this.author}`;
	},
};

console.log(Object.values(book))
console.log(Object.keys(book))
console.log(book.hasOwnProperty("title"))
