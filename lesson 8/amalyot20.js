function factarila(n) {
    sum = 1;
    for (i = 1; i <= n; i++) {
        sum *= i;
    }
    return sum;
}
function amalyot(n) {
    sum = 0;
    for (i = 1; i <= n; i++) {
        sum += factarila(i);
    }
    console.log(sum);
}
amalyot(5);