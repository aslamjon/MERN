function task(a, b, c, d){
    
    return `
    A = ${a}; B = ${b}; C = ${c}; D = ${d}
    (A, B)  ${(a/2) + (b/2)}
    (A, C)  ${(a/2) + (c/2)}
    (A, D)  ${(a/2) + (d/2)}`; 
}
console.log(task(1, 10, 15, 20));