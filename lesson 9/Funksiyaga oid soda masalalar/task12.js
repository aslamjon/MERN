function task(a, b, c){
    let max;
    let min;
    if (a > b && a > c) max = a;
    else if (c > a && c > b) max = c;
    else if (b > a && b > c) max = b;
    
    if (a < b && a < c) min = a;
    else if (b < a && b < c) min = b;
    else if (c < a && c < b) min = c;
    
    let swap;
    if (max === b) {
        if (a > c) swap = a;
        else swap = c;
        b = swap;
    }

    a = min;
    c = max;
    return `${a}, ${b}, ${c}`; 
}
console.log(task(5, 2, 1));