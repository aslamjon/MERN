toq = 0;
juft = 0;
for (i = 1; i <= 100; i++) {
    if ((i % 4 === 0) || (i % 6 === 0) || (i % 8 === 0)) console.log(i);
    if ((i % 4 === 0) && (i % 6 === 0)) console.log(`4 va 6 ga karrali`,i);
    if (i % 2 === 0) juft += i;
    else toq += i;
}
console.log(`toq sonlar yig'indisi: ${toq}
juft sonlar yig'indisi: ${juft}`);
console.log(`----------------------- Ex.2 ---------------------------`);
array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
sum = 0;
toq = 0;
juft = 0; 
for (i of array) {
    sum += i;
}
console.log('Massiv yig\'indisi:',sum);
for (i of array) {
    if (i % 2 === 0) juft += i;
    else toq += i;
}
console.log(`toq sonlar yig'indisi: ${toq}
juft sonlar yig'indisi: ${juft}`);
for (i of array) {
    if (i % 2 === 0) console.log('juft',i);
    else console.log('toq',i);
}
for (i in array) (i % 2 === 0) ? console.log("juft index",i) : console.log("toq index",i);

