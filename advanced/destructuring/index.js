const array = ["A", "B", "C", "D", 5, ["444", "555"]];

const [first, second, , fourth, fifth="5", [sixth, seventh]] = array;

console.log(first);
console.log(second);
console.log(fourth);
console.log(fifth);
console.log(sixth);
console.log(seventh);

const person = {
	name: "Mike",
	age: 25,
	favouriteGame: "Football",
	address: {
		city: "kathmandu",
		street: "Kalanki",
	},
};

// object destructuring
const {
	name: firstName,
	age,
	favouriteGame,
	address: { city, street },
} = person;


console.log(firstName)
console.log(age)
console.log(favouriteGame)
console.log(city)