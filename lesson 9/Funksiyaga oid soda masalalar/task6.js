function task(a, b, c) {
    let aCount = 0;
    let aSum = 0;

    let bCount = 0;
    let bSum = 0;

    let cCount = 0;
    let cSum = 0;

    let n;

    if (a >= b && a >= c) n = a;
    else if (b >= a && b >= c) n = b;
    else if (c >= a && c >= b) n = c;

    while (n > 0) {
        if (n === a) {
            aSum += a % 10; // last number
            n = Math.floor(n / 10);
            a = Math.floor(a / 10);
            aCount++;
            if (b > 0) {
                bSum += b % 10; // last number
                b = Math.floor(b / 10);
                bCount++;
            }
            if (c > 0) {
                cSum += c % 10; // last number
                c = Math.floor(c / 10);
                cCount++;
            }
        } else if (n === b) {
            bSum += b % 10; // last number
            b = Math.floor(b / 10);
            n = Math.floor(n / 10);
            bCount++;
            if (a > 0) {
                aSum += a % 10; // last number
                a = Math.floor(a / 10);
                aCount++;
            }
            if (c > 0) {
                cSum += c % 10; // last number
                c = Math.floor(c / 10);
                cCount++;
            }
        } else if (n === c) {
            cSum += c % 10; // last number
            c = Math.floor(c / 10);
            n = Math.floor(n / 10);
            cCount++;
            if (a > 0) {
                aSum += a % 10; // last number
                a = Math.floor(a / 10);
                aCount++;
            }
            if (c > 0) {
                bSum += b % 10; // last number
                b = Math.floor(b / 10);
                bCount++;
            }
        }
    }

    return `
    aCount = ${aCount}; aSum = ${aSum}
    bCount = ${bCount}; bSum = ${bSum}
    cCount = ${cCount}; cSum = ${cSum}
    `;
}
console.log(task(52,10,212)); 