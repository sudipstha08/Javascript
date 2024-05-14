function Book(name, author, year) {
	this.name = name;
	this.author = author;
	this.year = year;

	this.getSummary = function () {
		return `${this.title} was written by ${this.author}`;
	};
}

const book1 = new Book("book one", "micheal", "2013");
const book2 = new Book("book two", "john", "2015");

console.log(book1.getSummary());
