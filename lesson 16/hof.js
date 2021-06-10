// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let res = arr.filter(element => element % 2 === 0);
// console.log(res);
// ============================================================
const p = calculate(3, 4, product);

function calculate(a, b, fn){
    return fn(a, b);
}

function product(a, b) {
    return a * b;
}
console.log(p);
// ============================================================
function multiplyBy2(num) {
    return num * 2;
}

function divideBy2(num) {
    return num / 2;
}

function addBy3(num){
    return num + 3;
}
function subtractBy3(num) {
    return num - 3;
}
function copyArrayandMainpulate(arr, instructions) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(instructions(arr[i]));
    }
    return output;
}

const mul = copyArrayandMainpulate([1,2,3], multiplyBy2);
const div = copyArrayandMainpulate([1,2,3], divideBy2);
const ad = copyArrayandMainpulate([1,2,3], addBy3);
// const su = copyArrayandMainpulate([1,2,3], subtractBy3);
const su = copyArrayandMainpulate([1,2,3], element => element - 3);
console.log(mul);
console.log(div);
console.log(ad);
console.log(su);