num1 = 59;
num2 = 3;
sum = num1;
sub = num1;
div = num1;
product = num1;
exp = num1;
remainder = num1;

console.log(`
    ${sum += num2} = num1 + num2;
    ${sub -= num2} = num1 - num2;
    ${div /= num2} = num1 / num2;
    ${product *= num2} = num1 * num2;
    ${exp **= num2} = num1 ** num2;
    ${remainder %= num2} = num1 % num2;`);