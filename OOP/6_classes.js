class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	getSummary() {
		return `${this.title} was written by ${this.author}`;
	}

	getAge() {
		const years = new Date().getFullYear() - this.year;
		return `${this.title} is ${years} years old`;
	}

	revise(newYear) {
		this.year = newYear;
		this.revised = true;
	}

	// Static properties cannot be directly accessed on instances of the class.
	// Instead, they're accessed on the class itself.
	static topBooks() {
		return `Barnes and Noble`;
	}
}

// instantiate object
const book1 = new Book("Book one", "johnny", "2015");
book1.revise("2024");

console.log(book1);
console.log(Book.topBooks());
