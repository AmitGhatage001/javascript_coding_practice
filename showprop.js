const obj={
    name:'Amit',
    salary:27,
    motor:'shine',
    cc:'7'
};

console.log(showprop(obj));

function showprop(object){
    let ans=0;
    for(let prop in object){
        if(typeof object[prop]==='string')
            ans++;
    }
return ans;
}