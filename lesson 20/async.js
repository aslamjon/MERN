// ES 2018

async function getUsers() {
	// await ".then" ni o'rniga ishlaydi. Malumotlar Usersga o'tadi
	try {
		const users = await fetch("https://jsonplaceholder.typicode.com/users");
		const json = await users.json();
		throw Error;
		console.log(json);
	}
	catch (error) {
		console.log(error)
		console.log('hi')
	}
}

getUsers()

let user = {
	fullName: 'John Doe',
	age: 25,
	gender: 'male',
	job: 'coder'
};


function getMessage(obj) {
	// const { fullName, age, gender, job } = obj; // yomon tarafi hammasini yozish kerak buni oldini olish pastdagi qatorda ko'rsatilgan
	const { fullName, age, ...rest } = obj; // agar ikktasi kerak bo'lsa shu usul bilan ishlatsa bo'ladi
	return `This is ${fullName} and he is ${age} year old. He is ${rest.gender} and he is ${rest.job}`;
}

console.log(getMessage(user))


// Array

const arr = [1,2,3,4,5,6,7];

// const first = arr[0];
// const second = arr[1];
// const third = arr[2];

// oson yo'li
const [first, second, third] = arr;






