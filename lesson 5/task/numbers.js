str1 = "123" 
str2 = "456"
str3 = "789"
str4 = "101112"
str5 = "131415"
list = [str1,str2,str3,str4,str5]
for (i = 0; i < list.length;i++) console.log(`Number(): ${Number(list[i])}  |  parseInt(): ${parseInt(list[i])}`);

num1 = 111 
num2 = 222
num3 = 333
num4 = 444
num5 = 555
listN = [num1,num2,num3,num4,num5]
console.log('\n');
for (i = 0; i < list.length;i++) console.log(`String(): ${String(listN[i])}  |  ${listN[i]}.toString(): ${listN[i].toString()}`);

fixed = [1.456, 56.6784, 3.568, 12.3333333, 9.9]
for (i of fixed) console.log(`${i.toFixed(0)}`);