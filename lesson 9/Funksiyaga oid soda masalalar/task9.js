function task(son, raqam){
    if (1 <= raqam && raqam <= 9) 
        son = raqam + '' + son;

    return son * 1; 
}
console.log(task(251,3));