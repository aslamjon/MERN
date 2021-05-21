// // This file create with python file
// function task(a){
//     return a; 
// }
// // console.log(task(25));

// let obj = {
//     firstName: 'John',
//     lastName: 'Doe',
//     passport: {
//         series: 'AB',
//         numbers: 1223423424
//     },
//     get passportInfo(){
//         return this.passport.series + " " + this.passport.numbers;
//     },
//     get first(){
//         return this.firstName;
//     },
//     set changeLast(lastN) {
//         return this.lastName = lastN;
//     }
// }
// console.log(obj.passportInfo);
// console.log(obj.first);

// obj.changeLast = 'Elder';

// console.log(obj.lastName);

// =================================================
let person = {
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
};

let person1 = {
    firstName: 'John',
    lastName: 'Doe',
};

let person2 = {
    firstName: 'Aslamjon',
    lastName: 'Ibragimov',
};

let fullName = person.fullName.call(person1);
let fullName2 = person.fullName.apply(person2);

console.log(fullName);
console.log(fullName2);

// ========================================================
let wizard = {
    name: 'Merlin',
    point: 30,
    heal: function(p1, p2) {
        this.point += p1 + p2;
    },
};

let archer = {
    name: 'Robin Hood',
    point: 25,
}

// console.log(wizard);
// wizard.heal(30);
// console.log(wizard);
// ------------------------ the difference between call and apply ------------------------------
wizard.heal.call(archer, 30, 20);
wizard.heal.apply(archer, [30,20]);

console.log(archer);

let keys = Object.keys(person1).map(item => person1[item]);
// map xudi forEach day ishlaydi farqi return qiladi
console.log(keys);