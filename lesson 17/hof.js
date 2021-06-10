let arr = [1,2,3,4];

// let newArray = arr.map(multiplyBy2)

// function multiplyBy2(input) {
//     return input * 2;
// }
// console.log(newArray);

console.log(`========================- OR -==========================`);
// let newArray = arr.map(input => input*2);

// console.log(newArray);
console.log(`========================- -==========================`);
let ab = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }
];
let newAb = ab.map((obj) => {
    let o = {};
    o[obj.key] = obj.value;
    return o;
});
console.log(newAb);
