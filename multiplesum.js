function multiplesum(num){
    let i=1;
    let sum=0;
    while(i<=num){
        if(i%3===0 || i%5===0)
            sum=sum+i;
        i++;
    }
    return sum;
}

console.log(multiplesum(10));