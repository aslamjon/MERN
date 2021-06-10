console.log(`============================- Ex.1 -==================================`);
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let plus7 = arr.map(value => value + 7);
console.log(plus7,`
============================- Ex.2 -==================================`);
let div3 = arr.map(value => value / 3);
console.log(div3, `
============================- Ex.3 -==================================`);
let square = arr.map(value => value ** 2);
console.log(square, `
============================- Ex.4 -==================================`);
var users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];
users.forEach(value => console.log(value.firstName));
let names = users.map(elem => elem.firstName);
console.log(names);
console.log(`============================- Ex.5 -==================================`);
let fullStack = users.filter(elem => elem.role === 'Full Stack Resident');
console.log(fullStack);