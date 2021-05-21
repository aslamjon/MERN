let num = 123;

sum = '';
sum1 = 0;
DefaultNum = num;
count = 0;
while(num > 0) {
    sum += num%10 //?
    if (count % 2 !== 0) sum1 += num%10 * 10; //?
    else sum1 += num%10 //?
    num = Math.floor(num/10) //?
    count++;
}
console.log(`Input: ${DefaultNum} \nOutput: ${sum}, ${sum1} \n${count} xonali son`);