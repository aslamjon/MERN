function unique(word) {
    let inc = word.length;
    for (let i = 0; word.length > i; i++) 
        if (word.length - 1 !== i) {
            if (word[i] == word[inc]) return '=> ' + false;
            inc--;
        }
    return '=> ' + true;
}
console.log(unique('asdge'));