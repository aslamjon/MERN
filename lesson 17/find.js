let arr = [45, 67, 34, 89];

const target = arr.find(elem => elem >= 75);
const findIndexx = arr.findIndex(elem => elem >= 50);
console.log(target);
console.log(findIndexx)

const exists = arr.includes(89, 2); // 89 ni qidir 2-indexdan boshlab
console.log(exists)
