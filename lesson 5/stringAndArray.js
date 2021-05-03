// str = "I am learning Javascript";
// IndexOf = str.indexOf("Javascript");
// lastIndexOf = str.lastIndexOf("a");
// console.log(IndexOf);
// console.log(lastIndexOf);

a = 123;
x = a.toString(); // js
x = String(a); // ecma
a = "123";
x = Number(a);
// console.log(x);

float = 9.656;

toFixed = float.toFixed(0); //return 10
toFixed2 = float.toFixed(2); //return 9.66
// console.log(toFixed);
// console.log(toFixed2);

lan = ["Python","JavaScript","c++","C#","C","Java","Ruby","Go","PHP"];
console.log(lan.toString());
console.log(lan.join('-=-'));
num = [1,2,3,4,5];
num.push(6); // Appends new elements to an array, and returns the new length of the array.
console.log(num);
num.pop(); // Removes the last element from an array and returns it.
console.log(num);
num.unshift(10) // Elements to insert at the start of the Array. Inserts new elements at the start of an array.
console.log(num);
num.shift() // Removes the first element from an array and returns it.
console.log(num);
num.splice(2, 0, "hello") // Array.splice(start: number, deleteCount: number, ...items: T[])
console.log(num);

num1 = [11,12,13];
num2 = [14,15,16];
merged = num1.concat(num2);
console.log(merged);

arr = [9, 18, 70, 61, 55, 4 ,53, 2]
// arr.sort(function (a,b) {return a - b;});
// console.log(arr);
arr.reverse();
console.log(arr);
console.log(arr.length);