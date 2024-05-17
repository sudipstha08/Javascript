class Main {
	constructor(data) {
		this.data = data;
	}
	add(num) {
		this.data += num;
		return this;
	}
	subtract(num) {
		this.data -= num;
		return this;
	}
	divide(num) {
		this.data /= num;
		return this;
	}
	multiple(num) {
		this.data *= num;
		return this;
	}
	print() {
		return this.data;
	}
}

const x1 = new Main(10);
const x2 = new Main(10);

const value = x1.add(6).subtract(4).multiple(3).divide(2).print();
const value2 = x2.multiple(3).add(6).subtract(4).divide(2).print();
const value3 = x2.multiple(5).divide(4).print();

console.log(value); //18
console.log(value2); //16
console.log(value3); //20
