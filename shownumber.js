function shownumber(num){
    let i=0;
    while(i<=num){
        if(i%2===0){
            console.log(i,"Even");
        }
        else{
            console.log(i,"Odd");
        }
        i++;
    }
}

shownumber(10);