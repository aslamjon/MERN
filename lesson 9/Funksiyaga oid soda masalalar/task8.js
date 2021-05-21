function task(son, raqam){
    if (1 <= raqam && raqam <= 9) {
        son = (son * 10) + raqam;
    }
    return son; 
}
console.log(task(251,3));