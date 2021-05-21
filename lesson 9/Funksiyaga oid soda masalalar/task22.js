function task(a, b, amal){ 
    if (amal === 1) return a - b;
    if (amal === 2) return a * b;
    if (amal === 3) return a / b;
    return a + b; 
}
console.log(task(2, 3, 2));