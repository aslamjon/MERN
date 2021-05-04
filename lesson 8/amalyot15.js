function amalyot(n,a) {
    let sum = 1;
    for (i = 1; i <= n; i++) {
        sum *= a;
    }
    console.log(sum**n);
}
amalyot(3,1.2)