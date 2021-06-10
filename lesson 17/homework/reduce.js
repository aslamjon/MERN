console.log(`============================- Ex.1 -==================================`);
var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let res = epic.reduce((acc, elem) => acc + elem + ' ','');
let join = epic.join(' ');
console.log(res);
console.log(join);
console.log(`============================- Ex.2 -==================================`);
var users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];
let fullNameAndRole = users.reduce((acc, elem) => {
    acc[`${elem.firstName} ${elem.lastName}`] = elem.role
    return acc;
},{});
// let fullNameAndRole = users.reduce(myReducer,{});
console.log(fullNameAndRole);

function myReducer(acc, curr) {
    let fullName = `${curr.firstName} ${curr.lastName}`;
    acc[fullName] = curr.role;
    return acc;
}

let fullName = {};
users.forEach(value => fullName[value.firstName + ' ' + value.lastName] = value.role);
// console.log(fullName);