function signFunc(x){
    multi = 1;
    for (i of x) multi *= i;
    if (multi > 0) return 1;
    else if (multi < 0) return -1;
    return 0;
}
console.log(signFunc([-1,-2,-3,-4,3,2,1]));