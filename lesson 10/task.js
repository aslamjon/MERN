function farmProblem(caws, pigs, chickens){
    return (caws * 4) + (pigs * 4) + (chickens * 2);
}
console.log(farmProblem(1,1,1));

arrow = (a, b, c) => (a * 4) + (b * 4) + (c * 2);
console.log(arrow(1,1,1));

max = (a,b,c) => {
    if (a > b && a > c) return a;
    else if (b > a && b > c) return b;
    else if (c > a && c > b) return c;
}
console.log(max(1,2,3));

calculateGrade = (arr) => {
    let sum = 0;
    for (item of arr) 
        sum += item;

    let center = sum / arr.length;
    if (center >= 80) return 'A';
    else if (60 <= center && center < 80) return 'B';
    else if (50 <= center && center < 60) return 'C';
    else if (40 <= center && center < 50) return 'D';
    return 'F';
}
scores = [60, 70, 80, 90, 65, 50]
console.log(calculateGrade(scores));

robot = (str) => {
    let x = 0;
    let y = 0;
    for (item of str) {
        if (item === 'U') y++;
        if (item === 'D') y--;
        if (item === 'L') x--;
        if (item === 'R') x++;
    }
    return x === 0 && y === 0;
}
console.log(robot('UDLURD'));

