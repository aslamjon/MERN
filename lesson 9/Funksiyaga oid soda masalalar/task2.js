function task(a, b, c){ 
    return `
    a: ${a**2}, ${a**3}, ${a**4}
    b: ${b**2}, ${b**3}, ${b**4}
    c: ${c**2}, ${c**3}, ${c**4}`; 
}
console.log(task(2,3,4));