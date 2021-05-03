function teskari(word){
    let teskari = '';
    for (let k = String(word).length-1; k >=0; k--) teskari += String(word)[k];
    return `Input: ${word}, Output: ${teskari}`;
}

console.log(teskari(123));