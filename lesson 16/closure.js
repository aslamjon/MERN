function grandpa() {
    let grandpa = "grandpa";
    let count = 1;
    return function () {
        let father = 'father';
        return function () {
            let son = 'son';
            count++;
            return `${grandpa} > ${father} > ${son} ${count}`;
        }
    }
}
const grandPa = grandpa();
const father = grandPa();
console.log(father());
console.log(father());