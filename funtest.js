// function max(numOne,numTwo){
//     if(numOne>numTwo)
//         return numOne;
//     else
//     return numTwo;
// }

// let maximum=max(24,67);

// console.log(maximum);

function isLandScape(width,height){
    if(width>height)
        return "Landscape";
    return "Not Landscape";
}

let ans = isLandScape(32,32);
console.log(ans);