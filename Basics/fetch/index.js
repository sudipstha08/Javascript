fetch("https://jsonplaceholder.typicode.com/users")
	.then((res) => {
		// console.log(res);
		return res.json();
	})
	.then((data) => {
		console.log(data);
	});

console.log("fdsfsdfsg");

async function createPost() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			title: "New post",
		}),
	});

	console.log(res);
}

createPost();
