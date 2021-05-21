function task(a, b, c, d){ 
    swap1 = a;
    a = b;
    b = swap1;

    swap1 = c;
    c = d;
    d = swap1;


    return `a: ${a}; b: ${b}; c: ${c}; d: ${d}`; 
}
console.log(task(2, 3, 5, 8));