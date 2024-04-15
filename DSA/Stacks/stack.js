var Stack = function () {
	this.count = 0;
	this.storage = {};

	// Add a value onto the top of the stack
	this.push = function (value) {
		this.storage[this.count] = value;
		this.count++;
	};

	// Removes and returns the value at the top of the stack
	this.pop = function () {
		if (this.count === 0) {
			return undefined;
		}

		this.count--;
		var result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	};

	// Returns the number of elements in the stack.
	this.size = function () {
		return this.count;
	};

	// Returns the top element of the stack without removing it.
	this.peek = function () {
		return this.storage[this.count - 1];
	};
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
console.log(myStack.storage);
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.storage);
console.log(myStack.peek());

myStack.push("Hi")
console.log(myStack.storage);
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.storage);
console.log(myStack.peek());
