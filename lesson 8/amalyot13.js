function amalyot(n) {
    let sum = 1;
    for (i = 1.1; i <= n; i += 0.1) {
        (Math.floor(i*10)%2 === 0) ? sum += Math.floor(i) : sum -= Math.floor(i);       
    }
    console.log(sum);
}
amalyot(5)