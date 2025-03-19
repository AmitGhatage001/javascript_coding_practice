function greet(name, lastName){
console.log("Hello "+name+" "+lastName);
}

greet('Amit','Ghatage');
greet('John', 'Smith');

function square(number){
    return number*number;
}

console.log(square(2));

let points=99.99;
let value=points<100 ? 'Silver' : 'Gold' ;
console.log('Testing',value,'This is different','cool');

let userColor=undefined;
let defaultColor='black';
let selectedColor=userColor || defaultColor;
console.log(selectedColor);