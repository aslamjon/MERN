stringsArray = ['apple','peach','google','dell','Linux',1,5,'intel',true]
for (i in stringsArray) if ((i % 2 == 0) && (i > 0) && (typeof stringsArray[i] == 'string')) console.log(stringsArray[i],i);

console.log(stringsArray.toString());
console.log(stringsArray.join('+'));

for (i in stringsArray) if(i < 10) stringsArray.push(i);
console.log(stringsArray);
stringsArray.splice(13,1)
stringsArray.unshift('one','two','three','four','five')
console.log(stringsArray);
for (i = 0; i < 5; i++) stringsArray.shift()
console.log(stringsArray);
stringsArray.splice(3,1,'beans')
stringsArray.splice(4,1,'lentils')
stringsArray.splice(5,1,'corn')
console.log(stringsArray);
newArray = ['sdfs',false,'string']
mergedArray = stringsArray.concat(newArray)
console.log(stringsArray.reverse());
console.log(stringsArray.length);