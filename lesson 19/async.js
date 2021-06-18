/*
    Promise
*/
let promise = new Promise((resolve, reject) => {
    let a = 4;
    if (a % 2 == 0) {
        resolve("it is even");
    } else {
        reject("it is odd");
    }
});

// then - Success uchun
// catch - fail uchun
// finally - nima bo'lganda ham ishlaydi
promise
    .then(str => str + '.')
    .then(str => console.log(str.split(' ')))
    .catch(error => console.log(error))

let p1 = new Promise((resolve, reject) => {
    resolve('First')
});

let p2 = new Promise((resolve, reject) => {
    resolve('Second')
});

let p3 = new Promise((resolve, reject) => {
    resolve('Third')
});

let p4 = new Promise((resolve, reject) => {
    resolve('Fourth')
});


Promise.all([p1, p2, p3, p4]).then((result) => {
    console.log(result);
})
