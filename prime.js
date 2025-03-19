function prime(num){
// 2 to 9 factors
console.log(1);
for(let i=2;i<=num;i++){
    flag=0;
    for(let j=2;j<=9;j++){
        if(i%j===0 && i!==j)
            flag=1;
    }
    if(flag===0)
        console.log(i);
}

}

console.log(prime(20));