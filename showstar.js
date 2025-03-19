function showstar(num){
    for(let i=1;i<=num;i++){
        let pattern='';
        for(let j=1;j<=i;j++){
            pattern += '*';
        }
    console.log(pattern);
    }
}

console.log(showstar(5));