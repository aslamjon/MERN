function task(...nums){
    let max = nums[0];
    let min = nums[0];
    for (num of nums){
        if (num > max) max = num;
        if (num < min) min = num;
    }
    return `Max: ${max}; Min: ${min}`; 
}
console.log(task(4,5,6,1,2,3));