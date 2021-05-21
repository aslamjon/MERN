function task(a, b, c){ 
    let temp = c;
    let temp2 = b;
    b = a;
    c = temp2;
    a = temp;
    
    return `${a}, ${b}, ${c}`;
}
console.log(task(5, 2, 1));