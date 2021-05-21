function task(a, b, c){ 
    let temp = a;
    let temp2 = c;
    a = b;
    b = temp2;
    c = temp;
    
    return `${a}, ${b}, ${c}`;
}
console.log(task(5, 2, 1));