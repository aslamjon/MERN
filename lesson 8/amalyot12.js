function amalyot(n) {
    let sum = 1;
    for (i = 1; i <= n; i += 0.1) {
        sum *= Math.floor(i);        
    }
    console.log(sum);
}
amalyot(5)