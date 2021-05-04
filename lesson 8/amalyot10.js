function amalyot(n) {
    let sum = false;
    for (i = 1; i < n; i ++) {
        (sum === false) ? sum = (i+1) : sum /= (i + 1);
    }
    console.log(sum);
}
amalyot(5)