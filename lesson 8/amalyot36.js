function amalyot(n,k) {
    sum = 0;
    for (i = 1; i <= n;i++) {
        sum += (i**k);
    }
    console.log(sum);
}
amalyot(5,3)