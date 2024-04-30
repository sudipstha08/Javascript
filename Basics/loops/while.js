let i = 0;
while (i < 5) {
	console.log(i);
	i++;
}

const person = {
	name: "Micheal",
	friend: {
		name: "Joe",
		friend: {
			name: "Sally",
		},
	},
};

let currentPerson = person;

while (currentPerson.friend != null) {
	console.log(currentPerson.name);
	currentPerson = currentPerson.friend;
}
