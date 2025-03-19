//factory function 

function createCircle(radius){
    return{
    radius,
    draw(){
        console.log('Draww');
    }
};
return circle;
}

const circle=createCircle(1);
console.log(circle);
circle.draw();