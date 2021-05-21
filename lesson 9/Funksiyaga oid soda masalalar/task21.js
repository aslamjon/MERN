function task(a, b){
    sum = 0;
    if (a > b) return 0;
    else {
        for (i = a; i <= b; i++) {
            sum += i;
        }
    }
    return sum; 
}
console.log(task(1,3));