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
}

class Magazine extends Book {
	constructor(title, author, year, month) {
		super(title, author, year);
		this.month = month;
	}
}

const mag1 = new Magazine("Mag one", "John doe", "2018", "jan");

console.log(mag1)
console.log(mag1.getSummary())
