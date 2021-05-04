let num = 987;
let first =  Math.floor(num / 100) //?
let second = Math.floor(((num / 100) - first) * 10) //?
let min = '' + first + second; //?
let third = Math.round(((num / 10) - min) * 10) //?

console.log(`${third}${second}${first}`);
