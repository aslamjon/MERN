function amalyot(n) {
    let sum = false;
    for (i = 1; i < n; i ++) {
        (sum === false) ? sum = (n**2) : sum += ((n + i)**2);
    }
    console.log(sum);
}
amalyot(5)