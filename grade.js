const arr=[70,70,71];

function calculate(arr){
sum=0;
    for(let val of arr){
        sum += val;
    }
    avg=sum/arr.length;

    if(avg<=70)
        return 'C';
    if(avg >70 && avg<=100)
        return 'A';
}

console.log(calculate(arr));