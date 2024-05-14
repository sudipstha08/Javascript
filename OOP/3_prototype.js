/**
 *
 * In JavaScript, every object has a prototype. The prototype is an internal reference that points
 * to another object. When you attempt to access a property or method on an object,
 * and that property or method doesn't exist on the object itself, JavaScript will
 * look for it on the object's prototype. This process is known as prototype chain lookup.
 *
 */
function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

// book get summary prototype
Book.prototype.getSummary = function () {
	return `${this.title} was written by ${this.author}`;
};

//
Book.prototype.getAge = function () {
	const years = new Date().getFullYear() - this.year;
	return `${this.title} is ${years} years old`;
};

Book.prototype.revise = function (newYear) {
	this.year = newYear;
	this.revised = true;
};

const book1 = new Book("book one", "micheal", "2013");
const book2 = new Book("book two", "john", "2015");

console.log(book2);
console.log(book2.getAge());
book2.revise("2020");
console.log("bookl", book2);


// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
