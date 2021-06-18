
const users = fetch("https://jsonplaceholder.typicode.com/users");

users
	.then(data => data.json())
	.then(user => {
		const tbody = document.querySelector('tbody');
		user.forEach((element) => {
			tbody.innerHTML += `
			<tr>
				<td>${element.name}</td>
				<td>${element.email}</td>
				<td>${element.phone}</td>
				<td>${element.address.city}, ${element.address.street}</td>
			</tr>`;
		})
	})