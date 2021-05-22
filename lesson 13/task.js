function min(arr1, arr2) {
    let min = 100;
    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);
    
    for (let i of arr1) 
        // for (let k of arr2) 
        //     if (i == 0) min = arr1[i] - arr2[i];
        //     else if (min > arr1[i] - arr2[k]) min = arr1[i] - arr2[k];
        if (i > 1) {
            if (min > arr1[i] - arr2[i-1]) min = arr1[i] - arr2[i-1];
            else if (min > arr1[i] - arr2[i]) min = arr1[i] - arr2[i];
            else if (min > arr1[i] - arr2[i+1]) min = arr1[i] - arr2[i+1];
        }
    
    console.log(arr1, arr2);
    return min;
}

console.log(min([1,3,5,6,10], [2,13,11,4,7]));