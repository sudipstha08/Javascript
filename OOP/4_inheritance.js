function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

Book.prototype.getSummary = function () {
	return `${this.title} was written by ${this.author}`;
};

// Magazine constructor
function Magazine(title, author, year, month) {
	Book.call(this, title, author, year);
	this.month = month;
}

// Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine("Mag one", "John doe", "2018", "jan");

// use Magazine constructor
Magazine.prototype.constructor = Magazine
console.log(mag1.getSummary());
