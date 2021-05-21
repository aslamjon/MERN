// Objects

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
//   address: {
//     city: "New York",
//     street: "Long street",
//     country: "USA",
//   },
//   hobbies: ["Coding", "Hiking", "Reading"],
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(
//   person.firstName + " " + person.lastName + " is " + person.age + " years old"
// );

// console.log(person.fullName());

// Mutable vs Immutable

let a = 5;
a = 8;

let str = "javascript";
str = "Java";

// object, array

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,

  getAge: function () {
    return this.age;
  },

  get first() {
    return this.firstName;
  },
  set setLast(lastName) {
    this.lastName = lastName;
  },
};
console.log(person.getAge());
console.log(person.first);
person.setLast = "Smith";

console.log(person.lastName);

// person.age = 40;
// person.eyeColor = "blue";
// console.log(person);

// let arr = [1, 2, 3, 45];
// arr[2] = 78;
// arr[6] = 96;
// console.log(arr);

// for (x in person) {
//   console.log(person[x]); // person[x] = person["firstName"]
// }

// const keys = Object.keys(person);
// for (let i = 0; i < keys.length; i++) {
//   console.log(person[keys[i]]); // i = 0, keys[0] = "firstName" person["firstName"] = "John"
// }

// const values = Object.values(person);
// console.log(values);

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.hobbies = ["Hiking"];
}

let me = new Person("John", "Doe", 50, "brown");
me.hobbies.push("Reading");
console.log(me); //?
