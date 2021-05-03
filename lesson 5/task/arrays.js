numsArray = [0,1,2,3,4,5,6,7,8,9,10];
for (i = 1; numsArray.length-1 > i; i++) if (i % 2 == 0) console.log(numsArray[i]);

console.log(typeof numsArray.toString(), numsArray.toString());
console.log(numsArray.join('$'));
numsArray.push(11,12,13,14,15,16,17,18)
console.log(numsArray);
numsArray.splice(15,1)
console.log(numsArray);
numsArray.unshift(21,22,23,24,25,26,27,27,29,30)
// console.log(numsArray);
numsArray.splice(6,1)

numsArray.splice(23,0,5)
numsArray.splice(34,0,6)
numsArray.splice(45,0,7)
console.log(numsArray);

newArray = ['Hello','Aslamjon']
mergedArray = newArray.concat(numsArray);
console.log(numsArray.reverse());
console.log(numsArray.length);