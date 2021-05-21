function myFunction(a, b) {
    let product = a * b;
    return product;
}

let result = myFunction(2, 5);
console.log(result);

let sum = function (a, b) { // bu function hosting bo'lmaydi
    return a + b;
}
let res = sum(4, 5);
console.log(res);

(function () { // bu function prodsedura deyiladi chunki return bo'lmaypati
    console.log("Hello, Js");
})();

function sub (a, b) {
    return a - b;
}
console.log(sub(5,2));

function div (a, b) {
    return a / b;
}
console.log(div(4,2));

// Arrow functions
// arrow function hosting bo'lmaydi
let arrow = (a, b) => a * b;

console.log(arrow(2,3));

function func(x, y = 8) { // default value
    return x * y;
}

console.log(func(4,5));
console.log(func(3));

// function max(a,b) {
//     return (a > b)? a: b;
// }
max = (a, b) => (a > b) ? a : b;
console.log(max(6,4));

let obj = {a:3};

function test (a){
    a.a = 6;
}
console.log( obj.a);
