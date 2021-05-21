 let i = 0;
        let numX = 0;
        let numY = 0;
        while (Math.floor(num/i) >= 1) {
            numY = parseInt(num / i) % 10;
            numX = (numX * 10) + numY;
            i *= 10;
        }
        console.log(numX);