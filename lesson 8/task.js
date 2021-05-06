let num = 92857;

sum = '';
DefaultNum = num;
count = 0;
while(num > 0) {
    sum += num%10 //?
    num = Math.floor(num/10) //?
    count++;
}
console.log(`Input: ${DefaultNum} \nOutput: ${sum} \n${count} xonali son`);