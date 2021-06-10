let sum = 0;
let arr = [23, 45, 67, 88];

for (let i of arr) sum += i;

console.log(sum);

const callback = (acc, value) => acc + value;

let res = arr.reduce(callback); 
// bu yerda boshlang'ich value 0
// let res = arr.reduce(callback, 1); 
// bu yerda boshlang'ich value 1

let peopleArr = [
    { budjet: 1000},
    { budjet: 1000},
    { budjet: 1000},
    { budjet: 1000},
    { budjet: 1000},
    { budjet: 1000}
];

let budjet1 = peopleArr.reduce((acc, value) => acc + value.budjet,0);

console.log(budjet1);
