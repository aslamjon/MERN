function palindrom(word){
    let teskari = '';
    for (let k = String(word).length-1; k >=0; k--) teskari += String(word)[k];
    if (String(word) == teskari) return `This text is Palindrom: ${word} <=|=> ${teskari}`;
    return `This text is not Palindrom: ${word} <=|=> ${teskari}`;
}

console.log(palindrom(12321));