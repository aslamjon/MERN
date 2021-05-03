function farq(n){
    multi = 0;
    plus = 0;
    for (i = 0; String(n).length > i;i++)
        if(i == 0) multi += String(n)[i], plus += Number(String(n)[i]);
        else multi *= String(n)[i], plus += Number(String(n)[i]);
    return `${multi} - ${plus} = ${multi-plus}`;
}
console.log(farq(234));