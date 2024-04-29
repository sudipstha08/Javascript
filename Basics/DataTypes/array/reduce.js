const items = [
	{ price: 10 },
	{ price: 20 },
	{ price: 14 },
	{ price: 1 },
	{ price: 6 },
];

const reduced = items.reduce((sum, current) => {
	return sum + current.price;
}, 0);

console.log("reduced", reduced);
