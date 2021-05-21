function task(...nums){ 
    for (num of nums) {
        // first way
        let inverseNum = '';
        if (typeof num === 'number') {
            for (let i = String(num).length - 1; i >= 0; i--) {
                inverseNum += String(num)[i];
            }
        }
        console.log(inverseNum);

        // Second way
        let i = 1;
        let numX = 0;
        let numY = 0;
        while (Math.floor(num/i) >= 1) {
            numY = parseInt(num / i) % 10;
            numX = (numX * 10) + numY;
            i *= 10;
        }
        console.log(numX);
    }
}
task(25,512)