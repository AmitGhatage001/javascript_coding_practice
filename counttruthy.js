function count(arr){
    count=0;
    for(let i of arr){
        if(i)
        count++;
    }
    return count;
}

arr=[12,null,undefined,76,'',NaN,65,23];

console.log(count(arr));