console.log(`============================- Ex.1 -==================================`);
let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita cupiditate hic ipsam omnis voluptatum natus dolor obcaecati eos, impedit voluptatibus fugiat velit illo asperiores quas necessitatibus, quasi deleniti. Possimus voluptatibus voluptatum a tempore, unde vel laboriosam alias rerum. Ex corrupti dicta illo necessitatibus ratione quisquam nobis quidem tenetur vel cum!`;

let res = text.split(' ').filter(elem => elem.length >= 7).join(' ');
console.log(res);

// function filter (text) {
//     let result = ''
//     let count = 1;
//     let space = '';
//     for (const element of text) {
//         if (element !== ' ') space += element;
//         else if (element === ' ') {
//             if (space.length >= 7) {
//                 result += space + ' ';
//                 count++;
//             }
//             space = '';
//         }
//     }
//     return `Find Count: ${count};
// Text: ${result}`;
// }
// console.log(filter(text));
console.log(`============================- Ex.2 -==================================`);
let word = 'Apple';
function withoutVowel (word) {
    for (const i in word) {
        if ((word[i] === 'A') || 
        (word[i] === 'a') || 
        (word[i] === 'u') || 
        (word[i] === 'U') || 
        (word[i] === 'e') || 
        (word[i] === 'E') || 
        (word[i] === 'o') || 
        (word[i] === 'O') || 
        (word[i] === 'i') || 
        (word[i] === 'I')) word = word.removeCharAt(i);
        
    }
    return word;
}
String.prototype.removeCharAt = function (i) {
    var tmp = this.split(''); // convert to an array
    tmp.splice(i , 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
}
console.log(withoutVowel(word));

console.log(`============================- Ex.3 -==================================`);
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let divisibleByThree = arr.filter(elem => elem % 3 === 0);
console.log(divisibleByThree);
console.log(`============================- Ex.4 -==================================`);
// for (let i = 1; i <= 50; i++) {
//     if (i > arr[arr.length - 1]) arr.push(i);
// }
// let tub = arr.filter(elem => (elem / elem) === 0);
// console.log(tub);