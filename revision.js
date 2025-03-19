// array
let arr =['name',123,12.34,undefined,null];

// object
let obj = {
    name:"Amit",
    salary:28000
};

//function
function changeData(name){
name=10;
console.log(name);
}

console.log(arr[0]);
console.log(arr[3]);
console.log(arr[4]);

console.log(obj.name);
console.log(obj.salary);

changeData(obj.name);

//For Loop
// 
// for(let i=1;i<=10;i++){
//     if(i%2!=0)
// console.log(i);
// }
let i=5;
while(i<10){
console.log(i);
i++;
}