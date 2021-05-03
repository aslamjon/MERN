function unique(word){
    let isTrue;
    let isFalse;
    for (let i = 0; word.length > i; i++){
        if(word.length-1 !== i){
            for(let k = i+1; word.length > k; k++) {
                if (word[i] == word[k]) isTrue = false;
                else isFalse = true;
            }
        }
    }
    if(isTrue) return '=> ' + isTrue;
    return '=> ' + isFalse;
}
console.log(unique('asdfga'));