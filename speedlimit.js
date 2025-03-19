//70-75 ok 
// every 5 kmph 1 point 
// 180 and above "Liscense cancelled" above 12 points 

let ans = checkspeed(125);
console.log(ans);
function checkspeed(num){
num=Math.floor(num);
num=(num-70)/5;
if(num>=12)
    return 'Liscense suspended';
if(num<1)
return 'ok';
else
return Math.floor(num);
}